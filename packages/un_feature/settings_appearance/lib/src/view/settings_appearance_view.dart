import 'package:flutter/material.dart';
import 'package:un_settings_appearance/settings_appearance.dart';
import 'package:un_style/un_style.dart';

/// {@template settings_appearance_view}
/// View of the SettingsAppearancePage.
///
/// Add what it does
/// {@endtemplate}
class SettingsAppearanceView extends StatelessWidget {
  /// {@macro settings_appearance_view}
  const SettingsAppearanceView({super.key});

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<SettingsAppearanceBloc, SettingsAppearanceState>(
      buildWhen: (previous, current) => current.themeMode != previous.themeMode,
      builder: (context, state) => SliverList(
        delegate: SliverChildListDelegate(
          SettingsAppearanceView.children(bloc: context.read(), state: state),
        ),
      ),
    );
  }

  static List<Widget> children({
    required SettingsAppearanceBloc bloc,
    required SettingsAppearanceState state,
  }) =>
      [
        ...{
          "Automatic": ThemeMode.system,
          "Light": ThemeMode.light,
          "Dark": ThemeMode.dark,
        }.entries.map<ListTile>((_) => ListTile(
              title: Text(_.key),
              trailing: Visibility(
                visible: state.themeMode == _.value,
                child: const Icon(UnSymbols.checkmark),
              ),
              onTap: () => bloc.add(
                SettingsAppearanceEvent.setThemeMode(themeMode: _.value),
              ),
            )),
      ];
}
