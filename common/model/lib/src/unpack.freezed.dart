// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'unpack.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

Unpack _$UnpackFromJson(Map<String, dynamic> json) {
  return _Unpack.fromJson(json);
}

/// @nodoc
mixin _$Unpack {
  String get id => throw _privateConstructorUsedError;
  String get name => throw _privateConstructorUsedError;
  String get type => throw _privateConstructorUsedError;
  Map<String, dynamic> get options => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $UnpackCopyWith<Unpack> get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $UnpackCopyWith<$Res> {
  factory $UnpackCopyWith(Unpack value, $Res Function(Unpack) then) =
      _$UnpackCopyWithImpl<$Res, Unpack>;
  @useResult
  $Res call(
      {String id, String name, String type, Map<String, dynamic> options});
}

/// @nodoc
class _$UnpackCopyWithImpl<$Res, $Val extends Unpack>
    implements $UnpackCopyWith<$Res> {
  _$UnpackCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? name = null,
    Object? type = null,
    Object? options = null,
  }) {
    return _then(_value.copyWith(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      type: null == type
          ? _value.type
          : type // ignore: cast_nullable_to_non_nullable
              as String,
      options: null == options
          ? _value.options
          : options // ignore: cast_nullable_to_non_nullable
              as Map<String, dynamic>,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$_UnpackCopyWith<$Res> implements $UnpackCopyWith<$Res> {
  factory _$$_UnpackCopyWith(_$_Unpack value, $Res Function(_$_Unpack) then) =
      __$$_UnpackCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {String id, String name, String type, Map<String, dynamic> options});
}

/// @nodoc
class __$$_UnpackCopyWithImpl<$Res>
    extends _$UnpackCopyWithImpl<$Res, _$_Unpack>
    implements _$$_UnpackCopyWith<$Res> {
  __$$_UnpackCopyWithImpl(_$_Unpack _value, $Res Function(_$_Unpack) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? name = null,
    Object? type = null,
    Object? options = null,
  }) {
    return _then(_$_Unpack(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      type: null == type
          ? _value.type
          : type // ignore: cast_nullable_to_non_nullable
              as String,
      options: null == options
          ? _value._options
          : options // ignore: cast_nullable_to_non_nullable
              as Map<String, dynamic>,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_Unpack implements _Unpack {
  const _$_Unpack(
      {this.id = '',
      this.name = '',
      this.type = '',
      final Map<String, dynamic> options = const {}})
      : _options = options;

  factory _$_Unpack.fromJson(Map<String, dynamic> json) =>
      _$$_UnpackFromJson(json);

  @override
  @JsonKey()
  final String id;
  @override
  @JsonKey()
  final String name;
  @override
  @JsonKey()
  final String type;
  final Map<String, dynamic> _options;
  @override
  @JsonKey()
  Map<String, dynamic> get options {
    if (_options is EqualUnmodifiableMapView) return _options;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableMapView(_options);
  }

  @override
  String toString() {
    return 'Unpack(id: $id, name: $name, type: $type, options: $options)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_Unpack &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.name, name) || other.name == name) &&
            (identical(other.type, type) || other.type == type) &&
            const DeepCollectionEquality().equals(other._options, _options));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, id, name, type,
      const DeepCollectionEquality().hash(_options));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_UnpackCopyWith<_$_Unpack> get copyWith =>
      __$$_UnpackCopyWithImpl<_$_Unpack>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_UnpackToJson(
      this,
    );
  }
}

abstract class _Unpack implements Unpack {
  const factory _Unpack(
      {final String id,
      final String name,
      final String type,
      final Map<String, dynamic> options}) = _$_Unpack;

  factory _Unpack.fromJson(Map<String, dynamic> json) = _$_Unpack.fromJson;

  @override
  String get id;
  @override
  String get name;
  @override
  String get type;
  @override
  Map<String, dynamic> get options;
  @override
  @JsonKey(ignore: true)
  _$$_UnpackCopyWith<_$_Unpack> get copyWith =>
      throw _privateConstructorUsedError;
}
