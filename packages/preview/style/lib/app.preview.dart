// ignore_for_file: type=lint
// ignore_for_file: unused_import, unnecessary_import, unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

// **************************************************************************
// WidgetbookGenerator
// **************************************************************************

import 'dart:core';
import 'dart:math';
import 'package:fluentui_system_icons/fluentui_system_icons.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/src/material/card_theme.dart';
import 'package:flutter/src/material/chip_theme.dart';
import 'package:flutter/src/material/colors.dart';
import 'package:flutter/src/material/constants.dart';
import 'package:flutter/src/material/debug.dart';
import 'package:flutter/src/material/icons.dart';
import 'package:flutter/src/material/ink_well.dart';
import 'package:flutter/src/material/material.dart';
import 'package:flutter/src/material/material_localizations.dart';
import 'package:flutter/src/material/material_state.dart';
import 'package:flutter/src/material/material_state_mixin.dart';
import 'package:flutter/src/material/theme.dart';
import 'package:flutter/src/material/theme_data.dart';
import 'package:flutter/src/material/tooltip.dart';
import 'package:flutter/widgets.dart';
import 'package:gaimon/gaimon.dart';
import 'package:unself_preview/unself_preview.dart';
import 'package:unself_style/unself_component.dart';
import 'package:unself_style/unself_style.dart';
import 'package:unself_style_preview/app.dart';
import 'package:unself_style_preview/component/buttons.dart';
import 'package:unself_style_preview/component/cards.dart';
import 'package:unself_style_preview/component/chips.dart';
import 'package:unself_style_preview/component/heading.dart';
import 'package:unself_style_preview/style/colors.dart';
import 'package:unself_style_preview/style/elevation.dart';
import 'package:unself_style_preview/style/haptics.dart';
import 'package:unself_style_preview/style/symbols.dart';
import 'package:unself_style_preview/style/typography.dart';
import 'package:widgetbook/widgetbook.dart';

void main() {
  runApp(HotReload());
}

class HotReload extends StatelessWidget {
  const HotReload({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Widgetbook.material(
      appInfo: AppInfo(
        name: 'unself.style',
      ),
      themes: [
        WidgetbookTheme(
          name: 'Light',
          data: lightTheme(),
        ),
        WidgetbookTheme(
          name: 'Dark',
          data: darkTheme(),
        ),
      ],
      devices: [
        Device(
          name: 'iPhone 12 Mini',
          resolution: Resolution(
            nativeSize: DeviceSize(
              height: 2436.0,
              width: 1125.0,
            ),
            scaleFactor: 3.0,
          ),
          type: DeviceType.mobile,
        ),
        Device(
          name: 'iPhone 12',
          resolution: Resolution(
            nativeSize: DeviceSize(
              height: 2532.0,
              width: 1170.0,
            ),
            scaleFactor: 3.0,
          ),
          type: DeviceType.mobile,
        ),
        Device(
          name: 'iPhone 12 Pro Max',
          resolution: Resolution(
            nativeSize: DeviceSize(
              height: 2778.0,
              width: 1284.0,
            ),
            scaleFactor: 3.0,
          ),
          type: DeviceType.mobile,
        ),
        Device(
          name: 'iPhone 13 Mini',
          resolution: Resolution(
            nativeSize: DeviceSize(
              height: 2436.0,
              width: 1125.0,
            ),
            scaleFactor: 3.0,
          ),
          type: DeviceType.mobile,
        ),
        Device(
          name: 'iPhone 13',
          resolution: Resolution(
            nativeSize: DeviceSize(
              height: 2532.0,
              width: 1170.0,
            ),
            scaleFactor: 3.0,
          ),
          type: DeviceType.mobile,
        ),
        Device(
          name: 'iPhone 13 Pro Max',
          resolution: Resolution(
            nativeSize: DeviceSize(
              height: 2778.0,
              width: 1284.0,
            ),
            scaleFactor: 3.0,
          ),
          type: DeviceType.mobile,
        ),
        Device(
          name: 'iPhone SE (2020)',
          resolution: Resolution(
            nativeSize: DeviceSize(
              height: 1334.0,
              width: 750.0,
            ),
            scaleFactor: 2.0,
          ),
          type: DeviceType.mobile,
        ),
        Device(
          name: '10.2" iPad',
          resolution: Resolution(
            nativeSize: DeviceSize(
              height: 2160.0,
              width: 1620.0,
            ),
            scaleFactor: 2.0,
          ),
          type: DeviceType.tablet,
        ),
        Device(
          name: '11" iPad Pro',
          resolution: Resolution(
            nativeSize: DeviceSize(
              height: 2388.0,
              width: 1668.0,
            ),
            scaleFactor: 2.0,
          ),
          type: DeviceType.tablet,
        ),
        Device(
          name: 'MacBook 13"',
          resolution: Resolution(
            nativeSize: DeviceSize(
              height: 1600.0,
              width: 2560.0,
            ),
            scaleFactor: 2.0,
          ),
          type: DeviceType.desktop,
        ),
      ],
      frames: [
        WidgetbookFrame(
          name: 'None',
          allowsDevices: true,
        ),
        WidgetbookFrame(
          name: 'Device Frame',
          allowsDevices: true,
        ),
      ],
      categories: [
        WidgetbookCategory(
          name: 'use cases',
          folders: [
            WidgetbookFolder(
              name: 'component',
              widgets: [
                WidgetbookComponent(
                  name: 'HeadingPreview',
                  useCases: [
                    WidgetbookUseCase(
                      name: 'Default',
                      builder: (context) => buildHeadings(context),
                    ),
                  ],
                ),
                WidgetbookComponent(
                  name: 'Buttons',
                  useCases: [
                    WidgetbookUseCase(
                      name: 'Default',
                      builder: (context) => buildButtons(context),
                    ),
                  ],
                ),
              ],
              folders: [],
            ),
            WidgetbookFolder(
              name: 'style',
              widgets: [],
              folders: [
                WidgetbookFolder(
                  name: 'typography',
                  widgets: [
                    WidgetbookComponent(
                      name: 'UnTextStyle',
                      useCases: [
                        WidgetbookUseCase(
                          name: 'Default',
                          builder: (context) => buildTypography(context),
                        ),
                      ],
                    ),
                  ],
                  folders: [],
                ),
                WidgetbookFolder(
                  name: 'elevation',
                  widgets: [
                    WidgetbookComponent(
                      name: 'UnElevation',
                      useCases: [
                        WidgetbookUseCase(
                          name: 'Default',
                          builder: (context) => buildElevation(context),
                        ),
                      ],
                    ),
                  ],
                  folders: [],
                ),
                WidgetbookFolder(
                  name: 'symbols',
                  widgets: [
                    WidgetbookComponent(
                      name: 'UnSymbols',
                      useCases: [
                        WidgetbookUseCase(
                          name: 'Default',
                          builder: (context) => buildSymbols(context),
                        ),
                      ],
                    ),
                  ],
                  folders: [],
                ),
                WidgetbookFolder(
                  name: 'haptics',
                  widgets: [
                    WidgetbookComponent(
                      name: 'UnHaptics',
                      useCases: [
                        WidgetbookUseCase(
                          name: 'Default',
                          builder: (context) => buildHaptics(context),
                        ),
                      ],
                    ),
                  ],
                  folders: [],
                ),
                WidgetbookFolder(
                  name: 'colors',
                  widgets: [
                    WidgetbookComponent(
                      name: 'UnColors',
                      useCases: [
                        WidgetbookUseCase(
                          name: 'Default',
                          builder: (context) => buildColors(context),
                        ),
                      ],
                    ),
                  ],
                  folders: [],
                ),
              ],
            ),
            WidgetbookFolder(
              name: 'material',
              widgets: [
                WidgetbookComponent(
                  name: 'Card',
                  useCases: [
                    WidgetbookUseCase(
                      name: 'Default',
                      builder: (context) => buildCards(context),
                    ),
                  ],
                ),
                WidgetbookComponent(
                  name: 'Chip',
                  useCases: [
                    WidgetbookUseCase(
                      name: 'Default',
                      builder: (context) => buildChips(context),
                    ),
                  ],
                ),
              ],
              folders: [],
            ),
          ],
          widgets: [],
        ),
      ],
      deviceFrameBuilder: frameBuilder,
    );
  }
}
