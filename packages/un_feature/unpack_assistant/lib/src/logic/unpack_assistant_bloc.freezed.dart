// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target

part of 'unpack_assistant_bloc.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

/// @nodoc
mixin _$UnpackAssistantEvent {
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String app) selectApp,
    required TResult Function(XFile xFile) selectArchive,
    required TResult Function(List<String> data) selectData,
    required TResult Function() start,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String app)? selectApp,
    TResult? Function(XFile xFile)? selectArchive,
    TResult? Function(List<String> data)? selectData,
    TResult? Function()? start,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String app)? selectApp,
    TResult Function(XFile xFile)? selectArchive,
    TResult Function(List<String> data)? selectData,
    TResult Function()? start,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_SelectApp value) selectApp,
    required TResult Function(_SelectArchive value) selectArchive,
    required TResult Function(_SelectData value) selectData,
    required TResult Function(_Start value) start,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_SelectApp value)? selectApp,
    TResult? Function(_SelectArchive value)? selectArchive,
    TResult? Function(_SelectData value)? selectData,
    TResult? Function(_Start value)? start,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_SelectApp value)? selectApp,
    TResult Function(_SelectArchive value)? selectArchive,
    TResult Function(_SelectData value)? selectData,
    TResult Function(_Start value)? start,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $UnpackAssistantEventCopyWith<$Res> {
  factory $UnpackAssistantEventCopyWith(UnpackAssistantEvent value,
          $Res Function(UnpackAssistantEvent) then) =
      _$UnpackAssistantEventCopyWithImpl<$Res, UnpackAssistantEvent>;
}

/// @nodoc
class _$UnpackAssistantEventCopyWithImpl<$Res,
        $Val extends UnpackAssistantEvent>
    implements $UnpackAssistantEventCopyWith<$Res> {
  _$UnpackAssistantEventCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;
}

/// @nodoc
abstract class _$$_SelectAppCopyWith<$Res> {
  factory _$$_SelectAppCopyWith(
          _$_SelectApp value, $Res Function(_$_SelectApp) then) =
      __$$_SelectAppCopyWithImpl<$Res>;
  @useResult
  $Res call({String app});
}

/// @nodoc
class __$$_SelectAppCopyWithImpl<$Res>
    extends _$UnpackAssistantEventCopyWithImpl<$Res, _$_SelectApp>
    implements _$$_SelectAppCopyWith<$Res> {
  __$$_SelectAppCopyWithImpl(
      _$_SelectApp _value, $Res Function(_$_SelectApp) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? app = null,
  }) {
    return _then(_$_SelectApp(
      app: null == app
          ? _value.app
          : app // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc

class _$_SelectApp extends _SelectApp {
  const _$_SelectApp({required this.app}) : super._();

  @override
  final String app;

  @override
  String toString() {
    return 'UnpackAssistantEvent.selectApp(app: $app)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_SelectApp &&
            (identical(other.app, app) || other.app == app));
  }

  @override
  int get hashCode => Object.hash(runtimeType, app);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_SelectAppCopyWith<_$_SelectApp> get copyWith =>
      __$$_SelectAppCopyWithImpl<_$_SelectApp>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String app) selectApp,
    required TResult Function(XFile xFile) selectArchive,
    required TResult Function(List<String> data) selectData,
    required TResult Function() start,
  }) {
    return selectApp(app);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String app)? selectApp,
    TResult? Function(XFile xFile)? selectArchive,
    TResult? Function(List<String> data)? selectData,
    TResult? Function()? start,
  }) {
    return selectApp?.call(app);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String app)? selectApp,
    TResult Function(XFile xFile)? selectArchive,
    TResult Function(List<String> data)? selectData,
    TResult Function()? start,
    required TResult orElse(),
  }) {
    if (selectApp != null) {
      return selectApp(app);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_SelectApp value) selectApp,
    required TResult Function(_SelectArchive value) selectArchive,
    required TResult Function(_SelectData value) selectData,
    required TResult Function(_Start value) start,
  }) {
    return selectApp(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_SelectApp value)? selectApp,
    TResult? Function(_SelectArchive value)? selectArchive,
    TResult? Function(_SelectData value)? selectData,
    TResult? Function(_Start value)? start,
  }) {
    return selectApp?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_SelectApp value)? selectApp,
    TResult Function(_SelectArchive value)? selectArchive,
    TResult Function(_SelectData value)? selectData,
    TResult Function(_Start value)? start,
    required TResult orElse(),
  }) {
    if (selectApp != null) {
      return selectApp(this);
    }
    return orElse();
  }
}

abstract class _SelectApp extends UnpackAssistantEvent {
  const factory _SelectApp({required final String app}) = _$_SelectApp;
  const _SelectApp._() : super._();

  String get app;
  @JsonKey(ignore: true)
  _$$_SelectAppCopyWith<_$_SelectApp> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$_SelectArchiveCopyWith<$Res> {
  factory _$$_SelectArchiveCopyWith(
          _$_SelectArchive value, $Res Function(_$_SelectArchive) then) =
      __$$_SelectArchiveCopyWithImpl<$Res>;
  @useResult
  $Res call({XFile xFile});
}

/// @nodoc
class __$$_SelectArchiveCopyWithImpl<$Res>
    extends _$UnpackAssistantEventCopyWithImpl<$Res, _$_SelectArchive>
    implements _$$_SelectArchiveCopyWith<$Res> {
  __$$_SelectArchiveCopyWithImpl(
      _$_SelectArchive _value, $Res Function(_$_SelectArchive) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? xFile = null,
  }) {
    return _then(_$_SelectArchive(
      xFile: null == xFile
          ? _value.xFile
          : xFile // ignore: cast_nullable_to_non_nullable
              as XFile,
    ));
  }
}

/// @nodoc

class _$_SelectArchive extends _SelectArchive {
  const _$_SelectArchive({required this.xFile}) : super._();

  @override
  final XFile xFile;

  @override
  String toString() {
    return 'UnpackAssistantEvent.selectArchive(xFile: $xFile)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_SelectArchive &&
            (identical(other.xFile, xFile) || other.xFile == xFile));
  }

  @override
  int get hashCode => Object.hash(runtimeType, xFile);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_SelectArchiveCopyWith<_$_SelectArchive> get copyWith =>
      __$$_SelectArchiveCopyWithImpl<_$_SelectArchive>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String app) selectApp,
    required TResult Function(XFile xFile) selectArchive,
    required TResult Function(List<String> data) selectData,
    required TResult Function() start,
  }) {
    return selectArchive(xFile);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String app)? selectApp,
    TResult? Function(XFile xFile)? selectArchive,
    TResult? Function(List<String> data)? selectData,
    TResult? Function()? start,
  }) {
    return selectArchive?.call(xFile);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String app)? selectApp,
    TResult Function(XFile xFile)? selectArchive,
    TResult Function(List<String> data)? selectData,
    TResult Function()? start,
    required TResult orElse(),
  }) {
    if (selectArchive != null) {
      return selectArchive(xFile);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_SelectApp value) selectApp,
    required TResult Function(_SelectArchive value) selectArchive,
    required TResult Function(_SelectData value) selectData,
    required TResult Function(_Start value) start,
  }) {
    return selectArchive(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_SelectApp value)? selectApp,
    TResult? Function(_SelectArchive value)? selectArchive,
    TResult? Function(_SelectData value)? selectData,
    TResult? Function(_Start value)? start,
  }) {
    return selectArchive?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_SelectApp value)? selectApp,
    TResult Function(_SelectArchive value)? selectArchive,
    TResult Function(_SelectData value)? selectData,
    TResult Function(_Start value)? start,
    required TResult orElse(),
  }) {
    if (selectArchive != null) {
      return selectArchive(this);
    }
    return orElse();
  }
}

abstract class _SelectArchive extends UnpackAssistantEvent {
  const factory _SelectArchive({required final XFile xFile}) = _$_SelectArchive;
  const _SelectArchive._() : super._();

  XFile get xFile;
  @JsonKey(ignore: true)
  _$$_SelectArchiveCopyWith<_$_SelectArchive> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$_SelectDataCopyWith<$Res> {
  factory _$$_SelectDataCopyWith(
          _$_SelectData value, $Res Function(_$_SelectData) then) =
      __$$_SelectDataCopyWithImpl<$Res>;
  @useResult
  $Res call({List<String> data});
}

/// @nodoc
class __$$_SelectDataCopyWithImpl<$Res>
    extends _$UnpackAssistantEventCopyWithImpl<$Res, _$_SelectData>
    implements _$$_SelectDataCopyWith<$Res> {
  __$$_SelectDataCopyWithImpl(
      _$_SelectData _value, $Res Function(_$_SelectData) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? data = null,
  }) {
    return _then(_$_SelectData(
      data: null == data
          ? _value._data
          : data // ignore: cast_nullable_to_non_nullable
              as List<String>,
    ));
  }
}

/// @nodoc

class _$_SelectData extends _SelectData {
  const _$_SelectData({required final List<String> data})
      : _data = data,
        super._();

  final List<String> _data;
  @override
  List<String> get data {
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(_data);
  }

  @override
  String toString() {
    return 'UnpackAssistantEvent.selectData(data: $data)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_SelectData &&
            const DeepCollectionEquality().equals(other._data, _data));
  }

  @override
  int get hashCode =>
      Object.hash(runtimeType, const DeepCollectionEquality().hash(_data));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_SelectDataCopyWith<_$_SelectData> get copyWith =>
      __$$_SelectDataCopyWithImpl<_$_SelectData>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String app) selectApp,
    required TResult Function(XFile xFile) selectArchive,
    required TResult Function(List<String> data) selectData,
    required TResult Function() start,
  }) {
    return selectData(data);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String app)? selectApp,
    TResult? Function(XFile xFile)? selectArchive,
    TResult? Function(List<String> data)? selectData,
    TResult? Function()? start,
  }) {
    return selectData?.call(data);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String app)? selectApp,
    TResult Function(XFile xFile)? selectArchive,
    TResult Function(List<String> data)? selectData,
    TResult Function()? start,
    required TResult orElse(),
  }) {
    if (selectData != null) {
      return selectData(data);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_SelectApp value) selectApp,
    required TResult Function(_SelectArchive value) selectArchive,
    required TResult Function(_SelectData value) selectData,
    required TResult Function(_Start value) start,
  }) {
    return selectData(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_SelectApp value)? selectApp,
    TResult? Function(_SelectArchive value)? selectArchive,
    TResult? Function(_SelectData value)? selectData,
    TResult? Function(_Start value)? start,
  }) {
    return selectData?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_SelectApp value)? selectApp,
    TResult Function(_SelectArchive value)? selectArchive,
    TResult Function(_SelectData value)? selectData,
    TResult Function(_Start value)? start,
    required TResult orElse(),
  }) {
    if (selectData != null) {
      return selectData(this);
    }
    return orElse();
  }
}

abstract class _SelectData extends UnpackAssistantEvent {
  const factory _SelectData({required final List<String> data}) = _$_SelectData;
  const _SelectData._() : super._();

  List<String> get data;
  @JsonKey(ignore: true)
  _$$_SelectDataCopyWith<_$_SelectData> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$_StartCopyWith<$Res> {
  factory _$$_StartCopyWith(_$_Start value, $Res Function(_$_Start) then) =
      __$$_StartCopyWithImpl<$Res>;
}

/// @nodoc
class __$$_StartCopyWithImpl<$Res>
    extends _$UnpackAssistantEventCopyWithImpl<$Res, _$_Start>
    implements _$$_StartCopyWith<$Res> {
  __$$_StartCopyWithImpl(_$_Start _value, $Res Function(_$_Start) _then)
      : super(_value, _then);
}

/// @nodoc

class _$_Start extends _Start {
  const _$_Start() : super._();

  @override
  String toString() {
    return 'UnpackAssistantEvent.start()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType && other is _$_Start);
  }

  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String app) selectApp,
    required TResult Function(XFile xFile) selectArchive,
    required TResult Function(List<String> data) selectData,
    required TResult Function() start,
  }) {
    return start();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String app)? selectApp,
    TResult? Function(XFile xFile)? selectArchive,
    TResult? Function(List<String> data)? selectData,
    TResult? Function()? start,
  }) {
    return start?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String app)? selectApp,
    TResult Function(XFile xFile)? selectArchive,
    TResult Function(List<String> data)? selectData,
    TResult Function()? start,
    required TResult orElse(),
  }) {
    if (start != null) {
      return start();
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_SelectApp value) selectApp,
    required TResult Function(_SelectArchive value) selectArchive,
    required TResult Function(_SelectData value) selectData,
    required TResult Function(_Start value) start,
  }) {
    return start(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_SelectApp value)? selectApp,
    TResult? Function(_SelectArchive value)? selectArchive,
    TResult? Function(_SelectData value)? selectData,
    TResult? Function(_Start value)? start,
  }) {
    return start?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_SelectApp value)? selectApp,
    TResult Function(_SelectArchive value)? selectArchive,
    TResult Function(_SelectData value)? selectData,
    TResult Function(_Start value)? start,
    required TResult orElse(),
  }) {
    if (start != null) {
      return start(this);
    }
    return orElse();
  }
}

abstract class _Start extends UnpackAssistantEvent {
  const factory _Start() = _$_Start;
  const _Start._() : super._();
}

/// @nodoc
mixin _$UnpackAssistantState {
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() initial,
    required TResult Function(List<String> apps) apps,
    required TResult Function() archive,
    required TResult Function(List<String> data) data,
    required TResult Function(int progress) processing,
    required TResult Function() completed,
    required TResult Function(Object error, StackTrace stackTrace) errored,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? initial,
    TResult? Function(List<String> apps)? apps,
    TResult? Function()? archive,
    TResult? Function(List<String> data)? data,
    TResult? Function(int progress)? processing,
    TResult? Function()? completed,
    TResult? Function(Object error, StackTrace stackTrace)? errored,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? initial,
    TResult Function(List<String> apps)? apps,
    TResult Function()? archive,
    TResult Function(List<String> data)? data,
    TResult Function(int progress)? processing,
    TResult Function()? completed,
    TResult Function(Object error, StackTrace stackTrace)? errored,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_Initial value) initial,
    required TResult Function(_Apps value) apps,
    required TResult Function(_Archive value) archive,
    required TResult Function(_Data value) data,
    required TResult Function(_Processing value) processing,
    required TResult Function(_Completed value) completed,
    required TResult Function(_Errored value) errored,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_Initial value)? initial,
    TResult? Function(_Apps value)? apps,
    TResult? Function(_Archive value)? archive,
    TResult? Function(_Data value)? data,
    TResult? Function(_Processing value)? processing,
    TResult? Function(_Completed value)? completed,
    TResult? Function(_Errored value)? errored,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_Initial value)? initial,
    TResult Function(_Apps value)? apps,
    TResult Function(_Archive value)? archive,
    TResult Function(_Data value)? data,
    TResult Function(_Processing value)? processing,
    TResult Function(_Completed value)? completed,
    TResult Function(_Errored value)? errored,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $UnpackAssistantStateCopyWith<$Res> {
  factory $UnpackAssistantStateCopyWith(UnpackAssistantState value,
          $Res Function(UnpackAssistantState) then) =
      _$UnpackAssistantStateCopyWithImpl<$Res, UnpackAssistantState>;
}

/// @nodoc
class _$UnpackAssistantStateCopyWithImpl<$Res,
        $Val extends UnpackAssistantState>
    implements $UnpackAssistantStateCopyWith<$Res> {
  _$UnpackAssistantStateCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;
}

/// @nodoc
abstract class _$$_InitialCopyWith<$Res> {
  factory _$$_InitialCopyWith(
          _$_Initial value, $Res Function(_$_Initial) then) =
      __$$_InitialCopyWithImpl<$Res>;
}

/// @nodoc
class __$$_InitialCopyWithImpl<$Res>
    extends _$UnpackAssistantStateCopyWithImpl<$Res, _$_Initial>
    implements _$$_InitialCopyWith<$Res> {
  __$$_InitialCopyWithImpl(_$_Initial _value, $Res Function(_$_Initial) _then)
      : super(_value, _then);
}

/// @nodoc

class _$_Initial extends _Initial {
  const _$_Initial() : super._();

  @override
  String toString() {
    return 'UnpackAssistantState.initial()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType && other is _$_Initial);
  }

  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() initial,
    required TResult Function(List<String> apps) apps,
    required TResult Function() archive,
    required TResult Function(List<String> data) data,
    required TResult Function(int progress) processing,
    required TResult Function() completed,
    required TResult Function(Object error, StackTrace stackTrace) errored,
  }) {
    return initial();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? initial,
    TResult? Function(List<String> apps)? apps,
    TResult? Function()? archive,
    TResult? Function(List<String> data)? data,
    TResult? Function(int progress)? processing,
    TResult? Function()? completed,
    TResult? Function(Object error, StackTrace stackTrace)? errored,
  }) {
    return initial?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? initial,
    TResult Function(List<String> apps)? apps,
    TResult Function()? archive,
    TResult Function(List<String> data)? data,
    TResult Function(int progress)? processing,
    TResult Function()? completed,
    TResult Function(Object error, StackTrace stackTrace)? errored,
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
    required TResult Function(_Initial value) initial,
    required TResult Function(_Apps value) apps,
    required TResult Function(_Archive value) archive,
    required TResult Function(_Data value) data,
    required TResult Function(_Processing value) processing,
    required TResult Function(_Completed value) completed,
    required TResult Function(_Errored value) errored,
  }) {
    return initial(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_Initial value)? initial,
    TResult? Function(_Apps value)? apps,
    TResult? Function(_Archive value)? archive,
    TResult? Function(_Data value)? data,
    TResult? Function(_Processing value)? processing,
    TResult? Function(_Completed value)? completed,
    TResult? Function(_Errored value)? errored,
  }) {
    return initial?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_Initial value)? initial,
    TResult Function(_Apps value)? apps,
    TResult Function(_Archive value)? archive,
    TResult Function(_Data value)? data,
    TResult Function(_Processing value)? processing,
    TResult Function(_Completed value)? completed,
    TResult Function(_Errored value)? errored,
    required TResult orElse(),
  }) {
    if (initial != null) {
      return initial(this);
    }
    return orElse();
  }
}

abstract class _Initial extends UnpackAssistantState {
  const factory _Initial() = _$_Initial;
  const _Initial._() : super._();
}

/// @nodoc
abstract class _$$_AppsCopyWith<$Res> {
  factory _$$_AppsCopyWith(_$_Apps value, $Res Function(_$_Apps) then) =
      __$$_AppsCopyWithImpl<$Res>;
  @useResult
  $Res call({List<String> apps});
}

/// @nodoc
class __$$_AppsCopyWithImpl<$Res>
    extends _$UnpackAssistantStateCopyWithImpl<$Res, _$_Apps>
    implements _$$_AppsCopyWith<$Res> {
  __$$_AppsCopyWithImpl(_$_Apps _value, $Res Function(_$_Apps) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? apps = null,
  }) {
    return _then(_$_Apps(
      apps: null == apps
          ? _value._apps
          : apps // ignore: cast_nullable_to_non_nullable
              as List<String>,
    ));
  }
}

/// @nodoc

class _$_Apps extends _Apps {
  const _$_Apps({required final List<String> apps})
      : _apps = apps,
        super._();

  final List<String> _apps;
  @override
  List<String> get apps {
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(_apps);
  }

  @override
  String toString() {
    return 'UnpackAssistantState.apps(apps: $apps)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_Apps &&
            const DeepCollectionEquality().equals(other._apps, _apps));
  }

  @override
  int get hashCode =>
      Object.hash(runtimeType, const DeepCollectionEquality().hash(_apps));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_AppsCopyWith<_$_Apps> get copyWith =>
      __$$_AppsCopyWithImpl<_$_Apps>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() initial,
    required TResult Function(List<String> apps) apps,
    required TResult Function() archive,
    required TResult Function(List<String> data) data,
    required TResult Function(int progress) processing,
    required TResult Function() completed,
    required TResult Function(Object error, StackTrace stackTrace) errored,
  }) {
    return apps(this.apps);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? initial,
    TResult? Function(List<String> apps)? apps,
    TResult? Function()? archive,
    TResult? Function(List<String> data)? data,
    TResult? Function(int progress)? processing,
    TResult? Function()? completed,
    TResult? Function(Object error, StackTrace stackTrace)? errored,
  }) {
    return apps?.call(this.apps);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? initial,
    TResult Function(List<String> apps)? apps,
    TResult Function()? archive,
    TResult Function(List<String> data)? data,
    TResult Function(int progress)? processing,
    TResult Function()? completed,
    TResult Function(Object error, StackTrace stackTrace)? errored,
    required TResult orElse(),
  }) {
    if (apps != null) {
      return apps(this.apps);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_Initial value) initial,
    required TResult Function(_Apps value) apps,
    required TResult Function(_Archive value) archive,
    required TResult Function(_Data value) data,
    required TResult Function(_Processing value) processing,
    required TResult Function(_Completed value) completed,
    required TResult Function(_Errored value) errored,
  }) {
    return apps(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_Initial value)? initial,
    TResult? Function(_Apps value)? apps,
    TResult? Function(_Archive value)? archive,
    TResult? Function(_Data value)? data,
    TResult? Function(_Processing value)? processing,
    TResult? Function(_Completed value)? completed,
    TResult? Function(_Errored value)? errored,
  }) {
    return apps?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_Initial value)? initial,
    TResult Function(_Apps value)? apps,
    TResult Function(_Archive value)? archive,
    TResult Function(_Data value)? data,
    TResult Function(_Processing value)? processing,
    TResult Function(_Completed value)? completed,
    TResult Function(_Errored value)? errored,
    required TResult orElse(),
  }) {
    if (apps != null) {
      return apps(this);
    }
    return orElse();
  }
}

abstract class _Apps extends UnpackAssistantState {
  const factory _Apps({required final List<String> apps}) = _$_Apps;
  const _Apps._() : super._();

  List<String> get apps;
  @JsonKey(ignore: true)
  _$$_AppsCopyWith<_$_Apps> get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$_ArchiveCopyWith<$Res> {
  factory _$$_ArchiveCopyWith(
          _$_Archive value, $Res Function(_$_Archive) then) =
      __$$_ArchiveCopyWithImpl<$Res>;
}

/// @nodoc
class __$$_ArchiveCopyWithImpl<$Res>
    extends _$UnpackAssistantStateCopyWithImpl<$Res, _$_Archive>
    implements _$$_ArchiveCopyWith<$Res> {
  __$$_ArchiveCopyWithImpl(_$_Archive _value, $Res Function(_$_Archive) _then)
      : super(_value, _then);
}

/// @nodoc

class _$_Archive extends _Archive {
  const _$_Archive() : super._();

  @override
  String toString() {
    return 'UnpackAssistantState.archive()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType && other is _$_Archive);
  }

  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() initial,
    required TResult Function(List<String> apps) apps,
    required TResult Function() archive,
    required TResult Function(List<String> data) data,
    required TResult Function(int progress) processing,
    required TResult Function() completed,
    required TResult Function(Object error, StackTrace stackTrace) errored,
  }) {
    return archive();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? initial,
    TResult? Function(List<String> apps)? apps,
    TResult? Function()? archive,
    TResult? Function(List<String> data)? data,
    TResult? Function(int progress)? processing,
    TResult? Function()? completed,
    TResult? Function(Object error, StackTrace stackTrace)? errored,
  }) {
    return archive?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? initial,
    TResult Function(List<String> apps)? apps,
    TResult Function()? archive,
    TResult Function(List<String> data)? data,
    TResult Function(int progress)? processing,
    TResult Function()? completed,
    TResult Function(Object error, StackTrace stackTrace)? errored,
    required TResult orElse(),
  }) {
    if (archive != null) {
      return archive();
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_Initial value) initial,
    required TResult Function(_Apps value) apps,
    required TResult Function(_Archive value) archive,
    required TResult Function(_Data value) data,
    required TResult Function(_Processing value) processing,
    required TResult Function(_Completed value) completed,
    required TResult Function(_Errored value) errored,
  }) {
    return archive(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_Initial value)? initial,
    TResult? Function(_Apps value)? apps,
    TResult? Function(_Archive value)? archive,
    TResult? Function(_Data value)? data,
    TResult? Function(_Processing value)? processing,
    TResult? Function(_Completed value)? completed,
    TResult? Function(_Errored value)? errored,
  }) {
    return archive?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_Initial value)? initial,
    TResult Function(_Apps value)? apps,
    TResult Function(_Archive value)? archive,
    TResult Function(_Data value)? data,
    TResult Function(_Processing value)? processing,
    TResult Function(_Completed value)? completed,
    TResult Function(_Errored value)? errored,
    required TResult orElse(),
  }) {
    if (archive != null) {
      return archive(this);
    }
    return orElse();
  }
}

abstract class _Archive extends UnpackAssistantState {
  const factory _Archive() = _$_Archive;
  const _Archive._() : super._();
}

/// @nodoc
abstract class _$$_DataCopyWith<$Res> {
  factory _$$_DataCopyWith(_$_Data value, $Res Function(_$_Data) then) =
      __$$_DataCopyWithImpl<$Res>;
  @useResult
  $Res call({List<String> data});
}

/// @nodoc
class __$$_DataCopyWithImpl<$Res>
    extends _$UnpackAssistantStateCopyWithImpl<$Res, _$_Data>
    implements _$$_DataCopyWith<$Res> {
  __$$_DataCopyWithImpl(_$_Data _value, $Res Function(_$_Data) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? data = null,
  }) {
    return _then(_$_Data(
      data: null == data
          ? _value._data
          : data // ignore: cast_nullable_to_non_nullable
              as List<String>,
    ));
  }
}

/// @nodoc

class _$_Data extends _Data {
  const _$_Data({required final List<String> data})
      : _data = data,
        super._();

  final List<String> _data;
  @override
  List<String> get data {
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(_data);
  }

  @override
  String toString() {
    return 'UnpackAssistantState.data(data: $data)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_Data &&
            const DeepCollectionEquality().equals(other._data, _data));
  }

  @override
  int get hashCode =>
      Object.hash(runtimeType, const DeepCollectionEquality().hash(_data));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_DataCopyWith<_$_Data> get copyWith =>
      __$$_DataCopyWithImpl<_$_Data>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() initial,
    required TResult Function(List<String> apps) apps,
    required TResult Function() archive,
    required TResult Function(List<String> data) data,
    required TResult Function(int progress) processing,
    required TResult Function() completed,
    required TResult Function(Object error, StackTrace stackTrace) errored,
  }) {
    return data(this.data);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? initial,
    TResult? Function(List<String> apps)? apps,
    TResult? Function()? archive,
    TResult? Function(List<String> data)? data,
    TResult? Function(int progress)? processing,
    TResult? Function()? completed,
    TResult? Function(Object error, StackTrace stackTrace)? errored,
  }) {
    return data?.call(this.data);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? initial,
    TResult Function(List<String> apps)? apps,
    TResult Function()? archive,
    TResult Function(List<String> data)? data,
    TResult Function(int progress)? processing,
    TResult Function()? completed,
    TResult Function(Object error, StackTrace stackTrace)? errored,
    required TResult orElse(),
  }) {
    if (data != null) {
      return data(this.data);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_Initial value) initial,
    required TResult Function(_Apps value) apps,
    required TResult Function(_Archive value) archive,
    required TResult Function(_Data value) data,
    required TResult Function(_Processing value) processing,
    required TResult Function(_Completed value) completed,
    required TResult Function(_Errored value) errored,
  }) {
    return data(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_Initial value)? initial,
    TResult? Function(_Apps value)? apps,
    TResult? Function(_Archive value)? archive,
    TResult? Function(_Data value)? data,
    TResult? Function(_Processing value)? processing,
    TResult? Function(_Completed value)? completed,
    TResult? Function(_Errored value)? errored,
  }) {
    return data?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_Initial value)? initial,
    TResult Function(_Apps value)? apps,
    TResult Function(_Archive value)? archive,
    TResult Function(_Data value)? data,
    TResult Function(_Processing value)? processing,
    TResult Function(_Completed value)? completed,
    TResult Function(_Errored value)? errored,
    required TResult orElse(),
  }) {
    if (data != null) {
      return data(this);
    }
    return orElse();
  }
}

abstract class _Data extends UnpackAssistantState {
  const factory _Data({required final List<String> data}) = _$_Data;
  const _Data._() : super._();

  List<String> get data;
  @JsonKey(ignore: true)
  _$$_DataCopyWith<_$_Data> get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$_ProcessingCopyWith<$Res> {
  factory _$$_ProcessingCopyWith(
          _$_Processing value, $Res Function(_$_Processing) then) =
      __$$_ProcessingCopyWithImpl<$Res>;
  @useResult
  $Res call({int progress});
}

/// @nodoc
class __$$_ProcessingCopyWithImpl<$Res>
    extends _$UnpackAssistantStateCopyWithImpl<$Res, _$_Processing>
    implements _$$_ProcessingCopyWith<$Res> {
  __$$_ProcessingCopyWithImpl(
      _$_Processing _value, $Res Function(_$_Processing) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? progress = null,
  }) {
    return _then(_$_Processing(
      progress: null == progress
          ? _value.progress
          : progress // ignore: cast_nullable_to_non_nullable
              as int,
    ));
  }
}

/// @nodoc

class _$_Processing extends _Processing {
  const _$_Processing({required this.progress}) : super._();

  @override
  final int progress;

  @override
  String toString() {
    return 'UnpackAssistantState.processing(progress: $progress)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_Processing &&
            (identical(other.progress, progress) ||
                other.progress == progress));
  }

  @override
  int get hashCode => Object.hash(runtimeType, progress);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_ProcessingCopyWith<_$_Processing> get copyWith =>
      __$$_ProcessingCopyWithImpl<_$_Processing>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() initial,
    required TResult Function(List<String> apps) apps,
    required TResult Function() archive,
    required TResult Function(List<String> data) data,
    required TResult Function(int progress) processing,
    required TResult Function() completed,
    required TResult Function(Object error, StackTrace stackTrace) errored,
  }) {
    return processing(progress);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? initial,
    TResult? Function(List<String> apps)? apps,
    TResult? Function()? archive,
    TResult? Function(List<String> data)? data,
    TResult? Function(int progress)? processing,
    TResult? Function()? completed,
    TResult? Function(Object error, StackTrace stackTrace)? errored,
  }) {
    return processing?.call(progress);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? initial,
    TResult Function(List<String> apps)? apps,
    TResult Function()? archive,
    TResult Function(List<String> data)? data,
    TResult Function(int progress)? processing,
    TResult Function()? completed,
    TResult Function(Object error, StackTrace stackTrace)? errored,
    required TResult orElse(),
  }) {
    if (processing != null) {
      return processing(progress);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_Initial value) initial,
    required TResult Function(_Apps value) apps,
    required TResult Function(_Archive value) archive,
    required TResult Function(_Data value) data,
    required TResult Function(_Processing value) processing,
    required TResult Function(_Completed value) completed,
    required TResult Function(_Errored value) errored,
  }) {
    return processing(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_Initial value)? initial,
    TResult? Function(_Apps value)? apps,
    TResult? Function(_Archive value)? archive,
    TResult? Function(_Data value)? data,
    TResult? Function(_Processing value)? processing,
    TResult? Function(_Completed value)? completed,
    TResult? Function(_Errored value)? errored,
  }) {
    return processing?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_Initial value)? initial,
    TResult Function(_Apps value)? apps,
    TResult Function(_Archive value)? archive,
    TResult Function(_Data value)? data,
    TResult Function(_Processing value)? processing,
    TResult Function(_Completed value)? completed,
    TResult Function(_Errored value)? errored,
    required TResult orElse(),
  }) {
    if (processing != null) {
      return processing(this);
    }
    return orElse();
  }
}

abstract class _Processing extends UnpackAssistantState {
  const factory _Processing({required final int progress}) = _$_Processing;
  const _Processing._() : super._();

  int get progress;
  @JsonKey(ignore: true)
  _$$_ProcessingCopyWith<_$_Processing> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$_CompletedCopyWith<$Res> {
  factory _$$_CompletedCopyWith(
          _$_Completed value, $Res Function(_$_Completed) then) =
      __$$_CompletedCopyWithImpl<$Res>;
}

/// @nodoc
class __$$_CompletedCopyWithImpl<$Res>
    extends _$UnpackAssistantStateCopyWithImpl<$Res, _$_Completed>
    implements _$$_CompletedCopyWith<$Res> {
  __$$_CompletedCopyWithImpl(
      _$_Completed _value, $Res Function(_$_Completed) _then)
      : super(_value, _then);
}

/// @nodoc

class _$_Completed extends _Completed {
  const _$_Completed() : super._();

  @override
  String toString() {
    return 'UnpackAssistantState.completed()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType && other is _$_Completed);
  }

  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() initial,
    required TResult Function(List<String> apps) apps,
    required TResult Function() archive,
    required TResult Function(List<String> data) data,
    required TResult Function(int progress) processing,
    required TResult Function() completed,
    required TResult Function(Object error, StackTrace stackTrace) errored,
  }) {
    return completed();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? initial,
    TResult? Function(List<String> apps)? apps,
    TResult? Function()? archive,
    TResult? Function(List<String> data)? data,
    TResult? Function(int progress)? processing,
    TResult? Function()? completed,
    TResult? Function(Object error, StackTrace stackTrace)? errored,
  }) {
    return completed?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? initial,
    TResult Function(List<String> apps)? apps,
    TResult Function()? archive,
    TResult Function(List<String> data)? data,
    TResult Function(int progress)? processing,
    TResult Function()? completed,
    TResult Function(Object error, StackTrace stackTrace)? errored,
    required TResult orElse(),
  }) {
    if (completed != null) {
      return completed();
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_Initial value) initial,
    required TResult Function(_Apps value) apps,
    required TResult Function(_Archive value) archive,
    required TResult Function(_Data value) data,
    required TResult Function(_Processing value) processing,
    required TResult Function(_Completed value) completed,
    required TResult Function(_Errored value) errored,
  }) {
    return completed(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_Initial value)? initial,
    TResult? Function(_Apps value)? apps,
    TResult? Function(_Archive value)? archive,
    TResult? Function(_Data value)? data,
    TResult? Function(_Processing value)? processing,
    TResult? Function(_Completed value)? completed,
    TResult? Function(_Errored value)? errored,
  }) {
    return completed?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_Initial value)? initial,
    TResult Function(_Apps value)? apps,
    TResult Function(_Archive value)? archive,
    TResult Function(_Data value)? data,
    TResult Function(_Processing value)? processing,
    TResult Function(_Completed value)? completed,
    TResult Function(_Errored value)? errored,
    required TResult orElse(),
  }) {
    if (completed != null) {
      return completed(this);
    }
    return orElse();
  }
}

abstract class _Completed extends UnpackAssistantState {
  const factory _Completed() = _$_Completed;
  const _Completed._() : super._();
}

/// @nodoc
abstract class _$$_ErroredCopyWith<$Res> {
  factory _$$_ErroredCopyWith(
          _$_Errored value, $Res Function(_$_Errored) then) =
      __$$_ErroredCopyWithImpl<$Res>;
  @useResult
  $Res call({Object error, StackTrace stackTrace});
}

/// @nodoc
class __$$_ErroredCopyWithImpl<$Res>
    extends _$UnpackAssistantStateCopyWithImpl<$Res, _$_Errored>
    implements _$$_ErroredCopyWith<$Res> {
  __$$_ErroredCopyWithImpl(_$_Errored _value, $Res Function(_$_Errored) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? error = null,
    Object? stackTrace = null,
  }) {
    return _then(_$_Errored(
      error: null == error ? _value.error : error,
      stackTrace: null == stackTrace
          ? _value.stackTrace
          : stackTrace // ignore: cast_nullable_to_non_nullable
              as StackTrace,
    ));
  }
}

/// @nodoc

class _$_Errored extends _Errored {
  const _$_Errored({required this.error, required this.stackTrace}) : super._();

  @override
  final Object error;
  @override
  final StackTrace stackTrace;

  @override
  String toString() {
    return 'UnpackAssistantState.errored(error: $error, stackTrace: $stackTrace)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_Errored &&
            const DeepCollectionEquality().equals(other.error, error) &&
            (identical(other.stackTrace, stackTrace) ||
                other.stackTrace == stackTrace));
  }

  @override
  int get hashCode => Object.hash(
      runtimeType, const DeepCollectionEquality().hash(error), stackTrace);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_ErroredCopyWith<_$_Errored> get copyWith =>
      __$$_ErroredCopyWithImpl<_$_Errored>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() initial,
    required TResult Function(List<String> apps) apps,
    required TResult Function() archive,
    required TResult Function(List<String> data) data,
    required TResult Function(int progress) processing,
    required TResult Function() completed,
    required TResult Function(Object error, StackTrace stackTrace) errored,
  }) {
    return errored(error, stackTrace);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? initial,
    TResult? Function(List<String> apps)? apps,
    TResult? Function()? archive,
    TResult? Function(List<String> data)? data,
    TResult? Function(int progress)? processing,
    TResult? Function()? completed,
    TResult? Function(Object error, StackTrace stackTrace)? errored,
  }) {
    return errored?.call(error, stackTrace);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? initial,
    TResult Function(List<String> apps)? apps,
    TResult Function()? archive,
    TResult Function(List<String> data)? data,
    TResult Function(int progress)? processing,
    TResult Function()? completed,
    TResult Function(Object error, StackTrace stackTrace)? errored,
    required TResult orElse(),
  }) {
    if (errored != null) {
      return errored(error, stackTrace);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_Initial value) initial,
    required TResult Function(_Apps value) apps,
    required TResult Function(_Archive value) archive,
    required TResult Function(_Data value) data,
    required TResult Function(_Processing value) processing,
    required TResult Function(_Completed value) completed,
    required TResult Function(_Errored value) errored,
  }) {
    return errored(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_Initial value)? initial,
    TResult? Function(_Apps value)? apps,
    TResult? Function(_Archive value)? archive,
    TResult? Function(_Data value)? data,
    TResult? Function(_Processing value)? processing,
    TResult? Function(_Completed value)? completed,
    TResult? Function(_Errored value)? errored,
  }) {
    return errored?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_Initial value)? initial,
    TResult Function(_Apps value)? apps,
    TResult Function(_Archive value)? archive,
    TResult Function(_Data value)? data,
    TResult Function(_Processing value)? processing,
    TResult Function(_Completed value)? completed,
    TResult Function(_Errored value)? errored,
    required TResult orElse(),
  }) {
    if (errored != null) {
      return errored(this);
    }
    return orElse();
  }
}

abstract class _Errored extends UnpackAssistantState {
  const factory _Errored(
      {required final Object error,
      required final StackTrace stackTrace}) = _$_Errored;
  const _Errored._() : super._();

  Object get error;
  StackTrace get stackTrace;
  @JsonKey(ignore: true)
  _$$_ErroredCopyWith<_$_Errored> get copyWith =>
      throw _privateConstructorUsedError;
}
