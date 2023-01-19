// ignore_for_file: prefer_const_constructors

import 'package:flutter/material.dart';
import 'package:unself_unpack_assistant/unself_unpack_assistant.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('UnpackAssistantView', () {
    testWidgets('renders Text', (tester) async {
      await tester.pumpWidget(
        BlocProvider(
          create: (context) => UnpackAssistantBloc(),
          child: MaterialApp(home: UnpackAssistantView()),
        ),
      );

      expect(find.byType(Text), findsOneWidget);
    });
  });
}
