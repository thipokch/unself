import 'package:freezed_annotation/freezed_annotation.dart';

part 'field.freezed.dart';
part 'field.g.dart';

@freezed
class Field with _$Field {
  const factory Field({
    @Default('') String id,
    @Default('') String name,
    @Default('') String type,
    @Default(false) bool system,
    @Default(false) bool required,
    @Default(false) bool unique,
    @Default({}) Map<String, dynamic> options,
  }) = _Field;

  factory Field.fromJson(Map<String, dynamic> json) => _$FieldFromJson(json);
}
