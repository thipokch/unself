// ignore_for_file: avoid_print, unnecessary_string_escapes

import 'dart:io';
import 'package:glob/glob.dart';
import 'package:glob/list_local_fs.dart';
import 'package:beautiful_soup_dart/beautiful_soup.dart';

final _htmlFiles = Glob("page/doc/reference/api/**/*.html");
final _jsFiles = Glob("page/doc/reference/api/**/*.js");
final _mdxFiles = Glob("page/doc/reference/api/**/*.mdx");

String _htmlFormat(
  Bs4Element? e, {
  bool isBuggyLib = false, // Buggy relative link on library page
}) {
  for (final Bs4Element a in e?.findAll('a') ?? []) {
    Uri uri = Uri.parse(a.attributes['href']!);
    final ps = uri.pathSegments;

    final isRelative = uri.host.isEmpty;
    final isLibrary = ps.last.endsWith('-library.html');
    final isConstructor =
        ps.length >= 2 && ps.last == '${ps[ps.length - 2]}.html';
    final isClass = ps.last.endsWith('-class.html');
    final isProperties = ps.last == 'Properties.html';

    // Buggy relative link on library page
    if (isRelative && isBuggyLib) {
      uri = uri.replace(path: uri.path.replaceAll('../', './'));
    }

    if (isRelative && isLibrary) {
      uri = uri.replace(
        path: uri.path.replaceAll('-library.html', ''),
      );
    } else if (isRelative && isConstructor) {
      uri = uri.replace(
        path: uri.path.replaceAll('.html', '.constructor'),
      );
    } else if (isRelative && isClass) {
      uri = uri.replace(
        path: uri.path.replaceAllMapped(
          RegExp(r'''(.*\/)(\S*?)(-class\.html)$'''),
          (_) => '${_[1]!}${_[2]!}',
        ),
      );
    } else if (isRelative && isProperties) {
      uri = uri.replace(
        path: uri.path.replaceAllMapped(
          RegExp(r'''(.*\/)(\S*?)(\.html)$'''),
          (_) => '${_[1]!}${_[2]!}',
        ),
      );
    } else if (isRelative) {
      uri = uri.replace(
        path: uri.path.replaceAll('.html', ''),
      );
    }

    a.attributes['href'] = uri.toString();
  }

  return e != null
      ? e.toString().replaceAll('`', '\\\`').replaceAll('\$', '\\\$')
      : "";
}

main(List<String> arguments) {
  for (final item in _jsFiles.listSync()) {
    File.fromUri(item.uri).deleteSync();
    print('Deleted : ${item.uri.path}');
  }

  for (final item in _mdxFiles.listSync()) {
    File.fromUri(item.uri).deleteSync();
    print('Deleted : ${item.uri.path}');
  }

  for (final item in _htmlFiles.listSync()) {
    final ps = item.uri.pathSegments;

    final bs = BeautifulSoup(
      File.fromUri(item.uri).readAsStringSync(),
    );

    String fileName = ps.last.split('-').first.split('.').first;

    String title = bs.body!.find('li', class_: 'self-crumb')!.text;
    String shortTitle = bs.body!.find('div', class_: 'self-name')!.text;
    String jsPath = './$fileName.js';
    String mdxPath = './$fileName.mdx';

    final isLibrary = title.endsWith('library');
    final isClass = title.endsWith('class');
    final isConstructor = title.endsWith('constructor');
    final isProperties = shortTitle == 'Properties';

    if (isLibrary) {
      jsPath = './$fileName.js';
      mdxPath = './$fileName.mdx';
    } else if (isConstructor) {
      shortTitle = title;
      jsPath = './$fileName.constructor.js';
      mdxPath = './$fileName.constructor.mdx';
    } else if (isClass || isProperties) {
      jsPath = './$fileName/$fileName.js';
      mdxPath = './$fileName/$fileName.mdx';
    }

    final js = '''
import React from 'react';

export default function RawHtml() {
  const data = `${_htmlFormat(bs.body!.find('main'), isBuggyLib: isLibrary)}`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
''';

    final mdx = '''
---
title: $title
sidebar_label: $shortTitle
hide_title: true
---

import RawHtml from './${jsPath.split('/').last}';

<RawHtml/>

''';

    File.fromUri(item.uri.resolve(mdxPath)).writeAsStringSync(mdx);
    File.fromUri(item.uri.resolve(jsPath)).writeAsStringSync(js);

    print('Docusaurified : ${item.uri.path}');
  }
}
