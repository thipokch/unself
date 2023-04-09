part of 'edge_service.dart';

abstract class IEdgeService {
  const IEdgeService();

  Iterable get properties;
  String get sourceNode;
  String get targetNode;
}
