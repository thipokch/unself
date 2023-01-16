part of 'user_service.dart';

/// An interface for UserService
abstract class IUserService {
  /// A description for streamUser
  Stream<User> streamUser();

  /// A description for setThemeMode
  void setThemeMode(ThemeMode themeMode);
}
