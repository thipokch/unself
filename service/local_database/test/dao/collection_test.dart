// ignore_for_file: avoid_print, depend_on_referenced_packages, unused_local_variable

import 'package:flutter/foundation.dart';
import 'package:drift/native.dart';
import 'package:unself_local_database/unself_local_database.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:unself_model/unself_model.dart';

void main() {
  group('Database', () {
    late LocalDatabase database;

    final now = DateTime.now();
    final nowString = now.toIso8601String();

    final later = now.add(const Duration(minutes: 1));
    final laterString = later.toIso8601String();

    setUp(() {
      database =
          LocalDatabase(NativeDatabase.memory(logStatements: kDebugMode));
    });

    tearDown(() async {
      await database.close();
    });

    test('loading collections from db', () async {
      final a = CollectionData(
        id: 'veggie',
        created: now,
        updated: now,
        name: 'fruits',
        system: false,
        type: CollectionType.node,
        extra: '{}',
      );

      database.into(database.collection).insert(a);
      await database.collectionDao.loadCollectionsFromDb();

      final result = database.collectionDao.getCollectionById('veggie');
      expect(result, const TypeMatcher<CollectionOrm>());
      expect(result.id, a.id);
      expect(result.actualTableName, a.id);
    });

    test('saving collections to db', () async {
      final a = CollectionData(
        id: 'veggie',
        created: now,
        updated: now,
        name: 'fruits',
        system: false,
        type: CollectionType.node,
        extra: '{}',
      );

      final b = FieldData(
        id: 'veggie',
        created: now,
        updated: now,
        name: 'name',
        type: FieldType.text,
        system: false,
        required: true,
        unique: false,
        collectionId: 'veggie',
        extra: '{}',
      );

      print('saving collections to db');
      await database.collectionDao.saveCollection(a, [b]);

      print('loadCollectionsFromDb');
      await database.collectionDao.loadCollectionsFromDb();

      expect(
          // allTables has only registered tables
          await database.allTablesCollections,
          containsAll([
            'collection',
            'field',
            'veggie',
          ]));
    });

    test('deleting collections from db', () async {
      final a = CollectionData(
          id: 'veggie',
          created: now,
          updated: now,
          name: 'fruits',
          system: false,
          type: CollectionType.node,
          extra: '{}');

      final b = FieldData(
        id: 'veggie',
        name: 'name',
        created: now,
        updated: now,
        type: FieldType.text,
        system: false,
        required: true,
        unique: false,
        collectionId: 'veggie',
        extra: '{}',
      );

      print('saving collections to db');
      await database.collectionDao.saveCollection(a, [b]);

      expect(
          // allTables has only registered tables
          await database.allTablesCollections,
          containsAll([
            'collection',
            'field',
            'veggie',
          ]));

      print('deleting collections from db');
      await database.collectionDao.deleteCollection('fruits');

      expect(
          // allTables has only registered tables
          await database.allTablesCollections,
          containsAll([
            'collection',
            'veggie',
          ]));
    });
  });
}
