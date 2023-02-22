// ignore_for_file: avoid_print

import 'dart:io';

import 'package:unself_file/unself_file.dart';
import 'package:unself_model/unself_model.dart';
import 'package:unself_unpack/unself_unpack.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:clock/clock.dart';

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
          '../../resource/archive/assets/facebook_hestia.zip',
        ),
      );
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

      final instant = clock.now();

      final actual = withClock(
        Clock.fixed(instant),
        () => zipInput.unpack(const [
          Mapping(
            from: 'other_logged_information.ads_interests/topics_v2',
            to: 'topics',
          ),
        ]),
      );

      expect(actual, {
        'id': '',
        'created': instant,
        'updated': instant,
        'topics': [
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {}
        ] // Since Field Mapping is not provided
      });
    });

    test('can unpack zip file with MappingEntry and extra metadata', () async {
      await zipInput.open(
        XFile(
          '../../resource/archive/assets/facebook_hestia.zip',
        ),
      );

      final instant = clock.now();

      final actual = withClock(
        Clock.fixed(instant),
        () => zipInput.unpack([
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
              },
              options: {
                'idFrom': 'name',
              }),
        ]),
      );

      expect(actual, {
        'id': '',
        'created': instant,
        'updated': instant,
        'topics': [
          {
            'name': 'ChÃ¢teau',
            'source': 'other_logged_information.ads_interests/topics_v2',
            'created': instant,
            'id': 'chateau',
          },
          {
            'name': 'Konbini',
            'source': 'other_logged_information.ads_interests/topics_v2',
            'created': instant,
            'id': 'konbini',
          },
          {
            'name': 'Mont Blanc',
            'source': 'other_logged_information.ads_interests/topics_v2',
            'created': instant,
            'id': 'mont-blanc',
          },
          {
            'name': 'Musique de jeu vidÃ©o',
            'source': 'other_logged_information.ads_interests/topics_v2',
            'created': instant,
            'id': 'musique-de-jeu-vidaco',
          },
          {
            'name': 'Organisation mondiale de la santÃ©',
            'source': 'other_logged_information.ads_interests/topics_v2',
            'created': instant,
            'id': 'organisation-mondiale-de-la-santac',
          },
          {
            'name': 'Quiz',
            'source': 'other_logged_information.ads_interests/topics_v2',
            'created': instant,
            'id': 'quiz',
          },
          {
            'name': 'Vie',
            'source': 'other_logged_information.ads_interests/topics_v2',
            'created': instant,
            'id': 'vie',
          },
          {
            'name': 'Ãpicerie',
            'source': 'other_logged_information.ads_interests/topics_v2',
            'created': instant,
            'id': 'apicerie',
          }
        ] // Since Field Mapping is not provided
      });
    });
  });
}
