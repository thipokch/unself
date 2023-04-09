import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-constructor">JsonRef.fromJson</span> constructor 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
      <span class="name ">JsonRef.fromJson</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="fromJson-param-data"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">data</span></span></li>
</ol>)
    </section>

    
<section class="desc markdown">
  <p>Creates a <a href="../../un_model/JsonRef">JsonRef</a> from Json map</p>
</section>


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">factory JsonRef.fromJson(Map&lt;String, dynamic&gt; data) =&gt;
    _\$JsonRefFromJson(data);</code></pre>
</section>


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../../index">un_model</a></li>
  <li><a href="../../un_model/un_model">un_model</a></li>
  <li><a href="../../un_model/JsonRef">JsonRef</a></li>
  <li class="self-crumb">JsonRef.fromJson factory constructor</li>
</ol>


    <h5>JsonRef class</h5>
    <ol>

        <li class="section-title"><a href="../../un_model/JsonRef#constructors">Constructors</a></li>
          <li><a href="../../un_model/JsonRef/JsonRef.fromJson">fromJson</a></li>
          <li><a href="../../un_model/JsonRef/JsonRef.ref">ref</a></li>
          <li><a href="../../un_model/JsonRef/JsonRef.union">union</a></li>


        <li class="section-title inherited">
          <a href="../../un_model/JsonRef#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title"><a href="../../un_model/JsonRef#instance-methods">Methods</a></li>
          <li><a href="../../un_model/JsonRef/getScheme">getScheme</a></li>
          <li class="inherited"><a href="../../un_model/JsonRef/map">map</a></li>
          <li class="inherited"><a href="../../un_model/JsonRef/mapOrNull">mapOrNull</a></li>
          <li class="inherited"><a href="../../un_model/JsonRef/maybeMap">maybeMap</a></li>
          <li class="inherited"><a href="../../un_model/JsonRef/maybeWhen">maybeWhen</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="../../un_model/JsonRef/toJson">toJson</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li><a href="../../un_model/JsonRef/useId">useId</a></li>
          <li class="inherited"><a href="../../un_model/JsonRef/when">when</a></li>
          <li class="inherited"><a href="../../un_model/JsonRef/whenOrNull">whenOrNull</a></li>

        <li class="section-title inherited"><a href="../../un_model/JsonRef#operators">Operators</a></li>
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
