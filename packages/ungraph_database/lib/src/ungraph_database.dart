import 'package:drift/drift.dart';
import 'package:ungraph_database/ungraph_database.dart';

part 'ungraph_database.g.dart';

/// {@template ungraph_database}
/// [UngraphDatabase] description
/// {@endtemplate}
@DriftDatabase(
  tables: [
    UnpackSpec,
    UnpackState,
    EdgeSpec,
    NodeSpec,
  ],
  daos: [
    DynamicDatabase,
    UnpackStateDao,
    UnpackSpecDao,
    EdgeSpecDao,
    NodeSpecDao,
  ],
)
class UngraphDatabase extends _$UngraphDatabase {
  /// {@macro ungraph_database}
  UngraphDatabase([QueryExecutor? qe]) : super(qe ?? connect().executor);

  // you should bump this number whenever you change or add a table definition.
  // Migrations are covered later in the documentation.
  @override
  int get schemaVersion => 1;

  DynamicDatabase get dynamic => dynamicDatabase;

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
