// ignore_for_file: unused_local_variable

import 'dart:convert';

import 'package:built_collection/built_collection.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:unself_model/unself_model.dart';
import 'util.dart';

void main() {
  group('test Field', () {
    final now = DateTime.now();
    final nowString = now.toIso8601String();

    final later = now.add(const Duration(minutes: 1));
    final laterString = later.toIso8601String();

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

    final aField = Field(
      id: 'aField',
      created: now,
      updated: now,
      name: 'name',
      type: FieldType.text,
      system: true,
      required: true,
      collection: aCollection,
      unique: true,
    );

    final bField = Field(
      id: 'bField',
      created: now,
      updated: now,
      name: 'name',
      type: FieldType.number,
      system: false,
      required: false,
      unique: false,
      collection: bCollection,
      extra: extra,
    );

    final aObject = {
      'id': 'aField',
      'created': nowString,
      'updated': nowString,
      'type': 'text',
      'name': 'name',
      'system': true,
      'required': true,
      'unique': true,
      'collection': {
        'id': 'aCollection',
        'created': nowString,
        'updated': nowString,
        'type': 'node',
        'name': 'id',
        'system': false,
        'extra': extra,
      },
    };

    final bObject = {
      'id': 'bField',
      'created': nowString,
      'updated': nowString,
      'type': 'number',
      'name': 'name',
      'system': false,
      'required': false,
      'unique': false,
      'collection': {
        'id': 'bCollection',
        'created': nowString,
        'updated': nowString,
        'type': 'edge',
        'name': 'id',
        'system': false,
        'extra': extra,
      },
      'extra': extra,
    };

    setUp(() {});

    test('hashCode', () {
      expect(bField.hashCode, Field.fromJson(bObject).hashCode);
      expect(bField.hashCode, isNot(aField.hashCode));
      expect(Field.fromJson(bObject).hashCode,
          isNot(Field.fromJson(aObject).hashCode));
    });

    test('equals', () {
      expect(aField, Field.fromJson(aObject));
      expect(bField, Field.fromJson(bObject));
      expect(bField, isNot(aField));
      expect(Field.fromJson(bObject), isNot(Field.fromJson(aObject)));
    });

    test('copyWith', () {
      expect(aField, aField.copyWith());
      expect(bField, bField.copyWith());

      expect(aField.copyWith(id: 'aField'), aField);
      expect(aField.copyWith(id: 'AField'), isNot(aField));
    });

    test('copyWith - extra', () {
      expect(
        aField.copyWith(extra: Map.from(aObject)..['extra'] = {}),
        isNot(aField),
      );

      expect(
        bField.copyWith(
          extra: bField.extra.build().rebuild((_) => _['me'] = 'who').asMap(),
        ),
        isNot(bField),
      );
    });

    test('toJson', () {
      expect(aField.toJson(), aObject);
      expect(bField.toJson(), bObject);
    });

    test('toJson - extra', () {
      expect(jsonEncode(bField), jsonEncode(bObject));

      expect(
        bField.copyWith(extra: {}).toJson(),
        Map.from(bObject)..remove('extra'),
      );

      expect(
        jsonEncode(bField.copyWith(extra: {})),
        jsonEncode(Map.from(bObject)..remove('extra')),
      );
    });

    test('fromJson', () {
      expect(Field.fromJson(aObject), aField);
      expect(Field.fromJson(bObject), bField);
    });

    test('fromJson - extra', () {
      expect(Field.fromJson(bObject), bField);

      expect(
        Field.fromJson(Map.from(bObject)..['extra'] = {}),
        bField.copyWith(extra: {}),
      );
    });
  });
}
