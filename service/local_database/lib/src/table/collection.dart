import 'package:drift/drift.dart';
import 'package:unself_model/unself_model.dart';

class Collection extends Table {
  TextColumn get id => text()();
  DateTimeColumn get created => dateTime()();
  DateTimeColumn get updated => dateTime()();
  TextColumn get type => textEnum<CollectionType>()();
  TextColumn get name => text()();
  BoolColumn get system => boolean()();
  TextColumn get listRule => text().nullable()();
  TextColumn get viewRule => text().nullable()();
  TextColumn get createRule => text().nullable()();
  TextColumn get updateRule => text().nullable()();
  TextColumn get deleteRule => text().nullable()();
  TextColumn get extra => text()();

  @override
  Set<Column> get primaryKey => {id};

  // @override
  // List<Set<Column>> get uniqueKeys => [
  //       {id}
  //     ];
}
