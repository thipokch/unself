import 'package:unself_local_database/unself_local_database.dart';
import 'package:drift/drift.dart';

part 'unpack_spec.g.dart';

@DriftAccessor(tables: [UnpackSpec])
class UnpackSpecDao extends DatabaseAccessor<LocalDatabase>
    with _$UnpackSpecDaoMixin {
  UnpackSpecDao(super.attachedDatabase);

  Stream<List<UnpackSpecData>> watchAll() => select(unpackSpec).watch();

  Future<List<UnpackSpecData>> getAll() => select(unpackSpec).get();

  Future<UnpackSpecData> get(int id) =>
      (select(unpackSpec)..where((t) => t.id.equals(id))).getSingle();

  Future<int> put(Insertable<UnpackSpecData> entity) =>
      into(unpackSpec).insert(entity, mode: InsertMode.insertOrReplace);

  Future<void> putAll(Iterable<Insertable<UnpackSpecData>> entities) =>
      batch((batch) => batch.insertAll(unpackSpec, entities,
          mode: InsertMode.insertOrReplace));

  Future<bool> get isEmpty => select(unpackSpec).get().then((_) => _.isEmpty);
}
