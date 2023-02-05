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
        columns,
      );

  Collection toDomain() => Collection(
        id: id,
        created: created,
        updated: updated,
        name: name,
        type: type,
        system: system,
        listRule: listRule,
        viewRule: viewRule,
        createRule: createRule,
        updateRule: updateRule,
        deleteRule: deleteRule,
        extra: jsonDecode(extra),
      );
}

extension CollectionFromDomain on Collection {
  CollectionData toData() => CollectionData(
        id: id,
        created: created,
        updated: updated,
        type: type,
        name: name,
        system: system,
        listRule: listRule,
        viewRule: viewRule,
        createRule: createRule,
        updateRule: updateRule,
        deleteRule: deleteRule,
        extra: jsonEncode(extra),
      );
}
