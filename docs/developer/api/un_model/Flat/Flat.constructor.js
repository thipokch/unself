import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-constructor">Flat</span> constructor 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      const
      <span class="name ">Flat</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span></li>
<li><span class="parameter" id="-param-definition">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="../../un_model/IJsonSchema">IJsonSchema</a></span>&gt;</span></span> <span class="parameter-name">definition</span>, </span></li>
<li><span class="parameter" id="-param-key"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">key</span>, </span></li>
<li><span class="parameter" id="-param-entityPath"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">entityPath</span>, </span></li>
<li><span class="parameter" id="-param-includePath"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span>&gt;</span></span> <span class="parameter-name">includePath</span>, </span></li>
<li><span class="parameter" id="-param-addMissingKeys"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">addMissingKeys</span>, </span></li>
<li><span class="parameter" id="-param-extra"><span>@<a href="../../un_model_converter/JsonEmptyMap">JsonEmptyMap</a>()</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">extra</span>}</span></li>
</ol>)
    </section>

    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">const factory Flat(final String name,
    {final Map&lt;String, IJsonSchema&gt; definition,
    final String key,
    final List&lt;String&gt; entityPath,
    final List&lt;List&lt;String&gt;&gt; includePath,
    final bool addMissingKeys,
    @JsonEmptyMap() final Map&lt;String, dynamic&gt; extra}) = _\$Flat;</code></pre>
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
  <li><a href="../../un_model/Flat">Flat</a></li>
  <li class="self-crumb">Flat const constructor</li>
</ol>


    <h5>Flat class</h5>
    <ol>

        <li class="section-title"><a href="../../un_model/Flat#constructors">Constructors</a></li>
          <li><a href="../../un_model/Flat/Flat.constructor">Flat</a></li>
          <li><a href="../../un_model/Flat/Flat.fromJson">fromJson</a></li>


        <li class="section-title">
          <a href="../../un_model/Flat#instance-properties">Properties</a>
        </li>
          <li><a href="../../un_model/Flat/addMissingKeys">addMissingKeys</a></li>
          <li><a href="../../un_model/Flat/copyWith">copyWith</a></li>
          <li><a href="../../un_model/Flat/definition">definition</a></li>
          <li><a href="../../un_model/Flat/entityPath">entityPath</a></li>
          <li><a href="../../un_model/Flat/extra">extra</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li><a href="../../un_model/Flat/includePath">includePath</a></li>
          <li><a href="../../un_model/Flat/key">key</a></li>
          <li><a href="../../un_model/Flat/name">name</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title inherited"><a href="../../un_model/Flat#instance-methods">Methods</a></li>
          <li class="inherited"><a href="../../un_model/JsonSchema/map">map</a></li>
          <li class="inherited"><a href="../../un_model/JsonSchema/mapOrNull">mapOrNull</a></li>
          <li class="inherited"><a href="../../un_model/JsonSchema/maybeMap">maybeMap</a></li>
          <li class="inherited"><a href="../../un_model/JsonSchema/maybeWhen">maybeWhen</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="../../un_model/JsonSchema/toJson">toJson</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li class="inherited"><a href="../../un_model/JsonSchema/when">when</a></li>
          <li class="inherited"><a href="../../un_model/JsonSchema/whenOrNull">whenOrNull</a></li>

        <li class="section-title inherited"><a href="../../un_model/Flat#operators">Operators</a></li>
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
