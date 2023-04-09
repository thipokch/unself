import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-constructor">NodeSpecData.fromJson</span> constructor 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
      <span class="name ">NodeSpecData.fromJson</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="fromJson-param-json"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">json</span>, </span></li>
<li><span class="parameter" id="fromJson-param-serializer">{<span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/ValueSerializer-class.html">ValueSerializer</a>?</span> <span class="parameter-name">serializer</span>}</span></li>
</ol>)
    </section>

    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">factory NodeSpecData.fromJson(Map&lt;String, dynamic&gt; json,
    {ValueSerializer? serializer}) {
  serializer ??= driftRuntimeOptions.defaultSerializer;
  return NodeSpecData(
    id: serializer.fromJson&lt;String&gt;(json['id']),
    name: serializer.fromJson&lt;String&gt;(json['name']),
    slug: serializer.fromJson&lt;String&gt;(json['slug']),
    labels: serializer.fromJson&lt;String&gt;(json['labels']),
    propSpecs: serializer.fromJson&lt;String&gt;(json['propSpecs']),
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
  <li class="self-crumb">NodeSpecData.fromJson factory constructor</li>
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
