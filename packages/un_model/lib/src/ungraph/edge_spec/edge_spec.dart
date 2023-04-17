import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:slugify/slugify.dart';
import 'package:un_model/un_model.dart';

part 'iedge_spec.dart';

part 'edge_spec.freezed.dart';
part 'edge_spec.g.dart';

@freezed
class EdgeSpec with _$EdgeSpec implements IEdgeSpec {
  const EdgeSpec._();

  const factory EdgeSpec({
    String? id,
    String? slugged,
    required String name,
    required String description,
    required String type,
    required String sourceNodeSpecId,
    required String targetNodeSpecId,
    required List<JsonSpec> jsonSpecs,
  }) = _EdgeSpec;

  factory EdgeSpec.fromJson(Map<String, dynamic> json) =>
      _$EdgeSpecFromJson(json);

  String get slug => slugged ?? slugify(name, delimiter: '_');
}
