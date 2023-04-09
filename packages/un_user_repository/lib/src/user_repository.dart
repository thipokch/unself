import 'dart:async';
import 'package:flutter/material.dart';
import 'package:un_model/un_model.dart';

part 'iuser_repository.dart';

class UserRepository implements IUserRepository {
  const UserRepository();

  static final _controller = StreamController<Settings>.broadcast()
    ..stream.listen((value) => _currentUser = value);

  static Settings _currentUser = const Settings(themeMode: ThemeMode.system);

  @override
  Stream<Settings> streamUser() => _controller.stream;

  @override
  void setThemeMode(ThemeMode themeMode) =>
      _controller.add(_currentUser.copyWith(themeMode: themeMode));

  void dispose() => _controller.close();
}
