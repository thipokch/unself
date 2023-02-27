// ignore_for_file: unused_local_variable

import 'dart:async';
import 'dart:convert';

import 'package:archive/archive.dart';
import 'package:clock/clock.dart';
import 'package:collection/collection.dart';
import 'package:slugid/slugid.dart';
import 'package:slugify/slugify.dart';
import 'package:unself_file/unself_file.dart';
import 'package:unself_model/unself_model.dart' show Mapping;
import 'package:unself_unpack/src/util/json_normalize.dart';
import 'package:unself_unpack/unself_unpack.dart';

/// {@template zip_input}
/// [ZipImport] unpacks archive files and collect metadata.
/// {@endtemplate}
class ZipImport implements Import<XFile, List<Mapping>> {
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
  FutureOr<Map<String, Object?>> unpack(List<Mapping>? options) {
    assert(options != null);
    // 1. Group mappings by file to read from.
    final fromGroup = options!.groupListsBy((_) => _.from.split('/').first);

    // 2. Read file and decode JSON into group key.
    final jsonFiles = <String, Map<String, dynamic>>{
      for (final key in fromGroup.keys)
        key: jsonDecode(String.fromCharCodes(_dotDirectory![key]!.content))
    };

    // 3. Group mappings by key to write to.
    final toGroup = options.groupListsBy((_) => _.to.split('/').first);

    // 4. Create result map with keys from toGroup to write to.
    final instant = clock.now();
    final archiveId = Slugid.nice().toString();
    final result = {
      'id': Slugid.nice().toString(),
      'created': instant,
      'updated': instant,
      'archiveId': archiveId,
      for (final String key in toGroup.keys) key: <Map<String, Object?>>[]
    };

    for (final mapping in options) {
      // Assert that mapping can only be a single level deep.
      assert(mapping.fields.every((e) => e.fields.isEmpty && e.extra.isEmpty));

      if (mapping.to.startsWith("\$") || mapping.from.startsWith("\$")) {
        throw ArgumentError('Mapping cannot be a JSON Pointer');
      }

      final fromKey = mapping.from.split('/').first;
      final toKey = mapping.to.split('/').first;
      final entryPath = mapping.from.split('/').sublist(1).join('/');

      // ignore: unnecessary_cast
      final norm = normalize(
        jsonFiles[fromKey],
        entryPath: entryPath,
        includePath: mapping.options['includePath'] ?? const [],
      );

      final mapped = norm
          .map((e) => {
                'created': instant,
                'updated': instant,
                'archiveId': archiveId,
                for (final entry in mapping.fields) entry.to: e[entry.from],
                ...mapping.extra,
              })
          .toList();

      if (mapping.options.containsKey('idFrom')) {
        for (var element in mapped) {
          element.putIfAbsent(
              'id', () => slugify(element[mapping.options['idFrom']!]));
        }
      }

      result[toKey] = mapped;
    }
    return result;
  }

  static String _dotPath(String name) {
    final splitted = name.split(RegExp(r'[\\|\/|.]'));
    return splitted.sublist(1, splitted.length - 1).join('.');
  }
}
