import 'package:flutter/material.dart';
import 'package:un_ui/un_ui.dart';
import 'package:un_settings_appearance/settings_appearance.dart';

/// {@template settings_appearance_page}
/// A description for SettingsAppearancePage
/// {@endtemplate}
class SettingsAppearancePage extends StatelessWidget {
  /// {@macro settings_appearance_page}
  const SettingsAppearancePage({super.key});

  @override
  Widget build(BuildContext context) => BlocProvider(
        create: (context) => SettingsAppearanceBloc(
          analyticService: context.read(),
          userRepository: context.read(),
        ),
        child: const UnAppPage(
          name: Text("Appearance"),
          slivers: [SettingsAppearanceSliver()],
        ),
      );
}
