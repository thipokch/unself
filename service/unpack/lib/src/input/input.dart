import 'dart:async';

export 'zip.dart';

/// An interface for Input
abstract class Input<T, O> {
  /// [open] returns the supported list of identifier [String] for the
  /// given [object].
  FutureOr<List<String>> open(T object);

  /// [unpack] unpacks opened object the given [options] and
  /// returns a [FutureOr] of [Map<String, Object?>].
  FutureOr<Map<String, Object?>> unpack(O? options);
}
