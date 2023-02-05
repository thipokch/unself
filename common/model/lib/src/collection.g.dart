// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'collection.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_Collection _$$_CollectionFromJson(Map<String, dynamic> json) =>
    _$_Collection(
      id: json['id'] as String,
      created: DateTime.parse(json['created'] as String),
      updated: DateTime.parse(json['updated'] as String),
      type: $enumDecode(_$CollectionTypeEnumMap, json['type']),
      name: json['name'] as String? ?? '',
      system: json['system'] as bool? ?? false,
      listRule: json['listRule'] as String?,
      viewRule: json['viewRule'] as String?,
      createRule: json['createRule'] as String?,
      updateRule: json['updateRule'] as String?,
      deleteRule: json['deleteRule'] as String?,
      extra: json['extra'] == null
          ? const {}
          : const JsonExtra().fromJson(json['extra'] as Map?),
    );

Map<String, dynamic> _$$_CollectionToJson(_$_Collection instance) {
  final val = <String, dynamic>{
    'id': instance.id,
    'created': instance.created.toIso8601String(),
    'updated': instance.updated.toIso8601String(),
    'type': _$CollectionTypeEnumMap[instance.type]!,
    'name': instance.name,
    'system': instance.system,
  };

  void writeNotNull(String key, dynamic value) {
    if (value != null) {
      val[key] = value;
    }
  }

  writeNotNull('listRule', instance.listRule);
  writeNotNull('viewRule', instance.viewRule);
  writeNotNull('createRule', instance.createRule);
  writeNotNull('updateRule', instance.updateRule);
  writeNotNull('deleteRule', instance.deleteRule);
  writeNotNull('extra', const JsonExtra().toJson(instance.extra));
  return val;
}

const _$CollectionTypeEnumMap = {
  CollectionType.node: 'node',
  CollectionType.edge: 'edge',
};
