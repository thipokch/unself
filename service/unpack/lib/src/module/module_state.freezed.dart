// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'module_state.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

ModuleState _$ModuleStateFromJson(Map<String, dynamic> json) {
  switch (json['runtimeType']) {
    case 'initial':
      return ModuleInitial.fromJson(json);
    case 'file':
      return ModuleFile.fromJson(json);
    case 'extract':
      return ModuleExtract.fromJson(json);
    case 'transform':
      return ModuleTransform.fromJson(json);
    case 'load':
      return ModuleLoad.fromJson(json);
    case 'complete':
      return ModuleComplete.fromJson(json);
    case 'error':
      return ModuleError.fromJson(json);

    default:
      throw CheckedFromJsonException(json, 'runtimeType', 'ModuleState',
          'Invalid union type "${json['runtimeType']}"!');
  }
}

/// @nodoc
mixin _$ModuleState {
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() initial,
    required TResult Function() file,
    required TResult Function() extract,
    required TResult Function() transform,
    required TResult Function() load,
    required TResult Function() complete,
    required TResult Function() error,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? initial,
    TResult? Function()? file,
    TResult? Function()? extract,
    TResult? Function()? transform,
    TResult? Function()? load,
    TResult? Function()? complete,
    TResult? Function()? error,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? initial,
    TResult Function()? file,
    TResult Function()? extract,
    TResult Function()? transform,
    TResult Function()? load,
    TResult Function()? complete,
    TResult Function()? error,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(ModuleInitial value) initial,
    required TResult Function(ModuleFile value) file,
    required TResult Function(ModuleExtract value) extract,
    required TResult Function(ModuleTransform value) transform,
    required TResult Function(ModuleLoad value) load,
    required TResult Function(ModuleComplete value) complete,
    required TResult Function(ModuleError value) error,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(ModuleInitial value)? initial,
    TResult? Function(ModuleFile value)? file,
    TResult? Function(ModuleExtract value)? extract,
    TResult? Function(ModuleTransform value)? transform,
    TResult? Function(ModuleLoad value)? load,
    TResult? Function(ModuleComplete value)? complete,
    TResult? Function(ModuleError value)? error,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(ModuleInitial value)? initial,
    TResult Function(ModuleFile value)? file,
    TResult Function(ModuleExtract value)? extract,
    TResult Function(ModuleTransform value)? transform,
    TResult Function(ModuleLoad value)? load,
    TResult Function(ModuleComplete value)? complete,
    TResult Function(ModuleError value)? error,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $ModuleStateCopyWith<$Res> {
  factory $ModuleStateCopyWith(
          ModuleState value, $Res Function(ModuleState) then) =
      _$ModuleStateCopyWithImpl<$Res, ModuleState>;
}

/// @nodoc
class _$ModuleStateCopyWithImpl<$Res, $Val extends ModuleState>
    implements $ModuleStateCopyWith<$Res> {
  _$ModuleStateCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;
}

/// @nodoc
abstract class _$$ModuleInitialCopyWith<$Res> {
  factory _$$ModuleInitialCopyWith(
          _$ModuleInitial value, $Res Function(_$ModuleInitial) then) =
      __$$ModuleInitialCopyWithImpl<$Res>;
}

/// @nodoc
class __$$ModuleInitialCopyWithImpl<$Res>
    extends _$ModuleStateCopyWithImpl<$Res, _$ModuleInitial>
    implements _$$ModuleInitialCopyWith<$Res> {
  __$$ModuleInitialCopyWithImpl(
      _$ModuleInitial _value, $Res Function(_$ModuleInitial) _then)
      : super(_value, _then);
}

/// @nodoc
@JsonSerializable()
class _$ModuleInitial extends ModuleInitial {
  const _$ModuleInitial({final String? $type})
      : $type = $type ?? 'initial',
        super._();

  factory _$ModuleInitial.fromJson(Map<String, dynamic> json) =>
      _$$ModuleInitialFromJson(json);

  @JsonKey(name: 'runtimeType')
  final String $type;

  @override
  String toString() {
    return 'ModuleState.initial()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType && other is _$ModuleInitial);
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() initial,
    required TResult Function() file,
    required TResult Function() extract,
    required TResult Function() transform,
    required TResult Function() load,
    required TResult Function() complete,
    required TResult Function() error,
  }) {
    return initial();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? initial,
    TResult? Function()? file,
    TResult? Function()? extract,
    TResult? Function()? transform,
    TResult? Function()? load,
    TResult? Function()? complete,
    TResult? Function()? error,
  }) {
    return initial?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? initial,
    TResult Function()? file,
    TResult Function()? extract,
    TResult Function()? transform,
    TResult Function()? load,
    TResult Function()? complete,
    TResult Function()? error,
    required TResult orElse(),
  }) {
    if (initial != null) {
      return initial();
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(ModuleInitial value) initial,
    required TResult Function(ModuleFile value) file,
    required TResult Function(ModuleExtract value) extract,
    required TResult Function(ModuleTransform value) transform,
    required TResult Function(ModuleLoad value) load,
    required TResult Function(ModuleComplete value) complete,
    required TResult Function(ModuleError value) error,
  }) {
    return initial(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(ModuleInitial value)? initial,
    TResult? Function(ModuleFile value)? file,
    TResult? Function(ModuleExtract value)? extract,
    TResult? Function(ModuleTransform value)? transform,
    TResult? Function(ModuleLoad value)? load,
    TResult? Function(ModuleComplete value)? complete,
    TResult? Function(ModuleError value)? error,
  }) {
    return initial?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(ModuleInitial value)? initial,
    TResult Function(ModuleFile value)? file,
    TResult Function(ModuleExtract value)? extract,
    TResult Function(ModuleTransform value)? transform,
    TResult Function(ModuleLoad value)? load,
    TResult Function(ModuleComplete value)? complete,
    TResult Function(ModuleError value)? error,
    required TResult orElse(),
  }) {
    if (initial != null) {
      return initial(this);
    }
    return orElse();
  }

  @override
  Map<String, dynamic> toJson() {
    return _$$ModuleInitialToJson(
      this,
    );
  }
}

abstract class ModuleInitial extends ModuleState {
  const factory ModuleInitial() = _$ModuleInitial;
  const ModuleInitial._() : super._();

  factory ModuleInitial.fromJson(Map<String, dynamic> json) =
      _$ModuleInitial.fromJson;
}

/// @nodoc
abstract class _$$ModuleFileCopyWith<$Res> {
  factory _$$ModuleFileCopyWith(
          _$ModuleFile value, $Res Function(_$ModuleFile) then) =
      __$$ModuleFileCopyWithImpl<$Res>;
}

/// @nodoc
class __$$ModuleFileCopyWithImpl<$Res>
    extends _$ModuleStateCopyWithImpl<$Res, _$ModuleFile>
    implements _$$ModuleFileCopyWith<$Res> {
  __$$ModuleFileCopyWithImpl(
      _$ModuleFile _value, $Res Function(_$ModuleFile) _then)
      : super(_value, _then);
}

/// @nodoc
@JsonSerializable()
class _$ModuleFile extends ModuleFile {
  const _$ModuleFile({final String? $type})
      : $type = $type ?? 'file',
        super._();

  factory _$ModuleFile.fromJson(Map<String, dynamic> json) =>
      _$$ModuleFileFromJson(json);

  @JsonKey(name: 'runtimeType')
  final String $type;

  @override
  String toString() {
    return 'ModuleState.file()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType && other is _$ModuleFile);
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() initial,
    required TResult Function() file,
    required TResult Function() extract,
    required TResult Function() transform,
    required TResult Function() load,
    required TResult Function() complete,
    required TResult Function() error,
  }) {
    return file();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? initial,
    TResult? Function()? file,
    TResult? Function()? extract,
    TResult? Function()? transform,
    TResult? Function()? load,
    TResult? Function()? complete,
    TResult? Function()? error,
  }) {
    return file?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? initial,
    TResult Function()? file,
    TResult Function()? extract,
    TResult Function()? transform,
    TResult Function()? load,
    TResult Function()? complete,
    TResult Function()? error,
    required TResult orElse(),
  }) {
    if (file != null) {
      return file();
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(ModuleInitial value) initial,
    required TResult Function(ModuleFile value) file,
    required TResult Function(ModuleExtract value) extract,
    required TResult Function(ModuleTransform value) transform,
    required TResult Function(ModuleLoad value) load,
    required TResult Function(ModuleComplete value) complete,
    required TResult Function(ModuleError value) error,
  }) {
    return file(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(ModuleInitial value)? initial,
    TResult? Function(ModuleFile value)? file,
    TResult? Function(ModuleExtract value)? extract,
    TResult? Function(ModuleTransform value)? transform,
    TResult? Function(ModuleLoad value)? load,
    TResult? Function(ModuleComplete value)? complete,
    TResult? Function(ModuleError value)? error,
  }) {
    return file?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(ModuleInitial value)? initial,
    TResult Function(ModuleFile value)? file,
    TResult Function(ModuleExtract value)? extract,
    TResult Function(ModuleTransform value)? transform,
    TResult Function(ModuleLoad value)? load,
    TResult Function(ModuleComplete value)? complete,
    TResult Function(ModuleError value)? error,
    required TResult orElse(),
  }) {
    if (file != null) {
      return file(this);
    }
    return orElse();
  }

  @override
  Map<String, dynamic> toJson() {
    return _$$ModuleFileToJson(
      this,
    );
  }
}

abstract class ModuleFile extends ModuleState {
  const factory ModuleFile() = _$ModuleFile;
  const ModuleFile._() : super._();

  factory ModuleFile.fromJson(Map<String, dynamic> json) =
      _$ModuleFile.fromJson;
}

/// @nodoc
abstract class _$$ModuleExtractCopyWith<$Res> {
  factory _$$ModuleExtractCopyWith(
          _$ModuleExtract value, $Res Function(_$ModuleExtract) then) =
      __$$ModuleExtractCopyWithImpl<$Res>;
}

/// @nodoc
class __$$ModuleExtractCopyWithImpl<$Res>
    extends _$ModuleStateCopyWithImpl<$Res, _$ModuleExtract>
    implements _$$ModuleExtractCopyWith<$Res> {
  __$$ModuleExtractCopyWithImpl(
      _$ModuleExtract _value, $Res Function(_$ModuleExtract) _then)
      : super(_value, _then);
}

/// @nodoc
@JsonSerializable()
class _$ModuleExtract extends ModuleExtract {
  const _$ModuleExtract({final String? $type})
      : $type = $type ?? 'extract',
        super._();

  factory _$ModuleExtract.fromJson(Map<String, dynamic> json) =>
      _$$ModuleExtractFromJson(json);

  @JsonKey(name: 'runtimeType')
  final String $type;

  @override
  String toString() {
    return 'ModuleState.extract()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType && other is _$ModuleExtract);
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() initial,
    required TResult Function() file,
    required TResult Function() extract,
    required TResult Function() transform,
    required TResult Function() load,
    required TResult Function() complete,
    required TResult Function() error,
  }) {
    return extract();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? initial,
    TResult? Function()? file,
    TResult? Function()? extract,
    TResult? Function()? transform,
    TResult? Function()? load,
    TResult? Function()? complete,
    TResult? Function()? error,
  }) {
    return extract?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? initial,
    TResult Function()? file,
    TResult Function()? extract,
    TResult Function()? transform,
    TResult Function()? load,
    TResult Function()? complete,
    TResult Function()? error,
    required TResult orElse(),
  }) {
    if (extract != null) {
      return extract();
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(ModuleInitial value) initial,
    required TResult Function(ModuleFile value) file,
    required TResult Function(ModuleExtract value) extract,
    required TResult Function(ModuleTransform value) transform,
    required TResult Function(ModuleLoad value) load,
    required TResult Function(ModuleComplete value) complete,
    required TResult Function(ModuleError value) error,
  }) {
    return extract(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(ModuleInitial value)? initial,
    TResult? Function(ModuleFile value)? file,
    TResult? Function(ModuleExtract value)? extract,
    TResult? Function(ModuleTransform value)? transform,
    TResult? Function(ModuleLoad value)? load,
    TResult? Function(ModuleComplete value)? complete,
    TResult? Function(ModuleError value)? error,
  }) {
    return extract?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(ModuleInitial value)? initial,
    TResult Function(ModuleFile value)? file,
    TResult Function(ModuleExtract value)? extract,
    TResult Function(ModuleTransform value)? transform,
    TResult Function(ModuleLoad value)? load,
    TResult Function(ModuleComplete value)? complete,
    TResult Function(ModuleError value)? error,
    required TResult orElse(),
  }) {
    if (extract != null) {
      return extract(this);
    }
    return orElse();
  }

  @override
  Map<String, dynamic> toJson() {
    return _$$ModuleExtractToJson(
      this,
    );
  }
}

abstract class ModuleExtract extends ModuleState {
  const factory ModuleExtract() = _$ModuleExtract;
  const ModuleExtract._() : super._();

  factory ModuleExtract.fromJson(Map<String, dynamic> json) =
      _$ModuleExtract.fromJson;
}

/// @nodoc
abstract class _$$ModuleTransformCopyWith<$Res> {
  factory _$$ModuleTransformCopyWith(
          _$ModuleTransform value, $Res Function(_$ModuleTransform) then) =
      __$$ModuleTransformCopyWithImpl<$Res>;
}

/// @nodoc
class __$$ModuleTransformCopyWithImpl<$Res>
    extends _$ModuleStateCopyWithImpl<$Res, _$ModuleTransform>
    implements _$$ModuleTransformCopyWith<$Res> {
  __$$ModuleTransformCopyWithImpl(
      _$ModuleTransform _value, $Res Function(_$ModuleTransform) _then)
      : super(_value, _then);
}

/// @nodoc
@JsonSerializable()
class _$ModuleTransform extends ModuleTransform {
  const _$ModuleTransform({final String? $type})
      : $type = $type ?? 'transform',
        super._();

  factory _$ModuleTransform.fromJson(Map<String, dynamic> json) =>
      _$$ModuleTransformFromJson(json);

  @JsonKey(name: 'runtimeType')
  final String $type;

  @override
  String toString() {
    return 'ModuleState.transform()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType && other is _$ModuleTransform);
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() initial,
    required TResult Function() file,
    required TResult Function() extract,
    required TResult Function() transform,
    required TResult Function() load,
    required TResult Function() complete,
    required TResult Function() error,
  }) {
    return transform();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? initial,
    TResult? Function()? file,
    TResult? Function()? extract,
    TResult? Function()? transform,
    TResult? Function()? load,
    TResult? Function()? complete,
    TResult? Function()? error,
  }) {
    return transform?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? initial,
    TResult Function()? file,
    TResult Function()? extract,
    TResult Function()? transform,
    TResult Function()? load,
    TResult Function()? complete,
    TResult Function()? error,
    required TResult orElse(),
  }) {
    if (transform != null) {
      return transform();
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(ModuleInitial value) initial,
    required TResult Function(ModuleFile value) file,
    required TResult Function(ModuleExtract value) extract,
    required TResult Function(ModuleTransform value) transform,
    required TResult Function(ModuleLoad value) load,
    required TResult Function(ModuleComplete value) complete,
    required TResult Function(ModuleError value) error,
  }) {
    return transform(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(ModuleInitial value)? initial,
    TResult? Function(ModuleFile value)? file,
    TResult? Function(ModuleExtract value)? extract,
    TResult? Function(ModuleTransform value)? transform,
    TResult? Function(ModuleLoad value)? load,
    TResult? Function(ModuleComplete value)? complete,
    TResult? Function(ModuleError value)? error,
  }) {
    return transform?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(ModuleInitial value)? initial,
    TResult Function(ModuleFile value)? file,
    TResult Function(ModuleExtract value)? extract,
    TResult Function(ModuleTransform value)? transform,
    TResult Function(ModuleLoad value)? load,
    TResult Function(ModuleComplete value)? complete,
    TResult Function(ModuleError value)? error,
    required TResult orElse(),
  }) {
    if (transform != null) {
      return transform(this);
    }
    return orElse();
  }

  @override
  Map<String, dynamic> toJson() {
    return _$$ModuleTransformToJson(
      this,
    );
  }
}

abstract class ModuleTransform extends ModuleState {
  const factory ModuleTransform() = _$ModuleTransform;
  const ModuleTransform._() : super._();

  factory ModuleTransform.fromJson(Map<String, dynamic> json) =
      _$ModuleTransform.fromJson;
}

/// @nodoc
abstract class _$$ModuleLoadCopyWith<$Res> {
  factory _$$ModuleLoadCopyWith(
          _$ModuleLoad value, $Res Function(_$ModuleLoad) then) =
      __$$ModuleLoadCopyWithImpl<$Res>;
}

/// @nodoc
class __$$ModuleLoadCopyWithImpl<$Res>
    extends _$ModuleStateCopyWithImpl<$Res, _$ModuleLoad>
    implements _$$ModuleLoadCopyWith<$Res> {
  __$$ModuleLoadCopyWithImpl(
      _$ModuleLoad _value, $Res Function(_$ModuleLoad) _then)
      : super(_value, _then);
}

/// @nodoc
@JsonSerializable()
class _$ModuleLoad extends ModuleLoad {
  const _$ModuleLoad({final String? $type})
      : $type = $type ?? 'load',
        super._();

  factory _$ModuleLoad.fromJson(Map<String, dynamic> json) =>
      _$$ModuleLoadFromJson(json);

  @JsonKey(name: 'runtimeType')
  final String $type;

  @override
  String toString() {
    return 'ModuleState.load()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType && other is _$ModuleLoad);
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() initial,
    required TResult Function() file,
    required TResult Function() extract,
    required TResult Function() transform,
    required TResult Function() load,
    required TResult Function() complete,
    required TResult Function() error,
  }) {
    return load();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? initial,
    TResult? Function()? file,
    TResult? Function()? extract,
    TResult? Function()? transform,
    TResult? Function()? load,
    TResult? Function()? complete,
    TResult? Function()? error,
  }) {
    return load?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? initial,
    TResult Function()? file,
    TResult Function()? extract,
    TResult Function()? transform,
    TResult Function()? load,
    TResult Function()? complete,
    TResult Function()? error,
    required TResult orElse(),
  }) {
    if (load != null) {
      return load();
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(ModuleInitial value) initial,
    required TResult Function(ModuleFile value) file,
    required TResult Function(ModuleExtract value) extract,
    required TResult Function(ModuleTransform value) transform,
    required TResult Function(ModuleLoad value) load,
    required TResult Function(ModuleComplete value) complete,
    required TResult Function(ModuleError value) error,
  }) {
    return load(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(ModuleInitial value)? initial,
    TResult? Function(ModuleFile value)? file,
    TResult? Function(ModuleExtract value)? extract,
    TResult? Function(ModuleTransform value)? transform,
    TResult? Function(ModuleLoad value)? load,
    TResult? Function(ModuleComplete value)? complete,
    TResult? Function(ModuleError value)? error,
  }) {
    return load?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(ModuleInitial value)? initial,
    TResult Function(ModuleFile value)? file,
    TResult Function(ModuleExtract value)? extract,
    TResult Function(ModuleTransform value)? transform,
    TResult Function(ModuleLoad value)? load,
    TResult Function(ModuleComplete value)? complete,
    TResult Function(ModuleError value)? error,
    required TResult orElse(),
  }) {
    if (load != null) {
      return load(this);
    }
    return orElse();
  }

  @override
  Map<String, dynamic> toJson() {
    return _$$ModuleLoadToJson(
      this,
    );
  }
}

abstract class ModuleLoad extends ModuleState {
  const factory ModuleLoad() = _$ModuleLoad;
  const ModuleLoad._() : super._();

  factory ModuleLoad.fromJson(Map<String, dynamic> json) =
      _$ModuleLoad.fromJson;
}

/// @nodoc
abstract class _$$ModuleCompleteCopyWith<$Res> {
  factory _$$ModuleCompleteCopyWith(
          _$ModuleComplete value, $Res Function(_$ModuleComplete) then) =
      __$$ModuleCompleteCopyWithImpl<$Res>;
}

/// @nodoc
class __$$ModuleCompleteCopyWithImpl<$Res>
    extends _$ModuleStateCopyWithImpl<$Res, _$ModuleComplete>
    implements _$$ModuleCompleteCopyWith<$Res> {
  __$$ModuleCompleteCopyWithImpl(
      _$ModuleComplete _value, $Res Function(_$ModuleComplete) _then)
      : super(_value, _then);
}

/// @nodoc
@JsonSerializable()
class _$ModuleComplete extends ModuleComplete {
  const _$ModuleComplete({final String? $type})
      : $type = $type ?? 'complete',
        super._();

  factory _$ModuleComplete.fromJson(Map<String, dynamic> json) =>
      _$$ModuleCompleteFromJson(json);

  @JsonKey(name: 'runtimeType')
  final String $type;

  @override
  String toString() {
    return 'ModuleState.complete()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType && other is _$ModuleComplete);
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() initial,
    required TResult Function() file,
    required TResult Function() extract,
    required TResult Function() transform,
    required TResult Function() load,
    required TResult Function() complete,
    required TResult Function() error,
  }) {
    return complete();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? initial,
    TResult? Function()? file,
    TResult? Function()? extract,
    TResult? Function()? transform,
    TResult? Function()? load,
    TResult? Function()? complete,
    TResult? Function()? error,
  }) {
    return complete?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? initial,
    TResult Function()? file,
    TResult Function()? extract,
    TResult Function()? transform,
    TResult Function()? load,
    TResult Function()? complete,
    TResult Function()? error,
    required TResult orElse(),
  }) {
    if (complete != null) {
      return complete();
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(ModuleInitial value) initial,
    required TResult Function(ModuleFile value) file,
    required TResult Function(ModuleExtract value) extract,
    required TResult Function(ModuleTransform value) transform,
    required TResult Function(ModuleLoad value) load,
    required TResult Function(ModuleComplete value) complete,
    required TResult Function(ModuleError value) error,
  }) {
    return complete(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(ModuleInitial value)? initial,
    TResult? Function(ModuleFile value)? file,
    TResult? Function(ModuleExtract value)? extract,
    TResult? Function(ModuleTransform value)? transform,
    TResult? Function(ModuleLoad value)? load,
    TResult? Function(ModuleComplete value)? complete,
    TResult? Function(ModuleError value)? error,
  }) {
    return complete?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(ModuleInitial value)? initial,
    TResult Function(ModuleFile value)? file,
    TResult Function(ModuleExtract value)? extract,
    TResult Function(ModuleTransform value)? transform,
    TResult Function(ModuleLoad value)? load,
    TResult Function(ModuleComplete value)? complete,
    TResult Function(ModuleError value)? error,
    required TResult orElse(),
  }) {
    if (complete != null) {
      return complete(this);
    }
    return orElse();
  }

  @override
  Map<String, dynamic> toJson() {
    return _$$ModuleCompleteToJson(
      this,
    );
  }
}

abstract class ModuleComplete extends ModuleState {
  const factory ModuleComplete() = _$ModuleComplete;
  const ModuleComplete._() : super._();

  factory ModuleComplete.fromJson(Map<String, dynamic> json) =
      _$ModuleComplete.fromJson;
}

/// @nodoc
abstract class _$$ModuleErrorCopyWith<$Res> {
  factory _$$ModuleErrorCopyWith(
          _$ModuleError value, $Res Function(_$ModuleError) then) =
      __$$ModuleErrorCopyWithImpl<$Res>;
}

/// @nodoc
class __$$ModuleErrorCopyWithImpl<$Res>
    extends _$ModuleStateCopyWithImpl<$Res, _$ModuleError>
    implements _$$ModuleErrorCopyWith<$Res> {
  __$$ModuleErrorCopyWithImpl(
      _$ModuleError _value, $Res Function(_$ModuleError) _then)
      : super(_value, _then);
}

/// @nodoc
@JsonSerializable()
class _$ModuleError extends ModuleError {
  const _$ModuleError({final String? $type})
      : $type = $type ?? 'error',
        super._();

  factory _$ModuleError.fromJson(Map<String, dynamic> json) =>
      _$$ModuleErrorFromJson(json);

  @JsonKey(name: 'runtimeType')
  final String $type;

  @override
  String toString() {
    return 'ModuleState.error()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType && other is _$ModuleError);
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() initial,
    required TResult Function() file,
    required TResult Function() extract,
    required TResult Function() transform,
    required TResult Function() load,
    required TResult Function() complete,
    required TResult Function() error,
  }) {
    return error();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? initial,
    TResult? Function()? file,
    TResult? Function()? extract,
    TResult? Function()? transform,
    TResult? Function()? load,
    TResult? Function()? complete,
    TResult? Function()? error,
  }) {
    return error?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? initial,
    TResult Function()? file,
    TResult Function()? extract,
    TResult Function()? transform,
    TResult Function()? load,
    TResult Function()? complete,
    TResult Function()? error,
    required TResult orElse(),
  }) {
    if (error != null) {
      return error();
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(ModuleInitial value) initial,
    required TResult Function(ModuleFile value) file,
    required TResult Function(ModuleExtract value) extract,
    required TResult Function(ModuleTransform value) transform,
    required TResult Function(ModuleLoad value) load,
    required TResult Function(ModuleComplete value) complete,
    required TResult Function(ModuleError value) error,
  }) {
    return error(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(ModuleInitial value)? initial,
    TResult? Function(ModuleFile value)? file,
    TResult? Function(ModuleExtract value)? extract,
    TResult? Function(ModuleTransform value)? transform,
    TResult? Function(ModuleLoad value)? load,
    TResult? Function(ModuleComplete value)? complete,
    TResult? Function(ModuleError value)? error,
  }) {
    return error?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(ModuleInitial value)? initial,
    TResult Function(ModuleFile value)? file,
    TResult Function(ModuleExtract value)? extract,
    TResult Function(ModuleTransform value)? transform,
    TResult Function(ModuleLoad value)? load,
    TResult Function(ModuleComplete value)? complete,
    TResult Function(ModuleError value)? error,
    required TResult orElse(),
  }) {
    if (error != null) {
      return error(this);
    }
    return orElse();
  }

  @override
  Map<String, dynamic> toJson() {
    return _$$ModuleErrorToJson(
      this,
    );
  }
}

abstract class ModuleError extends ModuleState {
  const factory ModuleError() = _$ModuleError;
  const ModuleError._() : super._();

  factory ModuleError.fromJson(Map<String, dynamic> json) =
      _$ModuleError.fromJson;
}
