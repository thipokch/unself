// ignore_for_file: prefer_const_constructors

import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:unself_license/unself_license.dart';
import 'package:unself_license_detail/license_detail.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('LicenseDetailPage', () {
    testWidgets('renders LicenseDetailSliver', (tester) async {
      await tester.pumpWidget(
        MaterialApp(
          home: MultiProvider(
            providers: [
              Provider.value(value: LicenseService()..licenses),
            ],
            child: LicenseDetailPage(
              packageName: 'unself_model',
            ),
          ),
        ),
      );
      expect(find.byType(LicenseDetailSliver), findsOneWidget);
    });
  });
}
