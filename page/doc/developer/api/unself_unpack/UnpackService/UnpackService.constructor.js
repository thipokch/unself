import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-constructor">UnpackService</span> constructor 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
      <span class="name ">UnpackService</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-localDb">{<span>required</span> <span class="type-annotation">LocalDatabase</span> <span class="parameter-name">localDb</span>}</span></li>
</ol>)
    </section>

    
<section class="desc markdown">
  <p><a href="../../unself_unpack/UnpackService">UnpackService</a> is a service that unpacks data from a file.</p>
</section>


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">UnpackService({
  required LocalDatabase localDb,
}) : _localDb = localDb;</code></pre>
</section>


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../../index">unself_unpack</a></li>
  <li><a href="../../unself_unpack/unself_unpack">unself_unpack</a></li>
  <li><a href="../../unself_unpack/UnpackService">UnpackService</a></li>
  <li class="self-crumb">UnpackService constructor</li>
</ol>


    <h5>UnpackService class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_unpack/UnpackService#constructors">Constructors</a></li>
          <li><a href="../../unself_unpack/UnpackService/UnpackService.constructor">UnpackService</a></li>


        <li class="section-title">
          <a href="../../unself_unpack/UnpackService#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../unself_unpack/UnpackService/unpacked">unpacked</a></li>

        <li class="section-title"><a href="../../unself_unpack/UnpackService#instance-methods">Methods</a></li>
          <li><a href="../../unself_unpack/UnpackService/load">load</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../../unself_unpack/UnpackService/open">open</a></li>
          <li><a href="../../unself_unpack/UnpackService/start">start</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../unself_unpack/UnpackService#operators">Operators</a></li>
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
