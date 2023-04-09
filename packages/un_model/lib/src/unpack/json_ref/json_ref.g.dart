// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'json_ref.dart';

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
