import 'dart:async';

import 'package:unself_file/unself_file.dart';
import 'package:unself_unpack/unself_unpack.dart';

abstract class IRetrieve {
  const IRetrieve();

  FutureOr<XFile?> retrieve();

  static IRetrieve factory(RetrieveSpec spec) => spec.map(
        localFile: (_) => const RetrieveLocalFile(),
      );
}
