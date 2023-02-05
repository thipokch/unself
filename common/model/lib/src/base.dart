/// {@template base}
/// [Base] is a base class for all unself models.
/// {@endtemplate}
abstract class Base {
  /// [id] is unself unique identifier for each inheriting model.
  final String id;

  /// [created] is the date and time when the inheriting model was created inside unself app.
  final DateTime created;

  /// [updated] is the date and time when the inheriting model was last updated inside unself app.
  final DateTime updated;

  /// [extra] is a map of additional properties.
  final Map<String, dynamic>? extra;

  /// {@macro base}
  const Base._({
    required this.id,
    required this.created,
    required this.updated,
    required this.extra,
  });
}

// /// [jsonExtra] is a [JsonKey] annotation to help with the conversion of
// /// [Base.extra] to and from json.
// const jsonExtra = JsonKey(
//   fromJson: fromJsonExtra,
//   toJson: toJsonExtra,
//   includeIfNull: false,
// );

// /// [fromJsonExtra] is a helper function to convert a json map, particularly
// /// an empty one, to a [Map<String, Object?>].
// ///
// /// Otherwise, the following error is thrown:
// /// type '_Map<dynamic, dynamic>' is not a subtype of type 'Map<String, dynamic>?' in type cast
// Map<String, Object?> fromJsonExtra(Map _) => _.cast<String, dynamic>();

// /// [toJsonExtra] is a helper function to convert a [Map<String, Object?>] to a json map.
// Map<String, dynamic>? toJsonExtra(Map<String, dynamic> _) =>
//     _.keys.isNotEmpty ? _ : null;
