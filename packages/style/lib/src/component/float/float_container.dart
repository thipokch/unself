import 'package:figma_squircle/figma_squircle.dart';
import 'package:flutter/material.dart';

class FloatContainer extends StatelessWidget {
  const FloatContainer({
    Key? key,
    required this.child,
    this.padding,
  }) : super(key: key);

  final Widget? child;
  final EdgeInsets? padding;

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;

    return child != null
        ? Container(
            decoration: ShapeDecoration(
              shape: SmoothRectangleBorder(
                borderRadius: SmoothBorderRadius(cornerRadius: 48),
              ),
              color: colorScheme.surface,
              shadows: [
                BoxShadow(
                  color: colorScheme.outline.withOpacity(.16),
                  blurRadius: 10,
                  spreadRadius: 1,
                ),
              ],
            ),
            clipBehavior: Clip.antiAlias,
            child: child,
          )
        : Container();
  }
}
