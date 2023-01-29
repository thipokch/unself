// ignore_for_file: avoid_web_libraries_in_flutter

import 'dart:html';

import 'package:flutter_inappwebview/flutter_inappwebview.dart';

import 'native.dart' as native;

class Browser extends native.Browser {
  /// {@macro browser}
  Browser({
    super.settings,
    super.analytics,
  });

  @override
  void go({
    required String url,
    String eventName = 'BrowserView',
    ChromeSafariBrowserSettings? settings,
  }) {
    analytics?.trackScreen(eventName);
    window.open(url, 'new tab');
  }
}
