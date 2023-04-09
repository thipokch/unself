import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-property">definition</span> property 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>


        
<section id="getter">

<section class="multi-line-signature">
  
  <div>
    <ol class="annotation-list">
        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>
    </ol>
  </div>
  <span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="../../un_model/IJsonSchema">IJsonSchema</a></span>&gt;</span></span>
  <span class="name ">definition</span>
  

</section>




<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@override
Map&lt;String, IJsonSchema&gt; get definition;</code></pre>
</section>

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
  <li><a href="../../un_model/Entity">Entity</a></li>
  <li class="self-crumb">definition property</li>
</ol>


    <h5>Entity class</h5>
    <ol>

        <li class="section-title"><a href="../../un_model/Entity#constructors">Constructors</a></li>
          <li><a href="../../un_model/Entity/Entity.constructor">Entity</a></li>
          <li><a href="../../un_model/Entity/Entity.fromJson">fromJson</a></li>


        <li class="section-title">
          <a href="../../un_model/Entity#instance-properties">Properties</a>
        </li>
          <li><a href="../../un_model/Entity/copyWith">copyWith</a></li>
          <li><a href="../../un_model/Entity/definition">definition</a></li>
          <li><a href="../../un_model/Entity/extra">extra</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li><a href="../../un_model/Entity/key">key</a></li>
          <li><a href="../../un_model/Entity/name">name</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title inherited"><a href="../../un_model/Entity#instance-methods">Methods</a></li>
          <li class="inherited"><a href="../../un_model/JsonSchema/map">map</a></li>
          <li class="inherited"><a href="../../un_model/JsonSchema/mapOrNull">mapOrNull</a></li>
          <li class="inherited"><a href="../../un_model/JsonSchema/maybeMap">maybeMap</a></li>
          <li class="inherited"><a href="../../un_model/JsonSchema/maybeWhen">maybeWhen</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="../../un_model/JsonSchema/toJson">toJson</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li class="inherited"><a href="../../un_model/JsonSchema/when">when</a></li>
          <li class="inherited"><a href="../../un_model/JsonSchema/whenOrNull">whenOrNull</a></li>

        <li class="section-title inherited"><a href="../../un_model/Entity#operators">Operators</a></li>
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
