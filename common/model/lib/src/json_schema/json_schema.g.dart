// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'json_schema.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$Entity _$$EntityFromJson(Map<String, dynamic> json) => _$Entity(
      json['name'] as String,
      (json['definition'] as Map<String, dynamic>).map(
        (k, e) => MapEntry(k, IJsonSchema.fromJson(e as Map<String, dynamic>)),
      ),
      key: json['key'] as String? ?? 'id',
      $type: json['runtimeType'] as String?,
    );

Map<String, dynamic> _$$EntityToJson(_$Entity instance) => <String, dynamic>{
      'name': instance.name,
      'definition': instance.definition.map((k, e) => MapEntry(k, e.toJson())),
      'key': instance.key,
      'runtimeType': instance.$type,
    };

_$Struct _$$StructFromJson(Map<String, dynamic> json) => _$Struct(
      json['name'] as String,
      json['definition'],
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
  val['runtimeType'] = instance.$type;
  return val;
}

_$Flat _$$FlatFromJson(Map<String, dynamic> json) => _$Flat(
      json['name'] as String,
      (json['definition'] as Map<String, dynamic>).map(
        (k, e) => MapEntry(k, IJsonSchema.fromJson(e as Map<String, dynamic>)),
      ),
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
      $type: json['runtimeType'] as String?,
    );

Map<String, dynamic> _$$FlatToJson(_$Flat instance) => <String, dynamic>{
      'name': instance.name,
      'definition': instance.definition.map((k, e) => MapEntry(k, e.toJson())),
      'key': instance.key,
      'entityPath': instance.entityPath,
      'includePath': instance.includePath,
      'addMissingKeys': instance.addMissingKeys,
      'runtimeType': instance.$type,
    };
