import 'package:flutter/material.dart';

import 'constants.dart';
import 'enums.dart';
import 'emoji_widget.dart';

/// The [UnmojiTextSpan] widget extends [TextSpan]
/// widget and it can be used in a [RichText] widget
/// and it also renders text with twitter emojis
class UnmojiTextSpan extends TextSpan {
  UnmojiTextSpan({
    TextStyle? style,
    required String text,
    List<TextSpan>? children,
    double emojiFontMultiplier = 1,
    this.twemojiFormat = UnmojiFormat.svg,
  }) : super(
          style: style,
          children: _parse(style, text, twemojiFormat, emojiFontMultiplier)
            ..addAll(children ?? []),
        );

  final UnmojiFormat twemojiFormat;
  static List<InlineSpan> _parse(
    TextStyle? style,
    String text,
    UnmojiFormat twemojiFormat,
    double emojiFontMultiplier,
  ) {
    final spans = <InlineSpan>[];
    final textStyle = style ?? const TextStyle();

    final emojiStyle = textStyle.copyWith(
      fontSize: (textStyle.fontSize ?? 14) * emojiFontMultiplier,
    );
    text.splitMapJoin(
      regex,
      onMatch: (m) {
        final emojiStr = m.input.substring(m.start, m.end);
        spans.add(
          WidgetSpan(
            child: Padding(
              padding: EdgeInsets.symmetric(
                horizontal: emojiStyle.letterSpacing ?? 1,
                vertical: emojiStyle.height ?? 2,
              ),
              child: Unmoji(
                emoji: emojiStr,
                twemojiFormat: twemojiFormat,
                height: emojiStyle.fontSize,
                width: emojiStyle.fontSize,
              ),
            ),
          ),
        );

        return '';
      },
      onNonMatch: (s) {
        spans.add(TextSpan(
          text: s,
          style: style,
        ));

        return '';
      },
    );

    return spans;
  }
}
