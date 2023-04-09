import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:un_model/un_model.dart';

part 'json_ref_list.freezed.dart';
part 'json_ref_list.g.dart';

@freezed
class JsonRefList with _$JsonRefList implements IJsonSchemaRef {
  const JsonRefList._();

  @FreezedUnionValue('JsonRefList.ref')
  const factory JsonRefList.ref(String name) = RefList;

  @FreezedUnionValue('JsonRefList.union')
  const factory JsonRefList.union(
    List<String> names, {
    @Default('type') String key,
  }) = UnionList;

  JsonRef get schema =>
      map(ref: (_) => Ref(_.name), union: (_) => Union(_.names, key: _.key));

  dynamic doCallback(dynamic json, DoCallback callback) =>
      (json as List).map((item) => callback(item, schema)).toList();

  /// Creates a [JsonRef] from Json map
  factory JsonRefList.fromJson(Map<String, dynamic> data) =>
      _$JsonRefListFromJson(data);
}
