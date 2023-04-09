// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'edge.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_Edge _$$_EdgeFromJson(Map<String, dynamic> json) => _$_Edge(
      id: json['id'] as String?,
      specSlug: json['specSlug'] as String,
      sourceId: json['sourceId'] as String?,
      targetId: json['targetId'] as String?,
      properties: json['properties'] == null
          ? const {}
          : const JsonEmptyMap().fromJson(json['properties'] as Map?),
    );

Map<String, dynamic> _$$_EdgeToJson(_$_Edge instance) {
  final val = <String, dynamic>{};

  void writeNotNull(String key, dynamic value) {
    if (value != null) {
      val[key] = value;
    }
  }

  writeNotNull('id', instance.id);
  val['specSlug'] = instance.specSlug;
  writeNotNull('sourceId', instance.sourceId);
  writeNotNull('targetId', instance.targetId);
  writeNotNull('properties', const JsonEmptyMap().toJson(instance.properties));
  return val;
}
