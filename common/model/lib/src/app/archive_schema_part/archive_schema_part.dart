import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:unself_model/unself_model.dart';

part 'archive_schema_part.freezed.dart';
part 'archive_schema_part.g.dart';

/// {@template archive_schema_part}
/// ArchiveSchemaPart description
/// {@endtemplate}
@freezed
class ArchiveSchemaPart with _$ArchiveSchemaPart {
  const ArchiveSchemaPart._();

  /// {@macro archive_schema_part}
  const factory ArchiveSchemaPart.meta(
    /// [extra] is a map of additional properties.
    @JsonExtra() Map<String, dynamic> meta,
  ) = MetaPart;

  /// {@macro archive_schema_part}
  const factory ArchiveSchemaPart.json({
    /// [id] is unself unique identifier for the ArchiveSchemaPart.
    required String id,

    /// [file] is path of the ArchiveSchemaPart.
    required String part,

    /// [schema] is a list of [JsonSchema]s.
    required List<JsonSchema> schema,

    /// [extra] is a map of additional properties.
    @JsonExtra() @Default({}) Map<String, dynamic> extra,
  }) = JsonPart;

  /// {@macro archive_schema_part}
  const factory ArchiveSchemaPart.zipJson({
    /// [id] is unself unique identifier for the ArchiveSchemaPart.
    required String id,

    /// [file] is path of the ArchiveSchemaPart.
    required String part,

    /// [schema] is a list of [JsonSchema]s.
    required List<JsonSchema> schema,

    /// [extra] is a map of additional properties.
    @JsonExtra() @Default({}) Map<String, dynamic> extra,
  }) = ZipJsonPart;

  ArchiveData read(Map<String, dynamic> json) {
    throw UnimplementedError();
  }

  /// Creates a [ArchiveSchemaPart] from Json map
  factory ArchiveSchemaPart.fromJson(Map<String, dynamic> data) =>
      _$ArchiveSchemaPartFromJson(data);
}
