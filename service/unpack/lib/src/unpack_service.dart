import 'dart:async';

import 'package:rxdart/subjects.dart';
import 'package:unself_model/unself_model.dart';
import 'package:unself_unpack/src/unpack/unpacker.dart';
import 'package:unself_unpack/unself_unpack.dart';
import 'package:unself_unpack_repository/unself_unpack_repository.dart';

import 'iunpack_service.dart';

class UnpackService implements IUnpackService {
  UnpackService({
    required UnpackRepository repository,
  }) : _repo = repository {
    _repo.watchAllStates().listen(_states.add);
  }

  final UnpackRepository _repo;
  late final _states = BehaviorSubject<Iterable<UnpackState>>.seeded([]);

  @override
  Stream<Iterable<UnpackState>> get states => _states.stream;

  @override
  Future<Iterable<UnpackSpec>> get specs => _repo.getAllSpecs();

  static final _instances = <int, IUnpack>{};

  int get runningInstances => _instances.length;

  @override
  Future<int> initialize(UnpackSpec spec) async {
    final u = Unpacker(spec);
    final id = await _repo.putState(u.currentState);

    _instances[id] = u;
    // u.states.listen((s) => _repo.putState(s));
    return id;
  }

  @override
  Future<IUnpack> unpacker(int instanceId) async {
    if (_instances.containsKey(instanceId)) return _instances[instanceId]!;

    final state = await _repo.getStateById(instanceId);
    final spec = await _repo.getSpecById(state.specId);

    _instances[instanceId] ??= Unpacker(spec, state: state);

    return _instances[instanceId]!;
  }

  @override
  FutureOr<void> dispose(int instanceId) {
    final instance = _instances[instanceId];
    instance?.dispose();
    _instances.remove(instanceId);
  }
}
