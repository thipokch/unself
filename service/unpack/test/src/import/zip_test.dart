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

    test('can be instantiated', () {
      expect(zipImport, isNotNull);
    });

    test('can open zip file', () async {
      await zipImport.open(
        XFile(
          '../../resource/archive/assets/facebook_hestia.zip',
        ),
      );
    });

    test('open zip file and return list of paths', () async {
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
        () => zipImport.unpack(const [
          Mapping(
            from: 'other_logged_information.ads_interests/topics_v2',
            to: 'topics',
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
          {'archiveId': archiveId, 'created': instant, 'updated': instant},
          {'archiveId': archiveId, 'created': instant, 'updated': instant},
          {'archiveId': archiveId, 'created': instant, 'updated': instant},
          {'archiveId': archiveId, 'created': instant, 'updated': instant},
          {'archiveId': archiveId, 'created': instant, 'updated': instant},
          {'archiveId': archiveId, 'created': instant, 'updated': instant},
          {'archiveId': archiveId, 'created': instant, 'updated': instant},
          {'archiveId': archiveId, 'created': instant, 'updated': instant},
        ], // Since Field Mapping is not provided,
      });
    });

    test('can unpack zip file with MappingEntry and extra metadata', () async {
      await zipImport.open(
        XFile(
          '../../resource/archive/assets/facebook_hestia.zip',
        ),
      );

      final instant = clock.now();

      final actual = await withClock(
        Clock.fixed(instant),
        () => zipImport.unpack([
          Mapping(
              from: 'other_logged_information.ads_interests/topics_v2',
              to: 'topics/interests',
              fields: const [
                Mapping(
                  from: 'string',
                  to: 'name',
                ),
              ],
              extra: {
                'source': 'other_logged_information.ads_interests/topics_v2',
                'created': instant,
                'updated': instant,
              },
              options: {
                'idFrom': 'name',
              }),
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
            'name': 'ChÃ¢teau',
            'source': 'other_logged_information.ads_interests/topics_v2',
            'created': instant,
            'updated': instant,
            'id': 'chateau',
            'archiveId': archiveId,
          },
          {
            'name': 'Konbini',
            'source': 'other_logged_information.ads_interests/topics_v2',
            'created': instant,
            'updated': instant,
            'id': 'konbini',
            'archiveId': archiveId,
          },
          {
            'name': 'Mont Blanc',
            'source': 'other_logged_information.ads_interests/topics_v2',
            'created': instant,
            'updated': instant,
            'id': 'mont-blanc',
            'archiveId': archiveId,
          },
          {
            'name': 'Musique de jeu vidÃ©o',
            'source': 'other_logged_information.ads_interests/topics_v2',
            'created': instant,
            'updated': instant,
            'id': 'musique-de-jeu-vidaco',
            'archiveId': archiveId,
          },
          {
            'name': 'Organisation mondiale de la santÃ©',
            'source': 'other_logged_information.ads_interests/topics_v2',
            'created': instant,
            'updated': instant,
            'id': 'organisation-mondiale-de-la-santac',
            'archiveId': archiveId,
          },
          {
            'name': 'Quiz',
            'source': 'other_logged_information.ads_interests/topics_v2',
            'created': instant,
            'updated': instant,
            'id': 'quiz',
            'archiveId': archiveId,
          },
          {
            'name': 'Vie',
            'source': 'other_logged_information.ads_interests/topics_v2',
            'created': instant,
            'updated': instant,
            'id': 'vie',
            'archiveId': archiveId,
          },
          {
            'name': 'Ãpicerie',
            'source': 'other_logged_information.ads_interests/topics_v2',
            'created': instant,
            'updated': instant,
            'id': 'apicerie',
            'archiveId': archiveId,
          }
        ], // Since Field Mapping is not provided
      });
    });

    test('can unpack file with a single map', () async {
      await zipImport.open(
        XFile(
          '../../resource/archive/assets/facebook_2301.zip',
        ),
      );

      final instant = clock.now();

      final actual = await withClock(
        Clock.fixed(instant),
        () => zipImport.unpack(const [
          Mapping(
            from: 'profile_information.profile_information',
            to: 'account',
          ),
        ]),
      );

      print(actual);

      // final archiveId = actual['archiveId'];
      // final id = actual['id'];

      // expect(actual, {
      //   'id': id,
      //   'created': instant,
      //   'updated': instant,
      //   'archiveId': archiveId,
      //   'topics': [
      //     {'archiveId': archiveId, 'created': instant, 'updated': instant},
      //     {'archiveId': archiveId, 'created': instant, 'updated': instant},
      //     {'archiveId': archiveId, 'created': instant, 'updated': instant},
      //     {'archiveId': archiveId, 'created': instant, 'updated': instant},
      //     {'archiveId': archiveId, 'created': instant, 'updated': instant},
      //     {'archiveId': archiveId, 'created': instant, 'updated': instant},
      //     {'archiveId': archiveId, 'created': instant, 'updated': instant},
      //     {'archiveId': archiveId, 'created': instant, 'updated': instant},
      //   ] // Since Field Mapping is not provided
      // });
    });
  });
}
