import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-property">name</span> property 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

        <section class="multi-line-signature">
          
          <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>
          <span class="name ">name</span>
          <div class="features"><span class="feature">read / write</span></div>

        </section>
        

        
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">static String name = "SettingsAppearance";</code></pre>
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
  <li><a href="../../un_app/SettingsAppearanceRoute">SettingsAppearanceRoute</a></li>
  <li class="self-crumb">name property</li>
</ol>


    <h5>SettingsAppearanceRoute class</h5>
    <ol>

        <li class="section-title"><a href="../../un_app/SettingsAppearanceRoute#constructors">Constructors</a></li>
          <li><a href="../../un_app/SettingsAppearanceRoute/SettingsAppearanceRoute.constructor">SettingsAppearanceRoute</a></li>


        <li class="section-title inherited">
          <a href="../../un_app/SettingsAppearanceRoute#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title"><a href="../../un_app/SettingsAppearanceRoute#instance-methods">Methods</a></li>
          <li><a href="../../un_app/SettingsAppearanceRoute/build">build</a></li>
          <li><a href="../../un_app/SettingsAppearanceRoute/buildPage">buildPage</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/go_router/6.0.1/go_router/GoRouteData/redirect.html">redirect</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../un_app/SettingsAppearanceRoute#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>


        <li class="section-title"><a href="../../un_app/SettingsAppearanceRoute#static-properties">Static properties</a></li>
          <li><a href="../../un_app/SettingsAppearanceRoute/name">name</a></li>


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
