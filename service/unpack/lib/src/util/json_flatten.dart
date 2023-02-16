import 'package:collection/collection.dart';

Object? flatten(
  /// Json to flatten
  dynamic json,

  /// Prefix to add to the path of the nested keys
  String prefix,

  /// Separator used to join the path of the nested keys
  String joinSeparator,

  /// Level of nesting to flatten
  int maxLevel,
) {
  if (maxLevel == 0) return json;

  if (json is! Map && json is! List) return json; // Leaf

  assert(json is Map || json is List);

  final bool isMap = json is Map;
  final Iterable iterable = isMap ? json.entries : json;

  // Expand and recurse down the json tree

  final children = iterable.expandIndexed(
    (i, e) {
      final key = [
        if (prefix.isNotEmpty && isMap) prefix,
        if (isMap) e.key,
      ].join(joinSeparator);

      // Recurse and flatten the json tree

      final expanded = flatten(
        isMap ? e.value : e,
        key,
        joinSeparator,
        maxLevel - 1,
      );

      // List   >   List    =>  List<List<...>>
      // List   >   Map     =>  List<Map>
      // List   >   Object  =>  List<Object>
      //
      // List below does not get flattened, but it's children are
      if (!isMap) return [expanded];

      // Map    >   Map     =>  Map<String, Object>
      // Map    >   List    =>  List<Map>
      // Map    >   Object  =>  Map<String, Object>
      //
      // Flatten child into the current level.
      if (expanded is Map) {
        return expanded.entries.map((e) => MapEntry(e.key, e.value));
      }

      return [MapEntry(key, expanded)];
    },
  );

  if (isMap) return Map.fromEntries(children.cast<MapEntry>());

  return children.toList();
}
