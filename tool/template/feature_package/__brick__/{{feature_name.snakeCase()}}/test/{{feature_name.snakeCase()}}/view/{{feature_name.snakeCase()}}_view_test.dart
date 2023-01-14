// ignore_for_file: prefer_const_constructors

import 'package:flutter/material.dart';
import 'package:unself_{{feature_name.snakeCase()}}/{{feature_name.snakeCase()}}.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('{{feature_name.pascalCase()}}View', () {
    testWidgets('renders Text', (tester) async { {{#isBloc}}
      await tester.pumpWidget(
        BlocProvider(
          create: (context) => {{feature_name.pascalCase()}}Bloc(),
          child: MaterialApp(home: {{feature_name.pascalCase()}}View()),
        ),
      );{{/isBloc}}{{#isCubit}}
      await tester.pumpWidget(
        BlocProvider(
          create: (context) => {{feature_name.pascalCase()}}Cubit(),
          child: MaterialApp(home: {{feature_name.pascalCase()}}View()),
        ),
      );{{/isCubit}}{{#isProvider}}
      await tester.pumpWidget(
        Provider(
          create: (context) => ChangeNotifierProvider(create: (_) => {{feature_name.pascalCase()}}Notifier()),
          child: MaterialApp(home: {{feature_name.pascalCase()}}View()),
        ),
      );{{/isProvider}}{{#isRiverpod}}
      await tester.pumpWidget(
        MaterialApp(home: {{feature_name.pascalCase()}}View()),
      );{{/isRiverpod}}{{#isNone}}
      await tester.pumpWidget(
        MaterialApp(home: {{feature_name.pascalCase()}}View()),
      );{{/isNone}}

      expect(find.byType(Text), findsOneWidget);
    });
  });
}
