// ignore_for_file: unused_local_variable

import 'dart:convert';

import 'package:built_collection/built_collection.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:unself_model/unself_model.dart';
import 'util.dart';

void main() {
  group('test Account', () {
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

    final aObject = Map<String, dynamic>.unmodifiable({
      'id': 'aAccount',
      // 'created': nowString,
      // 'updated': nowString,
      'archiveId': '',
      'name': 'name',
      'appId': 'aApp',
      'isOwner': true,
      'emails': [],
    });

    final bObject = Map<String, dynamic>.unmodifiable({
      'id': 'bAccount',
      // 'created': nowString,
      // 'updated': nowString,
      'archiveId': '',
      'name': 'name',
      'appId': 'bApp',
      'isOwner': false,
      'emails': [],
      'extra': {
        'string': 'string',
        'int': 1,
        'double': 1.0,
        'bool': true,
        'list': [1, 2, 3],
        'map': {'a': 1, 'b': 2, 'c': 3}
      }
    });

    setUp(() {});

    test('hashCode', () {
      expect(aAccount.hashCode, Account.fromJson(aObject).hashCode);
      expect(bAccount.hashCode, Account.fromJson(bObject).hashCode);
      expect(bAccount.hashCode, isNot(aAccount.hashCode));
      expect(Account.fromJson(bObject).hashCode,
          isNot(Account.fromJson(aObject).hashCode));
    });

    test('equals', () {
      expect(aAccount, Account.fromJson(aObject));
      expect(bAccount, Account.fromJson(bObject));
      expect(bAccount, isNot(aAccount));
      expect(Account.fromJson(bObject), isNot(Account.fromJson(aObject)));
    });

    test('copyWith', () {
      expect(aAccount, aAccount.copyWith());
      expect(bAccount, bAccount.copyWith());

      expect(aAccount.copyWith(id: 'aAccount'), aAccount);
      expect(aAccount.copyWith(id: 'AAccount'), isNot(aAccount));
    });

    test('copyWith - extra', () {
      expect(
        Account.fromJson(Map.from(bObject)..['extra'] = {}),
        isNot(bAccount),
      );

      expect(
        bAccount.copyWith(
          extra: bAccount.extra.build().rebuild((_) => _['me'] = 'who').asMap(),
        ),
        isNot(bAccount),
      );
    });

    // test('copyWith - deep equality', () {
    //   expect(aAccount.copyWith(appId: App.fromJson(aObject['app'])), aAccount);
    //   expect(aAccount.copyWith.app(id: 'aApp'), aAccount);
    //   expect(aAccount.copyWith.app(id: 'AApp'), isNot(aAccount));
    // });

    test('toJson', () {
      expect(jsonEncode(aAccount), jsonEncode(aObject));
    });

    test('toJson - extra ', () {
      expect(jsonEncode(bAccount), jsonEncode(bObject));

      expect(
        bAccount.copyWith(extra: {}).toJson(),
        Map.from(bObject)..remove('extra'),
      );

      expect(
        jsonEncode(bAccount.copyWith(extra: {})),
        jsonEncode(Map.from(bObject)..remove('extra')),
      );
    });

    test('fromJson', () {
      expect(Account.fromJson(aObject), aAccount);
    });

    test('fromJson - extra', () {
      expect(Account.fromJson(bObject), bAccount);

      expect(
        Account.fromJson(Map.from(bObject)..['extra'] = {}),
        bAccount.copyWith(extra: {}),
      );
    });
  });
}
