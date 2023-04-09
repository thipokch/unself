import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-constructor">TransformSpec.json</span> constructor 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      const
      <span class="name ">TransformSpec.json</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="json-param-schema"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Iterable-class.html">Iterable</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../../un_model/JsonSchema">JsonSchema</a></span>&gt;</span></span> <span class="parameter-name">schema</span></span></li>
</ol>)
    </section>

    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">const factory TransformSpec.json(
  Iterable&lt;JsonSchema&gt; schema,
) = JsonTransformSpec;</code></pre>
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
  <li><a href="../../un_model/TransformSpec">TransformSpec</a></li>
  <li class="self-crumb">TransformSpec.json const constructor</li>
</ol>


    <h5>TransformSpec class</h5>
    <ol>

        <li class="section-title"><a href="../../un_model/TransformSpec#constructors">Constructors</a></li>
          <li><a href="../../un_model/TransformSpec/TransformSpec.fromJson">fromJson</a></li>
          <li><a href="../../un_model/TransformSpec/TransformSpec.json">json</a></li>


        <li class="section-title inherited">
          <a href="../../un_model/TransformSpec#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="../../un_model/TransformSpec/copyWith">copyWith</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li class="inherited"><a href="../../un_model/TransformSpec/schema">schema</a></li>

        <li class="section-title inherited"><a href="../../un_model/TransformSpec#instance-methods">Methods</a></li>
          <li class="inherited"><a href="../../un_model/TransformSpec/map">map</a></li>
          <li class="inherited"><a href="../../un_model/TransformSpec/mapOrNull">mapOrNull</a></li>
          <li class="inherited"><a href="../../un_model/TransformSpec/maybeMap">maybeMap</a></li>
          <li class="inherited"><a href="../../un_model/TransformSpec/maybeWhen">maybeWhen</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="../../un_model/TransformSpec/toJson">toJson</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li class="inherited"><a href="../../un_model/TransformSpec/when">when</a></li>
          <li class="inherited"><a href="../../un_model/TransformSpec/whenOrNull">whenOrNull</a></li>

        <li class="section-title inherited"><a href="../../un_model/TransformSpec#operators">Operators</a></li>
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
