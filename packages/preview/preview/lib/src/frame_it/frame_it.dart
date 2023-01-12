import 'package:device_frame/device_frame.dart';
import 'package:flutter/material.dart';

class FrameIt extends StatelessWidget {
  final Widget screen;

  final DeviceInfo device;

  final Orientation orientation;

  final bool isFrameVisible;

  const FrameIt({
    super.key,
    required this.device,
    required this.screen,
    this.orientation = Orientation.portrait,
    this.isFrameVisible = true,
  });

  static MediaQueryData mediaQuery({
    required BuildContext context,
    required DeviceInfo? info,
    required Orientation orientation,
  }) {
    final mediaQuery = MediaQuery.of(context);
    final isRotated = info?.isLandscape(orientation) ?? false;
    final viewPadding = isRotated
        ? (info?.rotatedSafeAreas ?? info?.safeAreas)
        : (info?.safeAreas ?? mediaQuery.padding);

    final screenSize = info != null ? info.screenSize : mediaQuery.size;
    final width = isRotated ? screenSize.height : screenSize.width;
    final height = isRotated ? screenSize.width : screenSize.height;

    return mediaQuery.copyWith(
      size: Size(width, height),
      padding: viewPadding,
      viewInsets: EdgeInsets.zero,
      viewPadding: viewPadding,
      devicePixelRatio: info?.pixelRatio ?? mediaQuery.devicePixelRatio,
    );
  }

  ThemeData _theme(BuildContext context) {
    final density = [
      DeviceType.desktop,
      DeviceType.laptop,
    ].contains(device.identifier.type)
        ? VisualDensity.compact
        : null;
    return Theme.of(context).copyWith(
      platform: device.identifier.platform,
      visualDensity: density,
    );
  }

  Widget _screen(BuildContext context, DeviceInfo? info) {
    final mediaQuery = MediaQuery.of(context);
    final isRotated = info?.isLandscape(orientation) ?? false;
    final screenSize = info != null ? info.screenSize : mediaQuery.size;
    final width = isRotated ? screenSize.height : screenSize.width;
    final height = isRotated ? screenSize.width : screenSize.height;

    return RotatedBox(
      quarterTurns: isRotated ? 1 : 0,
      child: SizedBox(
        width: width,
        height: height,
        child: MediaQuery(
          data: DeviceFrame.mediaQuery(
            info: info,
            orientation: orientation,
            context: context,
          ),
          child: Theme(
            data: _theme(context),
            child: screen,
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final frameSize = device.frameSize;
    final bounds = device.screenPath.getBounds();
    final stack = SizedBox(
      width: isFrameVisible ? frameSize.width : bounds.width,
      height: isFrameVisible ? frameSize.height : bounds.height,
      child: Stack(
        children: [
          if (isFrameVisible)
            Positioned.fill(
              key: const Key('frame'),
              child: CustomPaint(
                key: ValueKey(device.identifier),
                painter: device.framePainter,
              ),
            ),
          Positioned(
            key: const Key('Screen'),
            left: 71 / 2,
            top: 63 / 2,
            // left: isFrameVisible ? bounds.left : 0,
            // top: isFrameVisible ? bounds.top : 0,
            // width: bounds.width,
            // height: bounds.height,
            child: ClipPath(
              clipper: _ScreenClipper(
                device.screenPath,
              ),
              child: FittedBox(
                child: _screen(context, device),
              ),
            ),
          ),
          // IgnorePointer(
          //   child: Image.network(
          //     'https://github.com/fastlane/frameit-frames/raw/gh-pages/latest/iPhone%2013%20Mini%20Starlight.png',
          //   ),
          // ),
        ],
      ),
    );

    final isRotated = device.isLandscape(orientation);

    return FittedBox(
      child: RotatedBox(
        quarterTurns: isRotated ? -1 : 0,
        child: stack,
      ),
    );
  }
}

class _ScreenClipper extends CustomClipper<Path> {
  const _ScreenClipper(this.path);

  final Path? path;

  @override
  Path getClip(Size size) {
    final path = (this.path ?? (Path()..addRect(Offset.zero & size)));
    final bounds = path.getBounds();
    var transform = Matrix4.translationValues(-bounds.left, -bounds.top, 0);

    return path.transform(transform.storage);
  }

  @override
  bool shouldReclip(_ScreenClipper oldClipper) {
    return oldClipper.path != path;
  }
}
