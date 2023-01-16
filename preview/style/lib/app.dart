import 'package:flutter/material.dart';
import 'package:unself_preview/unself_preview.dart';
import 'package:unself_style/unself_style.dart';
import 'package:widgetbook_annotation/widgetbook_annotation.dart';

@WidgetbookTheme(name: 'Light')
ThemeData lightTheme() => UnTheme.light;

@WidgetbookTheme(name: 'Dark')
ThemeData darkTheme() => UnTheme.dark;

@WidgetbookApp.material(
  name: 'unself.style',
  devices: UnPreviewFrame.devices,
  frames: UnPreviewFrame.frames,
)
void app; // ignore: unused_element

@WidgetbookDeviceFrameBuilder()
final frameBuilder = previewFrameBuilder;

@WidgetbookUseCaseBuilder()
final useCaseBuilder = previewUseCaseBuilder;
