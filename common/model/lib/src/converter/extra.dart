import 'package:freezed_annotation/freezed_annotation.dart';

class JsonExtra implements JsonConverter<Map<String, dynamic>, Map?> {
  const JsonExtra();

  @override
  fromJson(_) => _?.cast<String, dynamic>() ?? {};

  @override
  toJson(_) => _.keys.isNotEmpty ? _ : null;
}
