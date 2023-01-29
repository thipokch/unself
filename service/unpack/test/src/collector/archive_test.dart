// ignore_for_file: avoid_print

import 'dart:io';

import 'package:unself_unpack/src/collector/collector.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('ArchiveCollector', () {
    late ArchiveCollector archiveCollector;

    setUp(() {
      print(Directory.current);
      // archiveCollector = ArchiveCollector.fromZipPath(
      //   path: '../../resource/archive/assets/facebook_2301.zip',
      // );
      archiveCollector = ArchiveCollector.fromZipBytes(
        bytes: File.fromUri(
          Uri.parse('../../resource/archive/assets/facebook_2301.zip'),
        ).readAsBytesSync(),
      );
    });

    test('can be instantiated', () {
      archiveCollector.collect();
      expect(archiveCollector, isNotNull);
    });
  });
}
