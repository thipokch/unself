import 'package:unself_model/unself_model.dart';

abstract class IModuleSpec {
  const IModuleSpec();

  String get id;
  String get name;
  Pattern get fileMatcher;

  ExtractSpec get extractSpec;
  TransformSpec get transformSpec;
  LoadSpec get loadSpec;
}
