// ignore_for_file: avoid_print

import 'dart:io';

import 'package:unself_file/unself_file.dart';
import 'package:unself_model/unself_model.dart';
import 'package:unself_unpack/unself_unpack.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:clock/clock.dart';

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
      await zipImport.open(
        XFile(
          '../../resource/archive/assets/facebook_hestia.zip',
        ),
      );
    });

    test('List of Paths from Zip File', () async {
      final paths = await zipImport.open(
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
      await zipImport.open(
        XFile(
          '../../resource/archive/assets/facebook_hestia.zip',
        ),
      );

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
            '@value': 'ChÃ¢teau',
            // 'created': instant,
            // 'updated': instant,
            'archiveId': id,
          },
          {
            '@value': 'Konbini',
            // 'created': instant,
            // 'updated': instant,
            'archiveId': id,
          },
          {
            '@value': 'Mont Blanc',
            // 'created': instant,
            // 'updated': instant,
            'archiveId': id,
          },
          {
            '@value': 'Musique de jeu vidÃ©o',
            // 'created': instant,
            // 'updated': instant,
            'archiveId': id,
          },
          {
            '@value': 'Organisation mondiale de la santÃ©',
            // 'created': instant,
            // 'updated': instant,
            'archiveId': id,
          },
          {
            '@value': 'Quiz',
            // 'created': instant,
            // 'updated': instant,
            'archiveId': id,
          },
          {
            '@value': 'Vie',
            // 'created': instant,
            // 'updated': instant,
            'archiveId': id,
          },
          {
            '@value': 'Ãpicerie',
            // 'created': instant,
            // 'updated': instant,
            'archiveId': id,
          }
        ], // Since Field Mapping is not provided,
      });
    });

    test('can unpack zip file with MappingEntry and extra metadata', () async {
      await zipImport.open(
        XFile(
          '../../resource/archive/assets/facebook_2301.zip',
        ),
      );

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
            'name': 'ChÃ¢teau',
            // 'created': instant,
            // 'updated': instant,
            'id': 'chateau',
            'archiveId': id,
          },
          {
            'name': 'Konbini',
            // 'created': instant,
            // 'updated': instant,
            'id': 'konbini',
            'archiveId': id,
          },
          {
            'name': 'Mont Blanc',
            // 'created': instant,
            // 'updated': instant,
            'id': 'mont-blanc',
            'archiveId': id,
          },
          {
            'name': 'Musique de jeu vidÃ©o',
            // 'created': instant,
            // 'updated': instant,
            'id': 'musique-de-jeu-vidaco',
            'archiveId': id,
          },
          {
            'name': 'Organisation mondiale de la santÃ©',
            // 'created': instant,
            // 'updated': instant,
            'id': 'organisation-mondiale-de-la-santac',
            'archiveId': id,
          },
          {
            'name': 'Quiz',
            // 'created': instant,
            // 'updated': instant,
            'id': 'quiz',
            'archiveId': id,
          },
          {
            'name': 'Vie',
            // 'created': instant,
            // 'updated': instant,
            'id': 'vie',
            'archiveId': id,
          },
          {
            'name': 'Ãpicerie',
            // 'created': instant,
            // 'updated': instant,
            'id': 'apicerie',
            'archiveId': id,
          }
        ], // Since Field Mapping is not provided
      });
    });
  });
}
