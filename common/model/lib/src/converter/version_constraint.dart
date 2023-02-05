import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:pub_semver/pub_semver.dart';

class JsonVersionConstraint
    implements JsonConverter<VersionConstraint, String> {
  const JsonVersionConstraint();

  @override
  fromJson(_) => VersionConstraint.parse(_);

  @override
  toJson(_) => _.toString();
}
