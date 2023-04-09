import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../view/{{feature_name.snakeCase()}}_page.dart';

/// {@template {{feature_name.snakeCase()}}_route}
/// A description for {{feature_name.pascalCase()}}Route
/// {@endtemplate}
class {{feature_name.pascalCase()}}Route extends GoRouteData{
  /// {@macro {{feature_name.snakeCase()}}_route}
  const {{feature_name.pascalCase()}}Route();

  static String name = "{{feature_name.pascalCase()}}";

  @override
  Widget build(context, state) => 
      const {{feature_name.pascalCase()}}Page();

  @override
  Page<void> buildPage(context, state) =>
      NoTransitionPage(child: build(context, state));
}
