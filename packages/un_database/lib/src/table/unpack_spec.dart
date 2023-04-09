import 'package:drift/drift.dart';
import 'package:un_database/un_database.dart';

@DataClassName('UnpackSpecData')
class UnpackSpec extends Table with PrimaryUuid {
  TextColumn get slug => text().unique()();
  TextColumn get name => text()();
  TextColumn get fileSpec => text()();
  TextColumn get retrieveSpec => text()();
  TextColumn get modules => text()();
}
