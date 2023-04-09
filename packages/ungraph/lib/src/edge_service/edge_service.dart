import 'package:ungraph_repository/ungraph_repository.dart';

part 'iedge_service.dart';

class EdgeService extends IEdgeService {
  final EdgeRepository _repo;

  EdgeService(this._repo);

  @override
  // TODO: implement properties
  Iterable get properties => throw UnimplementedError();

  @override
  // TODO: implement sourceNode
  String get sourceNode => throw UnimplementedError();

  @override
  // TODO: implement targetNode
  String get targetNode => throw UnimplementedError();
}
