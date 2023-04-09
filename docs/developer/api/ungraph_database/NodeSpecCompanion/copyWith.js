import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">copyWith</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      

<span class="returntype"><a href="../../ungraph_database/NodeSpecCompanion">NodeSpecCompanion</a></span>
<span class="name ">copyWith</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="copyWith-param-id">{<span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">id</span>, </span></li>
<li><span class="parameter" id="copyWith-param-name"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">name</span>, </span></li>
<li><span class="parameter" id="copyWith-param-slug"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">slug</span>, </span></li>
<li><span class="parameter" id="copyWith-param-labels"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">labels</span>, </span></li>
<li><span class="parameter" id="copyWith-param-propSpecs"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">propSpecs</span>, </span></li>
<li><span class="parameter" id="copyWith-param-rowid"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span>&gt;</span>?</span> <span class="parameter-name">rowid</span>}</span></li>
</ol>)

      

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">NodeSpecCompanion copyWith(
    {Value&lt;String&gt;? id,
    Value&lt;String&gt;? name,
    Value&lt;String&gt;? slug,
    Value&lt;String&gt;? labels,
    Value&lt;String&gt;? propSpecs,
    Value&lt;int&gt;? rowid}) {
  return NodeSpecCompanion(
    id: id ?? this.id,
    name: name ?? this.name,
    slug: slug ?? this.slug,
    labels: labels ?? this.labels,
    propSpecs: propSpecs ?? this.propSpecs,
    rowid: rowid ?? this.rowid,
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
  <li><a href="../../ungraph_database/NodeSpecCompanion">NodeSpecCompanion</a></li>
  <li class="self-crumb">copyWith method</li>
</ol>


    <h5>NodeSpecCompanion class</h5>
    <ol>

        <li class="section-title"><a href="../../ungraph_database/NodeSpecCompanion#constructors">Constructors</a></li>
          <li><a href="../../ungraph_database/NodeSpecCompanion/NodeSpecCompanion.constructor">NodeSpecCompanion</a></li>
          <li><a href="../../ungraph_database/NodeSpecCompanion/NodeSpecCompanion.insert">insert</a></li>


        <li class="section-title">
          <a href="../../ungraph_database/NodeSpecCompanion#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/UpdateCompanion/hashCode.html">hashCode</a></li>
          <li><a href="../../ungraph_database/NodeSpecCompanion/id">id</a></li>
          <li><a href="../../ungraph_database/NodeSpecCompanion/labels">labels</a></li>
          <li><a href="../../ungraph_database/NodeSpecCompanion/name">name</a></li>
          <li><a href="../../ungraph_database/NodeSpecCompanion/propSpecs">propSpecs</a></li>
          <li><a href="../../ungraph_database/NodeSpecCompanion/rowid">rowid</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../ungraph_database/NodeSpecCompanion/slug">slug</a></li>

        <li class="section-title"><a href="../../ungraph_database/NodeSpecCompanion#instance-methods">Methods</a></li>
          <li><a href="../../ungraph_database/NodeSpecCompanion/copyWith">copyWith</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../../ungraph_database/NodeSpecCompanion/toColumns">toColumns</a></li>
          <li><a href="../../ungraph_database/NodeSpecCompanion/toString">toString</a></li>

        <li class="section-title inherited"><a href="../../ungraph_database/NodeSpecCompanion#operators">Operators</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/UpdateCompanion/operator_equals.html">operator ==</a></li>



        <li class="section-title"><a href="../../ungraph_database/NodeSpecCompanion#static-methods">Static methods</a></li>
          <li><a href="../../ungraph_database/NodeSpecCompanion/custom">custom</a></li>

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
