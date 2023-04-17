import 'package:ungraph_repository/ungraph_repository.dart';
import 'package:un_model/un_model.dart';

part 'inode_service.dart';

class NodeService extends INodeService {
  final NodeRepository _repo;

  @override
  final Set<String> edges;

  NodeService(this._repo, this.edges);

  @override
  List<JsonSpec> get json => _repo.spec.jsonSpecs;

  Future<List<Node>> getAll() => _repo.getAll();

  Future<Node> put(Node node) => _repo.put(node);
}
