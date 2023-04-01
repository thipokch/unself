import 'dart:async';

import 'package:unself_model/unself_model.dart';

import 'unpack_progress.dart';

abstract class IUnpack {
  const IUnpack(this.spec);

  final UnpackSpec spec;

  Stream<UnpackState> get states;
  Stream<UnpackProgress> get progress;

  UnpackState get currentState;
  UnpackStep get currentStep;

  FutureOr<void> configure(Iterable<ModuleSpec> selectedModules);
  FutureOr<void> retrieve();
  FutureOr<void> process();
  FutureOr<void> dispose();
}
