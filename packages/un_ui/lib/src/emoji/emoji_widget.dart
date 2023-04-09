import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

import 'constants.dart';
import 'enums.dart';
import 'utils.dart';

/// returns an image of an emoji
///
/// The format of the emoji image it can be [UnmojiFormat.webp]
/// 72*72 png or [UnmojiFormat.svg] svg by default.
class Unmoji extends StatelessWidget {
  const Unmoji({
    Key? key,
    required this.emoji,
    this.height,
    this.width,
    this.twemojiFormat = UnmojiFormat.webp,
    this.fit,
  }) : super(key: key);

  /// The emoji string
  ///
  /// on passing a string with text and emojis it will show the last emoji
  /// in that string
  final String emoji;
  final double? height;
  final double? width;

  /// How to inscribe the image into the space allocated during layout.
  ///
  /// The default varies based on the other fields. See the discussion at
  /// [paintImage].
  final BoxFit? fit;

  /// The format of the emoji image it can be [UnmojiFormat.webp]
  /// 72*72 png or [UnmojiFormat.svg] svg by default.
  ///
  /// Note: svg does'nt works on Flutter html web renderer
  final UnmojiFormat twemojiFormat;
  @override
  Widget build(BuildContext context) {
    if (unicode == '') return const SizedBox.shrink();

    switch (twemojiFormat) {
      case UnmojiFormat.webp:
        return Image.asset(
          'assets/emojis/$unicode.webp',
          fit: fit,
          height: width,
          width: height,
          package: 'un_style',
        );
      case UnmojiFormat.svg:
        return SvgPicture.asset(
          'assets/svg/$unicode.svg',
          height: height,
          width: width,
          fit: fit ?? BoxFit.contain,
          package: 'un_style',
        );
      case UnmojiFormat.networkSvg:
        return SvgPicture.network(
          'https://abs.twimg.com/emoji/v2/svg/$unicode.svg',
          height: height,
          width: width,
          fit: fit ?? BoxFit.contain,
        );
    }
  }

  String get unicode {
    var cleanEmoji = '';
    emoji.splitMapJoin(
      regex,
      onMatch: (m) => cleanEmoji = m.input.substring(m.start, m.end),
    );

    return emojiToUnicode(cleanEmoji);
  }
}
