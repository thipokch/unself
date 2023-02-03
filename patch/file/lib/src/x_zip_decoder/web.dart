// ignore_for_file: invalid_use_of_protected_member, avoid_web_libraries_in_flutter

import 'dart:async';
import 'dart:html';
import 'dart:js_util';
import 'dart:typed_data';

import 'package:archive/archive.dart';
import 'package:unself_file/src/x_zip_decoder/web/bindings.dart';
import 'package:unself_file/unself_file.dart';

class XZipDecoder {
  static FutureOr<Archive> decodeXFile(
    XFile xFile, {
    bool verify = false,
    String? password,
  }) async {
    final jsZip = JsZip();
    final archive = Archive();

    // Read the blob from its path 'natively'
    final Object response = await window.fetch(xFile.path) as Object;
    // // Call '.arrayBuffer()' on the fetch buffer for jszip to read
    final ByteBuffer data =
        await callMethod<Promise<Object>>(response, 'arrayBuffer', <Object?>[])
            .asFuture();

    await jsZip.loadAsync(data).asFuture();

    final files = jsZip.files.toMap();

    for (final f in files.entries) {
      final name = f.key;
      final data = f.value as ZipObject;

      final file = ArchiveFile(
          name,
          data.privateData?.uncompressedSize ?? 0,
          Uint8List.view(
              await data.async('arraybuffer').asFuture() as ByteBuffer));

      file.isFile = !data.dir;

      archive.addFile(file);
    }

    return archive;
  }
}
