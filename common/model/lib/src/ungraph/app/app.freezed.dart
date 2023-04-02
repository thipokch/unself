// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'app.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

App _$AppFromJson(Map<String, dynamic> json) {
  return _App.fromJson(json);
}

/// @nodoc
mixin _$App {
  @JsonString()
  String get id =>
      throw _privateConstructorUsedError; // @JsonDateTime() required DateTime created,
// @JsonDateTime() required DateTime updated,
  /// [name] is the name of the [App].
  String get name => throw _privateConstructorUsedError;

  /// [extra] is a map of additional properties.
  @JsonExtra()
  Map<String, dynamic> get extra => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $AppCopyWith<App> get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $AppCopyWith<$Res> {
  factory $AppCopyWith(App value, $Res Function(App) then) =
      _$AppCopyWithImpl<$Res, App>;
  @useResult
  $Res call(
      {@JsonString() String id,
      String name,
      @JsonExtra() Map<String, dynamic> extra});
}

/// @nodoc
class _$AppCopyWithImpl<$Res, $Val extends App> implements $AppCopyWith<$Res> {
  _$AppCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? name = null,
    Object? extra = null,
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
      extra: null == extra
          ? _value.extra
          : extra // ignore: cast_nullable_to_non_nullable
              as Map<String, dynamic>,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$_AppCopyWith<$Res> implements $AppCopyWith<$Res> {
  factory _$$_AppCopyWith(_$_App value, $Res Function(_$_App) then) =
      __$$_AppCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {@JsonString() String id,
      String name,
      @JsonExtra() Map<String, dynamic> extra});
}

/// @nodoc
class __$$_AppCopyWithImpl<$Res> extends _$AppCopyWithImpl<$Res, _$_App>
    implements _$$_AppCopyWith<$Res> {
  __$$_AppCopyWithImpl(_$_App _value, $Res Function(_$_App) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? name = null,
    Object? extra = null,
  }) {
    return _then(_$_App(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
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
class _$_App extends _App {
  const _$_App(
      {@JsonString() required this.id,
      required this.name,
      @JsonExtra() final Map<String, dynamic> extra = const {}})
      : _extra = extra,
        super._();

  factory _$_App.fromJson(Map<String, dynamic> json) => _$$_AppFromJson(json);

  @override
  @JsonString()
  final String id;
// @JsonDateTime() required DateTime created,
// @JsonDateTime() required DateTime updated,
  /// [name] is the name of the [App].
  @override
  final String name;

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
    return 'App(id: $id, name: $name, extra: $extra)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_App &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.name, name) || other.name == name) &&
            const DeepCollectionEquality().equals(other._extra, _extra));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(
      runtimeType, id, name, const DeepCollectionEquality().hash(_extra));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_AppCopyWith<_$_App> get copyWith =>
      __$$_AppCopyWithImpl<_$_App>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_AppToJson(
      this,
    );
  }
}

abstract class _App extends App {
  const factory _App(
      {@JsonString() required final String id,
      required final String name,
      @JsonExtra() final Map<String, dynamic> extra}) = _$_App;
  const _App._() : super._();

  factory _App.fromJson(Map<String, dynamic> json) = _$_App.fromJson;

  @override
  @JsonString()
  String get id;
  @override // @JsonDateTime() required DateTime created,
// @JsonDateTime() required DateTime updated,
  /// [name] is the name of the [App].
  String get name;
  @override

  /// [extra] is a map of additional properties.
  @JsonExtra()
  Map<String, dynamic> get extra;
  @override
  @JsonKey(ignore: true)
  _$$_AppCopyWith<_$_App> get copyWith => throw _privateConstructorUsedError;
}
