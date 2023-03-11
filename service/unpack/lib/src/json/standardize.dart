import 'package:unself_model/unself_model.dart';

/// {@template standardize}
/// Standardize is a class that can be used to standardize a json object
/// into a normalized form that can be used by [Unself] app.
/// {@endtemplate}
class Standardize {
  /// {@macro standardize}
  Standardize([List<Entity> entities = const []]) {
    entities.forEach(add);
  }

  final _entities = <String, Entity>{};

  /// Adds an entity schema to the `Standardize` instance.
  void add(Entity entity) => _entities[entity.name] = entity;

  /// Adds all the entities schema in the iterable to the `Standardize` instance.
  void addAll(Iterable<Entity> entities) => entities.forEach(add);

  /// Removes all the entities schema from the `Standardize` instance.
  void clear() => _entities.clear();

  /// Finds an entity schema with the given name in the `Standardize` instance.
  ///
  /// Throws an [UnsupportedError] if no entity is found.
  Entity _find(String name) {
    final entity = _entities[name];
    if (entity == null) {
      throw UnsupportedError('entity with name:$name not found');
    }
    return entity;
  }

  /// Standardizes the given JSON object using the specified schema.
  ///
  /// Returns a map of standardized JSON objects, where each key corresponds to
  /// the name of an entity and the value is a list of standardized JSON objects
  /// for that entity.
  Map<String, List> standardize(dynamic json, Entity entity) {
    final result = <String, List>{};
    void accumulator(String name, dynamic key, dynamic entity) {
      result[name] ??= [];
      result[name]!.add(entity);
    }

    // ignore: unused_local_variable
    final id = _standardize(json, entity, accumulator, _find);

    return result;
  }
}

// This function standardizes a given JSON object according to the given
// entity's definition. The result is collected in the accumulator callback
// and the function returns the entity's id as String.
String _standardize(
  Map<String, dynamic> json,
  Entity entity,
  AccumulatorCallback accumulator,
  SchemeFinder find,
) {
  final result = <String, dynamic>{};
  final definition = entity.definition;

  // Iterate over each key-value pair in the input JSON object and process it
  // based on whether it is defined in the entity's definition.
  for (final entry in json.entries) {
    final key = entry.key;
    final value = entry.value;

    final define = definition[key]!;

    if (define is ArchiveSchemaList) {
      // If it is an ArchiveSchemaList, apply the list-specific standardization
      // logic by recursively standardizing each element in the list and collecting
      // the resulting ids.
      final ids = define.doCallback(
        value,
        (json, nextScheme) {
          final entity = nextScheme.getEntity(json, find);
          return nextScheme.useId(
            _standardize(json, entity, accumulator, find),
            entity,
          );
        },
      );
      result[key] = ids;
    } else if (define is ArchiveSchema) {
      // If it is an ArchiveSchema, apply the schema-specific standardization
      // logic by recursively standardizing the value and collecting the resulting
      // id.
      final nextScheme = define.getEntity(value, find);
      final id = _standardize(value, nextScheme, accumulator, find);
      result[key] = define.useId(id, nextScheme);
    } else {
      // If it is not defined in the entity's definition, simply copy the value to
      // the result.
      result[key] = value;
    }
  }

  // Call the accumulator with the entity name, key, and the resulting map.
  accumulator(entity.name, json[entity.key], result);

  // Return the entity's id.
  return json[entity.key];
}
