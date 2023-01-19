part of 'unpack_assistant_bloc.dart';

/// {@template unpack_assistant_state}
/// UnpackAssistantState description
/// {@endtemplate}
@freezed
class UnpackAssistantState with _$UnpackAssistantState {
  const UnpackAssistantState._();

  const factory UnpackAssistantState.initial() = _Initial;
  const factory UnpackAssistantState.created() = _Created;
  const factory UnpackAssistantState.started() = _Started;
  const factory UnpackAssistantState.resumed() = _Resumed;
  const factory UnpackAssistantState.destroyed() = _Destroyed;
  const factory UnpackAssistantState.errored({
    required final Object error,
    required final StackTrace stackTrace,
  }) = _Errored;
}
