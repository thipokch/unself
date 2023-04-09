import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-property">activeEdges</span> property 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>


        
<section id="getter">

<section class="multi-line-signature">
  
  <span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span>
  <span class="name ">activeEdges</span>
  

</section>




<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">int get activeEdges =&gt; _edges.length;</code></pre>
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
  <li><a href="../../index">ungraph</a></li>
  <li><a href="../../ungraph/ungraph">ungraph</a></li>
  <li><a href="../../ungraph/UngraphService">UngraphService</a></li>
  <li class="self-crumb">activeEdges property</li>
</ol>


    <h5>UngraphService class</h5>
    <ol>

        <li class="section-title"><a href="../../ungraph/UngraphService#constructors">Constructors</a></li>
          <li><a href="../../ungraph/UngraphService/UngraphService.constructor">UngraphService</a></li>


        <li class="section-title">
          <a href="../../ungraph/UngraphService#instance-properties">Properties</a>
        </li>
          <li><a href="../../ungraph/UngraphService/activeEdges">activeEdges</a></li>
          <li><a href="../../ungraph/UngraphService/activeNodes">activeNodes</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title"><a href="../../ungraph/UngraphService#instance-methods">Methods</a></li>
          <li><a href="../../ungraph/UngraphService/clear">clear</a></li>
          <li><a href="../../ungraph/UngraphService/dispose">dispose</a></li>
          <li><a href="../../ungraph/UngraphService/edge">edge</a></li>
          <li><a href="../../ungraph/UngraphService/edgeOfNode">edgeOfNode</a></li>
          <li><a href="../../ungraph/UngraphService/node">node</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../../ungraph/UngraphService/registerEdge">registerEdge</a></li>
          <li><a href="../../ungraph/UngraphService/registerNode">registerNode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../ungraph/UngraphService#operators">Operators</a></li>
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
