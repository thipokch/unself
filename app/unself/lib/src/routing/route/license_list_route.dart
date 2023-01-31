import 'package:flutter/widgets.dart';
import 'package:go_router/go_router.dart';
import 'package:unself_app/unself_app.dart';
import 'package:unself_component/unself_component.dart';
import 'package:unself_license_list/license_list.dart';

class LicenseListRoute extends GoRouteData {
  const LicenseListRoute();

  static String name = "LicenseList";

  @override
  Widget build(BuildContext context, GoRouterState state) => LicenseListPage(
        onSelectPackage: (_) => LicenseDetailRoute(_).go(context),
      );

  @override
  Page<void> buildPage(BuildContext context, GoRouterState state) =>
      UnTransitionPage(child: build(context, state), name: name);
}
