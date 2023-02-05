// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'collection.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

Collection _$CollectionFromJson(Map<String, dynamic> json) {
  return _Collection.fromJson(json);
}

/// @nodoc
mixin _$Collection {
  /// [id] is unself unique identifier for the [Collection].
  String get id => throw _privateConstructorUsedError;

  /// [created] is the date and time when the [Collection] was created inside unself app.
  DateTime get created => throw _privateConstructorUsedError;

  /// [updated] is the date and time when the [Collection] was last updated inside unself app.
  DateTime get updated => throw _privateConstructorUsedError;

  /// [type] is the type of the [Collection].
  CollectionType get type => throw _privateConstructorUsedError;

  /// [name] is the name of the [Collection].
  String get name => throw _privateConstructorUsedError;

  /// [system] is a flag that indicates if the [Collection] is a system collection.
  bool get system =>
      throw _privateConstructorUsedError; // TODO: Review dart package for rules (https://github.com/appsup-dart/expressions)
  /// [listRule] is the rule that determines if the user can list the [Collection].
  String? get listRule => throw _privateConstructorUsedError;

  /// [viewRule] is the rule that determines if the user can view the [Collection].
  String? get viewRule => throw _privateConstructorUsedError;

  /// [createRule] is the rule that determines if the user can create the [Collection].
  String? get createRule => throw _privateConstructorUsedError;

  /// [updateRule] is the rule that determines if the user can update the [Collection].
  String? get updateRule => throw _privateConstructorUsedError;

  /// [deleteRule] is the rule that determines if the user can delete the [Collection].
  String? get deleteRule =>
      throw _privateConstructorUsedError; //  /// [schema] is list fields for the [Collection].
// @Default([]) List<Field> schema,
  /// [extra] is a map of additional properties.
  @JsonExtra()
  Map<String, dynamic> get extra => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $CollectionCopyWith<Collection> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $CollectionCopyWith<$Res> {
  factory $CollectionCopyWith(
          Collection value, $Res Function(Collection) then) =
      _$CollectionCopyWithImpl<$Res, Collection>;
  @useResult
  $Res call(
      {String id,
      DateTime created,
      DateTime updated,
      CollectionType type,
      String name,
      bool system,
      String? listRule,
      String? viewRule,
      String? createRule,
      String? updateRule,
      String? deleteRule,
      @JsonExtra() Map<String, dynamic> extra});
}

/// @nodoc
class _$CollectionCopyWithImpl<$Res, $Val extends Collection>
    implements $CollectionCopyWith<$Res> {
  _$CollectionCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? created = null,
    Object? updated = null,
    Object? type = null,
    Object? name = null,
    Object? system = null,
    Object? listRule = freezed,
    Object? viewRule = freezed,
    Object? createRule = freezed,
    Object? updateRule = freezed,
    Object? deleteRule = freezed,
    Object? extra = null,
  }) {
    return _then(_value.copyWith(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      created: null == created
          ? _value.created
          : created // ignore: cast_nullable_to_non_nullable
              as DateTime,
      updated: null == updated
          ? _value.updated
          : updated // ignore: cast_nullable_to_non_nullable
              as DateTime,
      type: null == type
          ? _value.type
          : type // ignore: cast_nullable_to_non_nullable
              as CollectionType,
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      system: null == system
          ? _value.system
          : system // ignore: cast_nullable_to_non_nullable
              as bool,
      listRule: freezed == listRule
          ? _value.listRule
          : listRule // ignore: cast_nullable_to_non_nullable
              as String?,
      viewRule: freezed == viewRule
          ? _value.viewRule
          : viewRule // ignore: cast_nullable_to_non_nullable
              as String?,
      createRule: freezed == createRule
          ? _value.createRule
          : createRule // ignore: cast_nullable_to_non_nullable
              as String?,
      updateRule: freezed == updateRule
          ? _value.updateRule
          : updateRule // ignore: cast_nullable_to_non_nullable
              as String?,
      deleteRule: freezed == deleteRule
          ? _value.deleteRule
          : deleteRule // ignore: cast_nullable_to_non_nullable
              as String?,
      extra: null == extra
          ? _value.extra
          : extra // ignore: cast_nullable_to_non_nullable
              as Map<String, dynamic>,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$_CollectionCopyWith<$Res>
    implements $CollectionCopyWith<$Res> {
  factory _$$_CollectionCopyWith(
          _$_Collection value, $Res Function(_$_Collection) then) =
      __$$_CollectionCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {String id,
      DateTime created,
      DateTime updated,
      CollectionType type,
      String name,
      bool system,
      String? listRule,
      String? viewRule,
      String? createRule,
      String? updateRule,
      String? deleteRule,
      @JsonExtra() Map<String, dynamic> extra});
}

/// @nodoc
class __$$_CollectionCopyWithImpl<$Res>
    extends _$CollectionCopyWithImpl<$Res, _$_Collection>
    implements _$$_CollectionCopyWith<$Res> {
  __$$_CollectionCopyWithImpl(
      _$_Collection _value, $Res Function(_$_Collection) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? created = null,
    Object? updated = null,
    Object? type = null,
    Object? name = null,
    Object? system = null,
    Object? listRule = freezed,
    Object? viewRule = freezed,
    Object? createRule = freezed,
    Object? updateRule = freezed,
    Object? deleteRule = freezed,
    Object? extra = null,
  }) {
    return _then(_$_Collection(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      created: null == created
          ? _value.created
          : created // ignore: cast_nullable_to_non_nullable
              as DateTime,
      updated: null == updated
          ? _value.updated
          : updated // ignore: cast_nullable_to_non_nullable
              as DateTime,
      type: null == type
          ? _value.type
          : type // ignore: cast_nullable_to_non_nullable
              as CollectionType,
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      system: null == system
          ? _value.system
          : system // ignore: cast_nullable_to_non_nullable
              as bool,
      listRule: freezed == listRule
          ? _value.listRule
          : listRule // ignore: cast_nullable_to_non_nullable
              as String?,
      viewRule: freezed == viewRule
          ? _value.viewRule
          : viewRule // ignore: cast_nullable_to_non_nullable
              as String?,
      createRule: freezed == createRule
          ? _value.createRule
          : createRule // ignore: cast_nullable_to_non_nullable
              as String?,
      updateRule: freezed == updateRule
          ? _value.updateRule
          : updateRule // ignore: cast_nullable_to_non_nullable
              as String?,
      deleteRule: freezed == deleteRule
          ? _value.deleteRule
          : deleteRule // ignore: cast_nullable_to_non_nullable
              as String?,
      extra: null == extra
          ? _value._extra
          : extra // ignore: cast_nullable_to_non_nullable
              as Map<String, dynamic>,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_Collection implements _Collection {
  const _$_Collection(
      {required this.id,
      required this.created,
      required this.updated,
      required this.type,
      this.name = '',
      this.system = false,
      this.listRule,
      this.viewRule,
      this.createRule,
      this.updateRule,
      this.deleteRule,
      @JsonExtra() final Map<String, dynamic> extra = const {}})
      : _extra = extra;

  factory _$_Collection.fromJson(Map<String, dynamic> json) =>
      _$$_CollectionFromJson(json);

  /// [id] is unself unique identifier for the [Collection].
  @override
  final String id;

  /// [created] is the date and time when the [Collection] was created inside unself app.
  @override
  final DateTime created;

  /// [updated] is the date and time when the [Collection] was last updated inside unself app.
  @override
  final DateTime updated;

  /// [type] is the type of the [Collection].
  @override
  final CollectionType type;

  /// [name] is the name of the [Collection].
  @override
  @JsonKey()
  final String name;

  /// [system] is a flag that indicates if the [Collection] is a system collection.
  @override
  @JsonKey()
  final bool system;
// TODO: Review dart package for rules (https://github.com/appsup-dart/expressions)
  /// [listRule] is the rule that determines if the user can list the [Collection].
  @override
  final String? listRule;

  /// [viewRule] is the rule that determines if the user can view the [Collection].
  @override
  final String? viewRule;

  /// [createRule] is the rule that determines if the user can create the [Collection].
  @override
  final String? createRule;

  /// [updateRule] is the rule that determines if the user can update the [Collection].
  @override
  final String? updateRule;

  /// [deleteRule] is the rule that determines if the user can delete the [Collection].
  @override
  final String? deleteRule;
//  /// [schema] is list fields for the [Collection].
// @Default([]) List<Field> schema,
  /// [extra] is a map of additional properties.
  final Map<String, dynamic> _extra;
//  /// [schema] is list fields for the [Collection].
// @Default([]) List<Field> schema,
  /// [extra] is a map of additional properties.
  @override
  @JsonKey()
  @JsonExtra()
  Map<String, dynamic> get extra {
    if (_extra is EqualUnmodifiableMapView) return _extra;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableMapView(_extra);
  }

  @override
  String toString() {
    return 'Collection(id: $id, created: $created, updated: $updated, type: $type, name: $name, system: $system, listRule: $listRule, viewRule: $viewRule, createRule: $createRule, updateRule: $updateRule, deleteRule: $deleteRule, extra: $extra)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_Collection &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.created, created) || other.created == created) &&
            (identical(other.updated, updated) || other.updated == updated) &&
            (identical(other.type, type) || other.type == type) &&
            (identical(other.name, name) || other.name == name) &&
            (identical(other.system, system) || other.system == system) &&
            (identical(other.listRule, listRule) ||
                other.listRule == listRule) &&
            (identical(other.viewRule, viewRule) ||
                other.viewRule == viewRule) &&
            (identical(other.createRule, createRule) ||
                other.createRule == createRule) &&
            (identical(other.updateRule, updateRule) ||
                other.updateRule == updateRule) &&
            (identical(other.deleteRule, deleteRule) ||
                other.deleteRule == deleteRule) &&
            const DeepCollectionEquality().equals(other._extra, _extra));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(
      runtimeType,
      id,
      created,
      updated,
      type,
      name,
      system,
      listRule,
      viewRule,
      createRule,
      updateRule,
      deleteRule,
      const DeepCollectionEquality().hash(_extra));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_CollectionCopyWith<_$_Collection> get copyWith =>
      __$$_CollectionCopyWithImpl<_$_Collection>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_CollectionToJson(
      this,
    );
  }
}

abstract class _Collection implements Collection {
  const factory _Collection(
      {required final String id,
      required final DateTime created,
      required final DateTime updated,
      required final CollectionType type,
      final String name,
      final bool system,
      final String? listRule,
      final String? viewRule,
      final String? createRule,
      final String? updateRule,
      final String? deleteRule,
      @JsonExtra() final Map<String, dynamic> extra}) = _$_Collection;

  factory _Collection.fromJson(Map<String, dynamic> json) =
      _$_Collection.fromJson;

  @override

  /// [id] is unself unique identifier for the [Collection].
  String get id;
  @override

  /// [created] is the date and time when the [Collection] was created inside unself app.
  DateTime get created;
  @override

  /// [updated] is the date and time when the [Collection] was last updated inside unself app.
  DateTime get updated;
  @override

  /// [type] is the type of the [Collection].
  CollectionType get type;
  @override

  /// [name] is the name of the [Collection].
  String get name;
  @override

  /// [system] is a flag that indicates if the [Collection] is a system collection.
  bool get system;
  @override // TODO: Review dart package for rules (https://github.com/appsup-dart/expressions)
  /// [listRule] is the rule that determines if the user can list the [Collection].
  String? get listRule;
  @override

  /// [viewRule] is the rule that determines if the user can view the [Collection].
  String? get viewRule;
  @override

  /// [createRule] is the rule that determines if the user can create the [Collection].
  String? get createRule;
  @override

  /// [updateRule] is the rule that determines if the user can update the [Collection].
  String? get updateRule;
  @override

  /// [deleteRule] is the rule that determines if the user can delete the [Collection].
  String? get deleteRule;
  @override //  /// [schema] is list fields for the [Collection].
// @Default([]) List<Field> schema,
  /// [extra] is a map of additional properties.
  @JsonExtra()
  Map<String, dynamic> get extra;
  @override
  @JsonKey(ignore: true)
  _$$_CollectionCopyWith<_$_Collection> get copyWith =>
      throw _privateConstructorUsedError;
}
