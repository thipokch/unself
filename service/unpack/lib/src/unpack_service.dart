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
  Input? _input;

  @override
  FutureOr<Mapping> load(App app) {
    _app = app;
    return _mappings.firstWhere((e) => e.app == app);
  }

  @override
  FutureOr<List<MappingEntry>> open(XFile file) async {
    final zip = await ZipInput().open(file);
    throw UnimplementedError();
  }

  @override
  Stream<int> start(List<MappingEntry> mappings) {
    throw UnimplementedError();
  }

  static final List<App> supportedApps = _mappings.map((e) => e.app).toList();

  static final List<Mapping> _mappings = [
    // facebook,
  ];

  // TODO: implement unpacked
  Map<String, Object?> get unpacked => throw UnimplementedError();
}
