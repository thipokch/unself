import 'package:freezed_annotation/freezed_annotation.dart';

part 'prop_spec.freezed.dart';
part 'prop_spec.g.dart';

@freezed
class PropSpec with _$PropSpec {
  const factory PropSpec({
    required String name,
    required String description,
    required String type,
  }) = _PropSpec;

  factory PropSpec.fromJson(Map<String, dynamic> json) =>
      _$PropSpecFromJson(json);
}
