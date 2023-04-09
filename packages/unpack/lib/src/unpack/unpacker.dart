import 'dart:async';

import 'package:rxdart/subjects.dart';
import 'package:un_file/un_file.dart';
import 'package:un_model/un_model.dart';
import 'package:unpack/unpack.dart';

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
  String get id => currentState.id!;

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

    processModule(m) async =>
        Moduler(m, spec.fileSpec).process(currentState.xFile);

    await Future.wait(currentState.selectedModules!.map((processModule)));

    _states.add(currentState.copyWith(
      step: UnpackStep.complete,
    ));
  }

  @override
  void dispose() {
    _states.close();
    _progress.close();
  }
}

extension on UnpackState {
  XFile get xFile => XFile(filePath!);
}
