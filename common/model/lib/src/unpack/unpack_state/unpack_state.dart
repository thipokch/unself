import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:unself_model/unself_model.dart';

part 'unpack_state.freezed.dart';
part 'unpack_state.g.dart';

@freezed
class UnpackState with _$UnpackState {
  const UnpackState._();

  const factory UnpackState({
    String? id,
    required String specId,
    required UnpackStep step,
    Iterable<ModuleSpec>? selectedModules,
    String? filePath,
  }) = _UnpackState;

  factory UnpackState.fromJson(Map<String, dynamic> json) =>
      _$UnpackStateFromJson(json);
}
