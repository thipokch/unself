import 'dart:async';

import 'package:unself_file/unself_file.dart';
import 'package:unself_model/unself_model.dart';
import 'package:unself_unpack/unself_unpack.dart';

abstract class IModule<O> {
  const IModule(this.spec, this.fileSpec);

  final ModuleSpec spec;
  final FileSpec fileSpec;

  Stream<ModuleState> get states;

  ModuleState get currentState;
  ModuleStep get currentStep;

  FutureOr<void> process(XFile file);
}
