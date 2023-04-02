// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'unpack_state.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_UnpackState _$$_UnpackStateFromJson(Map<String, dynamic> json) =>
    _$_UnpackState(
      id: json['id'] as String?,
      specId: json['specId'] as String,
      step: $enumDecode(_$UnpackStepEnumMap, json['step']),
      selectedModules: (json['selectedModules'] as List<dynamic>?)
          ?.map((e) => ModuleSpec.fromJson(e as Map<String, dynamic>)),
      filePath: json['filePath'] as String?,
    );

Map<String, dynamic> _$$_UnpackStateToJson(_$_UnpackState instance) {
  final val = <String, dynamic>{};

  void writeNotNull(String key, dynamic value) {
    if (value != null) {
      val[key] = value;
    }
  }

  writeNotNull('id', instance.id);
  val['specId'] = instance.specId;
  val['step'] = _$UnpackStepEnumMap[instance.step]!;
  writeNotNull('selectedModules',
      instance.selectedModules?.map((e) => e.toJson()).toList());
  writeNotNull('filePath', instance.filePath);
  return val;
}

const _$UnpackStepEnumMap = {
  UnpackStep.initial: 'initial',
  UnpackStep.configure: 'configure',
  UnpackStep.retrieve: 'retrieve',
  UnpackStep.prepare: 'prepare',
  UnpackStep.process: 'process',
  UnpackStep.complete: 'complete',
  UnpackStep.error: 'error',
};
