import 'dart:async';
import 'dart:developer';

import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:freezed_annotation/freezed_annotation.dart';

part '{{feature_name.snakeCase()}}_event.dart';
part '{{feature_name.snakeCase()}}_state.dart';
part '{{feature_name.snakeCase()}}_bloc.freezed.dart';

typedef {{feature_name.pascalCase()}}Builder = BlocBuilder<{{feature_name.pascalCase()}}Bloc, {{feature_name.pascalCase()}}State>;
typedef {{feature_name.pascalCase()}}Listener = BlocListener<{{feature_name.pascalCase()}}Bloc, {{feature_name.pascalCase()}}State>;
typedef {{feature_name.pascalCase()}}Selector<T> = BlocSelector<{{feature_name.pascalCase()}}Bloc, {{feature_name.pascalCase()}}State, T>;
typedef {{feature_name.pascalCase()}}Consumer = BlocConsumer<{{feature_name.pascalCase()}}Bloc, {{feature_name.pascalCase()}}State>;


class {{feature_name.pascalCase()}}Bloc extends Bloc<{{feature_name.pascalCase()}}Event, {{feature_name.pascalCase()}}State> {
  {{feature_name.pascalCase()}}Bloc() : super(const _Initial())  {
    on<_Create>(_onCreate);
    on<_Start>(_onStart);
    on<_Resume>(_onResume);
    on<_Pause>(_onPause);
    on<_Stop>(_onStop);
    on<_Destroy>(_onDestroy);

    add(const _Create());
  }

  void _onCreate(_Create event, Emitter<{{feature_name.pascalCase()}}State> emit) =>
      emit(const _Created());

  void _onStart(_Start event, Emitter<{{feature_name.pascalCase()}}State> emit) =>
      emit(const _Started());

  void _onResume(_Resume event, Emitter<{{feature_name.pascalCase()}}State> emit) =>
      emit(const _Resumed());

  void _onPause(_Pause event, Emitter<{{feature_name.pascalCase()}}State> emit) =>
      emit(const _Started());

  void _onStop(_Stop event, Emitter<{{feature_name.pascalCase()}}State> emit) =>
      emit(const _Created());

  void _onDestroy(_Destroy event, Emitter<{{feature_name.pascalCase()}}State> emit) =>
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
