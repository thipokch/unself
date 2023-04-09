import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:unpack/unpack.dart';

part 'module_state.freezed.dart';
part 'module_state.g.dart';

@freezed
class ModuleState with _$ModuleState {
  const ModuleState._();

  const factory ModuleState.initial() = ModuleInitial;
  const factory ModuleState.file() = ModuleFile;
  const factory ModuleState.extract() = ModuleExtract;
  const factory ModuleState.transform() = ModuleTransform;
  const factory ModuleState.load() = ModuleLoad;
  const factory ModuleState.complete() = ModuleComplete;
  const factory ModuleState.error() = ModuleError;

  factory ModuleState.fromJson(Map<String, dynamic> json) =>
      _$ModuleStateFromJson(json);

  ModuleStep get step => map(
        initial: (_) => ModuleStep.initial,
        file: (_) => ModuleStep.file,
        extract: (_) => ModuleStep.extract,
        transform: (_) => ModuleStep.transform,
        load: (_) => ModuleStep.load,
        complete: (_) => ModuleStep.complete,
        error: (_) => ModuleStep.error,
      );
}
