// ignore_for_file: invalid_annotation_target

import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:unself_model/unself_model.dart';

part 'account.freezed.dart';
part 'account.g.dart';

/// {@template account}
/// [Account] is a user's and their acquaintances' identity on a [App].
/// Each person can have multiple [Account]s and on multiple [App]s.
/// {@endtemplate}
@freezed
class Account with _$Account implements Base {
  const Account._();

  /// {@macro account}
  const factory Account({
    /// [id] is unself unique identifier for the [Account].
    required String id,

    /// [created] is the date and time when the [Account] was created inside unself app.
    required DateTime created,

    /// [updated] is the date and time when the [Account] was last updated inside unself app.
    required DateTime updated,

    /// [name] is the name used by the [Account] on the [App].
    required String name,

    /// [email] is the email used by the [Account] on the [App].
    required String email,

    /// [app] is the [App] where the [Account] is registered.
    required App app,

    /// [extra] is a map of additional properties.
    @JsonExtra() @Default({}) Map<String, dynamic> extra,
  }) = _Account;

  /// Creates a [Account] from Json map
  factory Account.fromJson(Map<String, dynamic> data) =>
      _$AccountFromJson(data);

  // @override
  // String toString() => 'Account(id: $id, name: $name, app: ${app.id})';
}
