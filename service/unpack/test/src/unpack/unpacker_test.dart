// ignore_for_file: avoid_print

import 'dart:io';

import 'package:unself_model/unself_model.dart';
import 'package:unself_unpack/src/unpack/unpacker.dart';
import 'package:flutter_test/flutter_test.dart';

import '../../sample_data.dart';

void main() {
  group('Unpacker', () {
    late Unpacker unpacker;

    setUp(() {
      print(Directory.current);

      unpacker = Unpacker(spec,
          // selectedModules: modules,
          state: UnpackState(
            // id: 'id',
            specId: '0',
            step: UnpackStep.retrieve,
            selectedModules: modules,
            filePath: facebookSampleData.path,
          ));
    });

    test('Unpacker Process', () async {
      await unpacker.process();
    });
  });
}
