import 'package:firebase_core/firebase_core.dart';
import 'package:rudder_sdk_flutter/RudderController.dart';

import 'analytic_context.dart';

/// {@template analytic_service}
/// [AnalyticService] description
/// {@endtemplate}
class AnalyticService {
  /// {@macro analytic_service}
  AnalyticService({required RudderController rudder}) : _rudder = rudder {
    if (Firebase.apps.isEmpty) {
      throw Exception(
        "Firebase Analytics must be initialized for RudderStacks' Firebase Integration.",
      );
    }

    getCurrentContext().then((value) => _context = value);
  }

  // Delegate

  final RudderController _rudder;

  // Properties

  /// Cached [AnalyticContext] from RudderStack
  AnalyticContext? _context;
  AnalyticContext? get context => _context;

  Future<AnalyticContext?> getCurrentContext() async => _rudder
      .getRudderContext()
      .then((value) => value != null ? AnalyticContext(map: value) : null);

  // Methods

  void trackScreen(String screenName) => _rudder.screen(screenName);

  void trackEvent(String eventName) => _rudder.track(eventName);
}
