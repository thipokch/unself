import 'package:ungraph_database/ungraph_database.dart';
import 'package:drift/drift.dart';

part 'node_spec_dao.g.dart';

@DriftAccessor(tables: [NodeSpec])
class NodeSpecDao extends DatabaseAccessor<UngraphDatabase>
    with _$NodeSpecDaoMixin {
  NodeSpecDao(super.attachedDatabase);

  Stream<List<NodeSpecData>> watchAll() => select(nodeSpec).watch();

  Future<List<NodeSpecData>> getAll() => select(nodeSpec).get();

  Future<NodeSpecData> get(String id) {
    final q = select(nodeSpec)..where((t) => t.id.equals(id));
    return q.getSingle();
  }

  Future<NodeSpecData> getBySlug(String slug) {
    final q = select(nodeSpec)..where((t) => t.slug.equals(slug));
    return q.getSingle();
  }

  Future<NodeSpecData> put(Insertable<NodeSpecData> entity) =>
      into(nodeSpec).insertReturning(entity, mode: InsertMode.insertOrReplace);

  Future<NodeSpecData> putIfAbsent(Insertable<NodeSpecData> entity) =>
      into(nodeSpec).insertReturning(entity, mode: InsertMode.insertOrIgnore);

  Future<void> putAll(Iterable<Insertable<NodeSpecData>> entities) =>
      batch((batch) => batch.insertAll(nodeSpec, entities,
          mode: InsertMode.insertOrReplace));

  Future<int> get count {
    final countExp = nodeSpec.id.count();
    final q = selectOnly(nodeSpec)..addColumns([countExp]);

    return q.map((row) => row.read(countExp)).getSingle().then((_) => _!);
  }

  Future<bool> get isEmpty => count.then((value) => value == 0);
}
