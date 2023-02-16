// ignore_for_file: avoid_print

import 'dart:io';

import 'package:unself_file/unself_file.dart';
import 'package:unself_model/unself_model.dart';
import 'package:unself_unpack/unself_unpack.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('ArchiveCollector', () {
    late ZipInput zipInput;

    setUp(() {
      print(Directory.current);
      // zipInput = ArchiveCollector.fromZipPath(
      //   path: '../../resource/archive/assets/facebook_2301.zip',
      // );
      // zipInput = Zip.fromZipBytes(
      //   bytes: File.fromUri(
      //     Uri.parse('../../resource/archive/assets/facebook_2301.zip'),
      //   ).readAsBytesSync(),
      // );

      zipInput = ZipInput();
    });

    test('can be instantiated', () {
      expect(zipInput, isNotNull);
    });

    test('can open zip file', () async {
      await zipInput.open(
        XFile(
          '../../resource/archive/assets/facebook_2301.zip',
        ),
      );
    });

    test('can unpack zip file', () async {
      final paths = await zipInput.open(
        XFile(
          '../../resource/archive/assets/facebook_2301.zip',
        ),
      );

      paths.forEach(print);

      zipInput.unpack(const [
        MappingEntry(
          from: 'your_topics.your_topics/inferred_topics_v2',
          to: 'topics/interests',
        ),
      ]);
    });

    test('can unpack zip file 2', () async {
      final paths = await zipInput.open(
        XFile(
          '../../resource/archive/assets/facebook_2301.zip',
        ),
      );

      paths.forEach(print);

      zipInput.unpack(const [
        MappingEntry(
          from:
              'apps_and_websites_off_of_facebook.your_off-facebook_activity/off_facebook_activity_v2/*/events',
          to: 'topics/interests',
        ),
      ]);
    }, skip: true);
  });
}
