part of 'unpack_assistant_bloc.dart';

/// {@template unpack_assistant_state}
/// [UnpackAssistantState] are the states that the [UnpackAssistantBloc] can be.
/// {@endtemplate}
@freezed
class UnpackAssistantState with _$UnpackAssistantState {
  /// {@template unpack_assistant_state}
  const UnpackAssistantState._();

  /// Assistant is created.
  const factory UnpackAssistantState.initial() = _Initial;

  /// Step 1: Select the app or services.
  const factory UnpackAssistantState.apps({
    required final List<String> apps,
  }) = _Apps;

  /// Step 2: Select the archive file.
  const factory UnpackAssistantState.archive() = _Archive;

  /// Step 3: Select data from archive to import.
  const factory UnpackAssistantState.data({
    required final List<String> data,
  }) = _Data;

  /// Step 4: Process the archive.
  const factory UnpackAssistantState.processing({
    required final int progress,
  }) = _Processing;

  /// Step 5: Complete the import.
  const factory UnpackAssistantState.completed() = _Completed;

  /// Assistant has errored.
  const factory UnpackAssistantState.errored({
    required final Object error,
    required final StackTrace stackTrace,
  }) = _Errored;
}
