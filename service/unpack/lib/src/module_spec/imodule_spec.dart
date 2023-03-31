import 'package:unself_unpack/unself_unpack.dart';

abstract class IModuleSpec {
  const IModuleSpec();

  String get id;
  String get name;
  Pattern get fileMatcher;

  ExtractSpec get extractSpec;
  TransformSpec get transformSpec;
  LoadSpec get loadSpec;
}
