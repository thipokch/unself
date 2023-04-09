import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:pub_semver/pub_semver.dart';

class JsonVersion implements JsonConverter<Version, String> {
  const JsonVersion();

  @override
  fromJson(_) => Version.parse(_);

  @override
  toJson(_) => _.toString();
}
