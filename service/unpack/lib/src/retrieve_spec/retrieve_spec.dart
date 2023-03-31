import 'package:freezed_annotation/freezed_annotation.dart';

part 'retrieve_spec.freezed.dart';
part 'retrieve_spec.g.dart';

@freezed
class RetrieveSpec with _$RetrieveSpec {
  const RetrieveSpec._();

  const factory RetrieveSpec.localFile() = LocalFileSpec;

  factory RetrieveSpec.fromJson(Map<String, dynamic> json) =>
      _$RetrieveSpecFromJson(json);
}
