import 'package:built_collection/built_collection.dart';
import 'package:unself_model/unself_model.dart';

import 'package:unself_unpack/src/transform_json/transform_json.dart' as t;

class JsonNormalizer {
  factory JsonNormalizer(Iterable<JsonSchema> schema) => JsonNormalizer._({
        for (final entity in schema) entity.name: entity,
      });

  const JsonNormalizer._(
    Map<String, JsonSchema> schema,
  ) : _schema = schema;

  final Map<String, JsonSchema> _schema;

  JsonSchema _find(String name) {
    final entity = _schema[name];
    if (entity == null) {
      throw UnsupportedError('entity with name:$name not found');
    }
    return entity;
  }

  Map<String, Iterable> normalize(String entity, Map<String, dynamic> json) =>
      normalizeWith(_find(entity), json);

  Map<String, Iterable> normalizeWith(
    JsonSchema entity,
    Map<String, dynamic> json,
  ) {
    final result = <String, List>{};
    void accumulator(String name, dynamic key, dynamic entity) {
      result[name] ??= [];
      result[name]!.add(entity);
    }

    t.normalize(json, entity, accumulator, _find);

    return result;
  }

  Map<String, Iterable> normalizeUnique(
    JsonSchema entity,
    Map<String, dynamic> json,
  ) {
    final result = <String, Set>{};
    void accumulator(String name, dynamic key, dynamic entity) {
      result[name] ??= {};
      result[name]!.add(entity is Map ? BuiltMap.of(entity) : entity);
    }

    t.normalize(json, entity, accumulator, _find);

    return result;
  }

  void accumulate(
    String entity,
    Map<String, dynamic> json,
    AccumulatorCallback accumulator,
  ) =>
      t.normalize(json, _find(entity), accumulator, _find);
}
