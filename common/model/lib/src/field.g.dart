// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'field.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_Field _$$_FieldFromJson(Map<String, dynamic> json) => _$_Field(
      id: json['id'] as String? ?? '',
      name: json['name'] as String? ?? '',
      type: $enumDecodeNullable(_$FieldTypeEnumMap, json['type']) ??
          FieldType.text,
      system: json['system'] as bool? ?? false,
      required: json['required'] as bool? ?? false,
      unique: json['unique'] as bool? ?? false,
      options: json['options'] as Map<String, dynamic>? ?? const {},
    );

Map<String, dynamic> _$$_FieldToJson(_$_Field instance) => <String, dynamic>{
      'id': instance.id,
      'name': instance.name,
      'type': _$FieldTypeEnumMap[instance.type]!,
      'system': instance.system,
      'required': instance.required,
      'unique': instance.unique,
      'options': instance.options,
    };

const _$FieldTypeEnumMap = {
  FieldType.text: 'text',
  FieldType.number: 'number',
  FieldType.bool: 'bool',
  FieldType.email: 'email',
  FieldType.url: 'url',
  FieldType.date: 'date',
  FieldType.select: 'select',
  FieldType.file: 'file',
  FieldType.relation: 'relation',
};
