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
            // 'source': 'other_logged_information.ads_interests/topics_v2',
            'created': instantString,
            'updated': instantString,
            'archiveId': '',
            'id': 'chateau',
          },
          {
            'name': 'Konbini',
            // 'source': 'other_logged_information.ads_interests/topics_v2',
            'created': instantString,
            'updated': instantString,
            'archiveId': '',
            'id': 'konbini',
          },
          {
            'name': 'Mont Blanc',
            // 'source': 'other_logged_information.ads_interests/topics_v2',
            'created': instantString,
            'updated': instantString,
            'archiveId': '',
            'id': 'mont-blanc',
          },
          {
            'name': 'Musique de jeu vidÃ©o',
            // 'source': 'other_logged_information.ads_interests/topics_v2',
            'created': instantString,
            'updated': instantString,
            'archiveId': '',
            'id': 'musique-de-jeu-vidaco',
          },
          {
            'name': 'Organisation mondiale de la santÃ©',
            // 'source': 'other_logged_information.ads_interests/topics_v2',
            'created': instantString,
            'updated': instantString,
            'archiveId': '',
            'id': 'organisation-mondiale-de-la-santac',
          },
          {
            'name': 'Quiz',
            // 'source': 'other_logged_information.ads_interests/topics_v2',
            'created': instantString,
            'updated': instantString,
            'archiveId': '',
            'id': 'quiz',
          },
          {
            'name': 'Vie',
            // 'source': 'other_logged_information.ads_interests/topics_v2',
            'created': instantString,
            'updated': instantString,
            'archiveId': '',
            'id': 'vie',
          },
          {
            'name': 'Ãpicerie',
            // 'source': 'other_logged_information.ads_interests/topics_v2',
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
          const ArchiveData(
            id: '',
            archiveId: '',
            // formatId: '',
            topics: [
              Topic(
                id: 'chateau',
                // created: now,
                // updated: now,
                archiveId: '',
                name: 'ChÃ¢teau',
                // source: 'other_logged_information.ads_interests/topics_v2',
              ),
              Topic(
                id: 'konbini',
                // created: now,
                // updated: now,
                archiveId: '',
                name: 'Konbini',
                // source: 'other_logged_information.ads_interests/topics_v2',
              ),
              Topic(
                id: 'mont-blanc',
                // created: now,
                // updated: now,
                archiveId: '',
                name: 'Mont Blanc',
                // source: 'other_logged_information.ads_interests/topics_v2',
              ),
              Topic(
                id: 'musique-de-jeu-vidaco',
                // created: now,
                // updated: now,
                archiveId: '',
                name: 'Musique de jeu vidÃ©o',
                // source: 'other_logged_information.ads_interests/topics_v2',
              ),
              Topic(
                id: 'organisation-mondiale-de-la-santac',
                // created: now,
                // updated: now,
                archiveId: '',
                name: 'Organisation mondiale de la santÃ©',
                // source: 'other_logged_information.ads_interests/topics_v2',
              ),
              Topic(
                id: 'quiz',
                // created: now,
                // updated: now,
                archiveId: '',
                name: 'Quiz',
                // source: 'other_logged_information.ads_interests/topics_v2',
              ),
              Topic(
                id: 'vie',
                // created: now,
                // updated: now,
                archiveId: '',
                name: 'Vie',
                // source: 'other_logged_information.ads_interests/topics_v2',
              ),
              Topic(
                id: 'apicerie',
                // created: now,
                // updated: now,
                archiveId: '',
                name: 'Ãpicerie',
                // source: 'other_logged_information.ads_interests/topics_v2',
              ),
            ],
          ));
    });
  });
}
