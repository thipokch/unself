import 'package:unself_model/unself_model.dart';

import 'package:freezed_annotation/freezed_annotation.dart';

import 'imodule_spec.dart';

part 'module_spec.freezed.dart';
part 'module_spec.g.dart';

@freezed
class ModuleSpec with _$ModuleSpec implements IModuleSpec {
  const ModuleSpec._();

  @PatternConverter()
  const factory ModuleSpec.custom({
    required String id,
    required String name,
    required Pattern fileMatcher,
    required ExtractSpec extract,
    required TransformSpec transform,
    required LoadSpec load,
  }) = CustomModule;

  @PatternConverter()
  const factory ModuleSpec.json({
    required String id,
    required String name,
    required Pattern fileMatcher,
    required Iterable<JsonSchema> schema,
    required LoadSpec load,
  }) = JsonModule;

  factory ModuleSpec.fromJson(Map<String, dynamic> json) =>
      _$ModuleSpecFromJson(json);

  @override
  ExtractSpec get extractSpec => map(
        custom: (_) => _.extract,
        json: (_) => const JsonExtractSpec(),
      );

  @override
  TransformSpec get transformSpec => map(
        custom: (_) => _.transform,
        json: (_) => JsonTransformSpec(_.schema),
      );

  @override
  LoadSpec get loadSpec => map(
        custom: (_) => _.load,
        json: (_) => _.load,
      );
}
