// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'json_ref_value.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

JsonRefValue _$JsonRefValueFromJson(Map<String, dynamic> json) {
  switch (json['runtimeType']) {
    case 'JsonRefValue.valueFrom':
      return ValueFrom.fromJson(json);
    case 'JsonRefValue.slugFrom':
      return SlugFrom.fromJson(json);

    default:
      throw CheckedFromJsonException(json, 'runtimeType', 'JsonRefValue',
          'Invalid union type "${json['runtimeType']}"!');
  }
}

/// @nodoc
mixin _$JsonRefValue {
  String get name => throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String name) valueFrom,
    required TResult Function(String name) slugFrom,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String name)? valueFrom,
    TResult? Function(String name)? slugFrom,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String name)? valueFrom,
    TResult Function(String name)? slugFrom,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(ValueFrom value) valueFrom,
    required TResult Function(SlugFrom value) slugFrom,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(ValueFrom value)? valueFrom,
    TResult? Function(SlugFrom value)? slugFrom,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(ValueFrom value)? valueFrom,
    TResult Function(SlugFrom value)? slugFrom,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $JsonRefValueCopyWith<JsonRefValue> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $JsonRefValueCopyWith<$Res> {
  factory $JsonRefValueCopyWith(
          JsonRefValue value, $Res Function(JsonRefValue) then) =
      _$JsonRefValueCopyWithImpl<$Res, JsonRefValue>;
  @useResult
  $Res call({String name});
}

/// @nodoc
class _$JsonRefValueCopyWithImpl<$Res, $Val extends JsonRefValue>
    implements $JsonRefValueCopyWith<$Res> {
  _$JsonRefValueCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? name = null,
  }) {
    return _then(_value.copyWith(
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$ValueFromCopyWith<$Res>
    implements $JsonRefValueCopyWith<$Res> {
  factory _$$ValueFromCopyWith(
          _$ValueFrom value, $Res Function(_$ValueFrom) then) =
      __$$ValueFromCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({String name});
}

/// @nodoc
class __$$ValueFromCopyWithImpl<$Res>
    extends _$JsonRefValueCopyWithImpl<$Res, _$ValueFrom>
    implements _$$ValueFromCopyWith<$Res> {
  __$$ValueFromCopyWithImpl(
      _$ValueFrom _value, $Res Function(_$ValueFrom) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? name = null,
  }) {
    return _then(_$ValueFrom(
      null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$ValueFrom extends ValueFrom {
  const _$ValueFrom(this.name, {final String? $type})
      : $type = $type ?? 'JsonRefValue.valueFrom',
        super._();

  factory _$ValueFrom.fromJson(Map<String, dynamic> json) =>
      _$$ValueFromFromJson(json);

  @override
  final String name;

  @JsonKey(name: 'runtimeType')
  final String $type;

  @override
  String toString() {
    return 'JsonRefValue.valueFrom(name: $name)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$ValueFrom &&
            (identical(other.name, name) || other.name == name));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, name);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$ValueFromCopyWith<_$ValueFrom> get copyWith =>
      __$$ValueFromCopyWithImpl<_$ValueFrom>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String name) valueFrom,
    required TResult Function(String name) slugFrom,
  }) {
    return valueFrom(name);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String name)? valueFrom,
    TResult? Function(String name)? slugFrom,
  }) {
    return valueFrom?.call(name);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String name)? valueFrom,
    TResult Function(String name)? slugFrom,
    required TResult orElse(),
  }) {
    if (valueFrom != null) {
      return valueFrom(name);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(ValueFrom value) valueFrom,
    required TResult Function(SlugFrom value) slugFrom,
  }) {
    return valueFrom(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(ValueFrom value)? valueFrom,
    TResult? Function(SlugFrom value)? slugFrom,
  }) {
    return valueFrom?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(ValueFrom value)? valueFrom,
    TResult Function(SlugFrom value)? slugFrom,
    required TResult orElse(),
  }) {
    if (valueFrom != null) {
      return valueFrom(this);
    }
    return orElse();
  }

  @override
  Map<String, dynamic> toJson() {
    return _$$ValueFromToJson(
      this,
    );
  }
}

abstract class ValueFrom extends JsonRefValue {
  const factory ValueFrom(final String name) = _$ValueFrom;
  const ValueFrom._() : super._();

  factory ValueFrom.fromJson(Map<String, dynamic> json) = _$ValueFrom.fromJson;

  @override
  String get name;
  @override
  @JsonKey(ignore: true)
  _$$ValueFromCopyWith<_$ValueFrom> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$SlugFromCopyWith<$Res>
    implements $JsonRefValueCopyWith<$Res> {
  factory _$$SlugFromCopyWith(
          _$SlugFrom value, $Res Function(_$SlugFrom) then) =
      __$$SlugFromCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({String name});
}

/// @nodoc
class __$$SlugFromCopyWithImpl<$Res>
    extends _$JsonRefValueCopyWithImpl<$Res, _$SlugFrom>
    implements _$$SlugFromCopyWith<$Res> {
  __$$SlugFromCopyWithImpl(_$SlugFrom _value, $Res Function(_$SlugFrom) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? name = null,
  }) {
    return _then(_$SlugFrom(
      null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$SlugFrom extends SlugFrom {
  const _$SlugFrom(this.name, {final String? $type})
      : $type = $type ?? 'JsonRefValue.slugFrom',
        super._();

  factory _$SlugFrom.fromJson(Map<String, dynamic> json) =>
      _$$SlugFromFromJson(json);

  @override
  final String name;

  @JsonKey(name: 'runtimeType')
  final String $type;

  @override
  String toString() {
    return 'JsonRefValue.slugFrom(name: $name)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$SlugFrom &&
            (identical(other.name, name) || other.name == name));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, name);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$SlugFromCopyWith<_$SlugFrom> get copyWith =>
      __$$SlugFromCopyWithImpl<_$SlugFrom>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String name) valueFrom,
    required TResult Function(String name) slugFrom,
  }) {
    return slugFrom(name);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String name)? valueFrom,
    TResult? Function(String name)? slugFrom,
  }) {
    return slugFrom?.call(name);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String name)? valueFrom,
    TResult Function(String name)? slugFrom,
    required TResult orElse(),
  }) {
    if (slugFrom != null) {
      return slugFrom(name);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(ValueFrom value) valueFrom,
    required TResult Function(SlugFrom value) slugFrom,
  }) {
    return slugFrom(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(ValueFrom value)? valueFrom,
    TResult? Function(SlugFrom value)? slugFrom,
  }) {
    return slugFrom?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(ValueFrom value)? valueFrom,
    TResult Function(SlugFrom value)? slugFrom,
    required TResult orElse(),
  }) {
    if (slugFrom != null) {
      return slugFrom(this);
    }
    return orElse();
  }

  @override
  Map<String, dynamic> toJson() {
    return _$$SlugFromToJson(
      this,
    );
  }
}

abstract class SlugFrom extends JsonRefValue {
  const factory SlugFrom(final String name) = _$SlugFrom;
  const SlugFrom._() : super._();

  factory SlugFrom.fromJson(Map<String, dynamic> json) = _$SlugFrom.fromJson;

  @override
  String get name;
  @override
  @JsonKey(ignore: true)
  _$$SlugFromCopyWith<_$SlugFrom> get copyWith =>
      throw _privateConstructorUsedError;
}
