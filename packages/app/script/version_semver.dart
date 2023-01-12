// ignore_for_file: avoid_print

import 'dart:io';

main() async {
  final version = Platform.environment["VERSION"];

  if (version?.isEmpty ?? true) {
    print("Version number update skipped.");
  } else {
    // https://regex101.com/r/NuofLe/1

    final pattern = RegExp(
      r'''^(version\s?:\s*?['"]?)(?<version>[\d\.\w_]{5,})([+-]*)(?<build>[\.\d\w_+-]*)(.*$)''',
      multiLine: true,
    );

    File file = File.fromUri(Platform.script.resolve("../pubspec.yaml"));
    final content = await file.readAsString();

    final result = content.replaceFirstMapped(pattern, (match) {
      return '${match.group(1)}${version!}${match.group(3)}${match.group(4)}${match.group(5)}';
    });

    file.writeAsStringSync(result);
    print("Pubspec.yaml version updated to ${version!}.");
  }
}
