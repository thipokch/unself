import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-constructor">UnpackStateData</span> constructor 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      const
      <span class="name ">UnpackStateData</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-id">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span>, </span></li>
<li><span class="parameter" id="-param-specId"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">specId</span>, </span></li>
<li><span class="parameter" id="-param-step"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">step</span>, </span></li>
<li><span class="parameter" id="-param-selectedModules"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">selectedModules</span>, </span></li>
<li><span class="parameter" id="-param-filePath"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">filePath</span>}</span></li>
</ol>)
    </section>

    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">const UnpackStateData(
    {required this.id,
    required this.specId,
    required this.step,
    this.selectedModules,
    this.filePath});</code></pre>
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
  <li><a href="../../un_database/UnpackStateData">UnpackStateData</a></li>
  <li class="self-crumb">UnpackStateData const constructor</li>
</ol>


    <h5>UnpackStateData class</h5>
    <ol>

        <li class="section-title"><a href="../../un_database/UnpackStateData#constructors">Constructors</a></li>
          <li><a href="../../un_database/UnpackStateData/UnpackStateData.constructor">UnpackStateData</a></li>
          <li><a href="../../un_database/UnpackStateData/UnpackStateData.fromJson">fromJson</a></li>


        <li class="section-title">
          <a href="../../un_database/UnpackStateData#instance-properties">Properties</a>
        </li>
          <li><a href="../../un_database/UnpackStateData/filePath">filePath</a></li>
          <li><a href="../../un_database/UnpackStateData/hashCode">hashCode</a></li>
          <li><a href="../../un_database/UnpackStateData/id">id</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../un_database/UnpackStateData/selectedModules">selectedModules</a></li>
          <li><a href="../../un_database/UnpackStateData/specId">specId</a></li>
          <li><a href="../../un_database/UnpackStateData/step">step</a></li>

        <li class="section-title"><a href="../../un_database/UnpackStateData#instance-methods">Methods</a></li>
          <li><a href="../../un_database/UnpackStateData/copyWith">copyWith</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../../un_database/UnpackStateData/toColumns">toColumns</a></li>
          <li><a href="../../un_database/UnpackStateData/toCompanion">toCompanion</a></li>
          <li><a href="../../un_database/UnpackStateData/toJson">toJson</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DataClass/toJsonString.html">toJsonString</a></li>
          <li><a href="../../un_database/UnpackStateData/toString">toString</a></li>

        <li class="section-title"><a href="../../un_database/UnpackStateData#operators">Operators</a></li>
          <li><a href="../../un_database/UnpackStateData/operator_equals">operator ==</a></li>




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
