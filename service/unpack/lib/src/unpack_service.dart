// ignore_for_file: unused_field, unused_local_variable

import 'dart:async';

import 'package:unself_file/unself_file.dart';
import 'package:unself_local_database/unself_local_database.dart'
    show LocalDatabase;
import 'package:unself_model/unself_model.dart';
import 'package:unself_unpack/unself_unpack.dart';

part 'iunpack_service.dart';

/// {@template unpack_service}
/// [UnpackService] is a service that unpacks data from a file.
/// {@endtemplate}
class UnpackService implements IUnpackService {
  /// {@macro unpack_service}
  UnpackService({
    required LocalDatabase localDb,
  }) : _localDb = localDb;

  // Delegate
  final LocalDatabase _localDb;

  App? _app;
  Import? _input;

  @override
  FutureOr<ArchiveFormat> load(App app) {
    _app = app;
    return _formats.firstWhere((e) => e.appId == app.id);
  }

  @override
  FutureOr<List<Mapping>> open(XFile file) async {
    final zip = await ZipImport().open(file);
    throw UnimplementedError();
  }

  @override
  Stream<int> start(List<Mapping> mappings) {
    throw UnimplementedError();
  }

  // static final List<App> supportedApps = _formats.map((e) => e.app).toList();

  static final List<ArchiveFormat> _formats = [
    // facebook,
  ];

  // TODO: implement unpacked
  Map<String, Object?> get unpacked => throw UnimplementedError();
}
