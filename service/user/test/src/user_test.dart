import 'package:unself_user/unself_user.dart';
import 'package:test/test.dart';

void main() {
  group('UserService', () {
    late UserService user;

    setUp(() {
      user = const UserService();
    });

    test('can be instantiated', () {
      expect(const UserService(), isNotNull);
    });
  });
}
