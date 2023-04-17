import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:slugify/slugify.dart';

part 'json_spec.freezed.dart';
part 'json_spec.g.dart';

@freezed
class JsonSpec with _$JsonSpec {
  const JsonSpec._();

  const factory JsonSpec({
    required String name,
    required String description,
    required String type,
  }) = _JsonSpec;

  String get slug => slugify(name, delimiter: '_');

  factory JsonSpec.fromJson(Map<String, dynamic> json) =>
      _$JsonSpecFromJson(json);
}
