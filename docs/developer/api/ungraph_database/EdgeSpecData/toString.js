import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">toString</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
  <div>
    <ol class="annotation-list">
        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>
    </ol>
  </div>

<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>
<span class="name ">toString</span>(<wbr>)

      <div class="features"><span class="feature">override</span></div>

    </section>
    
<section class="desc markdown">
  <p>A string representation of this object.</p>
<p>Some classes have a default textual representation,
often paired with a static <code>parse</code> function (like <a href="https://api.flutter.dev/flutter/dart-core/int/parse.html">int.parse</a>).
These classes will provide the textual representation as
their string representation.</p>
<p>Other classes have no meaningful textual representation
that a program will care about.
Such classes will typically override <code>toString</code> to provide
useful information when inspecting the object,
mainly for debugging or logging.</p>
</section>


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@override
String toString() {
  return (StringBuffer('EdgeSpecData(')
        ..write('id: \$id, ')
        ..write('name: \$name, ')
        ..write('slug: \$slug, ')
        ..write('type: \$type, ')
        ..write('propSpecs: \$propSpecs, ')
        ..write('sourceNodeSpecId: \$sourceNodeSpecId, ')
        ..write('targetNodeSpecId: \$targetNodeSpecId')
        ..write(')'))
      .toString();
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
  <li class="self-crumb">toString method</li>
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
