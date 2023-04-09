import 'package:drift/drift.dart';
import 'package:ungraph_database/ungraph_database.dart';

class NodeDao extends DynamicDao {
  NodeDao(this.table, [UngraphDatabase? db])
      : super(db ?? table.attachedDatabase);

  @override
  final NodeTable table;

  Future<List<NodeData>> getAll() => select(table).get();

  Future<NodeData> put(Insertable<NodeData> entity) =>
      into(table).insertReturning(entity, mode: InsertMode.insertOrReplace);
}
