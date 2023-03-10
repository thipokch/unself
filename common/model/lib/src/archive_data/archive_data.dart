// ignore_for_file: invalid_annotation_target

import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:unself_model/unself_model.dart';

part 'archive_data.freezed.dart';
part 'archive_data.g.dart';

/// {@template archive_data}
/// [ArchiveData] is used to
/// {@endtemplate}
@freezed
class ArchiveData with _$ArchiveData {
  /// [fields] is a list of all the fields in the [Archive] class.
  static const Map<String, String> fieldMap = _$$_ArchiveFieldMap;

  /// {@macro archive_data}
  @JsonSerializable(createFieldMap: true)
  const factory ArchiveData({
    /// [id] is unself unique identifier for the [Archive].
    required String id,

    /// [formatId] is the id for the related [ArchiveFormat].
    required String archiveId,

    /// [formatId] is the id for the related [ArchiveFormat].
    required String formatId,

    // Models
    @Default([]) List<Account> accounts,
    @Default([]) List<App> apps,
    @Default([]) List<Topic> topics,
    @Default([]) List<Activity> activities,

    /// [extra] is a map of additional properties.
    @JsonExtra() @Default({}) Map<String, dynamic> extra,
  }) = _Archive;

  /// Creates a [Archive] from Json map
  factory ArchiveData.fromJson(Map<String, dynamic> json) =>
      _$ArchiveDataFromJson(json);
}
