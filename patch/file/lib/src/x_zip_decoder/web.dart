// ignore_for_file: invalid_use_of_protected_member, avoid_web_libraries_in_flutter, depend_on_referenced_packages

import 'dart:async';
import 'dart:html';
import 'dart:typed_data';

import 'package:archive/archive.dart';
import 'package:unself_file/src/x_zip_decoder/web/bindings.dart';
import 'package:unself_file/unself_file.dart';

import 'package:js/js_util.dart';

class XZipDecoder {
  static FutureOr<Archive> decodeXFile(
    XFile xFile, {
    bool verify = false,
    String? password,
  }) async {
    final archive = Archive();

    // Read the blob from its path 'natively'
    final Object response = await window.fetch(xFile.path) as Object;
    // Call '.arrayBuffer()' on the fetch buffer for jszip to read
    final ByteBuffer data =
        await callMethod<Promise<Object>>(response, 'arrayBuffer', <Object?>[])
            .asFuture();

    setOptions(UnzipitOptions(
      workerURL: "https://unpkg.com/unzipit@1.4.0/dist/unzipit-worker.min.js",
    ));

    final ZipInfo uzi = await unzip(data).asFuture();

    final files = uzi.entries.toMap();

    for (final f in files.entries) {
      final name = f.key;
      final data = f.value as ZipEntry;

      final file = ArchiveFile(
        name,
        data.size,
        Uint8List.view(await data.arrayBuffer().asFuture()),
      );

      file.isFile = !data.isDirectory;

      archive.addFile(file);
    }

    return archive;
  }
}
