// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'archive_schema.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$Ref _$$RefFromJson(Map<String, dynamic> json) => _$Ref(
      json['name'] as String,
      $type: json['runtimeType'] as String?,
    );

Map<String, dynamic> _$$RefToJson(_$Ref instance) => <String, dynamic>{
      'name': instance.name,
      'runtimeType': instance.$type,
    };

_$Union _$$UnionFromJson(Map<String, dynamic> json) => _$Union(
      (json['names'] as List<dynamic>).map((e) => e as String).toList(),
      key: json['key'] as String? ?? 'type',
      $type: json['runtimeType'] as String?,
    );

Map<String, dynamic> _$$UnionToJson(_$Union instance) => <String, dynamic>{
      'names': instance.names,
      'key': instance.key,
      'runtimeType': instance.$type,
    };

_$Entity _$$EntityFromJson(Map<String, dynamic> json) => _$Entity(
      json['name'] as String,
      (json['definition'] as Map<String, dynamic>).map(
        (k, e) =>
            MapEntry(k, IArchiveSchema.fromJson(e as Map<String, dynamic>)),
      ),
      key: json['key'] as String? ?? 'id',
      traverse: json['traverse'] as String? ?? '',
      $type: json['runtimeType'] as String?,
    );

Map<String, dynamic> _$$EntityToJson(_$Entity instance) => <String, dynamic>{
      'name': instance.name,
      'definition': instance.definition.map((k, e) => MapEntry(k, e.toJson())),
      'key': instance.key,
      'traverse': instance.traverse,
      'runtimeType': instance.$type,
    };

_$RefList _$$RefListFromJson(Map<String, dynamic> json) => _$RefList(
      json['name'] as String,
      $type: json['runtimeType'] as String?,
    );

Map<String, dynamic> _$$RefListToJson(_$RefList instance) => <String, dynamic>{
      'name': instance.name,
      'runtimeType': instance.$type,
    };

_$UnionList _$$UnionListFromJson(Map<String, dynamic> json) => _$UnionList(
      (json['names'] as List<dynamic>).map((e) => e as String).toList(),
      key: json['key'] as String? ?? 'type',
      $type: json['runtimeType'] as String?,
    );

Map<String, dynamic> _$$UnionListToJson(_$UnionList instance) =>
    <String, dynamic>{
      'names': instance.names,
      'key': instance.key,
      'runtimeType': instance.$type,
    };
