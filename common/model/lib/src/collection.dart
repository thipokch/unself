import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:unself_model/unself_model.dart';

part 'collection.freezed.dart';
part 'collection.g.dart';

@freezed
class Collection with _$Collection {
  const factory Collection({
    @Default('') String id,
    @Default('base') String type,
    // @Default('') DateTime created,
    // @Default('') DateTime updated,
    @Default('') String name,
    @Default(false) bool system,
    String? listRule,
    String? viewRule,
    String? createRule,
    String? updateRule,
    String? deleteRule,
    @Default([]) List<SchemaField> schema,
    @Default({}) Map<String, dynamic> options,
  }) = _Collection;

  factory Collection.fromJson(Map<String, dynamic> json) =>
      _$CollectionFromJson(json);
}

// type Collection struct {
// 	BaseModel

// 	Name   string        `db:"name" json:"name"`
// 	Type   string        `db:"type" json:"type"`
// 	System bool          `db:"system" json:"system"`
// 	Schema schema.Schema `db:"schema" json:"schema"`

// 	// rules
// 	ListRule   *string `db:"listRule" json:"listRule"`
// 	ViewRule   *string `db:"viewRule" json:"viewRule"`
// 	CreateRule *string `db:"createRule" json:"createRule"`
// 	UpdateRule *string `db:"updateRule" json:"updateRule"`
// 	DeleteRule *string `db:"deleteRule" json:"deleteRule"`

// 	Options types.JsonMap `db:"options" json:"options"`
// }
