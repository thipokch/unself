// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'account.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_Account _$$_AccountFromJson(Map<String, dynamic> json) => _$_Account(
      id: const JsonString().fromJson(json['id']),
      archiveId: json['archiveId'] as String,
      name: json['name'] as String,
      appId: json['appId'] as String,
      isOwner: json['isOwner'] as bool,
      emails: (json['emails'] as List<dynamic>?)
              ?.map((e) => e as String)
              .toList() ??
          const [],
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
  val['archiveId'] = instance.archiveId;
  val['name'] = instance.name;
  val['appId'] = instance.appId;
  val['isOwner'] = instance.isOwner;
  val['emails'] = instance.emails;
  writeNotNull('extra', const JsonExtra().toJson(instance.extra));
  return val;
}
