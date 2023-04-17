// ignore_for_file: depend_on_referenced_packages, avoid_print, unused_local_variable

import 'package:drift/native.dart';
import 'package:ungraph_database/ungraph_database.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ungraph/ungraph.dart';
import 'package:ungraph_spec/ungraph_spec.dart';
import 'package:ungraph_repository/ungraph_repository.dart';

void main() {
  group('Ungraph Service', () {
    late UngraphDatabase database;
    late UngraphRepository repo;
    late UngraphService ungraph;

    setUp(() {
      database = UngraphDatabase(
        NativeDatabase.memory(logStatements: true),
      );
      repo = UngraphRepository(database);
      ungraph = UngraphService(repository: repo);
    });

    tearDown(() async {
      await ungraph.clear();
      await database.close();
    });

    test('can be instantiated in memory', () {
      expect(database, isNotNull);
      expect(repo, isNotNull);
      expect(ungraph, isNotNull);
    });

    test('register and init for nodes and edges', () async {
      await ungraph.registerAllNodes([
        userNode,
        profileNode,
      ]);
      await ungraph.registerEdge(userProfile);

      final u = await ungraph.node(userSlug);
      final p = await ungraph.node(profileSlug);
      final up = await ungraph.edge(userProfile.slug);
    });
  });
}
