import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">map&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
  <div>
    <ol class="annotation-list">
        <li>@<a href="https://pub.dev/documentation/meta/1.8.0/meta/optionalTypeArgs-constant.html">optionalTypeArgs</a></li>
    </ol>
  </div>

<span class="returntype">TResult</span>
<span class="name ">map</span>&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;(<wbr><ol class="parameter-list"><li><span class="parameter" id="map-param-initial">{<span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">initial</span>(<ol class="parameter-list"><li><span class="parameter" id="param-value"><span class="type-annotation"><a href="../../unpack/ModuleInitial">ModuleInitial</a></span> <span class="parameter-name">value</span></span></li>
</ol>
), </span></li>
<li><span class="parameter" id="map-param-file"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">file</span>(<ol class="parameter-list"><li><span class="parameter" id="param-value"><span class="type-annotation"><a href="../../unpack/ModuleFile">ModuleFile</a></span> <span class="parameter-name">value</span></span></li>
</ol>
), </span></li>
<li><span class="parameter" id="map-param-extract"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">extract</span>(<ol class="parameter-list"><li><span class="parameter" id="param-value"><span class="type-annotation"><a href="../../unpack/ModuleExtract">ModuleExtract</a></span> <span class="parameter-name">value</span></span></li>
</ol>
), </span></li>
<li><span class="parameter" id="map-param-transform"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">transform</span>(<ol class="parameter-list"><li><span class="parameter" id="param-value"><span class="type-annotation"><a href="../../unpack/ModuleTransform">ModuleTransform</a></span> <span class="parameter-name">value</span></span></li>
</ol>
), </span></li>
<li><span class="parameter" id="map-param-load"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">load</span>(<ol class="parameter-list"><li><span class="parameter" id="param-value"><span class="type-annotation"><a href="../../unpack/ModuleLoad">ModuleLoad</a></span> <span class="parameter-name">value</span></span></li>
</ol>
), </span></li>
<li><span class="parameter" id="map-param-complete"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">complete</span>(<ol class="parameter-list"><li><span class="parameter" id="param-value"><span class="type-annotation"><a href="../../unpack/ModuleComplete">ModuleComplete</a></span> <span class="parameter-name">value</span></span></li>
</ol>
), </span></li>
<li><span class="parameter" id="map-param-error"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">error</span>(<ol class="parameter-list"><li><span class="parameter" id="param-value"><span class="type-annotation"><a href="../../unpack/ModuleError">ModuleError</a></span> <span class="parameter-name">value</span></span></li>
</ol>
)}</span></li>
</ol>)

      <div class="features"><span class="feature">inherited</span></div>

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@optionalTypeArgs
TResult map&lt;TResult extends Object?&gt;({
  required TResult Function(ModuleInitial value) initial,
  required TResult Function(ModuleFile value) file,
  required TResult Function(ModuleExtract value) extract,
  required TResult Function(ModuleTransform value) transform,
  required TResult Function(ModuleLoad value) load,
  required TResult Function(ModuleComplete value) complete,
  required TResult Function(ModuleError value) error,
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
  <li><a href="../../index">unpack</a></li>
  <li><a href="../../unpack/unpack">unpack</a></li>
  <li><a href="../../unpack/ModuleState">ModuleState</a></li>
  <li class="self-crumb">map&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt; method</li>
</ol>


    <h5>ModuleState class</h5>
    <ol>

        <li class="section-title"><a href="../../unpack/ModuleState#constructors">Constructors</a></li>
          <li><a href="../../unpack/ModuleState/ModuleState.complete">complete</a></li>
          <li><a href="../../unpack/ModuleState/ModuleState.error">error</a></li>
          <li><a href="../../unpack/ModuleState/ModuleState.extract">extract</a></li>
          <li><a href="../../unpack/ModuleState/ModuleState.file">file</a></li>
          <li><a href="../../unpack/ModuleState/ModuleState.fromJson">fromJson</a></li>
          <li><a href="../../unpack/ModuleState/ModuleState.initial">initial</a></li>
          <li><a href="../../unpack/ModuleState/ModuleState.load">load</a></li>
          <li><a href="../../unpack/ModuleState/ModuleState.transform">transform</a></li>


        <li class="section-title">
          <a href="../../unpack/ModuleState#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../unpack/ModuleState/step">step</a></li>

        <li class="section-title inherited"><a href="../../unpack/ModuleState#instance-methods">Methods</a></li>
          <li class="inherited"><a href="../../unpack/ModuleState/map">map</a></li>
          <li class="inherited"><a href="../../unpack/ModuleState/mapOrNull">mapOrNull</a></li>
          <li class="inherited"><a href="../../unpack/ModuleState/maybeMap">maybeMap</a></li>
          <li class="inherited"><a href="../../unpack/ModuleState/maybeWhen">maybeWhen</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="../../unpack/ModuleState/toJson">toJson</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li class="inherited"><a href="../../unpack/ModuleState/when">when</a></li>
          <li class="inherited"><a href="../../unpack/ModuleState/whenOrNull">whenOrNull</a></li>

        <li class="section-title inherited"><a href="../../unpack/ModuleState#operators">Operators</a></li>
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
