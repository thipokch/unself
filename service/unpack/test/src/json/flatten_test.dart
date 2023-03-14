// ignore_for_file: avoid_print

import 'package:flutter_test/flutter_test.dart';
import 'package:unself_unpack/src/json/flatten.dart';

void main() {
  group('Json Flatten', () {
    setUp(() {});

    test(
        '* Map *  =>  List / Map',
        () => expect(
              flatten(<String, dynamic>{
                'name': 'name',
                'value': 'value',
              }),
              <Map<String, dynamic>>[
                {
                  'name': 'name',
                  'value': 'value',
                }
              ],
            ));
    test(
        '* Map * / Map  =>  List / Map',
        () => expect(
              flatten(<String, dynamic>{
                'name': 'name',
                'value': {'a': 'a', 'b': 'b'},
              }),
              <Map<String, dynamic>>[
                {
                  'name': 'name',
                  'value.a': 'a',
                  'value.b': 'b',
                }
              ],
            ));

    test(
        'Map / * Map * / Map  =>  List / Map',
        () => expect(
              flatten(
                <String, dynamic>{
                  'name': 'name',
                  'value': {
                    'a': {'1': '1', '2': '2'},
                    'b': {'3': '3', '4': '4'},
                  },
                },
                recordPath: ['value'],
                addMissingKeys: false,
              ),
              <Map<String, dynamic>>[
                {
                  'a.1': '1',
                  'a.2': '2',
                  'b.3': '3',
                  'b.4': '4',
                }
              ],
            ));

    test(
        '* List * / String  =>  List / Map',
        () => expect(
              flatten(<String>[
                'a',
                'b',
                'c',
              ]),
              <Map<String, dynamic>>[
                {'value': 'a'},
                {'value': 'b'},
                {'value': 'c'}
              ],
            ));

    test(
        'Map / * List * / String  =>  List / Map',
        () => expect(
              flatten(
                <String, dynamic>{
                  'name': ['a', 'b', 'c'],
                },
                recordPath: ['name', '*'],
              ),
              <Map<String, dynamic>>[
                {'value': 'a'},
                {'value': 'b'},
                {'value': 'c'}
              ],
            ));

    test(
        'Map / * List * / Map  =>  List / Map',
        () => expect(
              flatten(
                <String, dynamic>{
                  'entrypoint': [
                    {'name': 'name'},
                    {'value': 'value'},
                  ],
                },
                recordPath: ['entrypoint', '*'],
              ),
              <Map<String, dynamic>>[
                {'name': 'name', 'value': null},
                {'name': null, 'value': 'value'},
              ],
            ));

    test(
        'Map / Map / * List * / Map  =>  List / Map',
        () => expect(
              flatten(
                <String, dynamic>{
                  'entrypoint': {
                    'a': [
                      {'name': 'name'},
                      {'value': 'value'},
                    ],
                    'b': [
                      {'name': 'name', 'value': null},
                      {'name': null, 'value': 'value'},
                    ],
                  },
                },
                recordPath: ['entrypoint', 'a', '*'],
                addMissingKeys: false,
              ),
              <Map<String, dynamic>>[
                {'name': 'name'},
                {'value': 'value'},
              ],
            ));

    test(
        'Map / * List * / Map / List / Map / Map  =>  List / Map / List / Map',
        () => expect(
              flatten(
                <String, dynamic>{
                  'entrypoint': [
                    {
                      'name': 'name',
                      'entries': [
                        {
                          'data': {'name': 'name'}
                        },
                        {
                          'data': {'value': 'value'}
                        }
                      ],
                    },
                  ],
                },
                recordPath: ['entrypoint', '*'],
              ),
              <Map<String, dynamic>>[
                {
                  'name': 'name',
                  'entries': [
                    {'data.name': 'name'},
                    {'data.value': 'value'}
                  ],
                },
              ],
            ));

    test(
        'Map / List / Map / * List * / Map / Map  =>  List / Map',
        () => expect(
              flatten(
                <String, dynamic>{
                  'entrypoint': [
                    {
                      'include': {'friends': true},
                      'entries': [
                        {
                          'data': {'name': 'name'}
                        },
                        {
                          'data': {'value': 'value'}
                        }
                      ],
                    },
                  ],
                },
                recordPath: ['entrypoint', '*', 'entries', '*'],
              ),
              <Map<String, dynamic>>[
                {'data.name': 'name', 'data.value': null},
                {'data.name': null, 'data.value': 'value'},
              ],
            ));
    test(
        'includePath :: Map / * Map *  =>  List / Map',
        () => expect(
              flatten(
                <String, dynamic>{
                  'value': {'a': 'a', 'b': 'b'},
                  'zebra': 'zebra',
                },
                recordPath: ['value'],
                includePath: [
                  ['zebra'],
                ],
              ),
              <Map<String, dynamic>>[
                {
                  'zebra': 'zebra',
                  'a': 'a',
                  'b': 'b',
                }
              ],
            ));
    test(
        'includePath :: List / Map / * Map *  =>  List / Map',
        () => expect(
              flatten(
                [
                  <String, dynamic>{
                    'value': {'a': 'a', 'b': 'b'},
                    'zebra': 'zebra',
                  }
                ],
                recordPath: ['*', 'value'],
                includePath: [
                  ['*', 'zebra'],
                ],
              ),
              <Map<String, dynamic>>[
                {
                  'zebra': 'zebra',
                  'a': 'a',
                  'b': 'b',
                }
              ],
            ));

    test(
        'includePath :: Map / List / Map / * List * / Map / Map  =>  List / Map',
        () => expect(
              flatten(
                <String, dynamic>{
                  'entrypoint': [
                    {
                      'include': {'friends': true},
                      'entries': [
                        {
                          'data': {'name': 'name'}
                        },
                        {
                          'data': {'value': 'value'}
                        }
                      ],
                    },
                  ],
                },
                recordPath: ['entrypoint', '*', 'entries', '*'],
                includePath: [
                  ['entrypoint', '*', 'include'],
                ],
              ),
              <Map<String, dynamic>>[
                {
                  'include.friends': true,
                  'data.name': 'name',
                  'data.value': null
                },
                {
                  'include.friends': true,
                  'data.name': null,
                  'data.value': 'value'
                },
              ],
            ));

    test('addMissingKeys: true', () {
      expect(
        flatten(
          <Map<String, dynamic>>[
            {
              'id': 1,
              'name': {'first': 'Coleen', 'last': 'Volk'}
            },
            {
              'name': {'given': 'Mark', 'family': 'Regner'}
            },
            {
              'id': 2,
              'name': 'Faye Raker',
            },
          ],
          separator: '.',
        ),
        <Map<String, dynamic>>[
          {
            'id': 1,
            'name': null,
            'name.first': 'Coleen',
            'name.last': 'Volk',
            'name.given': null,
            'name.family': null,
          },
          {
            'id': null,
            'name': null,
            'name.first': null,
            'name.last': null,
            'name.given': 'Mark',
            'name.family': 'Regner',
          },
          {
            'id': 2,
            'name': 'Faye Raker',
            'name.first': null,
            'name.last': null,
            'name.given': null,
            'name.family': null,
          },
        ],
      );
    });

    test('includePath: multiple', () {
      expect(
        flatten(
          <Map<String, dynamic>>[
            {
              'state': 'Florida',
              'shortname': 'FL',
              'info': {'governor': 'Rick Scott'},
              'counties': [
                {'name': 'Dade', 'population': 12345},
                {'name': 'Broward', 'population': 40000},
                {'name': 'Palm Beach', 'population': 60000},
              ],
            },
            {
              'state': 'Ohio',
              'shortname': 'OH',
              'info': {'governor': 'John Kasich'},
              'counties': [
                {'name': 'Summit', 'population': 1234},
                {'name': 'Cuyahoga', 'population': 1337},
              ],
              'extra': 'diva',
            },
          ],
          recordPath: ['*', 'counties', '*'],
          includePath: [
            ['*', 'shortname'],
            ['*', 'info', 'governor'],
            ['*', 'extra'],
          ],
          separator: '/',
        ),
        <Map<String, dynamic>>[
          {
            'shortname': 'FL',
            'info/governor': 'Rick Scott',
            'name': 'Dade',
            'population': 12345,
            'extra': null,
          },
          {
            'shortname': 'FL',
            'info/governor': 'Rick Scott',
            'name': 'Broward',
            'population': 40000,
            'extra': null,
          },
          {
            'shortname': 'FL',
            'info/governor': 'Rick Scott',
            'name': 'Palm Beach',
            'population': 60000,
            'extra': null,
          },
          {
            'shortname': 'OH',
            'info/governor': 'John Kasich',
            'name': 'Summit',
            'population': 1234,
            'extra': 'diva',
          },
          {
            'shortname': 'OH',
            'info/governor': 'John Kasich',
            'name': 'Cuyahoga',
            'population': 1337,
            'extra': 'diva',
          },
        ],
      );
    });

    test('separator: backslash ', () {
      expect(
        flatten(
          <String, dynamic>{
            'counties': [
              {'name': 'Dade', 'population': 12345},
              {'name': 'Broward', 'population': 40000},
              {'name': 'Palm Beach', 'population': 60000},
            ],
          },
          recordPath: ['counties'],
          separator: '/',
        ),
        <Map<String, dynamic>>[
          {'name': 'Dade', 'population': 12345},
          {'name': 'Broward', 'population': 40000},
          {'name': 'Palm Beach', 'population': 60000},
        ],
      );
    });
  });
}
