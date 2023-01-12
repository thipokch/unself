import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:unself_style/unself_component.dart';
import 'package:unself_style/unself_style.dart';

class ButtonText extends TextButton {
  const ButtonText({
    Key? key,
    required VoidCallback? onPressed,
    VoidCallback? onLongPress,
    ValueChanged<bool>? onHover,
    ValueChanged<bool>? onFocusChange,
    ButtonStyle? style,
    FocusNode? focusNode,
    bool autofocus = false,
    Clip clipBehavior = Clip.none,
    required Widget child,
  }) : super(
          key: key,
          onPressed: onPressed,
          onLongPress: onLongPress,
          onHover: onHover,
          onFocusChange: onFocusChange,
          style: style,
          focusNode: focusNode,
          autofocus: autofocus,
          clipBehavior: clipBehavior,
          child: child,
        );

  @override
  ButtonStyle defaultStyleOf(BuildContext context) {
    return super
        .defaultStyleOf(
          context,
        )
        .copyWith(
          elevation: ButtonStyleButton.allOrNull(.0),
          foregroundColor: ButtonForeground(
            Theme.of(context).colorScheme.primary,
            Theme.of(context).colorScheme.onSurface,
          ),
          overlayColor: ButtonOverlay(
            Theme.of(context).colorScheme.primary,
          ),
          splashFactory: kIsWeb ? null : InkSparklePatch.splashFactory,
        );
  }

  factory ButtonText.icon({
    Key? key,
    VoidCallback? onPressed,
    VoidCallback? onLongPress,
    ValueChanged<bool>? onHover,
    ValueChanged<bool>? onFocusChange,
    ButtonStyle? style,
    FocusNode? focusNode,
    bool? autofocus,
    Clip? clipBehavior,
    required Widget icon,
    required Widget label,
  }) {
    return ButtonText(
      key: key,
      onPressed: onPressed,
      onLongPress: onLongPress,
      onHover: onHover,
      onFocusChange: onFocusChange,
      style: style,
      focusNode: focusNode,
      autofocus: autofocus ?? false,
      clipBehavior: clipBehavior ?? Clip.none,
      child: ButtonIcon(
        icon: icon,
        label: label,
      ),
    );
  }
}
