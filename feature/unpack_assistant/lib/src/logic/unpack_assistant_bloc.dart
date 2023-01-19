import 'dart:async';
import 'dart:developer';

import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:freezed_annotation/freezed_annotation.dart';

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

class UnpackAssistantBloc
    extends Bloc<UnpackAssistantEvent, UnpackAssistantState> {
  UnpackAssistantBloc() : super(const _Initial()) {
    on<_Create>(_onCreate);
    on<_Start>(_onStart);
    on<_Resume>(_onResume);
    on<_Pause>(_onPause);
    on<_Stop>(_onStop);
    on<_Destroy>(_onDestroy);

    add(const _Create());
  }

  void _onCreate(_Create event, Emitter<UnpackAssistantState> emit) =>
      emit(const _Created());

  void _onStart(_Start event, Emitter<UnpackAssistantState> emit) =>
      emit(const _Started());

  void _onResume(_Resume event, Emitter<UnpackAssistantState> emit) =>
      emit(const _Resumed());

  void _onPause(_Pause event, Emitter<UnpackAssistantState> emit) =>
      emit(const _Started());

  void _onStop(_Stop event, Emitter<UnpackAssistantState> emit) =>
      emit(const _Created());

  void _onDestroy(_Destroy event, Emitter<UnpackAssistantState> emit) =>
      emit(const _Destroyed());

  // STREAM EVENTS

  _Errored _onError(Object error, StackTrace stackTrace) {
    // TODO: implement analytics here
    log("$runtimeType - error", error: error, stackTrace: stackTrace);
    onError(error, stackTrace);

    return _Errored(error: error, stackTrace: stackTrace);
  }

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

  @override
  Future<void> close() {
    add(const _Destroy());

    return super.close();
  }
}
