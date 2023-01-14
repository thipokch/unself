import 'dart:async';

import 'package:drift/drift.dart';

class UnTable extends Table with TableInfo {
  UnTable(
    this.attachedDatabase,
    this.actualTableName,
    this.$columns, [
    this._alias,
  ]);

  @override
  final List<GeneratedColumn> $columns;

  final String? _alias;

  @override
  String get aliasedName => _alias ?? actualTableName;

  @override
  final String actualTableName;

  // @override
  // String get $tableName => alias ?? actualTableName;

  @override
  UnTable createAlias(String alias) => UnTable(
        attachedDatabase,
        actualTableName,
        $columns,
        alias,
      );

  @override
  DatabaseConnectionUser attachedDatabase;

  @override
  FutureOr map(Map<String, dynamic> data, {String? tablePrefix}) {
    // TODO: implement map
    throw UnimplementedError();
  }
}
