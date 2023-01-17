import 'package:flutter/material.dart';
import 'package:unself_component/unself_component.dart';
import 'package:unself_license_detail/license_detail.dart';
import 'package:unself_style/unself_style.dart';

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
            padding: EdgeInsets.all(UnSpaces.M),
            sliver: LicenseDetailSliver(packageName: packageName),
          ),
        ],
      );
}
