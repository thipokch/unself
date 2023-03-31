import 'package:unself_unpack/unself_unpack.dart';

import 'package:freezed_annotation/freezed_annotation.dart';

export 'isource_spec.dart';

part 'source_spec.freezed.dart';
part 'source_spec.g.dart';

@freezed
class SourceSpec with _$SourceSpec implements ISourceSpec {
  const SourceSpec._();

  const factory SourceSpec({
    required String id,
    required String name,
    required FileSpec fileSpec,
    required RetrieveSpec retrieveSpec,
    required Iterable<ModuleSpec> modules,
  }) = _SourceSpec;

  factory SourceSpec.fromJson(Map<String, dynamic> json) =>
      _$SourceSpecFromJson(json);
}
