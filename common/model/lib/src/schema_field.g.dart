// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'schema_field.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_SchemaField _$$_SchemaFieldFromJson(Map<String, dynamic> json) =>
    _$_SchemaField(
      id: json['id'] as String? ?? '',
      name: json['name'] as String? ?? '',
      type: json['type'] as String? ?? '',
      system: json['system'] as bool? ?? false,
      required: json['required'] as bool? ?? false,
      unique: json['unique'] as bool? ?? false,
      options: json['options'] as Map<String, dynamic>? ?? const {},
    );

Map<String, dynamic> _$$_SchemaFieldToJson(_$_SchemaField instance) =>
    <String, dynamic>{
      'id': instance.id,
      'name': instance.name,
      'type': instance.type,
      'system': instance.system,
      'required': instance.required,
      'unique': instance.unique,
      'options': instance.options,
    };
