import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">initEdge</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      

<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../../ungraph_repository/EdgeRepository">EdgeRepository</a></span>&gt;</span></span>
<span class="name ">initEdge</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="initEdge-param-specSlug"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">specSlug</span></span></li>
</ol>)

      

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">Future&lt;EdgeRepository&gt; initEdge(String specSlug) async {
  final spec = EdgeSpecMapper.entityToModel(
    await _db.edgeSpecDao.getBySlug(specSlug),
  );

  final dao = EdgeSpecMapper.modelToDao(spec, _db);
  await dao.createTable();

  return EdgeRepository(spec, dao);
}</code></pre>
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
  <li><a href="../../ungraph_repository/UngraphRepository">UngraphRepository</a></li>
  <li class="self-crumb">initEdge method</li>
</ol>


    <h5>UngraphRepository class</h5>
    <ol>

        <li class="section-title"><a href="../../ungraph_repository/UngraphRepository#constructors">Constructors</a></li>
          <li><a href="../../ungraph_repository/UngraphRepository/UngraphRepository.constructor">UngraphRepository</a></li>


        <li class="section-title inherited">
          <a href="../../ungraph_repository/UngraphRepository#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title"><a href="../../ungraph_repository/UngraphRepository#instance-methods">Methods</a></li>
          <li><a href="../../ungraph_repository/UngraphRepository/getEdgeOfNode">getEdgeOfNode</a></li>
          <li><a href="../../ungraph_repository/UngraphRepository/initEdge">initEdge</a></li>
          <li><a href="../../ungraph_repository/UngraphRepository/initNode">initNode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../../ungraph_repository/UngraphRepository/registerEdge">registerEdge</a></li>
          <li><a href="../../ungraph_repository/UngraphRepository/registerNode">registerNode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li><a href="../../ungraph_repository/UngraphRepository/watchTables">watchTables</a></li>

        <li class="section-title inherited"><a href="../../ungraph_repository/UngraphRepository#operators">Operators</a></li>
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
