import 'package:flutter/material.dart';
import 'package:un_ui/un_ui.dart';
import 'package:un_license_list/license_list.dart';

class LicenseListPage extends StatelessWidget {
  const LicenseListPage({super.key, required this.onSelectPackage});

  final Function(String packageName) onSelectPackage;

  @override
  Widget build(BuildContext context) => UnAppPage(
        name: const Text("Acknowledgments"),
        // description: Text(""),
        slivers: [
          LicenseListSliver(onSelectPackage: onSelectPackage),
        ],
      );
}
