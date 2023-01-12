import 'package:flutter/material.dart';

class UnColorStates {
  static const hover = .08;
  static const disabled = .12;
  static const disabledContent = .38;
  static const focus = .12;
  static const pressed = .12;
  static const dragged = .16;
}

extension ColorStates on Color {
  Color get onHover => withOpacity(UnColorStates.hover);
  Color get onDisabled => withOpacity(UnColorStates.disabled);
  Color get onDisabledContent => withOpacity(UnColorStates.disabledContent);
  Color get onFocus => withOpacity(UnColorStates.focus);
  Color get onPressed => withOpacity(UnColorStates.pressed);
  Color get onDragged => withOpacity(UnColorStates.dragged);
}
