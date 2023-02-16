import 'dart:async';

import 'package:unself_model/unself_model.dart';

export 'zip.dart';

/// An interface for Input
abstract class Input<O> {
  /// [open] returns the supported list of identifier [String] for the
  /// given [object].
  FutureOr<List<String>> open(O object);

  /// [unpack] unpacks opened object the given [mappings] and
  /// returns a [FutureOr] of [Map<String, Object?>].
  FutureOr<Map<String, Object?>> unpack(List<MappingEntry> identifier);
}
