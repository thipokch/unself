import 'package:drift/drift.dart';
import 'package:unself_local_database/unself_local_database.dart';
import 'package:unself_model/unself_model.dart' show FieldType;

class Field extends Table {
  TextColumn get id => text()();
  TextColumn get name => text()();
  TextColumn get type => textEnum<FieldType>()();
  BoolColumn get system => boolean()();
  BoolColumn get required => boolean()();
  BoolColumn get unique => boolean()();
  TextColumn get options => text().nullable()();

  TextColumn get collectionId => text().references(Collection, #id)();

  @override
  Set<Column> get primaryKey => {id};
}
