import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">toJson</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
  <div>
    <ol class="annotation-list">
        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>
    </ol>
  </div>

<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span>
<span class="name ">toJson</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="toJson-param-serializer">{<span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/ValueSerializer-class.html">ValueSerializer</a>?</span> <span class="parameter-name">serializer</span>}</span></li>
</ol>)

      <div class="features"><span class="feature">override</span></div>

    </section>
    
<section class="desc markdown">
  <p>Converts this object into a representation that can be encoded with
<code>json</code>. The <code>serializer</code> can be used to configure how individual values
will be encoded. By default, <a href="https://pub.dev/documentation/drift/2.6.0/drift/DriftRuntimeOptions/defaultSerializer.html">DriftRuntimeOptions.defaultSerializer</a> will
be used. See <a href="https://pub.dev/documentation/drift/2.6.0/drift/ValueSerializer/ValueSerializer.defaults.html">ValueSerializer.defaults</a> for details.</p>
</section>


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@override
Map&lt;String, dynamic&gt; toJson({ValueSerializer? serializer}) {
  serializer ??= driftRuntimeOptions.defaultSerializer;
  return &lt;String, dynamic&gt;{
    'id': serializer.toJson&lt;String&gt;(id),
    'name': serializer.toJson&lt;String&gt;(name),
    'slug': serializer.toJson&lt;String&gt;(slug),
    'type': serializer.toJson&lt;String&gt;(type),
    'propSpecs': serializer.toJson&lt;String&gt;(propSpecs),
    'sourceNodeSpecId': serializer.toJson&lt;String&gt;(sourceNodeSpecId),
    'targetNodeSpecId': serializer.toJson&lt;String&gt;(targetNodeSpecId),
  };
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
  <li><a href="../../ungraph_database/EdgeSpecData">EdgeSpecData</a></li>
  <li class="self-crumb">toJson method</li>
</ol>


    <h5>EdgeSpecData class</h5>
    <ol>

        <li class="section-title"><a href="../../ungraph_database/EdgeSpecData#constructors">Constructors</a></li>
          <li><a href="../../ungraph_database/EdgeSpecData/EdgeSpecData.constructor">EdgeSpecData</a></li>
          <li><a href="../../ungraph_database/EdgeSpecData/EdgeSpecData.fromJson">fromJson</a></li>


        <li class="section-title">
          <a href="../../ungraph_database/EdgeSpecData#instance-properties">Properties</a>
        </li>
          <li><a href="../../ungraph_database/EdgeSpecData/hashCode">hashCode</a></li>
          <li><a href="../../ungraph_database/EdgeSpecData/id">id</a></li>
          <li><a href="../../ungraph_database/EdgeSpecData/name">name</a></li>
          <li><a href="../../ungraph_database/EdgeSpecData/propSpecs">propSpecs</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../ungraph_database/EdgeSpecData/slug">slug</a></li>
          <li><a href="../../ungraph_database/EdgeSpecData/sourceNodeSpecId">sourceNodeSpecId</a></li>
          <li><a href="../../ungraph_database/EdgeSpecData/targetNodeSpecId">targetNodeSpecId</a></li>
          <li><a href="../../ungraph_database/EdgeSpecData/type">type</a></li>

        <li class="section-title"><a href="../../ungraph_database/EdgeSpecData#instance-methods">Methods</a></li>
          <li><a href="../../ungraph_database/EdgeSpecData/copyWith">copyWith</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../../ungraph_database/EdgeSpecData/toColumns">toColumns</a></li>
          <li><a href="../../ungraph_database/EdgeSpecData/toCompanion">toCompanion</a></li>
          <li><a href="../../ungraph_database/EdgeSpecData/toJson">toJson</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DataClass/toJsonString.html">toJsonString</a></li>
          <li><a href="../../ungraph_database/EdgeSpecData/toString">toString</a></li>

        <li class="section-title"><a href="../../ungraph_database/EdgeSpecData#operators">Operators</a></li>
          <li><a href="../../ungraph_database/EdgeSpecData/operator_equals">operator ==</a></li>




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
