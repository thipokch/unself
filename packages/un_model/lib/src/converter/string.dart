import 'package:freezed_annotation/freezed_annotation.dart';

class JsonString implements JsonConverter<String, dynamic> {
  const JsonString();

  @override
  fromJson(_) => _.toString();

  @override
  toJson(_) => _.toString();
}
