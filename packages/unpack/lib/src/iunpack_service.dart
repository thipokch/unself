import 'dart:async';

import 'package:un_model/un_model.dart';
import 'package:unpack/unpack.dart';

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
