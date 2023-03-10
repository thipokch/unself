import 'package:flutter/material.dart';
import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:unself_model/unself_model.dart';

part 'settings.freezed.dart';
part 'settings.g.dart';

/// {@template settings}
/// Settings description
/// {@endtemplate}
@freezed
class Settings with _$Settings {
  /// {@macro settings}
  const factory Settings({
    /// [themeMode] is the current theme mode set by the settings.
    required ThemeMode themeMode,

    /// [extra] is a map of additional properties.
    @JsonExtra() @Default({}) Map<String, dynamic> extra,
  }) = _Settings;

  /// Creates a Settings from Json map
  factory Settings.fromJson(Map<String, dynamic> data) =>
      _$SettingsFromJson(data);
}
