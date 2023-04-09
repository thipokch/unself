import 'package:drift/drift.dart';
import 'package:ungraph_database/ungraph_database.dart';

@DataClassName('NodeSpecData')
class NodeSpec extends Table with PrimaryUuid {
  TextColumn get name => text()();
  TextColumn get slug => text().unique()();
  TextColumn get labels => text()();
  TextColumn get propSpecs => text()();
}
