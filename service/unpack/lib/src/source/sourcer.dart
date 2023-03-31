import 'dart:async';

import 'package:rxdart/subjects.dart';
import 'package:unself_unpack/unself_unpack.dart';

import 'isource.dart';

class Sourcer extends ISource {
  Sourcer(
    super.spec, {
    Iterable<ModuleSpec> selectedModules = const [],
    SourceState state = const SourceInitial(),
    SourceProgress progress = const SourceProgress(0),
  }) {
    _selectedModules = selectedModules;
    _states = BehaviorSubject<SourceState>.seeded(state);
    _progress = BehaviorSubject<SourceProgress>.seeded(progress);
  }

  late final Iterable<ModuleSpec> _selectedModules;

  late final BehaviorSubject<SourceState> _states;
  late final BehaviorSubject<SourceProgress> _progress;

  @override
  Stream<SourceState> get states => _states.stream;

  @override
  Stream<SourceProgress> get progress => _progress.stream;

  @override
  SourceState get currentState => _states.value;

  @override
  SourceStep get currentStep => currentState.step;

  @override
  FutureOr<void> configure(Iterable<ModuleSpec> selectedModules) {
    _require<SourceInitial>();

    _selectedModules = selectedModules;
    _states.add(SourceConfigure(modules: selectedModules));
  }

  @override
  FutureOr<void> retrieve() async {
    _require<SourceConfigure>();

    final xfile = await IRetrieve.factory(spec.retrieveSpec).retrieve();
    _states.add(SourceRetrieve(file: xfile!));
  }

  // @override
  // FutureOr<void> prepare() async {
  //   final retrieve = _require<SourceRetrieve>();
  // }

  @override
  FutureOr<void> process() async {
    final retrieve = _require<SourceRetrieve>();

    for (final module in _selectedModules) {
      await Modularize(module, spec.fileSpec).process(retrieve.file);
    }

    _states.add(const SourceComplete());
  }

  S _require<S extends SourceState>() {
    if (currentState is S) return currentState as S;
    throw StateError(
        'to $currentStep, the source must be in $currentStep state');
  }
}
