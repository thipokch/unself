import 'dart:async';

import 'package:unself_model/unself_model.dart';
import 'package:unself_unpack/unself_unpack.dart';

abstract class IUnpackService {
  const IUnpackService();

  Stream<Iterable<UnpackState>> get states;
  FutureOr<Iterable<UnpackSpec>> get specs;

  Future<int> initialize(UnpackSpec spec);
  Future<IUnpack?> unpacker(int instanceId);
  FutureOr<void> dispose(int instanceId);

  // Iterable<ModuleSpec> modules(int instanceId);

  // FutureOr<void> configure(
  //     int instanceId, Iterable<ModuleSpec> selectedModules);
}
