// ignore_for_file: deprecated_member_use

// import 'package:meta/meta.dart';
// ignore: avoid_web_libraries_in_flutter
import 'dart:html';

import 'package:flutter_inappwebview/flutter_inappwebview.dart';
import 'package:unself_monitoring/unself_monitoring.dart';

/// {@template browser}
/// View of the [Browser].
///
/// Add what it does
/// {@endtemplate}
class Browser extends ChromeSafariBrowser {
  /// {@macro browser}
  Browser({
    this.settings,
    this.analytics,
  });

  // Properties

  final AnalyticService? analytics;
  final ChromeSafariBrowserSettings? settings;

  // Default Settings

  static ChromeSafariBrowserSettings defaultSettings =
      ChromeSafariBrowserSettings(
    shareState: CustomTabsShareState.SHARE_STATE_OFF,
    barCollapsingEnabled: true,
    entersReaderIfAvailable: false,
  );

  // Methods

  void go({
    required String url,
    String eventName = 'BrowserView',
    ChromeSafariBrowserSettings? settings,
  }) {
    analytics?.trackScreen(eventName);
    window.open(url, 'new tab');
  }

  // @override
  // @visibleForOverriding
  // Future<void> open(
  //         {WebUri? url,
  //         Map<String, String>? headers,
  //         List<WebUri>? otherLikelyURLs,
  //         WebUri? referrer,
  //         ChromeSafariBrowserClassOptions? options,
  //         ChromeSafariBrowserSettings? settings}) =>
  //     super.open(
  //       url: url,
  //       headers: headers,
  //       otherLikelyURLs: otherLikelyURLs,
  //       referrer: referrer,
  //       options: options,
  //       settings: settings,
  //     );

  // @override
  // void onOpened() {}

  // @override
  // void onCompletedInitialLoad(bool? didLoadSuccessfully) {}

  // @override
  // void onClosed() {}
}
