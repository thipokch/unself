// ignore_for_file: avoid_print

import 'package:flutter_test/flutter_test.dart';
import 'package:unself_unpack/src/json/flatten.dart';

void main() {
  group('flatten', () {
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
              flatten(<String, dynamic>{
                'name': 'name',
                'value': {
                  'a': {'1': '1', '2': '2'},
                  'b': {'3': '3', '4': '4'},
                },
              }, recordPath: [
                'value'
              ], addMissingKeys: false),
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
  });
}
