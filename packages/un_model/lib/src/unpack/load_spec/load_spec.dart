import 'package:freezed_annotation/freezed_annotation.dart';

part 'load_spec.freezed.dart';
part 'load_spec.g.dart';

@freezed
class LoadSpec with _$LoadSpec {
  const LoadSpec._();

  const factory LoadSpec.ungraph() = UngraphLoadSpec;

  factory LoadSpec.fromJson(Map<String, dynamic> json) =>
      _$LoadSpecFromJson(json);
}
