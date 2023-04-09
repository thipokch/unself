// ignore_for_file: prefer_const_constructors

import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:un_license/un_license.dart';
import 'package:un_license_detail/license_detail.dart';
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
              packageName: 'un_model',
            ),
          ),
        ),
      );
      expect(find.byType(LicenseDetailSliver), findsOneWidget);
    });
  });
}
