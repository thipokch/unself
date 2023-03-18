// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'advertiser.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

Advertiser _$AdvertiserFromJson(Map<String, dynamic> json) {
  return _Advertiser.fromJson(json);
}

/// @nodoc
mixin _$Advertiser {
  @JsonString()
  String get id =>
      throw _privateConstructorUsedError; // @JsonDateTime() required DateTime created,
// @JsonDateTime() required DateTime updated,
  String get archiveId => throw _privateConstructorUsedError;

  /// [name] is the name used by the [Advertiser] on the [Advertiser].
  String get name => throw _privateConstructorUsedError;

  /// [extra] is a map of additional properties.
  @JsonExtra()
  Map<String, dynamic> get extra => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $AdvertiserCopyWith<Advertiser> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $AdvertiserCopyWith<$Res> {
  factory $AdvertiserCopyWith(
          Advertiser value, $Res Function(Advertiser) then) =
      _$AdvertiserCopyWithImpl<$Res, Advertiser>;
  @useResult
  $Res call(
      {@JsonString() String id,
      String archiveId,
      String name,
      @JsonExtra() Map<String, dynamic> extra});
}

/// @nodoc
class _$AdvertiserCopyWithImpl<$Res, $Val extends Advertiser>
    implements $AdvertiserCopyWith<$Res> {
  _$AdvertiserCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? archiveId = null,
    Object? name = null,
    Object? extra = null,
  }) {
    return _then(_value.copyWith(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      archiveId: null == archiveId
          ? _value.archiveId
          : archiveId // ignore: cast_nullable_to_non_nullable
              as String,
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      extra: null == extra
          ? _value.extra
          : extra // ignore: cast_nullable_to_non_nullable
              as Map<String, dynamic>,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$_AdvertiserCopyWith<$Res>
    implements $AdvertiserCopyWith<$Res> {
  factory _$$_AdvertiserCopyWith(
          _$_Advertiser value, $Res Function(_$_Advertiser) then) =
      __$$_AdvertiserCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {@JsonString() String id,
      String archiveId,
      String name,
      @JsonExtra() Map<String, dynamic> extra});
}

/// @nodoc
class __$$_AdvertiserCopyWithImpl<$Res>
    extends _$AdvertiserCopyWithImpl<$Res, _$_Advertiser>
    implements _$$_AdvertiserCopyWith<$Res> {
  __$$_AdvertiserCopyWithImpl(
      _$_Advertiser _value, $Res Function(_$_Advertiser) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? archiveId = null,
    Object? name = null,
    Object? extra = null,
  }) {
    return _then(_$_Advertiser(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      archiveId: null == archiveId
          ? _value.archiveId
          : archiveId // ignore: cast_nullable_to_non_nullable
              as String,
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      extra: null == extra
          ? _value._extra
          : extra // ignore: cast_nullable_to_non_nullable
              as Map<String, dynamic>,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_Advertiser extends _Advertiser {
  const _$_Advertiser(
      {@JsonString() required this.id,
      required this.archiveId,
      required this.name,
      @JsonExtra() final Map<String, dynamic> extra = const {}})
      : _extra = extra,
        super._();

  factory _$_Advertiser.fromJson(Map<String, dynamic> json) =>
      _$$_AdvertiserFromJson(json);

  @override
  @JsonString()
  final String id;
// @JsonDateTime() required DateTime created,
// @JsonDateTime() required DateTime updated,
  @override
  final String archiveId;

  /// [name] is the name used by the [Advertiser] on the [Advertiser].
  @override
  final String name;

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
    return 'Advertiser(id: $id, archiveId: $archiveId, name: $name, extra: $extra)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_Advertiser &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.archiveId, archiveId) ||
                other.archiveId == archiveId) &&
            (identical(other.name, name) || other.name == name) &&
            const DeepCollectionEquality().equals(other._extra, _extra));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, id, archiveId, name,
      const DeepCollectionEquality().hash(_extra));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_AdvertiserCopyWith<_$_Advertiser> get copyWith =>
      __$$_AdvertiserCopyWithImpl<_$_Advertiser>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_AdvertiserToJson(
      this,
    );
  }
}

abstract class _Advertiser extends Advertiser {
  const factory _Advertiser(
      {@JsonString() required final String id,
      required final String archiveId,
      required final String name,
      @JsonExtra() final Map<String, dynamic> extra}) = _$_Advertiser;
  const _Advertiser._() : super._();

  factory _Advertiser.fromJson(Map<String, dynamic> json) =
      _$_Advertiser.fromJson;

  @override
  @JsonString()
  String get id;
  @override // @JsonDateTime() required DateTime created,
// @JsonDateTime() required DateTime updated,
  String get archiveId;
  @override

  /// [name] is the name used by the [Advertiser] on the [Advertiser].
  String get name;
  @override

  /// [extra] is a map of additional properties.
  @JsonExtra()
  Map<String, dynamic> get extra;
  @override
  @JsonKey(ignore: true)
  _$$_AdvertiserCopyWith<_$_Advertiser> get copyWith =>
      throw _privateConstructorUsedError;
}
