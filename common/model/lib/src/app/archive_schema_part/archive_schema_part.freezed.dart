// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'archive_schema_part.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

ArchiveSchemaPart _$ArchiveSchemaPartFromJson(Map<String, dynamic> json) {
  switch (json['runtimeType']) {
    case 'json':
      return JsonPart.fromJson(json);
    case 'zipJson':
      return ZipJsonPart.fromJson(json);

    default:
      throw CheckedFromJsonException(json, 'runtimeType', 'ArchiveSchemaPart',
          'Invalid union type "${json['runtimeType']}"!');
  }
}

/// @nodoc
mixin _$ArchiveSchemaPart {
  /// [id] is unself unique identifier for the ArchiveSchemaPart.
  String get id => throw _privateConstructorUsedError;

  /// [file] is path of the ArchiveSchemaPart.
  String get part => throw _privateConstructorUsedError;

  /// [schema] is a list of [JsonSchema]s.
  List<JsonSchema> get schema => throw _privateConstructorUsedError;

  /// [extra] is a map of additional properties.
  @JsonExtra()
  Map<String, dynamic> get extra => throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String id, String part, List<JsonSchema> schema,
            @JsonExtra() Map<String, dynamic> extra)
        json,
    required TResult Function(String id, String part, List<JsonSchema> schema,
            @JsonExtra() Map<String, dynamic> extra)
        zipJson,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String id, String part, List<JsonSchema> schema,
            @JsonExtra() Map<String, dynamic> extra)?
        json,
    TResult? Function(String id, String part, List<JsonSchema> schema,
            @JsonExtra() Map<String, dynamic> extra)?
        zipJson,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String id, String part, List<JsonSchema> schema,
            @JsonExtra() Map<String, dynamic> extra)?
        json,
    TResult Function(String id, String part, List<JsonSchema> schema,
            @JsonExtra() Map<String, dynamic> extra)?
        zipJson,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(JsonPart value) json,
    required TResult Function(ZipJsonPart value) zipJson,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(JsonPart value)? json,
    TResult? Function(ZipJsonPart value)? zipJson,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(JsonPart value)? json,
    TResult Function(ZipJsonPart value)? zipJson,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $ArchiveSchemaPartCopyWith<ArchiveSchemaPart> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $ArchiveSchemaPartCopyWith<$Res> {
  factory $ArchiveSchemaPartCopyWith(
          ArchiveSchemaPart value, $Res Function(ArchiveSchemaPart) then) =
      _$ArchiveSchemaPartCopyWithImpl<$Res, ArchiveSchemaPart>;
  @useResult
  $Res call(
      {String id,
      String part,
      List<JsonSchema> schema,
      @JsonExtra() Map<String, dynamic> extra});
}

/// @nodoc
class _$ArchiveSchemaPartCopyWithImpl<$Res, $Val extends ArchiveSchemaPart>
    implements $ArchiveSchemaPartCopyWith<$Res> {
  _$ArchiveSchemaPartCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? part = null,
    Object? schema = null,
    Object? extra = null,
  }) {
    return _then(_value.copyWith(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      part: null == part
          ? _value.part
          : part // ignore: cast_nullable_to_non_nullable
              as String,
      schema: null == schema
          ? _value.schema
          : schema // ignore: cast_nullable_to_non_nullable
              as List<JsonSchema>,
      extra: null == extra
          ? _value.extra
          : extra // ignore: cast_nullable_to_non_nullable
              as Map<String, dynamic>,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$JsonPartCopyWith<$Res>
    implements $ArchiveSchemaPartCopyWith<$Res> {
  factory _$$JsonPartCopyWith(
          _$JsonPart value, $Res Function(_$JsonPart) then) =
      __$$JsonPartCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {String id,
      String part,
      List<JsonSchema> schema,
      @JsonExtra() Map<String, dynamic> extra});
}

/// @nodoc
class __$$JsonPartCopyWithImpl<$Res>
    extends _$ArchiveSchemaPartCopyWithImpl<$Res, _$JsonPart>
    implements _$$JsonPartCopyWith<$Res> {
  __$$JsonPartCopyWithImpl(_$JsonPart _value, $Res Function(_$JsonPart) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? part = null,
    Object? schema = null,
    Object? extra = null,
  }) {
    return _then(_$JsonPart(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      part: null == part
          ? _value.part
          : part // ignore: cast_nullable_to_non_nullable
              as String,
      schema: null == schema
          ? _value._schema
          : schema // ignore: cast_nullable_to_non_nullable
              as List<JsonSchema>,
      extra: null == extra
          ? _value._extra
          : extra // ignore: cast_nullable_to_non_nullable
              as Map<String, dynamic>,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$JsonPart extends JsonPart {
  const _$JsonPart(
      {required this.id,
      required this.part,
      required final List<JsonSchema> schema,
      @JsonExtra() final Map<String, dynamic> extra = const {},
      final String? $type})
      : _schema = schema,
        _extra = extra,
        $type = $type ?? 'json',
        super._();

  factory _$JsonPart.fromJson(Map<String, dynamic> json) =>
      _$$JsonPartFromJson(json);

  /// [id] is unself unique identifier for the ArchiveSchemaPart.
  @override
  final String id;

  /// [file] is path of the ArchiveSchemaPart.
  @override
  final String part;

  /// [schema] is a list of [JsonSchema]s.
  final List<JsonSchema> _schema;

  /// [schema] is a list of [JsonSchema]s.
  @override
  List<JsonSchema> get schema {
    if (_schema is EqualUnmodifiableListView) return _schema;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(_schema);
  }

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
    return 'ArchiveSchemaPart.json(id: $id, part: $part, schema: $schema, extra: $extra)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$JsonPart &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.part, part) || other.part == part) &&
            const DeepCollectionEquality().equals(other._schema, _schema) &&
            const DeepCollectionEquality().equals(other._extra, _extra));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(
      runtimeType,
      id,
      part,
      const DeepCollectionEquality().hash(_schema),
      const DeepCollectionEquality().hash(_extra));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$JsonPartCopyWith<_$JsonPart> get copyWith =>
      __$$JsonPartCopyWithImpl<_$JsonPart>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String id, String part, List<JsonSchema> schema,
            @JsonExtra() Map<String, dynamic> extra)
        json,
    required TResult Function(String id, String part, List<JsonSchema> schema,
            @JsonExtra() Map<String, dynamic> extra)
        zipJson,
  }) {
    return json(id, part, schema, extra);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String id, String part, List<JsonSchema> schema,
            @JsonExtra() Map<String, dynamic> extra)?
        json,
    TResult? Function(String id, String part, List<JsonSchema> schema,
            @JsonExtra() Map<String, dynamic> extra)?
        zipJson,
  }) {
    return json?.call(id, part, schema, extra);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String id, String part, List<JsonSchema> schema,
            @JsonExtra() Map<String, dynamic> extra)?
        json,
    TResult Function(String id, String part, List<JsonSchema> schema,
            @JsonExtra() Map<String, dynamic> extra)?
        zipJson,
    required TResult orElse(),
  }) {
    if (json != null) {
      return json(id, part, schema, extra);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(JsonPart value) json,
    required TResult Function(ZipJsonPart value) zipJson,
  }) {
    return json(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(JsonPart value)? json,
    TResult? Function(ZipJsonPart value)? zipJson,
  }) {
    return json?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(JsonPart value)? json,
    TResult Function(ZipJsonPart value)? zipJson,
    required TResult orElse(),
  }) {
    if (json != null) {
      return json(this);
    }
    return orElse();
  }

  @override
  Map<String, dynamic> toJson() {
    return _$$JsonPartToJson(
      this,
    );
  }
}

abstract class JsonPart extends ArchiveSchemaPart {
  const factory JsonPart(
      {required final String id,
      required final String part,
      required final List<JsonSchema> schema,
      @JsonExtra() final Map<String, dynamic> extra}) = _$JsonPart;
  const JsonPart._() : super._();

  factory JsonPart.fromJson(Map<String, dynamic> json) = _$JsonPart.fromJson;

  @override

  /// [id] is unself unique identifier for the ArchiveSchemaPart.
  String get id;
  @override

  /// [file] is path of the ArchiveSchemaPart.
  String get part;
  @override

  /// [schema] is a list of [JsonSchema]s.
  List<JsonSchema> get schema;
  @override

  /// [extra] is a map of additional properties.
  @JsonExtra()
  Map<String, dynamic> get extra;
  @override
  @JsonKey(ignore: true)
  _$$JsonPartCopyWith<_$JsonPart> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$ZipJsonPartCopyWith<$Res>
    implements $ArchiveSchemaPartCopyWith<$Res> {
  factory _$$ZipJsonPartCopyWith(
          _$ZipJsonPart value, $Res Function(_$ZipJsonPart) then) =
      __$$ZipJsonPartCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {String id,
      String part,
      List<JsonSchema> schema,
      @JsonExtra() Map<String, dynamic> extra});
}

/// @nodoc
class __$$ZipJsonPartCopyWithImpl<$Res>
    extends _$ArchiveSchemaPartCopyWithImpl<$Res, _$ZipJsonPart>
    implements _$$ZipJsonPartCopyWith<$Res> {
  __$$ZipJsonPartCopyWithImpl(
      _$ZipJsonPart _value, $Res Function(_$ZipJsonPart) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? part = null,
    Object? schema = null,
    Object? extra = null,
  }) {
    return _then(_$ZipJsonPart(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      part: null == part
          ? _value.part
          : part // ignore: cast_nullable_to_non_nullable
              as String,
      schema: null == schema
          ? _value._schema
          : schema // ignore: cast_nullable_to_non_nullable
              as List<JsonSchema>,
      extra: null == extra
          ? _value._extra
          : extra // ignore: cast_nullable_to_non_nullable
              as Map<String, dynamic>,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$ZipJsonPart extends ZipJsonPart {
  const _$ZipJsonPart(
      {required this.id,
      required this.part,
      required final List<JsonSchema> schema,
      @JsonExtra() final Map<String, dynamic> extra = const {},
      final String? $type})
      : _schema = schema,
        _extra = extra,
        $type = $type ?? 'zipJson',
        super._();

  factory _$ZipJsonPart.fromJson(Map<String, dynamic> json) =>
      _$$ZipJsonPartFromJson(json);

  /// [id] is unself unique identifier for the ArchiveSchemaPart.
  @override
  final String id;

  /// [file] is path of the ArchiveSchemaPart.
  @override
  final String part;

  /// [schema] is a list of [JsonSchema]s.
  final List<JsonSchema> _schema;

  /// [schema] is a list of [JsonSchema]s.
  @override
  List<JsonSchema> get schema {
    if (_schema is EqualUnmodifiableListView) return _schema;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(_schema);
  }

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
    return 'ArchiveSchemaPart.zipJson(id: $id, part: $part, schema: $schema, extra: $extra)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$ZipJsonPart &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.part, part) || other.part == part) &&
            const DeepCollectionEquality().equals(other._schema, _schema) &&
            const DeepCollectionEquality().equals(other._extra, _extra));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(
      runtimeType,
      id,
      part,
      const DeepCollectionEquality().hash(_schema),
      const DeepCollectionEquality().hash(_extra));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$ZipJsonPartCopyWith<_$ZipJsonPart> get copyWith =>
      __$$ZipJsonPartCopyWithImpl<_$ZipJsonPart>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String id, String part, List<JsonSchema> schema,
            @JsonExtra() Map<String, dynamic> extra)
        json,
    required TResult Function(String id, String part, List<JsonSchema> schema,
            @JsonExtra() Map<String, dynamic> extra)
        zipJson,
  }) {
    return zipJson(id, part, schema, extra);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String id, String part, List<JsonSchema> schema,
            @JsonExtra() Map<String, dynamic> extra)?
        json,
    TResult? Function(String id, String part, List<JsonSchema> schema,
            @JsonExtra() Map<String, dynamic> extra)?
        zipJson,
  }) {
    return zipJson?.call(id, part, schema, extra);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String id, String part, List<JsonSchema> schema,
            @JsonExtra() Map<String, dynamic> extra)?
        json,
    TResult Function(String id, String part, List<JsonSchema> schema,
            @JsonExtra() Map<String, dynamic> extra)?
        zipJson,
    required TResult orElse(),
  }) {
    if (zipJson != null) {
      return zipJson(id, part, schema, extra);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(JsonPart value) json,
    required TResult Function(ZipJsonPart value) zipJson,
  }) {
    return zipJson(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(JsonPart value)? json,
    TResult? Function(ZipJsonPart value)? zipJson,
  }) {
    return zipJson?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(JsonPart value)? json,
    TResult Function(ZipJsonPart value)? zipJson,
    required TResult orElse(),
  }) {
    if (zipJson != null) {
      return zipJson(this);
    }
    return orElse();
  }

  @override
  Map<String, dynamic> toJson() {
    return _$$ZipJsonPartToJson(
      this,
    );
  }
}

abstract class ZipJsonPart extends ArchiveSchemaPart {
  const factory ZipJsonPart(
      {required final String id,
      required final String part,
      required final List<JsonSchema> schema,
      @JsonExtra() final Map<String, dynamic> extra}) = _$ZipJsonPart;
  const ZipJsonPart._() : super._();

  factory ZipJsonPart.fromJson(Map<String, dynamic> json) =
      _$ZipJsonPart.fromJson;

  @override

  /// [id] is unself unique identifier for the ArchiveSchemaPart.
  String get id;
  @override

  /// [file] is path of the ArchiveSchemaPart.
  String get part;
  @override

  /// [schema] is a list of [JsonSchema]s.
  List<JsonSchema> get schema;
  @override

  /// [extra] is a map of additional properties.
  @JsonExtra()
  Map<String, dynamic> get extra;
  @override
  @JsonKey(ignore: true)
  _$$ZipJsonPartCopyWith<_$ZipJsonPart> get copyWith =>
      throw _privateConstructorUsedError;
}
