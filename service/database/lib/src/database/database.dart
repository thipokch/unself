import 'dart:io';

import 'package:drift/drift.dart';
import 'package:drift/native.dart';
import 'package:path_provider/path_provider.dart';
import 'package:path/path.dart' as p;
import 'package:unself_database/unself_database.dart';

part 'database.g.dart';

/// {@template database}
/// [Database] description
/// {@endtemplate}
@DriftDatabase(
  tables: [Collection, Field],
  daos: [CollectionDao, DocumentDao],
)
class Database extends _$Database {
  /// {@macro database}
  Database() : super(_openConnection());

  // you should bump this number whenever you change or add a table definition.
  // Migrations are covered later in the documentation.
  @override
  int get schemaVersion => 1;

  // the LazyDatabase util lets us find the right location for the file async.
  static _openConnection() => LazyDatabase(() async {
        // put the database file, called db.sqlite here, into the documents folder
        // for your app.
        final dbFolder = await getApplicationDocumentsDirectory();
        final file = File(p.join(dbFolder.path, 'db.sqlite'));
        return NativeDatabase.createInBackground(file);
      });

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
