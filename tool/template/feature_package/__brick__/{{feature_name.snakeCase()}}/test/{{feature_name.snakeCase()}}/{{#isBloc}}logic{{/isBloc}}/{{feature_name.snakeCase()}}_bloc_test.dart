// ignore_for_file: prefer_const_constructors

import 'package:bloc_test/bloc_test.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:unself_{{feature_name.snakeCase()}}/unself_{{feature_name.snakeCase()}}.dart';

void main() {
  group('{{feature_name.pascalCase()}}Bloc', () {
    group('constructor', () {
      test('can be instantiated', () {
        expect(
          {{feature_name.pascalCase()}}Bloc(),
          isNotNull,
        );
      });
    });

    blocTest<{{feature_name.pascalCase()}}Bloc, {{feature_name.pascalCase()}}State>(
      '{{feature_name.pascalCase()}}Event.create() emits nothing',
      build: {{feature_name.pascalCase()}}Bloc.new,
      act: (bloc) => bloc.add(const {{feature_name.pascalCase()}}Event.create()),
      expect: () => <{{feature_name.pascalCase()}}State>[],
    );
  });
}
