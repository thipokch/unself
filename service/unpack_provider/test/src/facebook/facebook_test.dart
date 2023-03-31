// ignore_for_file: avoid_print

import 'dart:io';

import 'package:unself_unpack/src/source/sourcer.dart';
import 'package:unself_unpack/unself_unpack.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:unself_unpack_provider/unself_unpack_provider.dart';

import '../../sample_data.dart';

void main() {
  group('Sourcer', () {
    late Sourcer sourcer;

    setUp(() {
      print(Directory.current);

      sourcer = Sourcer(
        facebookSpec,
        selectedModules: facebookModules,
        state: SourceState.retrieve(file: facebookSampleData),
      );
    });

    test('Sourcer Process', () async {
      await sourcer.process();
    });
  });
}
