part of 'unpack_assistant_bloc.dart';

/// {@template unpack_assistant_event}
/// Event added when some custom logic happens
/// {@endtemplate}
@freezed
class UnpackAssistantEvent with _$UnpackAssistantEvent {
  const UnpackAssistantEvent._();

  const factory UnpackAssistantEvent.create() = _Create;
  const factory UnpackAssistantEvent.start() = _Start;
  const factory UnpackAssistantEvent.resume() = _Resume;
  const factory UnpackAssistantEvent.pause() = _Pause;
  const factory UnpackAssistantEvent.stop() = _Stop;
  const factory UnpackAssistantEvent.destroy() = _Destroy;
}
