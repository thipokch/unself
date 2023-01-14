import 'dart:io';

import 'package:drift/drift.dart';
import 'package:drift/native.dart';
import 'package:path_provider/path_provider.dart';
import 'package:path/path.dart' as p;
import 'package:unself_database/unself_database.dart';

part 'idatabase.dart';
part 'database.g.dart';

/// {@template database}
/// [UnDatabase] description
/// {@endtemplate}
@DriftDatabase(tables: [
  Collection,
  SchemaField,
  Schema,
])
class UnDatabase extends _$UnDatabase implements IDatabase {
  /// {@macro database}
  UnDatabase() : super(_openConnection());

  // you should bump this number whenever you change or add a table definition.
  // Migrations are covered later in the documentation.
  @override
  int get schemaVersion => 1;

  late Migrator _migrator = Migrator(this);

  createCollection({
    required Collection collection,
    required List<SchemaField> fields,
  }) async {
    // _migrator.createTable();
  }
}

LazyDatabase _openConnection() {
  // the LazyDatabase util lets us find the right location for the file async.
  return LazyDatabase(() async {
    // put the database file, called db.sqlite here, into the documents folder
    // for your app.
    final dbFolder = await getApplicationDocumentsDirectory();
    final file = File(p.join(dbFolder.path, 'db.sqlite'));
    return NativeDatabase.createInBackground(file);
  });
}
