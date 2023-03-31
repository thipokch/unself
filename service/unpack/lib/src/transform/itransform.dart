import 'dart:async';

import 'package:unself_unpack/unself_unpack.dart';

abstract class ITransform<I, O> {
  const ITransform(this.spec);

  final TransformSpec spec;

  FutureOr<Map<String, O>> transform(Map<String, I> data);

  static ITransform tranformer(TransformSpec spec) => spec.map(
        json: (_) => TransformJson(_),
      );
}
