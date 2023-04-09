import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-constructor">UnpackSpecData</span> constructor 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      const
      <span class="name ">UnpackSpecData</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-id">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span>, </span></li>
<li><span class="parameter" id="-param-slug"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">slug</span>, </span></li>
<li><span class="parameter" id="-param-name"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span></li>
<li><span class="parameter" id="-param-fileSpec"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">fileSpec</span>, </span></li>
<li><span class="parameter" id="-param-retrieveSpec"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">retrieveSpec</span>, </span></li>
<li><span class="parameter" id="-param-modules"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">modules</span>}</span></li>
</ol>)
    </section>

    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">const UnpackSpecData(
    {required this.id,
    required this.slug,
    required this.name,
    required this.fileSpec,
    required this.retrieveSpec,
    required this.modules});</code></pre>
</section>


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../../index">un_database</a></li>
  <li><a href="../../un_database/un_database">un_database</a></li>
  <li><a href="../../un_database/UnpackSpecData">UnpackSpecData</a></li>
  <li class="self-crumb">UnpackSpecData const constructor</li>
</ol>


    <h5>UnpackSpecData class</h5>
    <ol>

        <li class="section-title"><a href="../../un_database/UnpackSpecData#constructors">Constructors</a></li>
          <li><a href="../../un_database/UnpackSpecData/UnpackSpecData.constructor">UnpackSpecData</a></li>
          <li><a href="../../un_database/UnpackSpecData/UnpackSpecData.fromJson">fromJson</a></li>


        <li class="section-title">
          <a href="../../un_database/UnpackSpecData#instance-properties">Properties</a>
        </li>
          <li><a href="../../un_database/UnpackSpecData/fileSpec">fileSpec</a></li>
          <li><a href="../../un_database/UnpackSpecData/hashCode">hashCode</a></li>
          <li><a href="../../un_database/UnpackSpecData/id">id</a></li>
          <li><a href="../../un_database/UnpackSpecData/modules">modules</a></li>
          <li><a href="../../un_database/UnpackSpecData/name">name</a></li>
          <li><a href="../../un_database/UnpackSpecData/retrieveSpec">retrieveSpec</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../un_database/UnpackSpecData/slug">slug</a></li>

        <li class="section-title"><a href="../../un_database/UnpackSpecData#instance-methods">Methods</a></li>
          <li><a href="../../un_database/UnpackSpecData/copyWith">copyWith</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../../un_database/UnpackSpecData/toColumns">toColumns</a></li>
          <li><a href="../../un_database/UnpackSpecData/toCompanion">toCompanion</a></li>
          <li><a href="../../un_database/UnpackSpecData/toJson">toJson</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DataClass/toJsonString.html">toJsonString</a></li>
          <li><a href="../../un_database/UnpackSpecData/toString">toString</a></li>

        <li class="section-title"><a href="../../un_database/UnpackSpecData#operators">Operators</a></li>
          <li><a href="../../un_database/UnpackSpecData/operator_equals">operator ==</a></li>




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
