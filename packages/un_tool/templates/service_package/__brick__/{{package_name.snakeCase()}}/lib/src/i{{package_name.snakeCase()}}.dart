part of '{{package_name.snakeCase()}}.dart';

/// An interface for {{package_name.pascalCase()}}
abstract class I{{package_name.pascalCase()}}{ {{#methods}}
  /// A description for {{name}}
  FutureOr<{{{type}}}> {{name}}();
  {{/methods}}
}
