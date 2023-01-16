import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:unself_component/unself_component.dart';

export 'art_page.dart';

typedef UnTransitionPage = CupertinoPage;

class UnAppPage extends StatelessWidget {
  final Widget name;
  final Widget? description;
  final List<Widget> slivers;
  final bool implyLeading;
  final Widget? leading;
  final Widget? trailing;
  final bool isImmersive;

  const UnAppPage({
    super.key,
    required this.name,
    this.description,
    required this.slivers,
    this.implyLeading = true,
    this.leading,
    this.trailing,
    this.isImmersive = false,
  });

  @override
  Widget build(BuildContext context) => UnScaffold(
        slivers: [
          UnSliverAppBar(
            title: name,
            description: description,
            implyLeading: implyLeading,
            leading: leading,
            trailing: trailing,
            isImmersive: isImmersive,
          ),
          ...slivers,
        ],
      );
}

void show({
  required BuildContext context,
  required WidgetBuilder builder,
}) =>
    Navigator.of(context).push(MaterialPageRoute(
      builder: (BuildContext context) => builder(context),
    ));
