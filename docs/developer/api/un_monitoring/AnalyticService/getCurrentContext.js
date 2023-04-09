import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">getCurrentContext</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      

<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter">AnalyticContext?</span>&gt;</span></span>
<span class="name ">getCurrentContext</span>(<wbr>)

      

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">Future&lt;AnalyticContext?&gt; getCurrentContext() async =&gt; _rudder
    .getRudderContext()
    .then((value) =&gt; value != null ? AnalyticContext(map: value) : null);</code></pre>
</section>


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../../index">un_monitoring</a></li>
  <li><a href="../../un_monitoring/un_monitoring">un_monitoring</a></li>
  <li><a href="../../un_monitoring/AnalyticService">AnalyticService</a></li>
  <li class="self-crumb">getCurrentContext method</li>
</ol>


    <h5>AnalyticService class</h5>
    <ol>

        <li class="section-title"><a href="../../un_monitoring/AnalyticService#constructors">Constructors</a></li>
          <li><a href="../../un_monitoring/AnalyticService/AnalyticService.constructor">AnalyticService</a></li>


        <li class="section-title">
          <a href="../../un_monitoring/AnalyticService#instance-properties">Properties</a>
        </li>
          <li><a href="../../un_monitoring/AnalyticService/context">context</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title"><a href="../../un_monitoring/AnalyticService#instance-methods">Methods</a></li>
          <li><a href="../../un_monitoring/AnalyticService/getCurrentContext">getCurrentContext</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li><a href="../../un_monitoring/AnalyticService/trackEvent">trackEvent</a></li>
          <li><a href="../../un_monitoring/AnalyticService/trackScreen">trackScreen</a></li>

        <li class="section-title inherited"><a href="../../un_monitoring/AnalyticService#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>




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
