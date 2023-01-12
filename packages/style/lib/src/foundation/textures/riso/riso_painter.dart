import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:unself_style/unself_style.dart';

class RisoPainter extends CustomPainter {
  const RisoPainter({
    required this.shaders,
    required this.frame,
    required this.height,
    required this.width,
    this.colorLighter,
    this.colorLight,
    this.colorDark,
    this.colorDarker,
    this.imageShader,
  });

  final RisoShader shaders;
  final double frame;
  final Color? colorLighter;
  final Color? colorLight;
  final Color? colorDark;
  final Color? colorDarker;
  final ImageShader? imageShader;
  final double? height;
  final double? width;

  @override
  void paint(Canvas canvas, Size size) {
    final isGradient = colorLighter != null &&
        colorLight != null &&
        colorDark != null &&
        colorDarker != null;

    final colors =
        isGradient ? [colorLighter, colorLight, colorDark, colorDarker] : [];

    final floatUniforms = Float32List.fromList([
      frame,
      height ?? size.width,
      width ?? size.height,
      ...colors
          .map((e) => <double>[
                e.red.toDouble(),
                e.green.toDouble(),
                e.blue.toDouble(),
              ])
          .expand((e) => e)
          .toList()
          .map((e) => e / 255.0),
    ]);

    final shader = imageShader == null
        ? shaders.risoCanvasFp.shader(
            floatUniforms: floatUniforms,
          )
        : shaders.risoImageFp.shader(
            floatUniforms: floatUniforms,
            samplerUniforms: [imageShader!],
          );

    canvas.drawRect(
      Rect.fromLTWH(0, 0, size.width, size.height),
      Paint()..shader = shader,
    );
  }

  @override
  bool shouldRepaint(RisoPainter oldDelegate) => false;
}
