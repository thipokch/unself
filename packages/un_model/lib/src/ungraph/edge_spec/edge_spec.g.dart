// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'edge_spec.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_EdgeSpec _$$_EdgeSpecFromJson(Map<String, dynamic> json) => _$_EdgeSpec(
      id: json['id'] as String?,
      slugged: json['slugged'] as String?,
      name: json['name'] as String,
      type: json['type'] as String,
      sourceNodeSpecId: json['sourceNodeSpecId'] as String,
      targetNodeSpecId: json['targetNodeSpecId'] as String,
      propSpecs: (json['propSpecs'] as List<dynamic>)
          .map((e) => PropSpec.fromJson(e as Map<String, dynamic>))
          .toList(),
    );

Map<String, dynamic> _$$_EdgeSpecToJson(_$_EdgeSpec instance) {
  final val = <String, dynamic>{};

  void writeNotNull(String key, dynamic value) {
    if (value != null) {
      val[key] = value;
    }
  }

  writeNotNull('id', instance.id);
  writeNotNull('slugged', instance.slugged);
  val['name'] = instance.name;
  val['type'] = instance.type;
  val['sourceNodeSpecId'] = instance.sourceNodeSpecId;
  val['targetNodeSpecId'] = instance.targetNodeSpecId;
  val['propSpecs'] = instance.propSpecs.map((e) => e.toJson()).toList();
  return val;
}
