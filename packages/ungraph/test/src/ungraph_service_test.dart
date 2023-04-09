// ignore_for_file: depend_on_referenced_packages, avoid_print, unused_local_variable

import 'package:drift/native.dart';
import 'package:ungraph_database/ungraph_database.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ungraph/ungraph.dart';
import 'package:ungraph_repository/ungraph_repository.dart';

import '../sample_data.dart';

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
      await ungraph.registerNode(nsPost);
      await ungraph.registerEdge(esComment);

      final ns = await ungraph.node(nsPost.slug);
      final es = await ungraph.edge(esComment.slug);

      print(ns.edges);
    });

    test('putting nodes and edges', () async {
      await ungraph.registerNode(nsPost);
      await ungraph.registerEdge(esComment);

      final ns = await ungraph.node(nsPost.slug);
      final es = await ungraph.edge(esComment.slug);

      print(await ns.put(nPost));
    });
  });
}
