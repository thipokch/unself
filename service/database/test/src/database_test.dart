import 'package:unself_database/unself_database.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('Database', () {
    // ignore: unused_local_variable
    late Database database;

    setUp(() {
      database = Database();
    });

    test('can be instantiated', () {
      expect(Database(), isNotNull);
    });
  });
}
