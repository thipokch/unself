// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'retrieve_spec.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

RetrieveSpec _$RetrieveSpecFromJson(Map<String, dynamic> json) {
  return LocalFileSpec.fromJson(json);
}

/// @nodoc
mixin _$RetrieveSpec {
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() localFile,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? localFile,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? localFile,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(LocalFileSpec value) localFile,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(LocalFileSpec value)? localFile,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(LocalFileSpec value)? localFile,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $RetrieveSpecCopyWith<$Res> {
  factory $RetrieveSpecCopyWith(
          RetrieveSpec value, $Res Function(RetrieveSpec) then) =
      _$RetrieveSpecCopyWithImpl<$Res, RetrieveSpec>;
}

/// @nodoc
class _$RetrieveSpecCopyWithImpl<$Res, $Val extends RetrieveSpec>
    implements $RetrieveSpecCopyWith<$Res> {
  _$RetrieveSpecCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;
}

/// @nodoc
abstract class _$$LocalFileSpecCopyWith<$Res> {
  factory _$$LocalFileSpecCopyWith(
          _$LocalFileSpec value, $Res Function(_$LocalFileSpec) then) =
      __$$LocalFileSpecCopyWithImpl<$Res>;
}

/// @nodoc
class __$$LocalFileSpecCopyWithImpl<$Res>
    extends _$RetrieveSpecCopyWithImpl<$Res, _$LocalFileSpec>
    implements _$$LocalFileSpecCopyWith<$Res> {
  __$$LocalFileSpecCopyWithImpl(
      _$LocalFileSpec _value, $Res Function(_$LocalFileSpec) _then)
      : super(_value, _then);
}

/// @nodoc
@JsonSerializable()
class _$LocalFileSpec extends LocalFileSpec {
  const _$LocalFileSpec() : super._();

  factory _$LocalFileSpec.fromJson(Map<String, dynamic> json) =>
      _$$LocalFileSpecFromJson(json);

  @override
  String toString() {
    return 'RetrieveSpec.localFile()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType && other is _$LocalFileSpec);
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() localFile,
  }) {
    return localFile();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? localFile,
  }) {
    return localFile?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? localFile,
    required TResult orElse(),
  }) {
    if (localFile != null) {
      return localFile();
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(LocalFileSpec value) localFile,
  }) {
    return localFile(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(LocalFileSpec value)? localFile,
  }) {
    return localFile?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(LocalFileSpec value)? localFile,
    required TResult orElse(),
  }) {
    if (localFile != null) {
      return localFile(this);
    }
    return orElse();
  }

  @override
  Map<String, dynamic> toJson() {
    return _$$LocalFileSpecToJson(
      this,
    );
  }
}

abstract class LocalFileSpec extends RetrieveSpec {
  const factory LocalFileSpec() = _$LocalFileSpec;
  const LocalFileSpec._() : super._();

  factory LocalFileSpec.fromJson(Map<String, dynamic> json) =
      _$LocalFileSpec.fromJson;
}
