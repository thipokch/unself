import 'package:drift/drift.dart';
import 'package:unself_local_database/unself_local_database.dart';

@DataClassName('UnpackStateData')
class UnpackState extends Table with PrimaryUuid {
  TextColumn get specId => text().references(UnpackSpec, #id)();
  TextColumn get step => text()();
  TextColumn get selectedModules => text().nullable()();
  TextColumn get filePath => text().nullable()();
}
