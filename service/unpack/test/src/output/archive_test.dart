// ignore_for_file: avoid_print

import 'package:unself_model/unself_model.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('ArchiveCollector', () {
    // late ArchiveOutput archiveOutput;

    // setUp(() {
    //   print(Directory.current);

    //   archiveOutput = ArchiveOutput();
    // });

    test('can pack topics', () async {
      final instant = DateTime.now();
      final instantString = instant.toIso8601String();
      final json = {
        'id': '',
        'created': instantString,
        'updated': instantString,
        'topics': [
          {
            'name': 'ChÃ¢teau',
            'source': 'other_logged_information.ads_interests/topics_v2',
            'created': instantString,
            'id': 'chateau',
          },
          {
            'name': 'Konbini',
            'source': 'other_logged_information.ads_interests/topics_v2',
            'created': instantString,
            'id': 'konbini',
          },
          {
            'name': 'Mont Blanc',
            'source': 'other_logged_information.ads_interests/topics_v2',
            'created': instantString,
            'id': 'mont-blanc',
          },
          {
            'name': 'Musique de jeu vidÃ©o',
            'source': 'other_logged_information.ads_interests/topics_v2',
            'created': instantString,
            'id': 'musique-de-jeu-vidaco',
          },
          {
            'name': 'Organisation mondiale de la santÃ©',
            'source': 'other_logged_information.ads_interests/topics_v2',
            'created': instantString,
            'id': 'organisation-mondiale-de-la-santac',
          },
          {
            'name': 'Quiz',
            'source': 'other_logged_information.ads_interests/topics_v2',
            'created': instantString,
            'id': 'quiz',
          },
          {
            'name': 'Vie',
            'source': 'other_logged_information.ads_interests/topics_v2',
            'created': instantString,
            'id': 'vie',
          },
          {
            'name': 'Ãpicerie',
            'source': 'other_logged_information.ads_interests/topics_v2',
            'created': instantString,
            'id': 'apicerie',
          }
        ] // Since Field Mapping is not provided
      };

      final actual = ArchiveData.fromJson(json);

      expect(
          actual,
          ArchiveData(
            id: '',
            created: instant,
            updated: instant,
            topics: [
              Topic(
                id: 'chateau',
                created: instant,
                name: 'ChÃ¢teau',
                source: 'other_logged_information.ads_interests/topics_v2',
              ),
              Topic(
                id: 'konbini',
                created: instant,
                name: 'Konbini',
                source: 'other_logged_information.ads_interests/topics_v2',
              ),
              Topic(
                id: 'mont-blanc',
                created: instant,
                name: 'Mont Blanc',
                source: 'other_logged_information.ads_interests/topics_v2',
              ),
              Topic(
                id: 'musique-de-jeu-vidaco',
                created: instant,
                name: 'Musique de jeu vidÃ©o',
                source: 'other_logged_information.ads_interests/topics_v2',
              ),
              Topic(
                id: 'organisation-mondiale-de-la-santac',
                created: instant,
                name: 'Organisation mondiale de la santÃ©',
                source: 'other_logged_information.ads_interests/topics_v2',
              ),
              Topic(
                id: 'quiz',
                created: instant,
                name: 'Quiz',
                source: 'other_logged_information.ads_interests/topics_v2',
              ),
              Topic(
                id: 'vie',
                created: instant,
                name: 'Vie',
                source: 'other_logged_information.ads_interests/topics_v2',
              ),
              Topic(
                id: 'apicerie',
                created: instant,
                name: 'Ãpicerie',
                source: 'other_logged_information.ads_interests/topics_v2',
              ),
            ],
          ));
    });
  });
}
