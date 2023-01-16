import 'dart:io';
import 'package:glob/glob.dart';
import 'package:glob/list_local_fs.dart';

final dartFile = Glob("**/pubspec.yaml");

main(List<String> arguments) async {
  final buildHash = arguments.isNotEmpty
      ? arguments.first
      : Platform.environment["BUILD_NUM"];

  if (buildHash?.isEmpty ?? true) {
    print("No hash given, build number update skipped.");
  } else {
    // https://regex101.com/r/NuofLe/1

    final pattern = RegExp(
      r'''^(version\s?:\s*?['"]?)(?<version>[\d\.\w_]{5,})([+-]*)(?<build>[\.\d\w_+-]*)(.*$)''',
      multiLine: true,
    );

    for (var entity in dartFile.listSync()) {
      if (entity.path.contains("ephemeral")) continue;
      if (entity.path.contains("patch")) continue;

      print(Uri.file(entity.path.substring(2)));

      File file = File.fromUri(Uri.file(entity.path.substring(2)));
      final content = await file.readAsString();

      final result = content.replaceFirstMapped(pattern, (match) {
        return '${match.group(1)}${match.group(2)}+${buildHash!}${match.group(5)}';
      });

      file.writeAsStringSync(result);
      print("$file build number updated to ${buildHash!}.");
    }
  }
}
