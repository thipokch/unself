part of 'node_service.dart';

abstract class INodeService {
  const INodeService();

  List<JsonSpec> get json;
  Set<String> get edges;
}
