import 'dart:convert';

import 'package:ungraph_repository/ungraph_repository.dart';
import 'package:un_model/un_model.dart';
import 'package:ungraph_database/ungraph_database.dart'
    show
        EdgeDao,
        EdgeSpecCompanion,
        EdgeSpecData,
        EdgeTable,
        UngraphDatabase,
        Value,
        jsonColumn;

class EdgeSpecMapper {
  const EdgeSpecMapper._();

  static EdgeSpecCompanion modelToEntity(EdgeSpec model) =>
      EdgeSpecCompanion.insert(
        id: model.id != null ? Value(model.id!) : const Value.absent(),
        slug: model.slug,
        name: model.name,
        description: model.description,
        type: model.type,
        sourceNodeSpecId: model.sourceNodeSpecId,
        targetNodeSpecId: model.targetNodeSpecId,
        jsonSpecs: jsonEncode(model.jsonSpecs),
      );

  static EdgeSpec entityToModel(EdgeSpecData data) => EdgeSpec(
        id: data.id,
        slugged: data.slug,
        name: data.name,
        description: data.description,
        type: data.type,
        sourceNodeSpecId: data.sourceNodeSpecId,
        targetNodeSpecId: data.targetNodeSpecId,
        jsonSpecs: (jsonDecode(data.jsonSpecs) as List)
            .map((_) => JsonSpec.fromJson(_))
            .toList(),
      );

  static EdgeTable modelToTable(EdgeSpec model) => EdgeTable(
        model.id!,
        model.slug,
        model.jsonSpecs
            .map((_) => JsonSpecMapper.modelToJson(model.slug, _))
            .followedBy([jsonColumn]).toList(),
      );

  static EdgeDao modelToDao(EdgeSpec model, [UngraphDatabase? db]) =>
      EdgeDao(modelToTable(model), db);
}
