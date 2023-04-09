import 'package:un_style/un_style.dart';
import 'package:flutter/material.dart';

class ChipEmoji extends StatelessWidget {
  final String emoji;
  final ValueChanged<bool>? onSelected;
  final bool selected;

  const ChipEmoji({
    Key? key,
    required this.emoji,
    this.onSelected,
    required this.selected,
  }) : super(key: key);

  bool get isEnabled => onSelected != null;

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;

    return ChoiceChip(
      padding: const EdgeInsets.all(14.0),
      shape: const CircleBorder(),
      side: BorderSide(
        width: UnStroke.L,
        color: isEnabled
            ? colorScheme.primary
            : colorScheme.outline.withOpacity(0.12),
      ),
      selectedColor: colorScheme.primary,
      backgroundColor: Colors.transparent,
      disabledColor: Colors.transparent,
      pressElevation: 0.0,
      label: Text(
        emoji,
        style: UnSymbolSizes.emojiL,
      ),
      selected: selected,
      onSelected: onSelected,
    );
  }
}
