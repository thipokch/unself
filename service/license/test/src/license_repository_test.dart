import 'package:unself_license/unself_license.dart';
import 'package:test/test.dart';

void main() {
  group('LicenseRepository', () {
    // ignore: unused_local_variable
    late LicenseRepository licenseRepository;

    setUp(() {
      licenseRepository = const LicenseRepository();
    });

    test('can be instantiated', () {
      expect(const LicenseRepository(), isNotNull);
    });
  });
}
