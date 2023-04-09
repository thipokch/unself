import 'dart:convert';

import 'package:ungraph_repository/ungraph_repository.dart';
import 'package:un_model/un_model.dart';
import 'package:ungraph_database/ungraph_database.dart'
    show
        UngraphDatabase,
        NodeDao,
        NodeSpecCompanion,
        NodeSpecData,
        NodeTable,
        Value;

class NodeSpecMapper {
  const NodeSpecMapper._();

  static NodeSpecCompanion modelToEntity(NodeSpec model) =>
      NodeSpecCompanion.insert(
        id: model.id != null ? Value(model.id!) : const Value.absent(),
        slug: model.slug,
        name: model.name,
        labels: jsonEncode(model.labels),
        propSpecs: jsonEncode(model.propSpecs),
      );

  static NodeSpec entityToModel(NodeSpecData data) => NodeSpec(
        id: data.id,
        slugged: data.slug,
        name: data.name,
        propSpecs: (jsonDecode(data.propSpecs) as List)
            .map((_) => PropSpec.fromJson(_))
            .toList(),
      );

  static NodeTable modelToTable(NodeSpec model) => NodeTable(
        model.id!,
        model.slug,
        model.propSpecs.map(PropSpecMapper.modelToColumn).toList(),
      );

  static NodeDao modelToDao(NodeSpec model, [UngraphDatabase? db]) =>
      NodeDao(modelToTable(model), db);
}
