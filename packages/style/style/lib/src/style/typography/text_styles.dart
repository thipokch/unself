import 'package:flutter/widgets.dart';
import 'package:unself_style/unself_style.dart';

/// UnselfStyle Text Style Definitions
class UnTextStyle {
  static const _brandTextStyle = TextStyle(
    package: 'unself_style',
    fontFamily: FontFamily.literata,
    // color: UnColors.black,
    fontWeight: UnFontWeight.regular,
  );

  static const _baseTextStyle = TextStyle(
    package: 'unself_style',
    fontFamily: FontFamily.inter,
    // color: UnColors.black,
    fontWeight: UnFontWeight.regular,
  );

  /// Display Large Text Style
  static TextStyle get displayLarge => _brandTextStyle.copyWith(
        fontSize: UnFontSizes.displayLarge,
        fontWeight: UnFontWeight.regular,
      );

  /// Display Medium Text Style
  static TextStyle get displayMedium => _brandTextStyle.copyWith(
        fontSize: UnFontSizes.displayMedium,
        fontWeight: UnFontWeight.regular,
      );

  /// Display Small Text Style
  static TextStyle get displaySmall => _brandTextStyle.copyWith(
        fontSize: UnFontSizes.displaySmall,
        fontWeight: UnFontWeight.regular,
      );

  /// Headline Large Text Style
  static TextStyle get headlineLarge => _brandTextStyle.copyWith(
        fontSize: UnFontSizes.headlineLarge,
        fontWeight: UnFontWeight.regular,
      );

  /// Headline Medium Text Style
  static TextStyle get headlineMedium => _brandTextStyle.copyWith(
        fontSize: UnFontSizes.headlineMedium,
        fontWeight: UnFontWeight.regular,
      );

  /// Headline Small Text Style
  static TextStyle get headlineSmall => _brandTextStyle.copyWith(
        fontSize: UnFontSizes.headlineSmall,
        fontWeight: UnFontWeight.regular,
      );

  /// Title Large Text Style
  static TextStyle get titleLarge => _brandTextStyle.copyWith(
        fontSize: UnFontSizes.titleLarge,
        fontWeight: UnFontWeight.regular,
      );

  /// Title Medium Text Style
  static TextStyle get titleMedium => _baseTextStyle.copyWith(
        fontSize: UnFontSizes.titleMedium,
        fontWeight: UnFontWeight.medium,
      );

  /// Title Small Text Style
  static TextStyle get titleSmall => _baseTextStyle.copyWith(
        fontSize: UnFontSizes.titleSmall,
        fontWeight: UnFontWeight.medium,
      );

  /// Body Large Text Style
  static TextStyle get bodyLarge => _baseTextStyle.copyWith(
        fontSize: UnFontSizes.bodyLarge,
        fontWeight: UnFontWeight.regular,
      );

  /// Body Medium Text Style
  static TextStyle get bodyMedium => _baseTextStyle.copyWith(
        fontSize: UnFontSizes.bodyMedium,
        fontWeight: UnFontWeight.regular,
      );

  /// Body Small Text Style
  static TextStyle get bodySmall => _baseTextStyle.copyWith(
        fontSize: UnFontSizes.bodySmall,
        fontWeight: UnFontWeight.regular,
      );

  /// Label Large Text Style
  static TextStyle get labelLarge => _baseTextStyle.copyWith(
        fontSize: UnFontSizes.labelLarge,
        fontWeight: UnFontWeight.medium,
      );

  /// Label Medium Text Style
  static TextStyle get labelMedium => _baseTextStyle.copyWith(
        fontSize: UnFontSizes.labelMedium,
        fontWeight: UnFontWeight.medium,
      );

  /// Label Small Text Style
  static TextStyle get labelSmall => _baseTextStyle.copyWith(
        fontSize: UnFontSizes.labelSmall,
        fontWeight: UnFontWeight.medium,
      );
}
