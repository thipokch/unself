import 'package:flutter/material.dart';
import 'package:unself_component/unself_component.dart';
import 'package:widgetbook_annotation/widgetbook_annotation.dart';

@WidgetbookUseCase(name: 'Default', type: HeadingPreview)
Widget buildHeadings(BuildContext context) => const HeadingPreview();

class HeadingPreview extends StatelessWidget {
  const HeadingPreview({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: const [
        HeadingHeadline(label: "Headline"),
        HeadingTitle(label: "Title"),
        HeadingSection(label: "Section"),
      ],
    );
  }
}
