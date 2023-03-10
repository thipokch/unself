// ignore_for_file: constant_identifier_names

import 'package:collection/collection.dart';

/// [flatten] is similar to pandas' json_normalize function, this function
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
/// flatten(input);
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
/// flatten(input, recordPath: ["counties"], includePath: [["state"], ["shortname"], ["info", "governor"]]);
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
List<Map<String, dynamic>> flatten(
  /// Json to flatten
  dynamic json, {
  /// Separator used to join the path of the nested keys
  String separator = '.',

  /// Json path of records in the given json. This will be the entry point for the flattening.
  List<String> recordPath = const [],

  /// Json path from the root of data to extract from the nested records.
  /// Each path will become a column in the resulting table.
  List<List<String>> includePath = const [],

  /// Add missing fields or column to the records.
  bool addMissingKeys = true,

  // TODO: Implement maxLevel
  /// Level of nesting to flatten
  int maxLevel = -1,
}) {
  final result = <Map<String, dynamic>>[];
  final seenKeys = addMissingKeys ? <String>{} : null;

  final includeResult = <String, dynamic>{};
  final includeKeys = includePath.map((i) => i.join(separator)).toSet();

  final commonPath = includePath.isNotEmpty
      ? (includePath
          .map((i) => i
              .headIntersect(recordPath)
              // .whereNot((e) => e == '*')
              .join(separator))
          .toSet())
      : const <String>{};

  // if (kDebugMode) print(includeKeys);
  // if (kDebugMode) print(commonPath);

  _flatten(
    json,
    separator,
    const [],
    recordPath,
    includeKeys,
    commonPath,
    maxLevel,
    listAccumulator(result, seenKeys),
    includeAccumulator(includeResult, includeKeys),
  );

  // if (kDebugMode) print(includeResult);

  if (seenKeys != null) {
    for (final e in result) {
      for (final k in seenKeys) {
        e.putIfAbsent(k, () => null);
      }
    }
  }

  return result;
}

void _flatten(
  dynamic json,
  String separator,
  List<String> seenPath,
  List<String> recordPath,
  Set<String> includeKeys,
  Set<String> commonPath,
  int maxLevel,
  Accumulator accumulateUp,
  Accumulator accumulateInclude,
) {
  late final seenKey = seenPath.join(separator);

  late final rp = _pathPosition(seenPath, recordPath);
  late final key = seenPath
      .skip(rp.isUndefined ? 0 : recordPath.length)
      .tailTakeWhile((e) => e != '*')
      .join(separator);

  late final cp = commonPath.contains(seenKey);
  late final childCommonPath =
      cp ? commonPath.where((e) => e != seenKey).toSet() : commonPath;

  // void logInput(bool accumulateHere) {
  //   if (kDebugMode) {
  //     final a = accumulateHere ? '???' : '????';
  //     final i = cp ? '??????' : '';
  //     print('${rp.name} :: $a$i $seenKey :: $json');
  //   }
  // }

  // void logOutput(String loc, dynamic out) {
  //   final i = cp ? '??????' : '';
  //   if (kDebugMode) print(':: $loc :: $i $seenKey :: $out');
  // }

  if (json is Map && rp.isBefore && cp) {
    late final result = <String, dynamic>{};
    late final resultList = <Map<String, dynamic>>[];

    // logInput(true);

    late final isRecordList = recordPath.last == '*';

    json.entries
        .moveToLast(
            // On common path, move RecordPath to last
            (e) => cp && e.key == recordPath.elementAtOrNull(seenPath.length))
        .forEach((e) => _flatten(
              e.value,
              separator,
              <String>[...seenPath, e.key],
              recordPath,
              includeKeys,
              childCommonPath,
              maxLevel,
              isRecordList
                  ? listAccumulator(resultList)
                  : mapAccumulator(result),
              includeAccumulator(result, includeKeys),
            ));

    if (isRecordList) {
      for (final r in resultList) {
        for (final e in result.entries) {
          r.putIfAbsent(e.key, () => e.value);
        }

        accumulateUp(key, r);
      }
    } else {
      accumulateUp(key, result);
    }

    // logOutput('CRESULT', result);
    // logOutput('CRESULTL', resultList);
  } else if (json is Map) {
    late final result = <String, dynamic>{};

    final accumulateHere = rp.isUndefined || rp.isAfter || rp.isAt;
    // if (kDebugMode) logInput(accumulateHere);

    json.forEach((k, v) => _flatten(
          v,
          separator,
          <String>[...seenPath, k],
          recordPath,
          includeKeys,
          childCommonPath,
          maxLevel,
          accumulateHere ? mapAccumulator(result) : accumulateUp,
          accumulateInclude,
        ));

    // if (accumulateHere) logOutput('RESULT', result);
    if (accumulateHere) accumulateUp(key, result);
  } else if (json is List) {
    late final result = <Map<String, dynamic>>[];

    final accumulateHere = rp.isAfter; //  || rp.isAt;
    // if (kDebugMode) logInput(accumulateHere);

    json.forEachIndexed((i, e) => _flatten(
          e,
          separator,
          [...seenPath, '*'],
          recordPath,
          includeKeys,
          childCommonPath,
          maxLevel,
          accumulateHere ? listAccumulator(result) : accumulateUp,
          accumulateInclude,
        ));

    // if (accumulateHere) logOutput('RESULT', result);
    if (accumulateHere) accumulateUp(key, result);
  } else if (rp.isUndefined || rp.isAfter || rp.isAt) {
    // logOutput('LEAF', json);
    accumulateUp(key, json);
  } else if (rp.isBefore || rp.isNot) {
    if (includeKeys.contains(seenKey) ||
        includeKeys.any((_) => seenKey.startsWith(_))) {
      final relKey = seenPath.tailDiff(recordPath).join(separator);
      // logOutput('NLEAF : $relKey', json);

      accumulateInclude(relKey, json);
    }
  }
}

//
// Accumulators
//

typedef Accumulator = void Function(String key, dynamic value);

Accumulator mapAccumulator(
  Map<String, dynamic> result,
) =>
    (k, v) {
      // if (kDebugMode) print('mapAccumulator :: $k :: $v');
      v is Map<String, dynamic> ? result.addAll(v) : result[k] = v;
    };

Accumulator listAccumulator<T>(
  List<T> result, [
  Set<String>? seenKeys,
]) =>
    (k, v) {
      // if (kDebugMode) print('listAccumulator :: $k :: $v');
      if (v is T) {
        result.add(v);
      } else if (result is List<Map<String, dynamic>>) {
        result.cast<Map<String, dynamic>>().add({'value': v});
      }

      if (v is Map<String, dynamic>) seenKeys?.addAll(v.keys);
    };

Accumulator includeAccumulator(
  Map<String, dynamic> result,
  Set<String> includeKeys,
) =>
    (k, v) => result[k] = v;

//
// Pointer Positions
//

enum Position { UNDEFINED, BEFORE, AT, AFTER, NOT }

extension on Position {
  bool get isUndefined => this == Position.UNDEFINED;
  bool get isBefore => this == Position.BEFORE;
  bool get isAt => this == Position.AT;
  bool get isAfter => this == Position.AFTER;
  bool get isNot => this == Position.NOT;
}

Position _pathPosition(
  List<String> seenPath,
  List<String> recordPath,
) {
  if (recordPath.isEmpty) return Position.UNDEFINED;

  if (seenPath.isNotEmpty &&
      !(seenPath.length < recordPath.length
          ? recordPath.headSubsetOf(seenPath)
          : seenPath.headSubsetOf(recordPath))) {
    return Position.NOT;
  }

  if (recordPath.length == seenPath.length) {
    return Position.AT;
  }
  if (recordPath.length < seenPath.length) {
    return Position.AFTER;
  }
  return Position.BEFORE;
}

//
// Extensions
//

extension<T> on Iterable<T> {
  Iterable<T> takeWhileIndexed(bool Function(int index, T element) test) {
    var index = 0;
    return takeWhile((_) => test(index++, _));
  }

  Iterable<T> skipWhileIndexed(bool Function(int index, T element) test) {
    var index = 0;
    return skipWhile((_) => test(index++, _));
  }

  Iterable<T> moveToLast(bool Function(T element) test) =>
      sortedBy<num>((e) => test(e) ? 1 : 0);

  bool headSubsetOf(Iterable<T> other) => const IterableEquality().equals(
        other,
        take(other.length),
      );

  Iterable<T> headIntersect(List<T> other) =>
      takeWhileIndexed((i, e) => i < other.length && e == other.elementAt(i));

  Iterable<T> tailDiff(List<T> other) =>
      skipWhileIndexed((i, e) => i < other.length && e == other.elementAt(i));

  Iterable<T> tailTakeWhile(bool Function(T element) test) =>
      toList().reversed.takeWhile(test).toList().reversed;
}
