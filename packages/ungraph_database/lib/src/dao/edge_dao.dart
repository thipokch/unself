import 'package:ungraph_database/ungraph_database.dart';

class EdgeDao extends DynamicDao {
  EdgeDao(this.table, [UngraphDatabase? db])
      : super(db ?? table.attachedDatabase);

  @override
  final EdgeTable table;

  Future<List<EdgeData>> getAll() => select(table).get();
}
