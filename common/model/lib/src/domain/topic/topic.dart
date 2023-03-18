// ignore_for_file: invalid_annotation_target

import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:unself_model/unself_model.dart';

part 'topic.freezed.dart';
part 'topic.g.dart';

/// {@template topic}
/// {@endtemplate}
@freezed
class Topic with _$Topic implements Node {
  const Topic._();

  /// {@macro topic}
  const factory Topic({
    @JsonString() required String id,
    // @JsonDateTime() required DateTime created,
    // @JsonDateTime() required DateTime updated,
    required String archiveId,

    /// [name] is the name used by the [Topic] on the [App].
    required String name,

    /// [email] is the email used by the [Topic] on the [App].
    // required String source,

    /// [extra] is a map of additional properties.
    @JsonExtra() @Default({}) Map<String, dynamic> extra,
  }) = _Topic;

  /// Creates a [Topic] from Json map
  factory Topic.fromJson(Map<String, dynamic> data) => _$TopicFromJson(data);

  @override
  final labels = const ['topic'];

  // @override
  // String toString() => 'Topic(id: $id, name: $name, app: ${app.id})';
}
