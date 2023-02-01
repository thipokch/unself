// ignore_for_file: unused_field
// TODO: Remove this once done implementing this class.

import 'dart:async';

import 'package:unself_local_database/unself_local_database.dart'
    show LocalDatabase;
import 'package:unself_model/unself_model.dart';

part 'iunpack_service.dart';

/// {@template unpack_service}
/// [UnpackService] description
/// {@endtemplate}
class UnpackService implements IUnpackService {
  /// {@macro unpack_service}
  const UnpackService({
    required LocalDatabase localDb,
  }) : _localDb = localDb;

  // Delegate
  final LocalDatabase _localDb;

  @override
  FutureOr<List> collect() {
    // TODO: implement collect
    throw UnimplementedError();
  }

  @override
  FutureOr<List<Document>> getDocuments({required Collection collection}) {
    // TODO: implement getDocuments
    throw UnimplementedError();
  }

  @override
  FutureOr<void> process({required String collection}) {
    // TODO: implement process
    throw UnimplementedError();
  }
}
