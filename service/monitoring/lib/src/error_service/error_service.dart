import 'dart:async';
import 'dart:isolate';

import 'package:firebase_crashlytics/firebase_crashlytics.dart';
import 'package:flutter/widgets.dart';
import 'package:sentry/sentry.dart';

/// {@template error_service}
/// [ErrorService] description
/// {@endtemplate}
abstract class ErrorService {
  // Delegate

  static Future<void> recordFlutterError(
    FlutterErrorDetails flutterErrorDetails,
  ) async {
    await FirebaseCrashlytics.instance.recordFlutterError(
      flutterErrorDetails,
    );
  }

  static void recordIsolateError() =>
      Isolate.current.addErrorListener(RawReceivePort((pair) async {
        final List<dynamic> errorAndStacktrace = pair;
        await recordError(
          errorAndStacktrace.first,
          errorAndStacktrace.last,
        );
      }).sendPort);

  static Future<void> recordError(
    dynamic exception,
    StackTrace? stack, {
    bool fatal = false,
  }) async {
    await Sentry.captureException(
      exception,
      stackTrace: stack,
      // TODO: Report non fatal errors to Sentry via `Sentry.captureEvent`
    );

    // Pass all uncaught errors from the framework to Crashlytics.
    // https://firebase.google.com/docs/crashlytics/customize-crash-reports?platform=flutter
    await FirebaseCrashlytics.instance.recordError(
      exception,
      stack,
      fatal: fatal,
    );
  }

  static runAppGuarded(Widget app) => runZonedGuarded(
        () {
          FlutterError.onError = recordFlutterError;
          recordIsolateError();

          return runApp(app);
        },
        (error, stackTrace) => recordError(error, stackTrace, fatal: true),
      );
}
