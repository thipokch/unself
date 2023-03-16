// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'topic.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_Topic _$$_TopicFromJson(Map<String, dynamic> json) => _$_Topic(
      id: const JsonString().fromJson(json['id']),
      created: const JsonDateTime().fromJson(json['created']),
      updated: const JsonDateTime().fromJson(json['updated']),
      archiveId: json['archiveId'] as String,
      name: json['name'] as String,
      extra: json['extra'] == null
          ? const {}
          : const JsonExtra().fromJson(json['extra'] as Map?),
    );

Map<String, dynamic> _$$_TopicToJson(_$_Topic instance) {
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
  val['name'] = instance.name;
  writeNotNull('extra', const JsonExtra().toJson(instance.extra));
  return val;
}
