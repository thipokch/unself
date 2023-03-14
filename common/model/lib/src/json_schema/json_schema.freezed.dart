// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'json_schema.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

JsonSchema _$JsonSchemaFromJson(Map<String, dynamic> json) {
  switch (json['runtimeType']) {
    case 'JsonSchema.entity':
      return Entity.fromJson(json);
    case 'JsonSchema.struct':
      return Struct.fromJson(json);
    case 'JsonSchema.flat':
      return Flat.fromJson(json);

    default:
      throw CheckedFromJsonException(json, 'runtimeType', 'JsonSchema',
          'Invalid union type "${json['runtimeType']}"!');
  }
}

/// @nodoc
mixin _$JsonSchema {
  String get name => throw _privateConstructorUsedError;
  dynamic get definition => throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(
            String name, Map<String, IJsonSchema> definition, String key)
        entity,
    required TResult Function(String name, dynamic definition) struct,
    required TResult Function(
            String name,
            Map<String, IJsonSchema> definition,
            String key,
            List<String> entityPath,
            List<List<String>> includePath,
            bool addMissingKeys)
        flat,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(
            String name, Map<String, IJsonSchema> definition, String key)?
        entity,
    TResult? Function(String name, dynamic definition)? struct,
    TResult? Function(
            String name,
            Map<String, IJsonSchema> definition,
            String key,
            List<String> entityPath,
            List<List<String>> includePath,
            bool addMissingKeys)?
        flat,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(
            String name, Map<String, IJsonSchema> definition, String key)?
        entity,
    TResult Function(String name, dynamic definition)? struct,
    TResult Function(
            String name,
            Map<String, IJsonSchema> definition,
            String key,
            List<String> entityPath,
            List<List<String>> includePath,
            bool addMissingKeys)?
        flat,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(Entity value) entity,
    required TResult Function(Struct value) struct,
    required TResult Function(Flat value) flat,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(Entity value)? entity,
    TResult? Function(Struct value)? struct,
    TResult? Function(Flat value)? flat,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(Entity value)? entity,
    TResult Function(Struct value)? struct,
    TResult Function(Flat value)? flat,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $JsonSchemaCopyWith<JsonSchema> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $JsonSchemaCopyWith<$Res> {
  factory $JsonSchemaCopyWith(
          JsonSchema value, $Res Function(JsonSchema) then) =
      _$JsonSchemaCopyWithImpl<$Res, JsonSchema>;
  @useResult
  $Res call({String name});
}

/// @nodoc
class _$JsonSchemaCopyWithImpl<$Res, $Val extends JsonSchema>
    implements $JsonSchemaCopyWith<$Res> {
  _$JsonSchemaCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? name = null,
  }) {
    return _then(_value.copyWith(
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$EntityCopyWith<$Res> implements $JsonSchemaCopyWith<$Res> {
  factory _$$EntityCopyWith(_$Entity value, $Res Function(_$Entity) then) =
      __$$EntityCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({String name, Map<String, IJsonSchema> definition, String key});
}

/// @nodoc
class __$$EntityCopyWithImpl<$Res>
    extends _$JsonSchemaCopyWithImpl<$Res, _$Entity>
    implements _$$EntityCopyWith<$Res> {
  __$$EntityCopyWithImpl(_$Entity _value, $Res Function(_$Entity) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? name = null,
    Object? definition = null,
    Object? key = null,
  }) {
    return _then(_$Entity(
      null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      null == definition
          ? _value._definition
          : definition // ignore: cast_nullable_to_non_nullable
              as Map<String, IJsonSchema>,
      key: null == key
          ? _value.key
          : key // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$Entity extends Entity {
  const _$Entity(this.name, final Map<String, IJsonSchema> definition,
      {this.key = 'id', final String? $type})
      : _definition = definition,
        $type = $type ?? 'JsonSchema.entity',
        super._();

  factory _$Entity.fromJson(Map<String, dynamic> json) =>
      _$$EntityFromJson(json);

  @override
  final String name;
  final Map<String, IJsonSchema> _definition;
  @override
  Map<String, IJsonSchema> get definition {
    if (_definition is EqualUnmodifiableMapView) return _definition;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableMapView(_definition);
  }

  @override
  @JsonKey()
  final String key;

  @JsonKey(name: 'runtimeType')
  final String $type;

  @override
  String toString() {
    return 'JsonSchema.entity(name: $name, definition: $definition, key: $key)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$Entity &&
            (identical(other.name, name) || other.name == name) &&
            const DeepCollectionEquality()
                .equals(other._definition, _definition) &&
            (identical(other.key, key) || other.key == key));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(
      runtimeType, name, const DeepCollectionEquality().hash(_definition), key);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$EntityCopyWith<_$Entity> get copyWith =>
      __$$EntityCopyWithImpl<_$Entity>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(
            String name, Map<String, IJsonSchema> definition, String key)
        entity,
    required TResult Function(String name, dynamic definition) struct,
    required TResult Function(
            String name,
            Map<String, IJsonSchema> definition,
            String key,
            List<String> entityPath,
            List<List<String>> includePath,
            bool addMissingKeys)
        flat,
  }) {
    return entity(name, definition, key);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(
            String name, Map<String, IJsonSchema> definition, String key)?
        entity,
    TResult? Function(String name, dynamic definition)? struct,
    TResult? Function(
            String name,
            Map<String, IJsonSchema> definition,
            String key,
            List<String> entityPath,
            List<List<String>> includePath,
            bool addMissingKeys)?
        flat,
  }) {
    return entity?.call(name, definition, key);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(
            String name, Map<String, IJsonSchema> definition, String key)?
        entity,
    TResult Function(String name, dynamic definition)? struct,
    TResult Function(
            String name,
            Map<String, IJsonSchema> definition,
            String key,
            List<String> entityPath,
            List<List<String>> includePath,
            bool addMissingKeys)?
        flat,
    required TResult orElse(),
  }) {
    if (entity != null) {
      return entity(name, definition, key);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(Entity value) entity,
    required TResult Function(Struct value) struct,
    required TResult Function(Flat value) flat,
  }) {
    return entity(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(Entity value)? entity,
    TResult? Function(Struct value)? struct,
    TResult? Function(Flat value)? flat,
  }) {
    return entity?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(Entity value)? entity,
    TResult Function(Struct value)? struct,
    TResult Function(Flat value)? flat,
    required TResult orElse(),
  }) {
    if (entity != null) {
      return entity(this);
    }
    return orElse();
  }

  @override
  Map<String, dynamic> toJson() {
    return _$$EntityToJson(
      this,
    );
  }
}

abstract class Entity extends JsonSchema {
  const factory Entity(
      final String name, final Map<String, IJsonSchema> definition,
      {final String key}) = _$Entity;
  const Entity._() : super._();

  factory Entity.fromJson(Map<String, dynamic> json) = _$Entity.fromJson;

  @override
  String get name;
  @override
  Map<String, IJsonSchema> get definition;
  String get key;
  @override
  @JsonKey(ignore: true)
  _$$EntityCopyWith<_$Entity> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$StructCopyWith<$Res> implements $JsonSchemaCopyWith<$Res> {
  factory _$$StructCopyWith(_$Struct value, $Res Function(_$Struct) then) =
      __$$StructCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({String name, dynamic definition});
}

/// @nodoc
class __$$StructCopyWithImpl<$Res>
    extends _$JsonSchemaCopyWithImpl<$Res, _$Struct>
    implements _$$StructCopyWith<$Res> {
  __$$StructCopyWithImpl(_$Struct _value, $Res Function(_$Struct) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? name = null,
    Object? definition = freezed,
  }) {
    return _then(_$Struct(
      null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      freezed == definition
          ? _value.definition
          : definition // ignore: cast_nullable_to_non_nullable
              as dynamic,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$Struct extends Struct {
  const _$Struct(this.name, this.definition, {final String? $type})
      : $type = $type ?? 'JsonSchema.struct',
        super._();

  factory _$Struct.fromJson(Map<String, dynamic> json) =>
      _$$StructFromJson(json);

  @override
  final String name;
  @override
  final dynamic definition;

  @JsonKey(name: 'runtimeType')
  final String $type;

  @override
  String toString() {
    return 'JsonSchema.struct(name: $name, definition: $definition)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$Struct &&
            (identical(other.name, name) || other.name == name) &&
            const DeepCollectionEquality()
                .equals(other.definition, definition));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(
      runtimeType, name, const DeepCollectionEquality().hash(definition));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$StructCopyWith<_$Struct> get copyWith =>
      __$$StructCopyWithImpl<_$Struct>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(
            String name, Map<String, IJsonSchema> definition, String key)
        entity,
    required TResult Function(String name, dynamic definition) struct,
    required TResult Function(
            String name,
            Map<String, IJsonSchema> definition,
            String key,
            List<String> entityPath,
            List<List<String>> includePath,
            bool addMissingKeys)
        flat,
  }) {
    return struct(name, definition);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(
            String name, Map<String, IJsonSchema> definition, String key)?
        entity,
    TResult? Function(String name, dynamic definition)? struct,
    TResult? Function(
            String name,
            Map<String, IJsonSchema> definition,
            String key,
            List<String> entityPath,
            List<List<String>> includePath,
            bool addMissingKeys)?
        flat,
  }) {
    return struct?.call(name, definition);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(
            String name, Map<String, IJsonSchema> definition, String key)?
        entity,
    TResult Function(String name, dynamic definition)? struct,
    TResult Function(
            String name,
            Map<String, IJsonSchema> definition,
            String key,
            List<String> entityPath,
            List<List<String>> includePath,
            bool addMissingKeys)?
        flat,
    required TResult orElse(),
  }) {
    if (struct != null) {
      return struct(name, definition);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(Entity value) entity,
    required TResult Function(Struct value) struct,
    required TResult Function(Flat value) flat,
  }) {
    return struct(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(Entity value)? entity,
    TResult? Function(Struct value)? struct,
    TResult? Function(Flat value)? flat,
  }) {
    return struct?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(Entity value)? entity,
    TResult Function(Struct value)? struct,
    TResult Function(Flat value)? flat,
    required TResult orElse(),
  }) {
    if (struct != null) {
      return struct(this);
    }
    return orElse();
  }

  @override
  Map<String, dynamic> toJson() {
    return _$$StructToJson(
      this,
    );
  }
}

abstract class Struct extends JsonSchema {
  const factory Struct(final String name, final dynamic definition) = _$Struct;
  const Struct._() : super._();

  factory Struct.fromJson(Map<String, dynamic> json) = _$Struct.fromJson;

  @override
  String get name;
  @override
  dynamic get definition;
  @override
  @JsonKey(ignore: true)
  _$$StructCopyWith<_$Struct> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$FlatCopyWith<$Res> implements $JsonSchemaCopyWith<$Res> {
  factory _$$FlatCopyWith(_$Flat value, $Res Function(_$Flat) then) =
      __$$FlatCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {String name,
      Map<String, IJsonSchema> definition,
      String key,
      List<String> entityPath,
      List<List<String>> includePath,
      bool addMissingKeys});
}

/// @nodoc
class __$$FlatCopyWithImpl<$Res> extends _$JsonSchemaCopyWithImpl<$Res, _$Flat>
    implements _$$FlatCopyWith<$Res> {
  __$$FlatCopyWithImpl(_$Flat _value, $Res Function(_$Flat) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? name = null,
    Object? definition = null,
    Object? key = null,
    Object? entityPath = null,
    Object? includePath = null,
    Object? addMissingKeys = null,
  }) {
    return _then(_$Flat(
      null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      null == definition
          ? _value._definition
          : definition // ignore: cast_nullable_to_non_nullable
              as Map<String, IJsonSchema>,
      key: null == key
          ? _value.key
          : key // ignore: cast_nullable_to_non_nullable
              as String,
      entityPath: null == entityPath
          ? _value._entityPath
          : entityPath // ignore: cast_nullable_to_non_nullable
              as List<String>,
      includePath: null == includePath
          ? _value._includePath
          : includePath // ignore: cast_nullable_to_non_nullable
              as List<List<String>>,
      addMissingKeys: null == addMissingKeys
          ? _value.addMissingKeys
          : addMissingKeys // ignore: cast_nullable_to_non_nullable
              as bool,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$Flat extends Flat {
  const _$Flat(this.name, final Map<String, IJsonSchema> definition,
      {this.key = 'id',
      final List<String> entityPath = const [],
      final List<List<String>> includePath = const [],
      this.addMissingKeys = true,
      final String? $type})
      : _definition = definition,
        _entityPath = entityPath,
        _includePath = includePath,
        $type = $type ?? 'JsonSchema.flat',
        super._();

  factory _$Flat.fromJson(Map<String, dynamic> json) => _$$FlatFromJson(json);

  @override
  final String name;
  final Map<String, IJsonSchema> _definition;
  @override
  Map<String, IJsonSchema> get definition {
    if (_definition is EqualUnmodifiableMapView) return _definition;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableMapView(_definition);
  }

  @override
  @JsonKey()
  final String key;
  final List<String> _entityPath;
  @override
  @JsonKey()
  List<String> get entityPath {
    if (_entityPath is EqualUnmodifiableListView) return _entityPath;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(_entityPath);
  }

  final List<List<String>> _includePath;
  @override
  @JsonKey()
  List<List<String>> get includePath {
    if (_includePath is EqualUnmodifiableListView) return _includePath;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(_includePath);
  }

  @override
  @JsonKey()
  final bool addMissingKeys;

  @JsonKey(name: 'runtimeType')
  final String $type;

  @override
  String toString() {
    return 'JsonSchema.flat(name: $name, definition: $definition, key: $key, entityPath: $entityPath, includePath: $includePath, addMissingKeys: $addMissingKeys)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$Flat &&
            (identical(other.name, name) || other.name == name) &&
            const DeepCollectionEquality()
                .equals(other._definition, _definition) &&
            (identical(other.key, key) || other.key == key) &&
            const DeepCollectionEquality()
                .equals(other._entityPath, _entityPath) &&
            const DeepCollectionEquality()
                .equals(other._includePath, _includePath) &&
            (identical(other.addMissingKeys, addMissingKeys) ||
                other.addMissingKeys == addMissingKeys));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(
      runtimeType,
      name,
      const DeepCollectionEquality().hash(_definition),
      key,
      const DeepCollectionEquality().hash(_entityPath),
      const DeepCollectionEquality().hash(_includePath),
      addMissingKeys);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$FlatCopyWith<_$Flat> get copyWith =>
      __$$FlatCopyWithImpl<_$Flat>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(
            String name, Map<String, IJsonSchema> definition, String key)
        entity,
    required TResult Function(String name, dynamic definition) struct,
    required TResult Function(
            String name,
            Map<String, IJsonSchema> definition,
            String key,
            List<String> entityPath,
            List<List<String>> includePath,
            bool addMissingKeys)
        flat,
  }) {
    return flat(name, definition, key, entityPath, includePath, addMissingKeys);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(
            String name, Map<String, IJsonSchema> definition, String key)?
        entity,
    TResult? Function(String name, dynamic definition)? struct,
    TResult? Function(
            String name,
            Map<String, IJsonSchema> definition,
            String key,
            List<String> entityPath,
            List<List<String>> includePath,
            bool addMissingKeys)?
        flat,
  }) {
    return flat?.call(
        name, definition, key, entityPath, includePath, addMissingKeys);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(
            String name, Map<String, IJsonSchema> definition, String key)?
        entity,
    TResult Function(String name, dynamic definition)? struct,
    TResult Function(
            String name,
            Map<String, IJsonSchema> definition,
            String key,
            List<String> entityPath,
            List<List<String>> includePath,
            bool addMissingKeys)?
        flat,
    required TResult orElse(),
  }) {
    if (flat != null) {
      return flat(
          name, definition, key, entityPath, includePath, addMissingKeys);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(Entity value) entity,
    required TResult Function(Struct value) struct,
    required TResult Function(Flat value) flat,
  }) {
    return flat(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(Entity value)? entity,
    TResult? Function(Struct value)? struct,
    TResult? Function(Flat value)? flat,
  }) {
    return flat?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(Entity value)? entity,
    TResult Function(Struct value)? struct,
    TResult Function(Flat value)? flat,
    required TResult orElse(),
  }) {
    if (flat != null) {
      return flat(this);
    }
    return orElse();
  }

  @override
  Map<String, dynamic> toJson() {
    return _$$FlatToJson(
      this,
    );
  }
}

abstract class Flat extends JsonSchema {
  const factory Flat(
      final String name, final Map<String, IJsonSchema> definition,
      {final String key,
      final List<String> entityPath,
      final List<List<String>> includePath,
      final bool addMissingKeys}) = _$Flat;
  const Flat._() : super._();

  factory Flat.fromJson(Map<String, dynamic> json) = _$Flat.fromJson;

  @override
  String get name;
  @override
  Map<String, IJsonSchema> get definition;
  String get key;
  List<String> get entityPath;
  List<List<String>> get includePath;
  bool get addMissingKeys;
  @override
  @JsonKey(ignore: true)
  _$$FlatCopyWith<_$Flat> get copyWith => throw _privateConstructorUsedError;
}
