// ignore_for_file: prefer_const_constructors

import 'package:flutter/material.dart';
import 'package:unself_settings_list/settings_list.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('SettingsListPage', () {
    testWidgets('renders SettingsListView', (tester) async {
      await tester.pumpWidget(
        MaterialApp(
          home: Material(
            child: SettingsListPage(
              onSelectData: () {},
              onSelectAppearance: () {},
              onSelectLicense: () {},
              onSelectFeedback: () {},
              onSelectPrivacy: () {},
              onSelectTerms: () {},
            ),
          ),
        ),
      );
      expect(find.byType(SettingsListSliver), findsOneWidget);
    });
  });
}
