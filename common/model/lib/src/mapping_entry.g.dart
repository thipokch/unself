// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'mapping_entry.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_MappingEntry _$$_MappingEntryFromJson(Map<String, dynamic> json) =>
    _$_MappingEntry(
      from: json['from'] as String,
      to: json['to'] as String,
      extra: json['extra'] == null
          ? const {}
          : const JsonExtra().fromJson(json['extra'] as Map?),
    );

Map<String, dynamic> _$$_MappingEntryToJson(_$_MappingEntry instance) {
  final val = <String, dynamic>{
    'from': instance.from,
    'to': instance.to,
  };

  void writeNotNull(String key, dynamic value) {
    if (value != null) {
      val[key] = value;
    }
  }

  writeNotNull('extra', const JsonExtra().toJson(instance.extra));
  return val;
}
