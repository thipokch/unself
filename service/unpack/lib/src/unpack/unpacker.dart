import 'dart:async';

import 'package:rxdart/subjects.dart';
import 'package:unself_file/unself_file.dart';
import 'package:unself_model/unself_model.dart';
import 'package:unself_unpack/unself_unpack.dart';

import 'unpack_progress.dart';

class Unpacker extends IUnpack {
  Unpacker(
    super.spec, {
    UnpackState? state,
    UnpackProgress progress = const UnpackProgress(0),
  }) {
    _states = BehaviorSubject<UnpackState>.seeded(state ?? spec.initialState);
    _progress = BehaviorSubject<UnpackProgress>.seeded(progress);
  }

  late final BehaviorSubject<UnpackState> _states;
  late final BehaviorSubject<UnpackProgress> _progress;

  @override
  Stream<UnpackState> get states => _states.stream;

  @override
  Stream<UnpackProgress> get progress => _progress.stream;

  @override
  UnpackState get currentState => _states.value;

  @override
  UnpackStep get currentStep => currentState.step;

  @override
  FutureOr<void> configure(Iterable<ModuleSpec> selectedModules) {
    // _require<UnpackInitial>();

    _states.add(currentState.copyWith(
      step: UnpackStep.configure,
      selectedModules: selectedModules,
    ));
  }

  @override
  FutureOr<void> retrieve() async {
    // _require<UnpackConfigure>();

    final xfile = await IRetrieve.factory(spec.retrieveSpec).retrieve();
    _states.add(currentState.copyWith(
      step: UnpackStep.retrieve,
      filePath: xfile!.path,
    ));
  }

  // @override
  // FutureOr<void> prepare() async {
  //   final retrieve = _require<Unpackeretrieve>();
  // }

  @override
  FutureOr<void> process() async {
    // final retrieve = _require<Unpackeretrieve>();

    for (final module in currentState.selectedModules!) {
      await Modularize(module, spec.fileSpec).process(currentState.xFile);
    }

    _states.add(currentState.copyWith(
      step: UnpackStep.complete,
    ));
  }

  // S _require<S extends UnpackState>() {
  //   if (currentState is S) return currentState as S;
  //   throw StateError(
  //       'to $currentStep, the unpack must be in $currentStep state');
  // }

  @override
  void dispose() {
    _states.close();
    _progress.close();
  }
}

extension on UnpackState {
  XFile get xFile => XFile(filePath!);
}
