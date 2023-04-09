import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">toColumns</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
  <div>
    <ol class="annotation-list">
        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>
    </ol>
  </div>

<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span>&gt;</span></span>&gt;</span></span>
<span class="name ">toColumns</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="toColumns-param-nullToAbsent"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">nullToAbsent</span></span></li>
</ol>)

      <div class="features"><span class="feature">override</span></div>

    </section>
    
<section class="desc markdown">
  <p>Converts this object into a map of column names to expressions to insert
or update.</p>
<p>Note that the keys in the map are the raw column names, they're not
escaped.</p>
<p>The <code>nullToAbsent</code> can be used on <a href="https://pub.dev/documentation/drift/2.6.0/drift/DataClass-class.html">DataClass</a>es to control whether null
fields should be set to a null constant in sql or absent from the map.
Other implementations ignore that <code>nullToAbsent</code>, it mainly exists for
legacy reasons.</p>
</section>


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@override
Map&lt;String, Expression&gt; toColumns(bool nullToAbsent) {
  final map = &lt;String, Expression&gt;{};
  map['id'] = Variable&lt;String&gt;(id);
  map['spec_id'] = Variable&lt;String&gt;(specId);
  map['step'] = Variable&lt;String&gt;(step);
  if (!nullToAbsent || selectedModules != null) {
    map['selected_modules'] = Variable&lt;String&gt;(selectedModules);
  }
  if (!nullToAbsent || filePath != null) {
    map['file_path'] = Variable&lt;String&gt;(filePath);
  }
  return map;
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
  <li><a href="../../ungraph_database/UnpackStateData">UnpackStateData</a></li>
  <li class="self-crumb">toColumns method</li>
</ol>


    <h5>UnpackStateData class</h5>
    <ol>

        <li class="section-title"><a href="../../ungraph_database/UnpackStateData#constructors">Constructors</a></li>
          <li><a href="../../ungraph_database/UnpackStateData/UnpackStateData.constructor">UnpackStateData</a></li>
          <li><a href="../../ungraph_database/UnpackStateData/UnpackStateData.fromJson">fromJson</a></li>


        <li class="section-title">
          <a href="../../ungraph_database/UnpackStateData#instance-properties">Properties</a>
        </li>
          <li><a href="../../ungraph_database/UnpackStateData/filePath">filePath</a></li>
          <li><a href="../../ungraph_database/UnpackStateData/hashCode">hashCode</a></li>
          <li><a href="../../ungraph_database/UnpackStateData/id">id</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../ungraph_database/UnpackStateData/selectedModules">selectedModules</a></li>
          <li><a href="../../ungraph_database/UnpackStateData/specId">specId</a></li>
          <li><a href="../../ungraph_database/UnpackStateData/step">step</a></li>

        <li class="section-title"><a href="../../ungraph_database/UnpackStateData#instance-methods">Methods</a></li>
          <li><a href="../../ungraph_database/UnpackStateData/copyWith">copyWith</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../../ungraph_database/UnpackStateData/toColumns">toColumns</a></li>
          <li><a href="../../ungraph_database/UnpackStateData/toCompanion">toCompanion</a></li>
          <li><a href="../../ungraph_database/UnpackStateData/toJson">toJson</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DataClass/toJsonString.html">toJsonString</a></li>
          <li><a href="../../ungraph_database/UnpackStateData/toString">toString</a></li>

        <li class="section-title"><a href="../../ungraph_database/UnpackStateData#operators">Operators</a></li>
          <li><a href="../../ungraph_database/UnpackStateData/operator_equals">operator ==</a></li>




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
