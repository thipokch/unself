import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:un_model/un_model.dart';
import 'package:un_user_repository/un_user_repository.dart';
import 'package:un_monitoring/un_monitoring.dart';
// import 'package:un_user/un_user.dart';

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
    required UserRepository userRepository,
  })  : _analyticService = analyticService,
        _userRepository = userRepository,
        super(const _Initial()) {
    on<_SetThemeMode>(_onSetThemeMode);
    _subscription = userRepository.streamUser().listen(onSubscriptionData);
  }

  final AnalyticService? _analyticService;

  final UserRepository _userRepository;
  late final StreamSubscription<Settings> _subscription;

  void onSubscriptionData(Settings user) =>
      // TODO: Reimplement logic
      // ignore: invalid_use_of_visible_for_testing_member
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
