// ignore_for_file: prefer_const_constructors

import 'package:flutter/material.dart';
import 'package:unself_unpack_assistant/unself_unpack_assistant.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('UnpackAssistantPage', () {
    testWidgets('renders UnpackAssistantView', (tester) async {
      await tester.pumpWidget(MaterialApp(home: UnpackAssistantPage()));
      expect(find.byType(UnpackAssistantView), findsOneWidget);
    });
  });
}
