part of '{{feature_name.snakeCase()}}_bloc.dart';

/// {@template {{feature_name.snakeCase()}}_event}
/// Event added when some custom logic happens
/// {@endtemplate}
@freezed
class {{feature_name.pascalCase()}}Event with _${{feature_name.pascalCase()}}Event {
  const {{feature_name.pascalCase()}}Event._();

  const factory {{feature_name.pascalCase()}}Event.create() = _Create;
  const factory {{feature_name.pascalCase()}}Event.start() = _Start;
  const factory {{feature_name.pascalCase()}}Event.resume() = _Resume;
  const factory {{feature_name.pascalCase()}}Event.pause() = _Pause;
  const factory {{feature_name.pascalCase()}}Event.stop() = _Stop;
  const factory {{feature_name.pascalCase()}}Event.destroy() = _Destroy;
}
