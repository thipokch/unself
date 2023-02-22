// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'activity.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_Activity _$$_ActivityFromJson(Map<String, dynamic> json) => _$_Activity(
      id: const JsonString().fromJson(json['id']),
      created: json['created'] == null
          ? null
          : DateTime.parse(json['created'] as String),
      timestamp: const JsonDateTime().fromJson(json['timestamp']),
      name: json['name'] as String?,
      type: json['type'] as String?,
      source: json['source'] as String?,
      extra: json['extra'] == null
          ? const {}
          : const JsonExtra().fromJson(json['extra'] as Map?),
    );

Map<String, dynamic> _$$_ActivityToJson(_$_Activity instance) {
  final val = <String, dynamic>{};

  void writeNotNull(String key, dynamic value) {
    if (value != null) {
      val[key] = value;
    }
  }

  writeNotNull(
      'id',
      _$JsonConverterToJson<dynamic, String>(
          instance.id, const JsonString().toJson));
  writeNotNull('created', instance.created?.toIso8601String());
  writeNotNull(
      'timestamp',
      _$JsonConverterToJson<dynamic, DateTime>(
          instance.timestamp, const JsonDateTime().toJson));
  writeNotNull('name', instance.name);
  writeNotNull('type', instance.type);
  writeNotNull('source', instance.source);
  writeNotNull('extra', const JsonExtra().toJson(instance.extra));
  return val;
}

Json? _$JsonConverterToJson<Json, Value>(
  Value? value,
  Json? Function(Value value) toJson,
) =>
    value == null ? null : toJson(value);
