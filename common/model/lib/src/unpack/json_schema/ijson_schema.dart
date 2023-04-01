import 'package:json_annotation/json_annotation.dart';
import 'package:unself_model/unself_model.dart';

abstract class IJsonSchema {
  const IJsonSchema();

  static dynamic structFromJson(dynamic json) {
    if (json is Map<String, dynamic> &&
        json['runtimeType'] is String &&
        json['runtimeType'].startsWith('Json')) {
      return IJsonSchema.fromJson(json);
    }

    if (json is Map) {
      return json.map((k, v) => MapEntry(k, structFromJson(v)));
    }

    if (json is List) {
      return json.map((value) => structFromJson(value)).toList();
    }
    return json;
  }

  factory IJsonSchema.fromJson(Map<String, dynamic> json) {
    switch (json['runtimeType'].split('.').first) {
      case 'JsonSchema':
        return JsonSchema.fromJson(json);
      case 'JsonRef':
        return JsonRef.fromJson(json);
      case 'JsonRefList':
        return JsonRefList.fromJson(json);
      case 'JsonRefValue':
        return JsonRefValue.fromJson(json);

      default:
        throw CheckedFromJsonException(json, 'runtimeType', 'ISchema',
            'Invalid type "${json['runtimeType'].split('.').first}"!');
    }
  }

  Map<String, dynamic> toJson();
}

abstract class IJsonSchemaRef extends IJsonSchema {
  const IJsonSchemaRef();

  factory IJsonSchemaRef.fromJson(Map<String, dynamic> json) {
    switch (json['runtimeType'].split('.').first) {
      case 'JsonRef':
        return JsonRef.fromJson(json);
      case 'JsonRefList':
        return JsonRefList.fromJson(json);
      case 'JsonRefValue':
        return JsonRefValue.fromJson(json);

      default:
        throw CheckedFromJsonException(json, 'runtimeType', 'ISchema',
            'Invalid type "${json['runtimeType'].split('.').first}"!');
    }
  }
}

typedef DoCallback = dynamic Function(dynamic json, JsonRef schema);
typedef SchemaFinder = JsonSchema Function(String name);
typedef AccumulatorCallback = void Function(
  String name,
  String key,
  dynamic entity,
);
