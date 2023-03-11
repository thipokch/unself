import 'package:json_annotation/json_annotation.dart';
import 'package:unself_model/unself_model.dart';

abstract class IArchiveSchema {
  const IArchiveSchema();

  factory IArchiveSchema.fromJson(Map<String, dynamic> json) {
    switch (json['runtimeType'].split('.').first) {
      case 'ArchiveSchema':
        return ArchiveSchema.fromJson(json);
      case 'ArchiveSchemaList':
        return ArchiveSchemaList.fromJson(json);

      default:
        throw CheckedFromJsonException(json, 'runtimeType', 'ISchema',
            'Invalid type "${json['runtimeType'].split('.').first}"!');
    }
  }

  Map<String, dynamic> toJson();
}
