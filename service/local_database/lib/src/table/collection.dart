import 'package:drift/drift.dart';

class Collection extends Table {
  TextColumn get id => text()();
  TextColumn get type => text()();
  TextColumn get name => text()();
  BoolColumn get system => boolean()();
  TextColumn get listRule => text().nullable()();
  TextColumn get viewRule => text().nullable()();
  TextColumn get createRule => text().nullable()();
  TextColumn get updateRule => text().nullable()();
  TextColumn get deleteRule => text().nullable()();
  TextColumn get options => text().nullable()();

  @override
  Set<Column> get primaryKey => {id};
}
