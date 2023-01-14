// ignore_for_file: prefer_const_constructors

import 'package:flutter_test/flutter_test.dart';
import 'package:unself_{{feature_name.snakeCase()}}/{{feature_name.snakeCase()}}.dart';

void main() {
  group('{{feature_name.pascalCase()}}State', () {
    test('supports value equality', () {
      expect(
        {{feature_name.pascalCase()}}State.created(),
        equals(
          const {{feature_name.pascalCase()}}State.created(),
        ),
      );
    });

    group('constructor', () {
      test('can be instantiated', () {
        expect(
          const {{feature_name.pascalCase()}}State.created(),
          isNotNull,
        );
      });
    });
  });
}
