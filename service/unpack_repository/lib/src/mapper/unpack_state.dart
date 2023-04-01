import 'dart:convert';

import 'package:unself_model/unself_model.dart';
import 'package:unself_local_database/unself_local_database.dart'
    show UnpackStateCompanion, UnpackStateData, Value;

class UnpackStateMapper {
  const UnpackStateMapper._();

  static UnpackStateCompanion modelToEntity(UnpackState model) =>
      UnpackStateCompanion.insert(
        id: model.id != null ? Value(model.id!) : const Value.absent(),
        specId: model.specId,
        step: model.step.name,
        selectedModules: Value(jsonEncode(model.selectedModules)),
        filePath: Value(model.filePath),
      );

  static UnpackState entityToModel(UnpackStateData data) => UnpackState(
        id: data.id,
        specId: data.specId,
        step: UnpackStep.values.firstWhere((_) => _.name == data.step),
        selectedModules: data.selectedModules != null
            ? jsonDecode(data.selectedModules!)
            : const [],
        filePath: data.filePath,
      );
}
