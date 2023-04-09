import 'package:flutter/material.dart';
import 'package:un_ui/un_ui.dart';

class CardTile extends StatelessWidget {
  const CardTile({
    Key? key,
    required this.emoji,
    required this.title,
    required this.description,
    this.trailing,
    this.onTap,
  }) : super(key: key);

  final String? emoji;
  final String? title;
  final String? description;
  final GestureTapCallback? onTap;
  final Widget? trailing;

  @override
  Widget build(BuildContext context) {
    final textTheme = Theme.of(context).textTheme;
    // final colorScheme = Theme.of(context).colorScheme;

    return ListTile(
      onTap: onTap,
      leading: emoji != null && emoji!.isNotEmpty
          ? Unmoji(
              emoji: emoji!,
              width: 42,
              height: 42,
            )
          : null,
      title: title != null ? Text(title!, style: textTheme.titleMedium) : null,
      subtitle: description != null
          ? Text(description!, style: textTheme.labelSmall)
          : null,
      trailing: trailing,
      // onTap: () {},
    );
  }
}
