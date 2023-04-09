import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:un_license/un_license.dart';
import 'package:un_style/un_style.dart';

class LicenseDetailSliver extends StatelessWidget {
  const LicenseDetailSliver({
    super.key,
    required this.packageName,
  });

  final String packageName;

  @override
  Widget build(BuildContext context) {
    final flattenedDetail =
        context.read<LicenseService>().getLicenseDetail(packageName).flatten();

    return SliverList(
      delegate: SliverChildBuilderDelegate(
        childCount: flattenedDetail.length,
        (context, index) => flattenedDetail[index] != null
            ? _LicenseBody(flattenedDetail[index]!)
            : const Padding(
                padding: EdgeInsets.all(UnSpaces.M),
                child: Divider(),
              ),
      ),
    );
  }
}

class _LicenseBody extends StatelessWidget {
  const _LicenseBody(this.paragraph);

  final LicenseParagraph paragraph;

  @override
  Widget build(BuildContext context) =>
      paragraph.indent == LicenseParagraph.centeredIndent
          ? Padding(
              padding: const EdgeInsets.only(top: UnSpaces.M),
              child: Text(
                paragraph.text,
                style: const TextStyle(fontWeight: FontWeight.bold),
                textAlign: TextAlign.center,
              ),
            )
          : Padding(
              padding: EdgeInsetsDirectional.only(
                top: 8.0,
                start: 16.0 * paragraph.indent,
              ),
              child: Text(paragraph.text),
            );
}

extension Flatten on List<List<LicenseParagraph>> {
  List<LicenseParagraph?> flatten() =>
      [for (final entry in this) ...entry, null];
}
