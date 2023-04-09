part of 'settings_appearance_bloc.dart';

/// {@template settings_appearance_event}
/// Event added when some custom logic happens
/// {@endtemplate}
@freezed
class SettingsAppearanceEvent with _$SettingsAppearanceEvent {
  const SettingsAppearanceEvent._();

  const factory SettingsAppearanceEvent.setThemeMode({
    required ThemeMode themeMode,
  }) = _SetThemeMode;
}
