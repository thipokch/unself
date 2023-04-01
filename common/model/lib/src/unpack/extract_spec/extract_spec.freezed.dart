// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'extract_spec.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

ExtractSpec _$ExtractSpecFromJson(Map<String, dynamic> json) {
  return JsonExtractSpec.fromJson(json);
}

/// @nodoc
mixin _$ExtractSpec {
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() json,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? json,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? json,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(JsonExtractSpec value) json,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(JsonExtractSpec value)? json,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(JsonExtractSpec value)? json,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $ExtractSpecCopyWith<$Res> {
  factory $ExtractSpecCopyWith(
          ExtractSpec value, $Res Function(ExtractSpec) then) =
      _$ExtractSpecCopyWithImpl<$Res, ExtractSpec>;
}

/// @nodoc
class _$ExtractSpecCopyWithImpl<$Res, $Val extends ExtractSpec>
    implements $ExtractSpecCopyWith<$Res> {
  _$ExtractSpecCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;
}

/// @nodoc
abstract class _$$JsonExtractSpecCopyWith<$Res> {
  factory _$$JsonExtractSpecCopyWith(
          _$JsonExtractSpec value, $Res Function(_$JsonExtractSpec) then) =
      __$$JsonExtractSpecCopyWithImpl<$Res>;
}

/// @nodoc
class __$$JsonExtractSpecCopyWithImpl<$Res>
    extends _$ExtractSpecCopyWithImpl<$Res, _$JsonExtractSpec>
    implements _$$JsonExtractSpecCopyWith<$Res> {
  __$$JsonExtractSpecCopyWithImpl(
      _$JsonExtractSpec _value, $Res Function(_$JsonExtractSpec) _then)
      : super(_value, _then);
}

/// @nodoc
@JsonSerializable()
class _$JsonExtractSpec extends JsonExtractSpec {
  const _$JsonExtractSpec() : super._();

  factory _$JsonExtractSpec.fromJson(Map<String, dynamic> json) =>
      _$$JsonExtractSpecFromJson(json);

  @override
  String toString() {
    return 'ExtractSpec.json()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType && other is _$JsonExtractSpec);
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() json,
  }) {
    return json();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? json,
  }) {
    return json?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? json,
    required TResult orElse(),
  }) {
    if (json != null) {
      return json();
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(JsonExtractSpec value) json,
  }) {
    return json(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(JsonExtractSpec value)? json,
  }) {
    return json?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(JsonExtractSpec value)? json,
    required TResult orElse(),
  }) {
    if (json != null) {
      return json(this);
    }
    return orElse();
  }

  @override
  Map<String, dynamic> toJson() {
    return _$$JsonExtractSpecToJson(
      this,
    );
  }
}

abstract class JsonExtractSpec extends ExtractSpec {
  const factory JsonExtractSpec() = _$JsonExtractSpec;
  const JsonExtractSpec._() : super._();

  factory JsonExtractSpec.fromJson(Map<String, dynamic> json) =
      _$JsonExtractSpec.fromJson;
}
