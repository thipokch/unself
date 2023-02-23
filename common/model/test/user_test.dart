// ignore_for_file: unused_local_variable

import 'dart:convert';

import 'package:built_collection/built_collection.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:unself_model/unself_model.dart';
import 'util.dart';

void main() {
  group('test User', () {
    final now = DateTime.now();
    final nowString = now.toIso8601String();

    final later = now.add(const Duration(minutes: 1));
    final laterString = later.toIso8601String();

    const aUser = Settings(
      themeMode: ThemeMode.light,
    );

    final bUser = Settings(
      themeMode: ThemeMode.dark,
      extra: extra,
    );

    final aObject = {
      'themeMode': 'light',
    };
    final bObject = {
      'themeMode': 'dark',
      'extra': extra,
    };

    test('hashCode', () {
      expect(bUser.hashCode, Settings.fromJson(bObject).hashCode);
      expect(bUser.hashCode, isNot(aUser.hashCode));
      expect(Settings.fromJson(bObject).hashCode,
          isNot(Settings.fromJson(aObject).hashCode));
    });

    test('equals', () {
      expect(aUser, Settings.fromJson(aObject));
      expect(bUser, Settings.fromJson(bObject));
      expect(bUser, isNot(aUser));
      expect(Settings.fromJson(bObject), isNot(Settings.fromJson(aObject)));
    });

    test('copyWith', () {
      expect(aUser, aUser.copyWith());
      expect(bUser, bUser.copyWith());

      expect(
          aUser.copyWith(themeMode: ThemeMode.dark), bUser.copyWith(extra: {}));
      expect(aUser.copyWith(themeMode: ThemeMode.light), aUser);
    });

    test('copyWith - extra', () {
      expect(
        aUser.copyWith(extra: Map.from(aObject)..['extra'] = {}),
        isNot(aUser),
      );

      expect(
        bUser.copyWith(
          extra: bUser.extra.build().rebuild((_) => _['me'] = 'who').asMap(),
        ),
        isNot(bUser),
      );
    });

    test('toJson', () {
      expect(aUser.toJson(), aObject);
      expect(bUser.toJson(), bObject);
    });

    test('toJson - extra', () {
      expect(jsonEncode(bUser), jsonEncode(bObject));

      expect(
        bUser.copyWith(extra: {}).toJson(),
        Map.from(bObject)..remove('extra'),
      );

      expect(
        jsonEncode(bUser.copyWith(extra: {})),
        jsonEncode(Map.from(bObject)..remove('extra')),
      );
    });

    test('fromJson', () {
      expect(Settings.fromJson(aObject), aUser);
      expect(Settings.fromJson(bObject), bUser);
    });

    test('fromJson - extra', () {
      expect(Settings.fromJson(bObject), bUser);

      expect(
        Settings.fromJson(Map.from(bObject)..['extra'] = {}),
        bUser.copyWith(extra: {}),
      );
    });
  });
}
