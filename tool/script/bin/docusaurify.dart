// ignore_for_file: avoid_print

import 'dart:io';
import 'package:glob/glob.dart';
import 'package:glob/list_local_fs.dart';
import 'package:beautiful_soup_dart/beautiful_soup.dart';

final dartFile = Glob("page/doc/reference/**/*.html");

main(List<String> arguments) async {
  for (final item in dartFile.listSync()) {
    final isLibrary = item.uri.path.endsWith('-library.html');

    final fileName = item.uri.pathSegments.last.split('.').first;
    final content = await File.fromUri(item.uri).readAsString();

    final bs = BeautifulSoup(content);

    final js = '''
import React from 'react';

export default function RawHtml() {
  const data = `${(bs.body!.find('div', id: 'dartdoc-main-content') ?? "").toString().replaceAll('`', '\\`').replaceAll('\$', '\\\$')}`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
''';

    final mdx = '''
---
title: ${bs.head?.title?.innerHtml.split(' ').first ?? fileName}
hide_title: true
---

import RawHtml from '${isLibrary ? './index.js' : './$fileName.js'}';

<RawHtml/>

''';

    File.fromUri(
            item.uri.resolve(isLibrary ? './index.mdx' : './$fileName.mdx'))
        .writeAsString(mdx);
    File.fromUri(item.uri.resolve(isLibrary ? './index.js' : './$fileName.js'))
        .writeAsString(js);

    print('Docusaurified : ${item.uri.path}');
  }
}
