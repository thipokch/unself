import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-constructor">AnalyticService</span> constructor 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
      <span class="name ">AnalyticService</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-rudder">{<span>required</span> <span class="type-annotation"><a href="https://pub.dev/documentation/rudder_sdk_flutter/2.3.0/RudderController/RudderController-class.html">RudderController</a></span> <span class="parameter-name">rudder</span>}</span></li>
</ol>)
    </section>

    
<section class="desc markdown">
  <p><a href="../../unself_monitoring/AnalyticService">AnalyticService</a> description</p>
</section>


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">AnalyticService({required RudderController rudder}) : _rudder = rudder {
  if (Firebase.apps.isEmpty) {
    throw Exception(
      "Firebase Analytics must be initialized for RudderStacks' Firebase Integration.",
    );
  }

  getCurrentContext().then((value) =&gt; _context = value);
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
  <li><a href="../../index">unself_monitoring</a></li>
  <li><a href="../../unself_monitoring/unself_monitoring">unself_monitoring</a></li>
  <li><a href="../../unself_monitoring/AnalyticService">AnalyticService</a></li>
  <li class="self-crumb">AnalyticService constructor</li>
</ol>


    <h5>AnalyticService class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_monitoring/AnalyticService#constructors">Constructors</a></li>
          <li><a href="../../unself_monitoring/AnalyticService/AnalyticService.constructor">AnalyticService</a></li>


        <li class="section-title">
          <a href="../../unself_monitoring/AnalyticService#instance-properties">Properties</a>
        </li>
          <li><a href="../../unself_monitoring/AnalyticService/context">context</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title"><a href="../../unself_monitoring/AnalyticService#instance-methods">Methods</a></li>
          <li><a href="../../unself_monitoring/AnalyticService/getCurrentContext">getCurrentContext</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li><a href="../../unself_monitoring/AnalyticService/trackEvent">trackEvent</a></li>
          <li><a href="../../unself_monitoring/AnalyticService/trackScreen">trackScreen</a></li>

        <li class="section-title inherited"><a href="../../unself_monitoring/AnalyticService#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>




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
