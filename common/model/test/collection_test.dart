import 'dart:convert';

import 'package:built_collection/built_collection.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:unself_model/unself_model.dart';

import 'util.dart';

void main() {
  group('test Field', () {
    final now = DateTime.now();
    final nowString = now.toIso8601String();

    final Collection aCollection = Collection(
      id: 'aCollection',
      created: now,
      updated: now,
      type: CollectionType.node,
      name: 'id',
      system: false,
      extra: extra,
    );

    final Collection bCollection = Collection(
      id: 'bCollection',
      created: now,
      updated: now,
      type: CollectionType.edge,
      name: 'id',
      system: false,
      extra: extra,
    );

    final aObject = {
      'id': 'aCollection',
      'created': nowString,
      'updated': nowString,
      'type': 'node',
      'name': 'id',
      'system': false,
      'extra': extra,
    };

    final bObject = {
      'id': 'bCollection',
      'created': nowString,
      'updated': nowString,
      'type': 'edge',
      'name': 'id',
      'system': false,
      'extra': extra,
    };

    setUp(() {});

    test('hashCode', () {
      expect(aCollection.hashCode, Collection.fromJson(aObject).hashCode);
      expect(aCollection.hashCode, isNot(bCollection.hashCode));
      expect(Collection.fromJson(bObject).hashCode,
          isNot(Collection.fromJson(aObject).hashCode));
    });

    test('equals', () {
      expect(aCollection, Collection.fromJson(aObject));
      expect(bCollection, Collection.fromJson(bObject));
      expect(bCollection, isNot(aCollection));
      expect(Collection.fromJson(bObject), isNot(Collection.fromJson(aObject)));
    });

    test('copyWith', () {
      expect(aCollection, aCollection.copyWith());
      expect(bCollection, bCollection.copyWith());

      expect(aCollection.copyWith(id: 'aCollection'), aCollection);
      expect(aCollection.copyWith(id: 'ACollection'), isNot(aCollection));
    });

    test('copyWith - extra', () {
      expect(
        aCollection.copyWith(extra: Map.from(aObject)..['extra'] = {}),
        isNot(aCollection),
      );

      expect(
        bCollection.copyWith(
          extra:
              bCollection.extra.build().rebuild((_) => _['me'] = 'who').asMap(),
        ),
        isNot(bCollection),
      );
    });

    test('toJson', () {
      expect(aCollection.toJson(), aObject);
      expect(bCollection.toJson(), bObject);
    });

    test('toJson - extra', () {
      expect(jsonEncode(bCollection), jsonEncode(bObject));

      expect(
        bCollection.copyWith(extra: {}).toJson(),
        Map.from(bObject)..remove('extra'),
      );

      expect(
        jsonEncode(bCollection.copyWith(extra: {})),
        jsonEncode(Map.from(bObject)..remove('extra')),
      );
    });

    test('fromJson', () {
      expect(Collection.fromJson(aObject), aCollection);
      expect(Collection.fromJson(bObject), bCollection);
    });

    test('fromJson - extra', () {
      expect(Collection.fromJson(bObject), bCollection);

      expect(
        Collection.fromJson(Map.from(bObject)..['extra'] = {}),
        bCollection.copyWith(extra: {}),
      );
    });
  });
}
