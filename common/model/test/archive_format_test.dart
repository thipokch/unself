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

    const aApp = App(
      id: 'aApp',
      // created: now,
      // updated: now,
      name: 'name',
    );

    final bApp = App(
      id: 'bApp',
      // created: now,
      // updated: now,
      name: 'name',
      extra: extra,
    );

    const aAccount = Account(
      id: 'aAccount',
      // created: now,
      // updated: now,
      archiveId: '',
      name: 'name',
      emails: [],
      appId: 'aApp',
      isOwner: true,
    );

    final bAccount = Account(
      id: 'bAccount',
      // created: now,
      // updated: now,
      archiveId: '',
      name: 'name',
      emails: [],
      appId: 'bApp',
      isOwner: false,
      extra: extra,
    );

    final aArchiveSchema = ArchiveSchema(
      id: 'aMapping',
      created: now,
      updated: now,
      appId: aApp.id,
      version: Version(0, 0, 1),
      constraint: VersionConstraint.compatibleWith(Version(0, 0, 1)),
      // format: ArchiveFileFormat.zipJson,
      part: [],
    );

    final bArchiveSchema = ArchiveSchema(
      id: 'bMapping',
      created: now,
      updated: now,
      appId: bApp.id,
      version: Version(0, 0, 2),
      constraint: VersionConstraint.compatibleWith(Version(0, 0, 2)),
      // format: ArchiveFileFormat.zipJson,
      part: [],
      extra: extra,
    );

    final aObject = Map<String, dynamic>.unmodifiable({
      'id': 'aMapping',
      'created': nowString,
      'updated': nowString,
      'appId': 'aApp',
      'version': '0.0.1',
      'constraint': '^0.0.1',
      'part': [],
    });

    final bObject = Map<String, dynamic>.unmodifiable({
      'id': 'bMapping',
      'created': nowString,
      'updated': nowString,
      'appId': 'bApp',
      'version': '0.0.2',
      'constraint': '^0.0.2',
      'part': [],
      'extra': extra,
    });

    test('hashCode', () {
      expect(aArchiveSchema.hashCode, ArchiveSchema.fromJson(aObject).hashCode);
      expect(bArchiveSchema.hashCode, ArchiveSchema.fromJson(bObject).hashCode);

      expect(bArchiveSchema.hashCode, isNot(aArchiveSchema.hashCode));
      expect(ArchiveSchema.fromJson(bObject).hashCode,
          isNot(ArchiveSchema.fromJson(aObject).hashCode));
    });

    test('equals', () {
      expect(aArchiveSchema, ArchiveSchema.fromJson(aObject));
      expect(bArchiveSchema, ArchiveSchema.fromJson(bObject));
      expect(bArchiveSchema, isNot(aArchiveSchema));
      expect(ArchiveSchema.fromJson(bObject),
          isNot(ArchiveSchema.fromJson(aObject)));
    });

    test('copyWith', () {
      expect(aArchiveSchema, aArchiveSchema.copyWith());
      expect(bArchiveSchema, bArchiveSchema.copyWith());

      expect(aArchiveSchema.copyWith(id: 'aMapping'), aArchiveSchema);
      expect(aArchiveSchema.copyWith(id: 'AMapping'), isNot(aArchiveSchema));
    });

    test('copyWith - extra', () {
      expect(
        ArchiveSchema.fromJson(Map.from(bObject)..['extra'] = {}),
        isNot(bArchiveSchema),
      );

      expect(
        bArchiveSchema.copyWith(
          extra: bArchiveSchema.extra
              .build()
              .rebuild((_) => _['me'] = 'who')
              .asMap(),
        ),
        isNot(bArchiveSchema),
      );
    });

    // test('copyWith - deep equality', () {
    //   expect(aArchiveSchema.copyWith(app: App.fromJson(aObject['app'])),
    //       aArchiveSchema);
    //   expect(aArchiveSchema.copyWith.app(id: 'aApp'), aArchiveSchema);
    //   expect(aArchiveSchema.copyWith.app(id: 'AApp'), isNot(aArchiveSchema));
    // });

    test('toJson', () {
      expect(jsonEncode(aArchiveSchema), jsonEncode(aObject));
    });

    test('toJson - extra ', () {
      expect(jsonEncode(bArchiveSchema), jsonEncode(bObject));

      expect(
        bArchiveSchema.copyWith(extra: {}).toJson(),
        Map.from(bObject)..remove('extra'),
      );

      expect(
        jsonEncode(bArchiveSchema.copyWith(extra: {})),
        jsonEncode(Map.from(bObject)..remove('extra')),
      );
    });

    test('fromJson', () {
      expect(ArchiveSchema.fromJson(aObject), aArchiveSchema);
    });

    test('fromJson - extra', () {
      expect(ArchiveSchema.fromJson(bObject), bArchiveSchema);

      expect(
        ArchiveSchema.fromJson(Map.from(bObject)..['extra'] = {}),
        bArchiveSchema.copyWith(extra: {}),
      );
    });
  });
}
