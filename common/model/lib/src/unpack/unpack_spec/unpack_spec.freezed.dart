// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'unpack_spec.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

UnpackSpec _$UnpackSpecFromJson(Map<String, dynamic> json) {
  return _UnpackSpec.fromJson(json);
}

/// @nodoc
mixin _$UnpackSpec {
  int? get id => throw _privateConstructorUsedError;
  String get name => throw _privateConstructorUsedError;
  FileSpec get fileSpec => throw _privateConstructorUsedError;
  RetrieveSpec get retrieveSpec => throw _privateConstructorUsedError;
  Iterable<ModuleSpec> get modules => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $UnpackSpecCopyWith<UnpackSpec> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $UnpackSpecCopyWith<$Res> {
  factory $UnpackSpecCopyWith(
          UnpackSpec value, $Res Function(UnpackSpec) then) =
      _$UnpackSpecCopyWithImpl<$Res, UnpackSpec>;
  @useResult
  $Res call(
      {int? id,
      String name,
      FileSpec fileSpec,
      RetrieveSpec retrieveSpec,
      Iterable<ModuleSpec> modules});

  $FileSpecCopyWith<$Res> get fileSpec;
  $RetrieveSpecCopyWith<$Res> get retrieveSpec;
}

/// @nodoc
class _$UnpackSpecCopyWithImpl<$Res, $Val extends UnpackSpec>
    implements $UnpackSpecCopyWith<$Res> {
  _$UnpackSpecCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = freezed,
    Object? name = null,
    Object? fileSpec = null,
    Object? retrieveSpec = null,
    Object? modules = null,
  }) {
    return _then(_value.copyWith(
      id: freezed == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as int?,
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      fileSpec: null == fileSpec
          ? _value.fileSpec
          : fileSpec // ignore: cast_nullable_to_non_nullable
              as FileSpec,
      retrieveSpec: null == retrieveSpec
          ? _value.retrieveSpec
          : retrieveSpec // ignore: cast_nullable_to_non_nullable
              as RetrieveSpec,
      modules: null == modules
          ? _value.modules
          : modules // ignore: cast_nullable_to_non_nullable
              as Iterable<ModuleSpec>,
    ) as $Val);
  }

  @override
  @pragma('vm:prefer-inline')
  $FileSpecCopyWith<$Res> get fileSpec {
    return $FileSpecCopyWith<$Res>(_value.fileSpec, (value) {
      return _then(_value.copyWith(fileSpec: value) as $Val);
    });
  }

  @override
  @pragma('vm:prefer-inline')
  $RetrieveSpecCopyWith<$Res> get retrieveSpec {
    return $RetrieveSpecCopyWith<$Res>(_value.retrieveSpec, (value) {
      return _then(_value.copyWith(retrieveSpec: value) as $Val);
    });
  }
}

/// @nodoc
abstract class _$$_UnpackSpecCopyWith<$Res>
    implements $UnpackSpecCopyWith<$Res> {
  factory _$$_UnpackSpecCopyWith(
          _$_UnpackSpec value, $Res Function(_$_UnpackSpec) then) =
      __$$_UnpackSpecCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {int? id,
      String name,
      FileSpec fileSpec,
      RetrieveSpec retrieveSpec,
      Iterable<ModuleSpec> modules});

  @override
  $FileSpecCopyWith<$Res> get fileSpec;
  @override
  $RetrieveSpecCopyWith<$Res> get retrieveSpec;
}

/// @nodoc
class __$$_UnpackSpecCopyWithImpl<$Res>
    extends _$UnpackSpecCopyWithImpl<$Res, _$_UnpackSpec>
    implements _$$_UnpackSpecCopyWith<$Res> {
  __$$_UnpackSpecCopyWithImpl(
      _$_UnpackSpec _value, $Res Function(_$_UnpackSpec) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = freezed,
    Object? name = null,
    Object? fileSpec = null,
    Object? retrieveSpec = null,
    Object? modules = null,
  }) {
    return _then(_$_UnpackSpec(
      id: freezed == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as int?,
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      fileSpec: null == fileSpec
          ? _value.fileSpec
          : fileSpec // ignore: cast_nullable_to_non_nullable
              as FileSpec,
      retrieveSpec: null == retrieveSpec
          ? _value.retrieveSpec
          : retrieveSpec // ignore: cast_nullable_to_non_nullable
              as RetrieveSpec,
      modules: null == modules
          ? _value.modules
          : modules // ignore: cast_nullable_to_non_nullable
              as Iterable<ModuleSpec>,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_UnpackSpec extends _UnpackSpec {
  const _$_UnpackSpec(
      {this.id,
      required this.name,
      required this.fileSpec,
      required this.retrieveSpec,
      required this.modules})
      : super._();

  factory _$_UnpackSpec.fromJson(Map<String, dynamic> json) =>
      _$$_UnpackSpecFromJson(json);

  @override
  final int? id;
  @override
  final String name;
  @override
  final FileSpec fileSpec;
  @override
  final RetrieveSpec retrieveSpec;
  @override
  final Iterable<ModuleSpec> modules;

  @override
  String toString() {
    return 'UnpackSpec(id: $id, name: $name, fileSpec: $fileSpec, retrieveSpec: $retrieveSpec, modules: $modules)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_UnpackSpec &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.name, name) || other.name == name) &&
            (identical(other.fileSpec, fileSpec) ||
                other.fileSpec == fileSpec) &&
            (identical(other.retrieveSpec, retrieveSpec) ||
                other.retrieveSpec == retrieveSpec) &&
            const DeepCollectionEquality().equals(other.modules, modules));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, id, name, fileSpec, retrieveSpec,
      const DeepCollectionEquality().hash(modules));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_UnpackSpecCopyWith<_$_UnpackSpec> get copyWith =>
      __$$_UnpackSpecCopyWithImpl<_$_UnpackSpec>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_UnpackSpecToJson(
      this,
    );
  }
}

abstract class _UnpackSpec extends UnpackSpec {
  const factory _UnpackSpec(
      {final int? id,
      required final String name,
      required final FileSpec fileSpec,
      required final RetrieveSpec retrieveSpec,
      required final Iterable<ModuleSpec> modules}) = _$_UnpackSpec;
  const _UnpackSpec._() : super._();

  factory _UnpackSpec.fromJson(Map<String, dynamic> json) =
      _$_UnpackSpec.fromJson;

  @override
  int? get id;
  @override
  String get name;
  @override
  FileSpec get fileSpec;
  @override
  RetrieveSpec get retrieveSpec;
  @override
  Iterable<ModuleSpec> get modules;
  @override
  @JsonKey(ignore: true)
  _$$_UnpackSpecCopyWith<_$_UnpackSpec> get copyWith =>
      throw _privateConstructorUsedError;
}
