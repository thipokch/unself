// ignore_for_file: prefer_const_constructors

import 'package:flutter_test/flutter_test.dart';
import 'package:unself_{{feature_name.snakeCase()}}/unself_{{feature_name.snakeCase()}}.dart';

void main() {
  group('constructor', () {
    test('can be instantiated', () {
      expect(
        {{feature_name.pascalCase()}}Event.create(),
        equals(const {{feature_name.pascalCase()}}Event.create()),
      );
    });
  });
}