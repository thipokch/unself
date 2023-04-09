import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:un_model/un_model.dart';

part 'json_ref.freezed.dart';
part 'json_ref.g.dart';

@freezed
class JsonRef with _$JsonRef implements IJsonSchemaRef {
  const JsonRef._();

  @FreezedUnionValue('JsonRef.ref')
  const factory JsonRef.ref(String name) = Ref;

  @FreezedUnionValue('JsonRef.union')
  const factory JsonRef.union(
    // Serialization doesn't support fuctions
    // required LookupCallback lookup,
    List<String> names, {
    @Default('type') String key,
  }) = Union;

  JsonSchema getScheme(dynamic json, SchemaFinder find) => map(
        ref: (_) => find(_.name),
        union: (_) => Ref(json[_.key]).getScheme(json, find),
        // orElse: () => throw StateError("Can't getEntity on $runtimeType"),
      );

  dynamic useId(dynamic id, JsonSchema scheme) => map(
        ref: (_) => id,
        union: (_) => {
          'id': id,
          'type': scheme.name,
        },
        // orElse: () => throw StateError("Can't getEntity on $runtimeType"),
      );

  /// Creates a [JsonRef] from Json map
  factory JsonRef.fromJson(Map<String, dynamic> data) =>
      _$JsonRefFromJson(data);
}
