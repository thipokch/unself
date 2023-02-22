// ignore_for_file: invalid_annotation_target

import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:unself_model/unself_model.dart';

part 'activity.freezed.dart';
part 'activity.g.dart';

/// {@template activity}
/// {@endtemplate}
@freezed
class Activity with _$Activity {
  const Activity._();

  /// {@macro activity}
  const factory Activity({
    /// [id] is unself unique identifier for the [Activity].
    @JsonString() String? id,

    /// [created] is the date and time when the [Activity] was created inside unself app.
    DateTime? created,

    /// [created] is the date and time when the [Activity] was created inside unself app.
    @JsonDateTime() DateTime? timestamp,

    /// [name] is the name used by the [Activity] on the [App].
    String? name,

    /// [type] is the type of the [Activity] on the [App].
    String? type,

    /// [email] is the email used by the [Activity] on the [App].
    String? source,

    /// [extra] is a map of additional properties.
    @JsonExtra() @Default({}) Map<String, dynamic> extra,
  }) = _Activity;

  /// Creates a [Activity] from Json map
  factory Activity.fromJson(Map<String, dynamic> data) =>
      _$ActivityFromJson(data);
}
