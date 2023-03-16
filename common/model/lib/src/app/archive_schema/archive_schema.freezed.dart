// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'archive_schema.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

ArchiveSchema _$ArchiveSchemaFromJson(Map<String, dynamic> json) {
  return _ArchiveSchema.fromJson(json);
}

/// @nodoc
mixin _$ArchiveSchema {
  /// [id] is unself unique identifier for the ArchiveSchema.
  String get id => throw _privateConstructorUsedError;

  /// [created] is the date and time when the [ArchiveSchema] was created inside unself app.
  DateTime get created => throw _privateConstructorUsedError;

  /// [updated] is the date and time when the [ArchiveSchema] was last updated inside unself app.
  DateTime get updated => throw _privateConstructorUsedError;

  /// [appId] is the id of the [App] the [ArchiveSchema] is for.
  String get appId => throw _privateConstructorUsedError;

  /// [version] is the revision version of the [ArchiveSchema].
  /// See [Version] from pub_semver for more information.
  @JsonVersion()
  Version get version => throw _privateConstructorUsedError;

  /// [constraint] is the constraint version of the [App].
  /// See [VersionConstraint] from pub_semver for more information.
  ///
  /// [VersionConstraint.compatibleWith] is used to define the minimum version.
  @JsonVersionConstraint()
  VersionConstraint get constraint => throw _privateConstructorUsedError;

  /// [entries] is a list of [ArchiveSchemaEntry]s.
  List<ArchiveSchemaPart> get part => throw _privateConstructorUsedError;

  /// [extra] is a map of additional properties.
  @JsonExtra()
  Map<String, dynamic> get extra => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $ArchiveSchemaCopyWith<ArchiveSchema> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $ArchiveSchemaCopyWith<$Res> {
  factory $ArchiveSchemaCopyWith(
          ArchiveSchema value, $Res Function(ArchiveSchema) then) =
      _$ArchiveSchemaCopyWithImpl<$Res, ArchiveSchema>;
  @useResult
  $Res call(
      {String id,
      DateTime created,
      DateTime updated,
      String appId,
      @JsonVersion() Version version,
      @JsonVersionConstraint() VersionConstraint constraint,
      List<ArchiveSchemaPart> part,
      @JsonExtra() Map<String, dynamic> extra});
}

/// @nodoc
class _$ArchiveSchemaCopyWithImpl<$Res, $Val extends ArchiveSchema>
    implements $ArchiveSchemaCopyWith<$Res> {
  _$ArchiveSchemaCopyWithImpl(this._value, this._then);

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
    Object? appId = null,
    Object? version = null,
    Object? constraint = null,
    Object? part = null,
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
      appId: null == appId
          ? _value.appId
          : appId // ignore: cast_nullable_to_non_nullable
              as String,
      version: null == version
          ? _value.version
          : version // ignore: cast_nullable_to_non_nullable
              as Version,
      constraint: null == constraint
          ? _value.constraint
          : constraint // ignore: cast_nullable_to_non_nullable
              as VersionConstraint,
      part: null == part
          ? _value.part
          : part // ignore: cast_nullable_to_non_nullable
              as List<ArchiveSchemaPart>,
      extra: null == extra
          ? _value.extra
          : extra // ignore: cast_nullable_to_non_nullable
              as Map<String, dynamic>,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$_ArchiveSchemaCopyWith<$Res>
    implements $ArchiveSchemaCopyWith<$Res> {
  factory _$$_ArchiveSchemaCopyWith(
          _$_ArchiveSchema value, $Res Function(_$_ArchiveSchema) then) =
      __$$_ArchiveSchemaCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {String id,
      DateTime created,
      DateTime updated,
      String appId,
      @JsonVersion() Version version,
      @JsonVersionConstraint() VersionConstraint constraint,
      List<ArchiveSchemaPart> part,
      @JsonExtra() Map<String, dynamic> extra});
}

/// @nodoc
class __$$_ArchiveSchemaCopyWithImpl<$Res>
    extends _$ArchiveSchemaCopyWithImpl<$Res, _$_ArchiveSchema>
    implements _$$_ArchiveSchemaCopyWith<$Res> {
  __$$_ArchiveSchemaCopyWithImpl(
      _$_ArchiveSchema _value, $Res Function(_$_ArchiveSchema) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? created = null,
    Object? updated = null,
    Object? appId = null,
    Object? version = null,
    Object? constraint = null,
    Object? part = null,
    Object? extra = null,
  }) {
    return _then(_$_ArchiveSchema(
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
      appId: null == appId
          ? _value.appId
          : appId // ignore: cast_nullable_to_non_nullable
              as String,
      version: null == version
          ? _value.version
          : version // ignore: cast_nullable_to_non_nullable
              as Version,
      constraint: null == constraint
          ? _value.constraint
          : constraint // ignore: cast_nullable_to_non_nullable
              as VersionConstraint,
      part: null == part
          ? _value._part
          : part // ignore: cast_nullable_to_non_nullable
              as List<ArchiveSchemaPart>,
      extra: null == extra
          ? _value._extra
          : extra // ignore: cast_nullable_to_non_nullable
              as Map<String, dynamic>,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_ArchiveSchema extends _ArchiveSchema {
  const _$_ArchiveSchema(
      {required this.id,
      required this.created,
      required this.updated,
      required this.appId,
      @JsonVersion() required this.version,
      @JsonVersionConstraint() required this.constraint,
      required final List<ArchiveSchemaPart> part,
      @JsonExtra() final Map<String, dynamic> extra = const {}})
      : _part = part,
        _extra = extra,
        super._();

  factory _$_ArchiveSchema.fromJson(Map<String, dynamic> json) =>
      _$$_ArchiveSchemaFromJson(json);

  /// [id] is unself unique identifier for the ArchiveSchema.
  @override
  final String id;

  /// [created] is the date and time when the [ArchiveSchema] was created inside unself app.
  @override
  final DateTime created;

  /// [updated] is the date and time when the [ArchiveSchema] was last updated inside unself app.
  @override
  final DateTime updated;

  /// [appId] is the id of the [App] the [ArchiveSchema] is for.
  @override
  final String appId;

  /// [version] is the revision version of the [ArchiveSchema].
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

  /// [entries] is a list of [ArchiveSchemaEntry]s.
  final List<ArchiveSchemaPart> _part;

  /// [entries] is a list of [ArchiveSchemaEntry]s.
  @override
  List<ArchiveSchemaPart> get part {
    if (_part is EqualUnmodifiableListView) return _part;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(_part);
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
    return 'ArchiveSchema(id: $id, created: $created, updated: $updated, appId: $appId, version: $version, constraint: $constraint, part: $part, extra: $extra)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_ArchiveSchema &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.created, created) || other.created == created) &&
            (identical(other.updated, updated) || other.updated == updated) &&
            (identical(other.appId, appId) || other.appId == appId) &&
            (identical(other.version, version) || other.version == version) &&
            (identical(other.constraint, constraint) ||
                other.constraint == constraint) &&
            const DeepCollectionEquality().equals(other._part, _part) &&
            const DeepCollectionEquality().equals(other._extra, _extra));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(
      runtimeType,
      id,
      created,
      updated,
      appId,
      version,
      constraint,
      const DeepCollectionEquality().hash(_part),
      const DeepCollectionEquality().hash(_extra));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_ArchiveSchemaCopyWith<_$_ArchiveSchema> get copyWith =>
      __$$_ArchiveSchemaCopyWithImpl<_$_ArchiveSchema>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_ArchiveSchemaToJson(
      this,
    );
  }
}

abstract class _ArchiveSchema extends ArchiveSchema {
  const factory _ArchiveSchema(
      {required final String id,
      required final DateTime created,
      required final DateTime updated,
      required final String appId,
      @JsonVersion() required final Version version,
      @JsonVersionConstraint() required final VersionConstraint constraint,
      required final List<ArchiveSchemaPart> part,
      @JsonExtra() final Map<String, dynamic> extra}) = _$_ArchiveSchema;
  const _ArchiveSchema._() : super._();

  factory _ArchiveSchema.fromJson(Map<String, dynamic> json) =
      _$_ArchiveSchema.fromJson;

  @override

  /// [id] is unself unique identifier for the ArchiveSchema.
  String get id;
  @override

  /// [created] is the date and time when the [ArchiveSchema] was created inside unself app.
  DateTime get created;
  @override

  /// [updated] is the date and time when the [ArchiveSchema] was last updated inside unself app.
  DateTime get updated;
  @override

  /// [appId] is the id of the [App] the [ArchiveSchema] is for.
  String get appId;
  @override

  /// [version] is the revision version of the [ArchiveSchema].
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

  /// [entries] is a list of [ArchiveSchemaEntry]s.
  List<ArchiveSchemaPart> get part;
  @override

  /// [extra] is a map of additional properties.
  @JsonExtra()
  Map<String, dynamic> get extra;
  @override
  @JsonKey(ignore: true)
  _$$_ArchiveSchemaCopyWith<_$_ArchiveSchema> get copyWith =>
      throw _privateConstructorUsedError;
}
