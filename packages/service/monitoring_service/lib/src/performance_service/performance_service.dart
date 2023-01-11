import 'package:firebase_performance/firebase_performance.dart';

/// {@template performance_service}
/// [PerformanceService] description
/// {@endtemplate}
class PerformanceService {
  /// {@macro performance_service}
  const PerformanceService({
    required FirebasePerformance performance,
  }) : _performance = performance;

  // Delegate

  final FirebasePerformance _performance;
  // TODO: Sentry

  // TODO: Implement [_performance]

}
