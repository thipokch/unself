import 'package:unself_file/unself_file.dart';
import 'dart:async';

import 'package:unself_unpack/unself_unpack.dart';

class RetrieveLocalFile implements IRetrieve {
  const RetrieveLocalFile();

  @override
  FutureOr<XFile?> retrieve() async {
    final FilePickerResult? result = await XFilePicker.instance.pickFiles();

    return result?.files.first.xFile;
  }
}
