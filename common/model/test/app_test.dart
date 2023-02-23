// ignore_for_file: unused_local_variable

import 'dart:convert';

import 'package:built_collection/built_collection.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:unself_model/unself_model.dart';
import 'util.dart';

void main() {
  group('test App', () {
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

    final aObject = Map<String, dynamic>.unmodifiable({
      'id': 'aApp',
      'created': nowString,
      'updated': nowString,
      'name': 'name',
    });

    final bObject = Map<String, dynamic>.unmodifiable({
      'id': 'bApp',
      'created': nowString,
      'updated': nowString,
      'name': 'name',
      'extra': extra,
    });

    test('hashCode', () {
      expect(bApp.hashCode, App.fromJson(bObject).hashCode);
      expect(bApp.hashCode, isNot(aApp.hashCode));
      expect(App.fromJson(bObject).hashCode,
          isNot(App.fromJson(aObject).hashCode));
    });

    test('equals', () {
      expect(aApp, App.fromJson(aObject));
      expect(bApp, App.fromJson(bObject));
      expect(bApp, isNot(aApp));
      expect(App.fromJson(bObject), isNot(App.fromJson(aObject)));
    });

    test('copyWith', () {
      expect(aApp, aApp.copyWith());
      expect(bApp, bApp.copyWith());

      expect(aApp.copyWith(id: 'aApp'), aApp);
      expect(aApp.copyWith(id: 'AApp'), isNot(aApp));
    });

    test('copyWith - extra', () {
      expect(
        aApp.copyWith(extra: Map.from(aObject)..['extra'] = {}),
        isNot(aApp),
      );

      expect(
        bApp.copyWith(
          extra: bApp.extra.build().rebuild((_) => _['me'] = 'who').asMap(),
        ),
        isNot(bApp),
      );
    });

    test('toJson', () {
      expect(aApp.toJson(), aObject);
      expect(bApp.toJson(), bObject);
    });

    test('toJson - extra', () {
      expect(jsonEncode(bApp), jsonEncode(bObject));

      expect(
        bApp.copyWith(extra: {}).toJson(),
        Map.from(bObject)..remove('extra'),
      );

      expect(
        jsonEncode(bApp.copyWith(extra: {})),
        jsonEncode(Map.from(bObject)..remove('extra')),
      );
    });

    test('fromJson', () {
      expect(App.fromJson(aObject), aApp);
      expect(App.fromJson(bObject), bApp);
    });

    test('fromJson - extra', () {
      expect(App.fromJson(bObject), bApp);

      expect(
        App.fromJson(Map.from(bObject)..['extra'] = {}),
        bApp.copyWith(extra: {}),
      );
    });
  });
}
