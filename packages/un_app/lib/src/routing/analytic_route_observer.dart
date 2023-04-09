import 'package:flutter/widgets.dart';
import 'package:flutter/services.dart';
import 'package:un_monitoring/un_monitoring.dart';

typedef ScreenNameExtractor = String? Function(RouteSettings settings);
typedef RouteFilter = bool Function(Route<dynamic>? route);

class AnalyticRouteObserver extends RouteObserver<ModalRoute<dynamic>> {
  AnalyticRouteObserver({
    required this.analytic,
    this.nameExtractor = defaultNameExtractor,
    this.routeFilter = defaultRouteFilter,
    Function(PlatformException error)? onError,
  }) : _onError = onError;

  final AnalyticService analytic;
  final ScreenNameExtractor nameExtractor;
  final RouteFilter routeFilter;
  final void Function(PlatformException error)? _onError;

  static String? defaultNameExtractor(RouteSettings settings) => settings.name;
  static bool defaultRouteFilter(Route<dynamic>? route) => route is PageRoute;

  void _sendScreenView(Route<dynamic> route) {
    final String? screenName = nameExtractor(route.settings);

    if (screenName != null) {
      try {
        analytic.trackScreen(screenName);
      } catch (e) {
        _onError != null && e is PlatformException
            ? _onError!(e)
            : debugPrint('$AnalyticRouteObserver: $e');
      }
    }
  }

  @override
  void didPush(Route<dynamic> route, Route<dynamic>? previousRoute) {
    super.didPush(route, previousRoute);
    if (routeFilter(route)) {
      _sendScreenView(route);
    }
  }

  @override
  void didReplace({Route<dynamic>? newRoute, Route<dynamic>? oldRoute}) {
    super.didReplace(newRoute: newRoute, oldRoute: oldRoute);
    if (newRoute != null && routeFilter(newRoute)) {
      _sendScreenView(newRoute);
    }
  }

  @override
  void didPop(Route<dynamic> route, Route<dynamic>? previousRoute) {
    super.didPop(route, previousRoute);
    if (previousRoute != null &&
        routeFilter(previousRoute) &&
        routeFilter(route)) {
      _sendScreenView(previousRoute);
    }
  }
}
