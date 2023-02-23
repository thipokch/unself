// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'account.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_Account _$$_AccountFromJson(Map<String, dynamic> json) => _$_Account(
      id: const JsonString().fromJson(json['id']),
      created: const JsonDateTime().fromJson(json['created']),
      updated: const JsonDateTime().fromJson(json['updated']),
      archiveId: json['archiveId'] as String,
      name: json['name'] as String,
      email: json['email'] as String,
      app: App.fromJson(json['app'] as Map<String, dynamic>),
      extra: json['extra'] == null
          ? const {}
          : const JsonExtra().fromJson(json['extra'] as Map?),
    );

Map<String, dynamic> _$$_AccountToJson(_$_Account instance) {
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
  val['email'] = instance.email;
  val['app'] = instance.app.toJson();
  writeNotNull('extra', const JsonExtra().toJson(instance.extra));
  return val;
}
