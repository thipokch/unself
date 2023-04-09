import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-constructor">NodeRepository</span> constructor 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      const
      <span class="name ">NodeRepository</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-spec"><span class="type-annotation">NodeSpec</span> <span class="parameter-name">spec</span>, </span></li>
<li><span class="parameter" id="-param-_dao"><span class="type-annotation">NodeDao</span> <span class="parameter-name">_dao</span></span></li>
</ol>)
    </section>

    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">const NodeRepository(this.spec, this._dao);</code></pre>
</section>


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../../index">ungraph_repository</a></li>
  <li><a href="../../ungraph_repository/ungraph_repository">ungraph_repository</a></li>
  <li><a href="../../ungraph_repository/NodeRepository">NodeRepository</a></li>
  <li class="self-crumb">NodeRepository const constructor</li>
</ol>


    <h5>NodeRepository class</h5>
    <ol>

        <li class="section-title"><a href="../../ungraph_repository/NodeRepository#constructors">Constructors</a></li>
          <li><a href="../../ungraph_repository/NodeRepository/NodeRepository.constructor">NodeRepository</a></li>


        <li class="section-title">
          <a href="../../ungraph_repository/NodeRepository#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../ungraph_repository/NodeRepository/spec">spec</a></li>

        <li class="section-title"><a href="../../ungraph_repository/NodeRepository#instance-methods">Methods</a></li>
          <li><a href="../../ungraph_repository/NodeRepository/getAll">getAll</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../../ungraph_repository/NodeRepository/put">put</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../ungraph_repository/NodeRepository#operators">Operators</a></li>
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
