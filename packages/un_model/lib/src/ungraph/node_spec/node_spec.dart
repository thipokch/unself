import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:slugify/slugify.dart';
import 'package:un_model/un_model.dart';

part 'inode_spec.dart';

part 'node_spec.freezed.dart';
part 'node_spec.g.dart';

@freezed
class NodeSpec with _$NodeSpec implements INodeSpec {
  const NodeSpec._();

  const factory NodeSpec({
    String? id,
    String? slugged,
    required String name,
    required List<PropSpec> propSpecs,
  }) = _NodeSpec;

  factory NodeSpec.fromJson(Map<String, dynamic> json) =>
      _$NodeSpecFromJson(json);

  String get slug => slugged ?? slugify(name, delimiter: '_');

  List<String> get labels => [slug];
}
