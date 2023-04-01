import 'package:unself_local_database/unself_local_database.dart';
import 'package:drift/drift.dart';

part 'unpack_state.g.dart';

@DriftAccessor(tables: [UnpackState])
class UnpackStateDao extends DatabaseAccessor<LocalDatabase>
    with _$UnpackStateDaoMixin {
  UnpackStateDao(super.attachedDatabase);

  Stream<List<UnpackStateData>> watchAll() => select(unpackState).watch();

  Future<List<UnpackStateData>> getAll() => select(unpackState).get();

  Future<UnpackStateData> get(int id) =>
      (select(unpackState)..where((t) => t.id.equals(id))).getSingle();

  Future<int> put(Insertable<UnpackStateData> entity) =>
      into(unpackState).insert(entity, mode: InsertMode.insertOrReplace);

  Future<bool> get isEmpty => select(unpackSpec).get().then((_) => _.isEmpty);
}
