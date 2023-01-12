import 'dart:async';

import 'package:flutter/material.dart';
import 'package:unself_style/unself_style.dart';

abstract class ListItemBuilder {
  static Widget section(text) => Padding(
        padding: const EdgeInsets.fromLTRB(16, 36, 16, 12),
        child: Text(text),
      );

  static Widget tile(MapEntry<String, FutureOr<void> Function()?> entry) =>
      ListTile(
        title: Text(entry.key),
        trailing: const Icon(UnSymbols.chevronForward),
        onTap: entry.value,
      );
}
