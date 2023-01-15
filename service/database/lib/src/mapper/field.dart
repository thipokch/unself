import 'dart:convert';

import 'package:drift/drift.dart';
import 'package:unself_database/unself_database.dart' show FieldData;
import 'package:unself_model/unself_model.dart' show Field;

extension FieldToOrm on FieldData {
  GeneratedColumn toOrm() => GeneratedColumn(
        name,
        name,
        !required,
        type: DriftSqlType.any, // TODO: Implement type conversion
        defaultConstraints: null, // TODO: Implement unique constraint
      );

  Field toDomain() => Field(
        id: id,
        name: name,
        type: type,
        system: system,
        required: required,
        unique: unique,
        options: jsonDecode(options ?? "{}"),
      );
}

extension FieldFromOrm on GeneratedColumn {
  FieldData toData(String collectionId) => FieldData(
        id: "",
        name: name,
        type: "any",
        system: false,
        required: !$nullable,
        unique: true,
        collectionId: collectionId,
      );
}

extension FieldFromDomain on Field {
  FieldData toData() => FieldData(
        id: id,
        collectionId: id,
        name: name,
        type: type,
        system: system,
        required: required,
        unique: unique,
        options: jsonEncode(options),
      );
}
