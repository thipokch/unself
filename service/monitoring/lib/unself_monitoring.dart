library unself_monitoring;

import 'package:package_info_plus/package_info_plus.dart';
import 'package:sentry/sentry.dart';
import 'package:unself_monitoring/unself_monitoring.dart';

export 'src/analytic_service/analytic_service.dart';
export 'src/error_service/error_service.dart';
export 'src/info_service/info_service.dart';
export 'src/performance_service/performance_service.dart';

export 'package:firebase_core/firebase_core.dart'
    show Firebase, FirebaseOptions;
export 'package:firebase_performance/firebase_performance.dart'
    show FirebasePerformance;
export 'package:rudder_sdk_flutter/RudderController.dart' show RudderController;
// ignore: depend_on_referenced_packages
export 'package:rudder_sdk_flutter_platform_interface/platform.dart'
    show RudderConfigBuilder, WebConfig, MobileConfig;

Future<void> initializeMonitoringServices({
  required String sentryDsn,
  required FirebaseOptions firebaseOptions,
}) async {
  await Firebase.initializeApp(
    options: firebaseOptions,
  );
  await Sentry.init((options) {
    options.dsn = sentryDsn;
    options.tracesSampleRate = 1.0;
  });
  await PackageInfo.fromPlatform().then(
    (value) => InfoService.package = value,
  );
}
