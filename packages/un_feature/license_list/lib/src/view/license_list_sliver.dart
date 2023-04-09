import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:un_license/un_license.dart';
import 'package:un_style/un_style.dart';

class LicenseListSliver extends StatelessWidget {
  const LicenseListSliver({super.key, required this.onSelectPackage});

  final Function(String packageName) onSelectPackage;

  @override
  Widget build(BuildContext context) => SliverPadding(
        padding: const EdgeInsets.symmetric(vertical: UnSpaces.M),
        sliver: FutureBuilder<LicenseData>(
          future: context.read<LicenseService>().licenses,
          builder: (context, snapshot) => snapshot.hasData
              ? SliverList(
                  delegate: SliverChildBuilderDelegate(
                    childCount: snapshot.data!.packages.length,
                    (context, index) {
                      final data = snapshot.data!;
                      final package = snapshot.data!.packages[index];

                      return item(
                        packageName: package,
                        licenseCount: data.licensesCount(packageName: package),
                        onSelectPackage: onSelectPackage,
                      );
                    },
                  ),
                )
              : const SliverFillRemaining(child: CupertinoActivityIndicator()),
        ),
      );

  static Widget item({
    required String packageName,
    required int licenseCount,
    required Function(String packageName) onSelectPackage,
  }) =>
      ListTile(
        // key: ValueKey(index),
        title: Text(packageName),
        trailing: const Icon(UnSymbols.chevronForward),
        subtitle: Text('$licenseCount license${licenseCount == 1 ? '' : 's'}'),
        onTap: () => onSelectPackage(packageName),
      );
}

extension on LicenseData {
  int licensesCount({required String packageName}) =>
      packageLicenseBindings[packageName]?.length ?? 0;
}
