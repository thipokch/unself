import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-property">step</span> property 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>


        
<section id="getter">

<section class="multi-line-signature">
  
  <span class="returntype"><a href="../../unpack/ModuleStep">ModuleStep</a></span>
  <span class="name ">step</span>
  

</section>




<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">ModuleStep get step =&gt; map(
      initial: (_) =&gt; ModuleStep.initial,
      file: (_) =&gt; ModuleStep.file,
      extract: (_) =&gt; ModuleStep.extract,
      transform: (_) =&gt; ModuleStep.transform,
      load: (_) =&gt; ModuleStep.load,
      complete: (_) =&gt; ModuleStep.complete,
      error: (_) =&gt; ModuleStep.error,
    );</code></pre>
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
  <li><a href="../../index">unpack</a></li>
  <li><a href="../../unpack/unpack">unpack</a></li>
  <li><a href="../../unpack/ModuleState">ModuleState</a></li>
  <li class="self-crumb">step property</li>
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
