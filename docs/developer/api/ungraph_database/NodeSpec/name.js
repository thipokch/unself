import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-property">name</span> property 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>


        
<section id="getter">

<section class="multi-line-signature">
  
  <span class="returntype"><a href="https://pub.dev/documentation/drift/2.6.0/drift/TextColumn.html">TextColumn</a></span>
  <span class="name ">name</span>
  

</section>




<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">TextColumn get name =&gt; text()();</code></pre>
</section>

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
  <li><a href="../../ungraph_database/NodeSpec">NodeSpec</a></li>
  <li class="self-crumb">name property</li>
</ol>


    <h5>NodeSpec class</h5>
    <ol>

        <li class="section-title"><a href="../../ungraph_database/NodeSpec#constructors">Constructors</a></li>
          <li><a href="../../ungraph_database/NodeSpec/NodeSpec.constructor">NodeSpec</a></li>


        <li class="section-title">
          <a href="../../ungraph_database/NodeSpec#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table/customConstraints.html">customConstraints</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table/dontWriteConstraints.html">dontWriteConstraints</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="../../ungraph_database/PrimaryUuid/id">id</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table/isStrict.html">isStrict</a></li>
          <li><a href="../../ungraph_database/NodeSpec/labels">labels</a></li>
          <li><a href="../../ungraph_database/NodeSpec/name">name</a></li>
          <li class="inherited"><a href="../../ungraph_database/PrimaryUuid/primaryKey">primaryKey</a></li>
          <li><a href="../../ungraph_database/NodeSpec/propSpecs">propSpecs</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../ungraph_database/NodeSpec/slug">slug</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table/tableName.html">tableName</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table/uniqueKeys.html">uniqueKeys</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table/withoutRowId.html">withoutRowId</a></li>

        <li class="section-title inherited"><a href="../../ungraph_database/NodeSpec#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table/blob.html">blob</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table/boolean.html">boolean</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table/dateTime.html">dateTime</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table/int64.html">int64</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table/integer.html">integer</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table/intEnum.html">intEnum</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table/real.html">real</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table/text.html">text</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table/textEnum.html">textEnum</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../ungraph_database/NodeSpec#operators">Operators</a></li>
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
