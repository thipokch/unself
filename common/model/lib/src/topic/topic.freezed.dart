// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'topic.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

Topic _$TopicFromJson(Map<String, dynamic> json) {
  return _Topic.fromJson(json);
}

/// @nodoc
mixin _$Topic {
  @JsonString()
  String get id => throw _privateConstructorUsedError;
  @JsonDateTime()
  DateTime get created => throw _privateConstructorUsedError;
  @JsonDateTime()
  DateTime get updated => throw _privateConstructorUsedError;
  String get archiveId => throw _privateConstructorUsedError;

  /// [name] is the name used by the [Topic] on the [App].
  String get name => throw _privateConstructorUsedError;

  /// [email] is the email used by the [Topic] on the [App].
// required String source,
  /// [extra] is a map of additional properties.
  @JsonExtra()
  Map<String, dynamic> get extra => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $TopicCopyWith<Topic> get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $TopicCopyWith<$Res> {
  factory $TopicCopyWith(Topic value, $Res Function(Topic) then) =
      _$TopicCopyWithImpl<$Res, Topic>;
  @useResult
  $Res call(
      {@JsonString() String id,
      @JsonDateTime() DateTime created,
      @JsonDateTime() DateTime updated,
      String archiveId,
      String name,
      @JsonExtra() Map<String, dynamic> extra});
}

/// @nodoc
class _$TopicCopyWithImpl<$Res, $Val extends Topic>
    implements $TopicCopyWith<$Res> {
  _$TopicCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? created = null,
    Object? updated = null,
    Object? archiveId = null,
    Object? name = null,
    Object? extra = null,
  }) {
    return _then(_value.copyWith(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      created: null == created
          ? _value.created
          : created // ignore: cast_nullable_to_non_nullable
              as DateTime,
      updated: null == updated
          ? _value.updated
          : updated // ignore: cast_nullable_to_non_nullable
              as DateTime,
      archiveId: null == archiveId
          ? _value.archiveId
          : archiveId // ignore: cast_nullable_to_non_nullable
              as String,
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
abstract class _$$_TopicCopyWith<$Res> implements $TopicCopyWith<$Res> {
  factory _$$_TopicCopyWith(_$_Topic value, $Res Function(_$_Topic) then) =
      __$$_TopicCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {@JsonString() String id,
      @JsonDateTime() DateTime created,
      @JsonDateTime() DateTime updated,
      String archiveId,
      String name,
      @JsonExtra() Map<String, dynamic> extra});
}

/// @nodoc
class __$$_TopicCopyWithImpl<$Res> extends _$TopicCopyWithImpl<$Res, _$_Topic>
    implements _$$_TopicCopyWith<$Res> {
  __$$_TopicCopyWithImpl(_$_Topic _value, $Res Function(_$_Topic) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? created = null,
    Object? updated = null,
    Object? archiveId = null,
    Object? name = null,
    Object? extra = null,
  }) {
    return _then(_$_Topic(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      created: null == created
          ? _value.created
          : created // ignore: cast_nullable_to_non_nullable
              as DateTime,
      updated: null == updated
          ? _value.updated
          : updated // ignore: cast_nullable_to_non_nullable
              as DateTime,
      archiveId: null == archiveId
          ? _value.archiveId
          : archiveId // ignore: cast_nullable_to_non_nullable
              as String,
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
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
class _$_Topic extends _Topic {
  const _$_Topic(
      {@JsonString() required this.id,
      @JsonDateTime() required this.created,
      @JsonDateTime() required this.updated,
      required this.archiveId,
      required this.name,
      @JsonExtra() final Map<String, dynamic> extra = const {}})
      : _extra = extra,
        super._();

  factory _$_Topic.fromJson(Map<String, dynamic> json) =>
      _$$_TopicFromJson(json);

  @override
  @JsonString()
  final String id;
  @override
  @JsonDateTime()
  final DateTime created;
  @override
  @JsonDateTime()
  final DateTime updated;
  @override
  final String archiveId;

  /// [name] is the name used by the [Topic] on the [App].
  @override
  final String name;

  /// [email] is the email used by the [Topic] on the [App].
// required String source,
  /// [extra] is a map of additional properties.
  final Map<String, dynamic> _extra;

  /// [email] is the email used by the [Topic] on the [App].
// required String source,
  /// [extra] is a map of additional properties.
  @override
  @JsonKey()
  @JsonExtra()
  Map<String, dynamic> get extra {
    if (_extra is EqualUnmodifiableMapView) return _extra;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableMapView(_extra);
  }

  @override
  String toString() {
    return 'Topic(id: $id, created: $created, updated: $updated, archiveId: $archiveId, name: $name, extra: $extra)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_Topic &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.created, created) || other.created == created) &&
            (identical(other.updated, updated) || other.updated == updated) &&
            (identical(other.archiveId, archiveId) ||
                other.archiveId == archiveId) &&
            (identical(other.name, name) || other.name == name) &&
            const DeepCollectionEquality().equals(other._extra, _extra));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, id, created, updated, archiveId,
      name, const DeepCollectionEquality().hash(_extra));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_TopicCopyWith<_$_Topic> get copyWith =>
      __$$_TopicCopyWithImpl<_$_Topic>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_TopicToJson(
      this,
    );
  }
}

abstract class _Topic extends Topic {
  const factory _Topic(
      {@JsonString() required final String id,
      @JsonDateTime() required final DateTime created,
      @JsonDateTime() required final DateTime updated,
      required final String archiveId,
      required final String name,
      @JsonExtra() final Map<String, dynamic> extra}) = _$_Topic;
  const _Topic._() : super._();

  factory _Topic.fromJson(Map<String, dynamic> json) = _$_Topic.fromJson;

  @override
  @JsonString()
  String get id;
  @override
  @JsonDateTime()
  DateTime get created;
  @override
  @JsonDateTime()
  DateTime get updated;
  @override
  String get archiveId;
  @override

  /// [name] is the name used by the [Topic] on the [App].
  String get name;
  @override

  /// [email] is the email used by the [Topic] on the [App].
// required String source,
  /// [extra] is a map of additional properties.
  @JsonExtra()
  Map<String, dynamic> get extra;
  @override
  @JsonKey(ignore: true)
  _$$_TopicCopyWith<_$_Topic> get copyWith =>
      throw _privateConstructorUsedError;
}
