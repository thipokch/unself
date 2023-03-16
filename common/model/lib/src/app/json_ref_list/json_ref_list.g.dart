// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'json_ref_list.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

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
