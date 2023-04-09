// ignore_for_file: prefer_const_constructors

import 'package:flutter/material.dart';
import 'package:un_settings_data/settings_data.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('SettingsDataPage', () {
    testWidgets('renders SettingsDataSliver', (tester) async {
      await tester.pumpWidget(
        MaterialApp(
          home: Material(
            child: SettingsDataPage(),
          ),
        ),
      );
      expect(find.byType(SettingsDataSliver), findsOneWidget);
    });
  });
}
