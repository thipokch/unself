// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'archive.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_Archive _$$_ArchiveFromJson(Map<String, dynamic> json) => _$_Archive(
      id: json['id'] as String,
      created: DateTime.parse(json['created'] as String),
      updated: DateTime.parse(json['updated'] as String),
      name: json['name'] as String,
      account: Account.fromJson(json['account'] as Map<String, dynamic>),
      formatId: json['formatId'] as String,
      extra: json['extra'] == null
          ? const {}
          : const JsonExtra().fromJson(json['extra'] as Map?),
    );

Map<String, dynamic> _$$_ArchiveToJson(_$_Archive instance) {
  final val = <String, dynamic>{
    'id': instance.id,
    'created': instance.created.toIso8601String(),
    'updated': instance.updated.toIso8601String(),
    'name': instance.name,
    'account': instance.account.toJson(),
    'formatId': instance.formatId,
  };

  void writeNotNull(String key, dynamic value) {
    if (value != null) {
      val[key] = value;
    }
  }

  writeNotNull('extra', const JsonExtra().toJson(instance.extra));
  return val;
}
