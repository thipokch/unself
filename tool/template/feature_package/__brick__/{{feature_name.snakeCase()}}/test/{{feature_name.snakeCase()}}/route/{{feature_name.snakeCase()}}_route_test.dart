import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:unself_{{feature_name.snakeCase()}}/{{feature_name.snakeCase()}}.dart';

void main() {
  group('{{feature_name.pascalCase()}}Route', () {
    testWidgets('renders {{feature_name.pascalCase()}}Route', (tester) async {
       await tester.pumpWidget(
        Builder( builder: (context) => 
        MaterialApp(home: const {{feature_name.pascalCase()}}Route().provide(context)),
        ),
      );
      expect(find.byType({{feature_name.pascalCase()}}Page), findsOneWidget);
    });
  });
}
