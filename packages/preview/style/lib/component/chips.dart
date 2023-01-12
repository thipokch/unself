// ignore_for_file: no-empty-block

import 'package:flutter/material.dart';
import 'package:unself_preview/unself_preview.dart';
import 'package:unself_style/unself_component.dart';
import 'package:widgetbook_annotation/widgetbook_annotation.dart';

@WidgetbookUseCase(name: 'Default', type: Chip)
Widget buildChips(BuildContext context) => const ChipPreview();

class ChipPreview extends StatelessWidget {
  const ChipPreview({super.key});

  @override
  Widget build(BuildContext context) {
    // ignore: no_leading_underscores_for_local_identifiers
    const Widget _divider = UnPreview.rowDivider;

    return Column(
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            ChipEmoji(
              emoji: "😴",
              selected: false,
              onSelected: (_) {},
            ),
            ChipEmoji(
              emoji: "🤩",
              selected: true,
              onSelected: (_) {},
            ),
            const ChipEmoji(
              emoji: "⛔️",
              selected: false,
            ),
          ],
        ),
        _divider,
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            ChipText(
              text: "unselected",
              selected: false,
              onSelected: (_) {},
            ),
            ChipText(
              text: "selected",
              selected: true,
              onSelected: (_) {},
            ),
            const ChipText(
              text: "disabled",
              selected: false,
            ),
          ],
        ),
      ],
    );
  }
}
