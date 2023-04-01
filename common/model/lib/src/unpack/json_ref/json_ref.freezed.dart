// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'json_ref.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

JsonRef _$JsonRefFromJson(Map<String, dynamic> json) {
  switch (json['runtimeType']) {
    case 'JsonRef.ref':
      return Ref.fromJson(json);
    case 'JsonRef.union':
      return Union.fromJson(json);

    default:
      throw CheckedFromJsonException(json, 'runtimeType', 'JsonRef',
          'Invalid union type "${json['runtimeType']}"!');
  }
}

/// @nodoc
mixin _$JsonRef {
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String name) ref,
    required TResult Function(List<String> names, String key) union,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String name)? ref,
    TResult? Function(List<String> names, String key)? union,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String name)? ref,
    TResult Function(List<String> names, String key)? union,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(Ref value) ref,
    required TResult Function(Union value) union,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(Ref value)? ref,
    TResult? Function(Union value)? union,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(Ref value)? ref,
    TResult Function(Union value)? union,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $JsonRefCopyWith<$Res> {
  factory $JsonRefCopyWith(JsonRef value, $Res Function(JsonRef) then) =
      _$JsonRefCopyWithImpl<$Res, JsonRef>;
}

/// @nodoc
class _$JsonRefCopyWithImpl<$Res, $Val extends JsonRef>
    implements $JsonRefCopyWith<$Res> {
  _$JsonRefCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;
}

/// @nodoc
abstract class _$$RefCopyWith<$Res> {
  factory _$$RefCopyWith(_$Ref value, $Res Function(_$Ref) then) =
      __$$RefCopyWithImpl<$Res>;
  @useResult
  $Res call({String name});
}

/// @nodoc
class __$$RefCopyWithImpl<$Res> extends _$JsonRefCopyWithImpl<$Res, _$Ref>
    implements _$$RefCopyWith<$Res> {
  __$$RefCopyWithImpl(_$Ref _value, $Res Function(_$Ref) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? name = null,
  }) {
    return _then(_$Ref(
      null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$Ref extends Ref {
  const _$Ref(this.name, {final String? $type})
      : $type = $type ?? 'JsonRef.ref',
        super._();

  factory _$Ref.fromJson(Map<String, dynamic> json) => _$$RefFromJson(json);

  @override
  final String name;

  @JsonKey(name: 'runtimeType')
  final String $type;

  @override
  String toString() {
    return 'JsonRef.ref(name: $name)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$Ref &&
            (identical(other.name, name) || other.name == name));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, name);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$RefCopyWith<_$Ref> get copyWith =>
      __$$RefCopyWithImpl<_$Ref>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String name) ref,
    required TResult Function(List<String> names, String key) union,
  }) {
    return ref(name);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String name)? ref,
    TResult? Function(List<String> names, String key)? union,
  }) {
    return ref?.call(name);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String name)? ref,
    TResult Function(List<String> names, String key)? union,
    required TResult orElse(),
  }) {
    if (ref != null) {
      return ref(name);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(Ref value) ref,
    required TResult Function(Union value) union,
  }) {
    return ref(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(Ref value)? ref,
    TResult? Function(Union value)? union,
  }) {
    return ref?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(Ref value)? ref,
    TResult Function(Union value)? union,
    required TResult orElse(),
  }) {
    if (ref != null) {
      return ref(this);
    }
    return orElse();
  }

  @override
  Map<String, dynamic> toJson() {
    return _$$RefToJson(
      this,
    );
  }
}

abstract class Ref extends JsonRef {
  const factory Ref(final String name) = _$Ref;
  const Ref._() : super._();

  factory Ref.fromJson(Map<String, dynamic> json) = _$Ref.fromJson;

  String get name;
  @JsonKey(ignore: true)
  _$$RefCopyWith<_$Ref> get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$UnionCopyWith<$Res> {
  factory _$$UnionCopyWith(_$Union value, $Res Function(_$Union) then) =
      __$$UnionCopyWithImpl<$Res>;
  @useResult
  $Res call({List<String> names, String key});
}

/// @nodoc
class __$$UnionCopyWithImpl<$Res> extends _$JsonRefCopyWithImpl<$Res, _$Union>
    implements _$$UnionCopyWith<$Res> {
  __$$UnionCopyWithImpl(_$Union _value, $Res Function(_$Union) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? names = null,
    Object? key = null,
  }) {
    return _then(_$Union(
      null == names
          ? _value._names
          : names // ignore: cast_nullable_to_non_nullable
              as List<String>,
      key: null == key
          ? _value.key
          : key // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$Union extends Union {
  const _$Union(final List<String> names,
      {this.key = 'type', final String? $type})
      : _names = names,
        $type = $type ?? 'JsonRef.union',
        super._();

  factory _$Union.fromJson(Map<String, dynamic> json) => _$$UnionFromJson(json);

// Serialization doesn't support fuctions
// required LookupCallback lookup,
  final List<String> _names;
// Serialization doesn't support fuctions
// required LookupCallback lookup,
  @override
  List<String> get names {
    if (_names is EqualUnmodifiableListView) return _names;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(_names);
  }

  @override
  @JsonKey()
  final String key;

  @JsonKey(name: 'runtimeType')
  final String $type;

  @override
  String toString() {
    return 'JsonRef.union(names: $names, key: $key)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$Union &&
            const DeepCollectionEquality().equals(other._names, _names) &&
            (identical(other.key, key) || other.key == key));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(
      runtimeType, const DeepCollectionEquality().hash(_names), key);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$UnionCopyWith<_$Union> get copyWith =>
      __$$UnionCopyWithImpl<_$Union>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String name) ref,
    required TResult Function(List<String> names, String key) union,
  }) {
    return union(names, key);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String name)? ref,
    TResult? Function(List<String> names, String key)? union,
  }) {
    return union?.call(names, key);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String name)? ref,
    TResult Function(List<String> names, String key)? union,
    required TResult orElse(),
  }) {
    if (union != null) {
      return union(names, key);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(Ref value) ref,
    required TResult Function(Union value) union,
  }) {
    return union(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(Ref value)? ref,
    TResult? Function(Union value)? union,
  }) {
    return union?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(Ref value)? ref,
    TResult Function(Union value)? union,
    required TResult orElse(),
  }) {
    if (union != null) {
      return union(this);
    }
    return orElse();
  }

  @override
  Map<String, dynamic> toJson() {
    return _$$UnionToJson(
      this,
    );
  }
}

abstract class Union extends JsonRef {
  const factory Union(final List<String> names, {final String key}) = _$Union;
  const Union._() : super._();

  factory Union.fromJson(Map<String, dynamic> json) = _$Union.fromJson;

// Serialization doesn't support fuctions
// required LookupCallback lookup,
  List<String> get names;
  String get key;
  @JsonKey(ignore: true)
  _$$UnionCopyWith<_$Union> get copyWith => throw _privateConstructorUsedError;
}
