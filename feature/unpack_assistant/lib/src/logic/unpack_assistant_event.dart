part of 'unpack_assistant_bloc.dart';

/// {@template unpack_assistant_event}
/// [UnpackAssistantEvent] are the events that the [UnpackAssistantBloc] can
/// respond to.
/// {@endtemplate}
@freezed
class UnpackAssistantEvent with _$UnpackAssistantEvent {
  /// {@template unpack_assistant_event}
  const UnpackAssistantEvent._();

  /// User selected the app or service to import data from.
  const factory UnpackAssistantEvent.selectApp({
    required String app,
  }) = _SelectApp;

  /// User selected the archive file to be imported
  const factory UnpackAssistantEvent.selectArchive({
    required File file,
  }) = _SelectArchive;

  /// User selected the data to be imported from the archive.
  const factory UnpackAssistantEvent.selectData({
    required List<String> data,
  }) = _SelectData;

  /// User starts the import process.
  const factory UnpackAssistantEvent.start() = _Start;
}
