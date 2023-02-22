import 'dart:async';

import 'package:collection/collection.dart';
import 'package:unself_model/unself_model.dart';
import 'package:unself_unpack/src/output/output.dart';

/// {@template json_processor}
/// [ArchiveOutput] unpacks archive files and collect metadata.
/// {@endtemplate}
class ArchiveOutput implements Output<ArchiveData, void> {
  ArchiveOutput();

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
