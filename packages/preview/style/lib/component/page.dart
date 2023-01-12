import 'package:flutter/material.dart';
import 'package:unself_style/unself_component.dart';
import 'package:widgetbook_annotation/widgetbook_annotation.dart';

@WidgetbookUseCase(name: 'Default', type: UnAppPage)
Widget buildAppPage(BuildContext context) => const UnAppPage(
      name: Text("UnAppPage"),
      slivers: [],
    );

@WidgetbookUseCase(name: 'Default', type: UnArtPage)
Widget buildArtPage(BuildContext context) => const UnArtPage(
      name: Text("UnAppPage"),
      emoji: SizedBox.shrink(),
      slivers: [],
    );
