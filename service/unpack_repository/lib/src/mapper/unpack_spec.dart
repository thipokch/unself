import 'dart:convert';

import 'package:unself_model/unself_model.dart';
import 'package:unself_local_database/unself_local_database.dart'
    show UnpackSpecCompanion, UnpackSpecData, Value;

class UnpackSpecMapper {
  const UnpackSpecMapper._();

  static UnpackSpecCompanion modelToEntity(UnpackSpec model) =>
      UnpackSpecCompanion.insert(
        id: model.id != null ? Value(model.id!) : const Value.absent(),
        slug: model.slug,
        name: model.name,
        fileSpec: jsonEncode(model.fileSpec),
        retrieveSpec: jsonEncode(model.retrieveSpec),
        modules: jsonEncode(model.modules),
      );

  static UnpackSpec entityToModel(UnpackSpecData data) => UnpackSpec(
        id: data.id,
        name: data.name,
        fileSpec: FileSpec.fromJson(
          jsonDecode(data.fileSpec),
        ),
        retrieveSpec: RetrieveSpec.fromJson(
          jsonDecode(data.retrieveSpec),
        ),
        modules: (jsonDecode(data.modules) as Iterable)
            .map((_) => ModuleSpec.fromJson(_)),
      );
}
