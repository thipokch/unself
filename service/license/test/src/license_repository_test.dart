import 'package:flutter_test/flutter_test.dart';
import 'package:unself_license/unself_license.dart';

void main() {
  group('LicenseRepository', () {
    // ignore: unused_local_variable
    late LicenseService licenseRepository;

    setUp(() {
      licenseRepository = const LicenseService();
    });

    test('can be instantiated', () {
      expect(const LicenseService(), isNotNull);
    });
  });
}
