import 'package:flutter/material.dart';
import 'package:unself_component/unself_component.dart';
import 'package:unself_license_list/license_list.dart';

class LicenseListPage extends StatelessWidget {
  const LicenseListPage({super.key, required this.onSelectPackage});

  final Function(String packageName) onSelectPackage;

  @override
  Widget build(BuildContext context) => UnAppPage(
        name: Text("Acknowledgments"),
        // description: Text(""),
        slivers: [
          LicenseListSliver(onSelectPackage: onSelectPackage),
        ],
      );
}
