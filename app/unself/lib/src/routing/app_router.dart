import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:unself_app/unself_app.dart';

abstract class AppRouter {
  static GoRouter build({List<NavigatorObserver>? observers}) => GoRouter(
        observers: observers,
        debugLogDiagnostics: kDebugMode,
        navigatorKey: defaultNavigator,
        initialLocation: defaultLocation,
        routes: defaultRoutes,
      );

  // DEFAULTS

  static final defaultNavigator =
      GlobalKey<NavigatorState>(debugLabel: 'AppRouter');

  static final String defaultLocation = const SettingsRoutes().location;
  static final List<RouteBase> defaultRoutes = [AppShell.defaultRoute];
}
