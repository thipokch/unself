// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'edge.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

Edge _$EdgeFromJson(Map<String, dynamic> json) {
  return _Edge.fromJson(json);
}

/// @nodoc
mixin _$Edge {
  String? get id => throw _privateConstructorUsedError;
  String get specSlug => throw _privateConstructorUsedError;
  String? get sourceId => throw _privateConstructorUsedError;
  String? get targetId => throw _privateConstructorUsedError;
  @JsonEmptyMap()
  Map<String, dynamic> get properties => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $EdgeCopyWith<Edge> get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $EdgeCopyWith<$Res> {
  factory $EdgeCopyWith(Edge value, $Res Function(Edge) then) =
      _$EdgeCopyWithImpl<$Res, Edge>;
  @useResult
  $Res call(
      {String? id,
      String specSlug,
      String? sourceId,
      String? targetId,
      @JsonEmptyMap() Map<String, dynamic> properties});
}

/// @nodoc
class _$EdgeCopyWithImpl<$Res, $Val extends Edge>
    implements $EdgeCopyWith<$Res> {
  _$EdgeCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = freezed,
    Object? specSlug = null,
    Object? sourceId = freezed,
    Object? targetId = freezed,
    Object? properties = null,
  }) {
    return _then(_value.copyWith(
      id: freezed == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String?,
      specSlug: null == specSlug
          ? _value.specSlug
          : specSlug // ignore: cast_nullable_to_non_nullable
              as String,
      sourceId: freezed == sourceId
          ? _value.sourceId
          : sourceId // ignore: cast_nullable_to_non_nullable
              as String?,
      targetId: freezed == targetId
          ? _value.targetId
          : targetId // ignore: cast_nullable_to_non_nullable
              as String?,
      properties: null == properties
          ? _value.properties
          : properties // ignore: cast_nullable_to_non_nullable
              as Map<String, dynamic>,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$_EdgeCopyWith<$Res> implements $EdgeCopyWith<$Res> {
  factory _$$_EdgeCopyWith(_$_Edge value, $Res Function(_$_Edge) then) =
      __$$_EdgeCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {String? id,
      String specSlug,
      String? sourceId,
      String? targetId,
      @JsonEmptyMap() Map<String, dynamic> properties});
}

/// @nodoc
class __$$_EdgeCopyWithImpl<$Res> extends _$EdgeCopyWithImpl<$Res, _$_Edge>
    implements _$$_EdgeCopyWith<$Res> {
  __$$_EdgeCopyWithImpl(_$_Edge _value, $Res Function(_$_Edge) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = freezed,
    Object? specSlug = null,
    Object? sourceId = freezed,
    Object? targetId = freezed,
    Object? properties = null,
  }) {
    return _then(_$_Edge(
      id: freezed == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String?,
      specSlug: null == specSlug
          ? _value.specSlug
          : specSlug // ignore: cast_nullable_to_non_nullable
              as String,
      sourceId: freezed == sourceId
          ? _value.sourceId
          : sourceId // ignore: cast_nullable_to_non_nullable
              as String?,
      targetId: freezed == targetId
          ? _value.targetId
          : targetId // ignore: cast_nullable_to_non_nullable
              as String?,
      properties: null == properties
          ? _value._properties
          : properties // ignore: cast_nullable_to_non_nullable
              as Map<String, dynamic>,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_Edge extends _Edge {
  const _$_Edge(
      {this.id,
      required this.specSlug,
      this.sourceId,
      this.targetId,
      @JsonEmptyMap() final Map<String, dynamic> properties = const {}})
      : _properties = properties,
        super._();

  factory _$_Edge.fromJson(Map<String, dynamic> json) => _$$_EdgeFromJson(json);

  @override
  final String? id;
  @override
  final String specSlug;
  @override
  final String? sourceId;
  @override
  final String? targetId;
  final Map<String, dynamic> _properties;
  @override
  @JsonKey()
  @JsonEmptyMap()
  Map<String, dynamic> get properties {
    if (_properties is EqualUnmodifiableMapView) return _properties;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableMapView(_properties);
  }

  @override
  String toString() {
    return 'Edge(id: $id, specSlug: $specSlug, sourceId: $sourceId, targetId: $targetId, properties: $properties)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_Edge &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.specSlug, specSlug) ||
                other.specSlug == specSlug) &&
            (identical(other.sourceId, sourceId) ||
                other.sourceId == sourceId) &&
            (identical(other.targetId, targetId) ||
                other.targetId == targetId) &&
            const DeepCollectionEquality()
                .equals(other._properties, _properties));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, id, specSlug, sourceId, targetId,
      const DeepCollectionEquality().hash(_properties));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_EdgeCopyWith<_$_Edge> get copyWith =>
      __$$_EdgeCopyWithImpl<_$_Edge>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_EdgeToJson(
      this,
    );
  }
}

abstract class _Edge extends Edge {
  const factory _Edge(
      {final String? id,
      required final String specSlug,
      final String? sourceId,
      final String? targetId,
      @JsonEmptyMap() final Map<String, dynamic> properties}) = _$_Edge;
  const _Edge._() : super._();

  factory _Edge.fromJson(Map<String, dynamic> json) = _$_Edge.fromJson;

  @override
  String? get id;
  @override
  String get specSlug;
  @override
  String? get sourceId;
  @override
  String? get targetId;
  @override
  @JsonEmptyMap()
  Map<String, dynamic> get properties;
  @override
  @JsonKey(ignore: true)
  _$$_EdgeCopyWith<_$_Edge> get copyWith => throw _privateConstructorUsedError;
}
