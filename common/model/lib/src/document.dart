import 'package:freezed_annotation/freezed_annotation.dart';

part 'document.freezed.dart';
part 'document.g.dart';

@freezed
class Document with _$Document {
  const factory Document({
    @Default('') String id,
    @Default('') String created,
    @Default('') String updated,
    @Default('') String collectionId,
    @Default('') String collectionName,
  }) = _Document;

  factory Document.fromJson(Map<String, dynamic> json) =>
      _$DocumentFromJson(json);
}
