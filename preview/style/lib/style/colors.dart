import 'package:flutter/material.dart';
import 'package:unself_preview/unself_preview.dart';
import 'package:unself_style/unself_style.dart';
import 'package:widgetbook_annotation/widgetbook_annotation.dart';

@WidgetbookUseCase(name: 'Default', type: UnColors)
Widget buildColors(BuildContext context) =>
    ColorSchemeView(colorScheme: Theme.of(context).colorScheme);

class ColorSchemeView extends StatelessWidget {
  const ColorSchemeView({super.key, required this.colorScheme});

  final ColorScheme colorScheme;

  @override
  Widget build(BuildContext context) {
    // ignore: no_leading_underscores_for_local_identifiers
    const Widget _divider = UnPreview.rowDivider;

    return SingleChildScrollView(
      child: Container(
        color: colorScheme.background,
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            ColorGroup(children: [
              ColorChip(
                label: "primary",
                color: colorScheme.primary,
                onColor: colorScheme.onPrimary,
              ),
              ColorChip(
                label: "onPrimary",
                color: colorScheme.onPrimary,
                onColor: colorScheme.primary,
              ),
              ColorChip(
                label: "primaryContainer",
                color: colorScheme.primaryContainer,
                onColor: colorScheme.onPrimaryContainer,
              ),
              ColorChip(
                label: "onPrimaryContainer",
                color: colorScheme.onPrimaryContainer,
                onColor: colorScheme.primaryContainer,
              ),
            ]),
            _divider,
            ColorGroup(children: [
              ColorChip(
                label: "secondary",
                color: colorScheme.secondary,
                onColor: colorScheme.onSecondary,
              ),
              ColorChip(
                label: "onSecondary",
                color: colorScheme.onSecondary,
                onColor: colorScheme.secondary,
              ),
              ColorChip(
                label: "secondaryContainer",
                color: colorScheme.secondaryContainer,
                onColor: colorScheme.onSecondaryContainer,
              ),
              ColorChip(
                label: "onSecondaryContainer",
                color: colorScheme.onSecondaryContainer,
                onColor: colorScheme.secondaryContainer,
              ),
            ]),
            _divider,
            ColorGroup(
              children: [
                ColorChip(
                  label: 'tertiary',
                  color: colorScheme.tertiary,
                  onColor: colorScheme.onTertiary,
                ),
                ColorChip(
                  label: 'onTertiary',
                  color: colorScheme.onTertiary,
                  onColor: colorScheme.tertiary,
                ),
                ColorChip(
                  label: 'tertiaryContainer',
                  color: colorScheme.tertiaryContainer,
                  onColor: colorScheme.onTertiaryContainer,
                ),
                ColorChip(
                  label: 'onTertiaryContainer',
                  color: colorScheme.onTertiaryContainer,
                  onColor: colorScheme.tertiaryContainer,
                ),
              ],
            ),
            _divider,
            ColorGroup(
              children: [
                ColorChip(
                  label: 'error',
                  color: colorScheme.error,
                  onColor: colorScheme.onError,
                ),
                ColorChip(
                  label: 'onError',
                  color: colorScheme.onError,
                  onColor: colorScheme.error,
                ),
                ColorChip(
                  label: 'errorContainer',
                  color: colorScheme.errorContainer,
                  onColor: colorScheme.onErrorContainer,
                ),
                ColorChip(
                  label: 'onErrorContainer',
                  color: colorScheme.onErrorContainer,
                  onColor: colorScheme.errorContainer,
                ),
              ],
            ),
            _divider,
            ColorGroup(
              children: [
                ColorChip(
                  label: 'background',
                  color: colorScheme.background,
                  onColor: colorScheme.onBackground,
                ),
                ColorChip(
                  label: 'onBackground',
                  color: colorScheme.onBackground,
                  onColor: colorScheme.background,
                ),
              ],
            ),
            _divider,
            ColorGroup(
              children: [
                ColorChip(
                  label: 'surface',
                  color: colorScheme.surface,
                  onColor: colorScheme.onSurface,
                ),
                ColorChip(
                  label: 'onSurface',
                  color: colorScheme.onSurface,
                  onColor: colorScheme.surface,
                ),
                ColorChip(
                  label: 'surfaceVariant',
                  color: colorScheme.surfaceVariant,
                  onColor: colorScheme.onSurfaceVariant,
                ),
                ColorChip(
                  label: 'onSurfaceVariant',
                  color: colorScheme.onSurfaceVariant,
                  onColor: colorScheme.surfaceVariant,
                ),
              ],
            ),
            _divider,
            ColorGroup(
              children: [
                ColorChip(label: 'outline', color: colorScheme.outline),
                ColorChip(label: 'shadow', color: colorScheme.shadow),
                ColorChip(
                  label: 'inverseSurface',
                  color: colorScheme.inverseSurface,
                  onColor: colorScheme.onInverseSurface,
                ),
                ColorChip(
                  label: 'onInverseSurface',
                  color: colorScheme.onInverseSurface,
                  onColor: colorScheme.inverseSurface,
                ),
                ColorChip(
                  label: 'inversePrimary',
                  color: colorScheme.inversePrimary,
                  onColor: colorScheme.primary,
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

class ColorGroup extends StatelessWidget {
  const ColorGroup({super.key, required this.children});

  final List<Widget> children;

  @override
  Widget build(BuildContext context) {
    return Card(
      clipBehavior: Clip.antiAlias,
      child: Column(
        children: children,
      ),
    );
  }
}

class ColorChip extends StatelessWidget {
  const ColorChip({
    super.key,
    required this.color,
    required this.label,
    this.onColor,
  });

  final Color color;
  final Color? onColor;
  final String label;

  static Color contrastColor(Color color) {
    final brightness = ThemeData.estimateBrightnessForColor(color);
    switch (brightness) {
      case Brightness.dark:
        return Colors.white;
      case Brightness.light:
        return Colors.black;
    }
  }

  @override
  Widget build(BuildContext context) {
    final Color labelColor = onColor ?? contrastColor(color);

    return Container(
      color: color,
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Row(
          children: [
            Expanded(child: Text(label, style: TextStyle(color: labelColor))),
          ],
        ),
      ),
    );
  }
}
