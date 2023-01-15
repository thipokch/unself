import 'dart:async';

import 'package:drift/drift.dart';
import 'package:unself_database/unself_database.dart';

class CollectionOrm<D> extends Table with TableInfo<CollectionOrm<D>, D> {
  CollectionOrm(
    this.attachedDatabase,
    this.id,
    this.actualTableName,
    this.$columns, [
    this._alias,
  ]);

  @override
  final List<GeneratedColumn> $columns;

  final String? _alias;

  final String id;

  @override
  String get aliasedName => _alias ?? actualTableName;

  @override
  final String actualTableName;

  // @override
  // String get $tableName => alias ?? actualTableName;

  @override
  CollectionOrm<D> createAlias(String alias) => CollectionOrm(
        attachedDatabase,
        id,
        actualTableName,
        $columns,
        alias,
      );

  @override
  Database attachedDatabase;

  @override
  FutureOr<D> map(Map<String, dynamic> data, {String? tablePrefix}) {
    // TODO: implement map
    throw UnimplementedError();
  }
}
