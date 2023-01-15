import 'package:drift/drift.dart';
import 'package:unself_database/unself_database.dart';

class Field extends Table {
  TextColumn get id => text()();
  TextColumn get name => text()();
  TextColumn get type => text()();
  BoolColumn get system => boolean()();
  BoolColumn get required => boolean()();
  BoolColumn get unique => boolean()();
  TextColumn get options => text().nullable()();

  TextColumn get collectionId => text().references(Collection, #id)();

  @override
  Set<Column> get primaryKey => {id};
}
