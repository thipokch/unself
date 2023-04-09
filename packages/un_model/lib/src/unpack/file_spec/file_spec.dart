import 'package:freezed_annotation/freezed_annotation.dart';

part 'file_spec.freezed.dart';
part 'file_spec.g.dart';

@freezed
class FileSpec with _$FileSpec {
  const FileSpec._();

  const factory FileSpec.zip() = ZipFileSpec;

  factory FileSpec.fromJson(Map<String, dynamic> json) =>
      _$FileSpecFromJson(json);
}
