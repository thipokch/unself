part of '{{feature_name.snakeCase()}}_cubit.dart';

/// {@template {{feature_name.snakeCase()}}_state}
/// {{feature_name.pascalCase()}}State description
/// {@endtemplate}
@freezed
class {{feature_name.pascalCase()}}State with _${{feature_name.pascalCase()}}State {
  const {{feature_name.pascalCase()}}State._();

  const factory {{feature_name.pascalCase()}}State.initial() = _Initial;
  const factory {{feature_name.pascalCase()}}State.created() = _Created;
  const factory {{feature_name.pascalCase()}}State.started() = _Started;
  const factory {{feature_name.pascalCase()}}State.resumed() = _Resumed;
  const factory {{feature_name.pascalCase()}}State.destroyed() = _Destroyed;
  const factory {{feature_name.pascalCase()}}State.errored({
    required final Object error,
    required final StackTrace stackTrace,
  }) = _Errored;
}
