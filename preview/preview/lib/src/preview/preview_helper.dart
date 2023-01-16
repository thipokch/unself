import 'package:flutter/material.dart';

class UnPreview {
  static const rowDivider = SizedBox(width: 10, height: 10);
  static const colDivider = SizedBox(width: 10, height: 10);

  static const double cardWidth = 115;
  static const double maxWidthConstraint = 400;

  static Widget sectionLabel(String text) {
    return _UnPreviewSectionLabel(label: text);
  }
}

class _UnPreviewSectionLabel extends StatelessWidget {
  final String label;

  const _UnPreviewSectionLabel({
    Key? key,
    required this.label,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Text(label);
  }
}
