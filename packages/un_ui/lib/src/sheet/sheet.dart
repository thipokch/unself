import 'package:figma_squircle/figma_squircle.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:modal_bottom_sheet/modal_bottom_sheet.dart';
import 'package:un_style/un_style.dart';

// import 'package:sheet/route.dart';

// typedef UnRootSheetPage<T> = MaterialExtendedPage<T>;
// typedef UnSheet<T> = CupertinoSheetPage<T>;

const BoxShadow _kDefaultBoxShadow =
    BoxShadow(blurRadius: 10, color: Colors.black12, spreadRadius: 5);

class UnRootSheetPage<T> extends Page<T> {
  const UnRootSheetPage({
    required this.child,
    this.maintainState = true,
    this.fullscreenDialog = false,
    super.key,
    super.name,
    super.arguments,
    super.restorationId,
  });

  final Widget child;
  final bool maintainState;
  final bool fullscreenDialog;

  @override
  Route<T> createRoute(BuildContext context) =>
      _PageBasedMaterialWithModalsPageRoute<T>(page: this);
}

class _PageBasedMaterialWithModalsPageRoute<T>
    extends MaterialWithModalsPageRoute<T> {
  _PageBasedMaterialWithModalsPageRoute({
    required UnRootSheetPage<T> page,
  }) : super(settings: page, builder: (_) => page.child) {
    assert(opaque);
  }

  UnRootSheetPage<T> get _page => settings as UnRootSheetPage<T>;

  @override
  Widget buildContent(BuildContext context) {
    return _page.child;
  }

  @override
  bool get maintainState => _page.maintainState;

  @override
  bool get fullscreenDialog => _page.fullscreenDialog;

  @override
  String get debugLabel => '${super.debugLabel}(${_page.name})';
}

class UnSheet<T> extends Page<T> {
  final Widget child;
  final SmoothRadius? topRadius;
  final Color? transitionBackgroundColor;
  final SystemUiOverlayStyle? overlayStyle;
  final Color? backgroundColor;
  final double? elevation;
  final double? closeProgressThreshold;
  final ShapeBorder? shape;
  final Clip? clipBehavior;
  final Color? barrierColor;
  final bool expand;
  final AnimationController? secondAnimation;
  final Curve? animationCurve;
  final Curve? previousRouteAnimationCurve;
  final bool useRootNavigator;
  final bool bounce;
  final bool? isDismissible;
  final bool enableDrag;
  final Duration? duration;
  final RouteSettings? settings;
  final BoxShadow? shadow;

  const UnSheet({
    required this.child,
    this.topRadius,
    this.transitionBackgroundColor = Colors.black,
    this.overlayStyle,
    this.backgroundColor,
    this.elevation,
    this.closeProgressThreshold,
    this.shape,
    this.clipBehavior,
    this.barrierColor,
    this.expand = false,
    this.secondAnimation,
    this.animationCurve,
    this.previousRouteAnimationCurve,
    this.useRootNavigator = false,
    this.bounce = true,
    this.isDismissible,
    this.enableDrag = true,
    this.duration,
    this.settings,
    this.shadow,
    super.key,
    super.name,
    super.arguments,
    super.restorationId,
  });

  @override
  Route<T> createRoute(BuildContext context) => CupertinoModalBottomSheetRoute(
        settings: this,
        builder: (context) => Material(child: child),
        containerBuilder: (context, animation, child) => _SheetContainer(
          topRadius: topRadius ?? UnTheme.screenCornerRadius(context),
          backgroundColor: backgroundColor,
          child: child,
        ),
        secondAnimationController: secondAnimation,
        expanded: expand,
        closeProgressThreshold: closeProgressThreshold,
        barrierLabel: Localizations.of<MaterialLocalizations>(
                  context,
                  MaterialLocalizations,
                ) !=
                null
            ? MaterialLocalizations.of(context).modalBarrierDismissLabel
            : '',
        elevation: elevation,
        bounce: bounce,
        shape: shape,
        clipBehavior: clipBehavior,
        isDismissible: isDismissible ?? !expand ? true : false,
        modalBarrierColor: barrierColor ?? Colors.black12,
        enableDrag: enableDrag,
        topRadius: topRadius ?? UnTheme.screenCornerRadius(context),
        animationCurve: animationCurve,
        previousRouteAnimationCurve: previousRouteAnimationCurve,
        duration: duration,
        transitionBackgroundColor: transitionBackgroundColor ?? Colors.black,
        overlayStyle: overlayStyle,
      );
}

class _SheetContainer extends StatelessWidget {
  final Widget child;
  final Color? backgroundColor;
  final SmoothRadius topRadius;
  final BoxShadow? shadow;

  const _SheetContainer({
    Key? key,
    this.backgroundColor,
    required this.topRadius,
    // ignore: unused_element
    this.shadow,
    required this.child,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // final topSafeAreaPadding = MediaQuery.of(context).padding.top;
    // final topPadding = _kPreviousPageVisibleOffset + topSafeAreaPadding;

    final effectiveShadow = shadow ?? _kDefaultBoxShadow;
    final effectiveBackgroundColor =
        backgroundColor ?? CupertinoTheme.of(context).scaffoldBackgroundColor;

    return ClipSmoothRect(
      radius: SmoothBorderRadius.vertical(top: topRadius),
      child: Container(
        // padding: EdgeInsets.only(top: topSafeAreaPadding),
        decoration: BoxDecoration(
          color: effectiveBackgroundColor,
          boxShadow: [effectiveShadow],
        ),
        width: double.infinity,
        child: child,
        // child: MediaQuery.removePadding(
        //   context: context,
        //   removeTop: true, // Remove top Safe Area
        //   child: child,
        // ),
      ),
    );
  }
}
