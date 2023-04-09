import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">getAll</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      

<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter">Node</span>&gt;</span></span>&gt;</span></span>
<span class="name ">getAll</span>(<wbr>)

      

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">Future&lt;List&lt;Node&gt;&gt; getAll() =&gt;
    _dao.getAll().then((list) =&gt; list.map(NodeMapper.entityToModel).toList());</code></pre>
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
  <li class="self-crumb">getAll method</li>
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
