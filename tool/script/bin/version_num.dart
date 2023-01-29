// ignore_for_file: avoid_print

import 'dart:io';
import 'package:glob/glob.dart';
import 'package:glob/list_local_fs.dart';

final dartFile = Glob("**/pubspec.yaml");
main(List<String> arguments) async {
  final version =
      arguments.isNotEmpty ? arguments.first : Platform.environment["VERSION"];

  if (version?.isEmpty ?? true) {
    print("No version given, SemVer update skipped.");
  } else {
    // https://regex101.com/r/NuofLe/1

    final pattern = RegExp(
      r'''^(version\s?:\s*?['"]?)(?<version>[\d\.\w_]{5,})([+-]*)(?<build>[\.\d\w_+-]*)(.*$)''',
      multiLine: true,
    );

    for (var entity in dartFile.listSync()) {
      if (entity.path.contains("ephemeral")) continue;
      if (entity.path.contains("patch")) continue;

      File file = File.fromUri(Uri.file(entity.path.substring(2)));
      final content = await file.readAsString();

      final result = content.replaceFirstMapped(pattern, (match) {
        return '${match.group(1)}${version!}${match.group(3)}${match.group(4)}${match.group(5)}';
      });

      file.writeAsStringSync(result);
      print("$file version updated to ${version!}.");
    }
  }
}
