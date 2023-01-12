import 'package:unself_license_repository/license_repository.dart';
import 'package:test/test.dart';

void main() {
  group('LicenseRepository', () {
    late LicenseRepository licenseRepository;

    setUp(() {
      licenseRepository = const LicenseRepository();
    });

    test('can be instantiated', () {
      expect(const LicenseRepository(), isNotNull);
    });
  });
}
