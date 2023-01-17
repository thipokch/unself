import 'package:flutter/material.dart';
import 'package:unself_component/unself_component.dart';
import 'package:unself_settings_data/settings_data.dart';

/// {@template settings_data_page}
/// A description for SettingsDataPage
/// {@endtemplate}
class SettingsDataPage extends StatelessWidget {
  /// {@macro settings_data_page}
  const SettingsDataPage({super.key});

  @override
  Widget build(BuildContext context) => UnAppPage(
        name: Text("Data & Privacy"),
        slivers: [
          SettingsDataSliver(
            onReset: () {
              // FlutterPlatformAlert.showCustomAlert(
              //   windowTitle: "Erase Your Data",
              //   text:
              //       "Erasing will restore this app to initial state. This action cannot be undone.",
              //   positiveButtonTitle: "Not Now",
              //   negativeButtonTitle: "Erase",
              // ).then((selection) {
              //   if (selection == CustomButton.negativeButton) {
              //     // repository.reset().then((value) => const ExerciseFlow().go(context));
              //   }
              // });
            },
          )
        ],
      );
}
