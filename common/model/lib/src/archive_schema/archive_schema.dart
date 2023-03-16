import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:unself_model/unself_model.dart';

part 'archive_schema.freezed.dart';
part 'archive_schema.g.dart';

/// {@template archive_schema}
/// ArchiveSchema description
/// {@endtemplate}
@freezed
class ArchiveSchema with _$ArchiveSchema implements Base {
  const ArchiveSchema._();

  /// {@macro archive_schema}
  const factory ArchiveSchema({
    /// [id] is unself unique identifier for the ArchiveSchema.
    required String id,

    /// [created] is the date and time when the [ArchiveSchema] was created inside unself app.
    required DateTime created,

    /// [updated] is the date and time when the [ArchiveSchema] was last updated inside unself app.
    required DateTime updated,

    /// [appId] is the id of the [App] the [ArchiveSchema] is for.
    required String appId,

    /// [version] is the revision version of the [ArchiveSchema].
    /// See [Version] from pub_semver for more information.
    @JsonVersion() required Version version,

    /// [constraint] is the constraint version of the [App].
    /// See [VersionConstraint] from pub_semver for more information.
    ///
    /// [VersionConstraint.compatibleWith] is used to define the minimum version.
    @JsonVersionConstraint() required VersionConstraint constraint,

    /// [entries] is a list of [ArchiveSchemaEntry]s.
    required List<ArchiveSchemaPart> part,

    /// [extra] is a map of additional properties.
    @JsonExtra() @Default({}) Map<String, dynamic> extra,
  }) = _ArchiveSchema;

  ArchiveData read(Map<String, dynamic> json) {
    throw UnimplementedError();
  }

  /// Creates a [ArchiveSchema] from Json map
  factory ArchiveSchema.fromJson(Map<String, dynamic> data) =>
      _$ArchiveSchemaFromJson(data);
}
