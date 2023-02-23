// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'account.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

Account _$AccountFromJson(Map<String, dynamic> json) {
  return _Account.fromJson(json);
}

/// @nodoc
mixin _$Account {
  @JsonString()
  String get id => throw _privateConstructorUsedError;
  @JsonDateTime()
  DateTime get created => throw _privateConstructorUsedError;
  @JsonDateTime()
  DateTime get updated => throw _privateConstructorUsedError;
  String get archiveId => throw _privateConstructorUsedError;

  /// [name] is the name used by the [Account] on the [App].
  String get name => throw _privateConstructorUsedError;

  /// [email] is the email used by the [Account] on the [App].
  String get email => throw _privateConstructorUsedError;

  /// [app] is the [App] where the [Account] is registered.
  App get app => throw _privateConstructorUsedError;

  /// [extra] is a map of additional properties.
  @JsonExtra()
  Map<String, dynamic> get extra => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $AccountCopyWith<Account> get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $AccountCopyWith<$Res> {
  factory $AccountCopyWith(Account value, $Res Function(Account) then) =
      _$AccountCopyWithImpl<$Res, Account>;
  @useResult
  $Res call(
      {@JsonString() String id,
      @JsonDateTime() DateTime created,
      @JsonDateTime() DateTime updated,
      String archiveId,
      String name,
      String email,
      App app,
      @JsonExtra() Map<String, dynamic> extra});

  $AppCopyWith<$Res> get app;
}

/// @nodoc
class _$AccountCopyWithImpl<$Res, $Val extends Account>
    implements $AccountCopyWith<$Res> {
  _$AccountCopyWithImpl(this._value, this._then);

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
    Object? email = null,
    Object? app = null,
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
      email: null == email
          ? _value.email
          : email // ignore: cast_nullable_to_non_nullable
              as String,
      app: null == app
          ? _value.app
          : app // ignore: cast_nullable_to_non_nullable
              as App,
      extra: null == extra
          ? _value.extra
          : extra // ignore: cast_nullable_to_non_nullable
              as Map<String, dynamic>,
    ) as $Val);
  }

  @override
  @pragma('vm:prefer-inline')
  $AppCopyWith<$Res> get app {
    return $AppCopyWith<$Res>(_value.app, (value) {
      return _then(_value.copyWith(app: value) as $Val);
    });
  }
}

/// @nodoc
abstract class _$$_AccountCopyWith<$Res> implements $AccountCopyWith<$Res> {
  factory _$$_AccountCopyWith(
          _$_Account value, $Res Function(_$_Account) then) =
      __$$_AccountCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {@JsonString() String id,
      @JsonDateTime() DateTime created,
      @JsonDateTime() DateTime updated,
      String archiveId,
      String name,
      String email,
      App app,
      @JsonExtra() Map<String, dynamic> extra});

  @override
  $AppCopyWith<$Res> get app;
}

/// @nodoc
class __$$_AccountCopyWithImpl<$Res>
    extends _$AccountCopyWithImpl<$Res, _$_Account>
    implements _$$_AccountCopyWith<$Res> {
  __$$_AccountCopyWithImpl(_$_Account _value, $Res Function(_$_Account) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? created = null,
    Object? updated = null,
    Object? archiveId = null,
    Object? name = null,
    Object? email = null,
    Object? app = null,
    Object? extra = null,
  }) {
    return _then(_$_Account(
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
      email: null == email
          ? _value.email
          : email // ignore: cast_nullable_to_non_nullable
              as String,
      app: null == app
          ? _value.app
          : app // ignore: cast_nullable_to_non_nullable
              as App,
      extra: null == extra
          ? _value._extra
          : extra // ignore: cast_nullable_to_non_nullable
              as Map<String, dynamic>,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_Account extends _Account {
  const _$_Account(
      {@JsonString() required this.id,
      @JsonDateTime() required this.created,
      @JsonDateTime() required this.updated,
      required this.archiveId,
      required this.name,
      required this.email,
      required this.app,
      @JsonExtra() final Map<String, dynamic> extra = const {}})
      : _extra = extra,
        super._();

  factory _$_Account.fromJson(Map<String, dynamic> json) =>
      _$$_AccountFromJson(json);

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

  /// [name] is the name used by the [Account] on the [App].
  @override
  final String name;

  /// [email] is the email used by the [Account] on the [App].
  @override
  final String email;

  /// [app] is the [App] where the [Account] is registered.
  @override
  final App app;

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
    return 'Account(id: $id, created: $created, updated: $updated, archiveId: $archiveId, name: $name, email: $email, app: $app, extra: $extra)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_Account &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.created, created) || other.created == created) &&
            (identical(other.updated, updated) || other.updated == updated) &&
            (identical(other.archiveId, archiveId) ||
                other.archiveId == archiveId) &&
            (identical(other.name, name) || other.name == name) &&
            (identical(other.email, email) || other.email == email) &&
            (identical(other.app, app) || other.app == app) &&
            const DeepCollectionEquality().equals(other._extra, _extra));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, id, created, updated, archiveId,
      name, email, app, const DeepCollectionEquality().hash(_extra));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_AccountCopyWith<_$_Account> get copyWith =>
      __$$_AccountCopyWithImpl<_$_Account>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_AccountToJson(
      this,
    );
  }
}

abstract class _Account extends Account {
  const factory _Account(
      {@JsonString() required final String id,
      @JsonDateTime() required final DateTime created,
      @JsonDateTime() required final DateTime updated,
      required final String archiveId,
      required final String name,
      required final String email,
      required final App app,
      @JsonExtra() final Map<String, dynamic> extra}) = _$_Account;
  const _Account._() : super._();

  factory _Account.fromJson(Map<String, dynamic> json) = _$_Account.fromJson;

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

  /// [name] is the name used by the [Account] on the [App].
  String get name;
  @override

  /// [email] is the email used by the [Account] on the [App].
  String get email;
  @override

  /// [app] is the [App] where the [Account] is registered.
  App get app;
  @override

  /// [extra] is a map of additional properties.
  @JsonExtra()
  Map<String, dynamic> get extra;
  @override
  @JsonKey(ignore: true)
  _$$_AccountCopyWith<_$_Account> get copyWith =>
      throw _privateConstructorUsedError;
}
