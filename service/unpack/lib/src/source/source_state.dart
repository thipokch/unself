import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:unself_file/unself_file.dart';
import 'package:unself_unpack/unself_unpack.dart';

part 'source_state.freezed.dart';
part 'source_state.g.dart';

@freezed
class SourceState with _$SourceState {
  const SourceState._();

  const factory SourceState.initial() = SourceInitial;
  const factory SourceState.configure({
    required Iterable<ModuleSpec> modules,
  }) = SourceConfigure;

  @XFileConverter()
  const factory SourceState.retrieve({
    required XFile file,
  }) = SourceRetrieve;
  const factory SourceState.prepare({
    required Map<String, Iterable<int>> fileBytes,
  }) = SourcePrepare;
  const factory SourceState.process() = SourceProcess;
  const factory SourceState.complete() = SourceComplete;

  const factory SourceState.error() = SourceError;

  factory SourceState.fromJson(Map<String, dynamic> json) =>
      _$SourceStateFromJson(json);

  SourceStep get step => map(
        initial: (_) => SourceStep.initial,
        configure: (_) => SourceStep.configure,
        retrieve: (_) => SourceStep.retrieve,
        prepare: (_) => SourceStep.prepare,
        process: (_) => SourceStep.process,
        complete: (_) => SourceStep.complete,
        error: (_) => SourceStep.error,
      );
}
