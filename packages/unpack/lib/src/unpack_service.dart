import 'dart:async';

import 'package:rxdart/subjects.dart';
import 'package:un_model/un_model.dart';
import 'package:unpack/src/unpack/unpacker.dart';
import 'package:unpack/unpack.dart';
import 'package:unpack_repository/unpack_repository.dart';

import 'iunpack_service.dart';

class UnpackService implements IUnpackService {
  UnpackService({
    required UnpackRepository repository,
  }) : _repo = repository {
    _repo.watchAllStates().listen(_states.add);
  }

  final UnpackRepository _repo;
  // final UngraphRepository _ungraph;
  late final _states = BehaviorSubject<Iterable<UnpackState>>.seeded([]);

  @override
  Stream<Iterable<UnpackState>> get states => _states.stream;

  @override
  Future<Iterable<UnpackSpec>> get specs => _repo.getAllSpecs();

  static final _instances = <String, IUnpack>{};

  int get activeInstances => _instances.length;

  @override
  Future<String> initialize(UnpackSpec spec) async =>
      await _repo.putState(spec.initialState).then((_) => _.id!);

  @override
  Future<IUnpack> unpacker(String id) async {
    if (_instances.containsKey(id)) return _instances[id]!;

    final state = await _repo.getStateById(id);
    final spec = await _repo.getSpecById(state.specId);

    _instances[id] ??= Unpacker(spec, state: state);

    return _instances[id]!;
  }

  @override
  Future<void> dispose(String instanceId) async {
    final instance = _instances[instanceId];
    await instance?.dispose();
    _instances.remove(instanceId);
  }

  FutureOr<void> clear() async =>
      await Future.wait(_instances.keys.map(dispose));
}
