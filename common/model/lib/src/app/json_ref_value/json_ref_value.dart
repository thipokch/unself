import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:unself_model/unself_model.dart';

part 'json_ref_value.freezed.dart';
part 'json_ref_value.g.dart';

@freezed
class JsonRefValue with _$JsonRefValue implements IJsonSchemaRef {
  const JsonRefValue._();

  @FreezedUnionValue('JsonRefValue.valueFrom')
  const factory JsonRefValue.valueFrom(String name) = ValueFrom;

  @FreezedUnionValue('JsonRefValue.slugFrom')
  const factory JsonRefValue.slugFrom(String name) = SlugFrom;

  /// Creates a [JsonRefValue] from Json map
  factory JsonRefValue.fromJson(Map<String, dynamic> data) =>
      _$JsonRefValueFromJson(data);
}
