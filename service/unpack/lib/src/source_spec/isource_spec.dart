import 'package:unself_unpack/unself_unpack.dart';

abstract class ISourceSpec {
  const ISourceSpec();

  String get id;
  String get name;

  FileSpec get fileSpec;
  RetrieveSpec get retrieveSpec;
  Iterable<ModuleSpec> get modules;
}
