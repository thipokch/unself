// ignore_for_file: invalid_annotation_target

import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:unself_model/unself_model.dart';

part 'topic.freezed.dart';
part 'topic.g.dart';

/// {@template topic}
/// {@endtemplate}
@freezed
class Topic with _$Topic {
  const Topic._();

  /// {@macro topic}
  const factory Topic({
    /// [id] is unself unique identifier for the [Topic].
    String? id,

    /// [created] is the date and time when the [Topic] was created inside unself app.
    DateTime? created,

    /// [name] is the name used by the [Topic] on the [App].
    String? name,

    /// [email] is the email used by the [Topic] on the [App].
    String? source,

    /// [extra] is a map of additional properties.
    @JsonExtra() @Default({}) Map<String, dynamic> extra,
  }) = _Topic;

  /// Creates a [Topic] from Json map
  factory Topic.fromJson(Map<String, dynamic> data) => _$TopicFromJson(data);

  // @override
  // String toString() => 'Topic(id: $id, name: $name, app: ${app.id})';
}
