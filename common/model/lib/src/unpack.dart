import 'package:freezed_annotation/freezed_annotation.dart';

part 'unpack.freezed.dart';
part 'unpack.g.dart';

@freezed
class Unpack with _$Unpack {
  const factory Unpack({
    @Default('') String id,
    @Default('') String name,
    @Default('') String type,
    @Default({}) Map<String, dynamic> options,
  }) = _Unpack;

  factory Unpack.fromJson(Map<String, dynamic> json) => _$UnpackFromJson(json);
}
