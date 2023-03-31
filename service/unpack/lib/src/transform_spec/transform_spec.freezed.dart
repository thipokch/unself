// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'transform_spec.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

TransformSpec _$TransformSpecFromJson(Map<String, dynamic> json) {
  return JsonTransformSpec.fromJson(json);
}

/// @nodoc
mixin _$TransformSpec {
  Iterable<JsonSchema> get schema => throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(Iterable<JsonSchema> schema) json,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(Iterable<JsonSchema> schema)? json,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(Iterable<JsonSchema> schema)? json,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(JsonTransformSpec value) json,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(JsonTransformSpec value)? json,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(JsonTransformSpec value)? json,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $TransformSpecCopyWith<TransformSpec> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $TransformSpecCopyWith<$Res> {
  factory $TransformSpecCopyWith(
          TransformSpec value, $Res Function(TransformSpec) then) =
      _$TransformSpecCopyWithImpl<$Res, TransformSpec>;
  @useResult
  $Res call({Iterable<JsonSchema> schema});
}

/// @nodoc
class _$TransformSpecCopyWithImpl<$Res, $Val extends TransformSpec>
    implements $TransformSpecCopyWith<$Res> {
  _$TransformSpecCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? schema = null,
  }) {
    return _then(_value.copyWith(
      schema: null == schema
          ? _value.schema
          : schema // ignore: cast_nullable_to_non_nullable
              as Iterable<JsonSchema>,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$JsonTransformSpecCopyWith<$Res>
    implements $TransformSpecCopyWith<$Res> {
  factory _$$JsonTransformSpecCopyWith(
          _$JsonTransformSpec value, $Res Function(_$JsonTransformSpec) then) =
      __$$JsonTransformSpecCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({Iterable<JsonSchema> schema});
}

/// @nodoc
class __$$JsonTransformSpecCopyWithImpl<$Res>
    extends _$TransformSpecCopyWithImpl<$Res, _$JsonTransformSpec>
    implements _$$JsonTransformSpecCopyWith<$Res> {
  __$$JsonTransformSpecCopyWithImpl(
      _$JsonTransformSpec _value, $Res Function(_$JsonTransformSpec) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? schema = null,
  }) {
    return _then(_$JsonTransformSpec(
      null == schema
          ? _value.schema
          : schema // ignore: cast_nullable_to_non_nullable
              as Iterable<JsonSchema>,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$JsonTransformSpec extends JsonTransformSpec {
  const _$JsonTransformSpec(this.schema) : super._();

  factory _$JsonTransformSpec.fromJson(Map<String, dynamic> json) =>
      _$$JsonTransformSpecFromJson(json);

  @override
  final Iterable<JsonSchema> schema;

  @override
  String toString() {
    return 'TransformSpec.json(schema: $schema)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$JsonTransformSpec &&
            const DeepCollectionEquality().equals(other.schema, schema));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode =>
      Object.hash(runtimeType, const DeepCollectionEquality().hash(schema));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$JsonTransformSpecCopyWith<_$JsonTransformSpec> get copyWith =>
      __$$JsonTransformSpecCopyWithImpl<_$JsonTransformSpec>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(Iterable<JsonSchema> schema) json,
  }) {
    return json(schema);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(Iterable<JsonSchema> schema)? json,
  }) {
    return json?.call(schema);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(Iterable<JsonSchema> schema)? json,
    required TResult orElse(),
  }) {
    if (json != null) {
      return json(schema);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(JsonTransformSpec value) json,
  }) {
    return json(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(JsonTransformSpec value)? json,
  }) {
    return json?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(JsonTransformSpec value)? json,
    required TResult orElse(),
  }) {
    if (json != null) {
      return json(this);
    }
    return orElse();
  }

  @override
  Map<String, dynamic> toJson() {
    return _$$JsonTransformSpecToJson(
      this,
    );
  }
}

abstract class JsonTransformSpec extends TransformSpec {
  const factory JsonTransformSpec(final Iterable<JsonSchema> schema) =
      _$JsonTransformSpec;
  const JsonTransformSpec._() : super._();

  factory JsonTransformSpec.fromJson(Map<String, dynamic> json) =
      _$JsonTransformSpec.fromJson;

  @override
  Iterable<JsonSchema> get schema;
  @override
  @JsonKey(ignore: true)
  _$$JsonTransformSpecCopyWith<_$JsonTransformSpec> get copyWith =>
      throw _privateConstructorUsedError;
}
