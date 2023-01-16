import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:unself_style/unself_style.dart';

class UnSliverArtBar extends StatefulWidget {
  final Widget emoji;
  final Widget name;
  final Widget? description;
  final Widget? action;
  final Widget? background;

  final Widget? leading;
  final Widget? trailing;
  final bool isImmersive;

  const UnSliverArtBar({
    super.key,
    required this.emoji,
    required this.name,
    required this.description,
    required this.action,
    this.background,
    this.leading,
    this.trailing,
    this.isImmersive = false,
  });

  @override
  State<UnSliverArtBar> createState() => _UnSliverArtBarState();
}

class _UnSliverArtBarState extends State<UnSliverArtBar>
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

    return SliverAppBar(
      actions: widget.trailing != null ? [widget.trailing!] : null,
      leading: widget.leading ??
          (ModalRoute.of(context)?.canPop ?? false
              ? IconButton(
                  onPressed: () => Navigator.of(context).pop(),
                  icon: const Icon(UnSymbols.chevronCircleBackFilled),
                  iconSize: 32.00,
                  color: colorScheme.primary,
                )
              : null),
      pinned: true,
      expandedHeight: 440,
      stretch: true,
      primary: !widget.isImmersive,
      onStretchTrigger: () async {
        UnHaptics.select();
      },
      flexibleSpace: FlexibleSpaceBar(
        expandedTitleScale: 1.0,
        background: widget.background,
        // background: CustomPaint(
        //   painter: AirbrushPainter(
        //     context: context,
        //     frame: 400,
        //     colorLighter: colorScheme.tertiaryContainer,
        //     colorLight: colorScheme.secondaryContainer,
        //     colorDark: colorScheme.primaryContainer,
        //     colorDarker: colorScheme.background,
        //   ),
        // ),
        title: Builder(
          builder: (context) {
            final FlexibleSpaceBarSettings settings =
                context.dependOnInheritedWidgetOfExactType<
                    FlexibleSpaceBarSettings>()!;

            final double deltaExtent = settings.maxExtent - settings.minExtent;

            final double t = clampDouble(
              1.0 - (settings.currentExtent - settings.minExtent) / deltaExtent,
              0.0,
              1.0,
            );

            animationController.value = t;

            return Column(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                Opacity(
                  opacity: 1.0 - UnEasing.easeOutExpo.transform(t),
                  child: Padding(
                    padding: const EdgeInsets.all(UnSpaces.S),
                    child: Padding(
                      padding: EdgeInsets.all(32.0 * (1.0 - t)),
                      child: SizedBox(
                        height: 125 * (1.0 - t),
                        width: 125 * (1.0 - t),
                        child: widget.emoji,
                      ),
                    ),
                  ),
                ),
                DefaultTextStyleTransition(
                  style: TextStyleTween(
                    begin: textTheme.headlineSmall!.copyWith(
                      color: colorScheme.onBackground,
                    ),
                    end: textTheme.titleMedium!.copyWith(
                      color: colorScheme.onBackground,
                    ),
                  ).animate(animationController),
                  child: widget.name,
                ),
                Opacity(
                  opacity: 1 - UnEasing.easeOutExpo.transform(t),
                  child: ClipRect(
                    child: Align(
                      alignment: Alignment.topCenter,
                      heightFactor: 1 - t,
                      child: Padding(
                        padding: const EdgeInsets.all(UnSpaces.S),
                        child: Column(
                          children: [
                            if (widget.description != null)
                              DefaultTextStyle(
                                style: textTheme.labelMedium!.copyWith(
                                  color: colorScheme.onBackground,
                                ),
                                child: widget.description!,
                              ),
                            if (widget.action != null)
                              Padding(
                                padding: const EdgeInsets.all(UnSpaces.L),
                                child: SizedBox(
                                  width: MediaQuery.of(context).size.width / 2,
                                  child: widget.action!,
                                ),
                              ),
                          ],
                        ),
                      ),
                    ),
                  ),
                ),
              ],
            );
          },
        ),
      ),
    );
  }
}
