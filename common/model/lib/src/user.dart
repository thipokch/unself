import 'package:flutter/material.dart';
import 'package:freezed_annotation/freezed_annotation.dart';

import '../unself_model.dart';

part 'user.freezed.dart';
part 'user.g.dart';

/// {@template user}
/// User description
/// {@endtemplate}
@freezed
class User with _$User {
  /// {@macro user}
  const factory User({
    /// [themeMode] is the current theme mode set by the user.
    required ThemeMode themeMode,

    /// [extra] is a map of additional properties.
    @JsonExtra() @Default({}) Map<String, dynamic> extra,
  }) = _User;

  /// Creates a User from Json map
  factory User.fromJson(Map<String, dynamic> data) => _$UserFromJson(data);
}
