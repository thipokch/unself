import 'package:flutter/material.dart';
import 'package:unself_component/unself_component.dart';
import 'package:unself_style/unself_style.dart';

/// {@template settings_data_sliver}
/// Sliver of the SettingsDataPage.
///
/// Add what it does
/// {@endtemplate}
class SettingsDataSliver extends StatelessWidget {
  /// {@macro settings_data_sliver}
  const SettingsDataSliver({super.key, required this.onReset});

  final VoidCallback? onReset;

  @override
  Widget build(BuildContext context) => SliverPadding(
      padding: const EdgeInsets.symmetric(vertical: UnSpaces.M),
      sliver: SliverList(
        delegate: SliverChildListDelegate(
          SettingsDataSliver.children(),
        ),
      ));

  static List<Widget> children() => [
        ...{
          "Erase All Content and Settings": () {},
        }.entries.map(ListItemBuilder.tile),
      ];
}
