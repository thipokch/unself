import 'package:flutter/material.dart';
import 'package:unself_component/unself_component.dart';
import 'package:unself_style/unself_style.dart';

class SettingsListSliver extends StatelessWidget {
  const SettingsListSliver({
    super.key,
    required this.onSelectData,
    required this.onSelectAppearance,
    required this.onSelectLicense,
    required this.onSelectFeedback,
    required this.onSelectPrivacy,
    required this.onSelectTerms,
  });

  final VoidCallback onSelectData;
  final VoidCallback onSelectAppearance;
  final VoidCallback onSelectLicense;
  final VoidCallback onSelectFeedback;
  final VoidCallback onSelectPrivacy;
  final VoidCallback onSelectTerms;

  List<Widget> get children => [
        ...{
          "Data & Privacy": onSelectData,
        }.entries.map(ListItemBuilder.tile),
        ListItemBuilder.section("GENERAL"),
        ...{
          "Appearance": onSelectAppearance,
        }.entries.map(ListItemBuilder.tile),
        ListItemBuilder.section("ABOUT"),
        ...{
          "Feedback": onSelectFeedback,
          "Privacy Policy": onSelectPrivacy,
          "Terms of Service": onSelectTerms,
          "Acknowledgments": onSelectLicense,
        }.entries.map(ListItemBuilder.tile),
        // const AppInfoView(),
      ];

  @override
  Widget build(BuildContext context) => SliverPadding(
      padding: const EdgeInsets.symmetric(vertical: UnSpaces.M),
      sliver: SliverList(
        delegate: SliverChildListDelegate(
          children,
        ),
      ));
}
