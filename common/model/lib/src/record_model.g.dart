// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'record_model.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_RecordModel _$$_RecordModelFromJson(Map<String, dynamic> json) =>
    _$_RecordModel(
      id: json['id'] as String? ?? '',
      created: json['created'] as String? ?? '',
      updated: json['updated'] as String? ?? '',
      collectionId: json['collectionId'] as String? ?? '',
      collectionName: json['collectionName'] as String? ?? '',
    );

Map<String, dynamic> _$$_RecordModelToJson(_$_RecordModel instance) =>
    <String, dynamic>{
      'id': instance.id,
      'created': instance.created,
      'updated': instance.updated,
      'collectionId': instance.collectionId,
      'collectionName': instance.collectionName,
    };
