// ignore_for_file: unused_local_variable

import 'dart:convert';

import 'package:built_collection/built_collection.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:unself_model/unself_model.dart';
import 'util.dart';

void main() {
  group('test Archive', () {
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
      email: 'email',
      app: aApp,
    );

    final bAccount = Account(
      id: 'bAccount',
      created: now,
      updated: now,
      archiveId: '',
      name: 'name',
      email: 'email',
      app: bApp,
      extra: extra,
    );

    final aMapping = ArchiveFormat(
      id: 'aMapping',
      created: now,
      updated: now,
      app: aApp,
      version: Version(0, 0, 1),
      constraint: VersionConstraint.compatibleWith(Version(0, 0, 1)),
      format: ArchiveFileFormat.zipJson,
      mappings: [],
    );

    final bMapping = ArchiveFormat(
      id: 'bMapping',
      created: now,
      updated: now,
      app: bApp,
      extra: extra,
      version: Version(0, 0, 2),
      constraint: VersionConstraint.compatibleWith(Version(0, 0, 2)),
      format: ArchiveFileFormat.zipJson,
      mappings: [],
    );

    final aArchive = Archive(
      id: 'aArchive',
      created: now,
      updated: now,
      name: 'name',
      account: aAccount,
      formatId: '',
    );

    final bArchive = Archive(
      id: 'bArchive',
      created: now,
      updated: now,
      name: 'name',
      account: bAccount,
      formatId: '',
      extra: extra,
    );

    final aObject = Map<String, dynamic>.unmodifiable({
      'id': 'aArchive',
      'created': nowString,
      'updated': nowString,
      'name': 'name',
      'account': {
        'id': 'aAccount',
        'created': nowString,
        'updated': nowString,
        'archiveId': '',
        'name': 'name',
        'email': 'email',
        'app': {
          'id': 'aApp',
          'created': nowString,
          'updated': nowString,
          'name': 'name',
        }
      },
      'formatId': '',
    });

    final bObject = Map<String, dynamic>.unmodifiable({
      'id': 'bArchive',
      'created': nowString,
      'updated': nowString,
      'name': 'name',
      'account': {
        'id': 'bAccount',
        'created': nowString,
        'updated': nowString,
        'archiveId': '',
        'name': 'name',
        'email': 'email',
        'app': {
          'id': 'bApp',
          'created': nowString,
          'updated': nowString,
          'name': 'name',
          'extra': extra,
        },
        'extra': extra,
      },
      'formatId': '',
      'extra': extra,
    });

    setUp(() {});

    test('hashCode', () {
      expect(aArchive.hashCode, Archive.fromJson(aObject).hashCode);
      expect(bArchive.hashCode, Archive.fromJson(bObject).hashCode);
      expect(bArchive.hashCode, isNot(aArchive.hashCode));
      expect(Archive.fromJson(bObject).hashCode,
          isNot(Archive.fromJson(aObject).hashCode));
    });

    test('equals', () {
      expect(aArchive, Archive.fromJson(aObject));
      expect(bArchive, Archive.fromJson(bObject));
      expect(bArchive, isNot(aArchive));
      expect(Archive.fromJson(bObject), isNot(Archive.fromJson(aObject)));
    });

    test('copyWith', () {
      expect(aArchive, aArchive.copyWith());
      expect(bArchive, bArchive.copyWith());

      expect(aArchive.copyWith(id: 'aArchive'), aArchive);
      expect(aArchive.copyWith(id: 'AArchive'), isNot(aArchive));
    });

    test('copyWith - extra', () {
      expect(
        Archive.fromJson(Map.from(bObject)..['extra'] = {}),
        isNot(bArchive),
      );

      expect(
        bArchive.copyWith(
          extra: bArchive.extra.build().rebuild((_) => _['me'] = 'who').asMap(),
        ),
        isNot(bArchive),
      );
    });

    test('copyWith - deep equality', () {
      expect(
        aArchive.copyWith(
          account: aArchive.account.copyWith(
            app: aArchive.account.app.copyWith(),
          ),
        ),
        aArchive,
      );

      expect(
        aArchive.copyWith(
          account: aArchive.account.copyWith(
            app: aArchive.account.app.copyWith(name: 'new'),
          ),
        ),
        isNot(aArchive),
      );

      expect(
        aArchive.copyWith.account.app(
          name: aObject['account']['app']['name'],
        ),
        aArchive,
      );
    });

    test('toJson', () {
      expect(aArchive.toJson(), aObject);
    });

    test('toJson - extra', () {
      expect(jsonEncode(bArchive), jsonEncode(bObject));

      expect(
        bArchive.copyWith(extra: {}).toJson(),
        Map.from(bObject)..remove('extra'),
      );

      expect(
        jsonEncode(bArchive.copyWith(extra: {})),
        jsonEncode(Map.from(bObject)..remove('extra')),
      );
    });

    test('fromJson', () {
      expect(Archive.fromJson(aObject), aArchive);
      expect(Archive.fromJson(bObject), bArchive);
    });

    test('fromJson - extra', () {
      expect(Archive.fromJson(bObject), bArchive);

      expect(
        Archive.fromJson(Map.from(bObject)..remove('extra')),
        bArchive.copyWith(extra: {}),
      );
    });
  });
}
