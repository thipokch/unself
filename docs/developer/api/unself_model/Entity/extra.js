import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-property">extra</span> property 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>


        
<section id="getter">

<section class="multi-line-signature">
  
  <div>
    <ol class="annotation-list">
        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>
        <li>@<a href="../../unself_model/JsonExtra">JsonExtra</a>()</li>
    </ol>
  </div>
  <span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span>
  <span class="name ">extra</span>
  

</section>


<section class="desc markdown">
  <p><a href="../../unself_model/Entity/extra">extra</a> is a map of additional properties.</p>
</section>


<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@override

/// [extra] is a map of additional properties.
@JsonExtra()
Map&lt;String, dynamic&gt; get extra;</code></pre>
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
  <li><a href="../../index">unself_model</a></li>
  <li><a href="../../unself_model/unself_model">unself_model</a></li>
  <li><a href="../../unself_model/Entity">Entity</a></li>
  <li class="self-crumb">extra property</li>
</ol>


    <h5>Entity class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_model/Entity#constructors">Constructors</a></li>
          <li><a href="../../unself_model/Entity/Entity.constructor">Entity</a></li>
          <li><a href="../../unself_model/Entity/Entity.fromJson">fromJson</a></li>


        <li class="section-title">
          <a href="../../unself_model/Entity#instance-properties">Properties</a>
        </li>
          <li><a href="../../unself_model/Entity/copyWith">copyWith</a></li>
          <li><a href="../../unself_model/Entity/definition">definition</a></li>
          <li><a href="../../unself_model/Entity/extra">extra</a></li>
          <li><a href="../../unself_model/Entity/fieldMap">fieldMap</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li><a href="../../unself_model/Entity/key">key</a></li>
          <li><a href="../../unself_model/Entity/name">name</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title inherited"><a href="../../unself_model/Entity#instance-methods">Methods</a></li>
          <li class="inherited"><a href="../../unself_model/JsonSchema/map">map</a></li>
          <li class="inherited"><a href="../../unself_model/JsonSchema/mapOrNull">mapOrNull</a></li>
          <li class="inherited"><a href="../../unself_model/JsonSchema/maybeMap">maybeMap</a></li>
          <li class="inherited"><a href="../../unself_model/JsonSchema/maybeWhen">maybeWhen</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="../../unself_model/JsonSchema/toJson">toJson</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li class="inherited"><a href="../../unself_model/JsonSchema/when">when</a></li>
          <li class="inherited"><a href="../../unself_model/JsonSchema/whenOrNull">whenOrNull</a></li>

        <li class="section-title inherited"><a href="../../unself_model/Entity#operators">Operators</a></li>
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
