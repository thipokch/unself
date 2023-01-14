import 'dart:async';

part 'i{{package_name.snakeCase()}}.dart';

/// {@template {{{package_name.snakeCase()}}}}
/// {{package_name.pascalCase()}} description
/// {@endtemplate}
class {{package_name.pascalCase()}} implements I{{package_name.pascalCase()}} { {{#isNone}}
  /// {@macro {{{package_name.snakeCase()}}}}
  const {{package_name.pascalCase()}}();{{/isNone}}{{#isFactory}}
  /// {@macro {{{package_name.snakeCase()}}}}
  factory {{package_name.pascalCase()}}() {
    return _instance;
  }

  const {{package_name.pascalCase()}}._();
  static const {{package_name.pascalCase()}} _instance = {{package_name.pascalCase()}}._();{{/isFactory}}{{#isInstance}}
  const {{package_name.pascalCase()}}._();
  /// {@macro {{{package_name.snakeCase()}}}}
  static const {{package_name.pascalCase()}} instance = const {{package_name.pascalCase()}}._();{{/isInstance}}{{#isInstanceLazy}}
  const {{package_name.pascalCase()}}._();
  static {{package_name.pascalCase()}}? _instance;
  /// {@macro {{{package_name.snakeCase()}}}}
  static {{package_name.pascalCase()}} get instance => _instance ??= const {{package_name.pascalCase()}}._();{{/isInstanceLazy}}
{{#methods}}
  @override
  FutureOr<{{{type}}}> {{name}}() async {
    //TODO: Add Logic
    return Future.value();
  }
{{/methods}}
}
