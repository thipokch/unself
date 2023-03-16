part of 'unpack_service.dart';

/// An interface for Unpack
abstract class IUnpackService {
  /// [load] returns the [Mapping] with file format requirements for the
  /// given app.
  FutureOr<ArchiveSchema> load(App app);

  /// [open] returns the supported list of [Mapping] for the
  /// given [XFile] file.
  FutureOr<List<Mapping>> open(XFile file);

  /// [start] let the service begins unpacking with the given [Mapping]
  /// , and returns a progress stream.
  Stream<int> start(List<Mapping> mappings);
}
