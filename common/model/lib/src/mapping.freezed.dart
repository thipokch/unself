// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'mapping.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

Mapping _$MappingFromJson(Map<String, dynamic> json) {
  return _Mapping.fromJson(json);
}

/// @nodoc
mixin _$Mapping {
  /// [id] is unself unique identifier for the Mapping.
  String get id => throw _privateConstructorUsedError;

  /// [created] is the date and time when the [Mapping] was created inside unself app.
  DateTime get created => throw _privateConstructorUsedError;

  /// [updated] is the date and time when the [Mapping] was last updated inside unself app.
  DateTime get updated => throw _privateConstructorUsedError;

  /// [app] is the [App] the [Mapping] is for.
  App get app => throw _privateConstructorUsedError;

  /// [version] is the revision version of the [Mapping].
  /// See [Version] from pub_semver for more information.
  @JsonVersion()
  Version get version => throw _privateConstructorUsedError;

  /// [constraint] is the constraint version of the [App].
  /// See [VersionConstraint] from pub_semver for more information.
  ///
  /// [VersionConstraint.compatibleWith] is used to define the minimum version.
  @JsonVersionConstraint()
  VersionConstraint get constraint => throw _privateConstructorUsedError;

  /// [extra] is a map of additional properties.
  @JsonExtra()
  Map<String, dynamic> get extra => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $MappingCopyWith<Mapping> get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $MappingCopyWith<$Res> {
  factory $MappingCopyWith(Mapping value, $Res Function(Mapping) then) =
      _$MappingCopyWithImpl<$Res, Mapping>;
  @useResult
  $Res call(
      {String id,
      DateTime created,
      DateTime updated,
      App app,
      @JsonVersion() Version version,
      @JsonVersionConstraint() VersionConstraint constraint,
      @JsonExtra() Map<String, dynamic> extra});

  $AppCopyWith<$Res> get app;
}

/// @nodoc
class _$MappingCopyWithImpl<$Res, $Val extends Mapping>
    implements $MappingCopyWith<$Res> {
  _$MappingCopyWithImpl(this._value, this._then);

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
    Object? app = null,
    Object? version = null,
    Object? constraint = null,
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
      app: null == app
          ? _value.app
          : app // ignore: cast_nullable_to_non_nullable
              as App,
      version: null == version
          ? _value.version
          : version // ignore: cast_nullable_to_non_nullable
              as Version,
      constraint: null == constraint
          ? _value.constraint
          : constraint // ignore: cast_nullable_to_non_nullable
              as VersionConstraint,
      extra: null == extra
          ? _value.extra
          : extra // ignore: cast_nullable_to_non_nullable
              as Map<String, dynamic>,
    ) as $Val);
  }

  @override
  @pragma('vm:prefer-inline')
  $AppCopyWith<$Res> get app {
    return $AppCopyWith<$Res>(_value.app, (value) {
      return _then(_value.copyWith(app: value) as $Val);
    });
  }
}

/// @nodoc
abstract class _$$_MappingCopyWith<$Res> implements $MappingCopyWith<$Res> {
  factory _$$_MappingCopyWith(
          _$_Mapping value, $Res Function(_$_Mapping) then) =
      __$$_MappingCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {String id,
      DateTime created,
      DateTime updated,
      App app,
      @JsonVersion() Version version,
      @JsonVersionConstraint() VersionConstraint constraint,
      @JsonExtra() Map<String, dynamic> extra});

  @override
  $AppCopyWith<$Res> get app;
}

/// @nodoc
class __$$_MappingCopyWithImpl<$Res>
    extends _$MappingCopyWithImpl<$Res, _$_Mapping>
    implements _$$_MappingCopyWith<$Res> {
  __$$_MappingCopyWithImpl(_$_Mapping _value, $Res Function(_$_Mapping) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? created = null,
    Object? updated = null,
    Object? app = null,
    Object? version = null,
    Object? constraint = null,
    Object? extra = null,
  }) {
    return _then(_$_Mapping(
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
      app: null == app
          ? _value.app
          : app // ignore: cast_nullable_to_non_nullable
              as App,
      version: null == version
          ? _value.version
          : version // ignore: cast_nullable_to_non_nullable
              as Version,
      constraint: null == constraint
          ? _value.constraint
          : constraint // ignore: cast_nullable_to_non_nullable
              as VersionConstraint,
      extra: null == extra
          ? _value._extra
          : extra // ignore: cast_nullable_to_non_nullable
              as Map<String, dynamic>,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_Mapping implements _Mapping {
  const _$_Mapping(
      {required this.id,
      required this.created,
      required this.updated,
      required this.app,
      @JsonVersion() required this.version,
      @JsonVersionConstraint() required this.constraint,
      @JsonExtra() final Map<String, dynamic> extra = const {}})
      : _extra = extra;

  factory _$_Mapping.fromJson(Map<String, dynamic> json) =>
      _$$_MappingFromJson(json);

  /// [id] is unself unique identifier for the Mapping.
  @override
  final String id;

  /// [created] is the date and time when the [Mapping] was created inside unself app.
  @override
  final DateTime created;

  /// [updated] is the date and time when the [Mapping] was last updated inside unself app.
  @override
  final DateTime updated;

  /// [app] is the [App] the [Mapping] is for.
  @override
  final App app;

  /// [version] is the revision version of the [Mapping].
  /// See [Version] from pub_semver for more information.
  @override
  @JsonVersion()
  final Version version;

  /// [constraint] is the constraint version of the [App].
  /// See [VersionConstraint] from pub_semver for more information.
  ///
  /// [VersionConstraint.compatibleWith] is used to define the minimum version.
  @override
  @JsonVersionConstraint()
  final VersionConstraint constraint;

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
    return 'Mapping(id: $id, created: $created, updated: $updated, app: $app, version: $version, constraint: $constraint, extra: $extra)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_Mapping &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.created, created) || other.created == created) &&
            (identical(other.updated, updated) || other.updated == updated) &&
            (identical(other.app, app) || other.app == app) &&
            (identical(other.version, version) || other.version == version) &&
            (identical(other.constraint, constraint) ||
                other.constraint == constraint) &&
            const DeepCollectionEquality().equals(other._extra, _extra));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, id, created, updated, app,
      version, constraint, const DeepCollectionEquality().hash(_extra));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_MappingCopyWith<_$_Mapping> get copyWith =>
      __$$_MappingCopyWithImpl<_$_Mapping>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_MappingToJson(
      this,
    );
  }
}

abstract class _Mapping implements Mapping {
  const factory _Mapping(
      {required final String id,
      required final DateTime created,
      required final DateTime updated,
      required final App app,
      @JsonVersion() required final Version version,
      @JsonVersionConstraint() required final VersionConstraint constraint,
      @JsonExtra() final Map<String, dynamic> extra}) = _$_Mapping;

  factory _Mapping.fromJson(Map<String, dynamic> json) = _$_Mapping.fromJson;

  @override

  /// [id] is unself unique identifier for the Mapping.
  String get id;
  @override

  /// [created] is the date and time when the [Mapping] was created inside unself app.
  DateTime get created;
  @override

  /// [updated] is the date and time when the [Mapping] was last updated inside unself app.
  DateTime get updated;
  @override

  /// [app] is the [App] the [Mapping] is for.
  App get app;
  @override

  /// [version] is the revision version of the [Mapping].
  /// See [Version] from pub_semver for more information.
  @JsonVersion()
  Version get version;
  @override

  /// [constraint] is the constraint version of the [App].
  /// See [VersionConstraint] from pub_semver for more information.
  ///
  /// [VersionConstraint.compatibleWith] is used to define the minimum version.
  @JsonVersionConstraint()
  VersionConstraint get constraint;
  @override

  /// [extra] is a map of additional properties.
  @JsonExtra()
  Map<String, dynamic> get extra;
  @override
  @JsonKey(ignore: true)
  _$$_MappingCopyWith<_$_Mapping> get copyWith =>
      throw _privateConstructorUsedError;
}
