import 'package:un_file/un_file.dart';
import 'dart:async';

import 'package:unpack/unpack.dart';

class RetrieveLocalFile implements IRetrieve {
  const RetrieveLocalFile();

  @override
  FutureOr<XFile?> retrieve() async {
    final FilePickerResult? result = await XFilePicker.instance.pickFiles();

    return result?.files.first.xFile;
  }
}
