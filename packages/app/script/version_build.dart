// ignore_for_file: avoid_print

import 'dart:io';

main() async {
  final buildHash = Platform.environment["BUILD_NUM"];

  if (buildHash?.isEmpty ?? true) {
    print("Build number update skipped.");
  } else {
    // https://regex101.com/r/NuofLe/1

    final pattern = RegExp(
      r'''^(version\s?:\s*?['"]?)(?<version>[\d\.\w_]{5,})([+-]*)(?<build>[\.\d\w_+-]*)(.*$)''',
      multiLine: true,
    );

    File file = File.fromUri(Platform.script.resolve("../pubspec.yaml"));
    final content = await file.readAsString();

    final result = content.replaceFirstMapped(pattern, (match) {
      return '${match.group(1)}${match.group(2)}+${buildHash!}${match.group(5)}';
    });

    file.writeAsStringSync(result);
    print("Pubspec.yaml build number updated to ${buildHash!}.");
  }
}
