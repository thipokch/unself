import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:unself_model/unself_model.dart';
import 'package:unself_monitoring/unself_monitoring.dart';
import 'package:unself_user/unself_user.dart';
part 'settings_appearance_event.dart';
part 'settings_appearance_state.dart';
part 'settings_appearance_bloc.freezed.dart';

typedef SettingsAppearanceBuilder
    = BlocBuilder<SettingsAppearanceBloc, SettingsAppearanceState>;
typedef SettingsAppearanceListener
    = BlocListener<SettingsAppearanceBloc, SettingsAppearanceState>;
typedef SettingsAppearanceSelector<T>
    = BlocSelector<SettingsAppearanceBloc, SettingsAppearanceState, T>;
typedef SettingsAppearanceConsumer
    = BlocConsumer<SettingsAppearanceBloc, SettingsAppearanceState>;

/// {@template settings_appearance_cubit}
/// [SettingsAppearanceBloc] description
/// {@endtemplate}
class SettingsAppearanceBloc
    extends Bloc<SettingsAppearanceEvent, SettingsAppearanceState> {
  /// {@macro settings_appearance_cubit}
  SettingsAppearanceBloc({
    required AnalyticService? analyticService,
    required UserService userService,
  })  : _analyticService = analyticService,
        _userRepository = userService,
        super(const _Initial()) {
    on<_SetThemeMode>(_onSetThemeMode);
    _subscription = userService.streamUser().listen(onSubscriptionData);
  }

  final AnalyticService? _analyticService;

  final UserService _userRepository;
  late final StreamSubscription<User> _subscription;

  void onSubscriptionData(User user) =>
      emit(SettingsAppearanceState(themeMode: user.themeMode));

  void _onSetThemeMode(
          _SetThemeMode event, Emitter<SettingsAppearanceState> emit) =>
      _userRepository.setThemeMode(event.themeMode);

  @override
  void onEvent(SettingsAppearanceEvent event) {
    event.mapOrNull(
        setThemeMode: (_) => _analyticService?.trackEvent("set_theme_mode"));
    super.onEvent(event);
  }

  @override
  Future<void> close() {
    _subscription.cancel();
    return super.close();
  }
}
