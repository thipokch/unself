import 'package:ungraph_repository/ungraph_repository.dart';
import 'package:ungraph_database/ungraph_database.dart'
    show EdgeSpecData, UngraphDatabase, NodeSpecData;
import 'package:un_model/un_model.dart';

part 'iungraph_repository.dart';

class UngraphRepository implements IUngraphRepository {
  const UngraphRepository(this._db);

  final UngraphDatabase _db;

  Stream<List<String>> watchTables() => _db.dynamic.queryTables().watch();

  // Node

  Future<NodeSpecData> registerNode(NodeSpec spec) =>
      _db.nodeSpecDao.put(NodeSpecMapper.modelToEntity(spec));

  Future<NodeRepository> initNode(String specSlug) async {
    final spec = NodeSpecMapper.entityToModel(
      await _db.nodeSpecDao.getBySlug(specSlug),
    );

    final dao = NodeSpecMapper.modelToDao(spec, _db);
    await dao.createTable();

    return NodeRepository(spec, dao);
  }

  // Edge

  Future<EdgeSpecData> registerEdge(EdgeSpec spec) =>
      _db.edgeSpecDao.put(EdgeSpecMapper.modelToEntity(spec));

  Future<EdgeRepository> initEdge(String specSlug) async {
    final spec = EdgeSpecMapper.entityToModel(
      await _db.edgeSpecDao.getBySlug(specSlug),
    );

    final dao = EdgeSpecMapper.modelToDao(spec, _db);
    await dao.createTable();

    return EdgeRepository(spec, dao);
  }

  // Edge x Node

  Future<Iterable<String>> getEdgeOfNode(String slugs) =>
      _db.edgeSpecDao.getAllByNode(slugs);
}
