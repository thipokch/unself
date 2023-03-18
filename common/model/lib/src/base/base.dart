export './edge.dart';
export './node.dart';

/// {@template base}
/// [Base] is a base class for all unself models.
/// {@endtemplate}
abstract class Base {
  /// [id] is unself unique identifier for each inheriting model.
  final String id;

  /// [created] is the date and time when the inheriting model was created inside unself app.
  // final DateTime created;

  /// [updated] is the date and time when the inheriting model was last updated inside unself app.
  // final DateTime updated;

  /// [extra] is a map of additional properties.
  final Map<String, dynamic>? extra;

  /// {@macro base}
  const Base._({
    required this.id,
    // required this.created,
    // required this.updated,
    required this.extra,
  });
}
