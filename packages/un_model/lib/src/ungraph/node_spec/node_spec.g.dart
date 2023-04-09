// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'node_spec.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_NodeSpec _$$_NodeSpecFromJson(Map<String, dynamic> json) => _$_NodeSpec(
      id: json['id'] as String?,
      slugged: json['slugged'] as String?,
      name: json['name'] as String,
      propSpecs: (json['propSpecs'] as List<dynamic>)
          .map((e) => PropSpec.fromJson(e as Map<String, dynamic>))
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
  val['propSpecs'] = instance.propSpecs.map((e) => e.toJson()).toList();
  return val;
}
