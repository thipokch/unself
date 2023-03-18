// ignore_for_file: unused_local_variable

import 'dart:async';
import 'dart:convert';

import 'package:archive/archive.dart';
import 'package:clock/clock.dart';
import 'package:collection/collection.dart';
import 'package:slugid/slugid.dart';
import 'package:unself_file/unself_file.dart';
import 'package:unself_model/unself_model.dart'
    show ArchiveSchemaPart, MetaPart, ZipJsonPart;
import 'package:unself_unpack/unself_unpack.dart';

import 'package:built_collection/built_collection.dart';

/// {@template zip_input}
/// [ZipImport] unpacks archive files and collect metadata.
/// {@endtemplate}
class ZipImport implements Import<XFile, List<ArchiveSchemaPart>> {
  /// {@macro zip_input}
  ZipImport();

  Archive? _archive;
  Map<String, ArchiveFile>? _dotDirectory;

  /// [open] opens the given [XFile] and returns a list of supported
  /// and importable identifier [String] for the given [object].
  @override
  FutureOr<List<String>> open(XFile object) async {
    _archive = await XZipDecoder.decodeXFile(object);

    _dotDirectory = <String, ArchiveFile>{
      for (final rawFile in _archive!.files)
        if (!rawFile.name.startsWith('__MACOSX') &&
            rawFile.name.endsWith("json"))
          _dotPath(rawFile.name): rawFile
    };

    return _dotDirectory!.keys.toList();
  }

  /// [unpack] unpacks the opened [XFile] object the given [mappings] and
  /// returns a [FutureOr] of [Map<String, Object?>].
  @override
  FutureOr<Map<String, Object?>> unpack(List<ArchiveSchemaPart>? options) {
    final partGroupByFile =
        options!.whereType<ZipJsonPart>().groupListsBy((_) => _.part);
    final jsonGroupByFile = <String, Map<String, dynamic>>{
      for (final key in partGroupByFile.keys)
        key: jsonDecode(String.fromCharCodes(_dotDirectory![key]!.content))
    };

    final instant = clock.now();
    final archiveId = Slugid.nice().toString();

    final meta = {
      'archiveId': archiveId,
    };

    final result = <String, Set<BuiltMap>>{};

    jsonGroupByFile.forEach((key, value) {
      partGroupByFile[key]?.forEach((part) => Normalize(part.schema).accumulate(
            part.id,
            value,
            (String name, dynamic _, dynamic entity) {
              result[name] ??= {};
              result[name]!.add(BuiltMap<String, dynamic>({
                'partId': part.id,
                ...entity,
              }));
            },
          ));
    });

    options.whereType<MetaPart>().firstOrNull?.meta.forEach((key, value) {
      if (value is List) {
        result[key] ??= {};
        result[key]!.addAll(value.map((e) => BuiltMap<String, dynamic>({
              'partId': 'archive-meta',
              ...e,
            })));
      } else {
        result.putIfAbsent(key, () => value);
      }
    });

    return {
      'id': archiveId,
      'created': instant,
      'updated': instant,
      ...meta,
      ...{
        for (final r in result.entries)
          r.key: [
            for (final s in r.value.cast<BuiltMap<String, dynamic>>())
              {
                ...meta,
                ...s.toMap(),
              },
          ],
      },
    };
  }

  static String _dotPath(String name) {
    final splitted = name.split(RegExp(r'[\\|\/|.]'));
    return splitted.sublist(1, splitted.length - 1).join('.');
  }
}
