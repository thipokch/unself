// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'archive_format.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

ArchiveFormat _$ArchiveFormatFromJson(Map<String, dynamic> json) {
  return _ArchiveFormat.fromJson(json);
}

/// @nodoc
mixin _$ArchiveFormat {
  /// [id] is unself unique identifier for the ArchiveFormat.
  String get id => throw _privateConstructorUsedError;

  /// [created] is the date and time when the [ArchiveFormat] was created inside unself app.
  DateTime get created => throw _privateConstructorUsedError;

  /// [updated] is the date and time when the [ArchiveFormat] was last updated inside unself app.
  DateTime get updated => throw _privateConstructorUsedError;

  /// [app] is the [App] the [ArchiveFormat] is for.
  App get app => throw _privateConstructorUsedError;

  /// [version] is the revision version of the [ArchiveFormat].
  /// See [Version] from pub_semver for more information.
  @JsonVersion()
  Version get version => throw _privateConstructorUsedError;

  /// [constraint] is the constraint version of the [App].
  /// See [VersionConstraint] from pub_semver for more information.
  ///
  /// [VersionConstraint.compatibleWith] is used to define the minimum version.
  @JsonVersionConstraint()
  VersionConstraint get constraint => throw _privateConstructorUsedError;

  /// [format] is the format of the [ArchiveFormat].
  ArchiveFileFormat get format => throw _privateConstructorUsedError;

  /// [entries] is a list of [ArchiveFormatEntry]s.
  List<Mapping> get mappings => throw _privateConstructorUsedError;

  /// [extra] is a map of additional properties.
  @JsonExtra()
  Map<String, dynamic> get extra => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $ArchiveFormatCopyWith<ArchiveFormat> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $ArchiveFormatCopyWith<$Res> {
  factory $ArchiveFormatCopyWith(
          ArchiveFormat value, $Res Function(ArchiveFormat) then) =
      _$ArchiveFormatCopyWithImpl<$Res, ArchiveFormat>;
  @useResult
  $Res call(
      {String id,
      DateTime created,
      DateTime updated,
      App app,
      @JsonVersion() Version version,
      @JsonVersionConstraint() VersionConstraint constraint,
      ArchiveFileFormat format,
      List<Mapping> mappings,
      @JsonExtra() Map<String, dynamic> extra});

  $AppCopyWith<$Res> get app;
}

/// @nodoc
class _$ArchiveFormatCopyWithImpl<$Res, $Val extends ArchiveFormat>
    implements $ArchiveFormatCopyWith<$Res> {
  _$ArchiveFormatCopyWithImpl(this._value, this._then);

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
    Object? format = null,
    Object? mappings = null,
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
      format: null == format
          ? _value.format
          : format // ignore: cast_nullable_to_non_nullable
              as ArchiveFileFormat,
      mappings: null == mappings
          ? _value.mappings
          : mappings // ignore: cast_nullable_to_non_nullable
              as List<Mapping>,
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
abstract class _$$_ArchiveFormatCopyWith<$Res>
    implements $ArchiveFormatCopyWith<$Res> {
  factory _$$_ArchiveFormatCopyWith(
          _$_ArchiveFormat value, $Res Function(_$_ArchiveFormat) then) =
      __$$_ArchiveFormatCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {String id,
      DateTime created,
      DateTime updated,
      App app,
      @JsonVersion() Version version,
      @JsonVersionConstraint() VersionConstraint constraint,
      ArchiveFileFormat format,
      List<Mapping> mappings,
      @JsonExtra() Map<String, dynamic> extra});

  @override
  $AppCopyWith<$Res> get app;
}

/// @nodoc
class __$$_ArchiveFormatCopyWithImpl<$Res>
    extends _$ArchiveFormatCopyWithImpl<$Res, _$_ArchiveFormat>
    implements _$$_ArchiveFormatCopyWith<$Res> {
  __$$_ArchiveFormatCopyWithImpl(
      _$_ArchiveFormat _value, $Res Function(_$_ArchiveFormat) _then)
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
    Object? format = null,
    Object? mappings = null,
    Object? extra = null,
  }) {
    return _then(_$_ArchiveFormat(
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
      format: null == format
          ? _value.format
          : format // ignore: cast_nullable_to_non_nullable
              as ArchiveFileFormat,
      mappings: null == mappings
          ? _value._mappings
          : mappings // ignore: cast_nullable_to_non_nullable
              as List<Mapping>,
      extra: null == extra
          ? _value._extra
          : extra // ignore: cast_nullable_to_non_nullable
              as Map<String, dynamic>,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_ArchiveFormat implements _ArchiveFormat {
  const _$_ArchiveFormat(
      {required this.id,
      required this.created,
      required this.updated,
      required this.app,
      @JsonVersion() required this.version,
      @JsonVersionConstraint() required this.constraint,
      required this.format,
      required final List<Mapping> mappings,
      @JsonExtra() final Map<String, dynamic> extra = const {}})
      : _mappings = mappings,
        _extra = extra;

  factory _$_ArchiveFormat.fromJson(Map<String, dynamic> json) =>
      _$$_ArchiveFormatFromJson(json);

  /// [id] is unself unique identifier for the ArchiveFormat.
  @override
  final String id;

  /// [created] is the date and time when the [ArchiveFormat] was created inside unself app.
  @override
  final DateTime created;

  /// [updated] is the date and time when the [ArchiveFormat] was last updated inside unself app.
  @override
  final DateTime updated;

  /// [app] is the [App] the [ArchiveFormat] is for.
  @override
  final App app;

  /// [version] is the revision version of the [ArchiveFormat].
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

  /// [format] is the format of the [ArchiveFormat].
  @override
  final ArchiveFileFormat format;

  /// [entries] is a list of [ArchiveFormatEntry]s.
  final List<Mapping> _mappings;

  /// [entries] is a list of [ArchiveFormatEntry]s.
  @override
  List<Mapping> get mappings {
    if (_mappings is EqualUnmodifiableListView) return _mappings;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(_mappings);
  }

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
    return 'ArchiveFormat(id: $id, created: $created, updated: $updated, app: $app, version: $version, constraint: $constraint, format: $format, mappings: $mappings, extra: $extra)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_ArchiveFormat &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.created, created) || other.created == created) &&
            (identical(other.updated, updated) || other.updated == updated) &&
            (identical(other.app, app) || other.app == app) &&
            (identical(other.version, version) || other.version == version) &&
            (identical(other.constraint, constraint) ||
                other.constraint == constraint) &&
            (identical(other.format, format) || other.format == format) &&
            const DeepCollectionEquality().equals(other._mappings, _mappings) &&
            const DeepCollectionEquality().equals(other._extra, _extra));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(
      runtimeType,
      id,
      created,
      updated,
      app,
      version,
      constraint,
      format,
      const DeepCollectionEquality().hash(_mappings),
      const DeepCollectionEquality().hash(_extra));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_ArchiveFormatCopyWith<_$_ArchiveFormat> get copyWith =>
      __$$_ArchiveFormatCopyWithImpl<_$_ArchiveFormat>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_ArchiveFormatToJson(
      this,
    );
  }
}

abstract class _ArchiveFormat implements ArchiveFormat {
  const factory _ArchiveFormat(
      {required final String id,
      required final DateTime created,
      required final DateTime updated,
      required final App app,
      @JsonVersion() required final Version version,
      @JsonVersionConstraint() required final VersionConstraint constraint,
      required final ArchiveFileFormat format,
      required final List<Mapping> mappings,
      @JsonExtra() final Map<String, dynamic> extra}) = _$_ArchiveFormat;

  factory _ArchiveFormat.fromJson(Map<String, dynamic> json) =
      _$_ArchiveFormat.fromJson;

  @override

  /// [id] is unself unique identifier for the ArchiveFormat.
  String get id;
  @override

  /// [created] is the date and time when the [ArchiveFormat] was created inside unself app.
  DateTime get created;
  @override

  /// [updated] is the date and time when the [ArchiveFormat] was last updated inside unself app.
  DateTime get updated;
  @override

  /// [app] is the [App] the [ArchiveFormat] is for.
  App get app;
  @override

  /// [version] is the revision version of the [ArchiveFormat].
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

  /// [format] is the format of the [ArchiveFormat].
  ArchiveFileFormat get format;
  @override

  /// [entries] is a list of [ArchiveFormatEntry]s.
  List<Mapping> get mappings;
  @override

  /// [extra] is a map of additional properties.
  @JsonExtra()
  Map<String, dynamic> get extra;
  @override
  @JsonKey(ignore: true)
  _$$_ArchiveFormatCopyWith<_$_ArchiveFormat> get copyWith =>
      throw _privateConstructorUsedError;
}
