import 'package:drift/drift.dart';
import 'package:un_database/un_database.dart';

part 'un_database.g.dart';

/// {@template local_database}
/// [UnDatabase] description
/// {@endtemplate}
@DriftDatabase(
  tables: [
    UnpackSpec,
    UnpackState,
  ],
  daos: [
    UnpackStateDao,
    UnpackSpecDao,
  ],
)
class UnDatabase extends _$UnDatabase {
  /// {@macro local_database}
  UnDatabase([QueryExecutor? qe]) : super(qe ?? connect().executor);

  // you should bump this number whenever you change or add a table definition.
  // Migrations are covered later in the documentation.
  @override
  int get schemaVersion => 1;

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
