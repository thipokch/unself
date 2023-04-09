import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">toCompanion</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      

<span class="returntype"><a href="../../ungraph_database/NodeSpecCompanion">NodeSpecCompanion</a></span>
<span class="name ">toCompanion</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="toCompanion-param-nullToAbsent"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">nullToAbsent</span></span></li>
</ol>)

      

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">NodeSpecCompanion toCompanion(bool nullToAbsent) {
  return NodeSpecCompanion(
    id: Value(id),
    name: Value(name),
    slug: Value(slug),
    labels: Value(labels),
    propSpecs: Value(propSpecs),
  );
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
  <li><a href="../../index">ungraph_database</a></li>
  <li><a href="../../ungraph_database/ungraph_database">ungraph_database</a></li>
  <li><a href="../../ungraph_database/NodeSpecData">NodeSpecData</a></li>
  <li class="self-crumb">toCompanion method</li>
</ol>


    <h5>NodeSpecData class</h5>
    <ol>

        <li class="section-title"><a href="../../ungraph_database/NodeSpecData#constructors">Constructors</a></li>
          <li><a href="../../ungraph_database/NodeSpecData/NodeSpecData.constructor">NodeSpecData</a></li>
          <li><a href="../../ungraph_database/NodeSpecData/NodeSpecData.fromJson">fromJson</a></li>


        <li class="section-title">
          <a href="../../ungraph_database/NodeSpecData#instance-properties">Properties</a>
        </li>
          <li><a href="../../ungraph_database/NodeSpecData/hashCode">hashCode</a></li>
          <li><a href="../../ungraph_database/NodeSpecData/id">id</a></li>
          <li><a href="../../ungraph_database/NodeSpecData/labels">labels</a></li>
          <li><a href="../../ungraph_database/NodeSpecData/name">name</a></li>
          <li><a href="../../ungraph_database/NodeSpecData/propSpecs">propSpecs</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../ungraph_database/NodeSpecData/slug">slug</a></li>

        <li class="section-title"><a href="../../ungraph_database/NodeSpecData#instance-methods">Methods</a></li>
          <li><a href="../../ungraph_database/NodeSpecData/copyWith">copyWith</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../../ungraph_database/NodeSpecData/toColumns">toColumns</a></li>
          <li><a href="../../ungraph_database/NodeSpecData/toCompanion">toCompanion</a></li>
          <li><a href="../../ungraph_database/NodeSpecData/toJson">toJson</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DataClass/toJsonString.html">toJsonString</a></li>
          <li><a href="../../ungraph_database/NodeSpecData/toString">toString</a></li>

        <li class="section-title"><a href="../../ungraph_database/NodeSpecData#operators">Operators</a></li>
          <li><a href="../../ungraph_database/NodeSpecData/operator_equals">operator ==</a></li>




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
