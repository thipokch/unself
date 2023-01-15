// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'field.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_Field _$$_FieldFromJson(Map<String, dynamic> json) => _$_Field(
      id: json['id'] as String? ?? '',
      name: json['name'] as String? ?? '',
      type: json['type'] as String? ?? '',
      system: json['system'] as bool? ?? false,
      required: json['required'] as bool? ?? false,
      unique: json['unique'] as bool? ?? false,
      options: json['options'] as Map<String, dynamic>? ?? const {},
    );

Map<String, dynamic> _$$_FieldToJson(_$_Field instance) => <String, dynamic>{
      'id': instance.id,
      'name': instance.name,
      'type': instance.type,
      'system': instance.system,
      'required': instance.required,
      'unique': instance.unique,
      'options': instance.options,
    };
