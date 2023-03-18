import 'package:unself_model/unself_model.dart';

/// {@template base}
/// [Node] is a base class for nodes.
/// {@endtemplate}
abstract class Node implements Base {
  /// [id] is unself unique identifier for each inheriting model.
  @override
  final String id;

  /// [created] is the date and time when the inheriting model was created inside unself app.
  // @override
  // final DateTime created;

  /// [updated] is the date and time when the inheriting model was last updated inside unself app.
  // @override
  // final DateTime updated;

  /// [archiveId] is unself unique identifier for the archive the model belongs to.
  final String archiveId;

  /// [labels] is a list of labels assigned to the model.
  final List<String> labels;

  /// [extra] is a map of additional properties.
  @override
  final Map<String, dynamic>? extra;

  /// {@macro base}
  const Node._({
    required this.id,
    // required this.created,
    // required this.updated,
    required this.archiveId,
    required this.labels,
    required this.extra,
  });
}
