import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">whenOrNull&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
  <div>
    <ol class="annotation-list">
        <li>@<a href="https://pub.dev/documentation/meta/1.8.0/meta/optionalTypeArgs-constant.html">optionalTypeArgs</a></li>
    </ol>
  </div>

<span class="returntype">TResult?</span>
<span class="name ">whenOrNull</span>&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;(<wbr><ol class="parameter-list"><li><span class="parameter" id="whenOrNull-param-json">{<span class="type-annotation">TResult?</span> <span class="parameter-name">json</span>(<ol class="parameter-list"><li><span class="parameter" id="param-id"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span>, </span></li>
<li><span class="parameter" id="param-part"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">part</span>, </span></li>
<li><span class="parameter" id="param-schema"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../../unself_model/JsonSchema">JsonSchema</a></span>&gt;</span></span> <span class="parameter-name">schema</span>, </span></li>
<li><span class="parameter" id="param-extra"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">extra</span></span></li>
</ol>
)?, </span></li>
<li><span class="parameter" id="whenOrNull-param-zipJson"><span class="type-annotation">TResult?</span> <span class="parameter-name">zipJson</span>(<ol class="parameter-list"><li><span class="parameter" id="param-id"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span>, </span></li>
<li><span class="parameter" id="param-part"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">part</span>, </span></li>
<li><span class="parameter" id="param-schema"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../../unself_model/JsonSchema">JsonSchema</a></span>&gt;</span></span> <span class="parameter-name">schema</span>, </span></li>
<li><span class="parameter" id="param-extra"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">extra</span></span></li>
</ol>
)?}</span></li>
</ol>)

      <div class="features"><span class="feature">inherited</span></div>

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@optionalTypeArgs
TResult? whenOrNull&lt;TResult extends Object?&gt;({
  TResult? Function(String id, String part, List&lt;JsonSchema&gt; schema,
          @JsonExtra() Map&lt;String, dynamic&gt; extra)?
      json,
  TResult? Function(String id, String part, List&lt;JsonSchema&gt; schema,
          @JsonExtra() Map&lt;String, dynamic&gt; extra)?
      zipJson,
}) =&gt;
    throw _privateConstructorUsedError;</code></pre>
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
  <li><a href="../../unself_model/ArchiveSchemaPart">ArchiveSchemaPart</a></li>
  <li class="self-crumb">whenOrNull&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt; method</li>
</ol>


    <h5>ArchiveSchemaPart class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_model/ArchiveSchemaPart#constructors">Constructors</a></li>
          <li><a href="../../unself_model/ArchiveSchemaPart/ArchiveSchemaPart.fromJson">fromJson</a></li>
          <li><a href="../../unself_model/ArchiveSchemaPart/ArchiveSchemaPart.json">json</a></li>
          <li><a href="../../unself_model/ArchiveSchemaPart/ArchiveSchemaPart.zipJson">zipJson</a></li>


        <li class="section-title inherited">
          <a href="../../unself_model/ArchiveSchemaPart#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/copyWith">copyWith</a></li>
          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/extra">extra</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/id">id</a></li>
          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/part">part</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/schema">schema</a></li>

        <li class="section-title"><a href="../../unself_model/ArchiveSchemaPart#instance-methods">Methods</a></li>
          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/map">map</a></li>
          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/mapOrNull">mapOrNull</a></li>
          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/maybeMap">maybeMap</a></li>
          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/maybeWhen">maybeWhen</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../../unself_model/ArchiveSchemaPart/read">read</a></li>
          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/toJson">toJson</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/when">when</a></li>
          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/whenOrNull">whenOrNull</a></li>

        <li class="section-title inherited"><a href="../../unself_model/ArchiveSchemaPart#operators">Operators</a></li>
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
