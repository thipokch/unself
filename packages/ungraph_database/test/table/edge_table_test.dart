// ignore_for_file: avoid_print

import 'package:drift/drift.dart';
import 'package:drift/native.dart';
import 'package:ungraph_database/ungraph_database.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('EdgeTable', () {
    late UngraphDatabase database;

    setUp(() {
      database = UngraphDatabase(
        NativeDatabase.memory(logStatements: true),
      );
    });

    tearDown(() async {
      await database.close();
    });

    test('ensure inital table context', () async {
      expect(await database.dynamic.realTables(), isNotEmpty);
      expect(await database.dynamic.tables(), isEmpty);
    });

    test('insert and get dynamic data', () async {
      expect(await database.dynamic.tables(), isEmpty);

      final testTable = EdgeTable('specId', 'spec_slug', [
        GeneratedColumn(
          'id',
          'spec_slug',
          false,
          type: DriftSqlType.int,
        ),
        GeneratedColumn(
          'specId',
          'spec_slug',
          false,
          type: DriftSqlType.string,
        ),
      ])
        ..attach(database)
        ..createTable();

      final data = EdgeData(testTable.specSlug, {
        'id': 1,
        'specId': 'specId',
      });

      final tables = await database.dynamic.tables();
      expect(tables, contains('spec_slug'));

      await database.into(testTable).insert(data);
      final result = await database.select(testTable).get();

      expect(result.first.data, data.data);
    }, skip: true);
  });
}
