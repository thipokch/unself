// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'unpack.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_Unpack _$$_UnpackFromJson(Map<String, dynamic> json) => _$_Unpack(
      id: json['id'] as String? ?? '',
      name: json['name'] as String? ?? '',
      type: json['type'] as String? ?? '',
      options: json['options'] as Map<String, dynamic>? ?? const {},
    );

Map<String, dynamic> _$$_UnpackToJson(_$_Unpack instance) => <String, dynamic>{
      'id': instance.id,
      'name': instance.name,
      'type': instance.type,
      'options': instance.options,
    };
