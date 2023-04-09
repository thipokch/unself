import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">normalize</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      

<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a></span>&gt;</span></span>
<span class="name ">normalize</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="normalize-param-schema"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">schema</span>, </span></li>
<li><span class="parameter" id="normalize-param-json"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">json</span></span></li>
</ol>)

      

    </section>
    
<section class="desc markdown">
  <p>Normalizes the given JSON object using the specified schema name.</p>
<p>Returns a map of normalized JSON objects, where each key corresponds to
the name of an entity and the value is a list of normalized JSON objects
for that entity.</p>
</section>


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">Map&lt;String, List&gt; normalize(String schema, Map&lt;String, dynamic&gt; json) =&gt;
    normalizeWith(_find(schema), json);</code></pre>
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
  <li class="self-crumb">normalize method</li>
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
