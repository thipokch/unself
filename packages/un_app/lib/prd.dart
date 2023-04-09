import 'package:flutter/foundation.dart';
import 'package:flutter/widgets.dart';
import 'package:un_app/un_app.dart';
import 'package:un_monitoring/un_monitoring.dart';

import 'config/prd/firebase.dart';
import 'config/prd/sentry.dart';
import 'config/prd/rudder.dart';

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
