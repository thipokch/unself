import 'package:flutter/material.dart';
import 'package:widgetbook/widgetbook.dart';

DeviceInfo toInfo(Device device) {
  final map = {
    Apple.iPhone12Mini.name: Devices.ios.iPhone12Mini,
    Apple.iPhone12.name: Devices.ios.iPhone12,
    Apple.iPhone12ProMax.name: Devices.ios.iPhone12ProMax,
    Apple.iPhone13Mini.name: Devices.ios.iPhone13Mini,
    Apple.iPhone13.name: Devices.ios.iPhone13,
    Apple.iPhone13ProMax.name: Devices.ios.iPhone13ProMax,
    Apple.iPhoneSE2020.name: Devices.ios.iPhoneSE,
    // not sure what to map this device to
    // Apple.iPadAir9Inch.name : Devices.ios.iPadAir4,
    Apple.iPad10Inch.name: Devices.ios.iPad,
    Apple.iPadPro11Inch.name: Devices.ios.iPadPro11Inches,
    Apple.macBook13Inch.name: Devices.macOS.macBookPro,
  };

  final mappedDevice = map[device.name] ??
      DeviceInfo.genericPhone(
        platform: TargetPlatform.iOS,
        id: 'custom',
        name: 'custom',
        screenSize: Size(
          device.resolution.logicalSize.width,
          device.resolution.logicalSize.height,
        ),
        pixelRatio: device.resolution.scaleFactor,
      );

  return mappedDevice;
}

DeviceFrameBuilderFunction previewFrameBuilder = (
  BuildContext context,
  Device device,
  WidgetbookFrame frame,
  Orientation orientation,
  Widget child,
) {
  // Generate using dev
  if (frame == UnPreviewFrame.deviceFrame) {
    final deviceInfo = toInfo(device);
    return DeviceFrame(
      orientation: orientation,
      device: deviceInfo,
      screen: child,
    );
  }

  // Otherwise, return the default frame (none)

  return WidgetbookDeviceFrame(
    orientation: orientation,
    device: device,
    child: child,
  );
};

abstract class UnPreviewFrame {
  static const frames = <WidgetbookFrame>[
    none,
    deviceFrame,
    // frameIt,
  ];

  static const devices = <Device>[
    Apple.iPhone12Mini,
    Apple.iPhone12,
    Apple.iPhone12ProMax,
    Apple.iPhone13Mini,
    Apple.iPhone13,
    Apple.iPhone13ProMax,
    Apple.iPhoneSE2020,
    Apple.iPad10Inch,
    Apple.iPadPro11Inch,
    Apple.macBook13Inch,
  ];

  static const none = WidgetbookFrame(
    name: 'None',
    allowsDevices: true,
  );

  static const deviceFrame = WidgetbookFrame(
    name: 'Device Frame',
    allowsDevices: true,
  );

  static const frameIt = WidgetbookFrame(
    name: 'Frame It',
    allowsDevices: true,
  );
}
