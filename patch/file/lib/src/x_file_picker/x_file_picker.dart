import 'package:cross_file/cross_file.dart';
import 'package:file_picker/file_picker.dart';
import 'package:flutter/foundation.dart';

export 'package:cross_file/cross_file.dart';
export 'package:file_picker/file_picker.dart';

// Since FilePickerWeb in file_picker is private and linked via pubspec.
// Overriding it is not possible. Instead, put a XFilePicker facade over FilePic

export 'stub.dart'
    if (dart.library.js) 'web.dart'
    if (dart.library.io) 'io.dart';

class XPlatformFile extends PlatformFile {
  final String _unsafePath;

  XPlatformFile({
    super.path,
    required super.name,
    required super.size,
    super.bytes,
    super.readStream,
    super.identifier,
    required String objectUrl,
  }) : _unsafePath = objectUrl;
}

extension XPlatformFileExtension on PlatformFile {
  XFile get xFile =>
      kIsWeb ? XFile((this as XPlatformFile)._unsafePath) : XFile(path!);
}
