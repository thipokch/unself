import 'package:unself_model/unself_model.dart';

/// {@template base}
/// [Edge] is a base class for nodes.
/// {@endtemplate}
abstract class Edge implements Base {
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

  /// [sourceId] is unself unique identifier for the source node.
  final String sourceId;

  /// [targetId] is unself unique identifier for the target node.
  final String targetId;

  /// [extra] is a map of additional properties.
  @override
  final Map<String, dynamic>? extra;

  /// {@macro base}
  const Edge._({
    required this.id,
    // required this.created,
    // required this.updated,
    required this.archiveId,
    required this.labels,
    required this.sourceId,
    required this.targetId,
    required this.extra,
  });
}
