import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-constructor">Edge</span> constructor 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      const
      <span class="name ">Edge</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-id">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">id</span>, </span></li>
<li><span class="parameter" id="-param-specSlug"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">specSlug</span>, </span></li>
<li><span class="parameter" id="-param-sourceId"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">sourceId</span>, </span></li>
<li><span class="parameter" id="-param-targetId"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">targetId</span>, </span></li>
<li><span class="parameter" id="-param-properties"><span>@<a href="../../un_model_converter/JsonEmptyMap">JsonEmptyMap</a>()</span> <span>@<a href="https://pub.dev/documentation/freezed_annotation/2.2.0/freezed_annotation/Default-class.html">Default</a>({})</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">properties</span>}</span></li>
</ol>)
    </section>

    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">const factory Edge({
  String? id,
  required String specSlug,
  String? sourceId,
  String? targetId,
  @JsonEmptyMap() @Default({}) Map&lt;String, dynamic&gt; properties,
}) = _Edge;</code></pre>
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
  <li><a href="../../un_model/Edge">Edge</a></li>
  <li class="self-crumb">Edge const constructor</li>
</ol>


    <h5>Edge class</h5>
    <ol>

        <li class="section-title"><a href="../../un_model/Edge#constructors">Constructors</a></li>
          <li><a href="../../un_model/Edge/Edge.constructor">Edge</a></li>
          <li><a href="../../un_model/Edge/Edge.fromJson">fromJson</a></li>


        <li class="section-title">
          <a href="../../un_model/Edge#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="../../un_model/Edge/copyWith">copyWith</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="../../un_model/Edge/id">id</a></li>
          <li class="inherited"><a href="../../un_model/Edge/properties">properties</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li class="inherited"><a href="../../un_model/Edge/sourceId">sourceId</a></li>
          <li class="inherited"><a href="../../un_model/Edge/specSlug">specSlug</a></li>
          <li class="inherited"><a href="../../un_model/Edge/targetId">targetId</a></li>
          <li><a href="../../un_model/Edge/type">type</a></li>

        <li class="section-title inherited"><a href="../../un_model/Edge#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="../../un_model/Edge/toJson">toJson</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../un_model/Edge#operators">Operators</a></li>
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
