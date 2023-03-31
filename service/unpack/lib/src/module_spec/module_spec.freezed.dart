// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'module_spec.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

ModuleSpec _$ModuleSpecFromJson(Map<String, dynamic> json) {
  switch (json['runtimeType']) {
    case 'custom':
      return CustomModule.fromJson(json);
    case 'json':
      return JsonModule.fromJson(json);

    default:
      throw CheckedFromJsonException(json, 'runtimeType', 'ModuleSpec',
          'Invalid union type "${json['runtimeType']}"!');
  }
}

/// @nodoc
mixin _$ModuleSpec {
  String get id => throw _privateConstructorUsedError;
  String get name => throw _privateConstructorUsedError;
  Pattern get fileMatcher => throw _privateConstructorUsedError;
  LoadSpec get load => throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String id, String name, Pattern fileMatcher,
            ExtractSpec extract, TransformSpec transform, LoadSpec load)
        custom,
    required TResult Function(String id, String name, Pattern fileMatcher,
            Iterable<JsonSchema> schema, LoadSpec load)
        json,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String id, String name, Pattern fileMatcher,
            ExtractSpec extract, TransformSpec transform, LoadSpec load)?
        custom,
    TResult? Function(String id, String name, Pattern fileMatcher,
            Iterable<JsonSchema> schema, LoadSpec load)?
        json,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String id, String name, Pattern fileMatcher,
            ExtractSpec extract, TransformSpec transform, LoadSpec load)?
        custom,
    TResult Function(String id, String name, Pattern fileMatcher,
            Iterable<JsonSchema> schema, LoadSpec load)?
        json,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(CustomModule value) custom,
    required TResult Function(JsonModule value) json,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(CustomModule value)? custom,
    TResult? Function(JsonModule value)? json,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(CustomModule value)? custom,
    TResult Function(JsonModule value)? json,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $ModuleSpecCopyWith<ModuleSpec> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $ModuleSpecCopyWith<$Res> {
  factory $ModuleSpecCopyWith(
          ModuleSpec value, $Res Function(ModuleSpec) then) =
      _$ModuleSpecCopyWithImpl<$Res, ModuleSpec>;
  @useResult
  $Res call({String id, String name, Pattern fileMatcher, LoadSpec load});

  $LoadSpecCopyWith<$Res> get load;
}

/// @nodoc
class _$ModuleSpecCopyWithImpl<$Res, $Val extends ModuleSpec>
    implements $ModuleSpecCopyWith<$Res> {
  _$ModuleSpecCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? name = null,
    Object? fileMatcher = null,
    Object? load = null,
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
      fileMatcher: null == fileMatcher
          ? _value.fileMatcher
          : fileMatcher // ignore: cast_nullable_to_non_nullable
              as Pattern,
      load: null == load
          ? _value.load
          : load // ignore: cast_nullable_to_non_nullable
              as LoadSpec,
    ) as $Val);
  }

  @override
  @pragma('vm:prefer-inline')
  $LoadSpecCopyWith<$Res> get load {
    return $LoadSpecCopyWith<$Res>(_value.load, (value) {
      return _then(_value.copyWith(load: value) as $Val);
    });
  }
}

/// @nodoc
abstract class _$$CustomModuleCopyWith<$Res>
    implements $ModuleSpecCopyWith<$Res> {
  factory _$$CustomModuleCopyWith(
          _$CustomModule value, $Res Function(_$CustomModule) then) =
      __$$CustomModuleCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {String id,
      String name,
      Pattern fileMatcher,
      ExtractSpec extract,
      TransformSpec transform,
      LoadSpec load});

  $ExtractSpecCopyWith<$Res> get extract;
  $TransformSpecCopyWith<$Res> get transform;
  @override
  $LoadSpecCopyWith<$Res> get load;
}

/// @nodoc
class __$$CustomModuleCopyWithImpl<$Res>
    extends _$ModuleSpecCopyWithImpl<$Res, _$CustomModule>
    implements _$$CustomModuleCopyWith<$Res> {
  __$$CustomModuleCopyWithImpl(
      _$CustomModule _value, $Res Function(_$CustomModule) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? name = null,
    Object? fileMatcher = null,
    Object? extract = null,
    Object? transform = null,
    Object? load = null,
  }) {
    return _then(_$CustomModule(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      fileMatcher: null == fileMatcher
          ? _value.fileMatcher
          : fileMatcher // ignore: cast_nullable_to_non_nullable
              as Pattern,
      extract: null == extract
          ? _value.extract
          : extract // ignore: cast_nullable_to_non_nullable
              as ExtractSpec,
      transform: null == transform
          ? _value.transform
          : transform // ignore: cast_nullable_to_non_nullable
              as TransformSpec,
      load: null == load
          ? _value.load
          : load // ignore: cast_nullable_to_non_nullable
              as LoadSpec,
    ));
  }

  @override
  @pragma('vm:prefer-inline')
  $ExtractSpecCopyWith<$Res> get extract {
    return $ExtractSpecCopyWith<$Res>(_value.extract, (value) {
      return _then(_value.copyWith(extract: value));
    });
  }

  @override
  @pragma('vm:prefer-inline')
  $TransformSpecCopyWith<$Res> get transform {
    return $TransformSpecCopyWith<$Res>(_value.transform, (value) {
      return _then(_value.copyWith(transform: value));
    });
  }
}

/// @nodoc
@JsonSerializable()
@PatternConverter()
class _$CustomModule extends CustomModule {
  const _$CustomModule(
      {required this.id,
      required this.name,
      required this.fileMatcher,
      required this.extract,
      required this.transform,
      required this.load,
      final String? $type})
      : $type = $type ?? 'custom',
        super._();

  factory _$CustomModule.fromJson(Map<String, dynamic> json) =>
      _$$CustomModuleFromJson(json);

  @override
  final String id;
  @override
  final String name;
  @override
  final Pattern fileMatcher;
  @override
  final ExtractSpec extract;
  @override
  final TransformSpec transform;
  @override
  final LoadSpec load;

  @JsonKey(name: 'runtimeType')
  final String $type;

  @override
  String toString() {
    return 'ModuleSpec.custom(id: $id, name: $name, fileMatcher: $fileMatcher, extract: $extract, transform: $transform, load: $load)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$CustomModule &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.name, name) || other.name == name) &&
            (identical(other.fileMatcher, fileMatcher) ||
                other.fileMatcher == fileMatcher) &&
            (identical(other.extract, extract) || other.extract == extract) &&
            (identical(other.transform, transform) ||
                other.transform == transform) &&
            (identical(other.load, load) || other.load == load));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode =>
      Object.hash(runtimeType, id, name, fileMatcher, extract, transform, load);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$CustomModuleCopyWith<_$CustomModule> get copyWith =>
      __$$CustomModuleCopyWithImpl<_$CustomModule>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String id, String name, Pattern fileMatcher,
            ExtractSpec extract, TransformSpec transform, LoadSpec load)
        custom,
    required TResult Function(String id, String name, Pattern fileMatcher,
            Iterable<JsonSchema> schema, LoadSpec load)
        json,
  }) {
    return custom(id, name, fileMatcher, extract, transform, load);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String id, String name, Pattern fileMatcher,
            ExtractSpec extract, TransformSpec transform, LoadSpec load)?
        custom,
    TResult? Function(String id, String name, Pattern fileMatcher,
            Iterable<JsonSchema> schema, LoadSpec load)?
        json,
  }) {
    return custom?.call(id, name, fileMatcher, extract, transform, load);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String id, String name, Pattern fileMatcher,
            ExtractSpec extract, TransformSpec transform, LoadSpec load)?
        custom,
    TResult Function(String id, String name, Pattern fileMatcher,
            Iterable<JsonSchema> schema, LoadSpec load)?
        json,
    required TResult orElse(),
  }) {
    if (custom != null) {
      return custom(id, name, fileMatcher, extract, transform, load);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(CustomModule value) custom,
    required TResult Function(JsonModule value) json,
  }) {
    return custom(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(CustomModule value)? custom,
    TResult? Function(JsonModule value)? json,
  }) {
    return custom?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(CustomModule value)? custom,
    TResult Function(JsonModule value)? json,
    required TResult orElse(),
  }) {
    if (custom != null) {
      return custom(this);
    }
    return orElse();
  }

  @override
  Map<String, dynamic> toJson() {
    return _$$CustomModuleToJson(
      this,
    );
  }
}

abstract class CustomModule extends ModuleSpec {
  const factory CustomModule(
      {required final String id,
      required final String name,
      required final Pattern fileMatcher,
      required final ExtractSpec extract,
      required final TransformSpec transform,
      required final LoadSpec load}) = _$CustomModule;
  const CustomModule._() : super._();

  factory CustomModule.fromJson(Map<String, dynamic> json) =
      _$CustomModule.fromJson;

  @override
  String get id;
  @override
  String get name;
  @override
  Pattern get fileMatcher;
  ExtractSpec get extract;
  TransformSpec get transform;
  @override
  LoadSpec get load;
  @override
  @JsonKey(ignore: true)
  _$$CustomModuleCopyWith<_$CustomModule> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$JsonModuleCopyWith<$Res>
    implements $ModuleSpecCopyWith<$Res> {
  factory _$$JsonModuleCopyWith(
          _$JsonModule value, $Res Function(_$JsonModule) then) =
      __$$JsonModuleCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {String id,
      String name,
      Pattern fileMatcher,
      Iterable<JsonSchema> schema,
      LoadSpec load});

  @override
  $LoadSpecCopyWith<$Res> get load;
}

/// @nodoc
class __$$JsonModuleCopyWithImpl<$Res>
    extends _$ModuleSpecCopyWithImpl<$Res, _$JsonModule>
    implements _$$JsonModuleCopyWith<$Res> {
  __$$JsonModuleCopyWithImpl(
      _$JsonModule _value, $Res Function(_$JsonModule) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? name = null,
    Object? fileMatcher = null,
    Object? schema = null,
    Object? load = null,
  }) {
    return _then(_$JsonModule(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      fileMatcher: null == fileMatcher
          ? _value.fileMatcher
          : fileMatcher // ignore: cast_nullable_to_non_nullable
              as Pattern,
      schema: null == schema
          ? _value.schema
          : schema // ignore: cast_nullable_to_non_nullable
              as Iterable<JsonSchema>,
      load: null == load
          ? _value.load
          : load // ignore: cast_nullable_to_non_nullable
              as LoadSpec,
    ));
  }
}

/// @nodoc
@JsonSerializable()
@PatternConverter()
class _$JsonModule extends JsonModule {
  const _$JsonModule(
      {required this.id,
      required this.name,
      required this.fileMatcher,
      required this.schema,
      required this.load,
      final String? $type})
      : $type = $type ?? 'json',
        super._();

  factory _$JsonModule.fromJson(Map<String, dynamic> json) =>
      _$$JsonModuleFromJson(json);

  @override
  final String id;
  @override
  final String name;
  @override
  final Pattern fileMatcher;
  @override
  final Iterable<JsonSchema> schema;
  @override
  final LoadSpec load;

  @JsonKey(name: 'runtimeType')
  final String $type;

  @override
  String toString() {
    return 'ModuleSpec.json(id: $id, name: $name, fileMatcher: $fileMatcher, schema: $schema, load: $load)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$JsonModule &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.name, name) || other.name == name) &&
            (identical(other.fileMatcher, fileMatcher) ||
                other.fileMatcher == fileMatcher) &&
            const DeepCollectionEquality().equals(other.schema, schema) &&
            (identical(other.load, load) || other.load == load));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, id, name, fileMatcher,
      const DeepCollectionEquality().hash(schema), load);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$JsonModuleCopyWith<_$JsonModule> get copyWith =>
      __$$JsonModuleCopyWithImpl<_$JsonModule>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String id, String name, Pattern fileMatcher,
            ExtractSpec extract, TransformSpec transform, LoadSpec load)
        custom,
    required TResult Function(String id, String name, Pattern fileMatcher,
            Iterable<JsonSchema> schema, LoadSpec load)
        json,
  }) {
    return json(id, name, fileMatcher, schema, load);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String id, String name, Pattern fileMatcher,
            ExtractSpec extract, TransformSpec transform, LoadSpec load)?
        custom,
    TResult? Function(String id, String name, Pattern fileMatcher,
            Iterable<JsonSchema> schema, LoadSpec load)?
        json,
  }) {
    return json?.call(id, name, fileMatcher, schema, load);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String id, String name, Pattern fileMatcher,
            ExtractSpec extract, TransformSpec transform, LoadSpec load)?
        custom,
    TResult Function(String id, String name, Pattern fileMatcher,
            Iterable<JsonSchema> schema, LoadSpec load)?
        json,
    required TResult orElse(),
  }) {
    if (json != null) {
      return json(id, name, fileMatcher, schema, load);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(CustomModule value) custom,
    required TResult Function(JsonModule value) json,
  }) {
    return json(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(CustomModule value)? custom,
    TResult? Function(JsonModule value)? json,
  }) {
    return json?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(CustomModule value)? custom,
    TResult Function(JsonModule value)? json,
    required TResult orElse(),
  }) {
    if (json != null) {
      return json(this);
    }
    return orElse();
  }

  @override
  Map<String, dynamic> toJson() {
    return _$$JsonModuleToJson(
      this,
    );
  }
}

abstract class JsonModule extends ModuleSpec {
  const factory JsonModule(
      {required final String id,
      required final String name,
      required final Pattern fileMatcher,
      required final Iterable<JsonSchema> schema,
      required final LoadSpec load}) = _$JsonModule;
  const JsonModule._() : super._();

  factory JsonModule.fromJson(Map<String, dynamic> json) =
      _$JsonModule.fromJson;

  @override
  String get id;
  @override
  String get name;
  @override
  Pattern get fileMatcher;
  Iterable<JsonSchema> get schema;
  @override
  LoadSpec get load;
  @override
  @JsonKey(ignore: true)
  _$$JsonModuleCopyWith<_$JsonModule> get copyWith =>
      throw _privateConstructorUsedError;
}
