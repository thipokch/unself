// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'json_spec.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

JsonSpec _$JsonSpecFromJson(Map<String, dynamic> json) {
  return _JsonSpec.fromJson(json);
}

/// @nodoc
mixin _$JsonSpec {
  String get name => throw _privateConstructorUsedError;
  String get description => throw _privateConstructorUsedError;
  String get type => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $JsonSpecCopyWith<JsonSpec> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $JsonSpecCopyWith<$Res> {
  factory $JsonSpecCopyWith(JsonSpec value, $Res Function(JsonSpec) then) =
      _$JsonSpecCopyWithImpl<$Res, JsonSpec>;
  @useResult
  $Res call({String name, String description, String type});
}

/// @nodoc
class _$JsonSpecCopyWithImpl<$Res, $Val extends JsonSpec>
    implements $JsonSpecCopyWith<$Res> {
  _$JsonSpecCopyWithImpl(this._value, this._then);

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
abstract class _$$_JsonSpecCopyWith<$Res> implements $JsonSpecCopyWith<$Res> {
  factory _$$_JsonSpecCopyWith(
          _$_JsonSpec value, $Res Function(_$_JsonSpec) then) =
      __$$_JsonSpecCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({String name, String description, String type});
}

/// @nodoc
class __$$_JsonSpecCopyWithImpl<$Res>
    extends _$JsonSpecCopyWithImpl<$Res, _$_JsonSpec>
    implements _$$_JsonSpecCopyWith<$Res> {
  __$$_JsonSpecCopyWithImpl(
      _$_JsonSpec _value, $Res Function(_$_JsonSpec) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? name = null,
    Object? description = null,
    Object? type = null,
  }) {
    return _then(_$_JsonSpec(
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
class _$_JsonSpec extends _JsonSpec {
  const _$_JsonSpec(
      {required this.name, required this.description, required this.type})
      : super._();

  factory _$_JsonSpec.fromJson(Map<String, dynamic> json) =>
      _$$_JsonSpecFromJson(json);

  @override
  final String name;
  @override
  final String description;
  @override
  final String type;

  @override
  String toString() {
    return 'JsonSpec(name: $name, description: $description, type: $type)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_JsonSpec &&
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
  _$$_JsonSpecCopyWith<_$_JsonSpec> get copyWith =>
      __$$_JsonSpecCopyWithImpl<_$_JsonSpec>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_JsonSpecToJson(
      this,
    );
  }
}

abstract class _JsonSpec extends JsonSpec {
  const factory _JsonSpec(
      {required final String name,
      required final String description,
      required final String type}) = _$_JsonSpec;
  const _JsonSpec._() : super._();

  factory _JsonSpec.fromJson(Map<String, dynamic> json) = _$_JsonSpec.fromJson;

  @override
  String get name;
  @override
  String get description;
  @override
  String get type;
  @override
  @JsonKey(ignore: true)
  _$$_JsonSpecCopyWith<_$_JsonSpec> get copyWith =>
      throw _privateConstructorUsedError;
}
