// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'json_ref_list.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

JsonRefList _$JsonRefListFromJson(Map<String, dynamic> json) {
  switch (json['runtimeType']) {
    case 'JsonRefList.ref':
      return RefList.fromJson(json);
    case 'JsonRefList.union':
      return UnionList.fromJson(json);

    default:
      throw CheckedFromJsonException(json, 'runtimeType', 'JsonRefList',
          'Invalid union type "${json['runtimeType']}"!');
  }
}

/// @nodoc
mixin _$JsonRefList {
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
    required TResult Function(RefList value) ref,
    required TResult Function(UnionList value) union,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(RefList value)? ref,
    TResult? Function(UnionList value)? union,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(RefList value)? ref,
    TResult Function(UnionList value)? union,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $JsonRefListCopyWith<$Res> {
  factory $JsonRefListCopyWith(
          JsonRefList value, $Res Function(JsonRefList) then) =
      _$JsonRefListCopyWithImpl<$Res, JsonRefList>;
}

/// @nodoc
class _$JsonRefListCopyWithImpl<$Res, $Val extends JsonRefList>
    implements $JsonRefListCopyWith<$Res> {
  _$JsonRefListCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;
}

/// @nodoc
abstract class _$$RefListCopyWith<$Res> {
  factory _$$RefListCopyWith(_$RefList value, $Res Function(_$RefList) then) =
      __$$RefListCopyWithImpl<$Res>;
  @useResult
  $Res call({String name});
}

/// @nodoc
class __$$RefListCopyWithImpl<$Res>
    extends _$JsonRefListCopyWithImpl<$Res, _$RefList>
    implements _$$RefListCopyWith<$Res> {
  __$$RefListCopyWithImpl(_$RefList _value, $Res Function(_$RefList) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? name = null,
  }) {
    return _then(_$RefList(
      null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$RefList extends RefList {
  const _$RefList(this.name, {final String? $type})
      : $type = $type ?? 'JsonRefList.ref',
        super._();

  factory _$RefList.fromJson(Map<String, dynamic> json) =>
      _$$RefListFromJson(json);

  @override
  final String name;

  @JsonKey(name: 'runtimeType')
  final String $type;

  @override
  String toString() {
    return 'JsonRefList.ref(name: $name)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$RefList &&
            (identical(other.name, name) || other.name == name));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, name);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$RefListCopyWith<_$RefList> get copyWith =>
      __$$RefListCopyWithImpl<_$RefList>(this, _$identity);

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
    required TResult Function(RefList value) ref,
    required TResult Function(UnionList value) union,
  }) {
    return ref(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(RefList value)? ref,
    TResult? Function(UnionList value)? union,
  }) {
    return ref?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(RefList value)? ref,
    TResult Function(UnionList value)? union,
    required TResult orElse(),
  }) {
    if (ref != null) {
      return ref(this);
    }
    return orElse();
  }

  @override
  Map<String, dynamic> toJson() {
    return _$$RefListToJson(
      this,
    );
  }
}

abstract class RefList extends JsonRefList {
  const factory RefList(final String name) = _$RefList;
  const RefList._() : super._();

  factory RefList.fromJson(Map<String, dynamic> json) = _$RefList.fromJson;

  String get name;
  @JsonKey(ignore: true)
  _$$RefListCopyWith<_$RefList> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$UnionListCopyWith<$Res> {
  factory _$$UnionListCopyWith(
          _$UnionList value, $Res Function(_$UnionList) then) =
      __$$UnionListCopyWithImpl<$Res>;
  @useResult
  $Res call({List<String> names, String key});
}

/// @nodoc
class __$$UnionListCopyWithImpl<$Res>
    extends _$JsonRefListCopyWithImpl<$Res, _$UnionList>
    implements _$$UnionListCopyWith<$Res> {
  __$$UnionListCopyWithImpl(
      _$UnionList _value, $Res Function(_$UnionList) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? names = null,
    Object? key = null,
  }) {
    return _then(_$UnionList(
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
class _$UnionList extends UnionList {
  const _$UnionList(final List<String> names,
      {this.key = 'type', final String? $type})
      : _names = names,
        $type = $type ?? 'JsonRefList.union',
        super._();

  factory _$UnionList.fromJson(Map<String, dynamic> json) =>
      _$$UnionListFromJson(json);

  final List<String> _names;
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
    return 'JsonRefList.union(names: $names, key: $key)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$UnionList &&
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
  _$$UnionListCopyWith<_$UnionList> get copyWith =>
      __$$UnionListCopyWithImpl<_$UnionList>(this, _$identity);

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
    required TResult Function(RefList value) ref,
    required TResult Function(UnionList value) union,
  }) {
    return union(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(RefList value)? ref,
    TResult? Function(UnionList value)? union,
  }) {
    return union?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(RefList value)? ref,
    TResult Function(UnionList value)? union,
    required TResult orElse(),
  }) {
    if (union != null) {
      return union(this);
    }
    return orElse();
  }

  @override
  Map<String, dynamic> toJson() {
    return _$$UnionListToJson(
      this,
    );
  }
}

abstract class UnionList extends JsonRefList {
  const factory UnionList(final List<String> names, {final String key}) =
      _$UnionList;
  const UnionList._() : super._();

  factory UnionList.fromJson(Map<String, dynamic> json) = _$UnionList.fromJson;

  List<String> get names;
  String get key;
  @JsonKey(ignore: true)
  _$$UnionListCopyWith<_$UnionList> get copyWith =>
      throw _privateConstructorUsedError;
}
