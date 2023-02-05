// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'field.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

Field _$FieldFromJson(Map<String, dynamic> json) {
  return _Field.fromJson(json);
}

/// @nodoc
mixin _$Field {
  /// [id] is unself unique identifier for the [Field].
  String get id => throw _privateConstructorUsedError;

  /// [created] is the date and time when the [Field] was created inside unself app.
  DateTime get created => throw _privateConstructorUsedError;

  /// [updated] is the date and time when the [Field] was last updated inside unself app.
  DateTime get updated => throw _privateConstructorUsedError;

  /// [type] is the data type of the [Field].
  FieldType get type => throw _privateConstructorUsedError;

  /// [name] is the name of the [Field].
  String get name => throw _privateConstructorUsedError;

  /// [system] is a flag that indicates if the [Field] is a system field.
  bool get system => throw _privateConstructorUsedError;

  /// [required] is a flag that indicates if the [Field] is required.
  bool get required => throw _privateConstructorUsedError;

  /// [unique] is a flag that indicates if the [Field] must be unique.
  bool get unique => throw _privateConstructorUsedError;

  /// [collection] is the [Collection] that the [Field] belongs to.
  Collection get collection => throw _privateConstructorUsedError;

  /// [extra] is a map of additional properties.
  @JsonExtra()
  Map<String, dynamic> get extra => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $FieldCopyWith<Field> get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $FieldCopyWith<$Res> {
  factory $FieldCopyWith(Field value, $Res Function(Field) then) =
      _$FieldCopyWithImpl<$Res, Field>;
  @useResult
  $Res call(
      {String id,
      DateTime created,
      DateTime updated,
      FieldType type,
      String name,
      bool system,
      bool required,
      bool unique,
      Collection collection,
      @JsonExtra() Map<String, dynamic> extra});

  $CollectionCopyWith<$Res> get collection;
}

/// @nodoc
class _$FieldCopyWithImpl<$Res, $Val extends Field>
    implements $FieldCopyWith<$Res> {
  _$FieldCopyWithImpl(this._value, this._then);

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
    Object? required = null,
    Object? unique = null,
    Object? collection = null,
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
              as FieldType,
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      system: null == system
          ? _value.system
          : system // ignore: cast_nullable_to_non_nullable
              as bool,
      required: null == required
          ? _value.required
          : required // ignore: cast_nullable_to_non_nullable
              as bool,
      unique: null == unique
          ? _value.unique
          : unique // ignore: cast_nullable_to_non_nullable
              as bool,
      collection: null == collection
          ? _value.collection
          : collection // ignore: cast_nullable_to_non_nullable
              as Collection,
      extra: null == extra
          ? _value.extra
          : extra // ignore: cast_nullable_to_non_nullable
              as Map<String, dynamic>,
    ) as $Val);
  }

  @override
  @pragma('vm:prefer-inline')
  $CollectionCopyWith<$Res> get collection {
    return $CollectionCopyWith<$Res>(_value.collection, (value) {
      return _then(_value.copyWith(collection: value) as $Val);
    });
  }
}

/// @nodoc
abstract class _$$_FieldCopyWith<$Res> implements $FieldCopyWith<$Res> {
  factory _$$_FieldCopyWith(_$_Field value, $Res Function(_$_Field) then) =
      __$$_FieldCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {String id,
      DateTime created,
      DateTime updated,
      FieldType type,
      String name,
      bool system,
      bool required,
      bool unique,
      Collection collection,
      @JsonExtra() Map<String, dynamic> extra});

  @override
  $CollectionCopyWith<$Res> get collection;
}

/// @nodoc
class __$$_FieldCopyWithImpl<$Res> extends _$FieldCopyWithImpl<$Res, _$_Field>
    implements _$$_FieldCopyWith<$Res> {
  __$$_FieldCopyWithImpl(_$_Field _value, $Res Function(_$_Field) _then)
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
    Object? required = null,
    Object? unique = null,
    Object? collection = null,
    Object? extra = null,
  }) {
    return _then(_$_Field(
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
              as FieldType,
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      system: null == system
          ? _value.system
          : system // ignore: cast_nullable_to_non_nullable
              as bool,
      required: null == required
          ? _value.required
          : required // ignore: cast_nullable_to_non_nullable
              as bool,
      unique: null == unique
          ? _value.unique
          : unique // ignore: cast_nullable_to_non_nullable
              as bool,
      collection: null == collection
          ? _value.collection
          : collection // ignore: cast_nullable_to_non_nullable
              as Collection,
      extra: null == extra
          ? _value._extra
          : extra // ignore: cast_nullable_to_non_nullable
              as Map<String, dynamic>,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_Field implements _Field {
  const _$_Field(
      {required this.id,
      required this.created,
      required this.updated,
      required this.type,
      required this.name,
      required this.system,
      required this.required,
      required this.unique,
      required this.collection,
      @JsonExtra() final Map<String, dynamic> extra = const {}})
      : _extra = extra;

  factory _$_Field.fromJson(Map<String, dynamic> json) =>
      _$$_FieldFromJson(json);

  /// [id] is unself unique identifier for the [Field].
  @override
  final String id;

  /// [created] is the date and time when the [Field] was created inside unself app.
  @override
  final DateTime created;

  /// [updated] is the date and time when the [Field] was last updated inside unself app.
  @override
  final DateTime updated;

  /// [type] is the data type of the [Field].
  @override
  final FieldType type;

  /// [name] is the name of the [Field].
  @override
  final String name;

  /// [system] is a flag that indicates if the [Field] is a system field.
  @override
  final bool system;

  /// [required] is a flag that indicates if the [Field] is required.
  @override
  final bool required;

  /// [unique] is a flag that indicates if the [Field] must be unique.
  @override
  final bool unique;

  /// [collection] is the [Collection] that the [Field] belongs to.
  @override
  final Collection collection;

  /// [extra] is a map of additional properties.
  final Map<String, dynamic> _extra;

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
    return 'Field(id: $id, created: $created, updated: $updated, type: $type, name: $name, system: $system, required: $required, unique: $unique, collection: $collection, extra: $extra)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_Field &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.created, created) || other.created == created) &&
            (identical(other.updated, updated) || other.updated == updated) &&
            (identical(other.type, type) || other.type == type) &&
            (identical(other.name, name) || other.name == name) &&
            (identical(other.system, system) || other.system == system) &&
            (identical(other.required, required) ||
                other.required == required) &&
            (identical(other.unique, unique) || other.unique == unique) &&
            (identical(other.collection, collection) ||
                other.collection == collection) &&
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
      required,
      unique,
      collection,
      const DeepCollectionEquality().hash(_extra));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_FieldCopyWith<_$_Field> get copyWith =>
      __$$_FieldCopyWithImpl<_$_Field>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_FieldToJson(
      this,
    );
  }
}

abstract class _Field implements Field {
  const factory _Field(
      {required final String id,
      required final DateTime created,
      required final DateTime updated,
      required final FieldType type,
      required final String name,
      required final bool system,
      required final bool required,
      required final bool unique,
      required final Collection collection,
      @JsonExtra() final Map<String, dynamic> extra}) = _$_Field;

  factory _Field.fromJson(Map<String, dynamic> json) = _$_Field.fromJson;

  @override

  /// [id] is unself unique identifier for the [Field].
  String get id;
  @override

  /// [created] is the date and time when the [Field] was created inside unself app.
  DateTime get created;
  @override

  /// [updated] is the date and time when the [Field] was last updated inside unself app.
  DateTime get updated;
  @override

  /// [type] is the data type of the [Field].
  FieldType get type;
  @override

  /// [name] is the name of the [Field].
  String get name;
  @override

  /// [system] is a flag that indicates if the [Field] is a system field.
  bool get system;
  @override

  /// [required] is a flag that indicates if the [Field] is required.
  bool get required;
  @override

  /// [unique] is a flag that indicates if the [Field] must be unique.
  bool get unique;
  @override

  /// [collection] is the [Collection] that the [Field] belongs to.
  Collection get collection;
  @override

  /// [extra] is a map of additional properties.
  @JsonExtra()
  Map<String, dynamic> get extra;
  @override
  @JsonKey(ignore: true)
  _$$_FieldCopyWith<_$_Field> get copyWith =>
      throw _privateConstructorUsedError;
}
