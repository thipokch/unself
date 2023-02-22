// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'archive_data.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

ArchiveData _$ArchiveDataFromJson(Map<String, dynamic> json) {
  return _Archive.fromJson(json);
}

/// @nodoc
mixin _$ArchiveData {
  /// [id] is unself unique identifier for the [Archive].
  String get id => throw _privateConstructorUsedError;

  /// [created] is the date and time when the [Archive] was created inside unself app.
  @JsonDateTime()
  DateTime get created => throw _privateConstructorUsedError;

  /// [updated] is the date and time when the [Archive] was last updated inside unself app.
  @JsonDateTime()
  DateTime get updated => throw _privateConstructorUsedError;
  List<Account> get accounts => throw _privateConstructorUsedError;
  List<App> get apps => throw _privateConstructorUsedError;
  List<User> get users => throw _privateConstructorUsedError;
  List<Topic> get topics => throw _privateConstructorUsedError;
  List<Activity> get activities => throw _privateConstructorUsedError;

  /// [extra] is a map of additional properties.
  @JsonExtra()
  Map<String, dynamic> get extra => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $ArchiveDataCopyWith<ArchiveData> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $ArchiveDataCopyWith<$Res> {
  factory $ArchiveDataCopyWith(
          ArchiveData value, $Res Function(ArchiveData) then) =
      _$ArchiveDataCopyWithImpl<$Res, ArchiveData>;
  @useResult
  $Res call(
      {String id,
      @JsonDateTime() DateTime created,
      @JsonDateTime() DateTime updated,
      List<Account> accounts,
      List<App> apps,
      List<User> users,
      List<Topic> topics,
      List<Activity> activities,
      @JsonExtra() Map<String, dynamic> extra});
}

/// @nodoc
class _$ArchiveDataCopyWithImpl<$Res, $Val extends ArchiveData>
    implements $ArchiveDataCopyWith<$Res> {
  _$ArchiveDataCopyWithImpl(this._value, this._then);

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
    Object? accounts = null,
    Object? apps = null,
    Object? users = null,
    Object? topics = null,
    Object? activities = null,
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
      accounts: null == accounts
          ? _value.accounts
          : accounts // ignore: cast_nullable_to_non_nullable
              as List<Account>,
      apps: null == apps
          ? _value.apps
          : apps // ignore: cast_nullable_to_non_nullable
              as List<App>,
      users: null == users
          ? _value.users
          : users // ignore: cast_nullable_to_non_nullable
              as List<User>,
      topics: null == topics
          ? _value.topics
          : topics // ignore: cast_nullable_to_non_nullable
              as List<Topic>,
      activities: null == activities
          ? _value.activities
          : activities // ignore: cast_nullable_to_non_nullable
              as List<Activity>,
      extra: null == extra
          ? _value.extra
          : extra // ignore: cast_nullable_to_non_nullable
              as Map<String, dynamic>,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$_ArchiveCopyWith<$Res> implements $ArchiveDataCopyWith<$Res> {
  factory _$$_ArchiveCopyWith(
          _$_Archive value, $Res Function(_$_Archive) then) =
      __$$_ArchiveCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {String id,
      @JsonDateTime() DateTime created,
      @JsonDateTime() DateTime updated,
      List<Account> accounts,
      List<App> apps,
      List<User> users,
      List<Topic> topics,
      List<Activity> activities,
      @JsonExtra() Map<String, dynamic> extra});
}

/// @nodoc
class __$$_ArchiveCopyWithImpl<$Res>
    extends _$ArchiveDataCopyWithImpl<$Res, _$_Archive>
    implements _$$_ArchiveCopyWith<$Res> {
  __$$_ArchiveCopyWithImpl(_$_Archive _value, $Res Function(_$_Archive) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? created = null,
    Object? updated = null,
    Object? accounts = null,
    Object? apps = null,
    Object? users = null,
    Object? topics = null,
    Object? activities = null,
    Object? extra = null,
  }) {
    return _then(_$_Archive(
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
      accounts: null == accounts
          ? _value._accounts
          : accounts // ignore: cast_nullable_to_non_nullable
              as List<Account>,
      apps: null == apps
          ? _value._apps
          : apps // ignore: cast_nullable_to_non_nullable
              as List<App>,
      users: null == users
          ? _value._users
          : users // ignore: cast_nullable_to_non_nullable
              as List<User>,
      topics: null == topics
          ? _value._topics
          : topics // ignore: cast_nullable_to_non_nullable
              as List<Topic>,
      activities: null == activities
          ? _value._activities
          : activities // ignore: cast_nullable_to_non_nullable
              as List<Activity>,
      extra: null == extra
          ? _value._extra
          : extra // ignore: cast_nullable_to_non_nullable
              as Map<String, dynamic>,
    ));
  }
}

/// @nodoc

@JsonSerializable(createFieldMap: true)
class _$_Archive implements _Archive {
  const _$_Archive(
      {required this.id,
      @JsonDateTime() required this.created,
      @JsonDateTime() required this.updated,
      final List<Account> accounts = const [],
      final List<App> apps = const [],
      final List<User> users = const [],
      final List<Topic> topics = const [],
      final List<Activity> activities = const [],
      @JsonExtra() final Map<String, dynamic> extra = const {}})
      : _accounts = accounts,
        _apps = apps,
        _users = users,
        _topics = topics,
        _activities = activities,
        _extra = extra;

  factory _$_Archive.fromJson(Map<String, dynamic> json) =>
      _$$_ArchiveFromJson(json);

  /// [id] is unself unique identifier for the [Archive].
  @override
  final String id;

  /// [created] is the date and time when the [Archive] was created inside unself app.
  @override
  @JsonDateTime()
  final DateTime created;

  /// [updated] is the date and time when the [Archive] was last updated inside unself app.
  @override
  @JsonDateTime()
  final DateTime updated;
  final List<Account> _accounts;
  @override
  @JsonKey()
  List<Account> get accounts {
    if (_accounts is EqualUnmodifiableListView) return _accounts;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(_accounts);
  }

  final List<App> _apps;
  @override
  @JsonKey()
  List<App> get apps {
    if (_apps is EqualUnmodifiableListView) return _apps;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(_apps);
  }

  final List<User> _users;
  @override
  @JsonKey()
  List<User> get users {
    if (_users is EqualUnmodifiableListView) return _users;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(_users);
  }

  final List<Topic> _topics;
  @override
  @JsonKey()
  List<Topic> get topics {
    if (_topics is EqualUnmodifiableListView) return _topics;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(_topics);
  }

  final List<Activity> _activities;
  @override
  @JsonKey()
  List<Activity> get activities {
    if (_activities is EqualUnmodifiableListView) return _activities;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(_activities);
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

  @override
  String toString() {
    return 'ArchiveData(id: $id, created: $created, updated: $updated, accounts: $accounts, apps: $apps, users: $users, topics: $topics, activities: $activities, extra: $extra)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_Archive &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.created, created) || other.created == created) &&
            (identical(other.updated, updated) || other.updated == updated) &&
            const DeepCollectionEquality().equals(other._accounts, _accounts) &&
            const DeepCollectionEquality().equals(other._apps, _apps) &&
            const DeepCollectionEquality().equals(other._users, _users) &&
            const DeepCollectionEquality().equals(other._topics, _topics) &&
            const DeepCollectionEquality()
                .equals(other._activities, _activities) &&
            const DeepCollectionEquality().equals(other._extra, _extra));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(
      runtimeType,
      id,
      created,
      updated,
      const DeepCollectionEquality().hash(_accounts),
      const DeepCollectionEquality().hash(_apps),
      const DeepCollectionEquality().hash(_users),
      const DeepCollectionEquality().hash(_topics),
      const DeepCollectionEquality().hash(_activities),
      const DeepCollectionEquality().hash(_extra));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_ArchiveCopyWith<_$_Archive> get copyWith =>
      __$$_ArchiveCopyWithImpl<_$_Archive>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_ArchiveToJson(
      this,
    );
  }
}

abstract class _Archive implements ArchiveData {
  const factory _Archive(
      {required final String id,
      @JsonDateTime() required final DateTime created,
      @JsonDateTime() required final DateTime updated,
      final List<Account> accounts,
      final List<App> apps,
      final List<User> users,
      final List<Topic> topics,
      final List<Activity> activities,
      @JsonExtra() final Map<String, dynamic> extra}) = _$_Archive;

  factory _Archive.fromJson(Map<String, dynamic> json) = _$_Archive.fromJson;

  @override

  /// [id] is unself unique identifier for the [Archive].
  String get id;
  @override

  /// [created] is the date and time when the [Archive] was created inside unself app.
  @JsonDateTime()
  DateTime get created;
  @override

  /// [updated] is the date and time when the [Archive] was last updated inside unself app.
  @JsonDateTime()
  DateTime get updated;
  @override
  List<Account> get accounts;
  @override
  List<App> get apps;
  @override
  List<User> get users;
  @override
  List<Topic> get topics;
  @override
  List<Activity> get activities;
  @override

  /// [extra] is a map of additional properties.
  @JsonExtra()
  Map<String, dynamic> get extra;
  @override
  @JsonKey(ignore: true)
  _$$_ArchiveCopyWith<_$_Archive> get copyWith =>
      throw _privateConstructorUsedError;
}
