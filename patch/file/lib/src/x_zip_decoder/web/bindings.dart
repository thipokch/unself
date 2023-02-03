// ignore_for_file: avoid_web_libraries_in_flutter,, depend_on_referenced_packages

import 'dart:async';
import 'dart:js_util';
import 'dart:typed_data';

import 'package:js/js.dart';
import 'package:meta/meta.dart';

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

// JsZip API
// Reference: https://github.com/Stuk/jszip/blob/main/index.d.ts

@JS('JSZip')
class JsZip {
  external Object files;
  external String comment;

  external Promise<JsZip> loadAsync(ByteBuffer data, [Object options]);
}

@JS('ZipObject')
class ZipObject {
  /// The absolute path of the file
  external String name;

  /// True if this is a directory
  external bool dir;

  /// The last modification date
  external DateTime date;

  /// The comment for this file
  external String comment;

  /// The UNIX permissions of the file, if any. As 16 bits number.
  external int unixPermissions;

  /// The DOS permissions of the file, if any As 6 bits number.
  external int dosPermissions;

  /// The options of the file. The available options are :
  ///  - compression
  ///  - compressionOptions
  external Object options;

  external Promise<Object> async(String type,
      [Function(Object metadata) onUpdate]);
}

extension ZipObjectData on ZipObject {
  @protected
  CompressedObject? get privateData =>
      getProperty<dynamic>(this, '_data') as CompressedObject?;
}

@JS('CompressedObject')
@protected
class CompressedObject {
  external int compressedSize;
  external int uncompressedSize;
  external int crc32;
  external Object compression;
  external dynamic compressedContent;
}
