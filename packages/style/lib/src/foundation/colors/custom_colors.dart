import 'package:flutter/material.dart';
import 'package:dynamic_color/dynamic_color.dart';

/// Defines a set of custom colors, each comprised of 4 complementary tones.
///
/// See also:
///   * <https://m3.material.io/styles/color/the-color-system/custom-colors>
@immutable
class CustomColors extends ThemeExtension<CustomColors> {
  const CustomColors({
    required this.sourceGold,
    required this.gold,
    required this.onGold,
    required this.goldContainer,
    required this.onGoldContainer,
    required this.sourceVanilla,
    required this.vanilla,
    required this.onVanilla,
    required this.vanillaContainer,
    required this.onVanillaContainer,
    required this.sourceMauve,
    required this.mauve,
    required this.onMauve,
    required this.mauveContainer,
    required this.onMauveContainer,
  });

  final Color? sourceGold;
  final Color? gold;
  final Color? onGold;
  final Color? goldContainer;
  final Color? onGoldContainer;
  final Color? sourceVanilla;
  final Color? vanilla;
  final Color? onVanilla;
  final Color? vanillaContainer;
  final Color? onVanillaContainer;
  final Color? sourceMauve;
  final Color? mauve;
  final Color? onMauve;
  final Color? mauveContainer;
  final Color? onMauveContainer;

  @override
  CustomColors copyWith({
    Color? sourceGold,
    Color? gold,
    Color? onGold,
    Color? goldContainer,
    Color? onGoldContainer,
    Color? sourceVanilla,
    Color? vanilla,
    Color? onVanilla,
    Color? vanillaContainer,
    Color? onVanillaContainer,
    Color? sourceMauve,
    Color? mauve,
    Color? onMauve,
    Color? mauveContainer,
    Color? onMauveContainer,
  }) {
    return CustomColors(
      sourceGold: sourceGold ?? this.sourceGold,
      gold: gold ?? this.gold,
      onGold: onGold ?? this.onGold,
      goldContainer: goldContainer ?? this.goldContainer,
      onGoldContainer: onGoldContainer ?? this.onGoldContainer,
      sourceVanilla: sourceVanilla ?? this.sourceVanilla,
      vanilla: vanilla ?? this.vanilla,
      onVanilla: onVanilla ?? this.onVanilla,
      vanillaContainer: vanillaContainer ?? this.vanillaContainer,
      onVanillaContainer: onVanillaContainer ?? this.onVanillaContainer,
      sourceMauve: sourceMauve ?? this.sourceMauve,
      mauve: mauve ?? this.mauve,
      onMauve: onMauve ?? this.onMauve,
      mauveContainer: mauveContainer ?? this.mauveContainer,
      onMauveContainer: onMauveContainer ?? this.onMauveContainer,
    );
  }

  @override
  CustomColors lerp(ThemeExtension<CustomColors>? other, double t) {
    if (other is! CustomColors) {
      return this;
    }

    return CustomColors(
      sourceGold: Color.lerp(sourceGold, other.sourceGold, t),
      gold: Color.lerp(gold, other.gold, t),
      onGold: Color.lerp(onGold, other.onGold, t),
      goldContainer: Color.lerp(goldContainer, other.goldContainer, t),
      onGoldContainer: Color.lerp(onGoldContainer, other.onGoldContainer, t),
      sourceVanilla: Color.lerp(sourceVanilla, other.sourceVanilla, t),
      vanilla: Color.lerp(vanilla, other.vanilla, t),
      onVanilla: Color.lerp(onVanilla, other.onVanilla, t),
      vanillaContainer: Color.lerp(vanillaContainer, other.vanillaContainer, t),
      onVanillaContainer:
          Color.lerp(onVanillaContainer, other.onVanillaContainer, t),
      sourceMauve: Color.lerp(sourceMauve, other.sourceMauve, t),
      mauve: Color.lerp(mauve, other.mauve, t),
      onMauve: Color.lerp(onMauve, other.onMauve, t),
      mauveContainer: Color.lerp(mauveContainer, other.mauveContainer, t),
      onMauveContainer: Color.lerp(onMauveContainer, other.onMauveContainer, t),
    );
  }

  /// Returns an instance of [CustomColors] in which the following custom
  /// colors are harmonized with [dynamic]'s [ColorScheme.primary].
  ///   * [CustomColors.sourceGold]
  ///   * [CustomColors.gold]
  ///   * [CustomColors.onGold]
  ///   * [CustomColors.goldContainer]
  ///   * [CustomColors.onGoldContainer]
  ///   * [CustomColors.sourceVanilla]
  ///   * [CustomColors.vanilla]
  ///   * [CustomColors.onVanilla]
  ///   * [CustomColors.vanillaContainer]
  ///   * [CustomColors.onVanillaContainer]
  ///   * [CustomColors.sourceMauve]
  ///   * [CustomColors.mauve]
  ///   * [CustomColors.onMauve]
  ///   * [CustomColors.mauveContainer]
  ///   * [CustomColors.onMauveContainer]
  ///
  /// See also:
  ///   * <https://m3.material.io/styles/color/the-color-system/custom-colors#harmonization>
  CustomColors harmonized(ColorScheme dynamic) {
    return copyWith(
      sourceGold: sourceGold!.harmonizeWith(dynamic.primary),
      gold: gold!.harmonizeWith(dynamic.primary),
      onGold: onGold!.harmonizeWith(dynamic.primary),
      goldContainer: goldContainer!.harmonizeWith(dynamic.primary),
      onGoldContainer: onGoldContainer!.harmonizeWith(dynamic.primary),
      sourceVanilla: sourceVanilla!.harmonizeWith(dynamic.primary),
      vanilla: vanilla!.harmonizeWith(dynamic.primary),
      onVanilla: onVanilla!.harmonizeWith(dynamic.primary),
      vanillaContainer: vanillaContainer!.harmonizeWith(dynamic.primary),
      onVanillaContainer: onVanillaContainer!.harmonizeWith(dynamic.primary),
      sourceMauve: sourceMauve!.harmonizeWith(dynamic.primary),
      mauve: mauve!.harmonizeWith(dynamic.primary),
      onMauve: onMauve!.harmonizeWith(dynamic.primary),
      mauveContainer: mauveContainer!.harmonizeWith(dynamic.primary),
      onMauveContainer: onMauveContainer!.harmonizeWith(dynamic.primary),
    );
  }
}
