// ignore_for_file: avoid_print

import 'dart:io';

import 'package:unself_model/unself_model.dart';
import 'package:unself_unpack/src/source/sourcer.dart';
import 'package:unself_unpack/unself_unpack.dart';
import 'package:flutter_test/flutter_test.dart';

import '../../sample_data.dart';

void main() {
  group('Sourcer', () {
    late Sourcer sourcer;

    const modules = <ModuleSpec>[
      JsonModule(
        id: 'other_logged_information.ads_interests',
        name: 'Ads Interest',
        fileMatcher: 'other_logged_information/ads_interests.json',
        schema: [
          Struct('facebook_ads_topics', {
            'topics_v2': RefList('topics'),
          }),
          Entity('topics', definition: {
            'id': SlugFrom('@value'),
            'name': ValueFrom('@value'),
          }),
        ],
        load: UngraphLoadSpec(),
      ),
    ];

    setUp(() {
      print(Directory.current);

      sourcer = Sourcer(
        const SourceSpec(
          id: 'id',
          name: 'name',
          fileSpec: FileSpec.zip(),
          retrieveSpec: RetrieveSpec.localFile(),
          modules: modules,
        ),
        selectedModules: modules,
        state: SourceState.retrieve(file: facebookSampleData),
      );
    });

    test('Sourcer Process', () async {
      await sourcer.process();
    });
  });
}
