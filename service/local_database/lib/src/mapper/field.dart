import 'dart:convert';

import 'package:drift/drift.dart';
import 'package:unself_local_database/unself_local_database.dart'
    show FieldData;
import 'package:unself_model/unself_model.dart'
    show Collection, Field, FieldType;

extension FieldToOrm on FieldData {
  GeneratedColumn toOrm() => GeneratedColumn(
        name,
        collectionId,
        !required,
        type: <FieldType, DriftSqlType>{
          FieldType.text: DriftSqlType.string,
          FieldType.number: DriftSqlType.int,
          FieldType.bool: DriftSqlType.bool,
          FieldType.email: DriftSqlType.string,
          FieldType.url: DriftSqlType.string,
          FieldType.date: DriftSqlType.dateTime,
          FieldType.select: DriftSqlType.string,
          FieldType.file: DriftSqlType.string,
          FieldType.relation: DriftSqlType.string,
        }[type]!,
        // defaultConstraints: GeneratedColumn, // TODO: Implement unique constraint
      );

  Field toDomain({
    required Collection collection,
  }) =>
      Field(
        id: id,
        created: created,
        updated: updated,
        name: name,
        type: type,
        system: system,
        required: required,
        unique: unique,
        collection: collection,
        extra: jsonDecode(extra),
      );
}

extension FieldFromDomain on Field {
  FieldData toData() => FieldData(
        id: id,
        created: created,
        updated: updated,
        collectionId: id,
        name: name,
        type: type,
        system: system,
        required: required,
        unique: unique,
        extra: jsonEncode(extra),
      );
}
