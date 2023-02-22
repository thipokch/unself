import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:unself_model/unself_model.dart';

part 'mapping.freezed.dart';
part 'mapping.g.dart';

/// {@template mapping}
/// Mapping description
/// {@endtemplate}@freezed
@freezed
class Mapping with _$Mapping {
  /// {@macro mapping}
  const factory Mapping({
    /// [from] is the JSONpath to the property to map from.
    required String from,

    /// [to] is the JSONpath to the property to map to.
    required String to,

    // /// [transform] is a function that transforms the value from the [from] property to the [to] property.
    // String transform,

    /// [entries] is a list of [Mapping]s.
    @Default([]) List<Mapping> fields,
    @JsonExtra() @Default({}) Map<String, dynamic> options,

    /// [extra] is a map of additional properties.
    @JsonExtra() @Default({}) Map<String, dynamic> extra,
  }) = _Mapping;

  /// Creates a [Mapping] from Json map
  factory Mapping.fromJson(Map<String, dynamic> data) =>
      _$MappingFromJson(data);
}
