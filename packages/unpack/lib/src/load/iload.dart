import 'dart:async';

import 'package:un_model/un_model.dart';
import 'package:unpack/unpack.dart';

abstract class ILoad<I> {
  const ILoad(this.spec);

  final LoadSpec spec;

  FutureOr<bool> load(Map<String, I> data);

  static ILoad loader(LoadSpec spec) => spec.map(
        ungraph: (_) => LoadUngraph(_),
      );
}
