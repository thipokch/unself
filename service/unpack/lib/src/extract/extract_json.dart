import 'dart:async';
import 'dart:convert';

import 'package:unself_unpack/unself_unpack.dart';

class ExtractJson extends IExtract {
  const ExtractJson(super.spec);

  @override
  FutureOr<Map<String, dynamic>> extract(Iterable<int> bytes) =>
      jsonDecode(String.fromCharCodes(bytes));
}
