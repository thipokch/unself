import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-property">created</span> property 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

        <section class="multi-line-signature">
          
  <div>
    <ol class="annotation-list">
        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>
    </ol>
  </div>
          <a href="https://pub.dev/documentation/drift/2.4.2/drift/GeneratedColumn-class.html">GeneratedColumn</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span>&gt;</span>
          <span class="name ">created</span>
          <div class="features"><span class="feature">late</span><span class="feature">final</span></div>

        </section>
        

        
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@override
late final GeneratedColumn&lt;DateTime&gt; created = GeneratedColumn&lt;DateTime&gt;(
    'created', aliasedName, false,
    type: DriftSqlType.dateTime, requiredDuringInsert: true);</code></pre>
</section>


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../../index">unself_local_database</a></li>
  <li><a href="../../unself_local_database/unself_local_database">unself_local_database</a></li>
  <li><a href="../../unself_local_database/\$CollectionTable">\$CollectionTable</a></li>
  <li class="self-crumb">created property</li>
</ol>


    <h5>\$CollectionTable class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_local_database/\$CollectionTable#constructors">Constructors</a></li>
          <li><a href="../../unself_local_database/\$CollectionTable/\$CollectionTable.constructor">\$CollectionTable</a></li>


        <li class="section-title">
          <a href="../../unself_local_database/\$CollectionTable#instance-properties">Properties</a>
        </li>
          <li><a href="../../unself_local_database/\$CollectionTable/\$columns">\$columns</a></li>
          <li><a href="../../unself_local_database/\$CollectionTable/\$primaryKey">\$primaryKey</a></li>
          <li><a href="../../unself_local_database/\$CollectionTable/actualTableName">actualTableName</a></li>
          <li><a href="../../unself_local_database/\$CollectionTable/aliasedName">aliasedName</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/asDslTable.html">asDslTable</a></li>
          <li><a href="../../unself_local_database/\$CollectionTable/attachedDatabase">attachedDatabase</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/columnsByName.html">columnsByName</a></li>
          <li><a href="../../unself_local_database/\$CollectionTable/created">created</a></li>
          <li><a href="../../unself_local_database/\$CollectionTable/createRule">createRule</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/customConstraints.html">customConstraints</a></li>
          <li><a href="../../unself_local_database/\$CollectionTable/deleteRule">deleteRule</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/dontWriteConstraints.html">dontWriteConstraints</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/entityName.html">entityName</a></li>
          <li><a href="../../unself_local_database/\$CollectionTable/extra">extra</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/hashCode.html">hashCode</a></li>
          <li><a href="../../unself_local_database/\$CollectionTable/id">id</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/isStrict.html">isStrict</a></li>
          <li><a href="../../unself_local_database/\$CollectionTable/listRule">listRule</a></li>
          <li><a href="../../unself_local_database/\$CollectionTable/name">name</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/primaryKey.html">primaryKey</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../unself_local_database/\$CollectionTable/system">system</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/tableName.html">tableName</a></li>
          <li><a href="../../unself_local_database/\$CollectionTable/type">type</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/uniqueKeys.html">uniqueKeys</a></li>
          <li><a href="../../unself_local_database/\$CollectionTable/updated">updated</a></li>
          <li><a href="../../unself_local_database/\$CollectionTable/updateRule">updateRule</a></li>
          <li><a href="../../unself_local_database/\$CollectionTable/viewRule">viewRule</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/withoutRowId.html">withoutRowId</a></li>

        <li class="section-title"><a href="../../unself_local_database/\$CollectionTable#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/blob.html">blob</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/boolean.html">boolean</a></li>
          <li><a href="../../unself_local_database/\$CollectionTable/createAlias">createAlias</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/dateTime.html">dateTime</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/int64.html">int64</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/integer.html">integer</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/intEnum.html">intEnum</a></li>
          <li><a href="../../unself_local_database/\$CollectionTable/map">map</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/mapFromCompanion.html">mapFromCompanion</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/real.html">real</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/text.html">text</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/textEnum.html">textEnum</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li><a href="../../unself_local_database/\$CollectionTable/validateIntegrity">validateIntegrity</a></li>

        <li class="section-title inherited"><a href="../../unself_local_database/\$CollectionTable#operators">Operators</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/operator_equals.html">operator ==</a></li>


        <li class="section-title"><a href="../../unself_local_database/\$CollectionTable#static-properties">Static properties</a></li>
          <li><a href="../../unself_local_database/\$CollectionTable/\$convertertype">\$convertertype</a></li>


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
