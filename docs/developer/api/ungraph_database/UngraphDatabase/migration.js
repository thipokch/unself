import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-property">migration</span> property 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>


        
<section id="getter">

<section class="multi-line-signature">
  
  <div>
    <ol class="annotation-list">
        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>
    </ol>
  </div>
  <span class="returntype"><a href="https://pub.dev/documentation/drift/2.6.0/drift/MigrationStrategy-class.html">MigrationStrategy</a></span>
  <span class="name ">migration</span>
  <div class="features"><span class="feature">override</span></div>

</section>


<section class="desc markdown">
  <p>Defines the migration strategy that will determine how to deal with an
increasing <a href="../../ungraph_database/UngraphDatabase/schemaVersion">schemaVersion</a>. The default value only supports creating the
database by creating all tables known in this database. When you have
changes in your schema, you'll need a custom migration strategy to create
the new tables or change the columns.</p>
</section>


<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@override
MigrationStrategy get migration =&gt; MigrationStrategy(
      onCreate: (Migrator m) async {
        await m.createAll();
      },
      onUpgrade: (m, from, to) async {
        // disable foreign_keys before migrations
        await customStatement('PRAGMA foreign_keys = OFF');
      },
      beforeOpen: (details) async {
        // foreign key references aren't enabled by default
        await customStatement('PRAGMA foreign_keys = ON');
        // collectionDao.
      },
    );</code></pre>
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
  <li><a href="../../ungraph_database/UngraphDatabase">UngraphDatabase</a></li>
  <li class="self-crumb">migration property</li>
</ol>


    <h5>UngraphDatabase class</h5>
    <ol>

        <li class="section-title"><a href="../../ungraph_database/UngraphDatabase#constructors">Constructors</a></li>
          <li><a href="../../ungraph_database/UngraphDatabase/UngraphDatabase.constructor">UngraphDatabase</a></li>


        <li class="section-title">
          <a href="../../ungraph_database/UngraphDatabase#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="../../ungraph_database/UngraphDatabase/allSchemaEntities">allSchemaEntities</a></li>
          <li class="inherited"><a href="../../ungraph_database/UngraphDatabase/allTables">allTables</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedDatabase/attachedDatabase.html">attachedDatabase</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/connection.html">connection</a></li>
          <li><a href="../../ungraph_database/UngraphDatabase/dynamic">dynamic</a></li>
          <li class="inherited"><a href="../../ungraph_database/UngraphDatabase/dynamicDatabase">dynamicDatabase</a></li>
          <li class="inherited"><a href="../../ungraph_database/UngraphDatabase/edgeSpec">edgeSpec</a></li>
          <li class="inherited"><a href="../../ungraph_database/UngraphDatabase/edgeSpecDao">edgeSpecDao</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/executor.html">executor</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li><a href="../../ungraph_database/UngraphDatabase/migration">migration</a></li>
          <li class="inherited"><a href="../../ungraph_database/UngraphDatabase/nodeSpec">nodeSpec</a></li>
          <li class="inherited"><a href="../../ungraph_database/UngraphDatabase/nodeSpecDao">nodeSpecDao</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedDatabase/options.html">options</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/resolvedEngine.html">resolvedEngine</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../ungraph_database/UngraphDatabase/schemaVersion">schemaVersion</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/streamQueries.html">streamQueries</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedDatabase/streamUpdateRules.html">streamUpdateRules</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/typeMapping.html">typeMapping</a></li>
          <li class="inherited"><a href="../../ungraph_database/UngraphDatabase/unpackSpec">unpackSpec</a></li>
          <li class="inherited"><a href="../../ungraph_database/UngraphDatabase/unpackSpecDao">unpackSpecDao</a></li>
          <li class="inherited"><a href="../../ungraph_database/UngraphDatabase/unpackState">unpackState</a></li>
          <li class="inherited"><a href="../../ungraph_database/UngraphDatabase/unpackStateDao">unpackStateDao</a></li>

        <li class="section-title inherited"><a href="../../ungraph_database/UngraphDatabase#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/\$expandVar.html">\$expandVar</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/\$write.html">\$write</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/\$writeInsertable.html">\$writeInsertable</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/alias.html">alias</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/batch.html">batch</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedDatabase/beforeOpen.html">beforeOpen</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedDatabase/close.html">close</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedDatabase/createMigrator.html">createMigrator</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/createStream.html">createStream</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/customInsert.html">customInsert</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/customSelect.html">customSelect</a></li>
          <li class="inherited"><a class="deprecated" href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/customSelectQuery.html">customSelectQuery</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/customStatement.html">customStatement</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/customUpdate.html">customUpdate</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/customWriteReturning.html">customWriteReturning</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/delete.html">delete</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/doWhenOpened.html">doWhenOpened</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/into.html">into</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/markTablesUpdated.html">markTablesUpdated</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/notifyUpdates.html">notifyUpdates</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/select.html">select</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/selectOnly.html">selectOnly</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/tableUpdates.html">tableUpdates</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/transaction.html">transaction</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/update.html">update</a></li>

        <li class="section-title inherited"><a href="../../ungraph_database/UngraphDatabase#operators">Operators</a></li>
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
