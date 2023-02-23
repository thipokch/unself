import 'dart:async';

export 'archive.dart';

/// An interface for [Export]
abstract class Export<T, O> {
  /// [open] returns the supported list of identifier [String] for the
  /// given [object].
  FutureOr<List<String>> open(Map<String, Object?> object);

  /// [pack] packs opened object the given [options] and
  /// returns a [FutureOr] of [O].
  FutureOr<T> pack(O? options);
}
