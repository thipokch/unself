// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'node_spec.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_NodeSpec _$$_NodeSpecFromJson(Map<String, dynamic> json) => _$_NodeSpec(
      id: json['id'] as String?,
      slugged: json['slugged'] as String?,
      name: json['name'] as String,
      description: json['description'] as String,
      jsonSpecs: (json['jsonSpecs'] as List<dynamic>)
          .map((e) => JsonSpec.fromJson(e as Map<String, dynamic>))
          .toList(),
    );

Map<String, dynamic> _$$_NodeSpecToJson(_$_NodeSpec instance) {
  final val = <String, dynamic>{};

  void writeNotNull(String key, dynamic value) {
    if (value != null) {
      val[key] = value;
    }
  }

  writeNotNull('id', instance.id);
  writeNotNull('slugged', instance.slugged);
  val['name'] = instance.name;
  val['description'] = instance.description;
  val['jsonSpecs'] = instance.jsonSpecs.map((e) => e.toJson()).toList();
  return val;
}
