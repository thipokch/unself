// ignore_for_file: prefer_const_constructors

import 'package:flutter/material.dart';
import 'package:unself_{{feature_name.snakeCase()}}/{{feature_name.snakeCase()}}.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('{{feature_name.pascalCase()}}Page', () {
    testWidgets('renders {{feature_name.pascalCase()}}View', (tester) async {
      await tester.pumpWidget(MaterialApp(home: {{feature_name.pascalCase()}}Page()));
      expect(find.byType({{feature_name.pascalCase()}}View), findsOneWidget);
    });
  });
}
