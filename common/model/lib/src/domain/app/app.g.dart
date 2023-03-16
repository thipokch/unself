// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'app.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_App _$$_AppFromJson(Map<String, dynamic> json) => _$_App(
      id: const JsonString().fromJson(json['id']),
      created: const JsonDateTime().fromJson(json['created']),
      updated: const JsonDateTime().fromJson(json['updated']),
      name: json['name'] as String,
      extra: json['extra'] == null
          ? const {}
          : const JsonExtra().fromJson(json['extra'] as Map?),
    );

Map<String, dynamic> _$$_AppToJson(_$_App instance) {
  final val = <String, dynamic>{};

  void writeNotNull(String key, dynamic value) {
    if (value != null) {
      val[key] = value;
    }
  }

  writeNotNull('id', const JsonString().toJson(instance.id));
  writeNotNull('created', const JsonDateTime().toJson(instance.created));
  writeNotNull('updated', const JsonDateTime().toJson(instance.updated));
  val['name'] = instance.name;
  writeNotNull('extra', const JsonExtra().toJson(instance.extra));
  return val;
}
