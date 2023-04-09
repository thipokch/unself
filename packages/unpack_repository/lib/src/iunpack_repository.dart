part of 'unpack_repository.dart';

/// An interface for UnpackRepository
abstract class IUnpackRepository {
  Future<bool> get isSpecsEmpty;

  Stream<Iterable<UnpackSpec>> watchAllSpecs();

  Future<Iterable<UnpackSpec>> getAllSpecs();
  Future<UnpackSpec> getSpecById(String id);

  Future<UnpackSpec> putSpec(UnpackSpec spec);
  // putAllSpecs(Iterable<UnpackSpec> spec);

  Future<bool> get isStatesEmpty;

  Stream<Iterable<UnpackState>> watchAllStates();

  Future<Iterable<UnpackState>> getAllStates();
  Future<UnpackState> getStateById(String id);

  Future<UnpackState> putState(UnpackState state);
  // putAllStates(Iterable<UnpackState> states);
}
