import 'package:flutter_test/flutter_test.dart';
import 'package:unself_model/unself_model.dart';
import 'package:unself_unpack/unself_unpack.dart';

void main() {
  group('standardize', () {
    late Standardize s;
    setUp(() {
      s = Standardize();
    });

    test('example', () {
      const user = Entity('users', {});

      const comment = Entity('comments', {
        'commenter': Ref('users'),
      });

      const article = Entity('articles', {
        'author': Ref('users'),
        'comments': RefList('comments'),
      });

      s.addAll([user, comment, article]);

      final input = {
        "id": "123",
        "author": {"id": "1", "name": "Paul"},
        "title": "My awesome blog post",
        "comments": [
          {
            "id": "324",
            "commenter": {"id": "2", "name": "Nicole"}
          }
        ]
      };

      expect(s.standardize(input, article), {
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
      });
    });

    test('circular references', () {
      const user = Entity('users', {
        'friends': RefList('users'),
      });

      s.add(user);

      final input = {
        'id': 123,
        'nick': 'first',
        'friends': [
          {'id': 124, 'nick': 'second'},
        ]
      };

      expect(s.standardize(input, user), {
        'users': [
          {
            'id': 124,
            'nick': 'second',
          },
          {
            'id': 123,
            'nick': 'first',
            'friends': [124],
          },
        ],
      });
    });

    test('union', () {
      const dataList = Entity('data-list', {
        'data': UnionList(['post', 'question']),
      });

      const question = Entity('question', {});
      const post = Entity('post', {});

      s.addAll([question, post]);

      final input = {
        'data': [
          {'id': '1-1', 'type': 'post', 'post-data': 'data post'},
          {'id': '2-1', 'type': 'question', 'question-data': 'data question'},
        ]
      };

      expect(s.standardize(input, dataList), {
        'post': [
          {'id': '1-1', 'type': 'post', 'post-data': 'data post'}
        ],
        'question': [
          {'id': '2-1', 'type': 'question', 'question-data': 'data question'}
        ],
        'data-list': [
          {
            'data': [
              {'id': '1-1', 'type': 'post'},
              {'id': '2-1', 'type': 'question'}
            ]
          }
        ]
      });
    });
    // test('traverse', () {
    //   const dataList = ...({
    //     'data': UnionList(['post', 'question']),
    //   });

    //   s.addAll(const [
    //     Entity('question', {}),
    //     Entity('post', {}),
    //   ]);

    //   final input = {
    //     'data': [
    //       {'id': '1-1', 'type': 'post', 'post-data': 'data post'},
    //       {'id': '2-1', 'type': 'question', 'question-data': 'data question'},
    //     ]
    //   };

    //   expect(s.standardize(input, dataList), {
    //     'post': [
    //       {'id': '1-1', 'type': 'post', 'post-data': 'data post'}
    //     ],
    //     'question': [
    //       {'id': '2-1', 'type': 'question', 'question-data': 'data question'}
    //     ],
    //   });

    //   expect(s.standardize(input, dataList), {
    //     'post': [
    //       {'id': '1-1', 'type': 'post', 'post-data': 'data post'}
    //     ],
    //     'question': [
    //       {'id': '2-1', 'type': 'question', 'question-data': 'data question'}
    //     ],
    //   });
    // });

    test('traverse circular references', () {
      const user = Entity('users', {
        'friends': RefList('users'),
      });

      s.add(user);

      final input = {
        'id': 123,
        'nick': 'first',
        'friends': [
          {'id': 124, 'nick': 'second'},
        ]
      };

      expect(s.standardize(input, user), {
        'users': [
          {
            'id': 124,
            'nick': 'second',
          },
          {
            'id': 123,
            'nick': 'first',
            'friends': [124],
          },
        ],
      });
    });
  }, skip: true);
}
