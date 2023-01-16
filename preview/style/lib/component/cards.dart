import 'package:flutter/material.dart';
import 'package:unself_preview/unself_preview.dart';
import 'package:widgetbook_annotation/widgetbook_annotation.dart';

@WidgetbookUseCase(name: 'Default', type: Card)
Widget buildCards(BuildContext context) => const CardPreview();

class CardPreview extends StatelessWidget {
  const CardPreview({super.key});

  @override
  Widget build(BuildContext context) {
    // ignore: no_leading_underscores_for_local_identifiers
    const Widget _divider = UnPreview.rowDivider;

    return Column(
      children: const [
        _MaterialCardUnPreview(),
        _divider,
        // UnEditingCard(
        //   // title: "Collapse",
        //   // description: "Tap to collapse...",
        //   // emoji: "👅",
        //   isSelected: false,
        //   isExpandable: false,
        //   // ignore: no-empty-block
        //   onTap: () {},
        // ),
        // _divider,
        // UnEditingCard(
        //   // title: "Expanded",
        //   // description: "Tap to start writing...",
        //   // emoji: "👌",
        //   isSelected: true,
        //   isExpandable: true,
        //   // ignore: no-empty-block
        //   onTap: () {},
        // ),
      ],
    );
  }
}

class _MaterialCardUnPreview extends StatelessWidget {
  const _MaterialCardUnPreview({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Wrap(
      alignment: WrapAlignment.spaceEvenly,
      children: [
        SizedBox(
          width: UnPreview.cardWidth,
          child: Card(
            child: Container(
              padding: const EdgeInsets.all(10),
              child: Column(
                children: const [
                  Align(
                    alignment: Alignment.topRight,
                    child: Icon(Icons.more_vert),
                  ),
                  SizedBox(height: 35),
                  Align(
                    alignment: Alignment.bottomLeft,
                    child: Text("Elevated"),
                  ),
                ],
              ),
            ),
          ),
        ),
        SizedBox(
          width: UnPreview.cardWidth,
          child: Card(
            color: Theme.of(context).colorScheme.surfaceVariant,
            elevation: 0,
            child: Container(
              padding: const EdgeInsets.all(10),
              child: Column(
                children: const [
                  Align(
                    alignment: Alignment.topRight,
                    child: Icon(Icons.more_vert),
                  ),
                  SizedBox(height: 35),
                  Align(
                    alignment: Alignment.bottomLeft,
                    child: Text("Filled"),
                  ),
                ],
              ),
            ),
          ),
        ),
        SizedBox(
          width: UnPreview.cardWidth,
          child: Card(
            elevation: 0,
            shape: RoundedRectangleBorder(
              side: BorderSide(
                color: Theme.of(context).colorScheme.outline,
              ),
              borderRadius: const BorderRadius.all(Radius.circular(12)),
            ),
            child: Container(
              padding: const EdgeInsets.all(10),
              child: Column(
                children: const [
                  Align(
                    alignment: Alignment.topRight,
                    child: Icon(Icons.more_vert),
                  ),
                  SizedBox(height: 35),
                  Align(
                    alignment: Alignment.bottomLeft,
                    child: Text("Outlined"),
                  ),
                ],
              ),
            ),
          ),
        ),
      ],
    );
  }
}
