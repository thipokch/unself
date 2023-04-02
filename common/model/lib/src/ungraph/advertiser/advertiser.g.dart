// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'advertiser.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_Advertiser _$$_AdvertiserFromJson(Map<String, dynamic> json) =>
    _$_Advertiser(
      id: const JsonString().fromJson(json['id']),
      archiveId: json['archiveId'] as String,
      name: json['name'] as String,
      extra: json['extra'] == null
          ? const {}
          : const JsonExtra().fromJson(json['extra'] as Map?),
    );

Map<String, dynamic> _$$_AdvertiserToJson(_$_Advertiser instance) {
  final val = <String, dynamic>{};

  void writeNotNull(String key, dynamic value) {
    if (value != null) {
      val[key] = value;
    }
  }

  writeNotNull('id', const JsonString().toJson(instance.id));
  val['archiveId'] = instance.archiveId;
  val['name'] = instance.name;
  writeNotNull('extra', const JsonExtra().toJson(instance.extra));
  return val;
}
