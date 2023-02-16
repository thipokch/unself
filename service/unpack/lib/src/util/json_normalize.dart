import 'package:collection/collection.dart';

/// [normalize] is similar to pandas' json_normalize function, this function
/// recursively flattens the nested JSON objects into a flat tabular list.
/// It returns [List<Map<String, dynamic>>] of the flattened records.
///
/// Simple example:
/// ```json
/// [
///   {"id": 1, "name": {"first": "Coleen", "last": "Volk"}},
///   {"name": {"given": "Mark", "family": "Regner"}},
///   {"id": 2, "name": "Faye Raker"},
/// ]
/// ```
///
/// ```dart
/// normalize(input);
/// ```
///
/// Results in:
/// ```json
/// [
///   {"id": 1, "name.first": "Coleen", "name.last": "Volk", "name.given": null, "name.family": null},
///   {"id": null, "name.first": null, "name.last": null, "name.given": "Mark", "name.family": "Regner"},
///   {"id": 2, "name": "Faye Raker", "name.first": null, "name.last": null, "name.given": null, "name.family": null},
/// ]
/// ```
///
/// Advanced example:
/// ```json
/// [
///    {
///        "state": "Florida",
///        "shortname": "FL",
///        "info": {"governor": "Rick Scott"},
///        "counties": [
///            {"name": "Dade", "population": 12345},
///            {"name": "Broward", "population": 40000},
///            {"name": "Palm Beach", "population": 60000},
///        ],
///    },
///    {
///        "state": "Ohio",
///        "shortname": "OH",
///        "info": {"governor": "John Kasich"},
///        "counties": [
///            {"name": "Summit", "population": 1234},
///            {"name": "Cuyahoga", "population": 1337},
///        ],
///    },
/// ]
/// ```
///
/// ```dart
/// normalize(input, "counties", ["state", "shortname", "info/governor"]);
/// ```
///
/// Results in:
/// ```json
/// [
///   {
///     "state": "Florida",
///     "shortname": "FL",
///     "info.governor": "Rick Scott",
///     "name": "Dade",
///     "population": 12345
///   },
///   {
///     "state": "Florida",
///     "shortname": "FL",
///     "info.governor": "Rick Scott",
///     "name": "Broward",
///     "population": 40000
///   },
///   {
///     "state": "Florida",
///     "shortname": "FL",
///     "info.governor": "Rick Scott",
///     "name": "Palm Beach",
///     "population": 60000
///   },
///   {
///     "state": "Ohio",
///     "shortname": "OH",
///     "info.governor": "John Kasich",
///     "name": "Summit",
///     "population": 1234
///   },
///   {
///     "state": "Ohio",
///     "shortname": "OH",
///     "info.governor": "John Kasich",
///     "name": "Cuyahoga",
///     "population": 1337
///   },
/// ]
/// ```
Object? normalize(
  /// Json to normalize
  dynamic json, {
  /// Separator used to join the path of the nested keys
  String joinSeparator = '/',

  /// Json path to [List] of records in data. This will be the entry point for the normalization.
  String entryPath = '',

  /// Json path from the root of data to extract from the nested records.
  /// Each path will become a column in the resulting table. Including the path in
  List<String> includePath = const [],

  /// Level of nesting to flatten
  int maxLevel = -1,
}) =>
    _normalize(
      json,
      seenPath: const [],
      pathSeparator: joinSeparator,
      includePath: includePath.map((e) => e.split(joinSeparator)).toList(),
      entryPath: entryPath.split(joinSeparator),
      maxLevel: maxLevel,
    );

Object? _normalize(
  dynamic json, {
  required List<String> seenPath,
  required String pathSeparator,
  required List<String> entryPath,
  required List<List<String>> includePath,
  required int maxLevel,
}) {
  if (maxLevel == 0) return json;

  if (json is! Map && json is! List) return json; // Leaf

  // Assumes json is either Map or List this point onwards
  assert(json is Map || json is List);

  // Expand and recurse down the json tree
  final String entryKey = [
    ...seenPath,
    ...entryPath,
  ].join(pathSeparator);
  late Set<String> seenKeys = {};
  final Set<String> getKeys = {
    if (entryPath.isNotEmpty) entryPath.first,
    if (includePath.isNotEmpty)
      ...includePath.map((e) => e.firstOrNull).whereNotNull(),
  };

  final bool isMap = json is Map;
  final Iterable iterable = isMap ? json.entries : json;
  bool hasEntryChild = false;

  final children = iterable.expandIndexed(
    (int i, dynamic e) {
      // Skip only when it is a map and the key is not in the given paths
      if (isMap &&
          includePath.isNotEmpty &&
          entryPath.isNotEmpty &&
          !getKeys.contains(e.key)) return const [];

      if ((isMap ? e.key : '*') == entryPath.firstOrNull) hasEntryChild = true;

      final childPath = <String>[
        if (seenPath.isNotEmpty && isMap) ...seenPath,
        if (isMap) e.key,
      ];

      // print('entryPath: $entryPath');
      // print('key: ${isMap ? e.key : '*'}');

      // Recurse and normalize the json tree

      final expanded = _normalize(
        isMap ? e.value : e,
        seenPath: childPath,
        pathSeparator: pathSeparator,
        includePath:
            includePath.map((e) => e.sublist(e.isNotEmpty ? 1 : 0)).toList(),
        entryPath: entryPath.sublist(entryPath.isNotEmpty ? 1 : 0),
        maxLevel: maxLevel - 1,
      );

      if (expanded is Map<String, Object?>) {
        seenKeys.addAll(expanded.keys);
      }

      if (expanded is List<Map<String, Object?>>) {
        // Assumes the all map keys are already normalized on that level.
        final keys = expanded.firstOrNull?.keys;
        if (keys?.isNotEmpty ?? false) seenKeys.addAll(keys!);
      }

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
        return expanded.entries
            .map((e) => MapEntry<String, Object?>(e.key, e.value));
      }

      return [MapEntry(childPath.join(pathSeparator), expanded)];
    },
  ).toList();

  // print(seenPath.join('/'));

  // // print('${seenPath.join('/')} [${seenKeys.join(', ')}]: $hasEntryChild');
  // print('children [${isMap ? "map" : "list"}]: $children');
  // print('hasEntryChild: $hasEntryChild');

  if (hasEntryChild) {
    // // print('hasEntryChild $isMap / ${children.runtimeType} / $seenKeys');
    if (!isMap && children.every((e) => e is List)) {
      final seenMap = {for (final String k in seenKeys) k: null};
      return children
          .cast<List>()
          .flattened
          .map((e) => e is Map<String, Object?> ? {...seenMap, ...e} : e)
          .toList();
    }

    if (isMap) {
      final Map<String, Object?> includeMap = entryPath.length <= 2
          ? {
              for (final e in children.whereType<MapEntry<String, Object?>>())
                if (e.key != entryKey) e.key: e.value
            }
          : const {};

      final getKey = entryPath.firstOrNull;
      final MapEntry<String, Object?> entryMap = children.singleWhere((e) {
        // print('$entryKey == ${e.key} * ${entryPath.first}');
        // return e is MapEntry && e.key == entryKey;
        return e is MapEntry && e.key == getKey;
      });

      final listValue = (entryMap.value as List);

      return [
        for (final e in listValue)
          {
            ...includeMap,
            if (e is Map<String, Object?>) ...e,
            if (e is! Map<String, Object?>)
              e.runtimeType.toString().toLowerCase(): e,
          }
      ];
    }
  }

  return isMap
      ? <String, Object?>{
          for (final MapEntry e in children) e.key: e.value,
        }
      : children
          .map(
            (e) => e is Map<String, Object?>
                ? {for (final String k in seenKeys) k: null, ...e}
                : e,
          )
          .toList();
}
