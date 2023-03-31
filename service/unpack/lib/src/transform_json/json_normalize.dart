import 'package:collection/collection.dart';
import 'package:slugify/slugify.dart';
import 'package:unself_model/unself_model.dart';

import 'json_flatten.dart';

dynamic /* String / Int */ normalize(
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
              result[target] = normalizeRef(
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

      accumulator(schema.name, json[schema.key].toString(), result);
      return result[schema.key];
    },
    struct: (schema) {
      json.forEach((key, value) {
        final define = schema.definition[key];

        if (define is IJsonSchemaRef) {
          normalizeRef(
            value,
            define,
            find,
            accumulator,
          );
        } else if (define is Map && value is Map<String, dynamic>) {
          normalize(
            value,
            schema.copyWith(definition: define),
            accumulator,
            find,
          );
        } else if (define is List && value is List) {
          for (final value in value) {
            normalize(
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
        normalize(
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

dynamic /* List<String> / String */ normalizeRef(
  dynamic json,
  IJsonSchemaRef? define,
  SchemaFinder find,
  AccumulatorCallback accumulator,
) {
  if (define is JsonRefList && json is List) {
    final ids = define.doCallback(
      json,
      (nextJson, nextScheme) {
        final entity = nextScheme.getScheme(nextJson, find);
        final id = normalize(
          nextJson is Map<String, dynamic> ? nextJson : {'@value': nextJson},
          entity,
          accumulator,
          find,
        );
        return nextScheme.useId(id, entity);
      },
    );
    return ids;
  } else if (define is JsonRef) {
    final nextScheme = define.getScheme(json, find);
    final id = normalize(json is Map<String, dynamic> ? json : {'@value': json},
        nextScheme, accumulator, find);

    return define.useId(id, nextScheme);
  }

  throw UnimplementedError();
}
