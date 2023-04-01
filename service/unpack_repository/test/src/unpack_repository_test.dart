// ignore_for_file: avoid_print, depend_on_referenced_packages

import 'package:drift/native.dart';
import 'package:unself_local_database/unself_local_database.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:unself_unpack_repository/unself_unpack_repository.dart';

import '../sample_data.dart';

void main() {
  group('Unpack Service', () {
    // ignore: unused_local_variable
    late final database = LocalDatabase(
      NativeDatabase.memory(logStatements: true),
    );

    late final repo = UnpackRepository(database);

    tearDown(() async {
      await database.close();
    });

    test('can be instantiated in memory', () {
      expect(database, isNotNull);
      expect(repo, isNotNull);
    });

    test('initialize spec', () async {
      await UnpackRepository.bootstrap(database, [spec]);
      final specs = await repo.getAllSpecs();
      print(specs);
      // expect([spec], );
      // await unpack.initialize(spec);
    });
  });
}
