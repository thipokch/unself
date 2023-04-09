import 'dart:async';

import 'package:ungraph_database/ungraph_database.dart';

class EdgeTable extends DynamicTable<EdgeData> {
  EdgeTable(
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
  EdgeTable createAlias(String alias) => EdgeTable(
        specId,
        specSlug,
        $columns,
        alias: alias,
        attachedDatabase: attachedDatabase,
      );

  @override
  FutureOr<EdgeData> map(Map<String, dynamic> data, {String? tablePrefix}) =>
      EdgeData(specSlug, data);
}
