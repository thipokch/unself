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

<span class="returntype"><a href="https://pub.dev/documentation/drift/2.6.0/drift/VerificationContext-class.html">VerificationContext</a></span>
<span class="name ">validateIntegrity</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="validateIntegrity-param-instance"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Insertable-class.html">Insertable</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../../un_database/UnpackStateData">UnpackStateData</a></span>&gt;</span></span> <span class="parameter-name">instance</span>, </span></li>
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
VerificationContext validateIntegrity(Insertable&lt;UnpackStateData&gt; instance,
    {bool isInserting = false}) {
  final context = VerificationContext();
  final data = instance.toColumns(true);
  if (data.containsKey('id')) {
    context.handle(_idMeta, id.isAcceptableOrUnknown(data['id']!, _idMeta));
  }
  if (data.containsKey('spec_id')) {
    context.handle(_specIdMeta,
        specId.isAcceptableOrUnknown(data['spec_id']!, _specIdMeta));
  } else if (isInserting) {
    context.missing(_specIdMeta);
  }
  if (data.containsKey('step')) {
    context.handle(
        _stepMeta, step.isAcceptableOrUnknown(data['step']!, _stepMeta));
  } else if (isInserting) {
    context.missing(_stepMeta);
  }
  if (data.containsKey('selected_modules')) {
    context.handle(
        _selectedModulesMeta,
        selectedModules.isAcceptableOrUnknown(
            data['selected_modules']!, _selectedModulesMeta));
  }
  if (data.containsKey('file_path')) {
    context.handle(_filePathMeta,
        filePath.isAcceptableOrUnknown(data['file_path']!, _filePathMeta));
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
  <li><a href="../../index">un_database</a></li>
  <li><a href="../../un_database/un_database">un_database</a></li>
  <li><a href="../../un_database/\$UnpackStateTable">\$UnpackStateTable</a></li>
  <li class="self-crumb">validateIntegrity method</li>
</ol>


    <h5>\$UnpackStateTable class</h5>
    <ol>

        <li class="section-title"><a href="../../un_database/\$UnpackStateTable#constructors">Constructors</a></li>
          <li><a href="../../un_database/\$UnpackStateTable/\$UnpackStateTable.constructor">\$UnpackStateTable</a></li>


        <li class="section-title">
          <a href="../../un_database/\$UnpackStateTable#instance-properties">Properties</a>
        </li>
          <li><a href="../../un_database/\$UnpackStateTable/\$columns">\$columns</a></li>
          <li><a href="../../un_database/\$UnpackStateTable/\$primaryKey">\$primaryKey</a></li>
          <li><a href="../../un_database/\$UnpackStateTable/actualTableName">actualTableName</a></li>
          <li><a href="../../un_database/\$UnpackStateTable/aliasedName">aliasedName</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/TableInfo/asDslTable.html">asDslTable</a></li>
          <li><a href="../../un_database/\$UnpackStateTable/attachedDatabase">attachedDatabase</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/TableInfo/columnsByName.html">columnsByName</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table/customConstraints.html">customConstraints</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table/dontWriteConstraints.html">dontWriteConstraints</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/TableInfo/entityName.html">entityName</a></li>
          <li><a href="../../un_database/\$UnpackStateTable/filePath">filePath</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/TableInfo/hashCode.html">hashCode</a></li>
          <li><a href="../../un_database/\$UnpackStateTable/id">id</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table/isStrict.html">isStrict</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/TableInfo/primaryKey.html">primaryKey</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../un_database/\$UnpackStateTable/selectedModules">selectedModules</a></li>
          <li><a href="../../un_database/\$UnpackStateTable/specId">specId</a></li>
          <li><a href="../../un_database/\$UnpackStateTable/step">step</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table/tableName.html">tableName</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/TableInfo/uniqueKeys.html">uniqueKeys</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table/withoutRowId.html">withoutRowId</a></li>

        <li class="section-title"><a href="../../un_database/\$UnpackStateTable#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table/blob.html">blob</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table/boolean.html">boolean</a></li>
          <li><a href="../../un_database/\$UnpackStateTable/createAlias">createAlias</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table/dateTime.html">dateTime</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table/int64.html">int64</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table/integer.html">integer</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table/intEnum.html">intEnum</a></li>
          <li><a href="../../un_database/\$UnpackStateTable/map">map</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/TableInfo/mapFromCompanion.html">mapFromCompanion</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table/real.html">real</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table/text.html">text</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table/textEnum.html">textEnum</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li><a href="../../un_database/\$UnpackStateTable/validateIntegrity">validateIntegrity</a></li>

        <li class="section-title inherited"><a href="../../un_database/\$UnpackStateTable#operators">Operators</a></li>
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
