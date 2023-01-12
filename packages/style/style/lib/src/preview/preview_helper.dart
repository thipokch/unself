import 'package:flutter/material.dart';
import 'package:unself_style/unself_component.dart';

class UnPreview {
  static const rowDivider = SizedBox(width: 10, height: 10);
  static const colDivider = SizedBox(width: 10, height: 10);

  static const double cardWidth = 115;
  static const double maxWidthConstraint = 400;

  static Widget sectionLabel(String text) {
    return _UnPreviewSectionLabel(label: text);
  }

  // void Function()? onPress(
  //     BuildContext context, bool isDisabled, String buttonName) {
  //   return isDisabled
  //       ? null
  //       : () {
  //           final snackBar = SnackBar(
  //             content: Text(
  //               'Yay! $buttonName is clicked!',
  //               style: TextStyle(color: Theme.of(context).colorScheme.surface),
  //             ),
  //             action: SnackBarAction(
  //               textColor: Theme.of(context).colorScheme.surface,
  //               label: 'Close',
  //               onPressed: () {},
  //             ),
  //           );

  //           ScaffoldMessenger.of(context).showSnackBar(snackBar);
  //         };
  // }
}

class _UnPreviewSectionLabel extends StatelessWidget {
  final String label;

  const _UnPreviewSectionLabel({
    Key? key,
    required this.label,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return HeadingSection(label: label);
  }
}
