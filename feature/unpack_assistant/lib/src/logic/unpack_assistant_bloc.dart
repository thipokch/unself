import 'dart:developer';

import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:unself_file/unself_file.dart';
import 'package:unself_unpack/unself_unpack.dart';

part 'unpack_assistant_event.dart';
part 'unpack_assistant_state.dart';
part 'unpack_assistant_bloc.freezed.dart';

typedef UnpackAssistantBuilder
    = BlocBuilder<UnpackAssistantBloc, UnpackAssistantState>;
typedef UnpackAssistantListener
    = BlocListener<UnpackAssistantBloc, UnpackAssistantState>;
typedef UnpackAssistantSelector<T>
    = BlocSelector<UnpackAssistantBloc, UnpackAssistantState, T>;
typedef UnpackAssistantConsumer
    = BlocConsumer<UnpackAssistantBloc, UnpackAssistantState>;

// TODO: Consider breaking this into smaller components

/// {@template unpack_assistant_bloc}
/// [UnpackAssistantBloc] is responsible for helping the user importing or
/// unpacking their exported archive from other apps. The assistant takes
/// the user through the following steps to help them import their data:
///
/// 1. Select the app or services.
/// 2. Select the archive file.
/// 3. Select data from archive to import.
/// 4. Process the archive.
/// 5. Complete the import.
///
/// Constraints:
/// 1. Run one at a time.
/// 2. The app must be in the foreground.
///
/// {@endtemplate}
class UnpackAssistantBloc
    extends Bloc<UnpackAssistantEvent, UnpackAssistantState> {
  /// {@macro unpack_assistant_logic}
  UnpackAssistantBloc({
    required UnpackService unpackService,
  })  : _unpackService = unpackService,
        super(const _Initial()) {
    on<_SelectApp>(_onSelectApp);
    on<_SelectArchive>(_onSelectArchive);
    on<_SelectData>(_onSelectData);
    on<_Start>(_onStart);
  }

  // Delegates

  // ignore: unused_field
  final UnpackService _unpackService;

  void _onSelectApp(_SelectApp event, Emitter<UnpackAssistantState> emit) =>
      emit(const _Archive());

  Future<void> _onSelectArchive(
      _SelectArchive event, Emitter<UnpackAssistantState> emit) async {
    // final
    final archiveCollector =
        ArchiveCollector(archive: await XZipDecoder.decodeXFile(event.xFile));

    archiveCollector.collect();
    // _unpackService.

    emit(const _Data(data: []));
  }

  void _onSelectData(_SelectData event, Emitter<UnpackAssistantState> emit) =>
      emit(const _Processing(progress: 0));

  void _onStart(_Start event, Emitter<UnpackAssistantState> emit) =>
      emit(const _Completed());

  // STREAM EVENTS

  // _Errored _onError(Object error, StackTrace stackTrace) {
  //   // TODO: implement analytics here
  //   log("$runtimeType - error", error: error, stackTrace: stackTrace);
  //   onError(error, stackTrace);

  //   return _Errored(error: error, stackTrace: stackTrace);
  // }

  // BLOC EVENTS

  @override
  void onEvent(event) {
    // TODO: implement analytics here
    log("$runtimeType - event : $event");
    super.onEvent(event);
  }

  @override
  void onError(error, stackTrace) {
    // TODO: implement analytics here
    log("$runtimeType - error", error: error, stackTrace: stackTrace);
    super.onError(error, stackTrace);
  }
}
