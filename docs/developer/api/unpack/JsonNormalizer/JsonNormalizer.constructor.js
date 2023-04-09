import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-constructor">JsonNormalizer</span> constructor 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
      <span class="name ">JsonNormalizer</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-schema"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Iterable-class.html">Iterable</a><span class="signature">&lt;<wbr><span class="type-parameter">JsonSchema</span>&gt;</span></span> <span class="parameter-name">schema</span></span></li>
</ol>)
    </section>

    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">factory JsonNormalizer(Iterable&lt;JsonSchema&gt; schema) =&gt; JsonNormalizer._({
      for (final entity in schema) entity.name: entity,
    });</code></pre>
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
  <li><a href="../../unpack/JsonNormalizer">JsonNormalizer</a></li>
  <li class="self-crumb">JsonNormalizer factory constructor</li>
</ol>


    <h5>JsonNormalizer class</h5>
    <ol>

        <li class="section-title"><a href="../../unpack/JsonNormalizer#constructors">Constructors</a></li>
          <li><a href="../../unpack/JsonNormalizer/JsonNormalizer.constructor">JsonNormalizer</a></li>


        <li class="section-title inherited">
          <a href="../../unpack/JsonNormalizer#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title"><a href="../../unpack/JsonNormalizer#instance-methods">Methods</a></li>
          <li><a href="../../unpack/JsonNormalizer/accumulate">accumulate</a></li>
          <li><a href="../../unpack/JsonNormalizer/normalize">normalize</a></li>
          <li><a href="../../unpack/JsonNormalizer/normalizeUnique">normalizeUnique</a></li>
          <li><a href="../../unpack/JsonNormalizer/normalizeWith">normalizeWith</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../unpack/JsonNormalizer#operators">Operators</a></li>
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
