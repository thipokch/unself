import 'package:drift/drift.dart';

@DataClassName('UnpackSpecData')
class UnpackSpec extends Table {
  IntColumn get id => integer().autoIncrement()();
  TextColumn get name => text()();
  TextColumn get fileSpec => text()();
  TextColumn get retrieveSpec => text()();
  TextColumn get modules => text()();
}
