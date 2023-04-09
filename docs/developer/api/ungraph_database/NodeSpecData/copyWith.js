import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">copyWith</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      

<span class="returntype"><a href="../../ungraph_database/NodeSpecData">NodeSpecData</a></span>
<span class="name ">copyWith</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="copyWith-param-id">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">id</span>, </span></li>
<li><span class="parameter" id="copyWith-param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">name</span>, </span></li>
<li><span class="parameter" id="copyWith-param-slug"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">slug</span>, </span></li>
<li><span class="parameter" id="copyWith-param-labels"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">labels</span>, </span></li>
<li><span class="parameter" id="copyWith-param-propSpecs"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">propSpecs</span>}</span></li>
</ol>)

      

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">NodeSpecData copyWith(
        {String? id,
        String? name,
        String? slug,
        String? labels,
        String? propSpecs}) =&gt;
    NodeSpecData(
      id: id ?? this.id,
      name: name ?? this.name,
      slug: slug ?? this.slug,
      labels: labels ?? this.labels,
      propSpecs: propSpecs ?? this.propSpecs,
    );</code></pre>
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
  <li class="self-crumb">copyWith method</li>
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
