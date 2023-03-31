import 'dart:async';

import 'package:unself_unpack/unself_unpack.dart';

abstract class IExtract<O> {
  const IExtract(this.spec);

  final ExtractSpec spec;

  FutureOr<Map<String, O>> extract(Iterable<int> bytes);

  static IExtract extractor(ExtractSpec spec) => spec.map(
        json: (_) => ExtractJson(spec),
      );
}
