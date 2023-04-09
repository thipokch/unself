import 'dart:async';

import 'package:un_model/un_model.dart';
import 'package:unpack/unpack.dart';

abstract class ITransform<I, O> {
  const ITransform(this.spec);

  final TransformSpec spec;

  FutureOr<Map<String, O>> transform(Map<String, I> data);

  static ITransform tranformer(TransformSpec spec) => spec.map(
        json: (_) => TransformJson(_),
      );
}
