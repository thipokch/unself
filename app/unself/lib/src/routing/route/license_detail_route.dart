import 'package:flutter/widgets.dart';
import 'package:go_router/go_router.dart';
import 'package:unself_component/unself_component.dart';
import 'package:unself_license_detail/license_detail.dart';

class LicenseDetailRoute extends GoRouteData {
  const LicenseDetailRoute(this.id);

  final String id;

  static String name = "LicenseDetail";

  @override
  Widget build(BuildContext context, GoRouterState state) =>
      LicenseDetailPage(packageName: id);

  @override
  Page<void> buildPage(BuildContext context, GoRouterState state) =>
      UnTransitionPage(child: build(context, state), name: name);
}
