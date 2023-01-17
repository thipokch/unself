// ignore_for_file: prefer_const_constructors

import 'package:flutter_test/flutter_test.dart';
import 'package:unself_settings_appearance/settings_appearance.dart';
import 'package:unself_user/unself_user.dart';

void main() {
  group('SettingsAppearanceCubit', () {
    group('constructor', () {
      test('can be instantiated', () {
        expect(
          SettingsAppearanceBloc(
            analyticService: null,
            userService: UserService(),
          ),
          isNotNull,
        );
      });
    });

    test('initial state has default value for customProperty', () {
      final settingsAppearanceCubit = SettingsAppearanceBloc(
        analyticService: null,
        userService: UserService(),
      );
      expect(settingsAppearanceCubit.state.themeMode, equals(null));
    });

    // blocTest<SettingsAppearanceBloc, SettingsAppearanceState>(
    //   'yourCustomFunction emits nothing',
    //   build: SettingsAppearanceBloc.new,
    //   act: (cubit) => cubit.yourCustomFunction(),
    //   expect: () => <SettingsAppearanceState>[],
    // );
  });
}
