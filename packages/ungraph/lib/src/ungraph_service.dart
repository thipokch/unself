import 'dart:async';

import 'package:collection/collection.dart';
import 'package:rxdart/subjects.dart';
import 'package:ungraph/src/edge_service/edge_service.dart';
import 'package:ungraph/src/node_service/node_service.dart';
import 'package:ungraph_repository/ungraph_repository.dart';
import 'package:un_model/un_model.dart';
import 'iungraph_service.dart';

class UngraphService implements IUngraphService {
  UngraphService({
    required UngraphRepository repository,
  }) : _repo = repository {
    _repo.watchTables().listen(_tables.add);
  }

  final UngraphRepository _repo;
  final _tables = BehaviorSubject<List<String>>.seeded([]);

  final _nodes = <String, NodeService>{};
  final _edges = <String, EdgeService>{};

  late final _nodesEdges = <String, Set<String>>{};

  late final _instance = CombinedMapView<String, dynamic>([_nodes, _edges]);
  late final _instanceSlug = MapKeySet(_instance);

  int get activeNodes => _nodes.length;
  int get activeEdges => _edges.length;

  Future<void> registerNode(NodeSpec spec) async =>
      await _repo.registerNode(spec);

  Future<void> registerAllNodes(Iterable<NodeSpec> specs) async =>
      await Future.wait(specs.map(registerNode));

  Future<void> registerEdge(EdgeSpec spec) async =>
      await _repo.registerEdge(spec);

  Future<NodeService> node(String specSlug) async =>
      _nodes[specSlug] ??= NodeService(
        await _repo.initNode(specSlug),
        await edgeOfNode(specSlug),
      );

  Future<EdgeService> edge(String specSlug) async =>
      _edges[specSlug] ??= EdgeService(await _repo.initEdge(specSlug));

  Future<Set<String>> edgeOfNode(String specSlug) async =>
      _nodesEdges[specSlug] ??= (await _repo.getEdgeOfNode(specSlug)).toSet();

  Future<void> dispose(String instanceSlug) async {
    _nodes.remove(instanceSlug);
    _edges.remove(instanceSlug);
  }

  FutureOr<void> clear() async =>
      await Future.wait(_instanceSlug.toSet().map(dispose));
}
