import 'package:unself_model/unself_model.dart';

abstract class IUnpackSpec {
  const IUnpackSpec();

  String? get id;
  String get slug;
  String get name;

  FileSpec get fileSpec;
  RetrieveSpec get retrieveSpec;
  Iterable<ModuleSpec> get modules;
}
