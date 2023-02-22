// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'mapping.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_Mapping _$$_MappingFromJson(Map<String, dynamic> json) => _$_Mapping(
      from: json['from'] as String,
      to: json['to'] as String,
      fields: (json['fields'] as List<dynamic>?)
              ?.map((e) => Mapping.fromJson(e as Map<String, dynamic>))
              .toList() ??
          const [],
      options: json['options'] == null
          ? const {}
          : const JsonExtra().fromJson(json['options'] as Map?),
      extra: json['extra'] == null
          ? const {}
          : const JsonExtra().fromJson(json['extra'] as Map?),
    );

Map<String, dynamic> _$$_MappingToJson(_$_Mapping instance) {
  final val = <String, dynamic>{
    'from': instance.from,
    'to': instance.to,
    'fields': instance.fields.map((e) => e.toJson()).toList(),
  };

  void writeNotNull(String key, dynamic value) {
    if (value != null) {
      val[key] = value;
    }
  }

  writeNotNull('options', const JsonExtra().toJson(instance.options));
  writeNotNull('extra', const JsonExtra().toJson(instance.extra));
  return val;
}
