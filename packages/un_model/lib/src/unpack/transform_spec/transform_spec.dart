import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:un_model/un_model.dart';

part 'transform_spec.freezed.dart';
part 'transform_spec.g.dart';

@freezed
class TransformSpec with _$TransformSpec {
  const TransformSpec._();

  const factory TransformSpec.json(
    Iterable<JsonSchema> schema,
  ) = JsonTransformSpec;

  factory TransformSpec.fromJson(Map<String, dynamic> json) =>
      _$TransformSpecFromJson(json);
}
