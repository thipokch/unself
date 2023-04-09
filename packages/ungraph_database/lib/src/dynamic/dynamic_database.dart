import 'package:drift/drift.dart';
import 'package:ungraph_database/ungraph_database.dart';

part 'dynamic_database.g.dart';

@DriftAccessor(queries: DynamicDatabase.query)
class DynamicDatabase extends DatabaseAccessor<UngraphDatabase>
    with _$DynamicDatabaseMixin {
  DynamicDatabase(super.attachedDatabase);

  static const query = {
    'queryTables': '''
SELECT 
    name
FROM 
    sqlite_master
WHERE 
    type = 'table' AND 
    name NOT LIKE 'sqlite_%';
'''
  };

  late final Set<String> staticTables =
      attachedDatabase.allTables.map((e) => e.actualTableName).toSet();

  Future<Iterable<String>> realTables() => queryTables().get();

  Future<Iterable<String>> tables() =>
      queryTables().get().then((tables) => tables.where(
            (table) => !staticTables.contains(table),
          ));

  // dynamicTables() =>
  //     // select('')
  //     allTables().map((row) => row.read<String>('name'));
}
