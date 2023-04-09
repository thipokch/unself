// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'unpack_spec.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_UnpackSpec _$$_UnpackSpecFromJson(Map<String, dynamic> json) =>
    _$_UnpackSpec(
      id: json['id'] as String?,
      name: json['name'] as String,
      fileSpec: FileSpec.fromJson(json['fileSpec'] as Map<String, dynamic>),
      retrieveSpec:
          RetrieveSpec.fromJson(json['retrieveSpec'] as Map<String, dynamic>),
      modules: (json['modules'] as List<dynamic>)
          .map((e) => ModuleSpec.fromJson(e as Map<String, dynamic>)),
    );

Map<String, dynamic> _$$_UnpackSpecToJson(_$_UnpackSpec instance) {
  final val = <String, dynamic>{};

  void writeNotNull(String key, dynamic value) {
    if (value != null) {
      val[key] = value;
    }
  }

  writeNotNull('id', instance.id);
  val['name'] = instance.name;
  val['fileSpec'] = instance.fileSpec.toJson();
  val['retrieveSpec'] = instance.retrieveSpec.toJson();
  val['modules'] = instance.modules.map((e) => e.toJson()).toList();
  return val;
}
