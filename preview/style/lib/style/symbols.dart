import 'package:unself_style/unself_style.dart';
import 'package:flutter/material.dart';
import 'package:widgetbook_annotation/widgetbook_annotation.dart';

@WidgetbookUseCase(name: 'Default', type: UnSymbols)
Widget buildSymbols(BuildContext context) => SingleChildScrollView(
      child: IconTheme(
        data: IconThemeData(
          color: Theme.of(context).colorScheme.onBackground,
        ),
        child: Column(
          children: [
            const SizedBox(height: 16),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: const [
                Icon(UnMaterialSymbols.add, size: UnSymbolSizes.M),
                Icon(UnMaterialSymbols.close, size: UnSymbolSizes.M),
                Icon(UnMaterialSymbols.close, size: UnSymbolSizes.M),
                Icon(UnMaterialSymbols.sticky_note_2, size: UnSymbolSizes.M),
                Icon(UnMaterialSymbols.more_vert, size: UnSymbolSizes.M),
              ],
            ),
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
                Icon(UnMaterialSymbols.arrow_back, size: UnSymbolSizes.M),
                Icon(UnMaterialSymbols.arrow_upward, size: UnSymbolSizes.M),
                Icon(UnMaterialSymbols.arrow_downward, size: UnSymbolSizes.M),
                Icon(UnMaterialSymbols.arrow_forward, size: UnSymbolSizes.M),
                Icon(UnMaterialSymbols.north_west, size: UnSymbolSizes.M),
                Icon(UnMaterialSymbols.north_east, size: UnSymbolSizes.M),
                Icon(UnMaterialSymbols.south_east, size: UnSymbolSizes.M),
                Icon(UnMaterialSymbols.south_west, size: UnSymbolSizes.M),
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
                Icon(UnMaterialSymbols.chevron_left, size: UnSymbolSizes.M),
                Icon(UnMaterialSymbols.chevron_right, size: UnSymbolSizes.M),
                Icon(UnMaterialSymbols.expand_more, size: UnSymbolSizes.M),
                Icon(UnMaterialSymbols.expand_less, size: UnSymbolSizes.M),
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
      ),
    );
