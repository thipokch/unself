import 'package:drift/drift.dart';

class DynamicColumn<T extends Object> extends GeneratedColumn<T> {
  DynamicColumn._(
    super.$name,
    super.tableName,
    super.$nullable, {
    required super.type,
  });

  static fromString(
    String name,
    String tableName,
    bool nullable, {
    required String type,
  }) =>
      DynamicColumn._(
        name,
        tableName,
        nullable,
        type: DriftSqlType.values.singleWhere((e) => e.name == type),
      );

  factory DynamicColumn(
    String name,
    String tableName,
    bool nullable,
  ) =>
      DynamicColumn._(
        name,
        tableName,
        nullable,
        type: DriftSqlType.forType(),
      );
}
