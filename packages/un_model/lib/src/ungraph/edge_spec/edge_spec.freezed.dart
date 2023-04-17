// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'edge_spec.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

EdgeSpec _$EdgeSpecFromJson(Map<String, dynamic> json) {
  return _EdgeSpec.fromJson(json);
}

/// @nodoc
mixin _$EdgeSpec {
  String? get id => throw _privateConstructorUsedError;
  String? get slugged => throw _privateConstructorUsedError;
  String get name => throw _privateConstructorUsedError;
  String get description => throw _privateConstructorUsedError;
  String get type => throw _privateConstructorUsedError;
  String get sourceNodeSpecId => throw _privateConstructorUsedError;
  String get targetNodeSpecId => throw _privateConstructorUsedError;
  List<JsonSpec> get jsonSpecs => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $EdgeSpecCopyWith<EdgeSpec> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $EdgeSpecCopyWith<$Res> {
  factory $EdgeSpecCopyWith(EdgeSpec value, $Res Function(EdgeSpec) then) =
      _$EdgeSpecCopyWithImpl<$Res, EdgeSpec>;
  @useResult
  $Res call(
      {String? id,
      String? slugged,
      String name,
      String description,
      String type,
      String sourceNodeSpecId,
      String targetNodeSpecId,
      List<JsonSpec> jsonSpecs});
}

/// @nodoc
class _$EdgeSpecCopyWithImpl<$Res, $Val extends EdgeSpec>
    implements $EdgeSpecCopyWith<$Res> {
  _$EdgeSpecCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = freezed,
    Object? slugged = freezed,
    Object? name = null,
    Object? description = null,
    Object? type = null,
    Object? sourceNodeSpecId = null,
    Object? targetNodeSpecId = null,
    Object? jsonSpecs = null,
  }) {
    return _then(_value.copyWith(
      id: freezed == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String?,
      slugged: freezed == slugged
          ? _value.slugged
          : slugged // ignore: cast_nullable_to_non_nullable
              as String?,
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      description: null == description
          ? _value.description
          : description // ignore: cast_nullable_to_non_nullable
              as String,
      type: null == type
          ? _value.type
          : type // ignore: cast_nullable_to_non_nullable
              as String,
      sourceNodeSpecId: null == sourceNodeSpecId
          ? _value.sourceNodeSpecId
          : sourceNodeSpecId // ignore: cast_nullable_to_non_nullable
              as String,
      targetNodeSpecId: null == targetNodeSpecId
          ? _value.targetNodeSpecId
          : targetNodeSpecId // ignore: cast_nullable_to_non_nullable
              as String,
      jsonSpecs: null == jsonSpecs
          ? _value.jsonSpecs
          : jsonSpecs // ignore: cast_nullable_to_non_nullable
              as List<JsonSpec>,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$_EdgeSpecCopyWith<$Res> implements $EdgeSpecCopyWith<$Res> {
  factory _$$_EdgeSpecCopyWith(
          _$_EdgeSpec value, $Res Function(_$_EdgeSpec) then) =
      __$$_EdgeSpecCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {String? id,
      String? slugged,
      String name,
      String description,
      String type,
      String sourceNodeSpecId,
      String targetNodeSpecId,
      List<JsonSpec> jsonSpecs});
}

/// @nodoc
class __$$_EdgeSpecCopyWithImpl<$Res>
    extends _$EdgeSpecCopyWithImpl<$Res, _$_EdgeSpec>
    implements _$$_EdgeSpecCopyWith<$Res> {
  __$$_EdgeSpecCopyWithImpl(
      _$_EdgeSpec _value, $Res Function(_$_EdgeSpec) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = freezed,
    Object? slugged = freezed,
    Object? name = null,
    Object? description = null,
    Object? type = null,
    Object? sourceNodeSpecId = null,
    Object? targetNodeSpecId = null,
    Object? jsonSpecs = null,
  }) {
    return _then(_$_EdgeSpec(
      id: freezed == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String?,
      slugged: freezed == slugged
          ? _value.slugged
          : slugged // ignore: cast_nullable_to_non_nullable
              as String?,
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      description: null == description
          ? _value.description
          : description // ignore: cast_nullable_to_non_nullable
              as String,
      type: null == type
          ? _value.type
          : type // ignore: cast_nullable_to_non_nullable
              as String,
      sourceNodeSpecId: null == sourceNodeSpecId
          ? _value.sourceNodeSpecId
          : sourceNodeSpecId // ignore: cast_nullable_to_non_nullable
              as String,
      targetNodeSpecId: null == targetNodeSpecId
          ? _value.targetNodeSpecId
          : targetNodeSpecId // ignore: cast_nullable_to_non_nullable
              as String,
      jsonSpecs: null == jsonSpecs
          ? _value._jsonSpecs
          : jsonSpecs // ignore: cast_nullable_to_non_nullable
              as List<JsonSpec>,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_EdgeSpec extends _EdgeSpec {
  const _$_EdgeSpec(
      {this.id,
      this.slugged,
      required this.name,
      required this.description,
      required this.type,
      required this.sourceNodeSpecId,
      required this.targetNodeSpecId,
      required final List<JsonSpec> jsonSpecs})
      : _jsonSpecs = jsonSpecs,
        super._();

  factory _$_EdgeSpec.fromJson(Map<String, dynamic> json) =>
      _$$_EdgeSpecFromJson(json);

  @override
  final String? id;
  @override
  final String? slugged;
  @override
  final String name;
  @override
  final String description;
  @override
  final String type;
  @override
  final String sourceNodeSpecId;
  @override
  final String targetNodeSpecId;
  final List<JsonSpec> _jsonSpecs;
  @override
  List<JsonSpec> get jsonSpecs {
    if (_jsonSpecs is EqualUnmodifiableListView) return _jsonSpecs;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(_jsonSpecs);
  }

  @override
  String toString() {
    return 'EdgeSpec(id: $id, slugged: $slugged, name: $name, description: $description, type: $type, sourceNodeSpecId: $sourceNodeSpecId, targetNodeSpecId: $targetNodeSpecId, jsonSpecs: $jsonSpecs)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_EdgeSpec &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.slugged, slugged) || other.slugged == slugged) &&
            (identical(other.name, name) || other.name == name) &&
            (identical(other.description, description) ||
                other.description == description) &&
            (identical(other.type, type) || other.type == type) &&
            (identical(other.sourceNodeSpecId, sourceNodeSpecId) ||
                other.sourceNodeSpecId == sourceNodeSpecId) &&
            (identical(other.targetNodeSpecId, targetNodeSpecId) ||
                other.targetNodeSpecId == targetNodeSpecId) &&
            const DeepCollectionEquality()
                .equals(other._jsonSpecs, _jsonSpecs));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(
      runtimeType,
      id,
      slugged,
      name,
      description,
      type,
      sourceNodeSpecId,
      targetNodeSpecId,
      const DeepCollectionEquality().hash(_jsonSpecs));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_EdgeSpecCopyWith<_$_EdgeSpec> get copyWith =>
      __$$_EdgeSpecCopyWithImpl<_$_EdgeSpec>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_EdgeSpecToJson(
      this,
    );
  }
}

abstract class _EdgeSpec extends EdgeSpec {
  const factory _EdgeSpec(
      {final String? id,
      final String? slugged,
      required final String name,
      required final String description,
      required final String type,
      required final String sourceNodeSpecId,
      required final String targetNodeSpecId,
      required final List<JsonSpec> jsonSpecs}) = _$_EdgeSpec;
  const _EdgeSpec._() : super._();

  factory _EdgeSpec.fromJson(Map<String, dynamic> json) = _$_EdgeSpec.fromJson;

  @override
  String? get id;
  @override
  String? get slugged;
  @override
  String get name;
  @override
  String get description;
  @override
  String get type;
  @override
  String get sourceNodeSpecId;
  @override
  String get targetNodeSpecId;
  @override
  List<JsonSpec> get jsonSpecs;
  @override
  @JsonKey(ignore: true)
  _$$_EdgeSpecCopyWith<_$_EdgeSpec> get copyWith =>
      throw _privateConstructorUsedError;
}
