import 'package:drift/drift.dart';
import 'package:drift/extensions/json1.dart';

final jsonColumn = DynamicJson._(
  'json',
  '',
  false,
  generatedAs: null,
  type: DriftSqlType.string,
);

class DynamicJson<T extends Object> extends GeneratedColumn<T> {
  DynamicJson._(
    super.$name,
    super.tableName,
    super.$nullable, {
    super.defaultConstraints,
    super.generatedAs,
    required super.type,
  });

  factory DynamicJson(
    String name,
    String tableName,
    bool nullable, {
    String? path,
    bool? stored,
    DriftSqlType<T>? type,
  }) =>
      DynamicJson._(
        name,
        tableName,
        nullable,
        generatedAs: GeneratedAs(
          jsonColumn.jsonExtract(path ?? '\$.$name'),
          stored ?? false,
        ),
        type: type ?? DriftSqlType.forType(),
      );

  static fromString(
    String name,
    String tableName,
    bool nullable, {
    String? path,
    bool stored = false,
    required String type,
  }) =>
      DynamicJson(
        name,
        tableName,
        nullable,
        path: path,
        stored: stored,
        type: DriftSqlType.values.singleWhere((e) => e.name == type),
      );
}
