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

    test('can unpack zip file with MappingEntry to a normalized json format',
        () async {
      final paths = await zipImport.open(facebookSampleData);
      print(paths);

      final unpacked = await zipImport.unpack(facebookSchema.part);

      // print(jsonEncode(
      //   unpacked,
      //   toEncodable: (Object? value) => value is DateTime
      //       ? value.toIso8601String()
      //       : throw UnsupportedError('Cannot convert to JSON: $value'),
      // ));

      final archiveId = unpacked['archiveId'] as String;

      expect((unpacked['topics'] as List).first, {
        'archiveId': archiveId,
        'partId': 'facebook_ads_topics',
        'id': 'chateau',
        'name': 'ChÃ¢teau',
      });

      expect((unpacked['advertisers'] as List).first, {
        'archiveId': archiveId,
        'partId': 'facebook_advertiser_data_use',
        'id': 'francis-tran-and-hebert',
        'name': 'Francis, Tran and Hebert',
        'has_data_file_custom_audience': true,
        'has_remarketing_custom_audience': false,
        'has_in_person_store_visit': true,
      });

      expect((unpacked['activities'] as List).first, {
        'archiveId': archiveId,
        'partId': 'facebook_advertiser_interaction',
        'title': 'thomas-phillips',
        'advertiserId': 'thomas-phillips',
        'action': 'Clic sur publicitÃ©',
        'timestamp': 1565508906,
      });

      expect((unpacked['apps'] as List).first, {
        'archiveId': archiveId,
        'partId': 'facebook_external_activities',
        'id': 'activision-publishing',
        'name': 'Activision Publishing'
      });

      expect((unpacked['accounts'] as List).first, {
        'archiveId': archiveId,
        'partId': 'facebook_account',
        'name.full_name': 'Full Name',
        'name.first_name': 'First Name',
        'name.middle_name': 'Middle Name',
        'name.last_name': 'Last Name',
        '': 'Not specified', // TODO: Remove this
        'birthday.year': 2023,
        'birthday.month': 1,
        'birthday.day': 11,
        'gender.pronoun': 'THEY',
        'blood_info.blood_donor_status': 'unregistered',
        'phone_type': 'Mobile',
        'phone_number': '+11234567890',
        'verified': true,
        'username': 'unself.app',
        'registration_timestamp': 1573000000,
        'profile_uri': 'https://www.facebook.com/unself.app',
      });
    });

    test('can unpack zip file with MappingEntry and serialized by ArchiveData',
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

      // Activity.fromJson((unpacked['activities'] as List).first);
      // Account.fromJson((unpacked['account'] as List).first);
      // Advertiser.fromJson((unpacked['advertisers'] as List).first);
      // App.fromJson((unpacked['apps'] as List).first);
      // Topic.fromJson((unpacked['topics'] as List).first);
    }, skip: true);
  });
}
