part of 'normalize.dart';

dynamic /* List<String> / String */ _normalizeRef(
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
        return nextScheme.useId(
          _normalize(
            nextJson is Map<String, dynamic> ? nextJson : {'@value': nextJson},
            entity,
            accumulator,
            find,
          ),
          entity,
        );
      },
    );
    return ids;
  } else if (define is JsonRef) {
    final nextScheme = define.getScheme(json, find);
    final id = _normalize(
        json is Map<String, dynamic> ? json : {'@value': json},
        nextScheme,
        accumulator,
        find);

    return define.useId(id, nextScheme);
  } else if (define is JsonRefValue) {
    throw UnimplementedError();
  }
}
