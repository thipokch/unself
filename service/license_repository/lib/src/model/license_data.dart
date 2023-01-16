import 'package:flutter/foundation.dart';

class LicenseData {
  final List<LicenseEntry> licenses = <LicenseEntry>[];
  final Map<String, List<int>> packageLicenseBindings = <String, List<int>>{};
  final List<String> packages = <String>[];

  String? firstPackage;

  void addLicense(LicenseEntry entry) {
    for (final String package in entry.packages) {
      _addPackage(package);

      packageLicenseBindings[package]!.add(licenses.length);
    }
    licenses.add(entry);
  }

  void _addPackage(String package) {
    if (!packageLicenseBindings.containsKey(package)) {
      packageLicenseBindings[package] = <int>[];
      firstPackage ??= package;
      packages.add(package);
    }
  }

  void sortPackages([int Function(String a, String b)? compare]) {
    packages.sort(compare ??
        (String a, String b) {
          if (a == firstPackage) {
            return -1;
          }
          if (b == firstPackage) {
            return 1;
          }

          return a.toLowerCase().compareTo(b.toLowerCase());
        });
  }
}
