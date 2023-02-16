// ignore_for_file: unused_local_variable

import 'dart:convert';

import 'package:built_collection/built_collection.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:unself_model/unself_model.dart';
import 'util.dart';

// Test the Mapping class

void main() {
  group('test Mapping', () {
    final now = DateTime.now();
    final nowString = now.toIso8601String();

    final later = now.add(const Duration(minutes: 1));
    final laterString = later.toIso8601String();

    final aApp = App(
      id: 'aApp',
      created: now,
      updated: now,
      name: 'name',
    );

    final bApp = App(
      id: 'bApp',
      created: now,
      updated: now,
      name: 'name',
      extra: extra,
    );

    final aAccount = Account(
      id: 'aAccount',
      created: now,
      updated: now,
      name: 'name',
      email: 'email',
      app: aApp,
    );

    final bAccount = Account(
      id: 'bAccount',
      created: now,
      updated: now,
      name: 'name',
      email: 'email',
      app: bApp,
      extra: extra,
    );

    final aMapping = Mapping(
      id: 'aMapping',
      created: now,
      updated: now,
      app: aApp,
      version: Version(0, 0, 1),
      constraint: VersionConstraint.compatibleWith(Version(0, 0, 1)),
      format: MappingFormat.zipJson,
      entries: [],
    );

    final bMapping = Mapping(
      id: 'bMapping',
      created: now,
      updated: now,
      app: bApp,
      version: Version(0, 0, 2),
      constraint: VersionConstraint.compatibleWith(Version(0, 0, 2)),
      format: MappingFormat.zipJson,
      entries: [],
      extra: extra,
    );

    final aObject = Map<String, dynamic>.unmodifiable({
      'id': 'aMapping',
      'created': nowString,
      'updated': nowString,
      'app': {
        'id': 'aApp',
        'created': nowString,
        'updated': nowString,
        'name': 'name',
      },
      'version': '0.0.1',
      'constraint': '^0.0.1',
      'format': 'zipJson',
      'entries': [],
    });

    final bObject = Map<String, dynamic>.unmodifiable({
      'id': 'bMapping',
      'created': nowString,
      'updated': nowString,
      'app': {
        'id': 'bApp',
        'created': nowString,
        'updated': nowString,
        'name': 'name',
        'extra': extra,
      },
      'version': '0.0.2',
      'constraint': '^0.0.2',
      'format': 'zipJson',
      'entries': [],
      'extra': extra,
    });

    test('hashCode', () {
      expect(aMapping.hashCode, Mapping.fromJson(aObject).hashCode);
      expect(bMapping.hashCode, Mapping.fromJson(bObject).hashCode);

      expect(bMapping.hashCode, isNot(aMapping.hashCode));
      expect(Mapping.fromJson(bObject).hashCode,
          isNot(Mapping.fromJson(aObject).hashCode));
    });

    test('equals', () {
      expect(aMapping, Mapping.fromJson(aObject));
      expect(bMapping, Mapping.fromJson(bObject));
      expect(bMapping, isNot(aMapping));
      expect(Mapping.fromJson(bObject), isNot(Mapping.fromJson(aObject)));
    });

    test('copyWith', () {
      expect(aMapping, aMapping.copyWith());
      expect(bMapping, bMapping.copyWith());

      expect(aMapping.copyWith(id: 'aMapping'), aMapping);
      expect(aMapping.copyWith(id: 'AMapping'), isNot(aMapping));
    });

    test('copyWith - extra', () {
      expect(
        Mapping.fromJson(Map.from(bObject)..['extra'] = {}),
        isNot(bMapping),
      );

      expect(
        bMapping.copyWith(
          extra: bMapping.extra.build().rebuild((_) => _['me'] = 'who').asMap(),
        ),
        isNot(bMapping),
      );
    });

    test('copyWith - deep equality', () {
      expect(aMapping.copyWith(app: App.fromJson(aObject['app'])), aMapping);
      expect(aMapping.copyWith.app(id: 'aApp'), aMapping);
      expect(aMapping.copyWith.app(id: 'AApp'), isNot(aMapping));
    });

    test('toJson', () {
      expect(jsonEncode(aMapping), jsonEncode(aObject));
    });

    test('toJson - extra ', () {
      expect(jsonEncode(bMapping), jsonEncode(bObject));

      expect(
        bMapping.copyWith(extra: {}).toJson(),
        Map.from(bObject)..remove('extra'),
      );

      expect(
        jsonEncode(bMapping.copyWith(extra: {})),
        jsonEncode(Map.from(bObject)..remove('extra')),
      );
    });

    test('fromJson', () {
      expect(Mapping.fromJson(aObject), aMapping);
    });

    test('fromJson - extra', () {
      expect(Mapping.fromJson(bObject), bMapping);

      expect(
        Mapping.fromJson(Map.from(bObject)..['extra'] = {}),
        bMapping.copyWith(extra: {}),
      );
    });
  });
}
