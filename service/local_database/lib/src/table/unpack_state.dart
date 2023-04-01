import 'package:drift/drift.dart';
import 'package:unself_local_database/src/table/table.dart';

@DataClassName('UnpackStateData')
class UnpackState extends Table {
  IntColumn get id => integer().autoIncrement()();
  IntColumn get specId => integer().references(UnpackSpec, #id)();
  TextColumn get step => text()();
  TextColumn get selectedModules => text().nullable()();
  TextColumn get filePath => text().nullable()();
}
