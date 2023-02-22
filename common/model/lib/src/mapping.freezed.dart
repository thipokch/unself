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
  /// [from] is the JSONpath to the property to map from.
  String get from => throw _privateConstructorUsedError;

  /// [to] is the JSONpath to the property to map to.
  String get to =>
      throw _privateConstructorUsedError; // /// [transform] is a function that transforms the value from the [from] property to the [to] property.
// String transform,
  /// [entries] is a list of [Mapping]s.
  List<Mapping> get fields => throw _privateConstructorUsedError;
  @JsonExtra()
  Map<String, dynamic> get options => throw _privateConstructorUsedError;

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
      {String from,
      String to,
      List<Mapping> fields,
      @JsonExtra() Map<String, dynamic> options,
      @JsonExtra() Map<String, dynamic> extra});
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
    Object? from = null,
    Object? to = null,
    Object? fields = null,
    Object? options = null,
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
      fields: null == fields
          ? _value.fields
          : fields // ignore: cast_nullable_to_non_nullable
              as List<Mapping>,
      options: null == options
          ? _value.options
          : options // ignore: cast_nullable_to_non_nullable
              as Map<String, dynamic>,
      extra: null == extra
          ? _value.extra
          : extra // ignore: cast_nullable_to_non_nullable
              as Map<String, dynamic>,
    ) as $Val);
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
      {String from,
      String to,
      List<Mapping> fields,
      @JsonExtra() Map<String, dynamic> options,
      @JsonExtra() Map<String, dynamic> extra});
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
    Object? from = null,
    Object? to = null,
    Object? fields = null,
    Object? options = null,
    Object? extra = null,
  }) {
    return _then(_$_Mapping(
      from: null == from
          ? _value.from
          : from // ignore: cast_nullable_to_non_nullable
              as String,
      to: null == to
          ? _value.to
          : to // ignore: cast_nullable_to_non_nullable
              as String,
      fields: null == fields
          ? _value._fields
          : fields // ignore: cast_nullable_to_non_nullable
              as List<Mapping>,
      options: null == options
          ? _value._options
          : options // ignore: cast_nullable_to_non_nullable
              as Map<String, dynamic>,
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
      {required this.from,
      required this.to,
      final List<Mapping> fields = const [],
      @JsonExtra() final Map<String, dynamic> options = const {},
      @JsonExtra() final Map<String, dynamic> extra = const {}})
      : _fields = fields,
        _options = options,
        _extra = extra;

  factory _$_Mapping.fromJson(Map<String, dynamic> json) =>
      _$$_MappingFromJson(json);

  /// [from] is the JSONpath to the property to map from.
  @override
  final String from;

  /// [to] is the JSONpath to the property to map to.
  @override
  final String to;
// /// [transform] is a function that transforms the value from the [from] property to the [to] property.
// String transform,
  /// [entries] is a list of [Mapping]s.
  final List<Mapping> _fields;
// /// [transform] is a function that transforms the value from the [from] property to the [to] property.
// String transform,
  /// [entries] is a list of [Mapping]s.
  @override
  @JsonKey()
  List<Mapping> get fields {
    if (_fields is EqualUnmodifiableListView) return _fields;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(_fields);
  }

  final Map<String, dynamic> _options;
  @override
  @JsonKey()
  @JsonExtra()
  Map<String, dynamic> get options {
    if (_options is EqualUnmodifiableMapView) return _options;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableMapView(_options);
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
    return 'Mapping(from: $from, to: $to, fields: $fields, options: $options, extra: $extra)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_Mapping &&
            (identical(other.from, from) || other.from == from) &&
            (identical(other.to, to) || other.to == to) &&
            const DeepCollectionEquality().equals(other._fields, _fields) &&
            const DeepCollectionEquality().equals(other._options, _options) &&
            const DeepCollectionEquality().equals(other._extra, _extra));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(
      runtimeType,
      from,
      to,
      const DeepCollectionEquality().hash(_fields),
      const DeepCollectionEquality().hash(_options),
      const DeepCollectionEquality().hash(_extra));

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
      {required final String from,
      required final String to,
      final List<Mapping> fields,
      @JsonExtra() final Map<String, dynamic> options,
      @JsonExtra() final Map<String, dynamic> extra}) = _$_Mapping;

  factory _Mapping.fromJson(Map<String, dynamic> json) = _$_Mapping.fromJson;

  @override

  /// [from] is the JSONpath to the property to map from.
  String get from;
  @override

  /// [to] is the JSONpath to the property to map to.
  String get to;
  @override // /// [transform] is a function that transforms the value from the [from] property to the [to] property.
// String transform,
  /// [entries] is a list of [Mapping]s.
  List<Mapping> get fields;
  @override
  @JsonExtra()
  Map<String, dynamic> get options;
  @override

  /// [extra] is a map of additional properties.
  @JsonExtra()
  Map<String, dynamic> get extra;
  @override
  @JsonKey(ignore: true)
  _$$_MappingCopyWith<_$_Mapping> get copyWith =>
      throw _privateConstructorUsedError;
}
