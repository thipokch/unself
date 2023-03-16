// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'archive_schema.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_ArchiveSchema _$$_ArchiveSchemaFromJson(Map<String, dynamic> json) =>
    _$_ArchiveSchema(
      id: json['id'] as String,
      created: DateTime.parse(json['created'] as String),
      updated: DateTime.parse(json['updated'] as String),
      appId: json['appId'] as String,
      version: const JsonVersion().fromJson(json['version'] as String),
      constraint:
          const JsonVersionConstraint().fromJson(json['constraint'] as String),
      part: (json['part'] as List<dynamic>)
          .map((e) => ArchiveSchemaPart.fromJson(e as Map<String, dynamic>))
          .toList(),
      extra: json['extra'] == null
          ? const {}
          : const JsonExtra().fromJson(json['extra'] as Map?),
    );

Map<String, dynamic> _$$_ArchiveSchemaToJson(_$_ArchiveSchema instance) {
  final val = <String, dynamic>{
    'id': instance.id,
    'created': instance.created.toIso8601String(),
    'updated': instance.updated.toIso8601String(),
    'appId': instance.appId,
    'version': const JsonVersion().toJson(instance.version),
    'constraint': const JsonVersionConstraint().toJson(instance.constraint),
    'part': instance.part.map((e) => e.toJson()).toList(),
  };

  void writeNotNull(String key, dynamic value) {
    if (value != null) {
      val[key] = value;
    }
  }

  writeNotNull('extra', const JsonExtra().toJson(instance.extra));
  return val;
}
