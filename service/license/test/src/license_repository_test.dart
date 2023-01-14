import 'package:unself_license/unself_license.dart';
import 'package:test/test.dart';

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
