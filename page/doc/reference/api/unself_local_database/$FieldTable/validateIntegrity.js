import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">validateIntegrity</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
  <div>
    <ol class="annotation-list">
        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>
    </ol>
  </div>

<span class="returntype"><a href="https://pub.dev/documentation/drift/2.4.2/drift/VerificationContext-class.html">VerificationContext</a></span>
<span class="name ">validateIntegrity</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="validateIntegrity-param-instance"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Insertable-class.html">Insertable</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../../unself_local_database/FieldData">FieldData</a></span>&gt;</span></span> <span class="parameter-name">instance</span>, </span></li>
<li><span class="parameter" id="validateIntegrity-param-isInserting">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">isInserting</span> = <span class="default-value">false</span>}</span></li>
</ol>)

      <div class="features"><span class="feature">override</span></div>

    </section>
    
<section class="desc markdown">
  <p>Validates that the given entity can be inserted into this table, meaning
that it respects all constraints (nullability, text length, etc.).</p>
</section>


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@override
VerificationContext validateIntegrity(Insertable&lt;FieldData&gt; instance,
    {bool isInserting = false}) {
  final context = VerificationContext();
  final data = instance.toColumns(true);
  if (data.containsKey('id')) {
    context.handle(_idMeta, id.isAcceptableOrUnknown(data['id']!, _idMeta));
  } else if (isInserting) {
    context.missing(_idMeta);
  }
  if (data.containsKey('name')) {
    context.handle(
        _nameMeta, name.isAcceptableOrUnknown(data['name']!, _nameMeta));
  } else if (isInserting) {
    context.missing(_nameMeta);
  }
  context.handle(_typeMeta, const VerificationResult.success());
  if (data.containsKey('system')) {
    context.handle(_systemMeta,
        system.isAcceptableOrUnknown(data['system']!, _systemMeta));
  } else if (isInserting) {
    context.missing(_systemMeta);
  }
  if (data.containsKey('required')) {
    context.handle(_requiredMeta,
        required.isAcceptableOrUnknown(data['required']!, _requiredMeta));
  } else if (isInserting) {
    context.missing(_requiredMeta);
  }
  if (data.containsKey('unique')) {
    context.handle(_uniqueMeta,
        unique.isAcceptableOrUnknown(data['unique']!, _uniqueMeta));
  } else if (isInserting) {
    context.missing(_uniqueMeta);
  }
  if (data.containsKey('options')) {
    context.handle(_optionsMeta,
        options.isAcceptableOrUnknown(data['options']!, _optionsMeta));
  }
  if (data.containsKey('collection_id')) {
    context.handle(
        _collectionIdMeta,
        collectionId.isAcceptableOrUnknown(
            data['collection_id']!, _collectionIdMeta));
  } else if (isInserting) {
    context.missing(_collectionIdMeta);
  }
  return context;
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
  <li><a href="../../index">unself_local_database</a></li>
  <li><a href="../../unself_local_database/unself_local_database">unself_local_database</a></li>
  <li><a href="../../unself_local_database/\$FieldTable">\$FieldTable</a></li>
  <li class="self-crumb">validateIntegrity method</li>
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
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/customConstraints.html">customConstraints</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/dontWriteConstraints.html">dontWriteConstraints</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/entityName.html">entityName</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/hashCode.html">hashCode</a></li>
          <li><a href="../../unself_local_database/\$FieldTable/id">id</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/isStrict.html">isStrict</a></li>
          <li><a href="../../unself_local_database/\$FieldTable/name">name</a></li>
          <li><a href="../../unself_local_database/\$FieldTable/options">options</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/primaryKey.html">primaryKey</a></li>
          <li><a href="../../unself_local_database/\$FieldTable/required">required</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../unself_local_database/\$FieldTable/system">system</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/tableName.html">tableName</a></li>
          <li><a href="../../unself_local_database/\$FieldTable/type">type</a></li>
          <li><a href="../../unself_local_database/\$FieldTable/unique">unique</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/uniqueKeys.html">uniqueKeys</a></li>
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
