// ignore_for_file: avoid_print

import 'dart:io';

import 'package:unself_model/unself_model.dart';
import 'package:unself_unpack/unself_unpack.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:clock/clock.dart';

import '../../sample_data.dart';

void main() {
  group('ZipImport', () {
    late ZipImport zipImport;

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

      zipImport = ZipImport();
    });

    test('Instantiate ZipImport', () {
      expect(zipImport, isNotNull);
    });

    test('Open Zip File', () async {
      await zipImport.open(facebookSampleData);
    });

    test('List of Paths from Zip File', () async {
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

    test('can unpack zip file with MappingEntry', () async {
      await zipImport.open(facebookSampleData);

      final instant = clock.now();

      final actual = await withClock(
        Clock.fixed(instant),
        // () => zipImport.unpack(const [
        // Mapping(
        //   from: 'other_logged_information.ads_interests/topics_v2',
        //   to: 'topics',
        // ),
        // ]),
        () => zipImport.unpack(const [
          ArchiveSchemaPart.zipJson(
            id: 'facebook_ads_interests',
            part: 'other_logged_information.ads_interests',
            schema: [
              Struct('facebook_ads_interests', {
                'topics_v2': RefList('topics'),
              }),
              Entity('topics'),
            ],
          ),
        ]),
      );

      final archiveId = actual['archiveId'];
      final id = actual['id'];

      expect(actual, {
        'id': id,
        'created': instant,
        'updated': instant,
        'archiveId': archiveId,
        'topics': [
          {
            'archiveId': id,
            'partId': 'facebook_ads_interests',
            '@value': 'ChÃ¢teau'
          },
          {
            'archiveId': id,
            'partId': 'facebook_ads_interests',
            '@value': 'Konbini'
          },
          {
            'archiveId': id,
            'partId': 'facebook_ads_interests',
            '@value': 'Mont Blanc'
          },
          {
            'archiveId': id,
            'partId': 'facebook_ads_interests',
            '@value': 'Musique de jeu vidÃ©o'
          },
          {
            'archiveId': id,
            'partId': 'facebook_ads_interests',
            '@value': 'Organisation mondiale de la santÃ©'
          },
          {
            'archiveId': id,
            'partId': 'facebook_ads_interests',
            '@value': 'Quiz'
          },
          {
            'archiveId': id,
            'partId': 'facebook_ads_interests',
            '@value': 'Vie'
          },
          {
            'archiveId': id,
            'partId': 'facebook_ads_interests',
            '@value': 'Ãpicerie'
          }
        ], // Since Field Mapping is not provided,
      });
    });

    test('can unpack zip file with MappingEntry and extra metadata', () async {
      await zipImport.open(facebookSampleData);

      final instant = clock.now();

      final actual = await withClock(
        Clock.fixed(instant),
        () => zipImport.unpack(const [
          ArchiveSchemaPart.zipJson(
            id: 'facebook_ads_interests',
            part: 'other_logged_information.ads_interests',
            schema: [
              Struct('facebook_ads_interests', {
                'topics_v2': RefList('topics'),
              }),
              Entity('topics', definition: {
                'id': SlugFrom('@value'),
                'name': ValueFrom('@value'),
              }),
            ],
          ),
        ]),
      );

      final id = actual['id'];

      expect(actual, {
        'id': id,
        'created': instant,
        'updated': instant,
        'archiveId': id,
        'topics': [
          {
            'archiveId': id,
            'partId': 'facebook_ads_interests',
            'id': 'chateau',
            'name': 'ChÃ¢teau'
          },
          {
            'archiveId': id,
            'partId': 'facebook_ads_interests',
            'id': 'konbini',
            'name': 'Konbini'
          },
          {
            'archiveId': id,
            'partId': 'facebook_ads_interests',
            'id': 'mont-blanc',
            'name': 'Mont Blanc'
          },
          {
            'archiveId': id,
            'partId': 'facebook_ads_interests',
            'id': 'musique-de-jeu-vidaco',
            'name': 'Musique de jeu vidÃ©o'
          },
          {
            'archiveId': id,
            'partId': 'facebook_ads_interests',
            'id': 'organisation-mondiale-de-la-santac',
            'name': 'Organisation mondiale de la santÃ©'
          },
          {
            'archiveId': id,
            'partId': 'facebook_ads_interests',
            'id': 'quiz',
            'name': 'Quiz'
          },
          {
            'archiveId': id,
            'partId': 'facebook_ads_interests',
            'id': 'vie',
            'name': 'Vie'
          },
          {
            'archiveId': id,
            'partId': 'facebook_ads_interests',
            'id': 'apicerie',
            'name': 'Ãpicerie'
          }
        ], // Since Field Mapping is not provided
      });
    });
  });
}
