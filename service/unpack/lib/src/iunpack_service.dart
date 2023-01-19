part of 'unpack_service.dart';

/// An interface for Unpack
abstract class IUnpackService {
  /// Returns a list of supported [Collection] that can be imported from given collector.
  FutureOr<List<dynamic>> collect();

  /// Given selection of [Collection] to be imported from previously selected archive.
  /// Begins importing data, format and store it as [Collection].
  FutureOr<void> process({required String collection});

  /// Get [Document] from local [Collection] database.
  FutureOr<List<Document>> getDocuments({required Collection collection});
}
