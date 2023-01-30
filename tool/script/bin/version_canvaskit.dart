// ignore_for_file: avoid_print

import 'dart:convert';
import 'dart:io';

main(List<String> arguments) async {
  if (Platform.environment['FLUTTER_ROOT'] == null) {
    throw Exception('FLUTTER_ROOT is not set. Please run using melos.');
  }
  final file = File.fromUri(Uri.file(Platform.environment['FLUTTER_ROOT']!).resolve(
      'flutter/bin/cache/flutter_web_sdk/lib/_engine/engine/configuration.dart'));
  print(file.path);
  final content = await file.readAsString();
  final pattern = RegExp(r'''_canvaskitVersion = '(?<version>.*)';''');
  final result = pattern.firstMatch(content)?.namedGroup('version');

  final version = {
    'version': result,
    'unpkg': 'https://unpkg.com/canvaskit-wasm@$result/bin/canvaskit.wasm',
    'jsdelivr':
        'https://cdn.jsdelivr.net/npm/canvaskit-wasm@$result/bin/canvaskit.wasm',
  };

  final outputFile = File.fromUri(Directory.current.uri
      .resolve('app/unself/build/web/canvaskit/version.json'));
  outputFile.createSync(recursive: true);
  outputFile.writeAsStringSync(jsonEncode(version));
}
