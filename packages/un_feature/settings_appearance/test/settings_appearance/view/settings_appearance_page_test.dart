// ignore_for_file: prefer_const_constructors

import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:un_user_repository/un_user_repository.dart';
import 'package:un_settings_appearance/settings_appearance.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('SettingsAppearancePage', () {
    testWidgets('renders SettingsAppearanceView', (tester) async {
      await tester.pumpWidget(
        MaterialApp(
          home: Material(
            child: MultiProvider(
              providers: [Provider.value(value: UserRepository())],
              child: SettingsAppearancePage(),
            ),
          ),
        ),
      );
      expect(find.byType(SettingsAppearanceSliver), findsOneWidget);
    });
  });
}
