import 'dart:async';

import 'package:unpack/unpack.dart';

class LoadUngraph extends ILoad {
  const LoadUngraph(super.spec);

  @override
  FutureOr<bool> load(Map<String, dynamic> data) {
    return true;
  }
}
