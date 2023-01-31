import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">build</span> static method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      

<span class="returntype"><a href="https://pub.dev/documentation/go_router/6.0.1/go_router/GoRouter-class.html">GoRouter</a></span>
<span class="name ">build</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="build-param-observers">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/widgets/NavigatorObserver-class.html">NavigatorObserver</a></span>&gt;</span>?</span> <span class="parameter-name">observers</span>}</span></li>
</ol>)

      

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">static GoRouter build({List&lt;NavigatorObserver&gt;? observers}) =&gt; GoRouter(
      observers: observers,
      debugLogDiagnostics: kDebugMode,
      navigatorKey: defaultNavigator,
      initialLocation: defaultLocation,
      routes: defaultRoutes,
    );</code></pre>
</section>


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../../index">unself_app</a></li>
  <li><a href="../../unself_app/unself_app">unself_app</a></li>
  <li><a href="../../unself_app/AppRouter/AppRouter">AppRouter</a></li>
  <li class="self-crumb">build static method</li>
</ol>


    <h5>AppRouter class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_app/AppRouter/AppRouter#constructors">Constructors</a></li>
          <li><a href="../../unself_app/AppRouter/AppRouter.constructor">AppRouter</a></li>


        <li class="section-title inherited">
          <a href="../../unself_app/AppRouter/AppRouter#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title inherited"><a href="../../unself_app/AppRouter/AppRouter#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../unself_app/AppRouter/AppRouter#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>


        <li class="section-title"><a href="../../unself_app/AppRouter/AppRouter#static-properties">Static properties</a></li>
          <li><a href="../../unself_app/AppRouter/defaultLocation">defaultLocation</a></li>
          <li><a href="../../unself_app/AppRouter/defaultNavigator">defaultNavigator</a></li>
          <li><a href="../../unself_app/AppRouter/defaultRoutes">defaultRoutes</a></li>

        <li class="section-title"><a href="../../unself_app/AppRouter/AppRouter#static-methods">Static methods</a></li>
          <li><a href="../../unself_app/AppRouter/build">build</a></li>

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
