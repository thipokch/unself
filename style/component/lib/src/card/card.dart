import 'package:unself_component/unself_component.dart';
import 'package:unself_style/unself_style.dart';
import 'package:figma_squircle/figma_squircle.dart';
import 'package:flutter/material.dart';

export 'card_tile.dart';
export 'card_text_edit.dart';
export 'card_editing.dart';

class UnCard extends StatelessWidget {
  final Widget? header;
  final Widget body;
  final Widget? footer;
  final GestureTapCallback? onTap;
  final bool isExpandable;
  final bool isSelected;

  const UnCard({
    super.key,
    this.header,
    required this.body,
    this.footer,
    this.isSelected = false,
    this.isExpandable = false,
    this.onTap,
  });

  @override
  Widget build(BuildContext context) => Card(
        elevation: 1,
        clipBehavior: Clip.antiAliasWithSaveLayer,
        shape: const SmoothRectangleBorder(
          borderRadius: SmoothBorderRadius.all(
            SmoothRadius(
              cornerRadius: UnCorner.Large,
              cornerSmoothing: UnCorner.smoothFactor,
            ),
          ),
        ),
        child: InkWell(
          onTap: onTap,
          child: Padding(
            padding: const EdgeInsets.symmetric(
              vertical: 12.0,
              horizontal: 8.0,
            ),
            child: AnimatedSize(
              alignment: Alignment.topCenter,
              duration: UnDurations.moderate,
              curve: UnEasing.linear,
              child: ConditionalParentWidget(
                condition: isSelected || !isExpandable,
                conditionalBuilder: (child) =>
                    AspectRatio(aspectRatio: 1, child: child),
                child: Column(
                  children: [
                    if (header != null) header!,
                    if (isSelected || !isExpandable)
                      Expanded(child: Center(child: body)),
                    if (footer != null) footer!,
                  ],
                ),
              ),
            ),
          ),
        ),
      );
}
