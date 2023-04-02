import 'package:unself_local_database/unself_local_database.dart';
import 'package:drift/drift.dart';

part 'unpack_state.g.dart';

@DriftAccessor(tables: [UnpackState])
class UnpackStateDao extends DatabaseAccessor<LocalDatabase>
    with _$UnpackStateDaoMixin {
  UnpackStateDao(super.attachedDatabase);

  Stream<List<UnpackStateData>> watchAll() => select(unpackState).watch();

  Future<List<UnpackStateData>> getAll() => select(unpackState).get();

  Future<UnpackStateData> get(String id) =>
      (select(unpackState)..where((t) => t.id.equals(id))).getSingle();

  Future<UnpackStateData> put(Insertable<UnpackStateData> entity) =>
      into(unpackState)
          .insertReturning(entity, mode: InsertMode.insertOrReplace);

  Future<int> get count {
    final countExp = unpackState.id.count();
    final q = selectOnly(unpackState)..addColumns([countExp]);

    return q.map((row) => row.read(countExp)).getSingle().then((_) => _!);
  }

  Future<bool> get isEmpty => count.then((value) => value == 0);
}
