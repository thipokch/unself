import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:unself_model/unself_model.dart';

part 'archive_format.freezed.dart';
part 'archive_format.g.dart';

/// {@template archive_format}
/// ArchiveFormat description
/// {@endtemplate}
@freezed
class ArchiveFormat with _$ArchiveFormat implements Base {
  /// {@macro archive_format}
  const factory ArchiveFormat({
    /// [id] is unself unique identifier for the ArchiveFormat.
    required String id,

    /// [created] is the date and time when the [ArchiveFormat] was created inside unself app.
    required DateTime created,

    /// [updated] is the date and time when the [ArchiveFormat] was last updated inside unself app.
    required DateTime updated,

    /// [appId] is the id of the [App] the [ArchiveFormat] is for.
    required String appId,

    /// [version] is the revision version of the [ArchiveFormat].
    /// See [Version] from pub_semver for more information.
    @JsonVersion() required Version version,

    /// [constraint] is the constraint version of the [App].
    /// See [VersionConstraint] from pub_semver for more information.
    ///
    /// [VersionConstraint.compatibleWith] is used to define the minimum version.
    @JsonVersionConstraint() required VersionConstraint constraint,

    /// [format] is the format of the [ArchiveFormat].
    required ArchiveFileFormat format,

    /// [entries] is a list of [ArchiveFormatEntry]s.
    required List<Mapping> mappings,

    /// [extra] is a map of additional properties.
    @JsonExtra() @Default({}) Map<String, dynamic> extra,
  }) = _ArchiveFormat;

  /// Creates a [ArchiveFormat] from Json map
  factory ArchiveFormat.fromJson(Map<String, dynamic> data) =>
      _$ArchiveFormatFromJson(data);
}

@JsonEnum()
enum ArchiveFileFormat {
  /// [ArchiveFileFormat.zipJson] is a zip file containing a json file.
  zipJson,

  /// [ArchiveFileFormat.json] is a single json file.
  json,

  /// [ArchiveFileFormat.html] is a single html file.
  html,
}
