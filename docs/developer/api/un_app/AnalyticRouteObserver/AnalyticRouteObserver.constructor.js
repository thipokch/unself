import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-constructor">AnalyticRouteObserver</span> constructor 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
      <span class="name ">AnalyticRouteObserver</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-analytic">{<span>required</span> <span class="type-annotation">AnalyticService</span> <span class="parameter-name">analytic</span>, </span></li>
<li><span class="parameter" id="-param-nameExtractor"><span class="type-annotation"><a href="../../un_app/ScreenNameExtractor">ScreenNameExtractor</a></span> <span class="parameter-name">nameExtractor</span> = <span class="default-value">defaultNameExtractor</span>, </span></li>
<li><span class="parameter" id="-param-routeFilter"><span class="type-annotation"><a href="../../un_app/RouteFilter">RouteFilter</a></span> <span class="parameter-name">routeFilter</span> = <span class="default-value">defaultRouteFilter</span>, </span></li>
<li><span class="parameter" id="-param-onError"><span class="type-annotation">dynamic</span> <span class="parameter-name">onError</span>(<ol class="parameter-list"><li><span class="parameter" id="param-error"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/services/PlatformException-class.html">PlatformException</a></span> <span class="parameter-name">error</span></span></li>
</ol>
)?}</span></li>
</ol>)
    </section>

    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">AnalyticRouteObserver({
  required this.analytic,
  this.nameExtractor = defaultNameExtractor,
  this.routeFilter = defaultRouteFilter,
  Function(PlatformException error)? onError,
}) : _onError = onError;</code></pre>
</section>


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../../index">un_app</a></li>
  <li><a href="../../un_app/un_app">un_app</a></li>
  <li><a href="../../un_app/AnalyticRouteObserver">AnalyticRouteObserver</a></li>
  <li class="self-crumb">AnalyticRouteObserver constructor</li>
</ol>


    <h5>AnalyticRouteObserver class</h5>
    <ol>

        <li class="section-title"><a href="../../un_app/AnalyticRouteObserver#constructors">Constructors</a></li>
          <li><a href="../../un_app/AnalyticRouteObserver/AnalyticRouteObserver.constructor">AnalyticRouteObserver</a></li>


        <li class="section-title">
          <a href="../../un_app/AnalyticRouteObserver#instance-properties">Properties</a>
        </li>
          <li><a href="../../un_app/AnalyticRouteObserver/analytic">analytic</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li><a href="../../un_app/AnalyticRouteObserver/nameExtractor">nameExtractor</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/NavigatorObserver/navigator.html">navigator</a></li>
          <li><a href="../../un_app/AnalyticRouteObserver/routeFilter">routeFilter</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title"><a href="../../un_app/AnalyticRouteObserver#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/RouteObserver/debugObservingRoute.html">debugObservingRoute</a></li>
          <li><a href="../../un_app/AnalyticRouteObserver/didPop">didPop</a></li>
          <li><a href="../../un_app/AnalyticRouteObserver/didPush">didPush</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/NavigatorObserver/didRemove.html">didRemove</a></li>
          <li><a href="../../un_app/AnalyticRouteObserver/didReplace">didReplace</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/NavigatorObserver/didStartUserGesture.html">didStartUserGesture</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/NavigatorObserver/didStopUserGesture.html">didStopUserGesture</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/RouteObserver/subscribe.html">subscribe</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/RouteObserver/unsubscribe.html">unsubscribe</a></li>

        <li class="section-title inherited"><a href="../../un_app/AnalyticRouteObserver#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>



        <li class="section-title"><a href="../../un_app/AnalyticRouteObserver#static-methods">Static methods</a></li>
          <li><a href="../../un_app/AnalyticRouteObserver/defaultNameExtractor">defaultNameExtractor</a></li>
          <li><a href="../../un_app/AnalyticRouteObserver/defaultRouteFilter">defaultRouteFilter</a></li>

</ol>

  </div><!--/.sidebar-offcanvas-left-->

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
  </div><!--/.sidebar-offcanvas-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
