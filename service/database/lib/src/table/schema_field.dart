import 'package:drift/drift.dart';

class SchemaField extends Table {
  TextColumn get id => text()();
  TextColumn get name => text()();
  TextColumn get type => text()();
  BoolColumn get system => boolean()();
  BoolColumn get required => boolean()();
  BoolColumn get unique => boolean()();
  TextColumn get options => text().nullable()();

  @override
  Set<Column> get primaryKey => {id};
}
