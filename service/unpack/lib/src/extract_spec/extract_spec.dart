import 'package:freezed_annotation/freezed_annotation.dart';

part 'extract_spec.freezed.dart';
part 'extract_spec.g.dart';

@freezed
class ExtractSpec with _$ExtractSpec {
  const ExtractSpec._();

  const factory ExtractSpec.json() = JsonExtractSpec;

  factory ExtractSpec.fromJson(Map<String, dynamic> json) =>
      _$ExtractSpecFromJson(json);
}
