part of 'node_service.dart';

abstract class INodeService {
  const INodeService();

  List<PropSpec> get properties;
  Set<String> get edges;
}
