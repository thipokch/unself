import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">build</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
  <div>
    <ol class="annotation-list">
        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>
    </ol>
  </div>

<span class="returntype"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></span>
<span class="name ">build</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="build-param-context"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a></span> <span class="parameter-name">context</span>, </span></li>
<li><span class="parameter" id="build-param-state"><span class="type-annotation"><a href="https://pub.dev/documentation/go_router/6.0.1/go_router/GoRouterState-class.html">GoRouterState</a></span> <span class="parameter-name">state</span></span></li>
</ol>)

      <div class="features"><span class="feature">override</span></div>

    </section>
    
<section class="desc markdown">
  <p>Creates the <a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a> for <code>this</code> route.</p>
<p>Subclasses must override one of <a href="../../unself_app/SettingsDataRoute/build">build</a>, <a href="../../unself_app/SettingsDataRoute/buildPage">buildPage</a>, or
<a href="https://pub.dev/documentation/go_router/6.0.1/go_router/GoRouteData/redirect.html">redirect</a>.</p>
<p>Corresponds to <a href="https://pub.dev/documentation/go_router/6.0.1/go_router/GoRoute/builder.html">GoRoute.builder</a>.</p>
</section>


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@override
Widget build(context, state) =&gt; const SettingsDataPage();</code></pre>
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
  <li><a href="../../unself_app/SettingsDataRoute/SettingsDataRoute">SettingsDataRoute</a></li>
  <li class="self-crumb">build method</li>
</ol>


    <h5>SettingsDataRoute class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_app/SettingsDataRoute/SettingsDataRoute#constructors">Constructors</a></li>
          <li><a href="../../unself_app/SettingsDataRoute/SettingsDataRoute.constructor">SettingsDataRoute</a></li>


        <li class="section-title inherited">
          <a href="../../unself_app/SettingsDataRoute/SettingsDataRoute#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title"><a href="../../unself_app/SettingsDataRoute/SettingsDataRoute#instance-methods">Methods</a></li>
          <li><a href="../../unself_app/SettingsDataRoute/build">build</a></li>
          <li><a href="../../unself_app/SettingsDataRoute/buildPage">buildPage</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/go_router/6.0.1/go_router/GoRouteData/redirect.html">redirect</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../unself_app/SettingsDataRoute/SettingsDataRoute#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>


        <li class="section-title"><a href="../../unself_app/SettingsDataRoute/SettingsDataRoute#static-properties">Static properties</a></li>
          <li><a href="../../unself_app/SettingsDataRoute/name">name</a></li>


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
