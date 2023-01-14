import 'package:drift/drift.dart';
import 'package:unself_database/unself_database.dart';

class Schema extends Table {
  TextColumn get id => text()();
  TextColumn get collectionId => text().references(Collection, #id)();
  TextColumn get fieldId => text().references(SchemaField, #id)();

  @override
  Set<Column> get primaryKey => {id};
}
