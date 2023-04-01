import 'dart:async';

import 'package:unself_model/unself_model.dart';
import 'package:unself_unpack/unself_unpack.dart';

abstract class ILoad<I> {
  const ILoad(this.spec);

  final LoadSpec spec;

  FutureOr<bool> load(Map<String, I> data);

  static ILoad loader(LoadSpec spec) => spec.map(
        ungraph: (_) => LoadUngraph(_),
      );
}
