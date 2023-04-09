import 'dart:async';

import 'package:archive/archive_io.dart';
import 'package:un_file/un_file.dart';

class XZipDecoder {
  static FutureOr<Archive> decodeXFile(
    XFile xFile, {
    bool verify = false,
    String? password,
  }) =>
      ZipDecoder().decodeBuffer(InputFileStream(xFile.path));
}
