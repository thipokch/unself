// ignore_for_file: prefer_const_constructors

import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:unself_license/unself_license.dart';
import 'package:unself_license_list/license_list.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('LicenseListPage', () {
    testWidgets('renders LicenseListView', (tester) async {
      await tester.pumpWidget(
        MaterialApp(
          home: MultiProvider(
            providers: [
              Provider.value(value: LicenseService()..licenses),
            ],
            child: LicenseListPage(
              onSelectPackage: (String packageName) {},
            ),
          ),
        ),
      );
      expect(find.byType(LicenseListSliver), findsOneWidget);
    });
  });
}
