import 'package:ungraph_repository/ungraph_repository.dart';
import 'package:ungraph_database/ungraph_database.dart' show NodeDao;
import 'package:un_model/un_model.dart';

class NodeRepository {
  final NodeSpec spec;
  final NodeDao _dao;

  const NodeRepository(this.spec, this._dao);

  Future<List<Node>> getAll() =>
      _dao.getAll().then((list) => list.map(NodeMapper.entityToModel).toList());

  Future<Node> put(Node node) =>
      _dao.put(NodeMapper.modelToEntity(node)).then(NodeMapper.entityToModel);
}
