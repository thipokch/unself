import 'package:drift/drift.dart';
import 'package:ungraph_database/ungraph_database.dart';

abstract class DynamicTable<D> extends Table
    with TableInfo<DynamicTable<D>, D>, PrimaryUuid {
  DynamicTable(
    // this.actualTableName,
    this.$columns, {
    String? alias,
    UngraphDatabase? attachedDatabase,
  })  : _alias = alias,
        _attachedDatabase = attachedDatabase;

  final String? _alias;

  UngraphDatabase? _attachedDatabase;

  @override
  final List<GeneratedColumn> $columns;

  @override
  String get actualTableName;

  @override
  String get aliasedName => _alias ?? actualTableName;

  void attach(UngraphDatabase database) => this._attachedDatabase = database;

  @override
  UngraphDatabase get attachedDatabase {
    if (_attachedDatabase != null) return _attachedDatabase!;
    throw StateError('Database is not yet attached for DynamicTables.');
  }

  Future<void> createTable() async =>
      // ignore: invalid_use_of_visible_for_testing_member, invalid_use_of_protected_member
      await attachedDatabase.createMigrator().createTable(this);
}
