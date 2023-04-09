import 'dart:async';

import 'package:un_file/un_file.dart';
import 'package:un_model/un_model.dart';
import 'package:unpack/unpack.dart';

abstract class IModule<O> {
  const IModule(this.spec, this.fileSpec);

  final ModuleSpec spec;
  final FileSpec fileSpec;

  Stream<ModuleState> get states;

  ModuleState get currentState;
  ModuleStep get currentStep;

  FutureOr<void> process(XFile file);
}
