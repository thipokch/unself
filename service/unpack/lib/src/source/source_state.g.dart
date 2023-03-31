// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'source_state.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$SourceInitial _$$SourceInitialFromJson(Map<String, dynamic> json) =>
    _$SourceInitial(
      $type: json['runtimeType'] as String?,
    );

Map<String, dynamic> _$$SourceInitialToJson(_$SourceInitial instance) =>
    <String, dynamic>{
      'runtimeType': instance.$type,
    };

_$SourceConfigure _$$SourceConfigureFromJson(Map<String, dynamic> json) =>
    _$SourceConfigure(
      modules: (json['modules'] as List<dynamic>)
          .map((e) => ModuleSpec.fromJson(e as Map<String, dynamic>)),
      $type: json['runtimeType'] as String?,
    );

Map<String, dynamic> _$$SourceConfigureToJson(_$SourceConfigure instance) =>
    <String, dynamic>{
      'modules': instance.modules.toList(),
      'runtimeType': instance.$type,
    };

_$SourceRetrieve _$$SourceRetrieveFromJson(Map<String, dynamic> json) =>
    _$SourceRetrieve(
      file: const XFileConverter().fromJson(json['file'] as String),
      $type: json['runtimeType'] as String?,
    );

Map<String, dynamic> _$$SourceRetrieveToJson(_$SourceRetrieve instance) =>
    <String, dynamic>{
      'file': const XFileConverter().toJson(instance.file),
      'runtimeType': instance.$type,
    };

_$SourcePrepare _$$SourcePrepareFromJson(Map<String, dynamic> json) =>
    _$SourcePrepare(
      fileBytes: (json['fileBytes'] as Map<String, dynamic>).map(
        (k, e) => MapEntry(k, (e as List<dynamic>).map((e) => e as int)),
      ),
      $type: json['runtimeType'] as String?,
    );

Map<String, dynamic> _$$SourcePrepareToJson(_$SourcePrepare instance) =>
    <String, dynamic>{
      'fileBytes': instance.fileBytes.map((k, e) => MapEntry(k, e.toList())),
      'runtimeType': instance.$type,
    };

_$SourceProcess _$$SourceProcessFromJson(Map<String, dynamic> json) =>
    _$SourceProcess(
      $type: json['runtimeType'] as String?,
    );

Map<String, dynamic> _$$SourceProcessToJson(_$SourceProcess instance) =>
    <String, dynamic>{
      'runtimeType': instance.$type,
    };

_$SourceComplete _$$SourceCompleteFromJson(Map<String, dynamic> json) =>
    _$SourceComplete(
      $type: json['runtimeType'] as String?,
    );

Map<String, dynamic> _$$SourceCompleteToJson(_$SourceComplete instance) =>
    <String, dynamic>{
      'runtimeType': instance.$type,
    };

_$SourceError _$$SourceErrorFromJson(Map<String, dynamic> json) =>
    _$SourceError(
      $type: json['runtimeType'] as String?,
    );

Map<String, dynamic> _$$SourceErrorToJson(_$SourceError instance) =>
    <String, dynamic>{
      'runtimeType': instance.$type,
    };
