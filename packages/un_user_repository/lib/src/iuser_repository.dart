part of 'user_repository.dart';

abstract class IUserRepository {
  Stream<Settings> streamUser();

  void setThemeMode(ThemeMode themeMode);
}
