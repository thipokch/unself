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
      zipInput = ZipInput();
    });

    test('open zip file and return list of paths', () async {
      final paths = await zipInput.open(
        XFile(
          '../../resource/archive/assets/facebook_hestia.zip',
        ),
      );
      expect(paths, const [
        'apps_and_websites_off_of_facebook.apps_and_websites',
        'apps_and_websites_off_of_facebook.your_off-facebook_activity',
        'apps_and_websites_off_of_facebook.posts_from_apps_and_websites',
        'other_logged_information.ads_interests',
        'ads_information.advertisers_you\'ve_interacted_with',
        'ads_information.advertisers_who_uploaded_a_contact_list_with_your_information',
        'ads_information.advertisers_using_your_activity_or_information',
      ]);
    });

    test('can unpack zip file with MappingEntry', () async {
      await zipInput.open(
        XFile(
          '../../resource/archive/assets/facebook_hestia.zip',
        ),
      );

      final unpacked = await zipInput.unpack(facebookMapping.mappings);
      ArchiveData.fromJson(unpacked);
    });
  });
}
