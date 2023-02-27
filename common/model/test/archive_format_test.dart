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
      archiveId: '',
      name: 'name',
      emails: [],
      appId: 'aApp',
      isOwner: true,
    );

    final bAccount = Account(
      id: 'bAccount',
      created: now,
      updated: now,
      archiveId: '',
      name: 'name',
      emails: [],
      appId: 'bApp',
      isOwner: false,
      extra: extra,
    );

    final aArchiveFormat = ArchiveFormat(
      id: 'aMapping',
      created: now,
      updated: now,
      appId: aApp.id,
      version: Version(0, 0, 1),
      constraint: VersionConstraint.compatibleWith(Version(0, 0, 1)),
      format: ArchiveFileFormat.zipJson,
      mappings: [],
    );

    final bArchiveFormat = ArchiveFormat(
      id: 'bMapping',
      created: now,
      updated: now,
      appId: bApp.id,
      version: Version(0, 0, 2),
      constraint: VersionConstraint.compatibleWith(Version(0, 0, 2)),
      format: ArchiveFileFormat.zipJson,
      mappings: [],
      extra: extra,
    );

    final aObject = Map<String, dynamic>.unmodifiable({
      'id': 'aMapping',
      'created': nowString,
      'updated': nowString,
      'appId': 'aApp',
      'version': '0.0.1',
      'constraint': '^0.0.1',
      'format': 'zipJson',
      'mappings': [],
    });

    final bObject = Map<String, dynamic>.unmodifiable({
      'id': 'bMapping',
      'created': nowString,
      'updated': nowString,
      'appId': 'bApp',
      'version': '0.0.2',
      'constraint': '^0.0.2',
      'format': 'zipJson',
      'mappings': [],
      'extra': extra,
    });

    test('hashCode', () {
      expect(aArchiveFormat.hashCode, ArchiveFormat.fromJson(aObject).hashCode);
      expect(bArchiveFormat.hashCode, ArchiveFormat.fromJson(bObject).hashCode);

      expect(bArchiveFormat.hashCode, isNot(aArchiveFormat.hashCode));
      expect(ArchiveFormat.fromJson(bObject).hashCode,
          isNot(ArchiveFormat.fromJson(aObject).hashCode));
    });

    test('equals', () {
      expect(aArchiveFormat, ArchiveFormat.fromJson(aObject));
      expect(bArchiveFormat, ArchiveFormat.fromJson(bObject));
      expect(bArchiveFormat, isNot(aArchiveFormat));
      expect(ArchiveFormat.fromJson(bObject),
          isNot(ArchiveFormat.fromJson(aObject)));
    });

    test('copyWith', () {
      expect(aArchiveFormat, aArchiveFormat.copyWith());
      expect(bArchiveFormat, bArchiveFormat.copyWith());

      expect(aArchiveFormat.copyWith(id: 'aMapping'), aArchiveFormat);
      expect(aArchiveFormat.copyWith(id: 'AMapping'), isNot(aArchiveFormat));
    });

    test('copyWith - extra', () {
      expect(
        ArchiveFormat.fromJson(Map.from(bObject)..['extra'] = {}),
        isNot(bArchiveFormat),
      );

      expect(
        bArchiveFormat.copyWith(
          extra: bArchiveFormat.extra
              .build()
              .rebuild((_) => _['me'] = 'who')
              .asMap(),
        ),
        isNot(bArchiveFormat),
      );
    });

    // test('copyWith - deep equality', () {
    //   expect(aArchiveFormat.copyWith(app: App.fromJson(aObject['app'])),
    //       aArchiveFormat);
    //   expect(aArchiveFormat.copyWith.app(id: 'aApp'), aArchiveFormat);
    //   expect(aArchiveFormat.copyWith.app(id: 'AApp'), isNot(aArchiveFormat));
    // });

    test('toJson', () {
      expect(jsonEncode(aArchiveFormat), jsonEncode(aObject));
    });

    test('toJson - extra ', () {
      expect(jsonEncode(bArchiveFormat), jsonEncode(bObject));

      expect(
        bArchiveFormat.copyWith(extra: {}).toJson(),
        Map.from(bObject)..remove('extra'),
      );

      expect(
        jsonEncode(bArchiveFormat.copyWith(extra: {})),
        jsonEncode(Map.from(bObject)..remove('extra')),
      );
    });

    test('fromJson', () {
      expect(ArchiveFormat.fromJson(aObject), aArchiveFormat);
    });

    test('fromJson - extra', () {
      expect(ArchiveFormat.fromJson(bObject), bArchiveFormat);

      expect(
        ArchiveFormat.fromJson(Map.from(bObject)..['extra'] = {}),
        bArchiveFormat.copyWith(extra: {}),
      );
    });
  });
}
