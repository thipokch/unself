import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">didPush</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
  <div>
    <ol class="annotation-list">
        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>
    </ol>
  </div>

<span class="returntype">void</span>
<span class="name ">didPush</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="didPush-param-route"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Route-class.html">Route</a></span> <span class="parameter-name">route</span>, </span></li>
<li><span class="parameter" id="didPush-param-previousRoute"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Route-class.html">Route</a>?</span> <span class="parameter-name">previousRoute</span></span></li>
</ol>)

      <div class="features"><span class="feature">override</span></div>

    </section>
    
<section class="desc markdown">
  <p>The <a href="https://api.flutter.dev/flutter/widgets/Navigator-class.html">Navigator</a> pushed <code>route</code>.</p>
<p>The route immediately below that one, and thus the previously active
route, is <code>previousRoute</code>.</p>
</section>


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@override
void didPush(Route&lt;dynamic&gt; route, Route&lt;dynamic&gt;? previousRoute) {
  super.didPush(route, previousRoute);
  if (routeFilter(route)) {
    _sendScreenView(route);
  }
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
  <li><a href="../../index">un_app</a></li>
  <li><a href="../../un_app/un_app">un_app</a></li>
  <li><a href="../../un_app/AnalyticRouteObserver">AnalyticRouteObserver</a></li>
  <li class="self-crumb">didPush method</li>
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
