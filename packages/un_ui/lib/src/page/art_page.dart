import 'package:flutter/material.dart';
import 'package:un_ui/un_ui.dart';

class UnArtPage extends StatelessWidget {
  final Widget emoji;
  final Widget name;
  final Widget? description;
  final Widget? action;
  final Widget? background;
  final List<Widget> slivers;
  final Widget? leading;
  final Widget? trailing;

  const UnArtPage({
    super.key,
    required this.emoji,
    required this.name,
    this.description,
    this.action,
    this.background,
    required this.slivers,
    this.leading,
    this.trailing,
  });

  @override
  Widget build(BuildContext context) => UnScaffold(
        slivers: [
          UnSliverArtBar(
            emoji: emoji,
            name: name,
            description: description,
            action: action,
            background: background,
            leading: leading,
            trailing: trailing,
          ),
          ...slivers,
        ],
      );
}
