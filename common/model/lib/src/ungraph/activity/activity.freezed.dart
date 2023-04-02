// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'activity.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

Activity _$ActivityFromJson(Map<String, dynamic> json) {
  return _Activity.fromJson(json);
}

/// @nodoc
mixin _$Activity {
  @JsonString()
  String get id =>
      throw _privateConstructorUsedError; // @JsonDateTime() required DateTime created,
// @JsonDateTime() required DateTime updated,
  String get archiveId => throw _privateConstructorUsedError;

  /// [accountId] is the source node.
  String get accountId => throw _privateConstructorUsedError;

  /// [appId] is the source node.
  String get appId => throw _privateConstructorUsedError;

  /// [timestamp] is the date and time of the [Activity] by the [App].
  @JsonDateTime()
  DateTime get timestamp => throw _privateConstructorUsedError;

  /// [name] is the name used by the [Activity] on the [App].
  String get name => throw _privateConstructorUsedError;

  /// [type] is the type of the [Activity] on the [App].
  String get type => throw _privateConstructorUsedError;

  /// [email] is the email used by the [Activity] on the [App].
  String get source => throw _privateConstructorUsedError;

  /// [extra] is a map of additional properties.
  @JsonExtra()
  Map<String, dynamic> get extra => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $ActivityCopyWith<Activity> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $ActivityCopyWith<$Res> {
  factory $ActivityCopyWith(Activity value, $Res Function(Activity) then) =
      _$ActivityCopyWithImpl<$Res, Activity>;
  @useResult
  $Res call(
      {@JsonString() String id,
      String archiveId,
      String accountId,
      String appId,
      @JsonDateTime() DateTime timestamp,
      String name,
      String type,
      String source,
      @JsonExtra() Map<String, dynamic> extra});
}

/// @nodoc
class _$ActivityCopyWithImpl<$Res, $Val extends Activity>
    implements $ActivityCopyWith<$Res> {
  _$ActivityCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? archiveId = null,
    Object? accountId = null,
    Object? appId = null,
    Object? timestamp = null,
    Object? name = null,
    Object? type = null,
    Object? source = null,
    Object? extra = null,
  }) {
    return _then(_value.copyWith(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      archiveId: null == archiveId
          ? _value.archiveId
          : archiveId // ignore: cast_nullable_to_non_nullable
              as String,
      accountId: null == accountId
          ? _value.accountId
          : accountId // ignore: cast_nullable_to_non_nullable
              as String,
      appId: null == appId
          ? _value.appId
          : appId // ignore: cast_nullable_to_non_nullable
              as String,
      timestamp: null == timestamp
          ? _value.timestamp
          : timestamp // ignore: cast_nullable_to_non_nullable
              as DateTime,
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      type: null == type
          ? _value.type
          : type // ignore: cast_nullable_to_non_nullable
              as String,
      source: null == source
          ? _value.source
          : source // ignore: cast_nullable_to_non_nullable
              as String,
      extra: null == extra
          ? _value.extra
          : extra // ignore: cast_nullable_to_non_nullable
              as Map<String, dynamic>,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$_ActivityCopyWith<$Res> implements $ActivityCopyWith<$Res> {
  factory _$$_ActivityCopyWith(
          _$_Activity value, $Res Function(_$_Activity) then) =
      __$$_ActivityCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {@JsonString() String id,
      String archiveId,
      String accountId,
      String appId,
      @JsonDateTime() DateTime timestamp,
      String name,
      String type,
      String source,
      @JsonExtra() Map<String, dynamic> extra});
}

/// @nodoc
class __$$_ActivityCopyWithImpl<$Res>
    extends _$ActivityCopyWithImpl<$Res, _$_Activity>
    implements _$$_ActivityCopyWith<$Res> {
  __$$_ActivityCopyWithImpl(
      _$_Activity _value, $Res Function(_$_Activity) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? archiveId = null,
    Object? accountId = null,
    Object? appId = null,
    Object? timestamp = null,
    Object? name = null,
    Object? type = null,
    Object? source = null,
    Object? extra = null,
  }) {
    return _then(_$_Activity(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      archiveId: null == archiveId
          ? _value.archiveId
          : archiveId // ignore: cast_nullable_to_non_nullable
              as String,
      accountId: null == accountId
          ? _value.accountId
          : accountId // ignore: cast_nullable_to_non_nullable
              as String,
      appId: null == appId
          ? _value.appId
          : appId // ignore: cast_nullable_to_non_nullable
              as String,
      timestamp: null == timestamp
          ? _value.timestamp
          : timestamp // ignore: cast_nullable_to_non_nullable
              as DateTime,
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      type: null == type
          ? _value.type
          : type // ignore: cast_nullable_to_non_nullable
              as String,
      source: null == source
          ? _value.source
          : source // ignore: cast_nullable_to_non_nullable
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
class _$_Activity extends _Activity {
  const _$_Activity(
      {@JsonString() required this.id,
      required this.archiveId,
      required this.accountId,
      required this.appId,
      @JsonDateTime() required this.timestamp,
      required this.name,
      required this.type,
      required this.source,
      @JsonExtra() final Map<String, dynamic> extra = const {}})
      : _extra = extra,
        super._();

  factory _$_Activity.fromJson(Map<String, dynamic> json) =>
      _$$_ActivityFromJson(json);

  @override
  @JsonString()
  final String id;
// @JsonDateTime() required DateTime created,
// @JsonDateTime() required DateTime updated,
  @override
  final String archiveId;

  /// [accountId] is the source node.
  @override
  final String accountId;

  /// [appId] is the source node.
  @override
  final String appId;

  /// [timestamp] is the date and time of the [Activity] by the [App].
  @override
  @JsonDateTime()
  final DateTime timestamp;

  /// [name] is the name used by the [Activity] on the [App].
  @override
  final String name;

  /// [type] is the type of the [Activity] on the [App].
  @override
  final String type;

  /// [email] is the email used by the [Activity] on the [App].
  @override
  final String source;

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

  @override
  String toString() {
    return 'Activity(id: $id, archiveId: $archiveId, accountId: $accountId, appId: $appId, timestamp: $timestamp, name: $name, type: $type, source: $source, extra: $extra)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_Activity &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.archiveId, archiveId) ||
                other.archiveId == archiveId) &&
            (identical(other.accountId, accountId) ||
                other.accountId == accountId) &&
            (identical(other.appId, appId) || other.appId == appId) &&
            (identical(other.timestamp, timestamp) ||
                other.timestamp == timestamp) &&
            (identical(other.name, name) || other.name == name) &&
            (identical(other.type, type) || other.type == type) &&
            (identical(other.source, source) || other.source == source) &&
            const DeepCollectionEquality().equals(other._extra, _extra));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(
      runtimeType,
      id,
      archiveId,
      accountId,
      appId,
      timestamp,
      name,
      type,
      source,
      const DeepCollectionEquality().hash(_extra));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_ActivityCopyWith<_$_Activity> get copyWith =>
      __$$_ActivityCopyWithImpl<_$_Activity>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_ActivityToJson(
      this,
    );
  }
}

abstract class _Activity extends Activity {
  const factory _Activity(
      {@JsonString() required final String id,
      required final String archiveId,
      required final String accountId,
      required final String appId,
      @JsonDateTime() required final DateTime timestamp,
      required final String name,
      required final String type,
      required final String source,
      @JsonExtra() final Map<String, dynamic> extra}) = _$_Activity;
  const _Activity._() : super._();

  factory _Activity.fromJson(Map<String, dynamic> json) = _$_Activity.fromJson;

  @override
  @JsonString()
  String get id;
  @override // @JsonDateTime() required DateTime created,
// @JsonDateTime() required DateTime updated,
  String get archiveId;
  @override

  /// [accountId] is the source node.
  String get accountId;
  @override

  /// [appId] is the source node.
  String get appId;
  @override

  /// [timestamp] is the date and time of the [Activity] by the [App].
  @JsonDateTime()
  DateTime get timestamp;
  @override

  /// [name] is the name used by the [Activity] on the [App].
  String get name;
  @override

  /// [type] is the type of the [Activity] on the [App].
  String get type;
  @override

  /// [email] is the email used by the [Activity] on the [App].
  String get source;
  @override

  /// [extra] is a map of additional properties.
  @JsonExtra()
  Map<String, dynamic> get extra;
  @override
  @JsonKey(ignore: true)
  _$$_ActivityCopyWith<_$_Activity> get copyWith =>
      throw _privateConstructorUsedError;
}
