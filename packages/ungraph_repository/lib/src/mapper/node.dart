import 'package:un_model/un_model.dart';
import 'package:ungraph_database/ungraph_database.dart' show NodeData;

class NodeMapper {
  const NodeMapper._();

  static NodeData modelToEntity(Node model) =>
      NodeData(model.specSlug, model.properties);

  static Node entityToModel(NodeData data) => Node(
        specSlug: data.specSlug,
        properties: data.data,
      );
}
