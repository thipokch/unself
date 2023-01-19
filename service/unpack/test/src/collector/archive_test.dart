import 'dart:io';

import 'package:unself_unpack/src/collector/collector.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('ArchiveCollector', () {
    late ArchiveCollector archiveCollector;

    setUp(() {
      print(Directory.current);
      archiveCollector = ArchiveCollector.fromZipPath(
          path: '../../resource/archive/assets/facebook_2301.zip');
    });

    test('can be instantiated', () {
      archiveCollector.collect();
      expect(archiveCollector, isNotNull);
    });
  });
}
