// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'node_spec.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

NodeSpec _$NodeSpecFromJson(Map<String, dynamic> json) {
  return _NodeSpec.fromJson(json);
}

/// @nodoc
mixin _$NodeSpec {
  String? get id => throw _privateConstructorUsedError;
  String? get slugged => throw _privateConstructorUsedError;
  String get name => throw _privateConstructorUsedError;
  List<PropSpec> get propSpecs => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $NodeSpecCopyWith<NodeSpec> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $NodeSpecCopyWith<$Res> {
  factory $NodeSpecCopyWith(NodeSpec value, $Res Function(NodeSpec) then) =
      _$NodeSpecCopyWithImpl<$Res, NodeSpec>;
  @useResult
  $Res call(
      {String? id, String? slugged, String name, List<PropSpec> propSpecs});
}

/// @nodoc
class _$NodeSpecCopyWithImpl<$Res, $Val extends NodeSpec>
    implements $NodeSpecCopyWith<$Res> {
  _$NodeSpecCopyWithImpl(this._value, this._then);

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
    Object? propSpecs = null,
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
      propSpecs: null == propSpecs
          ? _value.propSpecs
          : propSpecs // ignore: cast_nullable_to_non_nullable
              as List<PropSpec>,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$_NodeSpecCopyWith<$Res> implements $NodeSpecCopyWith<$Res> {
  factory _$$_NodeSpecCopyWith(
          _$_NodeSpec value, $Res Function(_$_NodeSpec) then) =
      __$$_NodeSpecCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {String? id, String? slugged, String name, List<PropSpec> propSpecs});
}

/// @nodoc
class __$$_NodeSpecCopyWithImpl<$Res>
    extends _$NodeSpecCopyWithImpl<$Res, _$_NodeSpec>
    implements _$$_NodeSpecCopyWith<$Res> {
  __$$_NodeSpecCopyWithImpl(
      _$_NodeSpec _value, $Res Function(_$_NodeSpec) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = freezed,
    Object? slugged = freezed,
    Object? name = null,
    Object? propSpecs = null,
  }) {
    return _then(_$_NodeSpec(
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
      propSpecs: null == propSpecs
          ? _value._propSpecs
          : propSpecs // ignore: cast_nullable_to_non_nullable
              as List<PropSpec>,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_NodeSpec extends _NodeSpec {
  const _$_NodeSpec(
      {this.id,
      this.slugged,
      required this.name,
      required final List<PropSpec> propSpecs})
      : _propSpecs = propSpecs,
        super._();

  factory _$_NodeSpec.fromJson(Map<String, dynamic> json) =>
      _$$_NodeSpecFromJson(json);

  @override
  final String? id;
  @override
  final String? slugged;
  @override
  final String name;
  final List<PropSpec> _propSpecs;
  @override
  List<PropSpec> get propSpecs {
    if (_propSpecs is EqualUnmodifiableListView) return _propSpecs;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(_propSpecs);
  }

  @override
  String toString() {
    return 'NodeSpec(id: $id, slugged: $slugged, name: $name, propSpecs: $propSpecs)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_NodeSpec &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.slugged, slugged) || other.slugged == slugged) &&
            (identical(other.name, name) || other.name == name) &&
            const DeepCollectionEquality()
                .equals(other._propSpecs, _propSpecs));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, id, slugged, name,
      const DeepCollectionEquality().hash(_propSpecs));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_NodeSpecCopyWith<_$_NodeSpec> get copyWith =>
      __$$_NodeSpecCopyWithImpl<_$_NodeSpec>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_NodeSpecToJson(
      this,
    );
  }
}

abstract class _NodeSpec extends NodeSpec {
  const factory _NodeSpec(
      {final String? id,
      final String? slugged,
      required final String name,
      required final List<PropSpec> propSpecs}) = _$_NodeSpec;
  const _NodeSpec._() : super._();

  factory _NodeSpec.fromJson(Map<String, dynamic> json) = _$_NodeSpec.fromJson;

  @override
  String? get id;
  @override
  String? get slugged;
  @override
  String get name;
  @override
  List<PropSpec> get propSpecs;
  @override
  @JsonKey(ignore: true)
  _$$_NodeSpecCopyWith<_$_NodeSpec> get copyWith =>
      throw _privateConstructorUsedError;
}
