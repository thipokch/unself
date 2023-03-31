import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:unself_file/unself_file.dart';

class XFileConverter implements JsonConverter<XFile, String> {
  const XFileConverter();

  @override
  fromJson(_) => XFile(_);

  @override
  toJson(_) => _.path;
}
