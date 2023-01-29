import 'dart:async';
import 'package:flutter/material.dart';
import 'package:unself_model/unself_model.dart';

part 'iuser_service.dart';

/// {@template user_service}
/// UserService description
/// {@endtemplate}
class UserService implements IUserService {
  /// {@macro user_service}
  const UserService();

  static final _controller = StreamController<User>.broadcast()
    ..stream.listen((value) => _currentUser = value);

  static User _currentUser = const User(themeMode: ThemeMode.system);

  @override
  Stream<User> streamUser() => _controller.stream;

  @override
  void setThemeMode(ThemeMode themeMode) =>
      _controller.add(_currentUser.copyWith(themeMode: themeMode));

  void dispose() => _controller.close();
}
