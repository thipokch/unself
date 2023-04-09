import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:un_model/un_model_converter.dart';

part 'inode.dart';

part 'node.freezed.dart';
part 'node.g.dart';

@freezed
class Node with _$Node implements INode {
  const Node._();

  const factory Node({
    String? id,
    required String specSlug,
    // required List<String> labels,
    @JsonEmptyMap() @Default({}) Map<String, dynamic> properties,
  }) = _Node;

  factory Node.fromJson(Map<String, dynamic> json) => _$NodeFromJson(json);

  @override
  List<String> get labels => [specSlug];
}
