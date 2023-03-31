import 'package:flutter_test/flutter_test.dart';
import 'package:unself_model/unself_model.dart';
import 'package:unself_unpack/unself_unpack.dart';

void main() {
  group('Json Normalize', () {
    setUp(() {});

    test(
        'Ref / RefList',
        () => expectNormalize(
              schema: const [
                Entity('users'),
                Entity(
                  'comments',
                  definition: {
                    'commenter': Ref('users'),
                  },
                ),
                Entity(
                  'articles',
                  definition: {
                    'author': Ref('users'),
                    'comments': RefList('comments'),
                  },
                ),
              ],
              name: 'articles',
              input: {
                "id": "123",
                "author": {"id": "1", "name": "Paul"},
                "title": "My awesome blog post",
                "comments": [
                  {
                    "id": "324",
                    "commenter": {"id": "2", "name": "Nicole"}
                  }
                ]
              },
              output: {
                "users": [
                  {"id": "1", "name": "Paul"},
                  {"id": "2", "name": "Nicole"}
                ],
                "comments": [
                  {"id": "324", "commenter": "2"}
                ],
                "articles": [
                  {
                    "id": "123",
                    "author": "1",
                    "title": "My awesome blog post",
                    "comments": ["324"]
                  }
                ],
              },
            ));
    test(
        'Ref / RefList :: Circular Ref',
        () => expectNormalize(
              schema: const [
                Entity(
                  'users',
                  definition: {
                    'friends': RefList('users'),
                    'marriedTo': Ref('users'),
                  },
                ),
              ],
              name: 'users',
              input: {
                'id': 123,
                'name': 'Tim',
                'friends': [
                  {'id': 124, 'name': 'Mac'},
                ],
                'marriedTo': {'id': 125, 'name': 'Joyce'},
              },
              output: {
                'users': [
                  {'id': 124, 'name': 'Mac'},
                  {'id': 125, 'name': 'Joyce'},
                  {
                    'id': 123,
                    'name': 'Tim',
                    'friends': [124],
                    'marriedTo': 125
                  }
                ]
              },
            ));
    test(
        'UnionList',
        () => expectNormalize(
              schema: const [
                Entity('data-list', definition: {
                  'data': UnionList(['post', 'question']),
                }),
                Entity('question'),
                Entity('post'),
              ],
              name: 'data-list',
              input: {
                'data': [
                  {
                    'id': '1-1',
                    'type': 'post',
                    'post-data': 'data post',
                  },
                  {
                    'id': '2-1',
                    'type': 'question',
                    'question-data': 'data question',
                  },
                ]
              },
              output: {
                'post': [
                  {
                    'id': '1-1',
                    'type': 'post',
                    'post-data': 'data post',
                  }
                ],
                'question': [
                  {
                    'id': '2-1',
                    'type': 'question',
                    'question-data': 'data question',
                  }
                ],
                'data-list': [
                  {
                    'data': [
                      {'id': '1-1', 'type': 'post'},
                      {'id': '2-1', 'type': 'question'}
                    ]
                  }
                ]
              },
            ));
    test(
        'Struct',
        () => expectNormalize(
              schema: const [
                Struct(
                  'root',
                  {
                    'entrypoint': {'entries': RefList('entries')},
                  },
                ),
                Entity('entries'),
              ],
              name: 'root',
              input: {
                'entrypoint': {
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
              },
              output: {
                'entries': [
                  {
                    'data': {'name': 'name'}
                  },
                  {
                    'data': {'value': 'value'}
                  },
                ],
              },
            ));
    test(
        'Struct :: With List',
        () => expectNormalize(
              schema: const [
                Struct(
                  'root',
                  {
                    'entrypoint': [
                      {'entries': RefList('entries')},
                    ],
                  },
                ),
                Entity('entries'),
              ],
              name: 'root',
              input: {
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
              output: {
                'entries': [
                  {
                    'data': {'name': 'name'}
                  },
                  {
                    'data': {'value': 'value'}
                  },
                ],
              },
            ));
    test(
        'Flat',
        () => expectNormalize(
              schema: const [
                Struct('root', {
                  'entrypoint': RefList('flat'),
                }),
                Flat(
                  'flat',
                  entityPath: ['entries', '*'],
                  includePath: [
                    ['include'],
                  ],
                ),
              ],
              name: 'root',
              input: {
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
              output: {
                'flat': [
                  {
                    'data.name': 'name',
                    'include.friends': true,
                    'data.value': null
                  },
                  {
                    'data.value': 'value',
                    'include.friends': true,
                    'data.name': null
                  },
                ],
              },
            ));
  });
}

void expectNormalize({
  required schema,
  required name,
  required input,
  required output,
}) =>
    expect(JsonNormalizer(schema).normalize(name, input), output);
