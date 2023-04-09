import 'dart:async';

import 'package:ungraph_database/ungraph_database.dart';

class NodeTable extends DynamicTable<NodeData> {
  NodeTable(
    this.specId,
    this.specSlug,
    super.$columns, {
    super.alias,
    super.attachedDatabase,
  });

  final String specId;
  final String specSlug;

  @override
  String get actualTableName => specSlug;

  @override
  NodeTable createAlias(String alias) => NodeTable(
        specId,
        specSlug,
        $columns,
        alias: alias,
        attachedDatabase: attachedDatabase,
      );

  @override
  FutureOr<NodeData> map(Map<String, dynamic> data, {String? tablePrefix}) =>
      NodeData(specSlug, data);
}
