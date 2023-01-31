import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">go</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      

<span class="returntype">void</span>
<span class="name ">go</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="go-param-url">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">url</span>, </span></li>
<li><span class="parameter" id="go-param-eventName"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">eventName</span> = <span class="default-value">'BrowserView'</span>, </span></li>
<li><span class="parameter" id="go-param-settings"><span class="type-annotation"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowserSettings-class.html">ChromeSafariBrowserSettings</a>?</span> <span class="parameter-name">settings</span>}</span></li>
</ol>)

      

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">void go({
  required String url,
  String eventName = 'BrowserView',
  ChromeSafariBrowserSettings? settings,
}) {
  analytics?.trackScreen(eventName);
  // TODO: Implement for web
  // kIsWeb ? window.open(url, 'new tab')

  open(
    url: WebUri(url),
    settings: settings ?? this.settings ?? defaultSettings,
  );
}</code></pre>
</section>


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../../index">unself_browser</a></li>
  <li><a href="../../unself_browser/unself_browser">unself_browser</a></li>
  <li><a href="../../unself_browser/Browser/Browser">Browser</a></li>
  <li class="self-crumb">go method</li>
</ol>


    <h5>Browser class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_browser/Browser/Browser#constructors">Constructors</a></li>
          <li><a href="../../unself_browser/Browser/Browser.constructor">Browser</a></li>


        <li class="section-title">
          <a href="../../unself_browser/Browser/Browser#instance-properties">Properties</a>
        </li>
          <li><a href="../../unself_browser/Browser/analytics">analytics</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/id.html">id</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../unself_browser/Browser/settings">settings</a></li>

        <li class="section-title"><a href="../../unself_browser/Browser/Browser#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/addMenuItem.html">addMenuItem</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/addMenuItems.html">addMenuItems</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/close.html">close</a></li>
          <li><a href="../../unself_browser/Browser/go">go</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/isOpened.html">isOpened</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/launchUrl.html">launchUrl</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/mayLaunchUrl.html">mayLaunchUrl</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/onClosed.html">onClosed</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/onCompletedInitialLoad.html">onCompletedInitialLoad</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/onInitialLoadDidRedirect.html">onInitialLoadDidRedirect</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/onNavigationEvent.html">onNavigationEvent</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/onOpened.html">onOpened</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/onRelationshipValidationResult.html">onRelationshipValidationResult</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/onServiceConnected.html">onServiceConnected</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/onWillOpenInBrowser.html">onWillOpenInBrowser</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/open.html">open</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/setActionButton.html">setActionButton</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/setSecondaryToolbar.html">setSecondaryToolbar</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/throwIsAlreadyOpened.html">throwIsAlreadyOpened</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/throwIsNotOpened.html">throwIsNotOpened</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/updateActionButton.html">updateActionButton</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/updateSecondaryToolbar.html">updateSecondaryToolbar</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/validateRelationship.html">validateRelationship</a></li>

        <li class="section-title inherited"><a href="../../unself_browser/Browser/Browser#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>


        <li class="section-title"><a href="../../unself_browser/Browser/Browser#static-properties">Static properties</a></li>
          <li><a href="../../unself_browser/Browser/defaultSettings">defaultSettings</a></li>


</ol>

  </div><!--/.sidebar-offcanvas-->

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
  </div><!--/.sidebar-offcanvas-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
