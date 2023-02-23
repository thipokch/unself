// ignore_for_file: invalid_annotation_target

import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:unself_model/unself_model.dart';

part 'archive.freezed.dart';
part 'archive.g.dart';

/// {@template archive}
/// [Archive] is a set of data user imported from other apps.
/// {@endtemplate}
@freezed
class Archive with _$Archive implements Base {
  /// {@macro archive}
  const factory Archive({
    /// [id] is unself unique identifier for the [Archive].
    required String id,

    /// [created] is the date and time when the [Archive] was created inside unself app.
    required DateTime created,

    /// [updated] is the date and time when the [Archive] was last updated inside unself app.
    required DateTime updated,

    /// [name] is the name of the [Archive].
    required String name,

    /// [account] is the owner of the [Archive] imported.
    required Account account,
    required String formatId,

    /// [extra] is a map of additional properties.
    @JsonExtra() @Default({}) Map<String, dynamic> extra,
  }) = _Archive;

  /// Creates a [Archive] from Json map
  factory Archive.fromJson(Map<String, dynamic> json) =>
      _$ArchiveFromJson(json);
}
