import 'dart:async';

import 'package:drift/drift.dart';
import 'package:unself_local_database/unself_local_database.dart';

// Reference: https://github.com/simolus3/drift/issues/351

class CollectionOrm<D> extends Table with TableInfo<CollectionOrm<D>, D> {
  CollectionOrm(
    this.attachedDatabase,
    this.actualTableName,
    this.$columns, [
    this._alias,
  ]);

  @override
  final LocalDatabase attachedDatabase;

  @override
  final List<GeneratedColumn> $columns;

  final String? _alias;

  @override
  String get aliasedName => _alias ?? actualTableName;

  @override
  final String actualTableName;

  /// Collection Id for reference
  String get id => actualTableName;

  // @override
  // String get $tableName => _alias ?? actualTableName;

  @override
  CollectionOrm<D> createAlias(String alias) => CollectionOrm(
        attachedDatabase,
        actualTableName,
        $columns,
        alias,
      );

  @override
  FutureOr<D> map(Map<String, dynamic> data, {String? tablePrefix}) {
    // TODO: implement map
    throw UnimplementedError();
  }
}
