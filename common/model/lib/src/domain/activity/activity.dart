// ignore_for_file: invalid_annotation_target

import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:unself_model/unself_model.dart';

part 'activity.freezed.dart';
part 'activity.g.dart';

/// {@template activity}
/// {@endtemplate}
@freezed
class Activity with _$Activity implements Edge {
  const Activity._();

  /// {@macro activity}
  const factory Activity({
    @JsonString() required String id,
    @JsonDateTime() required DateTime created,
    @JsonDateTime() required DateTime updated,
    required String archiveId,

    /// [accountId] is the source node.
    required String accountId,

    /// [appId] is the source node.
    required String appId,

    /// [timestamp] is the date and time of the [Activity] by the [App].
    @JsonDateTime() required DateTime timestamp,

    /// [name] is the name used by the [Activity] on the [App].
    required String name,

    /// [type] is the type of the [Activity] on the [App].
    required String type,

    /// [email] is the email used by the [Activity] on the [App].
    required String source,

    /// [extra] is a map of additional properties.
    @JsonExtra() @Default({}) Map<String, dynamic> extra,
  }) = _Activity;

  /// Creates a [Activity] from Json map
  factory Activity.fromJson(Map<String, dynamic> data) =>
      _$ActivityFromJson(data);

  @override
  final labels = const ['activity'];

  @override
  String get sourceId => accountId;

  @override
  String get targetId => appId;
}
