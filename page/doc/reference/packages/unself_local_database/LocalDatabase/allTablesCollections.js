import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-property">allTablesCollections</span> property 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>


        
<section id="getter">

<section class="multi-line-signature">
  
  <span class="returntype"><a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span>&gt;</span></span>
  <span class="name ">allTablesCollections</span>
  

</section>


<section class="desc markdown">
  <p><a href="../../unself_local_database/LocalDatabase/allTablesCollections">allTablesCollections</a> returns a list of all table names,
including dynamic <a href="../../unself_local_database/Collection/Collection">Collection</a>s, in the local_database.</p>
</section>


<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">Future&lt;List&lt;String&gt;&gt; get allTablesCollections async =&gt; await customSelect(
        'SELECT name FROM sqlite_schema WHERE type =\'table\' AND name NOT LIKE \'sqlite_%\';')
    .map((row) =&gt; row.read&lt;String&gt;('name'))
    .get();</code></pre>
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
  <li><a href="../../index">unself_local_database</a></li>
  <li><a href="../../unself_local_database/unself_local_database">unself_local_database</a></li>
  <li><a href="../../unself_local_database/LocalDatabase/LocalDatabase">LocalDatabase</a></li>
  <li class="self-crumb">allTablesCollections property</li>
</ol>


    <h5>LocalDatabase class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_local_database/LocalDatabase/LocalDatabase#constructors">Constructors</a></li>
          <li><a href="../../unself_local_database/LocalDatabase/LocalDatabase.constructor">LocalDatabase</a></li>


        <li class="section-title">
          <a href="../../unself_local_database/LocalDatabase/LocalDatabase#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="../../unself_local_database/LocalDatabase/allSchemaEntities">allSchemaEntities</a></li>
          <li class="inherited"><a href="../../unself_local_database/LocalDatabase/allTables">allTables</a></li>
          <li><a href="../../unself_local_database/LocalDatabase/allTablesCollections">allTablesCollections</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/GeneratedDatabase/attachedDatabase.html">attachedDatabase</a></li>
          <li class="inherited"><a href="../../unself_local_database/LocalDatabase/collection">collection</a></li>
          <li class="inherited"><a href="../../unself_local_database/LocalDatabase/collectionDao">collectionDao</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/connection.html">connection</a></li>
          <li class="inherited"><a href="../../unself_local_database/LocalDatabase/documentDao">documentDao</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/executor.html">executor</a></li>
          <li class="inherited"><a href="../../unself_local_database/LocalDatabase/field">field</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li><a href="../../unself_local_database/LocalDatabase/migration">migration</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/GeneratedDatabase/options.html">options</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/resolvedEngine.html">resolvedEngine</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../unself_local_database/LocalDatabase/schemaVersion">schemaVersion</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/streamQueries.html">streamQueries</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/GeneratedDatabase/streamUpdateRules.html">streamUpdateRules</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/typeMapping.html">typeMapping</a></li>

        <li class="section-title inherited"><a href="../../unself_local_database/LocalDatabase/LocalDatabase#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/\$expandVar.html">\$expandVar</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/\$write.html">\$write</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/\$writeInsertable.html">\$writeInsertable</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/alias.html">alias</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/batch.html">batch</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/GeneratedDatabase/beforeOpen.html">beforeOpen</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/GeneratedDatabase/close.html">close</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/GeneratedDatabase/createMigrator.html">createMigrator</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/createStream.html">createStream</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/customInsert.html">customInsert</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/customSelect.html">customSelect</a></li>
          <li class="inherited"><a class="deprecated" href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/customSelectQuery.html">customSelectQuery</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/customStatement.html">customStatement</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/customUpdate.html">customUpdate</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/customWriteReturning.html">customWriteReturning</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/delete.html">delete</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/doWhenOpened.html">doWhenOpened</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/into.html">into</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/markTablesUpdated.html">markTablesUpdated</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/notifyUpdates.html">notifyUpdates</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/select.html">select</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/selectOnly.html">selectOnly</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/tableUpdates.html">tableUpdates</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/transaction.html">transaction</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/update.html">update</a></li>

        <li class="section-title inherited"><a href="../../unself_local_database/LocalDatabase/LocalDatabase#operators">Operators</a></li>
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
