import 'package:freezed_annotation/freezed_annotation.dart';

part 'schema_field.freezed.dart';
part 'schema_field.g.dart';

@freezed
class SchemaField with _$SchemaField {
  const factory SchemaField({
    @Default('') String id,
    @Default('') String name,
    @Default('') String type,
    @Default(false) bool system,
    @Default(false) bool required,
    @Default(false) bool unique,
    @Default({}) Map<String, dynamic> options,
  }) = _SchemaField;

  factory SchemaField.fromJson(Map<String, dynamic> json) =>
      _$SchemaFieldFromJson(json);
}
