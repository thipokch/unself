// ignore_for_file: avoid_web_libraries_in_flutter,, depend_on_referenced_packages, unused_element

import 'dart:async';
import 'dart:html';
import 'dart:typed_data';

import 'package:js/js.dart';
import 'package:js/js_util.dart';

// JS Methods

@JS('Object.keys')
external List<String> objectKeys(dynamic obj);

Map<String, dynamic> jsMapToDart(Object obj) {
  final keys = objectKeys(obj);
  final map = <String, dynamic>{
    for (final key in keys) key: getProperty<dynamic>(obj, key)
  };
  return map;
}

extension ObjectToMap on Object {
  Map<String, dynamic> toMap() => jsMapToDart(this);
}

@JS('Promise')
class Promise<T> {}

extension PromiseToFuture on Promise {
  Future<T> asFuture<T>() => promiseToFuture(this);
}

@JS('JSON.stringify')
external String stringify(dynamic value);

// UnZipIt API
// Reference: https://github.com/greggman/unzipit/blob/master/dist/unzipit.d.ts

@JS()
class ZipInfo {
  external Zip get zip;
  external Object get entries;
}

@JS()
class Zip {
  external String comment;
  external Uint8List commentBytes;
}

@JS()
class ZipEntry {
  /// returns a Blob for this entry
  /// (optional type as in 'image/jpeg')
  external Promise<Blob> blob(String? type);

  /// returns an ArrayBuffer for this entry
  external Promise<ByteBuffer> arrayBuffer();

  /// returns text, assumes the text is valid utf8.
  /// If you want more options decode arrayBuffer yourself
  external Promise<String> text();

  /// returns text, assumes the text is valid utf8.
  /// If you want more options decode arrayBuffer yourself
  external Promise<Object> json();

  // name of entry
  external String name;

  // raw name of entry (see notes)
  external Uint8List nameBytes;

  // size in bytes
  external int size;

  // size before decompressing
  external int compressedSize;

  // the comment for this entry
  external String comment;

  // the raw comment for this entry
  external Uint8List commentBytes;

  // a Date
  external DateTime lastModDate;

  // True if directory
  external bool isDirectory;

  // True if encrypted
  external bool isEncrypted;

  // platform specific file attributes
  external int externalFileAttributes;

  // platform that made this file
  external int versionMadeBy;
}

@JS()
@anonymous
class UnzipitOptions {
  external factory UnzipitOptions({
    bool? useWorkers,
    String? workerURL,
    int? numWorkers,
  });

  external bool? useWorkers;
  external String workerURL;
  external int numWorkers;
}

@JS('unzipit.unzip')
external Promise<ZipInfo> unzip(Object scr);

@JS('unzipit.setOptions')
external void setOptions(Object options);

@JS('unzipit.cleanup')
external void cleanup();
