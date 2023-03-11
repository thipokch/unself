// ignore_for_file: avoid_print

import 'package:flutter_test/flutter_test.dart';
import 'package:unself_unpack/src/json/normalize.dart';

void main() {
  group('ArchiveCollector', () {
    setUp(() {});

    test('1. null for undefined value', () {
      expect(
        normalize(
          <Map<String, dynamic>>[
            {
              "id": 1,
              "name": {"first": "Coleen", "last": "Volk"}
            },
            {
              "name": {"given": "Mark", "family": "Regner"}
            },
            {
              "id": 2,
              "name": "Faye Raker",
            },
          ],
          joinSeparator: '.',
        ),
        <Map<String, dynamic>>[
          {
            "id": 1,
            "name": null,
            "name.first": "Coleen",
            "name.last": "Volk",
            "name.given": null,
            "name.family": null,
          },
          {
            "id": null,
            "name": null,
            "name.first": null,
            "name.last": null,
            "name.given": "Mark",
            "name.family": "Regner",
          },
          {
            "id": 2,
            "name": "Faye Raker",
            "name.first": null,
            "name.last": null,
            "name.given": null,
            "name.family": null,
          },
        ],
      );
    });

    test('2.', () {
      expect(
        normalize(
          <Map<String, dynamic>>[
            {
              "state": "Florida",
              "shortname": "FL",
              "info": {"governor": "Rick Scott"},
              "counties": [
                {"name": "Dade", "population": 12345},
                {"name": "Broward", "population": 40000},
                {"name": "Palm Beach", "population": 60000},
              ],
            },
            {
              "state": "Ohio",
              "shortname": "OH",
              "info": {"governor": "John Kasich"},
              "counties": [
                {"name": "Summit", "population": 1234},
                {"name": "Cuyahoga", "population": 1337},
              ],
              "extra": "diva",
            },
          ],
          entryPath: "*/counties",
          includePath: [
            "*/shortname",
            "*/info/governor",
            "*/extra",
          ],
          joinSeparator: '/',
        ),
        <Map<String, dynamic>>[
          {
            "shortname": "FL",
            "info/governor": "Rick Scott",
            "name": "Dade",
            "population": 12345,
            "extra": null,
          },
          {
            "shortname": "FL",
            "info/governor": "Rick Scott",
            "name": "Broward",
            "population": 40000,
            "extra": null,
          },
          {
            "shortname": "FL",
            "info/governor": "Rick Scott",
            "name": "Palm Beach",
            "population": 60000,
            "extra": null,
          },
          {
            "shortname": "OH",
            "info/governor": "John Kasich",
            "name": "Summit",
            "population": 1234,
            "extra": "diva",
          },
          {
            "shortname": "OH",
            "info/governor": "John Kasich",
            "name": "Cuyahoga",
            "population": 1337,
            "extra": "diva",
          },
        ],
      );
    });

    test('3. ', () {
      expect(
        normalize(
          <String, dynamic>{
            "counties": [
              {"name": "Dade", "population": 12345},
              {"name": "Broward", "population": 40000},
              {"name": "Palm Beach", "population": 60000},
            ],
          },
          entryPath: "counties",
          joinSeparator: '/',
        ),
        <Map<String, dynamic>>[
          {"name": "Dade", "population": 12345},
          {"name": "Broward", "population": 40000},
          {"name": "Palm Beach", "population": 60000},
        ],
      );
    });

    test('4. ', () {
      expect(
        normalize(
          <String, dynamic>{
            "nested": [
              {
                "state": "Florida",
                "shortname": "FL",
                "info": {"governor": "Rick Scott"},
                "counties": [
                  {"name": "Dade", "population": 12345},
                  {"name": "Broward", "population": 40000},
                  {"name": "Palm Beach", "population": 60000},
                ],
              },
              {
                "state": "Ohio",
                "shortname": "OH",
                "info": {"governor": "John Kasich"},
                "counties": [
                  {"name": "Summit", "population": 1234},
                  {"name": "Cuyahoga", "population": 1337},
                ],
                "extra": "diva",
              },
            ],
          },
          entryPath: "nested/*/counties",
          includePath: [
            "nested/*/shortname",
            "nested/*/info/governor",
            "nested/*/extra",
          ],
          joinSeparator: '/',
        ),
        <Map<String, dynamic>>[
          {
            "shortname": "FL",
            "info/governor": "Rick Scott",
            "name": "Dade",
            "population": 12345,
            "extra": null,
          },
          {
            "shortname": "FL",
            "info/governor": "Rick Scott",
            "name": "Broward",
            "population": 40000,
            "extra": null,
          },
          {
            "shortname": "FL",
            "info/governor": "Rick Scott",
            "name": "Palm Beach",
            "population": 60000,
            "extra": null,
          },
          {
            "shortname": "OH",
            "info/governor": "John Kasich",
            "name": "Summit",
            "population": 1234,
            "extra": "diva",
          },
          {
            "shortname": "OH",
            "info/governor": "John Kasich",
            "name": "Cuyahoga",
            "population": 1337,
            "extra": "diva",
          },
        ],
      );
    });

    test('5. ', () {
      expect(
        normalize(
          {
            "profile_v2": {
              "first": "Coleen",
              "last": "Volk",
              "a": {"b": "c"}
            },
          },
          includePath: ['profile_v2'],
        ),
        <Map<String, dynamic>>[
          {
            "profile_v2/first": "Coleen",
            "profile_v2/last": "Volk",
            "profile_v2/a/b": "c",
          },
        ],
      );
    });
  });
}
