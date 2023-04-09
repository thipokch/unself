import 'package:drift/drift.dart';
import 'package:ungraph_database/ungraph_database.dart';

@DataClassName('EdgeSpecData')
class EdgeSpec extends Table with PrimaryUuid {
  TextColumn get name => text()();
  TextColumn get slug => text().unique()();
  TextColumn get type => text()();
  TextColumn get propSpecs => text()();
  TextColumn get sourceNodeSpecId => text().references(NodeSpec, #slug)();
  TextColumn get targetNodeSpecId => text().references(NodeSpec, #slug)();
}
