// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'source_spec.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

SourceSpec _$SourceSpecFromJson(Map<String, dynamic> json) {
  return _SourceSpec.fromJson(json);
}

/// @nodoc
mixin _$SourceSpec {
  String get id => throw _privateConstructorUsedError;
  String get name => throw _privateConstructorUsedError;
  FileSpec get fileSpec => throw _privateConstructorUsedError;
  RetrieveSpec get retrieveSpec => throw _privateConstructorUsedError;
  Iterable<ModuleSpec> get modules => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $SourceSpecCopyWith<SourceSpec> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $SourceSpecCopyWith<$Res> {
  factory $SourceSpecCopyWith(
          SourceSpec value, $Res Function(SourceSpec) then) =
      _$SourceSpecCopyWithImpl<$Res, SourceSpec>;
  @useResult
  $Res call(
      {String id,
      String name,
      FileSpec fileSpec,
      RetrieveSpec retrieveSpec,
      Iterable<ModuleSpec> modules});

  $FileSpecCopyWith<$Res> get fileSpec;
  $RetrieveSpecCopyWith<$Res> get retrieveSpec;
}

/// @nodoc
class _$SourceSpecCopyWithImpl<$Res, $Val extends SourceSpec>
    implements $SourceSpecCopyWith<$Res> {
  _$SourceSpecCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? name = null,
    Object? fileSpec = null,
    Object? retrieveSpec = null,
    Object? modules = null,
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
abstract class _$$_SourceSpecCopyWith<$Res>
    implements $SourceSpecCopyWith<$Res> {
  factory _$$_SourceSpecCopyWith(
          _$_SourceSpec value, $Res Function(_$_SourceSpec) then) =
      __$$_SourceSpecCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {String id,
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
class __$$_SourceSpecCopyWithImpl<$Res>
    extends _$SourceSpecCopyWithImpl<$Res, _$_SourceSpec>
    implements _$$_SourceSpecCopyWith<$Res> {
  __$$_SourceSpecCopyWithImpl(
      _$_SourceSpec _value, $Res Function(_$_SourceSpec) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? name = null,
    Object? fileSpec = null,
    Object? retrieveSpec = null,
    Object? modules = null,
  }) {
    return _then(_$_SourceSpec(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
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
class _$_SourceSpec extends _SourceSpec {
  const _$_SourceSpec(
      {required this.id,
      required this.name,
      required this.fileSpec,
      required this.retrieveSpec,
      required this.modules})
      : super._();

  factory _$_SourceSpec.fromJson(Map<String, dynamic> json) =>
      _$$_SourceSpecFromJson(json);

  @override
  final String id;
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
    return 'SourceSpec(id: $id, name: $name, fileSpec: $fileSpec, retrieveSpec: $retrieveSpec, modules: $modules)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_SourceSpec &&
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
  _$$_SourceSpecCopyWith<_$_SourceSpec> get copyWith =>
      __$$_SourceSpecCopyWithImpl<_$_SourceSpec>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_SourceSpecToJson(
      this,
    );
  }
}

abstract class _SourceSpec extends SourceSpec {
  const factory _SourceSpec(
      {required final String id,
      required final String name,
      required final FileSpec fileSpec,
      required final RetrieveSpec retrieveSpec,
      required final Iterable<ModuleSpec> modules}) = _$_SourceSpec;
  const _SourceSpec._() : super._();

  factory _SourceSpec.fromJson(Map<String, dynamic> json) =
      _$_SourceSpec.fromJson;

  @override
  String get id;
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
  _$$_SourceSpecCopyWith<_$_SourceSpec> get copyWith =>
      throw _privateConstructorUsedError;
}
