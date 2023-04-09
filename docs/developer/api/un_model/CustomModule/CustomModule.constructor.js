import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-constructor">CustomModule</span> constructor 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      const
      <span class="name ">CustomModule</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-id">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span>, </span></li>
<li><span class="parameter" id="-param-name"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span></li>
<li><span class="parameter" id="-param-fileMatcher"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Pattern-class.html">Pattern</a></span> <span class="parameter-name">fileMatcher</span>, </span></li>
<li><span class="parameter" id="-param-extract"><span>required</span> <span class="type-annotation"><a href="../../un_model/ExtractSpec">ExtractSpec</a></span> <span class="parameter-name">extract</span>, </span></li>
<li><span class="parameter" id="-param-transform"><span>required</span> <span class="type-annotation"><a href="../../un_model/TransformSpec">TransformSpec</a></span> <span class="parameter-name">transform</span>, </span></li>
<li><span class="parameter" id="-param-load"><span>required</span> <span class="type-annotation"><a href="../../un_model/LoadSpec">LoadSpec</a></span> <span class="parameter-name">load</span>}</span></li>
</ol>)
    </section>

    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">const factory CustomModule(
    {required final String id,
    required final String name,
    required final Pattern fileMatcher,
    required final ExtractSpec extract,
    required final TransformSpec transform,
    required final LoadSpec load}) = _\$CustomModule;</code></pre>
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
  <li><a href="../../un_model/CustomModule">CustomModule</a></li>
  <li class="self-crumb">CustomModule const constructor</li>
</ol>


    <h5>CustomModule class</h5>
    <ol>

        <li class="section-title"><a href="../../un_model/CustomModule#constructors">Constructors</a></li>
          <li><a href="../../un_model/CustomModule/CustomModule.constructor">CustomModule</a></li>
          <li><a href="../../un_model/CustomModule/CustomModule.fromJson">fromJson</a></li>


        <li class="section-title">
          <a href="../../un_model/CustomModule#instance-properties">Properties</a>
        </li>
          <li><a href="../../un_model/CustomModule/copyWith">copyWith</a></li>
          <li><a href="../../un_model/CustomModule/extract">extract</a></li>
          <li class="inherited"><a href="../../un_model/ModuleSpec/extractSpec">extractSpec</a></li>
          <li><a href="../../un_model/CustomModule/fileMatcher">fileMatcher</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li><a href="../../un_model/CustomModule/id">id</a></li>
          <li><a href="../../un_model/CustomModule/load">load</a></li>
          <li class="inherited"><a href="../../un_model/ModuleSpec/loadSpec">loadSpec</a></li>
          <li><a href="../../un_model/CustomModule/name">name</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../un_model/CustomModule/transform">transform</a></li>
          <li class="inherited"><a href="../../un_model/ModuleSpec/transformSpec">transformSpec</a></li>

        <li class="section-title inherited"><a href="../../un_model/CustomModule#instance-methods">Methods</a></li>
          <li class="inherited"><a href="../../un_model/ModuleSpec/map">map</a></li>
          <li class="inherited"><a href="../../un_model/ModuleSpec/mapOrNull">mapOrNull</a></li>
          <li class="inherited"><a href="../../un_model/ModuleSpec/maybeMap">maybeMap</a></li>
          <li class="inherited"><a href="../../un_model/ModuleSpec/maybeWhen">maybeWhen</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="../../un_model/ModuleSpec/toJson">toJson</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li class="inherited"><a href="../../un_model/ModuleSpec/when">when</a></li>
          <li class="inherited"><a href="../../un_model/ModuleSpec/whenOrNull">whenOrNull</a></li>

        <li class="section-title inherited"><a href="../../un_model/CustomModule#operators">Operators</a></li>
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
