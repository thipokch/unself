// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'source_spec.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_SourceSpec _$$_SourceSpecFromJson(Map<String, dynamic> json) =>
    _$_SourceSpec(
      id: json['id'] as String,
      name: json['name'] as String,
      fileSpec: FileSpec.fromJson(json['fileSpec'] as Map<String, dynamic>),
      retrieveSpec:
          RetrieveSpec.fromJson(json['retrieveSpec'] as Map<String, dynamic>),
      modules: (json['modules'] as List<dynamic>)
          .map((e) => ModuleSpec.fromJson(e as Map<String, dynamic>)),
    );

Map<String, dynamic> _$$_SourceSpecToJson(_$_SourceSpec instance) =>
    <String, dynamic>{
      'id': instance.id,
      'name': instance.name,
      'fileSpec': instance.fileSpec,
      'retrieveSpec': instance.retrieveSpec,
      'modules': instance.modules.toList(),
    };
