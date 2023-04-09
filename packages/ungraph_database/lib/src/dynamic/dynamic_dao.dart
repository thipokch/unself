import 'package:drift/drift.dart';
import 'package:ungraph_database/ungraph_database.dart';

abstract class DynamicDao extends DatabaseAccessor<UngraphDatabase> {
  DynamicDao(super.attachedDatabase);

  DynamicTable get table;

  Future<void> createTable() async =>
      // ignore: invalid_use_of_visible_for_testing_member, invalid_use_of_protected_member
      await attachedDatabase.createMigrator().createTable(table);
}
