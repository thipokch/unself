import 'dart:async';

import 'package:collection/collection.dart';
import 'package:unself_model/unself_model.dart';
import 'package:unself_unpack/src/export/export.dart';

/// {@template json_processor}
/// [ArchiveExport] unpacks archive files and collect metadata.
/// {@endtemplate}
class ArchiveExport implements Export<ArchiveData, void> {
  ArchiveExport();

  Map<String, Object?>? _object;

  @override
  FutureOr<List<String>> open(Map<String, Object?> object) {
    _object = object;
    return MapKeySet(ArchiveData.fieldMap)
        .intersection(MapKeySet(object))
        .toList();
  }

  @override
  FutureOr<ArchiveData> pack(void options) => ArchiveData.fromJson(_object!);
}
