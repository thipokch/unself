// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'source_state.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

SourceState _$SourceStateFromJson(Map<String, dynamic> json) {
  switch (json['runtimeType']) {
    case 'initial':
      return SourceInitial.fromJson(json);
    case 'configure':
      return SourceConfigure.fromJson(json);
    case 'retrieve':
      return SourceRetrieve.fromJson(json);
    case 'prepare':
      return SourcePrepare.fromJson(json);
    case 'process':
      return SourceProcess.fromJson(json);
    case 'complete':
      return SourceComplete.fromJson(json);
    case 'error':
      return SourceError.fromJson(json);

    default:
      throw CheckedFromJsonException(json, 'runtimeType', 'SourceState',
          'Invalid union type "${json['runtimeType']}"!');
  }
}

/// @nodoc
mixin _$SourceState {
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() initial,
    required TResult Function(Iterable<ModuleSpec> modules) configure,
    required TResult Function(XFile file) retrieve,
    required TResult Function(Map<String, Iterable<int>> fileBytes) prepare,
    required TResult Function() process,
    required TResult Function() complete,
    required TResult Function() error,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? initial,
    TResult? Function(Iterable<ModuleSpec> modules)? configure,
    TResult? Function(XFile file)? retrieve,
    TResult? Function(Map<String, Iterable<int>> fileBytes)? prepare,
    TResult? Function()? process,
    TResult? Function()? complete,
    TResult? Function()? error,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? initial,
    TResult Function(Iterable<ModuleSpec> modules)? configure,
    TResult Function(XFile file)? retrieve,
    TResult Function(Map<String, Iterable<int>> fileBytes)? prepare,
    TResult Function()? process,
    TResult Function()? complete,
    TResult Function()? error,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(SourceInitial value) initial,
    required TResult Function(SourceConfigure value) configure,
    required TResult Function(SourceRetrieve value) retrieve,
    required TResult Function(SourcePrepare value) prepare,
    required TResult Function(SourceProcess value) process,
    required TResult Function(SourceComplete value) complete,
    required TResult Function(SourceError value) error,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(SourceInitial value)? initial,
    TResult? Function(SourceConfigure value)? configure,
    TResult? Function(SourceRetrieve value)? retrieve,
    TResult? Function(SourcePrepare value)? prepare,
    TResult? Function(SourceProcess value)? process,
    TResult? Function(SourceComplete value)? complete,
    TResult? Function(SourceError value)? error,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(SourceInitial value)? initial,
    TResult Function(SourceConfigure value)? configure,
    TResult Function(SourceRetrieve value)? retrieve,
    TResult Function(SourcePrepare value)? prepare,
    TResult Function(SourceProcess value)? process,
    TResult Function(SourceComplete value)? complete,
    TResult Function(SourceError value)? error,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $SourceStateCopyWith<$Res> {
  factory $SourceStateCopyWith(
          SourceState value, $Res Function(SourceState) then) =
      _$SourceStateCopyWithImpl<$Res, SourceState>;
}

/// @nodoc
class _$SourceStateCopyWithImpl<$Res, $Val extends SourceState>
    implements $SourceStateCopyWith<$Res> {
  _$SourceStateCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;
}

/// @nodoc
abstract class _$$SourceInitialCopyWith<$Res> {
  factory _$$SourceInitialCopyWith(
          _$SourceInitial value, $Res Function(_$SourceInitial) then) =
      __$$SourceInitialCopyWithImpl<$Res>;
}

/// @nodoc
class __$$SourceInitialCopyWithImpl<$Res>
    extends _$SourceStateCopyWithImpl<$Res, _$SourceInitial>
    implements _$$SourceInitialCopyWith<$Res> {
  __$$SourceInitialCopyWithImpl(
      _$SourceInitial _value, $Res Function(_$SourceInitial) _then)
      : super(_value, _then);
}

/// @nodoc
@JsonSerializable()
class _$SourceInitial extends SourceInitial {
  const _$SourceInitial({final String? $type})
      : $type = $type ?? 'initial',
        super._();

  factory _$SourceInitial.fromJson(Map<String, dynamic> json) =>
      _$$SourceInitialFromJson(json);

  @JsonKey(name: 'runtimeType')
  final String $type;

  @override
  String toString() {
    return 'SourceState.initial()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType && other is _$SourceInitial);
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() initial,
    required TResult Function(Iterable<ModuleSpec> modules) configure,
    required TResult Function(XFile file) retrieve,
    required TResult Function(Map<String, Iterable<int>> fileBytes) prepare,
    required TResult Function() process,
    required TResult Function() complete,
    required TResult Function() error,
  }) {
    return initial();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? initial,
    TResult? Function(Iterable<ModuleSpec> modules)? configure,
    TResult? Function(XFile file)? retrieve,
    TResult? Function(Map<String, Iterable<int>> fileBytes)? prepare,
    TResult? Function()? process,
    TResult? Function()? complete,
    TResult? Function()? error,
  }) {
    return initial?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? initial,
    TResult Function(Iterable<ModuleSpec> modules)? configure,
    TResult Function(XFile file)? retrieve,
    TResult Function(Map<String, Iterable<int>> fileBytes)? prepare,
    TResult Function()? process,
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
    required TResult Function(SourceInitial value) initial,
    required TResult Function(SourceConfigure value) configure,
    required TResult Function(SourceRetrieve value) retrieve,
    required TResult Function(SourcePrepare value) prepare,
    required TResult Function(SourceProcess value) process,
    required TResult Function(SourceComplete value) complete,
    required TResult Function(SourceError value) error,
  }) {
    return initial(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(SourceInitial value)? initial,
    TResult? Function(SourceConfigure value)? configure,
    TResult? Function(SourceRetrieve value)? retrieve,
    TResult? Function(SourcePrepare value)? prepare,
    TResult? Function(SourceProcess value)? process,
    TResult? Function(SourceComplete value)? complete,
    TResult? Function(SourceError value)? error,
  }) {
    return initial?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(SourceInitial value)? initial,
    TResult Function(SourceConfigure value)? configure,
    TResult Function(SourceRetrieve value)? retrieve,
    TResult Function(SourcePrepare value)? prepare,
    TResult Function(SourceProcess value)? process,
    TResult Function(SourceComplete value)? complete,
    TResult Function(SourceError value)? error,
    required TResult orElse(),
  }) {
    if (initial != null) {
      return initial(this);
    }
    return orElse();
  }

  @override
  Map<String, dynamic> toJson() {
    return _$$SourceInitialToJson(
      this,
    );
  }
}

abstract class SourceInitial extends SourceState {
  const factory SourceInitial() = _$SourceInitial;
  const SourceInitial._() : super._();

  factory SourceInitial.fromJson(Map<String, dynamic> json) =
      _$SourceInitial.fromJson;
}

/// @nodoc
abstract class _$$SourceConfigureCopyWith<$Res> {
  factory _$$SourceConfigureCopyWith(
          _$SourceConfigure value, $Res Function(_$SourceConfigure) then) =
      __$$SourceConfigureCopyWithImpl<$Res>;
  @useResult
  $Res call({Iterable<ModuleSpec> modules});
}

/// @nodoc
class __$$SourceConfigureCopyWithImpl<$Res>
    extends _$SourceStateCopyWithImpl<$Res, _$SourceConfigure>
    implements _$$SourceConfigureCopyWith<$Res> {
  __$$SourceConfigureCopyWithImpl(
      _$SourceConfigure _value, $Res Function(_$SourceConfigure) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? modules = null,
  }) {
    return _then(_$SourceConfigure(
      modules: null == modules
          ? _value.modules
          : modules // ignore: cast_nullable_to_non_nullable
              as Iterable<ModuleSpec>,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$SourceConfigure extends SourceConfigure {
  const _$SourceConfigure({required this.modules, final String? $type})
      : $type = $type ?? 'configure',
        super._();

  factory _$SourceConfigure.fromJson(Map<String, dynamic> json) =>
      _$$SourceConfigureFromJson(json);

  @override
  final Iterable<ModuleSpec> modules;

  @JsonKey(name: 'runtimeType')
  final String $type;

  @override
  String toString() {
    return 'SourceState.configure(modules: $modules)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$SourceConfigure &&
            const DeepCollectionEquality().equals(other.modules, modules));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode =>
      Object.hash(runtimeType, const DeepCollectionEquality().hash(modules));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$SourceConfigureCopyWith<_$SourceConfigure> get copyWith =>
      __$$SourceConfigureCopyWithImpl<_$SourceConfigure>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() initial,
    required TResult Function(Iterable<ModuleSpec> modules) configure,
    required TResult Function(XFile file) retrieve,
    required TResult Function(Map<String, Iterable<int>> fileBytes) prepare,
    required TResult Function() process,
    required TResult Function() complete,
    required TResult Function() error,
  }) {
    return configure(modules);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? initial,
    TResult? Function(Iterable<ModuleSpec> modules)? configure,
    TResult? Function(XFile file)? retrieve,
    TResult? Function(Map<String, Iterable<int>> fileBytes)? prepare,
    TResult? Function()? process,
    TResult? Function()? complete,
    TResult? Function()? error,
  }) {
    return configure?.call(modules);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? initial,
    TResult Function(Iterable<ModuleSpec> modules)? configure,
    TResult Function(XFile file)? retrieve,
    TResult Function(Map<String, Iterable<int>> fileBytes)? prepare,
    TResult Function()? process,
    TResult Function()? complete,
    TResult Function()? error,
    required TResult orElse(),
  }) {
    if (configure != null) {
      return configure(modules);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(SourceInitial value) initial,
    required TResult Function(SourceConfigure value) configure,
    required TResult Function(SourceRetrieve value) retrieve,
    required TResult Function(SourcePrepare value) prepare,
    required TResult Function(SourceProcess value) process,
    required TResult Function(SourceComplete value) complete,
    required TResult Function(SourceError value) error,
  }) {
    return configure(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(SourceInitial value)? initial,
    TResult? Function(SourceConfigure value)? configure,
    TResult? Function(SourceRetrieve value)? retrieve,
    TResult? Function(SourcePrepare value)? prepare,
    TResult? Function(SourceProcess value)? process,
    TResult? Function(SourceComplete value)? complete,
    TResult? Function(SourceError value)? error,
  }) {
    return configure?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(SourceInitial value)? initial,
    TResult Function(SourceConfigure value)? configure,
    TResult Function(SourceRetrieve value)? retrieve,
    TResult Function(SourcePrepare value)? prepare,
    TResult Function(SourceProcess value)? process,
    TResult Function(SourceComplete value)? complete,
    TResult Function(SourceError value)? error,
    required TResult orElse(),
  }) {
    if (configure != null) {
      return configure(this);
    }
    return orElse();
  }

  @override
  Map<String, dynamic> toJson() {
    return _$$SourceConfigureToJson(
      this,
    );
  }
}

abstract class SourceConfigure extends SourceState {
  const factory SourceConfigure({required final Iterable<ModuleSpec> modules}) =
      _$SourceConfigure;
  const SourceConfigure._() : super._();

  factory SourceConfigure.fromJson(Map<String, dynamic> json) =
      _$SourceConfigure.fromJson;

  Iterable<ModuleSpec> get modules;
  @JsonKey(ignore: true)
  _$$SourceConfigureCopyWith<_$SourceConfigure> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$SourceRetrieveCopyWith<$Res> {
  factory _$$SourceRetrieveCopyWith(
          _$SourceRetrieve value, $Res Function(_$SourceRetrieve) then) =
      __$$SourceRetrieveCopyWithImpl<$Res>;
  @useResult
  $Res call({XFile file});
}

/// @nodoc
class __$$SourceRetrieveCopyWithImpl<$Res>
    extends _$SourceStateCopyWithImpl<$Res, _$SourceRetrieve>
    implements _$$SourceRetrieveCopyWith<$Res> {
  __$$SourceRetrieveCopyWithImpl(
      _$SourceRetrieve _value, $Res Function(_$SourceRetrieve) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? file = null,
  }) {
    return _then(_$SourceRetrieve(
      file: null == file
          ? _value.file
          : file // ignore: cast_nullable_to_non_nullable
              as XFile,
    ));
  }
}

/// @nodoc
@JsonSerializable()
@XFileConverter()
class _$SourceRetrieve extends SourceRetrieve {
  const _$SourceRetrieve({required this.file, final String? $type})
      : $type = $type ?? 'retrieve',
        super._();

  factory _$SourceRetrieve.fromJson(Map<String, dynamic> json) =>
      _$$SourceRetrieveFromJson(json);

  @override
  final XFile file;

  @JsonKey(name: 'runtimeType')
  final String $type;

  @override
  String toString() {
    return 'SourceState.retrieve(file: $file)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$SourceRetrieve &&
            (identical(other.file, file) || other.file == file));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, file);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$SourceRetrieveCopyWith<_$SourceRetrieve> get copyWith =>
      __$$SourceRetrieveCopyWithImpl<_$SourceRetrieve>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() initial,
    required TResult Function(Iterable<ModuleSpec> modules) configure,
    required TResult Function(XFile file) retrieve,
    required TResult Function(Map<String, Iterable<int>> fileBytes) prepare,
    required TResult Function() process,
    required TResult Function() complete,
    required TResult Function() error,
  }) {
    return retrieve(file);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? initial,
    TResult? Function(Iterable<ModuleSpec> modules)? configure,
    TResult? Function(XFile file)? retrieve,
    TResult? Function(Map<String, Iterable<int>> fileBytes)? prepare,
    TResult? Function()? process,
    TResult? Function()? complete,
    TResult? Function()? error,
  }) {
    return retrieve?.call(file);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? initial,
    TResult Function(Iterable<ModuleSpec> modules)? configure,
    TResult Function(XFile file)? retrieve,
    TResult Function(Map<String, Iterable<int>> fileBytes)? prepare,
    TResult Function()? process,
    TResult Function()? complete,
    TResult Function()? error,
    required TResult orElse(),
  }) {
    if (retrieve != null) {
      return retrieve(file);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(SourceInitial value) initial,
    required TResult Function(SourceConfigure value) configure,
    required TResult Function(SourceRetrieve value) retrieve,
    required TResult Function(SourcePrepare value) prepare,
    required TResult Function(SourceProcess value) process,
    required TResult Function(SourceComplete value) complete,
    required TResult Function(SourceError value) error,
  }) {
    return retrieve(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(SourceInitial value)? initial,
    TResult? Function(SourceConfigure value)? configure,
    TResult? Function(SourceRetrieve value)? retrieve,
    TResult? Function(SourcePrepare value)? prepare,
    TResult? Function(SourceProcess value)? process,
    TResult? Function(SourceComplete value)? complete,
    TResult? Function(SourceError value)? error,
  }) {
    return retrieve?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(SourceInitial value)? initial,
    TResult Function(SourceConfigure value)? configure,
    TResult Function(SourceRetrieve value)? retrieve,
    TResult Function(SourcePrepare value)? prepare,
    TResult Function(SourceProcess value)? process,
    TResult Function(SourceComplete value)? complete,
    TResult Function(SourceError value)? error,
    required TResult orElse(),
  }) {
    if (retrieve != null) {
      return retrieve(this);
    }
    return orElse();
  }

  @override
  Map<String, dynamic> toJson() {
    return _$$SourceRetrieveToJson(
      this,
    );
  }
}

abstract class SourceRetrieve extends SourceState {
  const factory SourceRetrieve({required final XFile file}) = _$SourceRetrieve;
  const SourceRetrieve._() : super._();

  factory SourceRetrieve.fromJson(Map<String, dynamic> json) =
      _$SourceRetrieve.fromJson;

  XFile get file;
  @JsonKey(ignore: true)
  _$$SourceRetrieveCopyWith<_$SourceRetrieve> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$SourcePrepareCopyWith<$Res> {
  factory _$$SourcePrepareCopyWith(
          _$SourcePrepare value, $Res Function(_$SourcePrepare) then) =
      __$$SourcePrepareCopyWithImpl<$Res>;
  @useResult
  $Res call({Map<String, Iterable<int>> fileBytes});
}

/// @nodoc
class __$$SourcePrepareCopyWithImpl<$Res>
    extends _$SourceStateCopyWithImpl<$Res, _$SourcePrepare>
    implements _$$SourcePrepareCopyWith<$Res> {
  __$$SourcePrepareCopyWithImpl(
      _$SourcePrepare _value, $Res Function(_$SourcePrepare) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? fileBytes = null,
  }) {
    return _then(_$SourcePrepare(
      fileBytes: null == fileBytes
          ? _value._fileBytes
          : fileBytes // ignore: cast_nullable_to_non_nullable
              as Map<String, Iterable<int>>,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$SourcePrepare extends SourcePrepare {
  const _$SourcePrepare(
      {required final Map<String, Iterable<int>> fileBytes,
      final String? $type})
      : _fileBytes = fileBytes,
        $type = $type ?? 'prepare',
        super._();

  factory _$SourcePrepare.fromJson(Map<String, dynamic> json) =>
      _$$SourcePrepareFromJson(json);

  final Map<String, Iterable<int>> _fileBytes;
  @override
  Map<String, Iterable<int>> get fileBytes {
    if (_fileBytes is EqualUnmodifiableMapView) return _fileBytes;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableMapView(_fileBytes);
  }

  @JsonKey(name: 'runtimeType')
  final String $type;

  @override
  String toString() {
    return 'SourceState.prepare(fileBytes: $fileBytes)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$SourcePrepare &&
            const DeepCollectionEquality()
                .equals(other._fileBytes, _fileBytes));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode =>
      Object.hash(runtimeType, const DeepCollectionEquality().hash(_fileBytes));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$SourcePrepareCopyWith<_$SourcePrepare> get copyWith =>
      __$$SourcePrepareCopyWithImpl<_$SourcePrepare>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() initial,
    required TResult Function(Iterable<ModuleSpec> modules) configure,
    required TResult Function(XFile file) retrieve,
    required TResult Function(Map<String, Iterable<int>> fileBytes) prepare,
    required TResult Function() process,
    required TResult Function() complete,
    required TResult Function() error,
  }) {
    return prepare(fileBytes);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? initial,
    TResult? Function(Iterable<ModuleSpec> modules)? configure,
    TResult? Function(XFile file)? retrieve,
    TResult? Function(Map<String, Iterable<int>> fileBytes)? prepare,
    TResult? Function()? process,
    TResult? Function()? complete,
    TResult? Function()? error,
  }) {
    return prepare?.call(fileBytes);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? initial,
    TResult Function(Iterable<ModuleSpec> modules)? configure,
    TResult Function(XFile file)? retrieve,
    TResult Function(Map<String, Iterable<int>> fileBytes)? prepare,
    TResult Function()? process,
    TResult Function()? complete,
    TResult Function()? error,
    required TResult orElse(),
  }) {
    if (prepare != null) {
      return prepare(fileBytes);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(SourceInitial value) initial,
    required TResult Function(SourceConfigure value) configure,
    required TResult Function(SourceRetrieve value) retrieve,
    required TResult Function(SourcePrepare value) prepare,
    required TResult Function(SourceProcess value) process,
    required TResult Function(SourceComplete value) complete,
    required TResult Function(SourceError value) error,
  }) {
    return prepare(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(SourceInitial value)? initial,
    TResult? Function(SourceConfigure value)? configure,
    TResult? Function(SourceRetrieve value)? retrieve,
    TResult? Function(SourcePrepare value)? prepare,
    TResult? Function(SourceProcess value)? process,
    TResult? Function(SourceComplete value)? complete,
    TResult? Function(SourceError value)? error,
  }) {
    return prepare?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(SourceInitial value)? initial,
    TResult Function(SourceConfigure value)? configure,
    TResult Function(SourceRetrieve value)? retrieve,
    TResult Function(SourcePrepare value)? prepare,
    TResult Function(SourceProcess value)? process,
    TResult Function(SourceComplete value)? complete,
    TResult Function(SourceError value)? error,
    required TResult orElse(),
  }) {
    if (prepare != null) {
      return prepare(this);
    }
    return orElse();
  }

  @override
  Map<String, dynamic> toJson() {
    return _$$SourcePrepareToJson(
      this,
    );
  }
}

abstract class SourcePrepare extends SourceState {
  const factory SourcePrepare(
      {required final Map<String, Iterable<int>> fileBytes}) = _$SourcePrepare;
  const SourcePrepare._() : super._();

  factory SourcePrepare.fromJson(Map<String, dynamic> json) =
      _$SourcePrepare.fromJson;

  Map<String, Iterable<int>> get fileBytes;
  @JsonKey(ignore: true)
  _$$SourcePrepareCopyWith<_$SourcePrepare> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$SourceProcessCopyWith<$Res> {
  factory _$$SourceProcessCopyWith(
          _$SourceProcess value, $Res Function(_$SourceProcess) then) =
      __$$SourceProcessCopyWithImpl<$Res>;
}

/// @nodoc
class __$$SourceProcessCopyWithImpl<$Res>
    extends _$SourceStateCopyWithImpl<$Res, _$SourceProcess>
    implements _$$SourceProcessCopyWith<$Res> {
  __$$SourceProcessCopyWithImpl(
      _$SourceProcess _value, $Res Function(_$SourceProcess) _then)
      : super(_value, _then);
}

/// @nodoc
@JsonSerializable()
class _$SourceProcess extends SourceProcess {
  const _$SourceProcess({final String? $type})
      : $type = $type ?? 'process',
        super._();

  factory _$SourceProcess.fromJson(Map<String, dynamic> json) =>
      _$$SourceProcessFromJson(json);

  @JsonKey(name: 'runtimeType')
  final String $type;

  @override
  String toString() {
    return 'SourceState.process()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType && other is _$SourceProcess);
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() initial,
    required TResult Function(Iterable<ModuleSpec> modules) configure,
    required TResult Function(XFile file) retrieve,
    required TResult Function(Map<String, Iterable<int>> fileBytes) prepare,
    required TResult Function() process,
    required TResult Function() complete,
    required TResult Function() error,
  }) {
    return process();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? initial,
    TResult? Function(Iterable<ModuleSpec> modules)? configure,
    TResult? Function(XFile file)? retrieve,
    TResult? Function(Map<String, Iterable<int>> fileBytes)? prepare,
    TResult? Function()? process,
    TResult? Function()? complete,
    TResult? Function()? error,
  }) {
    return process?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? initial,
    TResult Function(Iterable<ModuleSpec> modules)? configure,
    TResult Function(XFile file)? retrieve,
    TResult Function(Map<String, Iterable<int>> fileBytes)? prepare,
    TResult Function()? process,
    TResult Function()? complete,
    TResult Function()? error,
    required TResult orElse(),
  }) {
    if (process != null) {
      return process();
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(SourceInitial value) initial,
    required TResult Function(SourceConfigure value) configure,
    required TResult Function(SourceRetrieve value) retrieve,
    required TResult Function(SourcePrepare value) prepare,
    required TResult Function(SourceProcess value) process,
    required TResult Function(SourceComplete value) complete,
    required TResult Function(SourceError value) error,
  }) {
    return process(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(SourceInitial value)? initial,
    TResult? Function(SourceConfigure value)? configure,
    TResult? Function(SourceRetrieve value)? retrieve,
    TResult? Function(SourcePrepare value)? prepare,
    TResult? Function(SourceProcess value)? process,
    TResult? Function(SourceComplete value)? complete,
    TResult? Function(SourceError value)? error,
  }) {
    return process?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(SourceInitial value)? initial,
    TResult Function(SourceConfigure value)? configure,
    TResult Function(SourceRetrieve value)? retrieve,
    TResult Function(SourcePrepare value)? prepare,
    TResult Function(SourceProcess value)? process,
    TResult Function(SourceComplete value)? complete,
    TResult Function(SourceError value)? error,
    required TResult orElse(),
  }) {
    if (process != null) {
      return process(this);
    }
    return orElse();
  }

  @override
  Map<String, dynamic> toJson() {
    return _$$SourceProcessToJson(
      this,
    );
  }
}

abstract class SourceProcess extends SourceState {
  const factory SourceProcess() = _$SourceProcess;
  const SourceProcess._() : super._();

  factory SourceProcess.fromJson(Map<String, dynamic> json) =
      _$SourceProcess.fromJson;
}

/// @nodoc
abstract class _$$SourceCompleteCopyWith<$Res> {
  factory _$$SourceCompleteCopyWith(
          _$SourceComplete value, $Res Function(_$SourceComplete) then) =
      __$$SourceCompleteCopyWithImpl<$Res>;
}

/// @nodoc
class __$$SourceCompleteCopyWithImpl<$Res>
    extends _$SourceStateCopyWithImpl<$Res, _$SourceComplete>
    implements _$$SourceCompleteCopyWith<$Res> {
  __$$SourceCompleteCopyWithImpl(
      _$SourceComplete _value, $Res Function(_$SourceComplete) _then)
      : super(_value, _then);
}

/// @nodoc
@JsonSerializable()
class _$SourceComplete extends SourceComplete {
  const _$SourceComplete({final String? $type})
      : $type = $type ?? 'complete',
        super._();

  factory _$SourceComplete.fromJson(Map<String, dynamic> json) =>
      _$$SourceCompleteFromJson(json);

  @JsonKey(name: 'runtimeType')
  final String $type;

  @override
  String toString() {
    return 'SourceState.complete()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType && other is _$SourceComplete);
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() initial,
    required TResult Function(Iterable<ModuleSpec> modules) configure,
    required TResult Function(XFile file) retrieve,
    required TResult Function(Map<String, Iterable<int>> fileBytes) prepare,
    required TResult Function() process,
    required TResult Function() complete,
    required TResult Function() error,
  }) {
    return complete();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? initial,
    TResult? Function(Iterable<ModuleSpec> modules)? configure,
    TResult? Function(XFile file)? retrieve,
    TResult? Function(Map<String, Iterable<int>> fileBytes)? prepare,
    TResult? Function()? process,
    TResult? Function()? complete,
    TResult? Function()? error,
  }) {
    return complete?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? initial,
    TResult Function(Iterable<ModuleSpec> modules)? configure,
    TResult Function(XFile file)? retrieve,
    TResult Function(Map<String, Iterable<int>> fileBytes)? prepare,
    TResult Function()? process,
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
    required TResult Function(SourceInitial value) initial,
    required TResult Function(SourceConfigure value) configure,
    required TResult Function(SourceRetrieve value) retrieve,
    required TResult Function(SourcePrepare value) prepare,
    required TResult Function(SourceProcess value) process,
    required TResult Function(SourceComplete value) complete,
    required TResult Function(SourceError value) error,
  }) {
    return complete(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(SourceInitial value)? initial,
    TResult? Function(SourceConfigure value)? configure,
    TResult? Function(SourceRetrieve value)? retrieve,
    TResult? Function(SourcePrepare value)? prepare,
    TResult? Function(SourceProcess value)? process,
    TResult? Function(SourceComplete value)? complete,
    TResult? Function(SourceError value)? error,
  }) {
    return complete?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(SourceInitial value)? initial,
    TResult Function(SourceConfigure value)? configure,
    TResult Function(SourceRetrieve value)? retrieve,
    TResult Function(SourcePrepare value)? prepare,
    TResult Function(SourceProcess value)? process,
    TResult Function(SourceComplete value)? complete,
    TResult Function(SourceError value)? error,
    required TResult orElse(),
  }) {
    if (complete != null) {
      return complete(this);
    }
    return orElse();
  }

  @override
  Map<String, dynamic> toJson() {
    return _$$SourceCompleteToJson(
      this,
    );
  }
}

abstract class SourceComplete extends SourceState {
  const factory SourceComplete() = _$SourceComplete;
  const SourceComplete._() : super._();

  factory SourceComplete.fromJson(Map<String, dynamic> json) =
      _$SourceComplete.fromJson;
}

/// @nodoc
abstract class _$$SourceErrorCopyWith<$Res> {
  factory _$$SourceErrorCopyWith(
          _$SourceError value, $Res Function(_$SourceError) then) =
      __$$SourceErrorCopyWithImpl<$Res>;
}

/// @nodoc
class __$$SourceErrorCopyWithImpl<$Res>
    extends _$SourceStateCopyWithImpl<$Res, _$SourceError>
    implements _$$SourceErrorCopyWith<$Res> {
  __$$SourceErrorCopyWithImpl(
      _$SourceError _value, $Res Function(_$SourceError) _then)
      : super(_value, _then);
}

/// @nodoc
@JsonSerializable()
class _$SourceError extends SourceError {
  const _$SourceError({final String? $type})
      : $type = $type ?? 'error',
        super._();

  factory _$SourceError.fromJson(Map<String, dynamic> json) =>
      _$$SourceErrorFromJson(json);

  @JsonKey(name: 'runtimeType')
  final String $type;

  @override
  String toString() {
    return 'SourceState.error()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType && other is _$SourceError);
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() initial,
    required TResult Function(Iterable<ModuleSpec> modules) configure,
    required TResult Function(XFile file) retrieve,
    required TResult Function(Map<String, Iterable<int>> fileBytes) prepare,
    required TResult Function() process,
    required TResult Function() complete,
    required TResult Function() error,
  }) {
    return error();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? initial,
    TResult? Function(Iterable<ModuleSpec> modules)? configure,
    TResult? Function(XFile file)? retrieve,
    TResult? Function(Map<String, Iterable<int>> fileBytes)? prepare,
    TResult? Function()? process,
    TResult? Function()? complete,
    TResult? Function()? error,
  }) {
    return error?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? initial,
    TResult Function(Iterable<ModuleSpec> modules)? configure,
    TResult Function(XFile file)? retrieve,
    TResult Function(Map<String, Iterable<int>> fileBytes)? prepare,
    TResult Function()? process,
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
    required TResult Function(SourceInitial value) initial,
    required TResult Function(SourceConfigure value) configure,
    required TResult Function(SourceRetrieve value) retrieve,
    required TResult Function(SourcePrepare value) prepare,
    required TResult Function(SourceProcess value) process,
    required TResult Function(SourceComplete value) complete,
    required TResult Function(SourceError value) error,
  }) {
    return error(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(SourceInitial value)? initial,
    TResult? Function(SourceConfigure value)? configure,
    TResult? Function(SourceRetrieve value)? retrieve,
    TResult? Function(SourcePrepare value)? prepare,
    TResult? Function(SourceProcess value)? process,
    TResult? Function(SourceComplete value)? complete,
    TResult? Function(SourceError value)? error,
  }) {
    return error?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(SourceInitial value)? initial,
    TResult Function(SourceConfigure value)? configure,
    TResult Function(SourceRetrieve value)? retrieve,
    TResult Function(SourcePrepare value)? prepare,
    TResult Function(SourceProcess value)? process,
    TResult Function(SourceComplete value)? complete,
    TResult Function(SourceError value)? error,
    required TResult orElse(),
  }) {
    if (error != null) {
      return error(this);
    }
    return orElse();
  }

  @override
  Map<String, dynamic> toJson() {
    return _$$SourceErrorToJson(
      this,
    );
  }
}

abstract class SourceError extends SourceState {
  const factory SourceError() = _$SourceError;
  const SourceError._() : super._();

  factory SourceError.fromJson(Map<String, dynamic> json) =
      _$SourceError.fromJson;
}
