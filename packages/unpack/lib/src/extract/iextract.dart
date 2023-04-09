import 'dart:async';

import 'package:un_model/un_model.dart';
import 'package:unpack/unpack.dart';

abstract class IExtract<O> {
  const IExtract(this.spec);

  final ExtractSpec spec;

  FutureOr<Map<String, O>> extract(Iterable<int> bytes);

  static IExtract extractor(ExtractSpec spec) => spec.map(
        json: (_) => ExtractJson(spec),
      );
}
