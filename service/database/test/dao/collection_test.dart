import 'package:drift/native.dart';
import 'package:unself_database/unself_database.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('Database', () {
    // ignore: unused_local_variable
    late Database database;

    setUp(() {
      database = Database(NativeDatabase.memory(logStatements: true));
    });

    tearDown(() async {
      await database.close();
    });

    test('loading collections from db', () async {
      final a = CollectionData(
        id: 'veggie',
        name: 'fruits',
        system: false,
        type: 'food',
      );

      database.into(database.collection).insert(a);
      await database.collectionDao.loadCollectionsFromDb();

      final result = database.collectionDao.getCollectionByName('fruits');
      expect(result, TypeMatcher<CollectionOrm>());
      expect(result.id, a.id);
      expect(result.actualTableName, a.name);
    });

    test('saving collections to db', () async {
      final a = CollectionData(
        id: 'veggie',
        name: 'fruits',
        system: false,
        type: 'table',
      );

      final b = FieldData(
        id: 'veggie',
        name: 'name',
        type: 'string',
        system: false,
        required: true,
        unique: false,
        collectionId: 'veggie',
      );

      print('saving collections to db');
      await database.collectionDao.saveCollection(a, [b]);

      print('loadCollectionsFromDb');
      await database.collectionDao.loadCollectionsFromDb();

      database.collectionDao.getCollectionByName('fruits');
      expect(
          // allTables has only registered tables
          await database.allTablesCollections,
          containsAll([
            'collection',
            'field',
            'fruits',
          ]));
    });

    test('deleting collections from db', () async {
      final a = CollectionData(
        id: 'veggie',
        name: 'fruits',
        system: false,
        type: 'table',
      );

      final b = FieldData(
        id: 'veggie',
        name: 'name',
        type: 'string',
        system: false,
        required: true,
        unique: false,
        collectionId: 'veggie',
      );

      print('saving collections to db');
      await database.collectionDao.saveCollection(a, [b]);

      expect(
          // allTables has only registered tables
          await database.allTablesCollections,
          containsAll([
            'collection',
            'field',
            'fruits',
          ]));

      print('deleting collections from db');
      await database.collectionDao.deleteCollection('fruits');

      expect(
          // allTables has only registered tables
          await database.allTablesCollections,
          containsAll([
            'collection',
            'field',
          ]));
    });
  });
}
