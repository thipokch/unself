import 'package:flutter/material.dart';
import 'package:un_style/un_style.dart';

/// Defines the color themes for the UnselfStyle UI.
abstract class UnColorTheme {
  // static const gold = Color(0xFFE2C197);
  // static const  vanilla = Color(0xFFC1CBA2);
  // static const  mauve = Color(0xFFE9BAC7);

  static const ColorScheme lightColorStyle = ColorScheme(
    brightness: Brightness.light,
    primary: Color(0xFF5455A9),
    onPrimary: Color(0xFFFFFFFF),
    primaryContainer: Color(0xFFE1DFFF),
    onPrimaryContainer: Color(0xFF0B0664),
    secondary: Color(0xFF5D5C72),
    onSecondary: Color(0xFFFFFFFF),
    secondaryContainer: Color(0xFFE2E0F9),
    onSecondaryContainer: Color(0xFF1A1A2C),
    tertiary: Color(0xFF795369),
    onTertiary: Color(0xFFFFFFFF),
    tertiaryContainer: Color(0xFFFFD8EC),
    onTertiaryContainer: Color(0xFF2E1125),
    error: Color(0xFFBA1A1A),
    errorContainer: Color(0xFFFFDAD6),
    onError: Color(0xFFFFFFFF),
    onErrorContainer: Color(0xFF410002),
    background: Color(0xFFFFFBFF),
    onBackground: Color(0xFF1C1B1F),
    surface: Color(0xFFFFFBFF),
    onSurface: Color(0xFF1C1B1F),
    surfaceVariant: Color(0xFFE4E1EC),
    onSurfaceVariant: Color(0xFF47464F),
    outline: Color(0xFF777680),
    onInverseSurface: Color(0xFFF3EFF4),
    inverseSurface: Color(0xFF313034),
    inversePrimary: Color(0xFFC1C1FF),
    shadow: Color(0xFF000000),
    surfaceTint: Color(0xFF5455A9),
  );

  static const ColorScheme darkColorStyle = ColorScheme(
    brightness: Brightness.dark,
    primary: Color(0xFFC1C1FF),
    onPrimary: Color(0xFF242478),
    primaryContainer: Color(0xFF3B3D8F),
    onPrimaryContainer: Color(0xFFE1DFFF),
    secondary: Color(0xFFC6C4DD),
    onSecondary: Color(0xFF2F2F42),
    secondaryContainer: Color(0xFF454559),
    onSecondaryContainer: Color(0xFFE2E0F9),
    tertiary: Color(0xFFE9B9D3),
    onTertiary: Color(0xFF46263A),
    tertiaryContainer: Color(0xFF5F3C51),
    onTertiaryContainer: Color(0xFFFFD8EC),
    error: Color(0xFFFFB4AB),
    errorContainer: Color(0xFF93000A),
    onError: Color(0xFF690005),
    onErrorContainer: Color(0xFFFFDAD6),
    background: Color(0xFF1C1B1F),
    onBackground: Color(0xFFE5E1E6),
    surface: Color(0xFF1C1B1F),
    onSurface: Color(0xFFE5E1E6),
    surfaceVariant: Color(0xFF47464F),
    onSurfaceVariant: Color(0xFFC8C5D0),
    outline: Color(0xFF918F9A),
    onInverseSurface: Color(0xFF1C1B1F),
    inverseSurface: Color(0xFFE5E1E6),
    inversePrimary: Color(0xFF5455A9),
    shadow: Color(0xFF000000),
    surfaceTint: Color(0xFFC1C1FF),
  );

  static const CustomColors lightCustomColors = CustomColors(
    sourceGold: Color(0xFFE2C197),
    gold: Color(0xFF825500),
    onGold: Color(0xFFFFFFFF),
    goldContainer: Color(0xFFFFDDB3),
    onGoldContainer: Color(0xFF291800),
    sourceVanilla: Color(0xFFC1CBA2),
    vanilla: Color(0xFF4F6703),
    onVanilla: Color(0xFFFFFFFF),
    vanillaContainer: Color(0xFFD0EE82),
    onVanillaContainer: Color(0xFF151F00),
    sourceMauve: Color(0xFFE9BAC7),
    mauve: Color(0xFF984062),
    onMauve: Color(0xFFFFFFFF),
    mauveContainer: Color(0xFFFFD9E3),
    onMauveContainer: Color(0xFF3E001E),
  );

  static const CustomColors darkCustomColors = CustomColors(
    sourceGold: Color(0xFFE2C197),
    gold: Color(0xFFFFB950),
    onGold: Color(0xFF452B00),
    goldContainer: Color(0xFF624000),
    onGoldContainer: Color(0xFFFFDDB3),
    sourceVanilla: Color(0xFFC1CBA2),
    vanilla: Color(0xFFB4D269),
    onVanilla: Color(0xFF273500),
    vanillaContainer: Color(0xFF3A4D00),
    onVanillaContainer: Color(0xFFD0EE82),
    sourceMauve: Color(0xFFE9BAC7),
    mauve: Color(0xFFFFB0C9),
    onMauve: Color(0xFF5E1133),
    mauveContainer: Color(0xFF7B294A),
    onMauveContainer: Color(0xFFFFD9E3),
  );
}
