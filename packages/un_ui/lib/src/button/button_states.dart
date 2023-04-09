import 'package:flutter/material.dart';
import 'package:flutter/foundation.dart';

@immutable
class ButtonBackground extends MaterialStateProperty<Color?>
    with Diagnosticable {
  ButtonBackground(this.primary, this.onSurface);

  final Color? primary;
  final Color? onSurface;

  @override
  Color? resolve(Set<MaterialState> states) {
    if (states.contains(MaterialState.disabled)) {
      return onSurface?.withOpacity(0.12);
    }

    return primary;
  }
}

@immutable
class ButtonForeground extends MaterialStateProperty<Color?>
    with Diagnosticable {
  ButtonForeground(this.onPrimary, this.onSurface);

  final Color? onPrimary;
  final Color? onSurface;

  @override
  Color? resolve(Set<MaterialState> states) {
    if (states.contains(MaterialState.disabled)) {
      return onSurface?.withOpacity(0.38);
    }

    return onPrimary;
  }
}

@immutable
class ButtonOverlay extends MaterialStateProperty<Color?> with Diagnosticable {
  ButtonOverlay(this.onPrimary);

  final Color onPrimary;

  @override
  Color? resolve(Set<MaterialState> states) {
    if (states.contains(MaterialState.hovered)) {
      return onPrimary.withOpacity(0.08);
    }
    if (states.contains(MaterialState.focused) ||
        states.contains(MaterialState.pressed)) {
      return onPrimary.withOpacity(0.12);
    }

    return null;
  }
}

@immutable
class ButtonElevation extends MaterialStateProperty<double>
    with Diagnosticable {
  ButtonElevation(this.elevation);

  final double elevation;

  @override
  double resolve(Set<MaterialState> states) {
    if (states.contains(MaterialState.disabled)) return 0;
    if (states.contains(MaterialState.hovered)) return elevation + 2;
    if (states.contains(MaterialState.focused)) return elevation + 2;
    if (states.contains(MaterialState.pressed)) return elevation + 6;

    return elevation;
  }
}
