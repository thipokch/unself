import 'package:drift/drift.dart';
import 'package:unself_local_database/unself_local_database.dart';
import 'package:unself_model/unself_model.dart' show FieldType;

part 'local_database.g.dart';

/// {@template local_database}
/// [LocalDatabase] description
/// {@endtemplate}
@DriftDatabase(
  tables: [Collection, Field],
  daos: [CollectionDao, DocumentDao],
)
class LocalDatabase extends _$LocalDatabase {
  /// {@macro local_database}
  LocalDatabase([QueryExecutor? qe]) : super(qe ?? connect().executor);

  // you should bump this number whenever you change or add a table definition.
  // Migrations are covered later in the documentation.
  @override
  int get schemaVersion => 1;

  /// [allTablesCollections] returns a list of all table names,
  /// including dynamic [Collection]s, in the local_database.
  Future<List<String>> get allTablesCollections async => await customSelect(
          'SELECT name FROM sqlite_schema WHERE type =\'table\' AND name NOT LIKE \'sqlite_%\';')
      .map((row) => row.read<String>('name'))
      .get();

  @override
  MigrationStrategy get migration => MigrationStrategy(
        onCreate: (Migrator m) async {
          await m.createAll();
        },
        onUpgrade: (m, from, to) async {
          // disable foreign_keys before migrations
          await customStatement('PRAGMA foreign_keys = OFF');
        },
        beforeOpen: (details) async {
          // foreign key references aren't enabled by default
          await customStatement('PRAGMA foreign_keys = ON');
          // collectionDao.
        },
      );
}
