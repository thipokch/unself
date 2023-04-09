part of 'settings_appearance_bloc.dart';

/// {@template settings_appearance_state}
/// [SettingsAppearanceState] description
/// {@endtemplate}
@freezed
class SettingsAppearanceState with _$SettingsAppearanceState {
  const SettingsAppearanceState._();

  /// {@macro settings_appearance_state}
  const factory SettingsAppearanceState({
    required final ThemeMode themeMode,
  }) = _SettingsAppearanceState;

  const factory SettingsAppearanceState.initial() = _Initial;

  const factory SettingsAppearanceState.errored({
    required final Object error,
    required final StackTrace stackTrace,
  }) = _Errored;
}

extension Properties on SettingsAppearanceState {
  ThemeMode? get themeMode => mapOrNull((_) => _.themeMode);
}
