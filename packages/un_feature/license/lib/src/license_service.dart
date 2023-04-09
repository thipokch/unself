import 'dart:async';

import 'package:flutter/foundation.dart';
import 'package:un_license/un_license.dart';

part 'ilicense_service.dart';

/// {@template license_service}
/// [LicenseService] description
/// {@endtemplate}
class LicenseService {
  /// {@macro license_service}
  const LicenseService();

  static LicenseData? _licenses;
  Future<LicenseData> get licenses async =>
      (_licenses ??= await LicenseRegistry.licenses
          .fold<LicenseData>(
            LicenseData(),
            (LicenseData prev, LicenseEntry license) =>
                prev..addLicense(license),
          )
          .then((LicenseData licenseData) => licenseData..sortPackages()))!;

  // static final Map<String, List<List<LicenseParagraph>>> _licensesDetail = {};
  List<List<LicenseParagraph>> getLicenseDetail(String packageName) {
    if (_licenses == null) throw Exception('LicenseData is not loaded yet.');

    // if (_licensesDetail.containsKey(packageName)) {
    //   return _licensesDetail[packageName]!;
    // }

    final List<int> bindings =
        _licenses!.packageLicenseBindings[packageName] ?? [];
    final List<LicenseEntry> licenseEntries =
        bindings.map((int i) => _licenses!.licenses[i]).toList(growable: false);

    List<List<LicenseParagraph>> licenseDetail = List.empty(growable: true);

    for (final LicenseEntry license in licenseEntries) {
      licenseDetail.add(
        license.paragraphs.toList(),
      );
    }

    // _licensesDetail[packageName] = licenseDetail;

    return licenseDetail;
  }
}
