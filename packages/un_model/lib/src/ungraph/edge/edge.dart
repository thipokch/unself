import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:un_model/un_model_converter.dart';

part 'iedge.dart';

part 'edge.freezed.dart';
part 'edge.g.dart';

@freezed
class Edge with _$Edge implements IEdge {
  const Edge._();

  const factory Edge({
    String? id,
    required String specSlug,
    String? sourceId,
    String? targetId,
    @JsonEmptyMap() @Default({}) Map<String, dynamic> properties,
  }) = _Edge;

  factory Edge.fromJson(Map<String, dynamic> json) => _$EdgeFromJson(json);

  @override
  String get type => specSlug;
}
