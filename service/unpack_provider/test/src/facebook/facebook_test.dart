// ignore_for_file: avoid_print

import 'dart:convert';
import 'dart:io';

import 'package:unself_unpack/unself_unpack.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:unself_unpack_provider/unself_unpack_provider.dart';

import '../../sample_data.dart';

void main() {
  group('ArchiveCollector', () {
    late ZipImport zipImport;

    setUp(() {
      print(Directory.current);
      zipImport = ZipImport();
    });

    test('open zip file and return list of paths', () async {
      final paths = await zipImport.open(facebookSampleData);

      expect(paths, const [
        'apps_and_websites_off_of_facebook.apps_and_websites',
        'apps_and_websites_off_of_facebook.your_off-facebook_activity',
        'apps_and_websites_off_of_facebook.posts_from_apps_and_websites',
        'your_topics.your_topics',
        'other_logged_information.ads_interests',
        'profile_information.profile_information',
        'ads_information.advertisers_you\'ve_interacted_with',
        'ads_information.advertisers_who_uploaded_a_contact_list_with_your_information',
        'ads_information.advertisers_using_your_activity_or_information'
      ]);
    });

    test('can unpack zip file with MappingEntry and serialize to ArchiveData',
        () async {
      final paths = await zipImport.open(facebookSampleData);
      print(paths);

      final unpacked = await zipImport.unpack(facebookSchema.part);

      print(jsonEncode(
        unpacked,
        toEncodable: (Object? value) => value is DateTime
            ? value.toIso8601String()
            : throw UnsupportedError('Cannot convert to JSON: $value'),
      ));
      // ArchiveData.fromJson(unpacked
      //   ..addAll(<String, String>{
      //     'id': Slugid.nice().toString(),
      //     'archiveId': '',
      //     'formatId': '',
      //   }));
    });
  });
}
