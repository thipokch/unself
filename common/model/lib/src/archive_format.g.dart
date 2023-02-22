// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'archive_format.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_ArchiveFormat _$$_ArchiveFormatFromJson(Map<String, dynamic> json) =>
    _$_ArchiveFormat(
      id: json['id'] as String,
      created: DateTime.parse(json['created'] as String),
      updated: DateTime.parse(json['updated'] as String),
      app: App.fromJson(json['app'] as Map<String, dynamic>),
      version: const JsonVersion().fromJson(json['version'] as String),
      constraint:
          const JsonVersionConstraint().fromJson(json['constraint'] as String),
      format: $enumDecode(_$ArchiveFileFormatEnumMap, json['format']),
      mappings: (json['mappings'] as List<dynamic>)
          .map((e) => Mapping.fromJson(e as Map<String, dynamic>))
          .toList(),
      extra: json['extra'] == null
          ? const {}
          : const JsonExtra().fromJson(json['extra'] as Map?),
    );

Map<String, dynamic> _$$_ArchiveFormatToJson(_$_ArchiveFormat instance) {
  final val = <String, dynamic>{
    'id': instance.id,
    'created': instance.created.toIso8601String(),
    'updated': instance.updated.toIso8601String(),
    'app': instance.app.toJson(),
    'version': const JsonVersion().toJson(instance.version),
    'constraint': const JsonVersionConstraint().toJson(instance.constraint),
    'format': _$ArchiveFileFormatEnumMap[instance.format]!,
    'mappings': instance.mappings.map((e) => e.toJson()).toList(),
  };

  void writeNotNull(String key, dynamic value) {
    if (value != null) {
      val[key] = value;
    }
  }

  writeNotNull('extra', const JsonExtra().toJson(instance.extra));
  return val;
}

const _$ArchiveFileFormatEnumMap = {
  ArchiveFileFormat.zipJson: 'zipJson',
  ArchiveFileFormat.json: 'json',
  ArchiveFileFormat.html: 'html',
};
