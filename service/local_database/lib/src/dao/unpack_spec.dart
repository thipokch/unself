import 'package:unself_local_database/unself_local_database.dart';
import 'package:drift/drift.dart';

part 'unpack_spec.g.dart';

@DriftAccessor(tables: [UnpackSpec])
class UnpackSpecDao extends DatabaseAccessor<LocalDatabase>
    with _$UnpackSpecDaoMixin {
  UnpackSpecDao(super.attachedDatabase);

  Stream<List<UnpackSpecData>> watchAll() => select(unpackSpec).watch();

  Future<List<UnpackSpecData>> getAll() => select(unpackSpec).get();

  Future<UnpackSpecData> get(String id) {
    final q = select(unpackSpec)..where((t) => t.id.equals(id));
    return q.getSingle();
  }

  Future<UnpackSpecData> put(Insertable<UnpackSpecData> entity) =>
      into(unpackSpec)
          .insertReturning(entity, mode: InsertMode.insertOrReplace);

  Future<void> putAll(Iterable<Insertable<UnpackSpecData>> entities) =>
      batch((batch) => batch.insertAll(unpackSpec, entities,
          mode: InsertMode.insertOrReplace));

  Future<int> get count {
    final countExp = unpackSpec.id.count();
    final q = selectOnly(unpackSpec)..addColumns([countExp]);

    return q.map((row) => row.read(countExp)).getSingle().then((_) => _!);
  }

  Future<bool> get isEmpty => count.then((value) => value == 0);
}
