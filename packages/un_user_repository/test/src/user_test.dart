import 'package:flutter_test/flutter_test.dart';
import 'package:un_user_repository/un_user_repository.dart';

void main() {
  group('UserRepository', () {
    late UserRepository user;

    setUp(() {
      user = const UserRepository();
    });

    test('can be instantiated', () {
      expect(user, isNotNull);
    });
  });
}
