// ignore_for_file: prefer_const_constructors

import 'package:flutter_test/flutter_test.dart';
import 'package:un_user_repository/un_user_repository.dart';
import 'package:un_settings_appearance/settings_appearance.dart';

void main() {
  group('SettingsAppearanceCubit', () {
    group('constructor', () {
      test('can be instantiated', () {
        expect(
          SettingsAppearanceBloc(
            analyticService: null,
            userRepository: UserRepository(),
          ),
          isNotNull,
        );
      });
    });

    test('initial state has default value for customProperty', () {
      final settingsAppearanceCubit = SettingsAppearanceBloc(
        analyticService: null,
        userRepository: UserRepository(),
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
