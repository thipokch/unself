import 'package:flutter_test/flutter_test.dart';
import 'package:unself_user/unself_user.dart';

void main() {
  group('UserService', () {
    late UserService user;

    setUp(() {
      user = const UserService();
    });

    test('can be instantiated', () {
      expect(user, isNotNull);
    });
  });
}
