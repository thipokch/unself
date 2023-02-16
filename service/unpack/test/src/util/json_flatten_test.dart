// ignore_for_file: avoid_print

import 'package:unself_unpack/src/util/json_flatten.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('ArchiveCollector', () {
    setUp(() {});
    test(
        'flattenValue',
        () => expect(
              flatten(<Map<String, dynamic>>[
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
              ], '', '.', -1),
              <Map<String, dynamic>>[
                {
                  'id': 1,
                  'name.first': 'Coleen',
                  'name.last': 'Volk',
                },
                {
                  'name.given': 'Mark',
                  'name.family': 'Regner',
                },
                {
                  'id': 2,
                  'name': 'Faye Raker',
                },
              ],
            ));

    test(
      'advanced',
      () => expect(
        flatten(<Map<String, dynamic>>[
          {
            'class': 'Year 1',
            'student count': 20,
            'room': 'Yellow',
            'info': {
              'teachers': {'math': 'Rick Scott', 'physics': 'Elon Mask'}
            },
            'students': [
              {
                'name': 'Tom',
                'sex': 'M',
                'grades': {'math': 66, 'physics': 77}
              },
              {
                'name': 'James',
                'sex': 'M',
                'grades': {'math': 80, 'physics': 78}
              },
            ]
          },
          {
            'class': 'Year 2',
            'student count': 25,
            'room': 'Blue',
            'info': {
              'teachers': {'math': 'Alan Turing', 'physics': 'Albert Einstein'}
            },
            'students': [
              {'name': 'Tony', 'sex': 'M'},
              {'name': 'Jacqueline', 'sex': 'F'},
            ]
          },
        ], '', '.', -1),
        <Map<String, dynamic>>[
          {
            'class': 'Year 1',
            'student count': 20,
            'room': 'Yellow',
            'info.teachers.math': 'Rick Scott',
            'info.teachers.physics': 'Elon Mask',
            'students': [
              {
                'name': 'Tom',
                'sex': 'M',
                'grades.math': 66,
                'grades.physics': 77
              },
              {
                'name': 'James',
                'sex': 'M',
                'grades.math': 80,
                'grades.physics': 78
              }
            ]
          },
          {
            'class': 'Year 2',
            'student count': 25,
            'room': 'Blue',
            'info.teachers.math': 'Alan Turing',
            'info.teachers.physics': 'Albert Einstein',
            'students': [
              {'name': 'Tony', 'sex': 'M'},
              {'name': 'Jacqueline', 'sex': 'F'}
            ]
          }
        ],
      ),
    );
  });
}
