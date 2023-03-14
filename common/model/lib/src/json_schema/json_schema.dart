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
    String name,
    Map<String, IJsonSchema> definition, {
    @Default('id') String key,
  }) = Entity;

  @FreezedUnionValue('JsonSchema.struct')
  const factory JsonSchema.struct(
    String name,
    dynamic definition,
  ) = Struct;

  @FreezedUnionValue('JsonSchema.flat')
  const factory JsonSchema.flat(
    String name,
    Map<String, IJsonSchema> definition, {
    @Default('id') String key,
    @Default([]) List<String> entityPath,
    @Default([]) List<List<String>> includePath,
    @Default(true) bool addMissingKeys,
  }) = Flat;

  /// Creates a [JsonSchema] from Json map
  factory JsonSchema.fromJson(Map<String, dynamic> data) =>
      _$JsonSchemaFromJson(data);
}
