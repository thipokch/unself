import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-property">slug</span> property 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>


        
<section id="getter">

<section class="multi-line-signature">
  
  <span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>
  <span class="name ">slug</span>
  

</section>




<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">String get slug =&gt; slugged ?? slugify(name, delimiter: '_');</code></pre>
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
  <li><a href="../../index">un_model</a></li>
  <li><a href="../../un_model/un_model">un_model</a></li>
  <li><a href="../../un_model/NodeSpec">NodeSpec</a></li>
  <li class="self-crumb">slug property</li>
</ol>


    <h5>NodeSpec class</h5>
    <ol>

        <li class="section-title"><a href="../../un_model/NodeSpec#constructors">Constructors</a></li>
          <li><a href="../../un_model/NodeSpec/NodeSpec.constructor">NodeSpec</a></li>
          <li><a href="../../un_model/NodeSpec/NodeSpec.fromJson">fromJson</a></li>


        <li class="section-title">
          <a href="../../un_model/NodeSpec#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="../../un_model/NodeSpec/copyWith">copyWith</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="../../un_model/NodeSpec/id">id</a></li>
          <li><a href="../../un_model/NodeSpec/labels">labels</a></li>
          <li class="inherited"><a href="../../un_model/NodeSpec/name">name</a></li>
          <li class="inherited"><a href="../../un_model/NodeSpec/propSpecs">propSpecs</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../un_model/NodeSpec/slug">slug</a></li>
          <li class="inherited"><a href="../../un_model/NodeSpec/slugged">slugged</a></li>

        <li class="section-title inherited"><a href="../../un_model/NodeSpec#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="../../un_model/NodeSpec/toJson">toJson</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../un_model/NodeSpec#operators">Operators</a></li>
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
