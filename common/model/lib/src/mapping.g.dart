// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'mapping.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_Mapping _$$_MappingFromJson(Map<String, dynamic> json) => _$_Mapping(
      id: json['id'] as String,
      created: DateTime.parse(json['created'] as String),
      updated: DateTime.parse(json['updated'] as String),
      app: App.fromJson(json['app'] as Map<String, dynamic>),
      version: const JsonVersion().fromJson(json['version'] as String),
      constraint:
          const JsonVersionConstraint().fromJson(json['constraint'] as String),
      entries: (json['entries'] as List<dynamic>)
          .map((e) => MappingEntry.fromJson(e as Map<String, dynamic>))
          .toList(),
      extra: json['extra'] == null
          ? const {}
          : const JsonExtra().fromJson(json['extra'] as Map?),
    );

Map<String, dynamic> _$$_MappingToJson(_$_Mapping instance) {
  final val = <String, dynamic>{
    'id': instance.id,
    'created': instance.created.toIso8601String(),
    'updated': instance.updated.toIso8601String(),
    'app': instance.app.toJson(),
    'version': const JsonVersion().toJson(instance.version),
    'constraint': const JsonVersionConstraint().toJson(instance.constraint),
    'entries': instance.entries.map((e) => e.toJson()).toList(),
  };

  void writeNotNull(String key, dynamic value) {
    if (value != null) {
      val[key] = value;
    }
  }

  writeNotNull('extra', const JsonExtra().toJson(instance.extra));
  return val;
}
