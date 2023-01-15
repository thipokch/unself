import 'package:drift/native.dart';
import 'package:unself_database/unself_database.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('Database', () {
    // ignore: unused_local_variable
    late Database database;

    setUp(() {
      database = Database(NativeDatabase.memory(logStatements: true));
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
            TypeMatcher<$CollectionTable>(),
            TypeMatcher<$FieldTable>(),
          ]));
    });
  });
}
