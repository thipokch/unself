import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-property">defaultNavigator</span> property 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

        <section class="multi-line-signature">
          
          <a href="https://api.flutter.dev/flutter/widgets/GlobalKey-class.html">GlobalKey</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/widgets/NavigatorState-class.html">NavigatorState</a></span>&gt;</span>
          <span class="name ">defaultNavigator</span>
          <div class="features"><span class="feature">final</span></div>

        </section>
        

        
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">static final defaultNavigator =
    GlobalKey&lt;NavigatorState&gt;(debugLabel: 'AppRouter');</code></pre>
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
  <li><a href="../../un_app/AppRouter">AppRouter</a></li>
  <li class="self-crumb">defaultNavigator property</li>
</ol>


    <h5>AppRouter class</h5>
    <ol>

        <li class="section-title"><a href="../../un_app/AppRouter#constructors">Constructors</a></li>
          <li><a href="../../un_app/AppRouter/AppRouter.constructor">AppRouter</a></li>


        <li class="section-title inherited">
          <a href="../../un_app/AppRouter#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title inherited"><a href="../../un_app/AppRouter#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../un_app/AppRouter#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>


        <li class="section-title"><a href="../../un_app/AppRouter#static-properties">Static properties</a></li>
          <li><a href="../../un_app/AppRouter/defaultLocation">defaultLocation</a></li>
          <li><a href="../../un_app/AppRouter/defaultNavigator">defaultNavigator</a></li>
          <li><a href="../../un_app/AppRouter/defaultRoutes">defaultRoutes</a></li>

        <li class="section-title"><a href="../../un_app/AppRouter#static-methods">Static methods</a></li>
          <li><a href="../../un_app/AppRouter/build">build</a></li>

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
