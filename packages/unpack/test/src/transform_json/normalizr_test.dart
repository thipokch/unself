import 'package:flutter_test/flutter_test.dart';
import 'package:normalizr/normalizr.dart';

void main() {
  group('normalize', () {
    setUp(() {
      normalizr.clear();
    });

    test('example', () {
      const user = Entity('users');

      const comment = Entity('comments', {
        'commenter': Ref('users'),
      });

      final article = Entity('articles', {
        'author': const Ref('users'),
        'comments': Ref.list('comments'),
      });

      normalizr.addAll([user, comment, article]);

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

      expect(normalize(input, article), {
        "result": "123",
        "type": "articles",
        "entities": {
          "users": {
            "1": {"id": "1", "name": "Paul"},
            "2": {"id": "2", "name": "Nicole"}
          },
          "comments": {
            "324": {"id": "324", "commenter": "2"}
          },
          "articles": {
            "123": {
              "id": "123",
              "author": "1",
              "title": "My awesome blog post",
              "comments": ["324"]
            }
          }
        }
      });
    });

    test('circular references', () {
      final user = Entity('users', {
        'friends': Ref.list('users'),
      });

      normalizr.add(user);

      final input = {
        'id': 123,
        'nick': 'first',
        'friends': [
          {'id': 124, 'nick': 'second'},
        ]
      };

      expect(normalize(input, user), {
        'result': 123,
        'type': 'users',
        'entities': {
          'users': {
            123: {
              'id': 123,
              'nick': 'first',
              'friends': [124],
            },
            124: {
              'id': 124,
              'nick': 'second',
            },
          }
        }
      });
    });

    test('union', () {
      final dataList = Entity('data-list', {
        'data': Union.list((json) => Ref(json['type'] + 's')),
      });

      const question = Entity('questions');
      const post = Entity('posts');

      normalizr.addAll([question, post]);

      final input = {
        'data': [
          {'id': '1-1', 'type': 'post', 'post-data': 'data post'},
          {'id': '2-1', 'type': 'question', 'question-data': 'data question'},
        ]
      };

      expect(normalize(input, dataList), {
        'result': null,
        'type': 'data-list',
        'entities': {
          'data-list': {
            null: {
              'data': [
                {'id': '1-1', 'type': 'posts'},
                {'id': '2-1', 'type': 'questions'},
              ]
            }
          },
          'questions': {
            '2-1': {
              'id': '2-1',
              'type': 'question',
              'question-data': 'data question',
            },
          },
          'posts': {
            '1-1': {'id': '1-1', 'type': 'post', 'post-data': 'data post'},
          }
        }
      });
    });
  });
}
