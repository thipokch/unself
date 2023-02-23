// ignore_for_file: avoid_print

import 'package:unself_model/unself_model.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('ArchiveExport', () {
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
        'archiveId': '',
        'formatId': '',
        'topics': [
          {
            'name': 'ChÃ¢teau',
            'source': 'other_logged_information.ads_interests/topics_v2',
            'created': instantString,
            'updated': instantString,
            'archiveId': '',
            'id': 'chateau',
          },
          {
            'name': 'Konbini',
            'source': 'other_logged_information.ads_interests/topics_v2',
            'created': instantString,
            'updated': instantString,
            'archiveId': '',
            'id': 'konbini',
          },
          {
            'name': 'Mont Blanc',
            'source': 'other_logged_information.ads_interests/topics_v2',
            'created': instantString,
            'updated': instantString,
            'archiveId': '',
            'id': 'mont-blanc',
          },
          {
            'name': 'Musique de jeu vidÃ©o',
            'source': 'other_logged_information.ads_interests/topics_v2',
            'created': instantString,
            'updated': instantString,
            'archiveId': '',
            'id': 'musique-de-jeu-vidaco',
          },
          {
            'name': 'Organisation mondiale de la santÃ©',
            'source': 'other_logged_information.ads_interests/topics_v2',
            'created': instantString,
            'updated': instantString,
            'archiveId': '',
            'id': 'organisation-mondiale-de-la-santac',
          },
          {
            'name': 'Quiz',
            'source': 'other_logged_information.ads_interests/topics_v2',
            'created': instantString,
            'updated': instantString,
            'archiveId': '',
            'id': 'quiz',
          },
          {
            'name': 'Vie',
            'source': 'other_logged_information.ads_interests/topics_v2',
            'created': instantString,
            'updated': instantString,
            'archiveId': '',
            'id': 'vie',
          },
          {
            'name': 'Ãpicerie',
            'source': 'other_logged_information.ads_interests/topics_v2',
            'created': instantString,
            'updated': instantString,
            'archiveId': '',
            'id': 'apicerie',
          }
        ] // Since Field Mapping is not provided
      };

      final actual = ArchiveData.fromJson(json);

      expect(
          actual,
          ArchiveData(
            id: '',
            archiveId: '',
            formatId: '',
            topics: [
              Topic(
                id: 'chateau',
                created: instant,
                updated: instant,
                archiveId: '',
                name: 'ChÃ¢teau',
                source: 'other_logged_information.ads_interests/topics_v2',
              ),
              Topic(
                id: 'konbini',
                created: instant,
                updated: instant,
                archiveId: '',
                name: 'Konbini',
                source: 'other_logged_information.ads_interests/topics_v2',
              ),
              Topic(
                id: 'mont-blanc',
                created: instant,
                updated: instant,
                archiveId: '',
                name: 'Mont Blanc',
                source: 'other_logged_information.ads_interests/topics_v2',
              ),
              Topic(
                id: 'musique-de-jeu-vidaco',
                created: instant,
                updated: instant,
                archiveId: '',
                name: 'Musique de jeu vidÃ©o',
                source: 'other_logged_information.ads_interests/topics_v2',
              ),
              Topic(
                id: 'organisation-mondiale-de-la-santac',
                created: instant,
                updated: instant,
                archiveId: '',
                name: 'Organisation mondiale de la santÃ©',
                source: 'other_logged_information.ads_interests/topics_v2',
              ),
              Topic(
                id: 'quiz',
                created: instant,
                updated: instant,
                archiveId: '',
                name: 'Quiz',
                source: 'other_logged_information.ads_interests/topics_v2',
              ),
              Topic(
                id: 'vie',
                created: instant,
                updated: instant,
                archiveId: '',
                name: 'Vie',
                source: 'other_logged_information.ads_interests/topics_v2',
              ),
              Topic(
                id: 'apicerie',
                created: instant,
                updated: instant,
                archiveId: '',
                name: 'Ãpicerie',
                source: 'other_logged_information.ads_interests/topics_v2',
              ),
            ],
          ));
    });
  });
}
