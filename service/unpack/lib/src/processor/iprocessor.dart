import 'dart:async';

import 'package:unself_local_database/unself_local_database.dart';

/// An interface for Processor
abstract class IProcessor {
  /// Returns supported [Collection] that can be processed by [IProcessor]
  FutureOr<List<Collection>> collect();

  /// Process data from given [Collection] and store it as [Document]
  FutureOr<void> process({required List<Collection> collection});
}
