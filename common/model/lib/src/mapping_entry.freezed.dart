// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'mapping_entry.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

MappingEntry _$MappingEntryFromJson(Map<String, dynamic> json) {
  return _MappingEntry.fromJson(json);
}

/// @nodoc
mixin _$MappingEntry {
  /// [from] is the JSONpath to the property to map from.
  String get from => throw _privateConstructorUsedError;

  /// [to] is the JSONpath to the property to map to.
  String get to =>
      throw _privateConstructorUsedError; // /// [transform] is a function that transforms the value from the [from] property to the [to] property.
// String transform,
  /// [extra] is a map of additional properties.
  @JsonExtra()
  Map<String, dynamic> get extra => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $MappingEntryCopyWith<MappingEntry> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $MappingEntryCopyWith<$Res> {
  factory $MappingEntryCopyWith(
          MappingEntry value, $Res Function(MappingEntry) then) =
      _$MappingEntryCopyWithImpl<$Res, MappingEntry>;
  @useResult
  $Res call({String from, String to, @JsonExtra() Map<String, dynamic> extra});
}

/// @nodoc
class _$MappingEntryCopyWithImpl<$Res, $Val extends MappingEntry>
    implements $MappingEntryCopyWith<$Res> {
  _$MappingEntryCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? from = null,
    Object? to = null,
    Object? extra = null,
  }) {
    return _then(_value.copyWith(
      from: null == from
          ? _value.from
          : from // ignore: cast_nullable_to_non_nullable
              as String,
      to: null == to
          ? _value.to
          : to // ignore: cast_nullable_to_non_nullable
              as String,
      extra: null == extra
          ? _value.extra
          : extra // ignore: cast_nullable_to_non_nullable
              as Map<String, dynamic>,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$_MappingEntryCopyWith<$Res>
    implements $MappingEntryCopyWith<$Res> {
  factory _$$_MappingEntryCopyWith(
          _$_MappingEntry value, $Res Function(_$_MappingEntry) then) =
      __$$_MappingEntryCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({String from, String to, @JsonExtra() Map<String, dynamic> extra});
}

/// @nodoc
class __$$_MappingEntryCopyWithImpl<$Res>
    extends _$MappingEntryCopyWithImpl<$Res, _$_MappingEntry>
    implements _$$_MappingEntryCopyWith<$Res> {
  __$$_MappingEntryCopyWithImpl(
      _$_MappingEntry _value, $Res Function(_$_MappingEntry) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? from = null,
    Object? to = null,
    Object? extra = null,
  }) {
    return _then(_$_MappingEntry(
      from: null == from
          ? _value.from
          : from // ignore: cast_nullable_to_non_nullable
              as String,
      to: null == to
          ? _value.to
          : to // ignore: cast_nullable_to_non_nullable
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
class _$_MappingEntry implements _MappingEntry {
  const _$_MappingEntry(
      {required this.from,
      required this.to,
      @JsonExtra() final Map<String, dynamic> extra = const {}})
      : _extra = extra;

  factory _$_MappingEntry.fromJson(Map<String, dynamic> json) =>
      _$$_MappingEntryFromJson(json);

  /// [from] is the JSONpath to the property to map from.
  @override
  final String from;

  /// [to] is the JSONpath to the property to map to.
  @override
  final String to;
// /// [transform] is a function that transforms the value from the [from] property to the [to] property.
// String transform,
  /// [extra] is a map of additional properties.
  final Map<String, dynamic> _extra;
// /// [transform] is a function that transforms the value from the [from] property to the [to] property.
// String transform,
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
    return 'MappingEntry(from: $from, to: $to, extra: $extra)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_MappingEntry &&
            (identical(other.from, from) || other.from == from) &&
            (identical(other.to, to) || other.to == to) &&
            const DeepCollectionEquality().equals(other._extra, _extra));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(
      runtimeType, from, to, const DeepCollectionEquality().hash(_extra));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_MappingEntryCopyWith<_$_MappingEntry> get copyWith =>
      __$$_MappingEntryCopyWithImpl<_$_MappingEntry>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_MappingEntryToJson(
      this,
    );
  }
}

abstract class _MappingEntry implements MappingEntry {
  const factory _MappingEntry(
      {required final String from,
      required final String to,
      @JsonExtra() final Map<String, dynamic> extra}) = _$_MappingEntry;

  factory _MappingEntry.fromJson(Map<String, dynamic> json) =
      _$_MappingEntry.fromJson;

  @override

  /// [from] is the JSONpath to the property to map from.
  String get from;
  @override

  /// [to] is the JSONpath to the property to map to.
  String get to;
  @override // /// [transform] is a function that transforms the value from the [from] property to the [to] property.
// String transform,
  /// [extra] is a map of additional properties.
  @JsonExtra()
  Map<String, dynamic> get extra;
  @override
  @JsonKey(ignore: true)
  _$$_MappingEntryCopyWith<_$_MappingEntry> get copyWith =>
      throw _privateConstructorUsedError;
}
