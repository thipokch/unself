import 'package:unself_style/unself_style.dart';
import 'package:flutter/material.dart';
import 'package:widgetbook_annotation/widgetbook_annotation.dart';

@WidgetbookUseCase(name: 'Default', type: UnSymbols)
Widget buildSymbols(BuildContext context) {
  return SingleChildScrollView(
    child: Column(
      children: [
        const SizedBox(height: 16),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: const [
            Icon(UnSymbols.add, size: UnSymbolSizes.M),
            Icon(UnSymbols.dismiss, size: UnSymbolSizes.M),
            Icon(UnSymbols.checkmark, size: UnSymbolSizes.M),
            Icon(UnSymbols.note, size: UnSymbolSizes.M),
            Icon(UnSymbols.moreVertical, size: UnSymbolSizes.M),
          ],
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: const [
            Icon(UnSymbols.brandArrowLeft, size: UnSymbolSizes.M),
            Icon(UnSymbols.brandArrowUp, size: UnSymbolSizes.M),
            Icon(UnSymbols.brandArrowRight, size: UnSymbolSizes.M),
            Icon(UnSymbols.brandArrowDown, size: UnSymbolSizes.M),
            Icon(UnSymbols.brandArrowUpLeft, size: UnSymbolSizes.M),
            Icon(UnSymbols.brandArrowUpRight, size: UnSymbolSizes.M),
            // Icon(UnSymbols.brandArrowDownRight, size: UnSymbolSizes.M),
            Icon(UnSymbols.brandArrowDownLeft, size: UnSymbolSizes.M),
            // Icon(UnSymbols.brandArrowDownRight, size: UnSymbolSizes.M),
            Icon(UnSymbols.brandArrowUpDown, size: UnSymbolSizes.M),
            // Icon(UnSymbols.brandArrowDownRight, size: UnSymbolSizes.M),
            // Icon(UnSymbols.brandArrowLeftRight, size: UnSymbolSizes.M),
          ],
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: const [
            Icon(UnSymbols.chevronBack, size: UnSymbolSizes.M),
            Icon(UnSymbols.chevronForward, size: UnSymbolSizes.M),
            Icon(UnSymbols.chevronUp, size: UnSymbolSizes.M),
            Icon(UnSymbols.chevronDown, size: UnSymbolSizes.M),
            Icon(UnSymbols.chevronLeft, size: UnSymbolSizes.M),
            Icon(UnSymbols.chevronRight, size: UnSymbolSizes.M),
          ],
        ),
      ],
    ),
  );
}
