import 'dart:async';

import 'package:un_file/un_file.dart';
import 'package:un_model/un_model.dart';
import 'package:unpack/unpack.dart';

abstract class IRetrieve {
  const IRetrieve();

  FutureOr<XFile?> retrieve();

  static IRetrieve factory(RetrieveSpec spec) => spec.map(
        localFile: (_) => const RetrieveLocalFile(),
      );
}
