import 'dart:async';

import 'package:unself_unpack/unself_unpack.dart';

class TransformJson extends ITransform {
  const TransformJson(super.spec);

  @override
  FutureOr<Map<String, dynamic>> transform(Map<String, dynamic> data) =>
      JsonNormalizer(spec.schema).normalizeWith(spec.schema.first, data);
}
