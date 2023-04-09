import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-constructor">JsonSchema.fromJson</span> constructor 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
      <span class="name ">JsonSchema.fromJson</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="fromJson-param-data"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">data</span></span></li>
</ol>)
    </section>

    
<section class="desc markdown">
  <p>Creates a <a href="../../un_model/JsonSchema">JsonSchema</a> from Json map</p>
</section>


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">factory JsonSchema.fromJson(Map&lt;String, dynamic&gt; data) =&gt;
    _\$JsonSchemaFromJson(data);</code></pre>
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
  <li><a href="../../un_model/JsonSchema">JsonSchema</a></li>
  <li class="self-crumb">JsonSchema.fromJson factory constructor</li>
</ol>


    <h5>JsonSchema class</h5>
    <ol>

        <li class="section-title"><a href="../../un_model/JsonSchema#constructors">Constructors</a></li>
          <li><a href="../../un_model/JsonSchema/JsonSchema.entity">entity</a></li>
          <li><a href="../../un_model/JsonSchema/JsonSchema.flat">flat</a></li>
          <li><a href="../../un_model/JsonSchema/JsonSchema.fromJson">fromJson</a></li>
          <li><a href="../../un_model/JsonSchema/JsonSchema.struct">struct</a></li>


        <li class="section-title inherited">
          <a href="../../un_model/JsonSchema#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="../../un_model/JsonSchema/copyWith">copyWith</a></li>
          <li class="inherited"><a href="../../un_model/JsonSchema/definition">definition</a></li>
          <li class="inherited"><a href="../../un_model/JsonSchema/extra">extra</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="../../un_model/JsonSchema/name">name</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title inherited"><a href="../../un_model/JsonSchema#instance-methods">Methods</a></li>
          <li class="inherited"><a href="../../un_model/JsonSchema/map">map</a></li>
          <li class="inherited"><a href="../../un_model/JsonSchema/mapOrNull">mapOrNull</a></li>
          <li class="inherited"><a href="../../un_model/JsonSchema/maybeMap">maybeMap</a></li>
          <li class="inherited"><a href="../../un_model/JsonSchema/maybeWhen">maybeWhen</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="../../un_model/JsonSchema/toJson">toJson</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li class="inherited"><a href="../../un_model/JsonSchema/when">when</a></li>
          <li class="inherited"><a href="../../un_model/JsonSchema/whenOrNull">whenOrNull</a></li>

        <li class="section-title inherited"><a href="../../un_model/JsonSchema#operators">Operators</a></li>
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
