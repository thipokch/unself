import 'package:flutter/material.dart';

class UnElevation {
  static const List<ElevationInfo> elevations = <ElevationInfo>[
    ElevationInfo(0, 0.0, 0, []),
    ElevationInfo(1, 1.0, 5, <BoxShadow>[
      // BoxShadow(
      //   blurRadius: 2,
      //   spreadRadius: 0,
      //   offset: Offset(0, 1),
      //   color: ElementColor.mdRefPaletteBlackA30,
      // ),
      // BoxShadow(
      //   blurRadius: 3,
      //   spreadRadius: 1,
      //   offset: Offset(0, 1),
      //   color: ElementColor.mdRefPaletteBlackA15,
      // ),
    ]),
    ElevationInfo(2, 3.0, 8, <BoxShadow>[
      // BoxShadow(
      //   blurRadius: 2,
      //   spreadRadius: 0,
      //   offset: Offset(0, 1),
      //   color: ElementColor.mdRefPaletteBlackA30,
      // ),
      // BoxShadow(
      //   blurRadius: 6,
      //   spreadRadius: 2,
      //   offset: Offset(0, 2),
      //   color: ElementColor.mdRefPaletteBlackA15,
      // ),
    ]),
    ElevationInfo(3, 6.0, 11, <BoxShadow>[
      // BoxShadow(
      //   blurRadius: 3,
      //   spreadRadius: 0,
      //   offset: Offset(0, 1),
      //   color: ElementColor.mdRefPaletteBlackA30,
      // ),
      // BoxShadow(
      //   blurRadius: 8,
      //   spreadRadius: 3,
      //   offset: Offset(0, 4),
      //   color: ElementColor.mdRefPaletteBlackA15,
      // ),
    ]),
    ElevationInfo(4, 8.0, 12, <BoxShadow>[
      // BoxShadow(
      //   blurRadius: 3,
      //   spreadRadius: 0,
      //   offset: Offset(0, 2),
      //   color: ElementColor.mdRefPaletteBlackA30,
      // ),
      // BoxShadow(
      //   blurRadius: 10,
      //   spreadRadius: 4,
      //   offset: Offset(0, 6),
      //   color: ElementColor.mdRefPaletteBlackA15,
      // ),
    ]),
    ElevationInfo(5, 12.0, 14, <BoxShadow>[
      // BoxShadow(
      //   blurRadius: 4,
      //   spreadRadius: 0,
      //   offset: Offset(0, 4),
      //   color: ElementColor.mdRefPaletteBlackA30,
      // ),
      // BoxShadow(
      //   blurRadius: 12,
      //   spreadRadius: 6,
      //   offset: Offset(0, 8),
      //   color: ElementColor.mdRefPaletteBlackA15,
      // ),
    ]),
  ];
}

class ElevationInfo {
  const ElevationInfo(
    this.level,
    this.elevation,
    this.overlayPercent,
    this.layers,
  );
  final int level;
  final double elevation;
  final int overlayPercent;
  final List<BoxShadow> layers;
}
