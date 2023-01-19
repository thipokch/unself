import 'dart:async';

import 'package:archive/archive.dart';
import 'package:archive/archive_io.dart' show InputFileStream;
import 'package:unself_model/src/collection.dart';
import 'package:unself_unpack/src/collector/collector.dart'; // TODO: remove to support web

/// {@template archive_collector}
/// [ArchiveCollector] unpacks archive files and collect metadata.
/// {@endtemplate}
class ArchiveCollector implements ICollector {
  /// {@macro archive_collector}
  const ArchiveCollector({
    required Archive archive,
  }) : _archive = archive;

  factory ArchiveCollector.fromZipBytes({
    required List<int> bytes,
  }) =>
      ArchiveCollector(
        archive: ZipDecoder().decodeBytes(bytes),
      );

  factory ArchiveCollector.fromZipPath({
    required String path,
  }) =>
      ArchiveCollector(
        archive: ZipDecoder().decodeBuffer(InputFileStream(path)),
      );

  // Delegate
  final Archive _archive;

  static String _dotPath(String name) {
    final splitted = name.split(RegExp(r'[\\|\/|.]'));
    return splitted.sublist(1, splitted.length - 1).join('.');
  }

  @override
  FutureOr<List<Collection>> collect() {
    final archiveFiles = _archive.files
        .where((_) => !_.name.startsWith('__MACOSX'))
        .where((_) => _.name.endsWith("json"))
        .toList();

    // archiveFiles.map((e) => null);

    final collectionFileMap = <String, ArchiveFile>{
      for (final rawFile in archiveFiles) _dotPath(rawFile.name): rawFile
    };

    return [];
  }

  @override
  FutureOr<List<String>> retrieve({required Collection collection}) {
    // TODO: implement retrieve
    throw UnimplementedError();
  }
}
