import 'dart:async';

import 'package:unself_model/unself_model.dart';

/// An interface for Collector
abstract class ICollector {
  /// Returns supported [Collection] that can be collected by [ICollector]
  FutureOr<List<Collection>> collect();

  /// Get list of raw documents for the collection to be processed by [IProcessor]
  FutureOr<List<String>> retrieve({required Collection collection});
}
