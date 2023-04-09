import 'package:ungraph_database/ungraph_database.dart';
import 'package:drift/drift.dart';

part 'edge_spec_dao.g.dart';

@DriftAccessor(tables: [EdgeSpec])
class EdgeSpecDao extends DatabaseAccessor<UngraphDatabase>
    with _$EdgeSpecDaoMixin {
  EdgeSpecDao(super.attachedDatabase);

  Stream<List<EdgeSpecData>> watchAll() => select(edgeSpec).watch();

  Future<List<EdgeSpecData>> getAll() => select(edgeSpec).get();

  Future<EdgeSpecData> get(String id) {
    final q = select(edgeSpec)..where((t) => t.id.equals(id));
    return q.getSingle();
  }

  Future<EdgeSpecData> getBySlug(String slug) {
    final q = select(edgeSpec)..where((t) => t.slug.equals(slug));
    return q.getSingle();
  }

  Future<List<String>> getAllByNode(String slug) {
    final q = select(edgeSpec)
      ..where((t) =>
          t.sourceNodeSpecId.equals(slug) | t.targetNodeSpecId.equals(slug));
    return q.map((t) => t.slug).get();
  }

  Future<List<String>> getAllBySourceNode(Iterable<String> slugs) {
    final q = select(edgeSpec)..where((t) => t.sourceNodeSpecId.isIn(slugs));
    return q.map((t) => t.slug).get();
  }

  Future<List<String>> getAllByTargetNode(Iterable<String> slugs) {
    final q = select(edgeSpec)..where((t) => t.targetNodeSpecId.isIn(slugs));
    return q.map((t) => t.slug).get();
  }

  Future<EdgeSpecData> put(Insertable<EdgeSpecData> entity) =>
      into(edgeSpec).insertReturning(entity, mode: InsertMode.insertOrReplace);

  Future<void> putAll(Iterable<Insertable<EdgeSpecData>> entities) =>
      batch((batch) => batch.insertAll(edgeSpec, entities,
          mode: InsertMode.insertOrReplace));

  Future<int> get count {
    final countExp = edgeSpec.id.count();
    final q = selectOnly(edgeSpec)..addColumns([countExp]);

    return q.map((row) => row.read(countExp)).getSingle().then((_) => _!);
  }

  Future<bool> get isEmpty => count.then((value) => value == 0);
}
