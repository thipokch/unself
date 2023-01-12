import 'package:flutter/material.dart';
import 'package:dynamic_color/dynamic_color.dart';

extension Harmonize on ColorScheme {
  ColorScheme harmonizeWith(Color color) => ColorScheme(
        brightness: brightness,
        primary: primary.harmonizeWith(color),
        onPrimary: onPrimary.harmonizeWith(color),
        primaryContainer: primaryContainer.harmonizeWith(color),
        onPrimaryContainer: onPrimaryContainer.harmonizeWith(color),
        secondary: secondary.harmonizeWith(color),
        onSecondary: onSecondary.harmonizeWith(color),
        secondaryContainer: secondaryContainer.harmonizeWith(color),
        onSecondaryContainer: onSecondaryContainer.harmonizeWith(color),
        tertiary: tertiary.harmonizeWith(color),
        onTertiary: onTertiary.harmonizeWith(color),
        tertiaryContainer: tertiaryContainer.harmonizeWith(color),
        onTertiaryContainer: onTertiaryContainer.harmonizeWith(color),
        error: error.harmonizeWith(color),
        onError: onError.harmonizeWith(color),
        errorContainer: errorContainer.harmonizeWith(color),
        onErrorContainer: onErrorContainer.harmonizeWith(color),
        background: background.harmonizeWith(color),
        onBackground: onBackground.harmonizeWith(color),
        surface: surface.harmonizeWith(color),
        onSurface: onSurface.harmonizeWith(color),
        surfaceVariant: surfaceVariant.harmonizeWith(color),
        onSurfaceVariant: onSurfaceVariant.harmonizeWith(color),
        outline: outline.harmonizeWith(color),
        shadow: shadow.harmonizeWith(color),
        inverseSurface: inverseSurface.harmonizeWith(color),
        onInverseSurface: onInverseSurface.harmonizeWith(color),
        inversePrimary: inversePrimary.harmonizeWith(color),
      );
}
