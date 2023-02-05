import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:unself_model/unself_model.dart';

part 'field.freezed.dart';
part 'field.g.dart';

/// {@template field}
/// [Field] is a field inside of a [Collection]'s schema.
@freezed
class Field with _$Field implements Base {
  /// {@macro field}
  const factory Field({
    /// [id] is unself unique identifier for the [Field].
    required String id,

    /// [created] is the date and time when the [Field] was created inside unself app.
    required DateTime created,

    /// [updated] is the date and time when the [Field] was last updated inside unself app.
    required DateTime updated,

    /// [type] is the data type of the [Field].
    required FieldType type,

    /// [name] is the name of the [Field].
    required String name,

    /// [system] is a flag that indicates if the [Field] is a system field.
    required bool system,

    /// [required] is a flag that indicates if the [Field] is required.
    required bool required,

    /// [unique] is a flag that indicates if the [Field] must be unique.
    required bool unique,

    /// [collection] is the [Collection] that the [Field] belongs to.
    required Collection collection,

    /// [extra] is a map of additional properties.
    @JsonExtra() @Default({}) Map<String, dynamic> extra,
  }) = _Field;

  /// Creates a [Field] from Json map
  factory Field.fromJson(Map<String, dynamic> json) => _$FieldFromJson(json);
}

@JsonEnum()
enum FieldType {
  text,
  number,
  bool,
  email,
  url,
  date,
  select,
  file,
  relation,
}
