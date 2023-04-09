import 'package:flutter/material.dart';
import 'package:un_style/un_style.dart';

class ButtonAction extends StatelessWidget {
  final String action;
  final void Function()? onPressed;
  const ButtonAction({
    super.key,
    required this.action,
    required this.onPressed,
  });

  @override
  Widget build(BuildContext context) {
    ColorScheme colorScheme = Theme.of(context).colorScheme;
    TextTheme textTheme = Theme.of(context).textTheme;

    return Padding(
      padding: const EdgeInsets.all(UnSpaces.S),
      child: FloatingActionButton.extended(
        elevation: 3,
        focusElevation: 1,
        foregroundColor: colorScheme.onPrimary,
        backgroundColor: colorScheme.primary,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(100),
        ),
        onPressed: () {
          UnHaptics.select();
          onPressed?.call();
        },
        label: Text(
          action.toUpperCase(),
          style: textTheme.labelLarge?.copyWith(
            color: colorScheme.onPrimary,
            letterSpacing: 1.0,
          ),
        ),
      ),
    );
  }
}
