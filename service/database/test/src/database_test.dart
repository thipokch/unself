import 'package:unself_database/unself_database.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('Database', () {
    late UnDatabase database;

    setUp(() {
      database = UnDatabase();
    });

    test('can be instantiated', () {
      expect(UnDatabase(), isNotNull);
    });
  });
}
