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
class Account with _$Account implements Node {
  const Account._();

  /// {@macro account}
  const factory Account({
    @JsonString() required String id,
    @JsonDateTime() required DateTime created,
    @JsonDateTime() required DateTime updated,
    required String archiveId,

    /// [name] is the name used by the [Account] on the [App].
    required String name,

    /// [app] is the [App] where the [Account] is registered.
    required String appId,

    /// [isOwner] is true if the [Account] is the owner of the [Archive].
    required bool isOwner,

    /// [emails] is the email used by the [Account] on the [App].
    @Default([]) List<String> emails,

    /// [extra] is a map of additional properties.
    @JsonExtra() @Default({}) Map<String, dynamic> extra,
  }) = _Account;

  /// Creates a [Account] from Json map
  factory Account.fromJson(Map<String, dynamic> data) =>
      _$AccountFromJson(data);

  @override
  final labels = const ['account'];

  // @override
  // String toString() => 'Account(id: $id, name: $name, app: ${app.id})';
}
