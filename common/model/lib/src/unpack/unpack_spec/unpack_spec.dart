import 'package:unself_model/unself_model.dart';

import 'package:freezed_annotation/freezed_annotation.dart';

import 'iunpack_spec.dart';

part 'unpack_spec.freezed.dart';
part 'unpack_spec.g.dart';

@freezed
class UnpackSpec with _$UnpackSpec implements IUnpackSpec {
  const UnpackSpec._();

  const factory UnpackSpec({
    int? id,
    required String name,
    required FileSpec fileSpec,
    required RetrieveSpec retrieveSpec,
    required Iterable<ModuleSpec> modules,
  }) = _UnpackSpec;

  factory UnpackSpec.fromJson(Map<String, dynamic> json) =>
      _$UnpackSpecFromJson(json);

  UnpackState get initialState => UnpackState(
        specId: id!,
        step: UnpackStep.initial,
        // selectedModules: modules,
      );
}
