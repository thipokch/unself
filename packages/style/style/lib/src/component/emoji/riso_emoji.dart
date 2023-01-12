import 'package:flutter/material.dart';
import 'package:unself_style/unself_component.dart';
import 'package:unself_style/unself_style.dart';

class RisoUnmoji extends StatelessWidget {
  final RisoShader shaders;
  final String emoji;
  final double? height;
  final double? width;

  const RisoUnmoji({
    super.key,
    required this.shaders,
    required this.emoji,
    this.height,
    this.width,
  });

  @override
  Widget build(BuildContext context) => FutureBuilder<ImageShader>(
        future: Unmoji(emoji: emoji).shader(),
        builder: (context, snapshot) {
          final themeData = Theme.of(context);
          final colorScheme = themeData.colorScheme;
          final isLight = themeData.brightness == Brightness.light;

          return SizedBox(
            height: height ?? 32,
            width: width ?? 32,
            child: snapshot.hasData
                ? CustomPaint(
                    painter: RisoPainter(
                      shaders: shaders,
                      // context: context,
                      frame: 190,
                      colorLighter: isLight
                          ? colorScheme.primaryContainer
                          : colorScheme.primary,
                      colorLight: isLight
                          ? colorScheme.secondaryContainer
                          : colorScheme.secondary,
                      colorDark: isLight
                          ? colorScheme.background
                          : colorScheme.onBackground,
                      colorDarker:
                          isLight ? colorScheme.primary : colorScheme.onPrimary,
                      height: height,
                      width: width,
                      imageShader: snapshot.data,
                    ),
                  )
                : Container(),
          );
        },
      );
}

extension Shader on Unmoji {
  Future<ImageShader> shader() =>
      loadImageShader("packages/unself_style/assets/emojis/$unicode.webp");
}
