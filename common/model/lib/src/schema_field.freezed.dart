// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target

part of 'schema_field.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

SchemaField _$SchemaFieldFromJson(Map<String, dynamic> json) {
  return _SchemaField.fromJson(json);
}

/// @nodoc
mixin _$SchemaField {
  String get id => throw _privateConstructorUsedError;
  String get name => throw _privateConstructorUsedError;
  String get type => throw _privateConstructorUsedError;
  bool get system => throw _privateConstructorUsedError;
  bool get required => throw _privateConstructorUsedError;
  bool get unique => throw _privateConstructorUsedError;
  Map<String, dynamic> get options => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $SchemaFieldCopyWith<SchemaField> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $SchemaFieldCopyWith<$Res> {
  factory $SchemaFieldCopyWith(
          SchemaField value, $Res Function(SchemaField) then) =
      _$SchemaFieldCopyWithImpl<$Res, SchemaField>;
  @useResult
  $Res call(
      {String id,
      String name,
      String type,
      bool system,
      bool required,
      bool unique,
      Map<String, dynamic> options});
}

/// @nodoc
class _$SchemaFieldCopyWithImpl<$Res, $Val extends SchemaField>
    implements $SchemaFieldCopyWith<$Res> {
  _$SchemaFieldCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? name = null,
    Object? type = null,
    Object? system = null,
    Object? required = null,
    Object? unique = null,
    Object? options = null,
  }) {
    return _then(_value.copyWith(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      type: null == type
          ? _value.type
          : type // ignore: cast_nullable_to_non_nullable
              as String,
      system: null == system
          ? _value.system
          : system // ignore: cast_nullable_to_non_nullable
              as bool,
      required: null == required
          ? _value.required
          : required // ignore: cast_nullable_to_non_nullable
              as bool,
      unique: null == unique
          ? _value.unique
          : unique // ignore: cast_nullable_to_non_nullable
              as bool,
      options: null == options
          ? _value.options
          : options // ignore: cast_nullable_to_non_nullable
              as Map<String, dynamic>,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$_SchemaFieldCopyWith<$Res>
    implements $SchemaFieldCopyWith<$Res> {
  factory _$$_SchemaFieldCopyWith(
          _$_SchemaField value, $Res Function(_$_SchemaField) then) =
      __$$_SchemaFieldCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {String id,
      String name,
      String type,
      bool system,
      bool required,
      bool unique,
      Map<String, dynamic> options});
}

/// @nodoc
class __$$_SchemaFieldCopyWithImpl<$Res>
    extends _$SchemaFieldCopyWithImpl<$Res, _$_SchemaField>
    implements _$$_SchemaFieldCopyWith<$Res> {
  __$$_SchemaFieldCopyWithImpl(
      _$_SchemaField _value, $Res Function(_$_SchemaField) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? name = null,
    Object? type = null,
    Object? system = null,
    Object? required = null,
    Object? unique = null,
    Object? options = null,
  }) {
    return _then(_$_SchemaField(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      type: null == type
          ? _value.type
          : type // ignore: cast_nullable_to_non_nullable
              as String,
      system: null == system
          ? _value.system
          : system // ignore: cast_nullable_to_non_nullable
              as bool,
      required: null == required
          ? _value.required
          : required // ignore: cast_nullable_to_non_nullable
              as bool,
      unique: null == unique
          ? _value.unique
          : unique // ignore: cast_nullable_to_non_nullable
              as bool,
      options: null == options
          ? _value._options
          : options // ignore: cast_nullable_to_non_nullable
              as Map<String, dynamic>,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_SchemaField implements _SchemaField {
  const _$_SchemaField(
      {this.id = '',
      this.name = '',
      this.type = '',
      this.system = false,
      this.required = false,
      this.unique = false,
      final Map<String, dynamic> options = const {}})
      : _options = options;

  factory _$_SchemaField.fromJson(Map<String, dynamic> json) =>
      _$$_SchemaFieldFromJson(json);

  @override
  @JsonKey()
  final String id;
  @override
  @JsonKey()
  final String name;
  @override
  @JsonKey()
  final String type;
  @override
  @JsonKey()
  final bool system;
  @override
  @JsonKey()
  final bool required;
  @override
  @JsonKey()
  final bool unique;
  final Map<String, dynamic> _options;
  @override
  @JsonKey()
  Map<String, dynamic> get options {
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableMapView(_options);
  }

  @override
  String toString() {
    return 'SchemaField(id: $id, name: $name, type: $type, system: $system, required: $required, unique: $unique, options: $options)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_SchemaField &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.name, name) || other.name == name) &&
            (identical(other.type, type) || other.type == type) &&
            (identical(other.system, system) || other.system == system) &&
            (identical(other.required, required) ||
                other.required == required) &&
            (identical(other.unique, unique) || other.unique == unique) &&
            const DeepCollectionEquality().equals(other._options, _options));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, id, name, type, system, required,
      unique, const DeepCollectionEquality().hash(_options));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_SchemaFieldCopyWith<_$_SchemaField> get copyWith =>
      __$$_SchemaFieldCopyWithImpl<_$_SchemaField>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_SchemaFieldToJson(
      this,
    );
  }
}

abstract class _SchemaField implements SchemaField {
  const factory _SchemaField(
      {final String id,
      final String name,
      final String type,
      final bool system,
      final bool required,
      final bool unique,
      final Map<String, dynamic> options}) = _$_SchemaField;

  factory _SchemaField.fromJson(Map<String, dynamic> json) =
      _$_SchemaField.fromJson;

  @override
  String get id;
  @override
  String get name;
  @override
  String get type;
  @override
  bool get system;
  @override
  bool get required;
  @override
  bool get unique;
  @override
  Map<String, dynamic> get options;
  @override
  @JsonKey(ignore: true)
  _$$_SchemaFieldCopyWith<_$_SchemaField> get copyWith =>
      throw _privateConstructorUsedError;
}
