import 'dart:async';

import 'package:unself_model/unself_model.dart';
import 'package:unself_unpack/unself_unpack.dart';

abstract class IUnpackService {
  const IUnpackService();

  Stream<Iterable<UnpackState>> get states;
  FutureOr<Iterable<UnpackSpec>> get specs;

  Future<String> initialize(UnpackSpec spec);
  Future<IUnpack?> unpacker(String id);
  FutureOr<void> dispose(String id);

  // Iterable<ModuleSpec> modules(int instanceId);

  // FutureOr<void> configure(
  //     int instanceId, Iterable<ModuleSpec> selectedModules);
}
