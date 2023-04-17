import 'dart:convert';

import 'package:ungraph_repository/ungraph_repository.dart';
import 'package:un_model/un_model.dart';
import 'package:ungraph_database/ungraph_database.dart'
    show
        NodeDao,
        NodeSpecCompanion,
        NodeSpecData,
        NodeTable,
        UngraphDatabase,
        Value,
        jsonColumn;

class NodeSpecMapper {
  const NodeSpecMapper._();

  static NodeSpecCompanion modelToEntity(NodeSpec model) =>
      NodeSpecCompanion.insert(
        id: model.id != null ? Value(model.id!) : const Value.absent(),
        slug: model.slug,
        name: model.name,
        description: model.description,
        labels: jsonEncode(model.labels),
        jsonSpecs: jsonEncode(model.jsonSpecs),
      );

  static NodeSpec entityToModel(NodeSpecData data) => NodeSpec(
        id: data.id,
        slugged: data.slug,
        name: data.name,
        description: data.description,
        jsonSpecs: (jsonDecode(data.jsonSpecs) as List)
            .map((_) => JsonSpec.fromJson(_))
            .toList(),
      );

  static NodeTable modelToTable(NodeSpec model) => NodeTable(
        model.id!,
        model.slug,
        model.jsonSpecs
            .map((_) => JsonSpecMapper.modelToJson(model.slug, _))
            .followedBy([jsonColumn]).toList(),
      );

  static NodeDao modelToDao(NodeSpec model, [UngraphDatabase? db]) =>
      NodeDao(modelToTable(model), db);
}
