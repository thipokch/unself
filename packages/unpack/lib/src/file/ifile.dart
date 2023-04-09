import 'dart:async';

import 'package:un_file/un_file.dart';
import 'package:un_model/un_model.dart';
import 'package:unpack/unpack.dart';

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
