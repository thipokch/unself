import 'package:flutter/material.dart';
import 'package:un_ui/un_ui.dart';
import 'package:un_settings_list/settings_list.dart';

class SettingsListPage extends StatelessWidget {
  const SettingsListPage({
    super.key,
    required this.onSelectData,
    required this.onSelectAppearance,
    required this.onSelectLicense,
    required this.onSelectFeedback,
    required this.onSelectPrivacy,
    required this.onSelectTerms,
    this.trailing,
  });

  final VoidCallback onSelectData;
  final VoidCallback onSelectAppearance;
  final VoidCallback onSelectLicense;
  final VoidCallback onSelectFeedback;
  final VoidCallback onSelectPrivacy;
  final VoidCallback onSelectTerms;

  final Widget? trailing;

  @override
  Widget build(BuildContext context) => UnAppPage(
        name: const Text("Me"),
        // description: Text(""),
        slivers: [
          SettingsListSliver(
            onSelectData: onSelectData,
            onSelectAppearance: onSelectAppearance,
            onSelectLicense: onSelectLicense,
            onSelectFeedback: onSelectFeedback,
            onSelectPrivacy: onSelectPrivacy,
            onSelectTerms: onSelectTerms,
          ),
          if (trailing != null) SliverToBoxAdapter(child: trailing!),
        ],
      );
}
