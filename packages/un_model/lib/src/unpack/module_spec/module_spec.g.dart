// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'module_spec.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$CustomModule _$$CustomModuleFromJson(Map<String, dynamic> json) =>
    _$CustomModule(
      id: json['id'] as String,
      name: json['name'] as String,
      fileMatcher: const PatternConverter()
          .fromJson(json['fileMatcher'] as Map<String, dynamic>),
      extract: ExtractSpec.fromJson(json['extract'] as Map<String, dynamic>),
      transform:
          TransformSpec.fromJson(json['transform'] as Map<String, dynamic>),
      load: LoadSpec.fromJson(json['load'] as Map<String, dynamic>),
      $type: json['runtimeType'] as String?,
    );

Map<String, dynamic> _$$CustomModuleToJson(_$CustomModule instance) =>
    <String, dynamic>{
      'id': instance.id,
      'name': instance.name,
      'fileMatcher': const PatternConverter().toJson(instance.fileMatcher),
      'extract': instance.extract.toJson(),
      'transform': instance.transform.toJson(),
      'load': instance.load.toJson(),
      'runtimeType': instance.$type,
    };

_$JsonModule _$$JsonModuleFromJson(Map<String, dynamic> json) => _$JsonModule(
      id: json['id'] as String,
      name: json['name'] as String,
      fileMatcher: const PatternConverter()
          .fromJson(json['fileMatcher'] as Map<String, dynamic>),
      schema: (json['schema'] as List<dynamic>)
          .map((e) => JsonSchema.fromJson(e as Map<String, dynamic>)),
      load: LoadSpec.fromJson(json['load'] as Map<String, dynamic>),
      $type: json['runtimeType'] as String?,
    );

Map<String, dynamic> _$$JsonModuleToJson(_$JsonModule instance) =>
    <String, dynamic>{
      'id': instance.id,
      'name': instance.name,
      'fileMatcher': const PatternConverter().toJson(instance.fileMatcher),
      'schema': instance.schema.map((e) => e.toJson()).toList(),
      'load': instance.load.toJson(),
      'runtimeType': instance.$type,
    };
