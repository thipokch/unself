part of 'unpack_service.dart';

/// An interface for Unpack
abstract class IUnpackService {
  /// [load] returns the [Mapping] with file format requirements for the
  /// given app.
  FutureOr<Mapping> load(App app);

  /// [open] returns the supported list of [MappingEntry] for the
  /// given [XFile] file.
  FutureOr<List<MappingEntry>> open(XFile file);

  /// [start] let the service begins unpacking with the given [Mapping]
  /// , and returns a progress stream.
  Stream<int> start(List<MappingEntry> mappings);
}
