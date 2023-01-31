// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'app_routes.dart';

// **************************************************************************
// GoRouterGenerator
// **************************************************************************

List<GoRoute> get $appRoutes => [
      $unpackRoutes,
      $settingsRoutes,
    ];

GoRoute get $unpackRoutes => GoRouteData.$route(
      path: '/unpack',
      factory: $UnpackRoutesExtension._fromState,
    );

extension $UnpackRoutesExtension on UnpackRoutes {
  static UnpackRoutes _fromState(GoRouterState state) => const UnpackRoutes();

  String get location => GoRouteData.$location(
        '/unpack',
      );

  void go(BuildContext context) => context.go(location, extra: this);

  void push(BuildContext context) => context.push(location, extra: this);
}

GoRoute get $settingsRoutes => GoRouteData.$route(
      path: '/settings',
      factory: $SettingsRoutesExtension._fromState,
      routes: [
        GoRouteData.$route(
          path: 'data',
          factory: $SettingsDataRouteExtension._fromState,
        ),
        GoRouteData.$route(
          path: 'appearance',
          factory: $SettingsAppearanceRouteExtension._fromState,
        ),
        GoRouteData.$route(
          path: 'license',
          factory: $LicenseListRouteExtension._fromState,
          routes: [
            GoRouteData.$route(
              path: ':id',
              factory: $LicenseDetailRouteExtension._fromState,
            ),
          ],
        ),
      ],
    );

extension $SettingsRoutesExtension on SettingsRoutes {
  static SettingsRoutes _fromState(GoRouterState state) =>
      const SettingsRoutes();

  String get location => GoRouteData.$location(
        '/settings',
      );

  void go(BuildContext context) => context.go(location, extra: this);

  void push(BuildContext context) => context.push(location, extra: this);
}

extension $SettingsDataRouteExtension on SettingsDataRoute {
  static SettingsDataRoute _fromState(GoRouterState state) =>
      const SettingsDataRoute();

  String get location => GoRouteData.$location(
        '/settings/data',
      );

  void go(BuildContext context) => context.go(location, extra: this);

  void push(BuildContext context) => context.push(location, extra: this);
}

extension $SettingsAppearanceRouteExtension on SettingsAppearanceRoute {
  static SettingsAppearanceRoute _fromState(GoRouterState state) =>
      const SettingsAppearanceRoute();

  String get location => GoRouteData.$location(
        '/settings/appearance',
      );

  void go(BuildContext context) => context.go(location, extra: this);

  void push(BuildContext context) => context.push(location, extra: this);
}

extension $LicenseListRouteExtension on LicenseListRoute {
  static LicenseListRoute _fromState(GoRouterState state) =>
      const LicenseListRoute();

  String get location => GoRouteData.$location(
        '/settings/license',
      );

  void go(BuildContext context) => context.go(location, extra: this);

  void push(BuildContext context) => context.push(location, extra: this);
}

extension $LicenseDetailRouteExtension on LicenseDetailRoute {
  static LicenseDetailRoute _fromState(GoRouterState state) =>
      LicenseDetailRoute(
        state.params['id']!,
      );

  String get location => GoRouteData.$location(
        '/settings/license/${Uri.encodeComponent(id)}',
      );

  void go(BuildContext context) => context.go(location, extra: this);

  void push(BuildContext context) => context.push(location, extra: this);
}
