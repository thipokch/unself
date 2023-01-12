part of 'nav_bar.dart';

class UnselfExtendedSliverNavigationBar extends StatefulWidget {
  const UnselfExtendedSliverNavigationBar({
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
  State<UnselfExtendedSliverNavigationBar> createState() =>
      _UnselfExtendedSliverNavigationBarState();
}

class _UnselfExtendedSliverNavigationBarState
    extends State<UnselfExtendedSliverNavigationBar> {
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
        delegate: _ExtendedNavigationBarSliverDelegate(
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
              MediaQuery.of(context).padding.top + _kNavBarPersistentHeight,
          alwaysShowMiddle: widget.middle != null,
          stretchConfiguration:
              widget.stretch ? OverScrollHeaderStretchConfiguration() : null,
        ),
      ),
    );
  }
}

class _ExtendedNavigationBarSliverDelegate
    extends SliverPersistentHeaderDelegate with DiagnosticableTreeMixin {
  _ExtendedNavigationBarSliverDelegate({
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

    final _ExtendedPersistentNavigationBar persistentNavigationBar =
        _ExtendedPersistentNavigationBar(
      components: components,
      padding: padding,
      middleVisible: alwaysShowMiddle ? null : !showLargeTitle,
    );

    final Widget navBar = _wrapWithBackground(
      border: border,
      backgroundColor: Theme.of(context).colorScheme.background,
      brightness: brightness,
      child: LayoutBuilder(
        builder: (BuildContext context, BoxConstraints constraints) {
          return DefaultTextStyle(
            style: Theme.of(context).textTheme.bodyMedium!,
            child: Stack(
              fit: StackFit.expand,
              children: <Widget>[
                Positioned(
                  top: 0.0,
                  left: 0.0,
                  right: 0.0,
                  bottom: 0.0,
                  child: OverflowBox(
                    minHeight: 0.0,
                    maxHeight: double.infinity,
                    alignment: AlignmentDirectional.bottomStart,
                    child: Padding(
                      padding: const EdgeInsetsDirectional.only(
                        start: 16.0,
                        end: 16.0,
                        bottom: 8.0,
                      ),
                      child: SafeArea(
                        top: false,
                        bottom: false,
                        child: Semantics(
                          header: true,
                          child: DefaultTextStyle(
                            style: Theme.of(context).textTheme.titleLarge!,
                            maxLines: 2,
                            overflow: TextOverflow.ellipsis,
                            child: Builder(builder: (_) {
                              double maxScale = 1.15;

                              if (components.largeTitle != null &&
                                  components.largeTitle?.child is Text) {
                                final Text largeTitleText =
                                    components.largeTitle!.child as Text;

                                final TextPainter painter = TextPainter(
                                  textDirection: Directionality.of(context),
                                  text: TextSpan(
                                    style:
                                        Theme.of(context).textTheme.titleLarge!,
                                    text: largeTitleText.data,
                                  ),
                                );

                                painter.layout();

                                maxScale = ((constraints.maxWidth -
                                            _kNavBarEdgePadding) /
                                        painter.maxIntrinsicWidth)
                                    .clamp(1.0, 1.15);
                              }

                              return Transform.scale(
                                scale: shrinkOffset > 0
                                    ? 1.0 - (0.25 * shrinkOffset / maxExtent)
                                    : (1.0 +
                                            (constraints.maxHeight -
                                                    maxExtent) /
                                                maxExtent *
                                                0.12)
                                        .clamp(1.0, maxScale),
                                // : 1.00 - (shrinkOffset / maxExtent),
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
        largeTitleTextStyle: Theme.of(context).textTheme.titleLarge!,
        border: border,
        hasUserMiddle: userMiddle != null,
        largeExpanded: showLargeTitle,
        child: navBar,
      ),
    );
  }

  @override
  bool shouldRebuild(_ExtendedNavigationBarSliverDelegate oldDelegate) {
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

class _ExtendedPersistentNavigationBar extends StatelessWidget {
  const _ExtendedPersistentNavigationBar({
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
      middleSpacing: 6.0,
    );

    paddedToolbar = Row(
      mainAxisSize: MainAxisSize.max,
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: EdgeInsets.all(MediaQuery.of(context).padding.top / 3),
          child: components.leading,
        ),
        Padding(
          padding: EdgeInsets.all(MediaQuery.of(context).padding.top / 3),
          child: components.trailing,
        ),
      ],
    );

    return SizedBox(
      height: _kNavBarPersistentHeight + MediaQuery.of(context).padding.top,
      child: SafeArea(
        top: false,
        bottom: false,
        child: paddedToolbar,
      ),
    );
  }
}
