import 'package:drift/drift.dart';
import 'package:ungraph_database/ungraph_database.dart';

@DataClassName('UnpackSpecData')
class UnpackSpec extends Table with PrimaryUuid {
  TextColumn get slug => text().unique()();
  TextColumn get name => text()();
  TextColumn get fileSpec => text()();
  TextColumn get retrieveSpec => text()();
  TextColumn get modules => text()();
}
