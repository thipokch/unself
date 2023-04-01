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
    case 'JsonSchema.flat':
      return Flat.fromJson(json);
    case 'JsonSchema.struct':
      return Struct.fromJson(json);

    default:
      throw CheckedFromJsonException(json, 'runtimeType', 'JsonSchema',
          'Invalid union type "${json['runtimeType']}"!');
  }
}

/// @nodoc
mixin _$JsonSchema {
  String get name => throw _privateConstructorUsedError;
  dynamic get definition => throw _privateConstructorUsedError;

  /// [extra] is a map of additional properties.
  @JsonExtra()
  Map<String, dynamic> get extra => throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String name, Map<String, IJsonSchema> definition,
            String key, @JsonExtra() Map<String, dynamic> extra)
        entity,
    required TResult Function(
            String name,
            Map<String, IJsonSchema> definition,
            String key,
            List<String> entityPath,
            List<List<String>> includePath,
            bool addMissingKeys,
            @JsonExtra() Map<String, dynamic> extra)
        flat,
    required TResult Function(
            String name,
            @JsonKey(fromJson: IJsonSchema.structFromJson) dynamic definition,
            @JsonExtra() Map<String, dynamic> extra)
        struct,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String name, Map<String, IJsonSchema> definition,
            String key, @JsonExtra() Map<String, dynamic> extra)?
        entity,
    TResult? Function(
            String name,
            Map<String, IJsonSchema> definition,
            String key,
            List<String> entityPath,
            List<List<String>> includePath,
            bool addMissingKeys,
            @JsonExtra() Map<String, dynamic> extra)?
        flat,
    TResult? Function(
            String name,
            @JsonKey(fromJson: IJsonSchema.structFromJson) dynamic definition,
            @JsonExtra() Map<String, dynamic> extra)?
        struct,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String name, Map<String, IJsonSchema> definition,
            String key, @JsonExtra() Map<String, dynamic> extra)?
        entity,
    TResult Function(
            String name,
            Map<String, IJsonSchema> definition,
            String key,
            List<String> entityPath,
            List<List<String>> includePath,
            bool addMissingKeys,
            @JsonExtra() Map<String, dynamic> extra)?
        flat,
    TResult Function(
            String name,
            @JsonKey(fromJson: IJsonSchema.structFromJson) dynamic definition,
            @JsonExtra() Map<String, dynamic> extra)?
        struct,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(Entity value) entity,
    required TResult Function(Flat value) flat,
    required TResult Function(Struct value) struct,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(Entity value)? entity,
    TResult? Function(Flat value)? flat,
    TResult? Function(Struct value)? struct,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(Entity value)? entity,
    TResult Function(Flat value)? flat,
    TResult Function(Struct value)? struct,
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
  $Res call({String name, @JsonExtra() Map<String, dynamic> extra});
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
    Object? extra = null,
  }) {
    return _then(_value.copyWith(
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
abstract class _$$EntityCopyWith<$Res> implements $JsonSchemaCopyWith<$Res> {
  factory _$$EntityCopyWith(_$Entity value, $Res Function(_$Entity) then) =
      __$$EntityCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {String name,
      Map<String, IJsonSchema> definition,
      String key,
      @JsonExtra() Map<String, dynamic> extra});
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
    Object? extra = null,
  }) {
    return _then(_$Entity(
      null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      definition: null == definition
          ? _value._definition
          : definition // ignore: cast_nullable_to_non_nullable
              as Map<String, IJsonSchema>,
      key: null == key
          ? _value.key
          : key // ignore: cast_nullable_to_non_nullable
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
class _$Entity extends Entity {
  const _$Entity(this.name,
      {final Map<String, IJsonSchema> definition = const {},
      this.key = 'id',
      @JsonExtra() final Map<String, dynamic> extra = const {},
      final String? $type})
      : _definition = definition,
        _extra = extra,
        $type = $type ?? 'JsonSchema.entity',
        super._();

  factory _$Entity.fromJson(Map<String, dynamic> json) =>
      _$$EntityFromJson(json);

  @override
  final String name;
  final Map<String, IJsonSchema> _definition;
  @override
  @JsonKey()
  Map<String, IJsonSchema> get definition {
    if (_definition is EqualUnmodifiableMapView) return _definition;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableMapView(_definition);
  }

  @override
  @JsonKey()
  final String key;

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

  @JsonKey(name: 'runtimeType')
  final String $type;

  @override
  String toString() {
    return 'JsonSchema.entity(name: $name, definition: $definition, key: $key, extra: $extra)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$Entity &&
            (identical(other.name, name) || other.name == name) &&
            const DeepCollectionEquality()
                .equals(other._definition, _definition) &&
            (identical(other.key, key) || other.key == key) &&
            const DeepCollectionEquality().equals(other._extra, _extra));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(
      runtimeType,
      name,
      const DeepCollectionEquality().hash(_definition),
      key,
      const DeepCollectionEquality().hash(_extra));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$EntityCopyWith<_$Entity> get copyWith =>
      __$$EntityCopyWithImpl<_$Entity>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String name, Map<String, IJsonSchema> definition,
            String key, @JsonExtra() Map<String, dynamic> extra)
        entity,
    required TResult Function(
            String name,
            Map<String, IJsonSchema> definition,
            String key,
            List<String> entityPath,
            List<List<String>> includePath,
            bool addMissingKeys,
            @JsonExtra() Map<String, dynamic> extra)
        flat,
    required TResult Function(
            String name,
            @JsonKey(fromJson: IJsonSchema.structFromJson) dynamic definition,
            @JsonExtra() Map<String, dynamic> extra)
        struct,
  }) {
    return entity(name, definition, key, extra);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String name, Map<String, IJsonSchema> definition,
            String key, @JsonExtra() Map<String, dynamic> extra)?
        entity,
    TResult? Function(
            String name,
            Map<String, IJsonSchema> definition,
            String key,
            List<String> entityPath,
            List<List<String>> includePath,
            bool addMissingKeys,
            @JsonExtra() Map<String, dynamic> extra)?
        flat,
    TResult? Function(
            String name,
            @JsonKey(fromJson: IJsonSchema.structFromJson) dynamic definition,
            @JsonExtra() Map<String, dynamic> extra)?
        struct,
  }) {
    return entity?.call(name, definition, key, extra);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String name, Map<String, IJsonSchema> definition,
            String key, @JsonExtra() Map<String, dynamic> extra)?
        entity,
    TResult Function(
            String name,
            Map<String, IJsonSchema> definition,
            String key,
            List<String> entityPath,
            List<List<String>> includePath,
            bool addMissingKeys,
            @JsonExtra() Map<String, dynamic> extra)?
        flat,
    TResult Function(
            String name,
            @JsonKey(fromJson: IJsonSchema.structFromJson) dynamic definition,
            @JsonExtra() Map<String, dynamic> extra)?
        struct,
    required TResult orElse(),
  }) {
    if (entity != null) {
      return entity(name, definition, key, extra);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(Entity value) entity,
    required TResult Function(Flat value) flat,
    required TResult Function(Struct value) struct,
  }) {
    return entity(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(Entity value)? entity,
    TResult? Function(Flat value)? flat,
    TResult? Function(Struct value)? struct,
  }) {
    return entity?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(Entity value)? entity,
    TResult Function(Flat value)? flat,
    TResult Function(Struct value)? struct,
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
  const factory Entity(final String name,
      {final Map<String, IJsonSchema> definition,
      final String key,
      @JsonExtra() final Map<String, dynamic> extra}) = _$Entity;
  const Entity._() : super._();

  factory Entity.fromJson(Map<String, dynamic> json) = _$Entity.fromJson;

  @override
  String get name;
  @override
  Map<String, IJsonSchema> get definition;
  String get key;
  @override

  /// [extra] is a map of additional properties.
  @JsonExtra()
  Map<String, dynamic> get extra;
  @override
  @JsonKey(ignore: true)
  _$$EntityCopyWith<_$Entity> get copyWith =>
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
      bool addMissingKeys,
      @JsonExtra() Map<String, dynamic> extra});
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
    Object? extra = null,
  }) {
    return _then(_$Flat(
      null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      definition: null == definition
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
      extra: null == extra
          ? _value._extra
          : extra // ignore: cast_nullable_to_non_nullable
              as Map<String, dynamic>,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$Flat extends Flat {
  const _$Flat(this.name,
      {final Map<String, IJsonSchema> definition = const {},
      this.key = 'id',
      final List<String> entityPath = const [],
      final List<List<String>> includePath = const [],
      this.addMissingKeys = true,
      @JsonExtra() final Map<String, dynamic> extra = const {},
      final String? $type})
      : _definition = definition,
        _entityPath = entityPath,
        _includePath = includePath,
        _extra = extra,
        $type = $type ?? 'JsonSchema.flat',
        super._();

  factory _$Flat.fromJson(Map<String, dynamic> json) => _$$FlatFromJson(json);

  @override
  final String name;
  final Map<String, IJsonSchema> _definition;
  @override
  @JsonKey()
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

  @JsonKey(name: 'runtimeType')
  final String $type;

  @override
  String toString() {
    return 'JsonSchema.flat(name: $name, definition: $definition, key: $key, entityPath: $entityPath, includePath: $includePath, addMissingKeys: $addMissingKeys, extra: $extra)';
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
                other.addMissingKeys == addMissingKeys) &&
            const DeepCollectionEquality().equals(other._extra, _extra));
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
      addMissingKeys,
      const DeepCollectionEquality().hash(_extra));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$FlatCopyWith<_$Flat> get copyWith =>
      __$$FlatCopyWithImpl<_$Flat>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String name, Map<String, IJsonSchema> definition,
            String key, @JsonExtra() Map<String, dynamic> extra)
        entity,
    required TResult Function(
            String name,
            Map<String, IJsonSchema> definition,
            String key,
            List<String> entityPath,
            List<List<String>> includePath,
            bool addMissingKeys,
            @JsonExtra() Map<String, dynamic> extra)
        flat,
    required TResult Function(
            String name,
            @JsonKey(fromJson: IJsonSchema.structFromJson) dynamic definition,
            @JsonExtra() Map<String, dynamic> extra)
        struct,
  }) {
    return flat(
        name, definition, key, entityPath, includePath, addMissingKeys, extra);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String name, Map<String, IJsonSchema> definition,
            String key, @JsonExtra() Map<String, dynamic> extra)?
        entity,
    TResult? Function(
            String name,
            Map<String, IJsonSchema> definition,
            String key,
            List<String> entityPath,
            List<List<String>> includePath,
            bool addMissingKeys,
            @JsonExtra() Map<String, dynamic> extra)?
        flat,
    TResult? Function(
            String name,
            @JsonKey(fromJson: IJsonSchema.structFromJson) dynamic definition,
            @JsonExtra() Map<String, dynamic> extra)?
        struct,
  }) {
    return flat?.call(
        name, definition, key, entityPath, includePath, addMissingKeys, extra);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String name, Map<String, IJsonSchema> definition,
            String key, @JsonExtra() Map<String, dynamic> extra)?
        entity,
    TResult Function(
            String name,
            Map<String, IJsonSchema> definition,
            String key,
            List<String> entityPath,
            List<List<String>> includePath,
            bool addMissingKeys,
            @JsonExtra() Map<String, dynamic> extra)?
        flat,
    TResult Function(
            String name,
            @JsonKey(fromJson: IJsonSchema.structFromJson) dynamic definition,
            @JsonExtra() Map<String, dynamic> extra)?
        struct,
    required TResult orElse(),
  }) {
    if (flat != null) {
      return flat(name, definition, key, entityPath, includePath,
          addMissingKeys, extra);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(Entity value) entity,
    required TResult Function(Flat value) flat,
    required TResult Function(Struct value) struct,
  }) {
    return flat(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(Entity value)? entity,
    TResult? Function(Flat value)? flat,
    TResult? Function(Struct value)? struct,
  }) {
    return flat?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(Entity value)? entity,
    TResult Function(Flat value)? flat,
    TResult Function(Struct value)? struct,
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
  const factory Flat(final String name,
      {final Map<String, IJsonSchema> definition,
      final String key,
      final List<String> entityPath,
      final List<List<String>> includePath,
      final bool addMissingKeys,
      @JsonExtra() final Map<String, dynamic> extra}) = _$Flat;
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

  /// [extra] is a map of additional properties.
  @JsonExtra()
  Map<String, dynamic> get extra;
  @override
  @JsonKey(ignore: true)
  _$$FlatCopyWith<_$Flat> get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$StructCopyWith<$Res> implements $JsonSchemaCopyWith<$Res> {
  factory _$$StructCopyWith(_$Struct value, $Res Function(_$Struct) then) =
      __$$StructCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {String name,
      @JsonKey(fromJson: IJsonSchema.structFromJson) dynamic definition,
      @JsonExtra() Map<String, dynamic> extra});
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
    Object? extra = null,
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
      extra: null == extra
          ? _value._extra
          : extra // ignore: cast_nullable_to_non_nullable
              as Map<String, dynamic>,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$Struct extends Struct {
  const _$Struct(
      this.name, @JsonKey(fromJson: IJsonSchema.structFromJson) this.definition,
      {@JsonExtra() final Map<String, dynamic> extra = const {},
      final String? $type})
      : _extra = extra,
        $type = $type ?? 'JsonSchema.struct',
        super._();

  factory _$Struct.fromJson(Map<String, dynamic> json) =>
      _$$StructFromJson(json);

  @override
  final String name;
  @override
  @JsonKey(fromJson: IJsonSchema.structFromJson)
  final dynamic definition;

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

  @JsonKey(name: 'runtimeType')
  final String $type;

  @override
  String toString() {
    return 'JsonSchema.struct(name: $name, definition: $definition, extra: $extra)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$Struct &&
            (identical(other.name, name) || other.name == name) &&
            const DeepCollectionEquality()
                .equals(other.definition, definition) &&
            const DeepCollectionEquality().equals(other._extra, _extra));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(
      runtimeType,
      name,
      const DeepCollectionEquality().hash(definition),
      const DeepCollectionEquality().hash(_extra));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$StructCopyWith<_$Struct> get copyWith =>
      __$$StructCopyWithImpl<_$Struct>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String name, Map<String, IJsonSchema> definition,
            String key, @JsonExtra() Map<String, dynamic> extra)
        entity,
    required TResult Function(
            String name,
            Map<String, IJsonSchema> definition,
            String key,
            List<String> entityPath,
            List<List<String>> includePath,
            bool addMissingKeys,
            @JsonExtra() Map<String, dynamic> extra)
        flat,
    required TResult Function(
            String name,
            @JsonKey(fromJson: IJsonSchema.structFromJson) dynamic definition,
            @JsonExtra() Map<String, dynamic> extra)
        struct,
  }) {
    return struct(name, definition, extra);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String name, Map<String, IJsonSchema> definition,
            String key, @JsonExtra() Map<String, dynamic> extra)?
        entity,
    TResult? Function(
            String name,
            Map<String, IJsonSchema> definition,
            String key,
            List<String> entityPath,
            List<List<String>> includePath,
            bool addMissingKeys,
            @JsonExtra() Map<String, dynamic> extra)?
        flat,
    TResult? Function(
            String name,
            @JsonKey(fromJson: IJsonSchema.structFromJson) dynamic definition,
            @JsonExtra() Map<String, dynamic> extra)?
        struct,
  }) {
    return struct?.call(name, definition, extra);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String name, Map<String, IJsonSchema> definition,
            String key, @JsonExtra() Map<String, dynamic> extra)?
        entity,
    TResult Function(
            String name,
            Map<String, IJsonSchema> definition,
            String key,
            List<String> entityPath,
            List<List<String>> includePath,
            bool addMissingKeys,
            @JsonExtra() Map<String, dynamic> extra)?
        flat,
    TResult Function(
            String name,
            @JsonKey(fromJson: IJsonSchema.structFromJson) dynamic definition,
            @JsonExtra() Map<String, dynamic> extra)?
        struct,
    required TResult orElse(),
  }) {
    if (struct != null) {
      return struct(name, definition, extra);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(Entity value) entity,
    required TResult Function(Flat value) flat,
    required TResult Function(Struct value) struct,
  }) {
    return struct(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(Entity value)? entity,
    TResult? Function(Flat value)? flat,
    TResult? Function(Struct value)? struct,
  }) {
    return struct?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(Entity value)? entity,
    TResult Function(Flat value)? flat,
    TResult Function(Struct value)? struct,
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
  const factory Struct(final String name,
      @JsonKey(fromJson: IJsonSchema.structFromJson) final dynamic definition,
      {@JsonExtra() final Map<String, dynamic> extra}) = _$Struct;
  const Struct._() : super._();

  factory Struct.fromJson(Map<String, dynamic> json) = _$Struct.fromJson;

  @override
  String get name;
  @override
  @JsonKey(fromJson: IJsonSchema.structFromJson)
  dynamic get definition;
  @override

  /// [extra] is a map of additional properties.
  @JsonExtra()
  Map<String, dynamic> get extra;
  @override
  @JsonKey(ignore: true)
  _$$StructCopyWith<_$Struct> get copyWith =>
      throw _privateConstructorUsedError;
}
