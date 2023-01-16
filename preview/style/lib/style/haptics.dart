import 'package:flutter/material.dart';
import 'package:unself_preview/unself_preview.dart';
import 'package:unself_component/unself_component.dart';
import 'package:unself_style/unself_style.dart';
import 'package:widgetbook_annotation/widgetbook_annotation.dart';

@WidgetbookUseCase(name: 'Default', type: UnHaptics)
Widget buildHaptics(BuildContext context) {
  // ignore: no_leading_underscores_for_local_identifiers
  const Widget _divider = UnPreview.colDivider;

  return SingleChildScrollView(
    child: Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: [
        Column(
          children: const [
            ButtonTonal(
              onPressed: UnHaptics.warn,
              child: Text('Warn'),
            ),
            _divider,
            ButtonTonal(
              onPressed: UnHaptics.error,
              child: Text('Error'),
            ),
            _divider,
            ButtonTonal(
              onPressed: UnHaptics.success,
              child: Text('Success'),
            ),
          ],
        ),
        Column(
          children: const [
            ButtonTonal(
              onPressed: UnHaptics.light,
              child: Text('Light'),
            ),
            _divider,
            ButtonTonal(
              onPressed: UnHaptics.heavy,
              child: Text('Heavy'),
            ),
            _divider,
            ButtonTonal(
              onPressed: UnHaptics.medium,
              child: Text('Medium'),
            ),
          ],
        ),
        Column(
          children: const [
            ButtonTonal(
              onPressed: UnHaptics.select,
              child: Text('Select'),
            ),
            _divider,
            ButtonTonal(
              onPressed: UnHaptics.rigid,
              child: Text('Rigid'),
            ),
            _divider,
            ButtonTonal(
              onPressed: UnHaptics.soft,
              child: Text('Soft'),
            ),
          ],
        ),
      ],
    ),
  );
}
