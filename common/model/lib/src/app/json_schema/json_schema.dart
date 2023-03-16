import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:unself_model/unself_model.dart';

export 'ijson_schema.dart';

part 'json_schema.freezed.dart';
part 'json_schema.g.dart';

/// {@template json_schema}
/// JsonSchema description
/// {@endtemplate}
@freezed
class JsonSchema with _$JsonSchema implements IJsonSchema {
  const JsonSchema._();

  @FreezedUnionValue('JsonSchema.entity')
  const factory JsonSchema.entity(
    String name, {
    @Default({}) Map<String, IJsonSchema> definition,
    @Default('id') String key,
    @Default({}) Map<String, String> fieldMap,

    /// [extra] is a map of additional properties.
    @JsonExtra() @Default({}) Map<String, dynamic> extra,
  }) = Entity;

  @FreezedUnionValue('JsonSchema.flat')
  const factory JsonSchema.flat(
    String name, {
    @Default({}) Map<String, IJsonSchema> definition,
    @Default('id') String key,
    @Default([]) List<String> entityPath,
    @Default([]) List<List<String>> includePath,
    @Default(true) bool addMissingKeys,
    @Default({}) Map<String, String> fieldMap,

    /// [extra] is a map of additional properties.
    @JsonExtra() @Default({}) Map<String, dynamic> extra,
  }) = Flat;

  @FreezedUnionValue('JsonSchema.struct')
  const factory JsonSchema.struct(
    String name,
    dynamic definition, {
    /// [extra] is a map of additional properties.
    @JsonExtra() @Default({}) Map<String, dynamic> extra,
  }) = Struct;

  /// Creates a [JsonSchema] from Json map
  factory JsonSchema.fromJson(Map<String, dynamic> data) =>
      _$JsonSchemaFromJson(data);
}

// extension on Entity {
//   Ref get ref => Ref(name);

//   Entity define(Map<String, IJsonSchema> definition) =>
//       copyWith(definition: definition);

//   Flat flatten({
//     Map<String, IJsonSchema> definition = const {},
//     String key = 'id',
//     List<String> entityPath = const [],
//     List<List<String>> includePath = const [],
//     bool addMissingKeys = true,
//     Map<String, String> fieldMap = const {},
//     Map<String, dynamic> extra = const {},
//   }) =>
//       Flat(
//         name,
//         definition: definition,
//         key: key,
//         entityPath: entityPath,
//         includePath: includePath,
//         addMissingKeys: addMissingKeys,
//         fieldMap: fieldMap,
//         extra: extra,
//       );
// }
