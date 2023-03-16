// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'archive_schema_part.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$JsonPart _$$JsonPartFromJson(Map<String, dynamic> json) => _$JsonPart(
      id: json['id'] as String,
      part: json['part'] as String,
      schema: (json['schema'] as List<dynamic>)
          .map((e) => JsonSchema.fromJson(e as Map<String, dynamic>))
          .toList(),
      extra: json['extra'] == null
          ? const {}
          : const JsonExtra().fromJson(json['extra'] as Map?),
      $type: json['runtimeType'] as String?,
    );

Map<String, dynamic> _$$JsonPartToJson(_$JsonPart instance) {
  final val = <String, dynamic>{
    'id': instance.id,
    'part': instance.part,
    'schema': instance.schema.map((e) => e.toJson()).toList(),
  };

  void writeNotNull(String key, dynamic value) {
    if (value != null) {
      val[key] = value;
    }
  }

  writeNotNull('extra', const JsonExtra().toJson(instance.extra));
  val['runtimeType'] = instance.$type;
  return val;
}

_$ZipJsonPart _$$ZipJsonPartFromJson(Map<String, dynamic> json) =>
    _$ZipJsonPart(
      id: json['id'] as String,
      part: json['part'] as String,
      schema: (json['schema'] as List<dynamic>)
          .map((e) => JsonSchema.fromJson(e as Map<String, dynamic>))
          .toList(),
      extra: json['extra'] == null
          ? const {}
          : const JsonExtra().fromJson(json['extra'] as Map?),
      $type: json['runtimeType'] as String?,
    );

Map<String, dynamic> _$$ZipJsonPartToJson(_$ZipJsonPart instance) {
  final val = <String, dynamic>{
    'id': instance.id,
    'part': instance.part,
    'schema': instance.schema.map((e) => e.toJson()).toList(),
  };

  void writeNotNull(String key, dynamic value) {
    if (value != null) {
      val[key] = value;
    }
  }

  writeNotNull('extra', const JsonExtra().toJson(instance.extra));
  val['runtimeType'] = instance.$type;
  return val;
}
