import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-constructor">InfoService</span> constructor 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      const
      <span class="name ">InfoService</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-analytic">{<span class="type-annotation"><a href="../../un_monitoring/AnalyticService">AnalyticService</a>?</span> <span class="parameter-name">analytic</span>}</span></li>
</ol>)
    </section>

    
<section class="desc markdown">
  <p><a href="../../un_monitoring/InfoService">InfoService</a> description</p>
</section>


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">const InfoService({
  AnalyticService? analytic,
}) : _analytic = analytic;</code></pre>
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
  <li><a href="../../un_monitoring/InfoService">InfoService</a></li>
  <li class="self-crumb">InfoService const constructor</li>
</ol>


    <h5>InfoService class</h5>
    <ol>

        <li class="section-title"><a href="../../un_monitoring/InfoService#constructors">Constructors</a></li>
          <li><a href="../../un_monitoring/InfoService/InfoService.constructor">InfoService</a></li>


        <li class="section-title">
          <a href="../../un_monitoring/InfoService#instance-properties">Properties</a>
        </li>
          <li><a href="../../un_monitoring/InfoService/analyticId">analyticId</a></li>
          <li><a href="../../un_monitoring/InfoService/appName">appName</a></li>
          <li><a href="../../un_monitoring/InfoService/buildNumber">buildNumber</a></li>
          <li><a href="../../un_monitoring/InfoService/buildSignature">buildSignature</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li><a href="../../un_monitoring/InfoService/installerStore">installerStore</a></li>
          <li><a href="../../un_monitoring/InfoService/packageName">packageName</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../un_monitoring/InfoService/version">version</a></li>

        <li class="section-title inherited"><a href="../../un_monitoring/InfoService#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../un_monitoring/InfoService#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>


        <li class="section-title"><a href="../../un_monitoring/InfoService#static-properties">Static properties</a></li>
          <li><a href="../../un_monitoring/InfoService/package">package</a></li>


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
