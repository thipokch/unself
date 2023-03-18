import 'package:collection/collection.dart';
import 'package:slugify/slugify.dart';
import 'package:unself_model/unself_model.dart';
import 'package:unself_unpack/unself_unpack.dart';

part 'normalize_ref.dart';

/// {@template normalize}
/// Normalize is a class that can be used to normalize a json object
/// into a normalized form that can be used by [Unself] app.
/// {@endtemplate}
class Normalize {
  /// {@macro normalize}
  Normalize([List<JsonSchema> schema = const []]) {
    addAll(schema);
  }

  final _schema = <String, JsonSchema>{};

  /// Adds an entity schema to the `Normalize` instance.
  void add(JsonSchema schema) => _schema[schema.name] = schema;

  /// Adds all the entities schema in the iterable to the `Normalize` instance.
  void addAll(Iterable<JsonSchema> entities) => entities.forEach(add);

  /// Removes all the entities schema from the `Normalize` instance.
  void clear() => _schema.clear();

  /// Finds an entity schema with the given name in the `Normalize` instance.
  ///
  /// Throws an [UnsupportedError] if no entity is found.
  JsonSchema _find(String name) {
    final entity = _schema[name];
    if (entity == null) {
      throw UnsupportedError('entity with name:$name not found');
    }
    return entity;
  }

  /// Normalizes the given JSON object using the specified schema name.
  ///
  /// Returns a map of normalized JSON objects, where each key corresponds to
  /// the name of an entity and the value is a list of normalized JSON objects
  /// for that entity.
  Map<String, List> normalize(String schema, Map<String, dynamic> json) =>
      normalizeWith(_find(schema), json);

  /// Normalizes the given JSON object using the specified schema object.
  ///
  /// Returns a map of normalized JSON objects, where each key corresponds to
  /// the name of an entity and the value is a list of normalized JSON objects
  /// for that entity.
  Map<String, List> normalizeWith(
    JsonSchema schema,
    Map<String, dynamic> json,
  ) {
    final result = <String, List>{};
    void accumulator(String name, dynamic key, dynamic entity) {
      result[name] ??= [];
      result[name]!.add(entity);
    }

    _normalize(json, schema, accumulator, _find);

    return result;
  }

  void accumulate(
    String schema,
    Map<String, dynamic> json,
    AccumulatorCallback accumulator,
  ) =>
      _normalize(json, _find(schema), accumulator, _find);
}

dynamic /* String / Int */ _normalize(
  Map<String, dynamic> json,
  JsonSchema schema,
  AccumulatorCallback accumulator,
  SchemaFinder find,
) {
  return schema.map(
    entity: (schema) {
      final result = <String, dynamic>{};
      // final id = json[schema.key];

      final resultSchema = schema.definition.entries
          .groupListsBy(
            (e) => e.value is JsonRefValue
                ? (e.value as JsonRefValue).name
                : e.key,
          )
          .map((key, value) => MapEntry(key, {
                for (var d in value) d.key: d.value,
              }));

      json.forEach((k, v) {
        final define = resultSchema[k];

        if (define != null && define.isNotEmpty) {
          define.forEach((target, schema) {
            if (schema is ValueFrom) {
              result[target] = v;
            } else if (schema is SlugFrom) {
              result[target] = slugify(v);
            } else if (schema is IJsonSchemaRef) {
              result[target] = _normalizeRef(
                v,
                schema,
                find,
                accumulator,
              );
            }
          });
        } else {
          result[k] = v;
        }
      });

      if (schema is SlugFrom) {
        print('schema is SlugFrom :: ${json[schema.key]}');
      }

      accumulator(schema.name, json[schema.key].toString(), result);
      return result[schema.key];
    },
    struct: (schema) {
      json.forEach((key, value) {
        final define = schema.definition[key];

        if (define is IJsonSchemaRef) {
          _normalizeRef(
            value,
            define,
            find,
            accumulator,
          );
        } else if (define is Map && value is Map<String, dynamic>) {
          _normalize(
            value,
            schema.copyWith(definition: define),
            accumulator,
            find,
          );
        } else if (define is List && value is List) {
          for (final value in value) {
            _normalize(
              value,
              schema.copyWith(definition: define.first),
              accumulator,
              find,
            );
          }
        }
      });

      return schema.name;
    },
    flat: (schema) {
      final flattened = flatten(json,
          recordPath: schema.entityPath,
          includePath: schema.includePath,
          addMissingKeys: schema.addMissingKeys);

      flattened.forEachIndexed((key, value) {
        _normalize(
          value,
          Entity(schema.name, definition: schema.definition),
          accumulator,
          find,
        );
      });
      return schema.name;
    },
  );
}
