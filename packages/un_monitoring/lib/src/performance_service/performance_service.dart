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

  // ignore: unused_field
  final FirebasePerformance _performance;
  // TODO: Sentry
  // TODO: Implement [_performance]
}
