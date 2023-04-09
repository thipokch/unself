// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'prop_spec.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

PropSpec _$PropSpecFromJson(Map<String, dynamic> json) {
  return _PropSpec.fromJson(json);
}

/// @nodoc
mixin _$PropSpec {
  String get name => throw _privateConstructorUsedError;
  String get description => throw _privateConstructorUsedError;
  String get type => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $PropSpecCopyWith<PropSpec> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $PropSpecCopyWith<$Res> {
  factory $PropSpecCopyWith(PropSpec value, $Res Function(PropSpec) then) =
      _$PropSpecCopyWithImpl<$Res, PropSpec>;
  @useResult
  $Res call({String name, String description, String type});
}

/// @nodoc
class _$PropSpecCopyWithImpl<$Res, $Val extends PropSpec>
    implements $PropSpecCopyWith<$Res> {
  _$PropSpecCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? name = null,
    Object? description = null,
    Object? type = null,
  }) {
    return _then(_value.copyWith(
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      description: null == description
          ? _value.description
          : description // ignore: cast_nullable_to_non_nullable
              as String,
      type: null == type
          ? _value.type
          : type // ignore: cast_nullable_to_non_nullable
              as String,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$_PropSpecCopyWith<$Res> implements $PropSpecCopyWith<$Res> {
  factory _$$_PropSpecCopyWith(
          _$_PropSpec value, $Res Function(_$_PropSpec) then) =
      __$$_PropSpecCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({String name, String description, String type});
}

/// @nodoc
class __$$_PropSpecCopyWithImpl<$Res>
    extends _$PropSpecCopyWithImpl<$Res, _$_PropSpec>
    implements _$$_PropSpecCopyWith<$Res> {
  __$$_PropSpecCopyWithImpl(
      _$_PropSpec _value, $Res Function(_$_PropSpec) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? name = null,
    Object? description = null,
    Object? type = null,
  }) {
    return _then(_$_PropSpec(
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      description: null == description
          ? _value.description
          : description // ignore: cast_nullable_to_non_nullable
              as String,
      type: null == type
          ? _value.type
          : type // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_PropSpec implements _PropSpec {
  const _$_PropSpec(
      {required this.name, required this.description, required this.type});

  factory _$_PropSpec.fromJson(Map<String, dynamic> json) =>
      _$$_PropSpecFromJson(json);

  @override
  final String name;
  @override
  final String description;
  @override
  final String type;

  @override
  String toString() {
    return 'PropSpec(name: $name, description: $description, type: $type)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_PropSpec &&
            (identical(other.name, name) || other.name == name) &&
            (identical(other.description, description) ||
                other.description == description) &&
            (identical(other.type, type) || other.type == type));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, name, description, type);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_PropSpecCopyWith<_$_PropSpec> get copyWith =>
      __$$_PropSpecCopyWithImpl<_$_PropSpec>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_PropSpecToJson(
      this,
    );
  }
}

abstract class _PropSpec implements PropSpec {
  const factory _PropSpec(
      {required final String name,
      required final String description,
      required final String type}) = _$_PropSpec;

  factory _PropSpec.fromJson(Map<String, dynamic> json) = _$_PropSpec.fromJson;

  @override
  String get name;
  @override
  String get description;
  @override
  String get type;
  @override
  @JsonKey(ignore: true)
  _$$_PropSpecCopyWith<_$_PropSpec> get copyWith =>
      throw _privateConstructorUsedError;
}
