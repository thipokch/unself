import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-property">specSlug</span> property 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

        <section class="multi-line-signature">
          
          <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>
          <span class="name ">specSlug</span>
          <div class="features"><span class="feature">final</span></div>

        </section>
        

        
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">final String specSlug;</code></pre>
</section>


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../../index">ungraph_database</a></li>
  <li><a href="../../ungraph_database/ungraph_database">ungraph_database</a></li>
  <li><a href="../../ungraph_database/NodeData">NodeData</a></li>
  <li class="self-crumb">specSlug property</li>
</ol>


    <h5>NodeData class</h5>
    <ol>

        <li class="section-title"><a href="../../ungraph_database/NodeData#constructors">Constructors</a></li>
          <li><a href="../../ungraph_database/NodeData/NodeData.constructor">NodeData</a></li>


        <li class="section-title">
          <a href="../../ungraph_database/NodeData#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="../../ungraph_database/DynamicData/data">data</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../ungraph_database/NodeData/specSlug">specSlug</a></li>

        <li class="section-title inherited"><a href="../../ungraph_database/NodeData#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="../../ungraph_database/DynamicData/toColumns">toColumns</a></li>
          <li class="inherited"><a href="../../ungraph_database/DynamicData/toJson">toJson</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DataClass/toJsonString.html">toJsonString</a></li>
          <li class="inherited"><a href="../../ungraph_database/DynamicData/toString">toString</a></li>

        <li class="section-title inherited"><a href="../../ungraph_database/NodeData#operators">Operators</a></li>
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
