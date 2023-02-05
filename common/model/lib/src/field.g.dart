// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'field.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_Field _$$_FieldFromJson(Map<String, dynamic> json) => _$_Field(
      id: json['id'] as String,
      created: DateTime.parse(json['created'] as String),
      updated: DateTime.parse(json['updated'] as String),
      type: $enumDecode(_$FieldTypeEnumMap, json['type']),
      name: json['name'] as String,
      system: json['system'] as bool,
      required: json['required'] as bool,
      unique: json['unique'] as bool,
      collection:
          Collection.fromJson(json['collection'] as Map<String, dynamic>),
      extra: json['extra'] == null
          ? const {}
          : const JsonExtra().fromJson(json['extra'] as Map?),
    );

Map<String, dynamic> _$$_FieldToJson(_$_Field instance) {
  final val = <String, dynamic>{
    'id': instance.id,
    'created': instance.created.toIso8601String(),
    'updated': instance.updated.toIso8601String(),
    'type': _$FieldTypeEnumMap[instance.type]!,
    'name': instance.name,
    'system': instance.system,
    'required': instance.required,
    'unique': instance.unique,
    'collection': instance.collection.toJson(),
  };

  void writeNotNull(String key, dynamic value) {
    if (value != null) {
      val[key] = value;
    }
  }

  writeNotNull('extra', const JsonExtra().toJson(instance.extra));
  return val;
}

const _$FieldTypeEnumMap = {
  FieldType.text: 'text',
  FieldType.number: 'number',
  FieldType.bool: 'bool',
  FieldType.email: 'email',
  FieldType.url: 'url',
  FieldType.date: 'date',
  FieldType.select: 'select',
  FieldType.file: 'file',
  FieldType.relation: 'relation',
};
