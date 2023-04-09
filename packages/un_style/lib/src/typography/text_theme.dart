import 'package:flutter/material.dart';
import 'package:un_style/un_style.dart';

// ignore: camel_case_types
typedef _ = UnTextStyle;

abstract class UnTextTheme {
  static const _smallTextScaleFactor = 0.888;
  static const _largeTextScaleFactor = 1.125;

  /// `TextTheme` for for medium screens.
  static TextTheme get mediumText => TextTheme(
        displayLarge: _.displayLarge,
        displayMedium: _.displayMedium,
        displaySmall: _.displaySmall,
        headlineLarge: _.headlineLarge,
        headlineMedium: _.headlineMedium,
        headlineSmall: _.headlineSmall,
        titleLarge: _.titleLarge,
        titleMedium: _.titleMedium,
        titleSmall: _.titleSmall,
        bodyLarge: _.bodyLarge,
        bodyMedium: _.bodyMedium,
        bodySmall: _.bodySmall,
        labelLarge: _.labelLarge,
        labelMedium: _.labelMedium,
        labelSmall: _.labelSmall,
      );

  /// `TextTheme` for for small screens.
  static TextTheme get smallText => TextTheme(
        displayLarge: _.displayLarge._small,
        displayMedium: _.displayMedium._small,
        displaySmall: _.displaySmall._small,
        headlineLarge: _.headlineLarge._small,
        headlineMedium: _.headlineMedium._small,
        headlineSmall: _.headlineSmall._small,
        titleLarge: _.titleLarge._small,
        titleMedium: _.titleMedium._small,
        titleSmall: _.titleSmall._small,
        bodyLarge: _.bodyLarge._small,
        bodyMedium: _.bodyMedium._small,
        bodySmall: _.bodySmall._small,
        labelLarge: _.labelLarge._small,
        labelMedium: _.labelMedium._small,
        labelSmall: _.labelSmall._small,
      );

  /// `TextTheme` for for large screens.
  static TextTheme get largeText => TextTheme(
        displayLarge: _.displayLarge._large,
        displayMedium: _.displayMedium._large,
        displaySmall: _.displaySmall._large,
        headlineLarge: _.headlineLarge._large,
        headlineMedium: _.headlineMedium._large,
        headlineSmall: _.headlineSmall._large,
        titleLarge: _.titleLarge._large,
        titleMedium: _.titleMedium._large,
        titleSmall: _.titleSmall._large,
        bodyLarge: _.bodyLarge._large,
        bodyMedium: _.bodyMedium._large,
        bodySmall: _.bodySmall._large,
        labelLarge: _.labelLarge._large,
        labelMedium: _.labelMedium._large,
        labelSmall: _.labelSmall._large,
      );
}

extension _ScaleFactor on TextStyle {
  TextStyle get _small =>
      copyWith(fontSize: fontSize! * UnTextTheme._smallTextScaleFactor);

  TextStyle get _large =>
      copyWith(fontSize: fontSize! * UnTextTheme._largeTextScaleFactor);
}
