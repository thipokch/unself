// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'activity.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_Activity _$$_ActivityFromJson(Map<String, dynamic> json) => _$_Activity(
      id: const JsonString().fromJson(json['id']),
      created: const JsonDateTime().fromJson(json['created']),
      updated: const JsonDateTime().fromJson(json['updated']),
      archiveId: json['archiveId'] as String,
      accountId: json['accountId'] as String,
      appId: json['appId'] as String,
      timestamp: const JsonDateTime().fromJson(json['timestamp']),
      name: json['name'] as String,
      type: json['type'] as String,
      source: json['source'] as String,
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

  writeNotNull('id', const JsonString().toJson(instance.id));
  writeNotNull('created', const JsonDateTime().toJson(instance.created));
  writeNotNull('updated', const JsonDateTime().toJson(instance.updated));
  val['archiveId'] = instance.archiveId;
  val['accountId'] = instance.accountId;
  val['appId'] = instance.appId;
  writeNotNull('timestamp', const JsonDateTime().toJson(instance.timestamp));
  val['name'] = instance.name;
  val['type'] = instance.type;
  val['source'] = instance.source;
  writeNotNull('extra', const JsonExtra().toJson(instance.extra));
  return val;
}
