// ignore_for_file: avoid_print, depend_on_referenced_packages

import 'package:drift/native.dart';
import 'package:un_database/un_database.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:unpack/src/unpack/unpacker.dart';
import 'package:unpack/unpack.dart';
import 'package:unpack_repository/unpack_repository.dart';

import '../sample_data.dart';

void main() {
  group('Unpack Service', () {
    // ignore: unused_local_variable
    late UnDatabase database;
    late UnpackRepository repo;
    late UnpackService unpack;

    setUp(() {
      database = UnDatabase(
        NativeDatabase.memory(logStatements: true),
      );
      repo = UnpackRepository(database);
      unpack = UnpackService(repository: repo);
    });

    tearDown(() async {
      await unpack.clear();
      await database.close();
    });

    test('can be instantiated in memory', () {
      expect(database, isNotNull);
      expect(repo, isNotNull);
      expect(unpack, isNotNull);
    });

    test('initialize spec and get instance', () async {
      await UnpackRepository.bootstrap(database, [spec]);
      final s = await unpack.specs;

      final id = await unpack.initialize(s.first);

      expect((await repo.getAllStates()).length, 1);
      expect(id.length, 22);

      expect(await unpack.unpacker(id), const TypeMatcher<Unpacker>());
    });

    test('restore instance from repository and dispose them', () async {
      await UnpackRepository.bootstrap(database, [spec]);
      final s = await unpack.specs;

      final state = await repo.putState(s.first.initialState);

      expect(await unpack.unpacker(state.id!), const TypeMatcher<Unpacker>());
      expect(unpack.activeInstances, 1);

      await unpack.dispose(state.id!);
      expect(unpack.activeInstances, 0);
    });
  });
}
