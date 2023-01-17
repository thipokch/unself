import 'package:flutter/widgets.dart';
import 'package:go_router/go_router.dart';
import 'package:unself_component/unself_component.dart';
import 'package:unself_settings_appearance/settings_appearance.dart';

/// {@template settings_appearance_route}
/// A description for SettingsAppearanceRoute
/// {@endtemplate}
class SettingsAppearanceRoute extends GoRouteData {
  /// {@macro settings_appearance_route}
  const SettingsAppearanceRoute();

  static String name = "SettingsAppearance";

  @override
  Widget build(context, state) => const SettingsAppearancePage();

  @override
  Page<void> buildPage(context, state) =>
      UnTransitionPage(child: build(context, state));
}
