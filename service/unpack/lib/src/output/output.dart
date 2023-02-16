import 'dart:async';

import 'package:unself_model/unself_model.dart';

export 'archive.dart';

/// An interface for Output
abstract class Output<O> {
  /// [open] returns the supported list of identifier [String] for the
  /// given [object].
  FutureOr<List<String>> open(Map<String, Object?> object);

  /// [pack] packs opened object the given [mappings] and
  /// returns a [FutureOr] of [O].
  FutureOr<O> pack(List<MappingEntry> mappings);
}
