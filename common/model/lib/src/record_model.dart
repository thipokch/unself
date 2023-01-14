import 'package:freezed_annotation/freezed_annotation.dart';

part 'record_model.freezed.dart';
part 'record_model.g.dart';

@freezed
class RecordModel with _$RecordModel {
  const factory RecordModel({
    @Default('') String id,
    @Default('') String created,
    @Default('') String updated,
    @Default('') String collectionId,
    @Default('') String collectionName,
  }) = _RecordModel;

  factory RecordModel.fromJson(Map<String, dynamic> json) =>
      _$RecordModelFromJson(json);
}
