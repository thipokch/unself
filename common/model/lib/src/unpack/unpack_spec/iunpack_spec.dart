import 'package:unself_model/unself_model.dart';

abstract class IUnpackSpec {
  const IUnpackSpec();

  int? get id;
  String get name;

  FileSpec get fileSpec;
  RetrieveSpec get retrieveSpec;
  Iterable<ModuleSpec> get modules;
}
