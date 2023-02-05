// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'archive.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

Archive _$ArchiveFromJson(Map<String, dynamic> json) {
  return _Archive.fromJson(json);
}

/// @nodoc
mixin _$Archive {
  /// [id] is unself unique identifier for the [Archive].
  String get id => throw _privateConstructorUsedError;

  /// [created] is the date and time when the [Archive] was created inside unself app.
  DateTime get created => throw _privateConstructorUsedError;

  /// [updated] is the date and time when the [Archive] was last updated inside unself app.
  DateTime get updated => throw _privateConstructorUsedError;

  /// [name] is the name of the [Archive].
  String get name => throw _privateConstructorUsedError;

  /// [account] is the owner of the [Archive] imported.
  Account get account => throw _privateConstructorUsedError;

  /// [mapping] is the [Mapping] used to import the data.
  Mapping get mapping => throw _privateConstructorUsedError;

  /// [extra] is a map of additional properties.
  @JsonExtra()
  Map<String, dynamic> get extra => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $ArchiveCopyWith<Archive> get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $ArchiveCopyWith<$Res> {
  factory $ArchiveCopyWith(Archive value, $Res Function(Archive) then) =
      _$ArchiveCopyWithImpl<$Res, Archive>;
  @useResult
  $Res call(
      {String id,
      DateTime created,
      DateTime updated,
      String name,
      Account account,
      Mapping mapping,
      @JsonExtra() Map<String, dynamic> extra});

  $AccountCopyWith<$Res> get account;
  $MappingCopyWith<$Res> get mapping;
}

/// @nodoc
class _$ArchiveCopyWithImpl<$Res, $Val extends Archive>
    implements $ArchiveCopyWith<$Res> {
  _$ArchiveCopyWithImpl(this._value, this._then);

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
    Object? name = null,
    Object? account = null,
    Object? mapping = null,
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
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      account: null == account
          ? _value.account
          : account // ignore: cast_nullable_to_non_nullable
              as Account,
      mapping: null == mapping
          ? _value.mapping
          : mapping // ignore: cast_nullable_to_non_nullable
              as Mapping,
      extra: null == extra
          ? _value.extra
          : extra // ignore: cast_nullable_to_non_nullable
              as Map<String, dynamic>,
    ) as $Val);
  }

  @override
  @pragma('vm:prefer-inline')
  $AccountCopyWith<$Res> get account {
    return $AccountCopyWith<$Res>(_value.account, (value) {
      return _then(_value.copyWith(account: value) as $Val);
    });
  }

  @override
  @pragma('vm:prefer-inline')
  $MappingCopyWith<$Res> get mapping {
    return $MappingCopyWith<$Res>(_value.mapping, (value) {
      return _then(_value.copyWith(mapping: value) as $Val);
    });
  }
}

/// @nodoc
abstract class _$$_ArchiveCopyWith<$Res> implements $ArchiveCopyWith<$Res> {
  factory _$$_ArchiveCopyWith(
          _$_Archive value, $Res Function(_$_Archive) then) =
      __$$_ArchiveCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {String id,
      DateTime created,
      DateTime updated,
      String name,
      Account account,
      Mapping mapping,
      @JsonExtra() Map<String, dynamic> extra});

  @override
  $AccountCopyWith<$Res> get account;
  @override
  $MappingCopyWith<$Res> get mapping;
}

/// @nodoc
class __$$_ArchiveCopyWithImpl<$Res>
    extends _$ArchiveCopyWithImpl<$Res, _$_Archive>
    implements _$$_ArchiveCopyWith<$Res> {
  __$$_ArchiveCopyWithImpl(_$_Archive _value, $Res Function(_$_Archive) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? created = null,
    Object? updated = null,
    Object? name = null,
    Object? account = null,
    Object? mapping = null,
    Object? extra = null,
  }) {
    return _then(_$_Archive(
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
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      account: null == account
          ? _value.account
          : account // ignore: cast_nullable_to_non_nullable
              as Account,
      mapping: null == mapping
          ? _value.mapping
          : mapping // ignore: cast_nullable_to_non_nullable
              as Mapping,
      extra: null == extra
          ? _value._extra
          : extra // ignore: cast_nullable_to_non_nullable
              as Map<String, dynamic>,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_Archive implements _Archive {
  const _$_Archive(
      {required this.id,
      required this.created,
      required this.updated,
      required this.name,
      required this.account,
      required this.mapping,
      @JsonExtra() final Map<String, dynamic> extra = const {}})
      : _extra = extra;

  factory _$_Archive.fromJson(Map<String, dynamic> json) =>
      _$$_ArchiveFromJson(json);

  /// [id] is unself unique identifier for the [Archive].
  @override
  final String id;

  /// [created] is the date and time when the [Archive] was created inside unself app.
  @override
  final DateTime created;

  /// [updated] is the date and time when the [Archive] was last updated inside unself app.
  @override
  final DateTime updated;

  /// [name] is the name of the [Archive].
  @override
  final String name;

  /// [account] is the owner of the [Archive] imported.
  @override
  final Account account;

  /// [mapping] is the [Mapping] used to import the data.
  @override
  final Mapping mapping;

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
    return 'Archive(id: $id, created: $created, updated: $updated, name: $name, account: $account, mapping: $mapping, extra: $extra)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_Archive &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.created, created) || other.created == created) &&
            (identical(other.updated, updated) || other.updated == updated) &&
            (identical(other.name, name) || other.name == name) &&
            (identical(other.account, account) || other.account == account) &&
            (identical(other.mapping, mapping) || other.mapping == mapping) &&
            const DeepCollectionEquality().equals(other._extra, _extra));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, id, created, updated, name,
      account, mapping, const DeepCollectionEquality().hash(_extra));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_ArchiveCopyWith<_$_Archive> get copyWith =>
      __$$_ArchiveCopyWithImpl<_$_Archive>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_ArchiveToJson(
      this,
    );
  }
}

abstract class _Archive implements Archive {
  const factory _Archive(
      {required final String id,
      required final DateTime created,
      required final DateTime updated,
      required final String name,
      required final Account account,
      required final Mapping mapping,
      @JsonExtra() final Map<String, dynamic> extra}) = _$_Archive;

  factory _Archive.fromJson(Map<String, dynamic> json) = _$_Archive.fromJson;

  @override

  /// [id] is unself unique identifier for the [Archive].
  String get id;
  @override

  /// [created] is the date and time when the [Archive] was created inside unself app.
  DateTime get created;
  @override

  /// [updated] is the date and time when the [Archive] was last updated inside unself app.
  DateTime get updated;
  @override

  /// [name] is the name of the [Archive].
  String get name;
  @override

  /// [account] is the owner of the [Archive] imported.
  Account get account;
  @override

  /// [mapping] is the [Mapping] used to import the data.
  Mapping get mapping;
  @override

  /// [extra] is a map of additional properties.
  @JsonExtra()
  Map<String, dynamic> get extra;
  @override
  @JsonKey(ignore: true)
  _$$_ArchiveCopyWith<_$_Archive> get copyWith =>
      throw _privateConstructorUsedError;
}
