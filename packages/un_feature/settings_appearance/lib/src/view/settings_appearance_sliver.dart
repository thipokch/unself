import 'package:flutter/material.dart';
import 'package:un_settings_appearance/settings_appearance.dart';

/// {@template settings_appearance_sliver}
/// Sliver of the SettingsAppearancePage.
///
/// Add what it does
/// {@endtemplate}
class SettingsAppearanceSliver extends StatelessWidget {
  /// {@macro settings_appearance_sliver}
  const SettingsAppearanceSliver({super.key});

  @override
  Widget build(BuildContext context) => SettingsAppearanceBuilder(
        buildWhen: (previous, current) =>
            current.themeMode != previous.themeMode,
        builder: (context, state) => SliverList(
          delegate: SliverChildListDelegate(
            SettingsAppearanceView.children(bloc: context.read(), state: state),
          ),
        ),
      );
}
