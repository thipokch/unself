import 'package:flutter/material.dart';
import 'package:unself_component/unself_component.dart';

class RisoCanvas extends StatelessWidget {
  const RisoCanvas({
    super.key,
    required this.shaders,
    this.height,
    this.width,
    this.frame,
    this.colorLighter,
    this.colorLight,
    this.colorDark,
    this.colorDarker,
  });

  final RisoShader shaders;
  final double? height;
  final double? width;

  final double? frame;
  final Color? colorLighter;
  final Color? colorLight;
  final Color? colorDark;
  final Color? colorDarker;

  @override
  Widget build(BuildContext context) {
    final themeData = Theme.of(context);
    final colorScheme = themeData.colorScheme;
    final isLight = themeData.brightness == Brightness.light;

    return ConditionalParentWidget(
      condition: height != null && width != null,
      conditionalBuilder: (Widget child) => SizedBox(
        height: height,
        width: width,
        child: child,
      ),
      child: CustomPaint(
        painter: RisoPainter(
          shaders: shaders,
          height: height,
          width: width,
          frame: frame ?? 7,
          colorLighter: colorLighter ??
              (isLight ? colorScheme.primaryContainer : colorScheme.primary),
          colorLight: colorLight ??
              (isLight
                  ? colorScheme.secondaryContainer
                  : colorScheme.secondary),
          colorDark: colorDark ??
              (isLight ? colorScheme.background : colorScheme.onBackground),
          colorDarker: colorDarker ??
              (isLight ? colorScheme.primary : colorScheme.onPrimary),
        ),
      ),
    );
  }
}
