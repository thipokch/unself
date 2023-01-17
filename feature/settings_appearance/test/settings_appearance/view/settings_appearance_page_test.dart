// ignore_for_file: prefer_const_constructors

import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:unself_settings_appearance/settings_appearance.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:unself_user/unself_user.dart';

void main() {
  group('SettingsAppearancePage', () {
    testWidgets('renders SettingsAppearanceView', (tester) async {
      await tester.pumpWidget(
        MaterialApp(
          home: Material(
            child: MultiProvider(
              providers: [Provider.value(value: UserService())],
              child: SettingsAppearancePage(),
            ),
          ),
        ),
      );
      expect(find.byType(SettingsAppearanceSliver), findsOneWidget);
    });
  });
}
