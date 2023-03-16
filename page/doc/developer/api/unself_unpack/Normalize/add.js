import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">add</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      

<span class="returntype">void</span>
<span class="name ">add</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="add-param-schema"><span class="type-annotation">JsonSchema</span> <span class="parameter-name">schema</span></span></li>
</ol>)

      

    </section>
    
<section class="desc markdown">
  <p>Adds an entity schema to the <code>Normalize</code> instance.</p>
</section>


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">void add(JsonSchema schema) =&gt; _schema[schema.name] = schema;</code></pre>
</section>


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../../index">unself_unpack</a></li>
  <li><a href="../../unself_unpack/unself_unpack">unself_unpack</a></li>
  <li><a href="../../unself_unpack/Normalize">Normalize</a></li>
  <li class="self-crumb">add method</li>
</ol>


    <h5>Normalize class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_unpack/Normalize#constructors">Constructors</a></li>
          <li><a href="../../unself_unpack/Normalize/Normalize.constructor">Normalize</a></li>


        <li class="section-title inherited">
          <a href="../../unself_unpack/Normalize#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title"><a href="../../unself_unpack/Normalize#instance-methods">Methods</a></li>
          <li><a href="../../unself_unpack/Normalize/accumulate">accumulate</a></li>
          <li><a href="../../unself_unpack/Normalize/add">add</a></li>
          <li><a href="../../unself_unpack/Normalize/addAll">addAll</a></li>
          <li><a href="../../unself_unpack/Normalize/clear">clear</a></li>
          <li><a href="../../unself_unpack/Normalize/normalize">normalize</a></li>
          <li><a href="../../unself_unpack/Normalize/normalizeWith">normalizeWith</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../unself_unpack/Normalize#operators">Operators</a></li>
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
