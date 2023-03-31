import 'dart:async';

import 'package:unself_file/unself_file.dart';
import 'package:unself_unpack/unself_unpack.dart';

abstract class IFile {
  const IFile(this.moduleSpec);

  final ModuleSpec moduleSpec;

  FutureOr<Map<String, Iterable<int>>> prepare(XFile file);

  static IFile filer(
    ModuleSpec moduleSpec,
    FileSpec fileSpec,
  ) =>
      fileSpec.map(
        zip: (_) => ZipFile(moduleSpec),
      );
}

// ByteBuffer
