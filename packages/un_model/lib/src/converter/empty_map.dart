import 'package:freezed_annotation/freezed_annotation.dart';

class JsonEmptyMap implements JsonConverter<Map<String, dynamic>, Map?> {
  const JsonEmptyMap();

  @override
  fromJson(_) => _?.cast<String, dynamic>() ?? {};

  @override
  toJson(_) => _.keys.isNotEmpty ? _ : null;
}
