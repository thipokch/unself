// ignore_for_file: avoid_print, depend_on_referenced_packages

import 'package:drift/native.dart';
import 'package:ungraph_repository/ungraph_repository.dart';
import 'package:ungraph_database/ungraph_database.dart' show UngraphDatabase;
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('EdgeTable', () {
    late UngraphDatabase database;
    // ignore: unused_local_variable
    late UngraphRepository ungraph;

    setUp(() {
      database = UngraphDatabase(
        NativeDatabase.memory(logStatements: true),
      );
      ungraph = UngraphRepository(database);
    });

    tearDown(() async {
      await database.close();
    });

    test('ensure inital table context', () async {
      expect(await database.dynamic.realTables(), isNotEmpty);
      expect(await database.dynamic.tables(), isEmpty);
    });

    // test('init nodespec', () async {
    //   const ns = NodeSpec(
    //     name: 'node spec',
    //     propSpecs: [
    //       PropSpec(
    //         name: 'id',
    //         description: 'Just an identifier',
    //         type: 'string',
    //       ),
    //     ],
    //   );

    //   ungraph.initNodeSpec(ns);
    // });

    // test('insert and get dynamic data', () async {
    //   expect(await database.dynamicTables(), isEmpty);

    //   final testTable = EdgeTable('specId', 'spec_slug', [
    //     GeneratedColumn(
    //       'id',
    //       'spec_slug',
    //       false,
    //       type: DriftSqlType.int,
    //     ),
    //     GeneratedColumn(
    //       'specId',
    //       'spec_slug',
    //       false,
    //       type: DriftSqlType.string,
    //     ),
    //   ])
    //     ..attach(database)
    //     ..createTable();

    //   final data = EdgeData(testTable.specSlug, {
    //     'id': 1,
    //     'specId': 'specId',
    //   });

    //   final tables = await database.dynamicTables();
    //   expect(tables, contains('spec_slug'));

    //   await database.into(testTable).insert(data);
    //   final result = await database.select(testTable).get();

    //   expect(result.first.data, data.data);
    // });
  });
}
