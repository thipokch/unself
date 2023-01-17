// ignore_for_file: prefer_const_constructors

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:unself_settings_appearance/settings_appearance.dart';

void main() {
  group('SettingsAppearanceState', () {
    test('supports value equality', () {
      expect(
        SettingsAppearanceState(themeMode: ThemeMode.system),
        equals(
          const SettingsAppearanceState(themeMode: ThemeMode.system),
        ),
      );
    });

    group('constructor', () {
      test('can be instantiated', () {
        expect(
          const SettingsAppearanceState(themeMode: ThemeMode.system),
          isNotNull,
        );
      });
    });
  });
}
