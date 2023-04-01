// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'unpack_state.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

UnpackState _$UnpackStateFromJson(Map<String, dynamic> json) {
  return _UnpackState.fromJson(json);
}

/// @nodoc
mixin _$UnpackState {
  int? get id => throw _privateConstructorUsedError;
  int get specId => throw _privateConstructorUsedError;
  UnpackStep get step => throw _privateConstructorUsedError;
  Iterable<ModuleSpec>? get selectedModules =>
      throw _privateConstructorUsedError;
  String? get filePath => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $UnpackStateCopyWith<UnpackState> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $UnpackStateCopyWith<$Res> {
  factory $UnpackStateCopyWith(
          UnpackState value, $Res Function(UnpackState) then) =
      _$UnpackStateCopyWithImpl<$Res, UnpackState>;
  @useResult
  $Res call(
      {int? id,
      int specId,
      UnpackStep step,
      Iterable<ModuleSpec>? selectedModules,
      String? filePath});
}

/// @nodoc
class _$UnpackStateCopyWithImpl<$Res, $Val extends UnpackState>
    implements $UnpackStateCopyWith<$Res> {
  _$UnpackStateCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = freezed,
    Object? specId = null,
    Object? step = null,
    Object? selectedModules = freezed,
    Object? filePath = freezed,
  }) {
    return _then(_value.copyWith(
      id: freezed == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as int?,
      specId: null == specId
          ? _value.specId
          : specId // ignore: cast_nullable_to_non_nullable
              as int,
      step: null == step
          ? _value.step
          : step // ignore: cast_nullable_to_non_nullable
              as UnpackStep,
      selectedModules: freezed == selectedModules
          ? _value.selectedModules
          : selectedModules // ignore: cast_nullable_to_non_nullable
              as Iterable<ModuleSpec>?,
      filePath: freezed == filePath
          ? _value.filePath
          : filePath // ignore: cast_nullable_to_non_nullable
              as String?,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$_UnpackStateCopyWith<$Res>
    implements $UnpackStateCopyWith<$Res> {
  factory _$$_UnpackStateCopyWith(
          _$_UnpackState value, $Res Function(_$_UnpackState) then) =
      __$$_UnpackStateCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {int? id,
      int specId,
      UnpackStep step,
      Iterable<ModuleSpec>? selectedModules,
      String? filePath});
}

/// @nodoc
class __$$_UnpackStateCopyWithImpl<$Res>
    extends _$UnpackStateCopyWithImpl<$Res, _$_UnpackState>
    implements _$$_UnpackStateCopyWith<$Res> {
  __$$_UnpackStateCopyWithImpl(
      _$_UnpackState _value, $Res Function(_$_UnpackState) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = freezed,
    Object? specId = null,
    Object? step = null,
    Object? selectedModules = freezed,
    Object? filePath = freezed,
  }) {
    return _then(_$_UnpackState(
      id: freezed == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as int?,
      specId: null == specId
          ? _value.specId
          : specId // ignore: cast_nullable_to_non_nullable
              as int,
      step: null == step
          ? _value.step
          : step // ignore: cast_nullable_to_non_nullable
              as UnpackStep,
      selectedModules: freezed == selectedModules
          ? _value.selectedModules
          : selectedModules // ignore: cast_nullable_to_non_nullable
              as Iterable<ModuleSpec>?,
      filePath: freezed == filePath
          ? _value.filePath
          : filePath // ignore: cast_nullable_to_non_nullable
              as String?,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_UnpackState extends _UnpackState {
  const _$_UnpackState(
      {this.id,
      required this.specId,
      required this.step,
      this.selectedModules,
      this.filePath})
      : super._();

  factory _$_UnpackState.fromJson(Map<String, dynamic> json) =>
      _$$_UnpackStateFromJson(json);

  @override
  final int? id;
  @override
  final int specId;
  @override
  final UnpackStep step;
  @override
  final Iterable<ModuleSpec>? selectedModules;
  @override
  final String? filePath;

  @override
  String toString() {
    return 'UnpackState(id: $id, specId: $specId, step: $step, selectedModules: $selectedModules, filePath: $filePath)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_UnpackState &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.specId, specId) || other.specId == specId) &&
            (identical(other.step, step) || other.step == step) &&
            const DeepCollectionEquality()
                .equals(other.selectedModules, selectedModules) &&
            (identical(other.filePath, filePath) ||
                other.filePath == filePath));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, id, specId, step,
      const DeepCollectionEquality().hash(selectedModules), filePath);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_UnpackStateCopyWith<_$_UnpackState> get copyWith =>
      __$$_UnpackStateCopyWithImpl<_$_UnpackState>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_UnpackStateToJson(
      this,
    );
  }
}

abstract class _UnpackState extends UnpackState {
  const factory _UnpackState(
      {final int? id,
      required final int specId,
      required final UnpackStep step,
      final Iterable<ModuleSpec>? selectedModules,
      final String? filePath}) = _$_UnpackState;
  const _UnpackState._() : super._();

  factory _UnpackState.fromJson(Map<String, dynamic> json) =
      _$_UnpackState.fromJson;

  @override
  int? get id;
  @override
  int get specId;
  @override
  UnpackStep get step;
  @override
  Iterable<ModuleSpec>? get selectedModules;
  @override
  String? get filePath;
  @override
  @JsonKey(ignore: true)
  _$$_UnpackStateCopyWith<_$_UnpackState> get copyWith =>
      throw _privateConstructorUsedError;
}
