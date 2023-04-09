import 'package:flutter/material.dart';
import 'package:un_ui/un_ui.dart';
import 'package:un_license_detail/license_detail.dart';
import 'package:un_style/un_style.dart';

class LicenseDetailPage extends StatelessWidget {
  const LicenseDetailPage({
    super.key,
    required this.packageName,
  });

  final String packageName;

  @override
  Widget build(BuildContext context) => UnAppPage(
        name: Text(packageName),
        // description: Text(""),
        slivers: [
          SliverPadding(
            padding: const EdgeInsets.all(UnSpaces.M),
            sliver: LicenseDetailSliver(packageName: packageName),
          ),
        ],
      );
}
