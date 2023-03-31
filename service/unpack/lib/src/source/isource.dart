import 'dart:async';

import 'package:unself_unpack/unself_unpack.dart';

abstract class ISource {
  const ISource(this.spec);

  final SourceSpec spec;

  Stream<SourceState> get states;
  Stream<SourceProgress> get progress;

  SourceState get currentState;
  SourceStep get currentStep;

  FutureOr<void> configure(Iterable<ModuleSpec> selectedModules);
  FutureOr<void> retrieve();
  // FutureOr<void> prepare();
  FutureOr<void> process();
}
