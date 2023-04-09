import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:un_ui/un_ui.dart';
import 'package:un_settings_data/settings_data.dart';

/// {@template settings_data_route}
/// A description for SettingsDataRoute
/// {@endtemplate}
class SettingsDataRoute extends GoRouteData {
  /// {@macro settings_data_route}
  const SettingsDataRoute();

  static String name = "SettingsData";

  @override
  Widget build(context, state) => const SettingsDataPage();

  @override
  Page<void> buildPage(context, state) =>
      UnTransitionPage(child: build(context, state));
}
