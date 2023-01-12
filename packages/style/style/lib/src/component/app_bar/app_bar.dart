// ignore_for_file: unused_field, unused_element

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:unself_style/unself_style.dart';

export 'art_bar.dart';

class UnSliverAppBar extends StatefulWidget {
  final String? emoji;
  final Widget title;
  final Widget? description;
  final bool implyLeading;
  final Widget? leading;
  final Widget? trailing;
  final bool isImmersive;
  final bool isCollapseCentered;

  const UnSliverAppBar({
    super.key,
    this.emoji,
    required this.title,
    this.description,
    this.implyLeading = true,
    this.leading,
    this.trailing,
    this.isImmersive = false,
    this.isCollapseCentered = true,
  });

  @override
  State<UnSliverAppBar> createState() => _UnSliverAppBarState();
}

class _UnSliverAppBarState extends State<UnSliverAppBar>
    with TickerProviderStateMixin {
  late AnimationController animationController;

  @override
  void initState() {
    animationController = AnimationController(vsync: this);

    if (widget.isImmersive) {
      SystemChrome.setEnabledSystemUIMode(SystemUiMode.immersive);
    }

    super.initState();
  }

  @override
  void dispose() {
    animationController.dispose();
    SystemChrome.setEnabledSystemUIMode(SystemUiMode.edgeToEdge);
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final themeData = Theme.of(context);
    final colorScheme = themeData.colorScheme;
    final textTheme = themeData.textTheme;

    final hasLeading =
        widget.implyLeading && (ModalRoute.of(context)?.canPop ?? false);

    final hasDescription = widget.description != null;

    return SliverAppBar.large(
      actions: widget.trailing != null ? [widget.trailing!] : null,
      leading: widget.leading ??
          (hasLeading
              ? AspectRatio(
                  aspectRatio: 1.0,
                  child: IconButton(
                    onPressed: () => Navigator.of(context).pop(),
                    icon: const Icon(UnSymbols.chevronBack),
                    iconSize: UnSymbolSizes.M,
                  ),
                )
              : Container()),
      automaticallyImplyLeading: true,
      pinned: true,
      stretch: true,
      primary: !widget.isImmersive,
      flexibleSpace: Builder(builder: (context) {
        final FlexibleSpaceBarSettings settings = context
            .dependOnInheritedWidgetOfExactType<FlexibleSpaceBarSettings>()!;

        final double topPadding = MediaQuery.of(context).viewPadding.top;
        final double collapsedHeight = settings.minExtent - topPadding;
        final double scrollUnderHeight =
            settings.maxExtent - settings.minExtent;

        final _ScrollUnderFlexibleConfig config =
            _MediumScrollUnderFlexibleConfig(context);

        final bool isCollapsed = settings.isScrolledUnder ?? false;

        final double deltaExtent = settings.maxExtent - settings.minExtent;

        final double t = clampDouble(
          1.0 - (settings.currentExtent - settings.minExtent) / deltaExtent,
          0.0,
          1.0,
        );

        animationController.value = t;

        return Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.end,
          mainAxisSize: MainAxisSize.max,
          children: <Widget>[
            Padding(
              padding: EdgeInsets.only(
                top: hasDescription ? topPadding + (25 * (1 - t)) : topPadding,
              ),
              child: Container(
                height: collapsedHeight,
                padding: widget.isCollapseCentered
                    ? config.collapsedCenteredTitlePadding
                    : config.collapsedTitlePadding,
                child: hasDescription
                    ? DefaultTextStyleTransition(
                        style: TextStyleTween(
                          begin: config.expandedTextStyle,
                          end: config.collapsedTextStyle,
                        ).animate(animationController),
                        child: Row(
                          mainAxisSize: MainAxisSize.max,
                          children: [
                            widget.title,
                          ],
                        ),
                      )
                    : AnimatedOpacity(
                        opacity: isCollapsed ? 1 : 0,
                        duration: const Duration(milliseconds: 500),
                        curve: const Cubic(0.2, 0.0, 0.0, 1.0),
                        child: Align(
                          alignment: widget.isCollapseCentered
                              ? Alignment.center
                              : AlignmentDirectional.centerStart,
                          child: DefaultTextStyle(
                            style: config.collapsedTextStyle!,
                            child: widget.title,
                          ),
                        ),
                      ),
              ),
            ),
            Flexible(
              child: ClipRect(
                child: OverflowBox(
                  minHeight: scrollUnderHeight,
                  maxHeight: scrollUnderHeight,
                  alignment: Alignment.bottomLeft,
                  child: Container(
                    alignment: AlignmentDirectional.bottomStart,
                    padding: config.expandedTitlePadding,
                    child: DefaultTextStyle(
                      style: hasDescription
                          ? textTheme.labelLarge!.copyWith(
                              color: colorScheme.onSurface.withOpacity(0.45),
                            )
                          : config.expandedTextStyle!,
                      textAlign: hasDescription ? TextAlign.start : null,
                      child:
                          hasDescription ? widget.description! : widget.title,
                    ),
                  ),
                ),
              ),
            ),
          ],
        );
      }),
    );
  }
}

mixin _ScrollUnderFlexibleConfig {
  TextStyle? get collapsedTextStyle;
  TextStyle? get expandedTextStyle;
  EdgeInsetsGeometry? get collapsedTitlePadding;
  EdgeInsetsGeometry? get collapsedCenteredTitlePadding;
  EdgeInsetsGeometry? get expandedTitlePadding;
}

class _MediumScrollUnderFlexibleConfig with _ScrollUnderFlexibleConfig {
  _MediumScrollUnderFlexibleConfig(this.context);

  final BuildContext context;
  late final ThemeData _theme = Theme.of(context);
  late final ColorScheme _colors = _theme.colorScheme;
  late final TextTheme _textTheme = _theme.textTheme;

  static const double collapsedHeight = 64.0;
  static const double expandedHeight = 112.0;

  @override
  TextStyle? get collapsedTextStyle =>
      _textTheme.titleMedium?.apply(color: _colors.onSurface);

  @override
  TextStyle? get expandedTextStyle =>
      _textTheme.titleLarge?.apply(color: _colors.onSurface);

  @override
  EdgeInsetsGeometry? get collapsedTitlePadding =>
      const EdgeInsetsDirectional.fromSTEB(48, 0, 16, 0);

  @override
  EdgeInsetsGeometry? get collapsedCenteredTitlePadding =>
      const EdgeInsets.fromLTRB(16, 0, 16, 0);

  @override
  EdgeInsetsGeometry? get expandedTitlePadding =>
      const EdgeInsets.fromLTRB(16, 0, 16, 20);
}

class _LargeScrollUnderFlexibleConfig with _ScrollUnderFlexibleConfig {
  _LargeScrollUnderFlexibleConfig(this.context);

  final BuildContext context;
  late final ThemeData _theme = Theme.of(context);
  late final ColorScheme _colors = _theme.colorScheme;
  late final TextTheme _textTheme = _theme.textTheme;

  static const double collapsedHeight = 64.0;
  static const double expandedHeight = 152.0;

  @override
  TextStyle? get collapsedTextStyle =>
      _textTheme.titleMedium?.apply(color: _colors.onSurface);

  @override
  TextStyle? get expandedTextStyle =>
      _textTheme.headlineMedium?.apply(color: _colors.onSurface);

  @override
  EdgeInsetsGeometry? get collapsedTitlePadding =>
      const EdgeInsetsDirectional.fromSTEB(48, 0, 16, 0);

  @override
  EdgeInsetsGeometry? get collapsedCenteredTitlePadding =>
      const EdgeInsets.fromLTRB(16, 0, 16, 0);

  @override
  EdgeInsetsGeometry? get expandedTitlePadding =>
      const EdgeInsets.fromLTRB(16, 0, 16, 28);
}
