import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:unself_model/unself_model.dart';

part 'mapping_entry.freezed.dart';
part 'mapping_entry.g.dart';

/// {@template mapping_entry}
/// MappingEntry description
/// {@endtemplate}@freezed
@freezed
class MappingEntry with _$MappingEntry {
  /// {@macro mapping_entry}
  const factory MappingEntry({
    /// [from] is the JSONpath to the property to map from.
    required String from,

    /// [to] is the JSONpath to the property to map to.
    required String to,

    // /// [transform] is a function that transforms the value from the [from] property to the [to] property.
    // String transform,

    /// [extra] is a map of additional properties.
    @JsonExtra() @Default({}) Map<String, dynamic> extra,
  }) = _MappingEntry;

  /// Creates a [MappingEntry] from Json map
  factory MappingEntry.fromJson(Map<String, dynamic> data) =>
      _$MappingEntryFromJson(data);
}
