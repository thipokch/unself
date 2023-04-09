import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">maybeMap&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
  <div>
    <ol class="annotation-list">
        <li>@<a href="https://pub.dev/documentation/meta/1.8.0/meta/optionalTypeArgs-constant.html">optionalTypeArgs</a></li>
    </ol>
  </div>

<span class="returntype">TResult</span>
<span class="name ">maybeMap</span>&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;(<wbr><ol class="parameter-list"><li><span class="parameter" id="maybeMap-param-custom">{<span class="type-annotation">TResult</span> <span class="parameter-name">custom</span>(<ol class="parameter-list"><li><span class="parameter" id="param-value"><span class="type-annotation"><a href="../../un_model/CustomModule">CustomModule</a></span> <span class="parameter-name">value</span></span></li>
</ol>
)?, </span></li>
<li><span class="parameter" id="maybeMap-param-json"><span class="type-annotation">TResult</span> <span class="parameter-name">json</span>(<ol class="parameter-list"><li><span class="parameter" id="param-value"><span class="type-annotation"><a href="../../un_model/JsonModule">JsonModule</a></span> <span class="parameter-name">value</span></span></li>
</ol>
)?, </span></li>
<li><span class="parameter" id="maybeMap-param-orElse"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">orElse</span>(<ol class="parameter-list"></ol>
)}</span></li>
</ol>)

      <div class="features"><span class="feature">inherited</span></div>

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@optionalTypeArgs
TResult maybeMap&lt;TResult extends Object?&gt;({
  TResult Function(CustomModule value)? custom,
  TResult Function(JsonModule value)? json,
  required TResult orElse(),
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
  <li><a href="../../index">un_model</a></li>
  <li><a href="../../un_model/un_model">un_model</a></li>
  <li><a href="../../un_model/ModuleSpec">ModuleSpec</a></li>
  <li class="self-crumb">maybeMap&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt; method</li>
</ol>


    <h5>ModuleSpec class</h5>
    <ol>

        <li class="section-title"><a href="../../un_model/ModuleSpec#constructors">Constructors</a></li>
          <li><a href="../../un_model/ModuleSpec/ModuleSpec.custom">custom</a></li>
          <li><a href="../../un_model/ModuleSpec/ModuleSpec.fromJson">fromJson</a></li>
          <li><a href="../../un_model/ModuleSpec/ModuleSpec.json">json</a></li>


        <li class="section-title">
          <a href="../../un_model/ModuleSpec#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="../../un_model/ModuleSpec/copyWith">copyWith</a></li>
          <li><a href="../../un_model/ModuleSpec/extractSpec">extractSpec</a></li>
          <li class="inherited"><a href="../../un_model/ModuleSpec/fileMatcher">fileMatcher</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="../../un_model/ModuleSpec/id">id</a></li>
          <li class="inherited"><a href="../../un_model/ModuleSpec/load">load</a></li>
          <li><a href="../../un_model/ModuleSpec/loadSpec">loadSpec</a></li>
          <li class="inherited"><a href="../../un_model/ModuleSpec/name">name</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../un_model/ModuleSpec/transformSpec">transformSpec</a></li>

        <li class="section-title inherited"><a href="../../un_model/ModuleSpec#instance-methods">Methods</a></li>
          <li class="inherited"><a href="../../un_model/ModuleSpec/map">map</a></li>
          <li class="inherited"><a href="../../un_model/ModuleSpec/mapOrNull">mapOrNull</a></li>
          <li class="inherited"><a href="../../un_model/ModuleSpec/maybeMap">maybeMap</a></li>
          <li class="inherited"><a href="../../un_model/ModuleSpec/maybeWhen">maybeWhen</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="../../un_model/ModuleSpec/toJson">toJson</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li class="inherited"><a href="../../un_model/ModuleSpec/when">when</a></li>
          <li class="inherited"><a href="../../un_model/ModuleSpec/whenOrNull">whenOrNull</a></li>

        <li class="section-title inherited"><a href="../../un_model/ModuleSpec#operators">Operators</a></li>
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
