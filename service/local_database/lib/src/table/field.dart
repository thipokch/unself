import 'package:drift/drift.dart';
import 'package:unself_local_database/unself_local_database.dart';
import 'package:unself_model/unself_model.dart' show FieldType;

class Field extends Table {
  TextColumn get id => text()();
  DateTimeColumn get created => dateTime()();
  DateTimeColumn get updated => dateTime()();
  TextColumn get type => textEnum<FieldType>()();
  TextColumn get name => text()();
  BoolColumn get system => boolean()();
  BoolColumn get required => boolean()();
  BoolColumn get unique => boolean()();
  TextColumn get collectionId => text().references(Collection, #id)();
  TextColumn get extra => text()();

  @override
  Set<Column> get primaryKey => {id};
}
