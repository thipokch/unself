import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:unself_model/unself_model.dart';

part 'mapping.freezed.dart';
part 'mapping.g.dart';

/// {@template mapping}
/// Mapping description
/// {@endtemplate}
@freezed
class Mapping with _$Mapping implements Base {
  /// {@macro mapping}
  const factory Mapping({
    /// [id] is unself unique identifier for the Mapping.
    required String id,

    /// [created] is the date and time when the [Mapping] was created inside unself app.
    required DateTime created,

    /// [updated] is the date and time when the [Mapping] was last updated inside unself app.
    required DateTime updated,

    /// [app] is the [App] the [Mapping] is for.
    required App app,

    /// [version] is the revision version of the [Mapping].
    /// See [Version] from pub_semver for more information.
    @JsonVersion() required Version version,

    /// [constraint] is the constraint version of the [App].
    /// See [VersionConstraint] from pub_semver for more information.
    ///
    /// [VersionConstraint.compatibleWith] is used to define the minimum version.
    @JsonVersionConstraint() required VersionConstraint constraint,

    /// [entries] is a list of [MappingEntry]s.
    required List<MappingEntry> entries,

    /// [extra] is a map of additional properties.
    @JsonExtra() @Default({}) Map<String, dynamic> extra,
  }) = _Mapping;

  /// Creates a [Mapping] from Json map
  factory Mapping.fromJson(Map<String, dynamic> data) =>
      _$MappingFromJson(data);
}
