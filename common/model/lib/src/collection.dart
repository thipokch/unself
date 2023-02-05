import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:unself_model/unself_model.dart';

part 'collection.freezed.dart';
part 'collection.g.dart';

/// {@template collection}
/// [Collection] is a dynamic data structure that can be used to store any kind of data.
/// It is used to store a generalized data structure of user's [Archive]s.
/// {@endtemplate}
@freezed
class Collection with _$Collection implements Base {
  /// {@macro collection}
  const factory Collection({
    /// [id] is unself unique identifier for the [Collection].
    required String id,

    /// [created] is the date and time when the [Collection] was created inside unself app.
    required DateTime created,

    /// [updated] is the date and time when the [Collection] was last updated inside unself app.
    required DateTime updated,

    /// [type] is the type of the [Collection].
    required CollectionType type,

    /// [name] is the name of the [Collection].
    @Default('') String name,

    /// [system] is a flag that indicates if the [Collection] is a system collection.
    @Default(false) bool system,

    // TODO: Review dart package for rules (https://github.com/appsup-dart/expressions)

    /// [listRule] is the rule that determines if the user can list the [Collection].
    String? listRule,

    /// [viewRule] is the rule that determines if the user can view the [Collection].
    String? viewRule,

    /// [createRule] is the rule that determines if the user can create the [Collection].
    String? createRule,

    /// [updateRule] is the rule that determines if the user can update the [Collection].
    String? updateRule,

    /// [deleteRule] is the rule that determines if the user can delete the [Collection].
    String? deleteRule,

    //  /// [schema] is list fields for the [Collection].
    // @Default([]) List<Field> schema,

    /// [extra] is a map of additional properties.
    @JsonExtra() @Default({}) Map<String, dynamic> extra,
  }) = _Collection;

  /// Creates a [Collection] from Json map
  factory Collection.fromJson(Map<String, dynamic> json) =>
      _$CollectionFromJson(json);
}

@JsonEnum()
enum CollectionType {
  node,
  edge,
}
