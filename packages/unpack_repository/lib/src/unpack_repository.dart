// import 'package:un_database/un_database.dart';
// import 'package:unpack_repository/src/mapper/mapper.dart';

import 'package:un_database/un_database.dart' show UnDatabase;
import 'package:un_model/un_model.dart';
import 'package:unpack_repository/unpack_repository.dart';

part 'iunpack_repository.dart';

/// {@template unpack_repository}
/// UnpackRepository description
/// {@endtemplate}
class UnpackRepository implements IUnpackRepository {
  /// {@macro unpack_repository}
  const UnpackRepository(this._db);

  final UnDatabase _db;

  static Future<void> bootstrap(
    UnDatabase db,
    Iterable<UnpackSpec> specs,
  ) async {
    if (await db.unpackSpecDao.isEmpty) {
      await db.unpackSpecDao.putAll(
        specs.map(UnpackSpecMapper.modelToEntity),
      );
    }
  }

  @override
  Future<bool> get isSpecsEmpty => _db.unpackSpecDao.isEmpty;

  @override
  Stream<Iterable<UnpackSpec>> watchAllSpecs() => _db.unpackSpecDao
      .watchAll()
      .map((_) => _.map(UnpackSpecMapper.entityToModel));

  @override
  Future<Iterable<UnpackSpec>> getAllSpecs() => _db.unpackSpecDao
      .getAll()
      .then((_) => _.map(UnpackSpecMapper.entityToModel));

  @override
  Future<UnpackSpec> getSpecById(String id) =>
      _db.unpackSpecDao.get(id).then(UnpackSpecMapper.entityToModel);

  @override
  Future<bool> get isStatesEmpty => _db.unpackStateDao.isEmpty;

  @override
  Future<UnpackSpec> putSpec(UnpackSpec spec) => _db.unpackSpecDao
      .put(UnpackSpecMapper.modelToEntity(spec))
      .then(UnpackSpecMapper.entityToModel);

  @override
  Stream<Iterable<UnpackState>> watchAllStates() => _db.unpackStateDao
      .watchAll()
      .map((_) => _.map(UnpackStateMapper.entityToModel));

  @override
  Future<Iterable<UnpackState>> getAllStates() => _db.unpackStateDao
      .getAll()
      .then((_) => _.map(UnpackStateMapper.entityToModel));

  @override
  Future<UnpackState> getStateById(String id) =>
      _db.unpackStateDao.get(id).then(UnpackStateMapper.entityToModel);

  @override
  Future<UnpackState> putState(UnpackState state) => _db.unpackStateDao
      .put(UnpackStateMapper.modelToEntity(state))
      .then(UnpackStateMapper.entityToModel);
}
