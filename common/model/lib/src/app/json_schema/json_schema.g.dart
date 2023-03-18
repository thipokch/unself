// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'json_schema.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$Entity _$$EntityFromJson(Map<String, dynamic> json) => _$Entity(
      json['name'] as String,
      definition: (json['definition'] as Map<String, dynamic>?)?.map(
            (k, e) =>
                MapEntry(k, IJsonSchema.fromJson(e as Map<String, dynamic>)),
          ) ??
          const {},
      key: json['key'] as String? ?? 'id',
      extra: json['extra'] == null
          ? const {}
          : const JsonExtra().fromJson(json['extra'] as Map?),
      $type: json['runtimeType'] as String?,
    );

Map<String, dynamic> _$$EntityToJson(_$Entity instance) {
  final val = <String, dynamic>{
    'name': instance.name,
    'definition': instance.definition.map((k, e) => MapEntry(k, e.toJson())),
    'key': instance.key,
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

_$Flat _$$FlatFromJson(Map<String, dynamic> json) => _$Flat(
      json['name'] as String,
      definition: (json['definition'] as Map<String, dynamic>?)?.map(
            (k, e) =>
                MapEntry(k, IJsonSchema.fromJson(e as Map<String, dynamic>)),
          ) ??
          const {},
      key: json['key'] as String? ?? 'id',
      entityPath: (json['entityPath'] as List<dynamic>?)
              ?.map((e) => e as String)
              .toList() ??
          const [],
      includePath: (json['includePath'] as List<dynamic>?)
              ?.map(
                  (e) => (e as List<dynamic>).map((e) => e as String).toList())
              .toList() ??
          const [],
      addMissingKeys: json['addMissingKeys'] as bool? ?? true,
      extra: json['extra'] == null
          ? const {}
          : const JsonExtra().fromJson(json['extra'] as Map?),
      $type: json['runtimeType'] as String?,
    );

Map<String, dynamic> _$$FlatToJson(_$Flat instance) {
  final val = <String, dynamic>{
    'name': instance.name,
    'definition': instance.definition.map((k, e) => MapEntry(k, e.toJson())),
    'key': instance.key,
    'entityPath': instance.entityPath,
    'includePath': instance.includePath,
    'addMissingKeys': instance.addMissingKeys,
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

_$Struct _$$StructFromJson(Map<String, dynamic> json) => _$Struct(
      json['name'] as String,
      json['definition'],
      extra: json['extra'] == null
          ? const {}
          : const JsonExtra().fromJson(json['extra'] as Map?),
      $type: json['runtimeType'] as String?,
    );

Map<String, dynamic> _$$StructToJson(_$Struct instance) {
  final val = <String, dynamic>{
    'name': instance.name,
  };

  void writeNotNull(String key, dynamic value) {
    if (value != null) {
      val[key] = value;
    }
  }

  writeNotNull('definition', instance.definition);
  writeNotNull('extra', const JsonExtra().toJson(instance.extra));
  val['runtimeType'] = instance.$type;
  return val;
}
