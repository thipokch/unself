import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:unself_model/unself_model.dart';

part 'document.freezed.dart';
part 'document.g.dart';

/// {@template document}
/// [Document] is a record inside of a [Collection].
/// {@endtemplate}
@freezed
class Document with _$Document implements Base {
  /// {@macro document}
  const factory Document({
    required String id,
    required DateTime created,
    required DateTime updated,
    @Default('') String collectionId,
    @Default('') String collectionName,
    required Archive archive,
    @JsonExtra() @Default({}) Map<String, dynamic> extra,
  }) = _Document;

  /// Creates a [Document] from Json map
  factory Document.fromJson(Map<String, dynamic> json) =>
      _$DocumentFromJson(json);
}
