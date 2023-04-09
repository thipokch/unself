// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'transform_spec.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$JsonTransformSpec _$$JsonTransformSpecFromJson(Map<String, dynamic> json) =>
    _$JsonTransformSpec(
      (json['schema'] as List<dynamic>)
          .map((e) => JsonSchema.fromJson(e as Map<String, dynamic>)),
    );

Map<String, dynamic> _$$JsonTransformSpecToJson(_$JsonTransformSpec instance) =>
    <String, dynamic>{
      'schema': instance.schema.map((e) => e.toJson()).toList(),
    };
