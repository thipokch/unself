// See https://api.flutter.dev/flutter/material/ButtonStyle-class.html

import 'package:flutter/material.dart';
import 'package:unself_component/unself_component.dart';

class ButtonElevated extends ElevatedButton {
  const ButtonElevated({
    Key? key,
    VoidCallback? onPressed,
    VoidCallback? onLongPress,
    ValueChanged<bool>? onHover,
    ValueChanged<bool>? onFocusChange,
    ButtonStyle? style,
    FocusNode? focusNode,
    bool autofocus = false,
    Clip clipBehavior = Clip.none,
    required Widget? child,
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
          // elevation: ButtonStyleButton.allOrNull(.0),
          backgroundColor: ButtonBackground(
            Theme.of(context).colorScheme.surface,
            Theme.of(context).colorScheme.onSurface,
          ),
          shadowColor: MaterialStateProperty.all(
            Theme.of(context).colorScheme.shadow,
          ),
          foregroundColor: ButtonForeground(
            Theme.of(context).colorScheme.primary,
            Theme.of(context).colorScheme.onSurface,
          ),
          overlayColor: ButtonOverlay(
            Theme.of(context).colorScheme.primary,
          ),
        );
  }

  factory ButtonElevated.icon({
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
    return ButtonElevated(
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
