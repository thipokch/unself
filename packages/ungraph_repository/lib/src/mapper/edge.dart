import 'package:un_model/un_model.dart';
import 'package:ungraph_database/ungraph_database.dart' show EdgeData;

class EdgeMapper {
  const EdgeMapper._();

  static EdgeData modelToEntity(Edge model) =>
      EdgeData(model.specSlug, model.properties);

  static Edge entityToModel(EdgeData data) => Edge(
        specSlug: data.specSlug,
        properties: data.data,
      );
}
