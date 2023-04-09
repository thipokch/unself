import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">buildPage</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
  <div>
    <ol class="annotation-list">
        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>
    </ol>
  </div>

<span class="returntype"><a href="https://api.flutter.dev/flutter/widgets/Page-class.html">Page</a><span class="signature">&lt;<wbr><span class="type-parameter">void</span>&gt;</span></span>
<span class="name ">buildPage</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="buildPage-param-context"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a></span> <span class="parameter-name">context</span>, </span></li>
<li><span class="parameter" id="buildPage-param-state"><span class="type-annotation"><a href="https://pub.dev/documentation/go_router/6.0.1/go_router/GoRouterState-class.html">GoRouterState</a></span> <span class="parameter-name">state</span></span></li>
</ol>)

      <div class="features"><span class="feature">override</span></div>

    </section>
    
<section class="desc markdown">
  <p>A page builder for this route.</p>
<p>Subclasses can override this function to provide a custom <a href="https://api.flutter.dev/flutter/widgets/Page-class.html">Page</a>.</p>
<p>Subclasses must override one of <a href="../../unself_app/UnpackAssistantRoute/build">build</a>, <a href="../../unself_app/UnpackAssistantRoute/buildPage">buildPage</a> or
<a href="https://pub.dev/documentation/go_router/6.0.1/go_router/GoRouteData/redirect.html">redirect</a>.</p>
<p>Corresponds to <a href="https://pub.dev/documentation/go_router/6.0.1/go_router/GoRoute/pageBuilder.html">GoRoute.pageBuilder</a>.</p>
<p>By default, returns a <a href="https://api.flutter.dev/flutter/widgets/Page-class.html">Page</a> instance that is ignored, causing a default
<a href="https://api.flutter.dev/flutter/widgets/Page-class.html">Page</a> implementation to be used with the results of <a href="../../unself_app/UnpackAssistantRoute/build">build</a>.</p>
</section>


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@override
Page&lt;void&gt; buildPage(context, state) =&gt;
    UnTransitionPage(child: build(context, state));</code></pre>
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
  <li><a href="../../unself_app/UnpackAssistantRoute">UnpackAssistantRoute</a></li>
  <li class="self-crumb">buildPage method</li>
</ol>


    <h5>UnpackAssistantRoute class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_app/UnpackAssistantRoute#constructors">Constructors</a></li>
          <li><a href="../../unself_app/UnpackAssistantRoute/UnpackAssistantRoute.constructor">UnpackAssistantRoute</a></li>


        <li class="section-title inherited">
          <a href="../../unself_app/UnpackAssistantRoute#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title"><a href="../../unself_app/UnpackAssistantRoute#instance-methods">Methods</a></li>
          <li><a href="../../unself_app/UnpackAssistantRoute/build">build</a></li>
          <li><a href="../../unself_app/UnpackAssistantRoute/buildPage">buildPage</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/go_router/6.0.1/go_router/GoRouteData/redirect.html">redirect</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../unself_app/UnpackAssistantRoute#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>


        <li class="section-title"><a href="../../unself_app/UnpackAssistantRoute#static-properties">Static properties</a></li>
          <li><a href="../../unself_app/UnpackAssistantRoute/name">name</a></li>


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
