import 'package:flutter/material.dart';
import 'package:unself_style/src/preview/preview.dart';

class CompositePreview extends StatelessWidget {
  const CompositePreview({super.key});

  @override
  Widget build(BuildContext context) {
    // ignore: no_leading_underscores_for_local_identifiers
    Widget Function(String) _sectionLabel = UnPreview.sectionLabel;

    return Expanded(
      child: Padding(
        padding: const EdgeInsets.symmetric(
          horizontal: 12.0,
        ),
        child: ListView(
          keyboardDismissBehavior: ScrollViewKeyboardDismissBehavior.onDrag,
          shrinkWrap: true,
          children: [
            _sectionLabel("Cards"),
            // const CardPreview(),
            _sectionLabel("Text Box"),
            // const TextPreview(),
            _sectionLabel("Dialogs"),
            const Dialogs(),
          ],
        ),
      ),
    );
  }
}
