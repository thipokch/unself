import 'package:flutter/material.dart';

abstract class UnEasing {
  // Common Curves

  static const Curve linear = Curves.linear;
  static const Curve decelerate = Curves.decelerate;
  static const Cubic fastLinearToSlowEaseIn = Curves.fastLinearToSlowEaseIn;
  static const Cubic ease = Curves.ease;
  static const Cubic easeIn = Curves.easeIn;
  static const Cubic easeInToLinear = Curves.easeInToLinear;
  static const Cubic easeInSine = Curves.easeInSine;
  static const Cubic easeInQuad = Curves.easeInQuad;
  static const Cubic easeInCubic = Curves.easeInCubic;
  static const Cubic easeInQuart = Curves.easeInQuart;
  static const Cubic easeInQuint = Curves.easeInQuint;
  static const Cubic easeInExpo = Curves.easeInExpo;
  static const Cubic easeInCirc = Curves.easeInCirc;
  static const Cubic easeInBack = Curves.easeInBack;
  static const Cubic easeOut = Curves.easeOut;
  static const Cubic linearToEaseOut = Curves.linearToEaseOut;
  static const Cubic easeOutSine = Curves.easeOutSine;
  static const Cubic easeOutQuad = Curves.easeOutQuad;
  static const Cubic easeOutCubic = Curves.easeOutCubic;
  static const Cubic easeOutQuart = Curves.easeOutQuart;
  static const Cubic easeOutQuint = Curves.easeOutQuint;
  static const Cubic easeOutExpo = Curves.easeOutExpo;
  static const Cubic easeOutCirc = Curves.easeOutCirc;
  static const Cubic easeOutBack = Curves.easeOutBack;
  static const Cubic easeInOut = Curves.easeInOut;
  static const Cubic easeInOutSine = Curves.easeInOutSine;
  static const Cubic easeInOutQuad = Curves.easeInOutQuad;
  static const Cubic easeInOutCubic = Curves.easeInOutCubic;
  static const ThreePointCubic easeInOutCubicEmphasized =
      Curves.easeInOutCubicEmphasized;
  static const Cubic easeInOutQuart = Curves.easeInOutQuart;
  static const Cubic easeInOutQuint = Curves.easeInOutQuint;
  static const Cubic easeInOutExpo = Curves.easeInOutExpo;
  static const Cubic easeInOutCirc = Curves.easeInOutCirc;
  static const Cubic easeInOutBack = Curves.easeInOutBack;
  static const Cubic fastOutSlowIn = Curves.fastOutSlowIn;
  static const Cubic slowMiddle = Curves.slowMiddle;
  static const Curve bounceIn = Curves.bounceIn;
  static const Curve bounceOut = Curves.bounceOut;
  static const Curve bounceInOut = Curves.bounceInOut;
  static const ElasticInCurve elasticIn = Curves.elasticIn;
  static const ElasticOutCurve elasticOut = Curves.elasticOut;
  static const ElasticInOutCurve elasticInOut = Curves.elasticInOut;
}
