// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'archive_schema.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

ArchiveSchema _$ArchiveSchemaFromJson(Map<String, dynamic> json) {
  switch (json['runtimeType']) {
    case 'ArchiveSchema.ref':
      return Ref.fromJson(json);
    case 'ArchiveSchema.union':
      return Union.fromJson(json);
    case 'ArchiveSchema.entity':
      return Entity.fromJson(json);

    default:
      throw CheckedFromJsonException(json, 'runtimeType', 'ArchiveSchema',
          'Invalid union type "${json['runtimeType']}"!');
  }
}

/// @nodoc
mixin _$ArchiveSchema {
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String name) ref,
    required TResult Function(List<String> names, String key) union,
    required TResult Function(String name,
            Map<String, IArchiveSchema> definition, String key, String traverse)
        entity,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String name)? ref,
    TResult? Function(List<String> names, String key)? union,
    TResult? Function(String name, Map<String, IArchiveSchema> definition,
            String key, String traverse)?
        entity,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String name)? ref,
    TResult Function(List<String> names, String key)? union,
    TResult Function(String name, Map<String, IArchiveSchema> definition,
            String key, String traverse)?
        entity,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(Ref value) ref,
    required TResult Function(Union value) union,
    required TResult Function(Entity value) entity,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(Ref value)? ref,
    TResult? Function(Union value)? union,
    TResult? Function(Entity value)? entity,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(Ref value)? ref,
    TResult Function(Union value)? union,
    TResult Function(Entity value)? entity,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $ArchiveSchemaCopyWith<$Res> {
  factory $ArchiveSchemaCopyWith(
          ArchiveSchema value, $Res Function(ArchiveSchema) then) =
      _$ArchiveSchemaCopyWithImpl<$Res, ArchiveSchema>;
}

/// @nodoc
class _$ArchiveSchemaCopyWithImpl<$Res, $Val extends ArchiveSchema>
    implements $ArchiveSchemaCopyWith<$Res> {
  _$ArchiveSchemaCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;
}

/// @nodoc
abstract class _$$RefCopyWith<$Res> {
  factory _$$RefCopyWith(_$Ref value, $Res Function(_$Ref) then) =
      __$$RefCopyWithImpl<$Res>;
  @useResult
  $Res call({String name});
}

/// @nodoc
class __$$RefCopyWithImpl<$Res> extends _$ArchiveSchemaCopyWithImpl<$Res, _$Ref>
    implements _$$RefCopyWith<$Res> {
  __$$RefCopyWithImpl(_$Ref _value, $Res Function(_$Ref) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? name = null,
  }) {
    return _then(_$Ref(
      null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$Ref extends Ref {
  const _$Ref(this.name, {final String? $type})
      : $type = $type ?? 'ArchiveSchema.ref',
        super._();

  factory _$Ref.fromJson(Map<String, dynamic> json) => _$$RefFromJson(json);

  @override
  final String name;

  @JsonKey(name: 'runtimeType')
  final String $type;

  @override
  String toString() {
    return 'ArchiveSchema.ref(name: $name)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$Ref &&
            (identical(other.name, name) || other.name == name));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, name);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$RefCopyWith<_$Ref> get copyWith =>
      __$$RefCopyWithImpl<_$Ref>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String name) ref,
    required TResult Function(List<String> names, String key) union,
    required TResult Function(String name,
            Map<String, IArchiveSchema> definition, String key, String traverse)
        entity,
  }) {
    return ref(name);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String name)? ref,
    TResult? Function(List<String> names, String key)? union,
    TResult? Function(String name, Map<String, IArchiveSchema> definition,
            String key, String traverse)?
        entity,
  }) {
    return ref?.call(name);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String name)? ref,
    TResult Function(List<String> names, String key)? union,
    TResult Function(String name, Map<String, IArchiveSchema> definition,
            String key, String traverse)?
        entity,
    required TResult orElse(),
  }) {
    if (ref != null) {
      return ref(name);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(Ref value) ref,
    required TResult Function(Union value) union,
    required TResult Function(Entity value) entity,
  }) {
    return ref(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(Ref value)? ref,
    TResult? Function(Union value)? union,
    TResult? Function(Entity value)? entity,
  }) {
    return ref?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(Ref value)? ref,
    TResult Function(Union value)? union,
    TResult Function(Entity value)? entity,
    required TResult orElse(),
  }) {
    if (ref != null) {
      return ref(this);
    }
    return orElse();
  }

  @override
  Map<String, dynamic> toJson() {
    return _$$RefToJson(
      this,
    );
  }
}

abstract class Ref extends ArchiveSchema {
  const factory Ref(final String name) = _$Ref;
  const Ref._() : super._();

  factory Ref.fromJson(Map<String, dynamic> json) = _$Ref.fromJson;

  String get name;
  @JsonKey(ignore: true)
  _$$RefCopyWith<_$Ref> get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$UnionCopyWith<$Res> {
  factory _$$UnionCopyWith(_$Union value, $Res Function(_$Union) then) =
      __$$UnionCopyWithImpl<$Res>;
  @useResult
  $Res call({List<String> names, String key});
}

/// @nodoc
class __$$UnionCopyWithImpl<$Res>
    extends _$ArchiveSchemaCopyWithImpl<$Res, _$Union>
    implements _$$UnionCopyWith<$Res> {
  __$$UnionCopyWithImpl(_$Union _value, $Res Function(_$Union) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? names = null,
    Object? key = null,
  }) {
    return _then(_$Union(
      null == names
          ? _value._names
          : names // ignore: cast_nullable_to_non_nullable
              as List<String>,
      key: null == key
          ? _value.key
          : key // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$Union extends Union {
  const _$Union(final List<String> names,
      {this.key = 'type', final String? $type})
      : _names = names,
        $type = $type ?? 'ArchiveSchema.union',
        super._();

  factory _$Union.fromJson(Map<String, dynamic> json) => _$$UnionFromJson(json);

// Serialization doesn't support fuctions
// required LookupCallback lookup,
  final List<String> _names;
// Serialization doesn't support fuctions
// required LookupCallback lookup,
  @override
  List<String> get names {
    if (_names is EqualUnmodifiableListView) return _names;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(_names);
  }

  @override
  @JsonKey()
  final String key;

  @JsonKey(name: 'runtimeType')
  final String $type;

  @override
  String toString() {
    return 'ArchiveSchema.union(names: $names, key: $key)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$Union &&
            const DeepCollectionEquality().equals(other._names, _names) &&
            (identical(other.key, key) || other.key == key));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(
      runtimeType, const DeepCollectionEquality().hash(_names), key);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$UnionCopyWith<_$Union> get copyWith =>
      __$$UnionCopyWithImpl<_$Union>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String name) ref,
    required TResult Function(List<String> names, String key) union,
    required TResult Function(String name,
            Map<String, IArchiveSchema> definition, String key, String traverse)
        entity,
  }) {
    return union(names, key);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String name)? ref,
    TResult? Function(List<String> names, String key)? union,
    TResult? Function(String name, Map<String, IArchiveSchema> definition,
            String key, String traverse)?
        entity,
  }) {
    return union?.call(names, key);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String name)? ref,
    TResult Function(List<String> names, String key)? union,
    TResult Function(String name, Map<String, IArchiveSchema> definition,
            String key, String traverse)?
        entity,
    required TResult orElse(),
  }) {
    if (union != null) {
      return union(names, key);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(Ref value) ref,
    required TResult Function(Union value) union,
    required TResult Function(Entity value) entity,
  }) {
    return union(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(Ref value)? ref,
    TResult? Function(Union value)? union,
    TResult? Function(Entity value)? entity,
  }) {
    return union?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(Ref value)? ref,
    TResult Function(Union value)? union,
    TResult Function(Entity value)? entity,
    required TResult orElse(),
  }) {
    if (union != null) {
      return union(this);
    }
    return orElse();
  }

  @override
  Map<String, dynamic> toJson() {
    return _$$UnionToJson(
      this,
    );
  }
}

abstract class Union extends ArchiveSchema {
  const factory Union(final List<String> names, {final String key}) = _$Union;
  const Union._() : super._();

  factory Union.fromJson(Map<String, dynamic> json) = _$Union.fromJson;

// Serialization doesn't support fuctions
// required LookupCallback lookup,
  List<String> get names;
  String get key;
  @JsonKey(ignore: true)
  _$$UnionCopyWith<_$Union> get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$EntityCopyWith<$Res> {
  factory _$$EntityCopyWith(_$Entity value, $Res Function(_$Entity) then) =
      __$$EntityCopyWithImpl<$Res>;
  @useResult
  $Res call(
      {String name,
      Map<String, IArchiveSchema> definition,
      String key,
      String traverse});
}

/// @nodoc
class __$$EntityCopyWithImpl<$Res>
    extends _$ArchiveSchemaCopyWithImpl<$Res, _$Entity>
    implements _$$EntityCopyWith<$Res> {
  __$$EntityCopyWithImpl(_$Entity _value, $Res Function(_$Entity) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? name = null,
    Object? definition = null,
    Object? key = null,
    Object? traverse = null,
  }) {
    return _then(_$Entity(
      null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      null == definition
          ? _value._definition
          : definition // ignore: cast_nullable_to_non_nullable
              as Map<String, IArchiveSchema>,
      key: null == key
          ? _value.key
          : key // ignore: cast_nullable_to_non_nullable
              as String,
      traverse: null == traverse
          ? _value.traverse
          : traverse // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$Entity extends Entity {
  const _$Entity(this.name, final Map<String, IArchiveSchema> definition,
      {this.key = 'id', this.traverse = '', final String? $type})
      : _definition = definition,
        $type = $type ?? 'ArchiveSchema.entity',
        super._();

  factory _$Entity.fromJson(Map<String, dynamic> json) =>
      _$$EntityFromJson(json);

  @override
  final String name;
  final Map<String, IArchiveSchema> _definition;
  @override
  Map<String, IArchiveSchema> get definition {
    if (_definition is EqualUnmodifiableMapView) return _definition;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableMapView(_definition);
  }

  @override
  @JsonKey()
  final String key;
  @override
  @JsonKey()
  final String traverse;

  @JsonKey(name: 'runtimeType')
  final String $type;

  @override
  String toString() {
    return 'ArchiveSchema.entity(name: $name, definition: $definition, key: $key, traverse: $traverse)';
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
            (identical(other.traverse, traverse) ||
                other.traverse == traverse));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, name,
      const DeepCollectionEquality().hash(_definition), key, traverse);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$EntityCopyWith<_$Entity> get copyWith =>
      __$$EntityCopyWithImpl<_$Entity>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String name) ref,
    required TResult Function(List<String> names, String key) union,
    required TResult Function(String name,
            Map<String, IArchiveSchema> definition, String key, String traverse)
        entity,
  }) {
    return entity(name, definition, key, traverse);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String name)? ref,
    TResult? Function(List<String> names, String key)? union,
    TResult? Function(String name, Map<String, IArchiveSchema> definition,
            String key, String traverse)?
        entity,
  }) {
    return entity?.call(name, definition, key, traverse);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String name)? ref,
    TResult Function(List<String> names, String key)? union,
    TResult Function(String name, Map<String, IArchiveSchema> definition,
            String key, String traverse)?
        entity,
    required TResult orElse(),
  }) {
    if (entity != null) {
      return entity(name, definition, key, traverse);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(Ref value) ref,
    required TResult Function(Union value) union,
    required TResult Function(Entity value) entity,
  }) {
    return entity(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(Ref value)? ref,
    TResult? Function(Union value)? union,
    TResult? Function(Entity value)? entity,
  }) {
    return entity?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(Ref value)? ref,
    TResult Function(Union value)? union,
    TResult Function(Entity value)? entity,
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

abstract class Entity extends ArchiveSchema {
  const factory Entity(
      final String name, final Map<String, IArchiveSchema> definition,
      {final String key, final String traverse}) = _$Entity;
  const Entity._() : super._();

  factory Entity.fromJson(Map<String, dynamic> json) = _$Entity.fromJson;

  String get name;
  Map<String, IArchiveSchema> get definition;
  String get key;
  String get traverse;
  @JsonKey(ignore: true)
  _$$EntityCopyWith<_$Entity> get copyWith =>
      throw _privateConstructorUsedError;
}

ArchiveSchemaList _$ArchiveSchemaListFromJson(Map<String, dynamic> json) {
  switch (json['runtimeType']) {
    case 'ArchiveSchemaList.ref':
      return RefList.fromJson(json);
    case 'ArchiveSchemaList.union':
      return UnionList.fromJson(json);

    default:
      throw CheckedFromJsonException(json, 'runtimeType', 'ArchiveSchemaList',
          'Invalid union type "${json['runtimeType']}"!');
  }
}

/// @nodoc
mixin _$ArchiveSchemaList {
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String name) ref,
    required TResult Function(List<String> names, String key) union,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String name)? ref,
    TResult? Function(List<String> names, String key)? union,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String name)? ref,
    TResult Function(List<String> names, String key)? union,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(RefList value) ref,
    required TResult Function(UnionList value) union,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(RefList value)? ref,
    TResult? Function(UnionList value)? union,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(RefList value)? ref,
    TResult Function(UnionList value)? union,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $ArchiveSchemaListCopyWith<$Res> {
  factory $ArchiveSchemaListCopyWith(
          ArchiveSchemaList value, $Res Function(ArchiveSchemaList) then) =
      _$ArchiveSchemaListCopyWithImpl<$Res, ArchiveSchemaList>;
}

/// @nodoc
class _$ArchiveSchemaListCopyWithImpl<$Res, $Val extends ArchiveSchemaList>
    implements $ArchiveSchemaListCopyWith<$Res> {
  _$ArchiveSchemaListCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;
}

/// @nodoc
abstract class _$$RefListCopyWith<$Res> {
  factory _$$RefListCopyWith(_$RefList value, $Res Function(_$RefList) then) =
      __$$RefListCopyWithImpl<$Res>;
  @useResult
  $Res call({String name});
}

/// @nodoc
class __$$RefListCopyWithImpl<$Res>
    extends _$ArchiveSchemaListCopyWithImpl<$Res, _$RefList>
    implements _$$RefListCopyWith<$Res> {
  __$$RefListCopyWithImpl(_$RefList _value, $Res Function(_$RefList) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? name = null,
  }) {
    return _then(_$RefList(
      null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$RefList extends RefList {
  const _$RefList(this.name, {final String? $type})
      : $type = $type ?? 'ArchiveSchemaList.ref',
        super._();

  factory _$RefList.fromJson(Map<String, dynamic> json) =>
      _$$RefListFromJson(json);

  @override
  final String name;

  @JsonKey(name: 'runtimeType')
  final String $type;

  @override
  String toString() {
    return 'ArchiveSchemaList.ref(name: $name)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$RefList &&
            (identical(other.name, name) || other.name == name));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, name);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$RefListCopyWith<_$RefList> get copyWith =>
      __$$RefListCopyWithImpl<_$RefList>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String name) ref,
    required TResult Function(List<String> names, String key) union,
  }) {
    return ref(name);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String name)? ref,
    TResult? Function(List<String> names, String key)? union,
  }) {
    return ref?.call(name);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String name)? ref,
    TResult Function(List<String> names, String key)? union,
    required TResult orElse(),
  }) {
    if (ref != null) {
      return ref(name);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(RefList value) ref,
    required TResult Function(UnionList value) union,
  }) {
    return ref(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(RefList value)? ref,
    TResult? Function(UnionList value)? union,
  }) {
    return ref?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(RefList value)? ref,
    TResult Function(UnionList value)? union,
    required TResult orElse(),
  }) {
    if (ref != null) {
      return ref(this);
    }
    return orElse();
  }

  @override
  Map<String, dynamic> toJson() {
    return _$$RefListToJson(
      this,
    );
  }
}

abstract class RefList extends ArchiveSchemaList {
  const factory RefList(final String name) = _$RefList;
  const RefList._() : super._();

  factory RefList.fromJson(Map<String, dynamic> json) = _$RefList.fromJson;

  String get name;
  @JsonKey(ignore: true)
  _$$RefListCopyWith<_$RefList> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$UnionListCopyWith<$Res> {
  factory _$$UnionListCopyWith(
          _$UnionList value, $Res Function(_$UnionList) then) =
      __$$UnionListCopyWithImpl<$Res>;
  @useResult
  $Res call({List<String> names, String key});
}

/// @nodoc
class __$$UnionListCopyWithImpl<$Res>
    extends _$ArchiveSchemaListCopyWithImpl<$Res, _$UnionList>
    implements _$$UnionListCopyWith<$Res> {
  __$$UnionListCopyWithImpl(
      _$UnionList _value, $Res Function(_$UnionList) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? names = null,
    Object? key = null,
  }) {
    return _then(_$UnionList(
      null == names
          ? _value._names
          : names // ignore: cast_nullable_to_non_nullable
              as List<String>,
      key: null == key
          ? _value.key
          : key // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$UnionList extends UnionList {
  const _$UnionList(final List<String> names,
      {this.key = 'type', final String? $type})
      : _names = names,
        $type = $type ?? 'ArchiveSchemaList.union',
        super._();

  factory _$UnionList.fromJson(Map<String, dynamic> json) =>
      _$$UnionListFromJson(json);

  final List<String> _names;
  @override
  List<String> get names {
    if (_names is EqualUnmodifiableListView) return _names;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(_names);
  }

  @override
  @JsonKey()
  final String key;

  @JsonKey(name: 'runtimeType')
  final String $type;

  @override
  String toString() {
    return 'ArchiveSchemaList.union(names: $names, key: $key)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$UnionList &&
            const DeepCollectionEquality().equals(other._names, _names) &&
            (identical(other.key, key) || other.key == key));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(
      runtimeType, const DeepCollectionEquality().hash(_names), key);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$UnionListCopyWith<_$UnionList> get copyWith =>
      __$$UnionListCopyWithImpl<_$UnionList>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String name) ref,
    required TResult Function(List<String> names, String key) union,
  }) {
    return union(names, key);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String name)? ref,
    TResult? Function(List<String> names, String key)? union,
  }) {
    return union?.call(names, key);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String name)? ref,
    TResult Function(List<String> names, String key)? union,
    required TResult orElse(),
  }) {
    if (union != null) {
      return union(names, key);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(RefList value) ref,
    required TResult Function(UnionList value) union,
  }) {
    return union(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(RefList value)? ref,
    TResult? Function(UnionList value)? union,
  }) {
    return union?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(RefList value)? ref,
    TResult Function(UnionList value)? union,
    required TResult orElse(),
  }) {
    if (union != null) {
      return union(this);
    }
    return orElse();
  }

  @override
  Map<String, dynamic> toJson() {
    return _$$UnionListToJson(
      this,
    );
  }
}

abstract class UnionList extends ArchiveSchemaList {
  const factory UnionList(final List<String> names, {final String key}) =
      _$UnionList;
  const UnionList._() : super._();

  factory UnionList.fromJson(Map<String, dynamic> json) = _$UnionList.fromJson;

  List<String> get names;
  String get key;
  @JsonKey(ignore: true)
  _$$UnionListCopyWith<_$UnionList> get copyWith =>
      throw _privateConstructorUsedError;
}
