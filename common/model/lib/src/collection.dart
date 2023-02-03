import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:unself_model/unself_model.dart';

part 'collection.freezed.dart';
part 'collection.g.dart';

@freezed
class Collection with _$Collection {
  const factory Collection({
    @Default('') String id,
    @Default('') String type,
    // @Default('') DateTime created,
    // @Default('') DateTime updated,
    @Default('') String name,
    @Default(false) bool system,
    String? listRule,
    String? viewRule,
    String? createRule,
    String? updateRule,
    String? deleteRule,
    @Default([]) List<Field> schema,
    @Default({}) Map<String, dynamic> options,
  }) = _Collection;

  factory Collection.fromJson(Map<String, dynamic> json) =>
      _$CollectionFromJson(json);
}
