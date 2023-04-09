// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'node.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_Node _$$_NodeFromJson(Map<String, dynamic> json) => _$_Node(
      id: json['id'] as String?,
      specSlug: json['specSlug'] as String,
      properties: json['properties'] == null
          ? const {}
          : const JsonEmptyMap().fromJson(json['properties'] as Map?),
    );

Map<String, dynamic> _$$_NodeToJson(_$_Node instance) {
  final val = <String, dynamic>{};

  void writeNotNull(String key, dynamic value) {
    if (value != null) {
      val[key] = value;
    }
  }

  writeNotNull('id', instance.id);
  val['specSlug'] = instance.specSlug;
  writeNotNull('properties', const JsonEmptyMap().toJson(instance.properties));
  return val;
}
