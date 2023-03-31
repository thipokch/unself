// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'file_spec.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

FileSpec _$FileSpecFromJson(Map<String, dynamic> json) {
  return ZipFileSpec.fromJson(json);
}

/// @nodoc
mixin _$FileSpec {
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() zip,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? zip,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? zip,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(ZipFileSpec value) zip,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(ZipFileSpec value)? zip,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(ZipFileSpec value)? zip,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $FileSpecCopyWith<$Res> {
  factory $FileSpecCopyWith(FileSpec value, $Res Function(FileSpec) then) =
      _$FileSpecCopyWithImpl<$Res, FileSpec>;
}

/// @nodoc
class _$FileSpecCopyWithImpl<$Res, $Val extends FileSpec>
    implements $FileSpecCopyWith<$Res> {
  _$FileSpecCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;
}

/// @nodoc
abstract class _$$ZipFileSpecCopyWith<$Res> {
  factory _$$ZipFileSpecCopyWith(
          _$ZipFileSpec value, $Res Function(_$ZipFileSpec) then) =
      __$$ZipFileSpecCopyWithImpl<$Res>;
}

/// @nodoc
class __$$ZipFileSpecCopyWithImpl<$Res>
    extends _$FileSpecCopyWithImpl<$Res, _$ZipFileSpec>
    implements _$$ZipFileSpecCopyWith<$Res> {
  __$$ZipFileSpecCopyWithImpl(
      _$ZipFileSpec _value, $Res Function(_$ZipFileSpec) _then)
      : super(_value, _then);
}

/// @nodoc
@JsonSerializable()
class _$ZipFileSpec extends ZipFileSpec {
  const _$ZipFileSpec() : super._();

  factory _$ZipFileSpec.fromJson(Map<String, dynamic> json) =>
      _$$ZipFileSpecFromJson(json);

  @override
  String toString() {
    return 'FileSpec.zip()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType && other is _$ZipFileSpec);
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() zip,
  }) {
    return zip();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? zip,
  }) {
    return zip?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? zip,
    required TResult orElse(),
  }) {
    if (zip != null) {
      return zip();
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(ZipFileSpec value) zip,
  }) {
    return zip(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(ZipFileSpec value)? zip,
  }) {
    return zip?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(ZipFileSpec value)? zip,
    required TResult orElse(),
  }) {
    if (zip != null) {
      return zip(this);
    }
    return orElse();
  }

  @override
  Map<String, dynamic> toJson() {
    return _$$ZipFileSpecToJson(
      this,
    );
  }
}

abstract class ZipFileSpec extends FileSpec {
  const factory ZipFileSpec() = _$ZipFileSpec;
  const ZipFileSpec._() : super._();

  factory ZipFileSpec.fromJson(Map<String, dynamic> json) =
      _$ZipFileSpec.fromJson;
}
