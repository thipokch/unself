import 'package:flutter/foundation.dart';
import 'package:flutter/widgets.dart';
import 'package:unself_app/unself_app.dart';
import 'package:unself_monitoring/unself_monitoring.dart';

import 'config/stg/firebase.dart';
import 'config/stg/sentry.dart';
import 'config/stg/rudder.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();

  await initializeMonitoringServices(
    sentryDsn: SentryConfig.currentPlatform.dataSourceName,
    firebaseOptions: FirebaseConfig.currentPlatform,
  );

  ErrorService.runAppGuarded(
    await App.init(
      isDebug: kDebugMode,
      rudderWriteKey: RudderConfig.currentPlatform.writeKey,
      rudderDataPlaneUrl: RudderConfig.currentPlatform.dataPlaneUrl,
    ),
  );
}
