// ignore_for_file: avoid_print

import 'dart:io';

import 'package:unself_model/unself_model.dart';
import 'package:unself_unpack/src/unpack/unpacker.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:unself_unpack_spec/unself_unpack_spec.dart';

import '../../sample_data.dart';

void main() {
  group('Unpacker', () {
    late Unpacker unpackr;

    setUp(() {
      print(Directory.current);

      unpackr = Unpacker(facebookSpec,
          state: UnpackState(
            // id: 'id',
            specId: 0,
            step: UnpackStep.retrieve,
            selectedModules: facebookSpec.modules,
            filePath: facebookSampleData.path,
          ));
    });

    test('Unpackr Process', () async {
      await unpackr.process();
    });
  });
}
