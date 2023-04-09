import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-property">collectionId</span> property 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

        <section class="multi-line-signature">
          
  <div>
    <ol class="annotation-list">
        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>
    </ol>
  </div>
          <a href="https://pub.dev/documentation/drift/2.4.2/drift/GeneratedColumn-class.html">GeneratedColumn</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>
          <span class="name ">collectionId</span>
          <div class="features"><span class="feature">late</span><span class="feature">final</span></div>

        </section>
        

        
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@override
late final GeneratedColumn&lt;String&gt; collectionId = GeneratedColumn&lt;String&gt;(
    'collection_id', aliasedName, false,
    type: DriftSqlType.string,
    requiredDuringInsert: true,
    defaultConstraints:
        GeneratedColumn.constraintIsAlways('REFERENCES collection (id)'));</code></pre>
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
  <li><a href="../../unself_local_database/\$FieldTable">\$FieldTable</a></li>
  <li class="self-crumb">collectionId property</li>
</ol>


    <h5>\$FieldTable class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_local_database/\$FieldTable#constructors">Constructors</a></li>
          <li><a href="../../unself_local_database/\$FieldTable/\$FieldTable.constructor">\$FieldTable</a></li>


        <li class="section-title">
          <a href="../../unself_local_database/\$FieldTable#instance-properties">Properties</a>
        </li>
          <li><a href="../../unself_local_database/\$FieldTable/\$columns">\$columns</a></li>
          <li><a href="../../unself_local_database/\$FieldTable/\$primaryKey">\$primaryKey</a></li>
          <li><a href="../../unself_local_database/\$FieldTable/actualTableName">actualTableName</a></li>
          <li><a href="../../unself_local_database/\$FieldTable/aliasedName">aliasedName</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/asDslTable.html">asDslTable</a></li>
          <li><a href="../../unself_local_database/\$FieldTable/attachedDatabase">attachedDatabase</a></li>
          <li><a href="../../unself_local_database/\$FieldTable/collectionId">collectionId</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/columnsByName.html">columnsByName</a></li>
          <li><a href="../../unself_local_database/\$FieldTable/created">created</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/customConstraints.html">customConstraints</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/dontWriteConstraints.html">dontWriteConstraints</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/entityName.html">entityName</a></li>
          <li><a href="../../unself_local_database/\$FieldTable/extra">extra</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/hashCode.html">hashCode</a></li>
          <li><a href="../../unself_local_database/\$FieldTable/id">id</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/isStrict.html">isStrict</a></li>
          <li><a href="../../unself_local_database/\$FieldTable/name">name</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/primaryKey.html">primaryKey</a></li>
          <li><a href="../../unself_local_database/\$FieldTable/required">required</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../unself_local_database/\$FieldTable/system">system</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/tableName.html">tableName</a></li>
          <li><a href="../../unself_local_database/\$FieldTable/type">type</a></li>
          <li><a href="../../unself_local_database/\$FieldTable/unique">unique</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/uniqueKeys.html">uniqueKeys</a></li>
          <li><a href="../../unself_local_database/\$FieldTable/updated">updated</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/withoutRowId.html">withoutRowId</a></li>

        <li class="section-title"><a href="../../unself_local_database/\$FieldTable#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/blob.html">blob</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/boolean.html">boolean</a></li>
          <li><a href="../../unself_local_database/\$FieldTable/createAlias">createAlias</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/dateTime.html">dateTime</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/int64.html">int64</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/integer.html">integer</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/intEnum.html">intEnum</a></li>
          <li><a href="../../unself_local_database/\$FieldTable/map">map</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/mapFromCompanion.html">mapFromCompanion</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/real.html">real</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/text.html">text</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/textEnum.html">textEnum</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li><a href="../../unself_local_database/\$FieldTable/validateIntegrity">validateIntegrity</a></li>

        <li class="section-title inherited"><a href="../../unself_local_database/\$FieldTable#operators">Operators</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/operator_equals.html">operator ==</a></li>


        <li class="section-title"><a href="../../unself_local_database/\$FieldTable#static-properties">Static properties</a></li>
          <li><a href="../../unself_local_database/\$FieldTable/\$convertertype">\$convertertype</a></li>


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
