// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target

part of 'record_model.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

RecordModel _$RecordModelFromJson(Map<String, dynamic> json) {
  return _RecordModel.fromJson(json);
}

/// @nodoc
mixin _$RecordModel {
  String get id => throw _privateConstructorUsedError;
  String get created => throw _privateConstructorUsedError;
  String get updated => throw _privateConstructorUsedError;
  String get collectionId => throw _privateConstructorUsedError;
  String get collectionName => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $RecordModelCopyWith<RecordModel> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $RecordModelCopyWith<$Res> {
  factory $RecordModelCopyWith(
          RecordModel value, $Res Function(RecordModel) then) =
      _$RecordModelCopyWithImpl<$Res, RecordModel>;
  @useResult
  $Res call(
      {String id,
      String created,
      String updated,
      String collectionId,
      String collectionName});
}

/// @nodoc
class _$RecordModelCopyWithImpl<$Res, $Val extends RecordModel>
    implements $RecordModelCopyWith<$Res> {
  _$RecordModelCopyWithImpl(this._value, this._then);

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
    Object? collectionId = null,
    Object? collectionName = null,
  }) {
    return _then(_value.copyWith(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      created: null == created
          ? _value.created
          : created // ignore: cast_nullable_to_non_nullable
              as String,
      updated: null == updated
          ? _value.updated
          : updated // ignore: cast_nullable_to_non_nullable
              as String,
      collectionId: null == collectionId
          ? _value.collectionId
          : collectionId // ignore: cast_nullable_to_non_nullable
              as String,
      collectionName: null == collectionName
          ? _value.collectionName
          : collectionName // ignore: cast_nullable_to_non_nullable
              as String,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$_RecordModelCopyWith<$Res>
    implements $RecordModelCopyWith<$Res> {
  factory _$$_RecordModelCopyWith(
          _$_RecordModel value, $Res Function(_$_RecordModel) then) =
      __$$_RecordModelCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {String id,
      String created,
      String updated,
      String collectionId,
      String collectionName});
}

/// @nodoc
class __$$_RecordModelCopyWithImpl<$Res>
    extends _$RecordModelCopyWithImpl<$Res, _$_RecordModel>
    implements _$$_RecordModelCopyWith<$Res> {
  __$$_RecordModelCopyWithImpl(
      _$_RecordModel _value, $Res Function(_$_RecordModel) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? created = null,
    Object? updated = null,
    Object? collectionId = null,
    Object? collectionName = null,
  }) {
    return _then(_$_RecordModel(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      created: null == created
          ? _value.created
          : created // ignore: cast_nullable_to_non_nullable
              as String,
      updated: null == updated
          ? _value.updated
          : updated // ignore: cast_nullable_to_non_nullable
              as String,
      collectionId: null == collectionId
          ? _value.collectionId
          : collectionId // ignore: cast_nullable_to_non_nullable
              as String,
      collectionName: null == collectionName
          ? _value.collectionName
          : collectionName // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_RecordModel implements _RecordModel {
  const _$_RecordModel(
      {this.id = '',
      this.created = '',
      this.updated = '',
      this.collectionId = '',
      this.collectionName = ''});

  factory _$_RecordModel.fromJson(Map<String, dynamic> json) =>
      _$$_RecordModelFromJson(json);

  @override
  @JsonKey()
  final String id;
  @override
  @JsonKey()
  final String created;
  @override
  @JsonKey()
  final String updated;
  @override
  @JsonKey()
  final String collectionId;
  @override
  @JsonKey()
  final String collectionName;

  @override
  String toString() {
    return 'RecordModel(id: $id, created: $created, updated: $updated, collectionId: $collectionId, collectionName: $collectionName)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_RecordModel &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.created, created) || other.created == created) &&
            (identical(other.updated, updated) || other.updated == updated) &&
            (identical(other.collectionId, collectionId) ||
                other.collectionId == collectionId) &&
            (identical(other.collectionName, collectionName) ||
                other.collectionName == collectionName));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(
      runtimeType, id, created, updated, collectionId, collectionName);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_RecordModelCopyWith<_$_RecordModel> get copyWith =>
      __$$_RecordModelCopyWithImpl<_$_RecordModel>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_RecordModelToJson(
      this,
    );
  }
}

abstract class _RecordModel implements RecordModel {
  const factory _RecordModel(
      {final String id,
      final String created,
      final String updated,
      final String collectionId,
      final String collectionName}) = _$_RecordModel;

  factory _RecordModel.fromJson(Map<String, dynamic> json) =
      _$_RecordModel.fromJson;

  @override
  String get id;
  @override
  String get created;
  @override
  String get updated;
  @override
  String get collectionId;
  @override
  String get collectionName;
  @override
  @JsonKey(ignore: true)
  _$$_RecordModelCopyWith<_$_RecordModel> get copyWith =>
      throw _privateConstructorUsedError;
}
