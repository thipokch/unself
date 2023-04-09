// ignore_for_file: avoid_print

import 'package:drift/native.dart';
import 'package:ungraph_database/ungraph_database.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('Database', () {
    // ignore: unused_local_variable
    late UngraphDatabase database;

    setUp(() {
      database = UngraphDatabase(NativeDatabase.memory(logStatements: true));
    });

    tearDown(() async {
      await database.close();
    });

    test('can be instantiated in memory', () {
      expect(database, isNotNull);
    });

    test('contains default tables', () {
      print(database.allTables.toList());
      expect(
          database.allTables,
          containsAll([
            const TypeMatcher<$UnpackSpecTable>(),
            const TypeMatcher<$UnpackStateTable>(),
          ]));
    });
  });
}
