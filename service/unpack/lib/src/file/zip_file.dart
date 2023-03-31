import 'dart:async';

import 'package:archive/archive.dart';
import 'package:unself_file/unself_file.dart';
import 'package:unself_unpack/unself_unpack.dart';

class ZipFile extends IFile {
  const ZipFile(super.moduleSpec);

  static final _archives = <String, FutureOr<Archive>>{};

  @override
  FutureOr<Map<String, Iterable<int>>> prepare(XFile file) async {
    final archive = await _archives.putIfAbsent(
        file.path, () => XZipDecoder.decodeXFile(file));

    return <String, Iterable<int>>{
      for (final file in archive.files)
        if (moduleSpec.fileMatcher.matches(file.name)) file.name: file.content
    };
  }
}
