import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-property">attachedDatabase</span> property 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>


        
<section id="getter">

<section class="multi-line-signature">
  
  <div>
    <ol class="annotation-list">
        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>
    </ol>
  </div>
  <span class="returntype"><a href="../../ungraph_database/UngraphDatabase">UngraphDatabase</a></span>
  <span class="name ">attachedDatabase</span>
  <div class="features"><span class="feature">override</span></div>

</section>


<section class="desc markdown">
  <p>The generated database instance that this view or table is attached to.</p>
</section>


<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@override
UngraphDatabase get attachedDatabase {
  if (_attachedDatabase != null) return _attachedDatabase!;
  throw StateError('Database is not yet attached for DynamicTables.');
}</code></pre>
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
  <li><a href="../../ungraph_database/DynamicTable">DynamicTable<span class="signature">&lt;<wbr><span class="type-parameter">D</span>&gt;</span></a></li>
  <li class="self-crumb">attachedDatabase property</li>
</ol>


    <h5>DynamicTable class</h5>
    <ol>

        <li class="section-title"><a href="../../ungraph_database/DynamicTable#constructors">Constructors</a></li>
          <li><a href="../../ungraph_database/DynamicTable/DynamicTable.constructor">DynamicTable</a></li>


        <li class="section-title">
          <a href="../../ungraph_database/DynamicTable#instance-properties">Properties</a>
        </li>
          <li><a href="../../ungraph_database/DynamicTable/\$columns">\$columns</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/TableInfo/\$primaryKey.html">\$primaryKey</a></li>
          <li><a href="../../ungraph_database/DynamicTable/actualTableName">actualTableName</a></li>
          <li><a href="../../ungraph_database/DynamicTable/aliasedName">aliasedName</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/TableInfo/asDslTable.html">asDslTable</a></li>
          <li><a href="../../ungraph_database/DynamicTable/attachedDatabase">attachedDatabase</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/TableInfo/columnsByName.html">columnsByName</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table/customConstraints.html">customConstraints</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table/dontWriteConstraints.html">dontWriteConstraints</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/TableInfo/entityName.html">entityName</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/TableInfo/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="../../ungraph_database/PrimaryUuid/id">id</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table/isStrict.html">isStrict</a></li>
          <li class="inherited"><a href="../../ungraph_database/PrimaryUuid/primaryKey">primaryKey</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table/tableName.html">tableName</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/TableInfo/uniqueKeys.html">uniqueKeys</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table/withoutRowId.html">withoutRowId</a></li>

        <li class="section-title"><a href="../../ungraph_database/DynamicTable#instance-methods">Methods</a></li>
          <li><a href="../../ungraph_database/DynamicTable/attach">attach</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table/blob.html">blob</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table/boolean.html">boolean</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/TableInfo/createAlias.html">createAlias</a></li>
          <li><a href="../../ungraph_database/DynamicTable/createTable">createTable</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table/dateTime.html">dateTime</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table/int64.html">int64</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table/integer.html">integer</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table/intEnum.html">intEnum</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/ResultSetImplementation/map.html">map</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/TableInfo/mapFromCompanion.html">mapFromCompanion</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table/real.html">real</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table/text.html">text</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table/textEnum.html">textEnum</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/TableInfo/validateIntegrity.html">validateIntegrity</a></li>

        <li class="section-title inherited"><a href="../../ungraph_database/DynamicTable#operators">Operators</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/TableInfo/operator_equals.html">operator ==</a></li>




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
