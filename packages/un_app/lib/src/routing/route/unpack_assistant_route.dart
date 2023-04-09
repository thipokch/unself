import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:un_ui/un_ui.dart';
import 'package:unpack_assistant/unpack_assistant.dart';

/// {@template unpack_assistant_route}
/// A description for SettingsDataRoute
/// {@endtemplate}
class UnpackAssistantRoute extends GoRouteData {
  /// {@macro unpack_assistant_route}
  const UnpackAssistantRoute();

  static String name = "UnpackAssistant";

  @override
  Widget build(context, state) => const UnpackAssistantPage();

  @override
  Page<void> buildPage(context, state) =>
      UnTransitionPage(child: build(context, state));
}
