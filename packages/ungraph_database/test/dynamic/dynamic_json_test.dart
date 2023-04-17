// ignore_for_file: avoid_print

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

    test('create dynamic table', () async {
      expect(await database.dynamic.tables(), isEmpty);

      final dyJson = DynamicJson<String>(
        'dynamic',
        'spec_slug',
        false,
      );

      final table = EdgeTable('specId', 'spec_slug', [
        jsonColumn,
        dyJson,
      ])
        ..attach(database)
        ..createTable();

      final tables = await database.dynamic.tables();
      expect(tables, contains('spec_slug'));

      final data = DynamicData<EdgeData>({
        // 'id': 'fuck',
        'dynamic': 'value',
      });

      await database.into(table).insert(data);

      final q = database.select(table)..where((_) => dyJson.equals('value'));
      await q.get();
      // final result = await q.get();

      // expect(result, [
      //   EdgeData(
      //     'spec_slug',
      //     {
      //       'json': {
      //         'dynamic': 'value',
      //       },
      //       'dynamic': 'value',
      //     },
      //   )
      // ]);
    });

    // TODO: Test insert and get dynamic data with jsons
  });
}
