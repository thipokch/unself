// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'dynamic_database.dart';

// ignore_for_file: type=lint
mixin _$DynamicDatabaseMixin on DatabaseAccessor<UngraphDatabase> {
  Selectable<String> queryTables() {
    return customSelect(
        'SELECT name FROM sqlite_master WHERE type = \'table\' AND name NOT LIKE \'sqlite_%\'',
        variables: [],
        readsFrom: {}).map((QueryRow row) => row.read<String>('name'));
  }
}
