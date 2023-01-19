import 'dart:convert';

import 'package:drift/drift.dart';
import 'package:unself_local_database/unself_local_database.dart'
    show CollectionData, CollectionOrm, LocalDatabase;
import 'package:unself_model/unself_model.dart' show Collection;

extension CollectionToOrm on CollectionData {
  CollectionOrm<D> toOrm<D>(
          LocalDatabase undb, List<GeneratedColumn> columns) =>
      CollectionOrm(
        undb,
        id,
        name,
        columns,
      );

  Collection toDomain() => Collection(
        id: id,
        name: name,
        type: type,
        system: system,
        listRule: listRule,
        viewRule: viewRule,
        createRule: createRule,
        updateRule: updateRule,
        deleteRule: deleteRule,
        options: jsonDecode(options ?? "{}"),
      );
}

extension CollectionFromOrm on CollectionOrm {
  CollectionData toData() => CollectionData(
        id: id,
        name: actualTableName,
        type: "collection",
        system: false,
      );
}

extension CollectionFromDomain on Collection {
  CollectionData toData() => CollectionData(
        id: id,
        name: name,
        type: type,
        system: system,
        listRule: listRule,
        viewRule: viewRule,
        createRule: createRule,
        updateRule: updateRule,
        deleteRule: deleteRule,
        options: jsonEncode(options),
      );
}
