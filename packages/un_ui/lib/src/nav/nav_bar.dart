// ignore_for_file: long-parameter-list, long-method

import 'dart:math' as math;
import 'dart:ui' show ImageFilter;

import 'package:figma_squircle/figma_squircle.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart' as cupertino;
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';
import 'package:un_style/un_style.dart';

part 'nav_bar_extended.dart';

const double _kNavBarPersistentHeight = kMinInteractiveDimension * 1.25;

const double _kNavBarLargeTitleHeightExtension = 52.0;

const double _kNavBarShowLargeTitleThreshold = 10.0;

const double _kNavBarEdgePadding = 4.0;

const Duration _kNavBarTitleFadeDuration = UnDurations.fast;

const Color _kDefaultNavBarBorderColor = Color(0x4D000000);

const Border _kDefaultNavBarBorder = Border(
  bottom: BorderSide(
    color: _kDefaultNavBarBorderColor,
    width: 0.0,
  ),
);

const HeroTag defaultHeroTag = HeroTag(null);

@immutable
class HeroTag {
  const HeroTag(this.navigator);

  final NavigatorState? navigator;

  @override
  String toString() =>
      'Default Hero tag for Cupertino navigation bars with navigator $navigator';

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) {
      return true;
    }
    if (other.runtimeType != runtimeType) {
      return false;
    }

    return other is HeroTag && other.navigator == navigator;
  }

  @override
  int get hashCode => identityHashCode(navigator);
}

class _FixedSizeSlidingTransition extends AnimatedWidget {
  const _FixedSizeSlidingTransition({
    Key? key,
    required this.isLTR,
    required this.offsetAnimation,
    required this.size,
    required this.child,
  }) : super(key: key, listenable: offsetAnimation);

  final bool isLTR;

  final Size size;

  final Animation<Offset> offsetAnimation;

  final Widget child;

  @override
  Widget build(BuildContext context) {
    return Positioned(
      top: offsetAnimation.value.dy,
      left: isLTR ? offsetAnimation.value.dx : null,
      right: isLTR ? null : offsetAnimation.value.dx,
      width: size.width,
      height: size.height,
      child: child,
    );
  }
}

Widget _wrapWithBackground({
  Border? border,
  required Color backgroundColor,
  Brightness? brightness,
  required Widget child,
  bool updateSystemUiOverlay = true,
}) {
  Widget result = child;
  if (updateSystemUiOverlay) {
    final bool isDark = backgroundColor.computeLuminance() < 0.179;
    final Brightness newBrightness =
        brightness ?? (isDark ? Brightness.dark : Brightness.light);
    final SystemUiOverlayStyle overlayStyle;
    switch (newBrightness) {
      case Brightness.dark:
        overlayStyle = SystemUiOverlayStyle.light;
        break;
      case Brightness.light:
        overlayStyle = SystemUiOverlayStyle.dark;
        break;
    }
    result = AnnotatedRegion<SystemUiOverlayStyle>(
      value: overlayStyle,
      child: result,
    );
  }
  final DecoratedBox childWithBackground = DecoratedBox(
    decoration: BoxDecoration(
      border: border,
      color: backgroundColor,
    ),
    child: result,
  );

  if (backgroundColor.alpha == 0xFF) return childWithBackground;

  return ClipSmoothRect(
    child: BackdropFilter(
      filter: ImageFilter.blur(sigmaX: 10.0, sigmaY: 10.0),
      child: childWithBackground,
    ),
  );
}

bool _isTransitionable(BuildContext context) {
  final ModalRoute<dynamic>? route = ModalRoute.of(context);

  return route is PageRoute && !route.fullscreenDialog;
}

class UnselfNavigationBar extends StatefulWidget
    implements cupertino.ObstructingPreferredSizeWidget {
  const UnselfNavigationBar({
    Key? key,
    this.leading,
    this.automaticallyImplyLeading = true,
    this.automaticallyImplyMiddle = true,
    this.previousPageTitle,
    this.middle,
    this.trailing,
    this.border = _kDefaultNavBarBorder,
    this.backgroundColor,
    this.brightness,
    this.padding,
    this.transitionBetweenRoutes = true,
    this.heroTag = defaultHeroTag,
  })  : assert(
          !transitionBetweenRoutes || identical(heroTag, defaultHeroTag),
          'Cannot specify a heroTag override if this navigation bar does not '
          'transition due to transitionBetweenRoutes = false.',
        ),
        super(key: key);

  final Widget? leading;

  final bool automaticallyImplyLeading;

  final bool automaticallyImplyMiddle;

  final String? previousPageTitle;

  final Widget? middle;

  final Widget? trailing;

  final Color? backgroundColor;

  final Brightness? brightness;

  final EdgeInsetsDirectional? padding;

  final Border? border;

  final bool transitionBetweenRoutes;

  final Object heroTag;

  @override
  bool shouldFullyObstruct(BuildContext context) {
    final Color backgroundColor =
        Theme.of(context).appBarTheme.backgroundColor!;

    return backgroundColor.alpha == 0xFF;
  }

  @override
  Size get preferredSize {
    return const Size.fromHeight(_kNavBarPersistentHeight);
  }

  @override
  State<UnselfNavigationBar> createState() => _UnselfNavigationBarState();
}

class _UnselfNavigationBarState extends State<UnselfNavigationBar> {
  late _NavigationBarStaticComponentsKeys keys;

  @override
  void initState() {
    super.initState();
    keys = _NavigationBarStaticComponentsKeys();
  }

  @override
  Widget build(BuildContext context) {
    final Color backgroundColor = Theme.of(context).colorScheme.background;

    final _NavigationBarStaticComponents components =
        _NavigationBarStaticComponents(
      keys: keys,
      route: ModalRoute.of(context),
      userLeading: widget.leading,
      automaticallyImplyLeading: widget.automaticallyImplyLeading,
      automaticallyImplyTitle: widget.automaticallyImplyMiddle,
      previousPageTitle: widget.previousPageTitle,
      userMiddle: widget.middle,
      userTrailing: widget.trailing,
      padding: widget.padding,
      userLargeTitle: null,
      large: false,
    );

    final Widget navBar = _wrapWithBackground(
      border: widget.border,
      backgroundColor: backgroundColor,
      brightness: widget.brightness,
      child: DefaultTextStyle(
        style: Theme.of(context).textTheme.bodyMedium!,
        child: _PersistentNavigationBar(
          components: components,
          padding: widget.padding,
        ),
      ),
    );

    if (!widget.transitionBetweenRoutes || !_isTransitionable(context)) {
      return navBar;
    }

    return Builder(
      builder: (BuildContext context) {
        return Hero(
          tag: widget.heroTag == defaultHeroTag
              ? HeroTag(Navigator.of(context))
              : widget.heroTag,
          createRectTween: _linearTranslateWithLargestRectSizeTween,
          placeholderBuilder: _navBarHeroLaunchPadBuilder,
          flightShuttleBuilder: _navBarHeroFlightShuttleBuilder,
          transitionOnUserGestures: true,
          child: _TransitionableNavigationBar(
            componentsKeys: keys,
            backgroundColor: backgroundColor,
            backButtonTextStyle: Theme.of(context).textTheme.labelMedium!,
            titleTextStyle: Theme.of(context).textTheme.labelMedium!,
            largeTitleTextStyle: null,
            border: widget.border,
            hasUserMiddle: widget.middle != null,
            largeExpanded: false,
            child: navBar,
          ),
        );
      },
    );
  }
}

class UnselfSliverNavigationBar extends StatefulWidget {
  const UnselfSliverNavigationBar({
    Key? key,
    this.largeTitle,
    this.leading,
    this.automaticallyImplyLeading = true,
    this.automaticallyImplyTitle = true,
    this.previousPageTitle,
    this.middle,
    this.trailing,
    this.border = _kDefaultNavBarBorder,
    this.backgroundColor,
    this.brightness,
    this.padding,
    this.transitionBetweenRoutes = true,
    this.heroTag = defaultHeroTag,
    this.stretch = false,
  })  : assert(
          automaticallyImplyTitle || largeTitle != null,
          'No largeTitle has been provided but automaticallyImplyTitle is also '
          'false. Either provide a largeTitle or set automaticallyImplyTitle to '
          'true.',
        ),
        super(key: key);

  final Widget? largeTitle;

  final Widget? leading;

  final bool automaticallyImplyLeading;

  final bool automaticallyImplyTitle;

  final String? previousPageTitle;

  final Widget? middle;

  final Widget? trailing;

  final Color? backgroundColor;

  final Brightness? brightness;

  final EdgeInsetsDirectional? padding;

  final Border? border;

  final bool transitionBetweenRoutes;

  final Object heroTag;

  bool get opaque => backgroundColor?.alpha == 0xFF;

  final bool stretch;

  @override
  State<UnselfSliverNavigationBar> createState() =>
      _UnselfSliverNavigationBarState();
}

class _UnselfSliverNavigationBarState extends State<UnselfSliverNavigationBar> {
  late _NavigationBarStaticComponentsKeys keys;

  @override
  void initState() {
    super.initState();
    keys = _NavigationBarStaticComponentsKeys();
  }

  @override
  Widget build(BuildContext context) {
    final _NavigationBarStaticComponents components =
        _NavigationBarStaticComponents(
      keys: keys,
      route: ModalRoute.of(context),
      userLeading: widget.leading,
      automaticallyImplyLeading: widget.automaticallyImplyLeading,
      automaticallyImplyTitle: widget.automaticallyImplyTitle,
      previousPageTitle: widget.previousPageTitle,
      userMiddle: widget.middle,
      userTrailing: widget.trailing,
      userLargeTitle: widget.largeTitle,
      padding: widget.padding,
      large: true,
    );

    return MediaQuery(
      data: MediaQuery.of(context).copyWith(textScaleFactor: 1),
      child: SliverPersistentHeader(
        pinned: true,
        delegate: _LargeTitleNavigationBarSliverDelegate(
          keys: keys,
          components: components,
          userMiddle: widget.middle,
          backgroundColor: Theme.of(context).colorScheme.background,
          brightness: widget.brightness,
          border: widget.border,
          padding: widget.padding,
          actionsForegroundColor: Theme.of(context).primaryColor,
          transitionBetweenRoutes: widget.transitionBetweenRoutes,
          heroTag: widget.heroTag,
          persistentHeight:
              _kNavBarPersistentHeight + MediaQuery.of(context).padding.top,
          alwaysShowMiddle: widget.middle != null,
          stretchConfiguration:
              widget.stretch ? OverScrollHeaderStretchConfiguration() : null,
        ),
      ),
    );
  }
}

class _LargeTitleNavigationBarSliverDelegate
    extends SliverPersistentHeaderDelegate with DiagnosticableTreeMixin {
  _LargeTitleNavigationBarSliverDelegate({
    required this.keys,
    required this.components,
    required this.userMiddle,
    required this.backgroundColor,
    required this.brightness,
    required this.border,
    required this.padding,
    required this.actionsForegroundColor,
    required this.transitionBetweenRoutes,
    required this.heroTag,
    required this.persistentHeight,
    required this.alwaysShowMiddle,
    required this.stretchConfiguration,
  });

  final _NavigationBarStaticComponentsKeys keys;
  final _NavigationBarStaticComponents components;
  final Widget? userMiddle;
  final Color backgroundColor;
  final Brightness? brightness;
  final Border? border;
  final EdgeInsetsDirectional? padding;
  final Color actionsForegroundColor;
  final bool transitionBetweenRoutes;
  final Object heroTag;
  final double persistentHeight;
  final bool alwaysShowMiddle;

  @override
  double get minExtent => persistentHeight;

  @override
  double get maxExtent => persistentHeight + _kNavBarLargeTitleHeightExtension;

  @override
  OverScrollHeaderStretchConfiguration? stretchConfiguration;

  @override
  Widget build(
    BuildContext context,
    double shrinkOffset,
    bool overlapsContent,
  ) {
    final bool showLargeTitle =
        shrinkOffset < maxExtent - minExtent - _kNavBarShowLargeTitleThreshold;

    final _PersistentNavigationBar persistentNavigationBar =
        _PersistentNavigationBar(
      components: components,
      padding: padding,
      middleVisible: alwaysShowMiddle ? null : !showLargeTitle,
    );

    // final Widget navBar = _wrapWithBackground(
    //   border: border,
    //   backgroundColor: Theme.of(context).colorScheme.background,
    //   brightness: brightness,
    //   child: DefaultTextStyle(
    //     style: Theme.of(context).textTheme.bodyMedium!,
    //     child: Material(
    //       type: MaterialType.transparency,
    //       child: Stack(
    //         fit: StackFit.expand,
    //         children: <Widget>[
    //           Positioned(
    //             top: persistentHeight,
    //             left: 0.0,
    //             right: 0.0,
    //             bottom: 0.0,
    //             child: ClipRect(
    //               child: OverflowBox(
    //                 minHeight: 0.0,
    //                 maxHeight: double.infinity,
    //                 alignment: AlignmentDirectional.bottomStart,
    //                 child: Padding(
    //                   padding: const EdgeInsetsDirectional.only(
    //                     start: 16.0,
    //                     bottom: 8.0,
    //                   ),
    //                   child: SafeArea(
    //                     top: false,
    //                     bottom: false,
    //                     child: AnimatedOpacity(
    //                       opacity: showLargeTitle ? 1.0 : 0.0,
    //                       duration: _kNavBarTitleFadeDuration,
    //                       child: Semantics(
    //                         header: true,
    //                         child: DefaultTextStyle(
    //                           style:
    //                               Theme.of(context).textTheme.headlineMedium!,
    //                           maxLines: 1,
    //                           overflow: TextOverflow.ellipsis,
    //                           child: components.largeTitle!,
    //                         ),
    //                       ),
    //                     ),
    //                   ),
    //                 ),
    //               ),
    //             ),
    //           ),
    //           Positioned(
    //             left: 0.0,
    //             right: 0.0,
    //             top: 0.0,
    //             child: persistentNavigationBar,
    //           ),
    //         ],
    //       ),
    //     ),
    //   ),
    // );

    // Copied from https://github.com/flutter/flutter/issues/62298
    // Doesn't work with Nested
    final Widget navBar = _wrapWithBackground(
      border: border,
      backgroundColor: Theme.of(context).colorScheme.background,
      brightness: brightness,
      // A LayoutBuilder lets us figure out the height of the nav bar after
      // stretching from overscrolls. This lets us determine how much to grow
      // the size of the large title text during overscrolls.
      child: LayoutBuilder(
        builder: (BuildContext context, BoxConstraints constraints) {
          return DefaultTextStyle(
            style: Theme.of(context).textTheme.bodyMedium!,
            child: Stack(
              fit: StackFit.expand,
              children: <Widget>[
                Positioned(
                  top: persistentHeight,
                  left: 0.0,
                  right: 0.0,
                  bottom: 0.0,
                  child: ClipSmoothRect(
                    // The large title starts at the persistent bar.
                    // It's aligned with the bottom of the sliver and expands clipped
                    // and behind the persistent bar.
                    child: OverflowBox(
                      minHeight: 0.0,
                      maxHeight: double.infinity,
                      alignment: AlignmentDirectional.bottomStart,
                      child: Padding(
                        padding: const EdgeInsetsDirectional.only(
                          start: 16.0,
                          bottom: 8.0, // Bottom has a different padding.
                        ),
                        child: SafeArea(
                          top: false,
                          bottom: false,
                          child: AnimatedOpacity(
                            opacity: showLargeTitle ? 1.0 : 0.0,
                            duration: _kNavBarTitleFadeDuration,
                            child: Semantics(
                              header: true,
                              child: DefaultTextStyle(
                                style:
                                    Theme.of(context).textTheme.headlineMedium!,
                                maxLines: 1,
                                overflow: TextOverflow.ellipsis,
                                child: Builder(builder: (_) {
                                  double maxScale = 1.15;

                                  // If the large title widget is Text we can compute
                                  // it's width and calculate the maximum scale value
                                  // for the Transform widget to prevent the text from
                                  // getting clipped.
                                  if (components.largeTitle != null &&
                                      components.largeTitle?.child is Text) {
                                    final Text largeTitleText =
                                        components.largeTitle!.child as Text;

                                    final TextPainter painter = TextPainter(
                                      textDirection: Directionality.of(context),
                                      text: TextSpan(
                                        style: Theme.of(context)
                                            .textTheme
                                            .headlineMedium!,
                                        text: largeTitleText.data,
                                      ),
                                    );

                                    // This operation dry-runs the layout in order
                                    // to compute the width of the large title text.
                                    painter.layout();

                                    // Maximum scale lets us prevent the large title
                                    // from getting clipped when it's width is greater than
                                    // the navigation bar's max width constraint.
                                    maxScale = ((constraints.maxWidth -
                                                _kNavBarEdgePadding) /
                                            painter.maxIntrinsicWidth)
                                        .clamp(1.0, 1.15);
                                  }

                                  return Transform.scale(
                                    // This scale is estimated from the settings app in iOS 14.
                                    // The large title scales linearly from 1.0 up to 1.15 magnification.
                                    // The `constraints.maxHeight` value is the height of the nav bar,
                                    // and `maxExtent` is the default large title height the nav bar snaps back to.
                                    // The difference between the two heights is used to scale the title.
                                    scale: (1.0 +
                                            (constraints.maxHeight -
                                                    maxExtent) /
                                                maxExtent *
                                                0.12)
                                        .clamp(1.0, maxScale),
                                    alignment: AlignmentDirectional.bottomStart,
                                    child: components.largeTitle,
                                  );
                                }),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
                Positioned(
                  left: 0.0,
                  right: 0.0,
                  top: 0.0,
                  child: persistentNavigationBar,
                ),
              ],
            ),
          );
        },
      ),
    );

    if (!transitionBetweenRoutes || !_isTransitionable(context)) {
      return navBar;
    }

    return Hero(
      tag: heroTag == defaultHeroTag ? HeroTag(Navigator.of(context)) : heroTag,
      createRectTween: _linearTranslateWithLargestRectSizeTween,
      flightShuttleBuilder: _navBarHeroFlightShuttleBuilder,
      placeholderBuilder: _navBarHeroLaunchPadBuilder,
      transitionOnUserGestures: true,
      child: _TransitionableNavigationBar(
        componentsKeys: keys,
        backgroundColor: Theme.of(context).colorScheme.background,
        backButtonTextStyle: Theme.of(context).textTheme.labelMedium!,
        titleTextStyle: Theme.of(context).textTheme.titleMedium!,
        largeTitleTextStyle: Theme.of(context).textTheme.headlineMedium!,
        border: border,
        hasUserMiddle: userMiddle != null,
        largeExpanded: showLargeTitle,
        child: navBar,
      ),
    );
  }

  @override
  bool shouldRebuild(_LargeTitleNavigationBarSliverDelegate oldDelegate) {
    return components != oldDelegate.components ||
        userMiddle != oldDelegate.userMiddle ||
        backgroundColor != oldDelegate.backgroundColor ||
        border != oldDelegate.border ||
        padding != oldDelegate.padding ||
        actionsForegroundColor != oldDelegate.actionsForegroundColor ||
        transitionBetweenRoutes != oldDelegate.transitionBetweenRoutes ||
        persistentHeight != oldDelegate.persistentHeight ||
        alwaysShowMiddle != oldDelegate.alwaysShowMiddle ||
        heroTag != oldDelegate.heroTag;
  }
}

class _PersistentNavigationBar extends StatelessWidget {
  const _PersistentNavigationBar({
    Key? key,
    required this.components,
    this.padding,
    this.middleVisible,
  }) : super(key: key);

  final _NavigationBarStaticComponents components;

  final EdgeInsetsDirectional? padding;

  final bool? middleVisible;

  @override
  Widget build(BuildContext context) {
    Widget? middle = components.middle;

    if (middle != null) {
      middle = DefaultTextStyle(
        style: Theme.of(context).textTheme.titleMedium!,
        child: Semantics(header: true, child: middle),
      );

      middle = middleVisible == null
          ? middle
          : AnimatedOpacity(
              opacity: middleVisible! ? 1.0 : 0.0,
              duration: _kNavBarTitleFadeDuration,
              child: middle,
            );
    }

    Widget? leading = components.leading;
    final Widget? backChevron = components.backChevron;
    final Widget? backLabel = components.backLabel;

    if (leading == null && backChevron != null && backLabel != null) {
      leading = UnselfNavigationBarBackButton._assemble(
        backChevron,
        backLabel,
      );
    }

    Widget paddedToolbar = NavigationToolbar(
      leading: leading,
      middle: middle,
      trailing: components.trailing,
      middleSpacing: 6.0,
    );

    if (padding != null) {
      paddedToolbar = Padding(
        padding: EdgeInsets.only(
          top: padding!.top,
          bottom: padding!.bottom,
        ),
        child: paddedToolbar,
      );
    }

    return SizedBox(
      height: _kNavBarPersistentHeight + MediaQuery.of(context).padding.top,
      child: SafeArea(
        bottom: false,
        child: paddedToolbar,
      ),
    );
  }
}

@immutable
class _NavigationBarStaticComponentsKeys {
  _NavigationBarStaticComponentsKeys()
      : navBarBoxKey = GlobalKey(debugLabel: 'Navigation bar render box'),
        leadingKey = GlobalKey(debugLabel: 'Leading'),
        backChevronKey = GlobalKey(debugLabel: 'Back chevron'),
        backLabelKey = GlobalKey(debugLabel: 'Back label'),
        middleKey = GlobalKey(debugLabel: 'Middle'),
        trailingKey = GlobalKey(debugLabel: 'Trailing'),
        largeTitleKey = GlobalKey(debugLabel: 'Large title');

  final GlobalKey navBarBoxKey;
  final GlobalKey leadingKey;
  final GlobalKey backChevronKey;
  final GlobalKey backLabelKey;
  final GlobalKey middleKey;
  final GlobalKey trailingKey;
  final GlobalKey largeTitleKey;
}

@immutable
class _NavigationBarStaticComponents {
  _NavigationBarStaticComponents({
    required _NavigationBarStaticComponentsKeys keys,
    required ModalRoute<dynamic>? route,
    required Widget? userLeading,
    required bool automaticallyImplyLeading,
    required bool automaticallyImplyTitle,
    required String? previousPageTitle,
    required Widget? userMiddle,
    required Widget? userTrailing,
    required Widget? userLargeTitle,
    required EdgeInsetsDirectional? padding,
    required bool large,
  })  : leading = createLeading(
          leadingKey: keys.leadingKey,
          userLeading: userLeading,
          route: route,
          automaticallyImplyLeading: automaticallyImplyLeading,
          padding: padding,
        ),
        backChevron = createBackChevron(
          backChevronKey: keys.backChevronKey,
          userLeading: userLeading,
          route: route,
          automaticallyImplyLeading: automaticallyImplyLeading,
        ),
        backLabel = createBackLabel(
          backLabelKey: keys.backLabelKey,
          userLeading: userLeading,
          route: route,
          previousPageTitle: previousPageTitle,
          automaticallyImplyLeading: automaticallyImplyLeading,
        ),
        middle = createMiddle(
          middleKey: keys.middleKey,
          userMiddle: userMiddle,
          userLargeTitle: userLargeTitle,
          route: route,
          automaticallyImplyTitle: automaticallyImplyTitle,
          large: large,
        ),
        trailing = createTrailing(
          trailingKey: keys.trailingKey,
          userTrailing: userTrailing,
          padding: padding,
        ),
        largeTitle = createLargeTitle(
          largeTitleKey: keys.largeTitleKey,
          userLargeTitle: userLargeTitle,
          route: route,
          automaticImplyTitle: automaticallyImplyTitle,
          large: large,
        );

  static Widget? _derivedTitle({
    required bool automaticallyImplyTitle,
    ModalRoute<dynamic>? currentRoute,
  }) {
    if (automaticallyImplyTitle &&
        currentRoute is cupertino.CupertinoRouteTransitionMixin &&
        currentRoute.title != null) {
      return Text(currentRoute.title!);
    }

    return null;
  }

  final KeyedSubtree? leading;
  static KeyedSubtree? createLeading({
    required GlobalKey leadingKey,
    required Widget? userLeading,
    required ModalRoute<dynamic>? route,
    required bool automaticallyImplyLeading,
    required EdgeInsetsDirectional? padding,
  }) {
    Widget? leadingContent;

    if (userLeading != null) {
      leadingContent = userLeading;
    } else if (automaticallyImplyLeading &&
        route is PageRoute &&
        route.canPop &&
        route.fullscreenDialog) {
      leadingContent = cupertino.CupertinoButton(
        padding: EdgeInsets.zero,
        onPressed: () {
          route.navigator!.maybePop();
        },
        child: const Text('Close'),
      );
    }

    if (leadingContent == null) {
      return null;
    }

    return KeyedSubtree(
      key: leadingKey,
      child: Padding(
        padding: EdgeInsetsDirectional.only(
          start: padding?.start ?? _kNavBarEdgePadding,
        ),
        child: IconTheme.merge(
          data: const IconThemeData(
            size: 32.0,
          ),
          child: leadingContent,
        ),
      ),
    );
  }

  final KeyedSubtree? backChevron;
  static KeyedSubtree? createBackChevron({
    required GlobalKey backChevronKey,
    required Widget? userLeading,
    required ModalRoute<dynamic>? route,
    required bool automaticallyImplyLeading,
  }) {
    if (userLeading != null ||
        !automaticallyImplyLeading ||
        route == null ||
        !route.canPop ||
        (route is PageRoute && route.fullscreenDialog)) {
      return null;
    }

    return KeyedSubtree(
      key: backChevronKey,
      child: const Icon(UnSymbols.chevronBack),
    );
  }

  final KeyedSubtree? backLabel;
  static KeyedSubtree? createBackLabel({
    required GlobalKey backLabelKey,
    required Widget? userLeading,
    required ModalRoute<dynamic>? route,
    required bool automaticallyImplyLeading,
    required String? previousPageTitle,
  }) {
    if (userLeading != null ||
        !automaticallyImplyLeading ||
        route == null ||
        !route.canPop ||
        (route is PageRoute && route.fullscreenDialog)) {
      return null;
    }

    return KeyedSubtree(
      key: backLabelKey,
      child: _BackLabel(
        specifiedPreviousTitle: previousPageTitle,
        route: route,
      ),
    );
  }

  final KeyedSubtree? middle;
  static KeyedSubtree? createMiddle({
    required GlobalKey middleKey,
    required Widget? userMiddle,
    required Widget? userLargeTitle,
    required bool large,
    required bool automaticallyImplyTitle,
    required ModalRoute<dynamic>? route,
  }) {
    Widget? middleContent = userMiddle;

    if (large) {
      middleContent ??= userLargeTitle;
    }

    middleContent ??= _derivedTitle(
      automaticallyImplyTitle: automaticallyImplyTitle,
      currentRoute: route,
    );

    if (middleContent == null) {
      return null;
    }

    return KeyedSubtree(
      key: middleKey,
      child: middleContent,
    );
  }

  final KeyedSubtree? trailing;
  static KeyedSubtree? createTrailing({
    required GlobalKey trailingKey,
    required Widget? userTrailing,
    required EdgeInsetsDirectional? padding,
  }) {
    if (userTrailing == null) {
      return null;
    }

    return KeyedSubtree(
      key: trailingKey,
      child: Padding(
        padding: EdgeInsetsDirectional.only(
          end: padding?.end ?? _kNavBarEdgePadding,
        ),
        child: IconTheme.merge(
          data: const IconThemeData(
            size: 32.0,
          ),
          child: userTrailing,
        ),
      ),
    );
  }

  final KeyedSubtree? largeTitle;
  static KeyedSubtree? createLargeTitle({
    required GlobalKey largeTitleKey,
    required Widget? userLargeTitle,
    required bool large,
    required bool automaticImplyTitle,
    required ModalRoute<dynamic>? route,
  }) {
    if (!large) {
      return null;
    }

    final Widget? largeTitleContent = userLargeTitle ??
        _derivedTitle(
          automaticallyImplyTitle: automaticImplyTitle,
          currentRoute: route,
        );

    assert(
      largeTitleContent != null,
      'largeTitle was not provided and there was no title from the route.',
    );

    return KeyedSubtree(
      key: largeTitleKey,
      child: largeTitleContent!,
    );
  }
}

class UnselfNavigationBarBackButton extends StatelessWidget {
  const UnselfNavigationBarBackButton({
    Key? key,
    this.color,
    this.previousPageTitle,
    this.onPressed,
  })  : _backChevron = null,
        _backLabel = null,
        super(key: key);

  const UnselfNavigationBarBackButton._assemble(
    this._backChevron,
    this._backLabel,
  )   : previousPageTitle = null,
        color = null,
        onPressed = null;

  final Color? color;

  final String? previousPageTitle;

  final VoidCallback? onPressed;

  // ignore: unused_field
  final Widget? _backChevron;

  final Widget? _backLabel;

  @override
  Widget build(BuildContext context) {
    final ModalRoute<dynamic>? currentRoute = ModalRoute.of(context);
    if (onPressed == null) {
      assert(
        currentRoute?.canPop ?? false,
        'UnselfNavigationBarBackButton should only be used in routes that can be popped',
      );
    }

    // TextStyle actionTextStyle = Theme.of(context).textTheme.labelMedium!;
    // if (color != null) {
    //   actionTextStyle = actionTextStyle.copyWith(
    //     color: Theme.of(context).colorScheme.primary,
    //   );
    // }

    // return const Icon(UnSymbols.chevronBack);

    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        IconButton(
          onPressed: () {
            if (onPressed != null) {
              onPressed!();
            } else {
              Navigator.maybePop(context);
            }
          },
          icon: Icon(
            UnSymbols.chevronBack,
            color: Theme.of(context).colorScheme.onSurface,
          ),

          // highlightColor: Colors.transparent,
        ),
        _backLabel ??
            _BackLabel(
              specifiedPreviousTitle: previousPageTitle,
              route: currentRoute,
            ),
      ],
    );

    // cupertino.CupertinoButton(
    //   padding: EdgeInsets.zero,
    //   child: Semantics(
    //     container: true,
    //     excludeSemantics: true,
    //     label: 'Back',
    //     button: true,
    //     child: DefaultTextStyle(
    //       style: actionTextStyle,
    //       child: ConstrainedBox(
    //         constraints:
    //             const BoxConstraints(minWidth: _kNavBarBackButtonTapWidth),
    //         child: Row(
    //           mainAxisSize: MainAxisSize.min,
    //           children: <Widget>[
    //             const Padding(padding: EdgeInsetsDirectional.only(start: 8.0)),
    //             _backChevron ?? const _BackChevron(),
    //             const Padding(padding: EdgeInsetsDirectional.only(start: 6.0)),
    //             Flexible(
    //               child: _backLabel ??
    //                   _BackLabel(
    //                     specifiedPreviousTitle: previousPageTitle,
    //                     route: currentRoute,
    //                   ),
    //             ),
    //           ],
    //         ),
    //       ),
    //     ),
    //   ),
    //   onPressed: () {
    //     if (onPressed != null) {
    //       onPressed!();
    //     } else {
    //       Navigator.maybePop(context);
    //     }
    //   },
    // );
  }
}

// class _BackChevron extends StatelessWidget {
//   const _BackChevron({Key? key}) : super(key: key);

//   @override
//   Widget build(BuildContext context) {
//     final TextDirection textDirection = Directionality.of(context);
//     final TextStyle textStyle = DefaultTextStyle.of(context).style;

//     Widget iconWidget = Padding(
//       padding: const EdgeInsetsDirectional.only(start: 6, end: 2),
//       child: Text.rich(
//         TextSpan(
//           text: String.fromCharCode(cupertino.CupertinoIcons.back.codePoint),
//           style: TextStyle(
//             inherit: false,
//             color: textStyle.color,
//             fontSize: 30.0,
//             fontFamily: cupertino.CupertinoIcons.back.fontFamily,
//             package: cupertino.CupertinoIcons.back.fontPackage,
//           ),
//         ),
//       ),
//     );
//     switch (textDirection) {
//       case TextDirection.rtl:
//         iconWidget = Transform(
//           transform: Matrix4.identity()..scale(-1.0, 1.0, 1.0),
//           alignment: Alignment.center,
//           transformHitTests: false,
//           child: iconWidget,
//         );
//         break;
//       case TextDirection.ltr:
//         break;
//     }

//     return iconWidget;
//   }
// }

class _BackLabel extends StatelessWidget {
  const _BackLabel({
    Key? key,
    required this.specifiedPreviousTitle,
    required this.route,
  }) : super(key: key);

  final String? specifiedPreviousTitle;
  final ModalRoute<dynamic>? route;

  Widget _buildPreviousTitleWidget(
    BuildContext context,
    String? previousTitle,
    Widget? child,
  ) {
    if (previousTitle == null) {
      return const SizedBox(height: 0.0, width: 0.0);
    }

    Text textWidget = Text(
      previousTitle,
      maxLines: 1,
      overflow: TextOverflow.ellipsis,
    );

    // if (previousTitle.length > 12) {
    //   textWidget = const Text('Back');
    // }
    textWidget = const Text('Back');

    return Align(
      alignment: AlignmentDirectional.centerStart,
      widthFactor: 1.0,
      child: textWidget,
    );
  }

  @override
  Widget build(BuildContext context) {
    if (specifiedPreviousTitle != null) {
      return _buildPreviousTitleWidget(context, specifiedPreviousTitle, null);
    } else if (route is cupertino.CupertinoRouteTransitionMixin<dynamic> &&
        !route!.isFirst) {
      final cupertino.CupertinoRouteTransitionMixin<dynamic> cupertinoRoute =
          route! as cupertino.CupertinoRouteTransitionMixin<dynamic>;

      return ValueListenableBuilder<String?>(
        valueListenable: cupertinoRoute.previousTitle,
        builder: _buildPreviousTitleWidget,
      );
    } else {
      return const SizedBox(height: 0.0, width: 0.0);
    }
  }
}

class _TransitionableNavigationBar extends StatelessWidget {
  _TransitionableNavigationBar({
    required this.componentsKeys,
    required this.backgroundColor,
    required this.backButtonTextStyle,
    required this.titleTextStyle,
    required this.largeTitleTextStyle,
    required this.border,
    required this.hasUserMiddle,
    required this.largeExpanded,
    required this.child,
  })  : assert(!largeExpanded || largeTitleTextStyle != null),
        super(key: componentsKeys.navBarBoxKey);

  final _NavigationBarStaticComponentsKeys componentsKeys;
  final Color? backgroundColor;
  final TextStyle backButtonTextStyle;
  final TextStyle titleTextStyle;
  final TextStyle? largeTitleTextStyle;
  final Border? border;
  final bool hasUserMiddle;
  final bool largeExpanded;
  final Widget child;

  RenderBox get renderBox {
    final RenderBox box = componentsKeys.navBarBoxKey.currentContext!
        .findRenderObject()! as RenderBox;
    assert(
      box.attached,
      '_TransitionableNavigationBar.renderBox should be called when building '
      'hero flight shuttles when the from and the to nav bar boxes are already '
      'laid out and painted.',
    );

    return box;
  }

  @override
  Widget build(BuildContext context) {
    assert(() {
      bool inHero = false;
      context.visitAncestorElements((Element ancestor) {
        if (ancestor is ComponentElement) {
          assert(
            ancestor.widget.runtimeType != _NavigationBarTransition,
            '_TransitionableNavigationBar should never re-appear inside '
            '_NavigationBarTransition. Keyed _TransitionableNavigationBar should '
            'only serve as anchor points in routes rather than appearing inside '
            'Hero flights themselves.',
          );
          if (ancestor.widget.runtimeType == Hero) {
            inHero = true;
          }
        }

        return true;
      });
      assert(
        inHero,
        '_TransitionableNavigationBar should only be added as the immediate '
        'child of Hero widgets.',
      );

      return true;
    }());

    return child;
  }
}

class _NavigationBarTransition extends StatelessWidget {
  _NavigationBarTransition({
    required this.animation,
    required this.topNavBar,
    required this.bottomNavBar,
  })  : heightTween = Tween<double>(
          begin: bottomNavBar.renderBox.size.height,
          end: topNavBar.renderBox.size.height,
        ),
        backgroundTween = ColorTween(
          begin: bottomNavBar.backgroundColor,
          end: topNavBar.backgroundColor,
        ),
        borderTween = BorderTween(
          begin: bottomNavBar.border,
          end: topNavBar.border,
        );

  final Animation<double> animation;
  final _TransitionableNavigationBar topNavBar;
  final _TransitionableNavigationBar bottomNavBar;

  final Tween<double> heightTween;
  final ColorTween backgroundTween;
  final BorderTween borderTween;

  @override
  Widget build(BuildContext context) {
    final _NavigationBarComponentsTransition componentsTransition =
        _NavigationBarComponentsTransition(
      animation: animation,
      bottomNavBar: bottomNavBar,
      topNavBar: topNavBar,
      directionality: Directionality.of(context),
    );

    final List<Widget> children = <Widget>[
      AnimatedBuilder(
        animation: animation,
        builder: (BuildContext context, Widget? child) {
          return _wrapWithBackground(
            updateSystemUiOverlay: false,
            backgroundColor: backgroundTween.evaluate(animation)!,
            border: borderTween.evaluate(animation),
            child: SizedBox(
              height: heightTween.evaluate(animation),
              width: double.infinity,
            ),
          );
        },
      ),
      if (componentsTransition.bottomBackChevron != null)
        componentsTransition.bottomBackChevron!,
      if (componentsTransition.bottomBackLabel != null)
        componentsTransition.bottomBackLabel!,
      if (componentsTransition.bottomLeading != null)
        componentsTransition.bottomLeading!,
      if (componentsTransition.bottomMiddle != null)
        componentsTransition.bottomMiddle!,
      if (componentsTransition.bottomLargeTitle != null)
        componentsTransition.bottomLargeTitle!,
      if (componentsTransition.bottomTrailing != null)
        componentsTransition.bottomTrailing!,
      if (componentsTransition.topLeading != null)
        componentsTransition.topLeading!,
      if (componentsTransition.topBackChevron != null)
        componentsTransition.topBackChevron!,
      if (componentsTransition.topBackLabel != null)
        componentsTransition.topBackLabel!,
      if (componentsTransition.topMiddle != null)
        componentsTransition.topMiddle!,
      if (componentsTransition.topLargeTitle != null)
        componentsTransition.topLargeTitle!,
      if (componentsTransition.topTrailing != null)
        componentsTransition.topTrailing!,
    ];

    return SizedBox(
      height: math.max(heightTween.begin!, heightTween.end!) +
          MediaQuery.of(context).padding.top,
      width: double.infinity,
      child: Stack(
        children: children,
      ),
    );
  }
}

@immutable
class _NavigationBarComponentsTransition {
  _NavigationBarComponentsTransition({
    required this.animation,
    required _TransitionableNavigationBar bottomNavBar,
    required _TransitionableNavigationBar topNavBar,
    required TextDirection directionality,
  })  : bottomComponents = bottomNavBar.componentsKeys,
        topComponents = topNavBar.componentsKeys,
        bottomNavBarBox = bottomNavBar.renderBox,
        topNavBarBox = topNavBar.renderBox,
        bottomBackButtonTextStyle = bottomNavBar.backButtonTextStyle,
        topBackButtonTextStyle = topNavBar.backButtonTextStyle,
        bottomTitleTextStyle = bottomNavBar.titleTextStyle,
        topTitleTextStyle = topNavBar.titleTextStyle,
        bottomLargeTitleTextStyle = bottomNavBar.largeTitleTextStyle,
        topLargeTitleTextStyle = topNavBar.largeTitleTextStyle,
        bottomHasUserMiddle = bottomNavBar.hasUserMiddle,
        topHasUserMiddle = topNavBar.hasUserMiddle,
        bottomLargeExpanded = bottomNavBar.largeExpanded,
        topLargeExpanded = topNavBar.largeExpanded,
        transitionBox = bottomNavBar.renderBox.paintBounds
            .expandToInclude(topNavBar.renderBox.paintBounds),
        forwardDirection = directionality == TextDirection.ltr ? 1.0 : -1.0;

  static final Animatable<double> fadeOut = Tween<double>(
    begin: 1.0,
    end: 0.0,
  );
  static final Animatable<double> fadeIn = Tween<double>(
    begin: 0.0,
    end: 1.0,
  );

  final Animation<double> animation;
  final _NavigationBarStaticComponentsKeys bottomComponents;
  final _NavigationBarStaticComponentsKeys topComponents;

  final RenderBox bottomNavBarBox;
  final RenderBox topNavBarBox;

  final TextStyle bottomBackButtonTextStyle;
  final TextStyle topBackButtonTextStyle;
  final TextStyle bottomTitleTextStyle;
  final TextStyle topTitleTextStyle;
  final TextStyle? bottomLargeTitleTextStyle;
  final TextStyle? topLargeTitleTextStyle;

  final bool bottomHasUserMiddle;
  final bool topHasUserMiddle;
  final bool bottomLargeExpanded;
  final bool topLargeExpanded;

  final Rect transitionBox;

  final double forwardDirection;

  RelativeRect positionInTransitionBox(
    GlobalKey key, {
    required RenderBox from,
  }) {
    final RenderBox componentBox =
        key.currentContext!.findRenderObject()! as RenderBox;
    assert(componentBox.attached);

    return RelativeRect.fromRect(
      componentBox.localToGlobal(Offset.zero, ancestor: from) &
          componentBox.size,
      transitionBox,
    );
  }

  _FixedSizeSlidingTransition slideFromLeadingEdge({
    required GlobalKey fromKey,
    required RenderBox fromNavBarBox,
    required GlobalKey toKey,
    required RenderBox toNavBarBox,
    required Widget child,
  }) {
    final RenderBox fromBox =
        fromKey.currentContext!.findRenderObject()! as RenderBox;
    final RenderBox toBox =
        toKey.currentContext!.findRenderObject()! as RenderBox;

    final bool isLTR = forwardDirection > 0;

    final Offset fromAnchorLocal = Offset(
      isLTR ? 0 : fromBox.size.width,
      fromBox.size.height / 2,
    );
    final Offset toAnchorLocal = Offset(
      isLTR ? 0 : toBox.size.width,
      toBox.size.height / 2,
    );
    final Offset fromAnchorInFromBox =
        fromBox.localToGlobal(fromAnchorLocal, ancestor: fromNavBarBox);
    final Offset toAnchorInToBox =
        toBox.localToGlobal(toAnchorLocal, ancestor: toNavBarBox);

    final Offset translation = isLTR
        ? toAnchorInToBox - fromAnchorInFromBox
        : Offset(
              toNavBarBox.size.width - toAnchorInToBox.dx,
              toAnchorInToBox.dy,
            ) -
            Offset(
              fromNavBarBox.size.width - fromAnchorInFromBox.dx,
              fromAnchorInFromBox.dy,
            );

    final RelativeRect fromBoxMargin =
        positionInTransitionBox(fromKey, from: fromNavBarBox);
    final Offset fromOriginInTransitionBox = Offset(
      isLTR ? fromBoxMargin.left : fromBoxMargin.right,
      fromBoxMargin.top,
    );

    final Tween<Offset> anchorMovementInTransitionBox = Tween<Offset>(
      begin: fromOriginInTransitionBox,
      end: fromOriginInTransitionBox + translation,
    );

    return _FixedSizeSlidingTransition(
      isLTR: isLTR,
      offsetAnimation: animation.drive(anchorMovementInTransitionBox),
      size: fromBox.size,
      child: child,
    );
  }

  Animation<double> fadeInFrom(double t, {Curve curve = UnEasing.easeIn}) {
    return animation.drive(fadeIn.chain(
      CurveTween(curve: Interval(t, 1.0, curve: curve)),
    ));
  }

  Animation<double> fadeOutBy(double t, {Curve curve = UnEasing.easeOut}) {
    return animation.drive(fadeOut.chain(
      CurveTween(curve: Interval(0.0, t, curve: curve)),
    ));
  }

  Widget? get bottomLeading {
    final KeyedSubtree? bottomLeading =
        bottomComponents.leadingKey.currentWidget as KeyedSubtree?;

    if (bottomLeading == null) {
      return null;
    }

    return Positioned.fromRelativeRect(
      rect: positionInTransitionBox(
        bottomComponents.leadingKey,
        from: bottomNavBarBox,
      ),
      child: FadeTransition(
        opacity: fadeOutBy(0.4),
        child: bottomLeading.child,
      ),
    );
  }

  Widget? get bottomBackChevron {
    final KeyedSubtree? bottomBackChevron =
        bottomComponents.backChevronKey.currentWidget as KeyedSubtree?;

    if (bottomBackChevron == null) {
      return null;
    }

    return Positioned.fromRelativeRect(
      rect: positionInTransitionBox(
        bottomComponents.backChevronKey,
        from: bottomNavBarBox,
      ),
      child: bottomBackChevron.child,
      // child: FadeTransition(
      //   opacity: fadeOutBy(0.6),
      //   child: DefaultTextStyle(
      //     style: bottomBackButtonTextStyle,
      //     child: bottomBackChevron.child,
      //   ),
      // ),
    );
  }

  Widget? get bottomBackLabel {
    final KeyedSubtree? bottomBackLabel =
        bottomComponents.backLabelKey.currentWidget as KeyedSubtree?;

    if (bottomBackLabel == null) {
      return null;
    }

    final RelativeRect from = positionInTransitionBox(
      bottomComponents.backLabelKey,
      from: bottomNavBarBox,
    );

    final RelativeRectTween positionTween = RelativeRectTween(
      begin: from,
      end: from.shift(
        Offset(
          forwardDirection * (-bottomNavBarBox.size.width / 2.0),
          0.0,
        ),
      ),
    );

    return PositionedTransition(
      rect: animation.drive(positionTween),
      child: FadeTransition(
        opacity: fadeOutBy(0.2),
        child: DefaultTextStyle(
          style: bottomBackButtonTextStyle,
          child: bottomBackLabel.child,
        ),
      ),
    );
  }

  Widget? get bottomMiddle {
    final KeyedSubtree? bottomMiddle =
        bottomComponents.middleKey.currentWidget as KeyedSubtree?;
    final KeyedSubtree? topBackLabel =
        topComponents.backLabelKey.currentWidget as KeyedSubtree?;
    final KeyedSubtree? topLeading =
        topComponents.leadingKey.currentWidget as KeyedSubtree?;

    if (!bottomHasUserMiddle && bottomLargeExpanded) {
      return null;
    }

    if (bottomMiddle != null && topBackLabel != null) {
      return slideFromLeadingEdge(
        fromKey: bottomComponents.middleKey,
        fromNavBarBox: bottomNavBarBox,
        toKey: topComponents.backLabelKey,
        toNavBarBox: topNavBarBox,
        child: FadeTransition(
          opacity: fadeOutBy(bottomHasUserMiddle ? 0.4 : 0.7),
          child: Align(
            alignment: AlignmentDirectional.centerStart,
            child: DefaultTextStyleTransition(
              style: animation.drive(TextStyleTween(
                begin: bottomTitleTextStyle,
                end: topBackButtonTextStyle,
              )),
              child: bottomMiddle.child,
            ),
          ),
        ),
      );
    }

    if (bottomMiddle != null && topLeading != null) {
      return Positioned.fromRelativeRect(
        rect: positionInTransitionBox(
          bottomComponents.middleKey,
          from: bottomNavBarBox,
        ),
        child: FadeTransition(
          opacity: fadeOutBy(bottomHasUserMiddle ? 0.4 : 0.7),
          child: DefaultTextStyle(
            style: bottomTitleTextStyle,
            child: bottomMiddle.child,
          ),
        ),
      );
    }

    return null;
  }

  Widget? get bottomLargeTitle {
    final KeyedSubtree? bottomLargeTitle =
        bottomComponents.largeTitleKey.currentWidget as KeyedSubtree?;
    final KeyedSubtree? topBackLabel =
        topComponents.backLabelKey.currentWidget as KeyedSubtree?;
    final KeyedSubtree? topLeading =
        topComponents.leadingKey.currentWidget as KeyedSubtree?;

    if (bottomLargeTitle == null || !bottomLargeExpanded) {
      return null;
    }

    if (topBackLabel != null) {
      return slideFromLeadingEdge(
        fromKey: bottomComponents.largeTitleKey,
        fromNavBarBox: bottomNavBarBox,
        toKey: topComponents.backLabelKey,
        toNavBarBox: topNavBarBox,
        child: FadeTransition(
          opacity: fadeOutBy(0.6),
          child: Align(
            alignment: AlignmentDirectional.centerStart,
            child: DefaultTextStyleTransition(
              style: animation.drive(TextStyleTween(
                begin: bottomLargeTitleTextStyle,
                end: topBackButtonTextStyle,
              )),
              maxLines: 1,
              overflow: TextOverflow.ellipsis,
              child: bottomLargeTitle.child,
            ),
          ),
        ),
      );
    }

    if (topLeading != null) {
      final RelativeRect from = positionInTransitionBox(
        bottomComponents.largeTitleKey,
        from: bottomNavBarBox,
      );

      final RelativeRectTween positionTween = RelativeRectTween(
        begin: from,
        end: from.shift(
          Offset(
            forwardDirection * bottomNavBarBox.size.width / 4.0,
            0.0,
          ),
        ),
      );

      return PositionedTransition(
        rect: animation.drive(positionTween),
        child: FadeTransition(
          opacity: fadeOutBy(0.4),
          child: DefaultTextStyle(
            style: bottomLargeTitleTextStyle!,
            child: bottomLargeTitle.child,
          ),
        ),
      );
    }

    return null;
  }

  Widget? get bottomTrailing {
    final KeyedSubtree? bottomTrailing =
        bottomComponents.trailingKey.currentWidget as KeyedSubtree?;

    if (bottomTrailing == null) {
      return null;
    }

    return Positioned.fromRelativeRect(
      rect: positionInTransitionBox(
        bottomComponents.trailingKey,
        from: bottomNavBarBox,
      ),
      child: FadeTransition(
        opacity: fadeOutBy(0.6),
        child: bottomTrailing.child,
      ),
    );
  }

  Widget? get topLeading {
    final KeyedSubtree? topLeading =
        topComponents.leadingKey.currentWidget as KeyedSubtree?;

    if (topLeading == null) {
      return null;
    }

    return Positioned.fromRelativeRect(
      rect:
          positionInTransitionBox(topComponents.leadingKey, from: topNavBarBox),
      child: FadeTransition(
        opacity: fadeInFrom(0.6),
        child: topLeading.child,
      ),
    );
  }

  Widget? get topBackChevron {
    final KeyedSubtree? topBackChevron =
        topComponents.backChevronKey.currentWidget as KeyedSubtree?;
    final KeyedSubtree? bottomBackChevron =
        bottomComponents.backChevronKey.currentWidget as KeyedSubtree?;

    if (topBackChevron == null) {
      return null;
    }

    final RelativeRect to = positionInTransitionBox(
      topComponents.backChevronKey,
      from: topNavBarBox,
    );
    RelativeRect from = to;

    if (bottomBackChevron == null) {
      final RenderBox topBackChevronBox =
          topComponents.backChevronKey.currentContext!.findRenderObject()!
              as RenderBox;
      from = to.shift(
        Offset(
          forwardDirection * topBackChevronBox.size.width * 2.0,
          0.0,
        ),
      );
    }

    final RelativeRectTween positionTween = RelativeRectTween(
      begin: from,
      end: to,
    );

    return PositionedTransition(
      rect: animation.drive(positionTween),

      // child: topBackChevron.child,
      child: FadeTransition(
        opacity: fadeInFrom(bottomBackChevron == null ? 0.7 : 0.4),
        child: DefaultTextStyle(
          style: topBackButtonTextStyle,
          child: topBackChevron.child,
        ),
      ),
    );
  }

  Widget? get topBackLabel {
    final KeyedSubtree? bottomMiddle =
        bottomComponents.middleKey.currentWidget as KeyedSubtree?;
    final KeyedSubtree? bottomLargeTitle =
        bottomComponents.largeTitleKey.currentWidget as KeyedSubtree?;
    final KeyedSubtree? topBackLabel =
        topComponents.backLabelKey.currentWidget as KeyedSubtree?;

    if (topBackLabel == null) {
      return null;
    }

    final RenderAnimatedOpacity? topBackLabelOpacity = topComponents
        .backLabelKey.currentContext
        ?.findAncestorRenderObjectOfType<RenderAnimatedOpacity>();

    Animation<double>? midClickOpacity;
    if (topBackLabelOpacity != null &&
        topBackLabelOpacity.opacity.value < 1.0) {
      midClickOpacity = animation.drive(Tween<double>(
        begin: 0.0,
        end: topBackLabelOpacity.opacity.value,
      ));
    }

    if (bottomLargeTitle != null && bottomLargeExpanded) {
      return slideFromLeadingEdge(
        fromKey: bottomComponents.largeTitleKey,
        fromNavBarBox: bottomNavBarBox,
        toKey: topComponents.backLabelKey,
        toNavBarBox: topNavBarBox,
        child: FadeTransition(
          opacity: midClickOpacity ?? fadeInFrom(0.4),
          child: DefaultTextStyleTransition(
            style: animation.drive(TextStyleTween(
              begin: bottomLargeTitleTextStyle,
              end: topBackButtonTextStyle,
            )),
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            child: topBackLabel.child,
          ),
        ),
      );
    }

    if (bottomMiddle != null) {
      return slideFromLeadingEdge(
        fromKey: bottomComponents.middleKey,
        fromNavBarBox: bottomNavBarBox,
        toKey: topComponents.backLabelKey,
        toNavBarBox: topNavBarBox,
        child: FadeTransition(
          opacity: midClickOpacity ?? fadeInFrom(0.3),
          child: DefaultTextStyleTransition(
            style: animation.drive(TextStyleTween(
              begin: bottomTitleTextStyle,
              end: topBackButtonTextStyle,
            )),
            child: topBackLabel.child,
          ),
        ),
      );
    }

    return null;
  }

  Widget? get topMiddle {
    final KeyedSubtree? topMiddle =
        topComponents.middleKey.currentWidget as KeyedSubtree?;

    if (topMiddle == null) {
      return null;
    }

    if (!topHasUserMiddle && topLargeExpanded) {
      return null;
    }

    final RelativeRect to =
        positionInTransitionBox(topComponents.middleKey, from: topNavBarBox);
    final RenderBox toBox = topComponents.middleKey.currentContext!
        .findRenderObject()! as RenderBox;

    final bool isLTR = forwardDirection > 0;

    final Offset toAnchorInTransitionBox = Offset(
      isLTR ? to.left : to.right,
      to.top,
    );

    final Tween<Offset> anchorMovementInTransitionBox = Tween<Offset>(
      begin: Offset(
        topNavBarBox.size.width - toBox.size.width / 2,
        to.top,
      ),
      end: toAnchorInTransitionBox,
    );

    return _FixedSizeSlidingTransition(
      isLTR: isLTR,
      offsetAnimation: animation.drive(anchorMovementInTransitionBox),
      size: toBox.size,
      child: FadeTransition(
        opacity: fadeInFrom(0.25),
        child: DefaultTextStyle(
          style: topTitleTextStyle,
          child: topMiddle.child,
        ),
      ),
    );
  }

  Widget? get topTrailing {
    final KeyedSubtree? topTrailing =
        topComponents.trailingKey.currentWidget as KeyedSubtree?;

    if (topTrailing == null) {
      return null;
    }

    return Positioned.fromRelativeRect(
      rect: positionInTransitionBox(
        topComponents.trailingKey,
        from: topNavBarBox,
      ),
      child: FadeTransition(
        opacity: fadeInFrom(0.4),
        child: topTrailing.child,
      ),
    );
  }

  Widget? get topLargeTitle {
    final KeyedSubtree? topLargeTitle =
        topComponents.largeTitleKey.currentWidget as KeyedSubtree?;

    if (topLargeTitle == null || !topLargeExpanded) {
      return null;
    }

    final RelativeRect to = positionInTransitionBox(
      topComponents.largeTitleKey,
      from: topNavBarBox,
    );

    final RelativeRectTween positionTween = RelativeRectTween(
      begin: to.shift(
        Offset(
          forwardDirection * topNavBarBox.size.width,
          0.0,
        ),
      ),
      end: to,
    );

    return PositionedTransition(
      rect: animation.drive(positionTween),
      child: FadeTransition(
        opacity: fadeInFrom(0.3),
        child: DefaultTextStyle(
          style: topLargeTitleTextStyle!,
          maxLines: 1,
          overflow: TextOverflow.ellipsis,
          child: topLargeTitle.child,
        ),
      ),
    );
  }
}

RectTween _linearTranslateWithLargestRectSizeTween(Rect? begin, Rect? end) {
  final Size largestSize = Size(
    math.max(begin!.size.width, end!.size.width),
    math.max(begin.size.height, end.size.height),
  );

  return RectTween(
    begin: begin.topLeft & largestSize,
    end: end.topLeft & largestSize,
  );
}

Widget _navBarHeroLaunchPadBuilder(
  BuildContext context,
  Size heroSize,
  Widget child,
) {
  assert(child is _TransitionableNavigationBar);

  return Visibility(
    maintainSize: true,
    maintainAnimation: true,
    maintainState: true,
    visible: false,
    child: child,
  );
}

Widget _navBarHeroFlightShuttleBuilder(
  BuildContext flightContext,
  Animation<double> animation,
  HeroFlightDirection flightDirection,
  BuildContext fromHeroContext,
  BuildContext toHeroContext,
) {
  assert(fromHeroContext.widget is Hero);
  assert(toHeroContext.widget is Hero);

  final Hero fromHeroWidget = fromHeroContext.widget as Hero;
  final Hero toHeroWidget = toHeroContext.widget as Hero;

  assert(fromHeroWidget.child is _TransitionableNavigationBar);
  assert(toHeroWidget.child is _TransitionableNavigationBar);

  final _TransitionableNavigationBar fromNavBar =
      fromHeroWidget.child as _TransitionableNavigationBar;
  final _TransitionableNavigationBar toNavBar =
      toHeroWidget.child as _TransitionableNavigationBar;

  assert(
    fromNavBar.componentsKeys.navBarBoxKey.currentContext!.owner != null,
    'The from nav bar to Hero must have been mounted in the previous frame',
  );
  assert(
    toNavBar.componentsKeys.navBarBoxKey.currentContext!.owner != null,
    'The to nav bar to Hero must have been mounted in the previous frame',
  );

  switch (flightDirection) {
    case HeroFlightDirection.push:
      return _NavigationBarTransition(
        animation: animation,
        bottomNavBar: fromNavBar,
        topNavBar: toNavBar,
      );
    case HeroFlightDirection.pop:
      return _NavigationBarTransition(
        animation: animation,
        bottomNavBar: toNavBar,
        topNavBar: fromNavBar,
      );
  }
}
