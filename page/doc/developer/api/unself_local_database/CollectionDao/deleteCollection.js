import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">deleteCollection</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      

<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a></span>
<span class="name ">deleteCollection</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="deleteCollection-param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span></span></li>
</ol>)

      

    </section>
    
<section class="desc markdown">
  <p><a href="../../unself_local_database/CollectionDao/deleteCollection">deleteCollection</a> deletes the provided <a href="../../unself_local_database/Collection">Collection</a> model.
This method automatically deletes the related collection records table.</p>
<p>The collection cannot be deleted, if:</p>
<ul>
<li>is system collection (aka. collection.System is true)</li>
<li>is referenced as part of a relation field in another collection</li>
</ul>
</section>


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">Future deleteCollection(String name) =&gt; transaction(() async {
      // TODO: implement edge cases

      // if (collection.system) {
      //   throw Exception('Cannot delete system collection');
      // }

      // final referenced = await (select(field)
      //       ..where((_) =&gt; _.collectionId.equals(collection.id)))
      //     .get();

      // if (referenced.isNotEmpty) {
      //   throw Exception(
      //       'Cannot delete collection, because it is referenced in other collections');
      // }

      // await (delete(attachedDatabase.collection)
      //       ..where((_) =&gt; _.id.equals(collection.id)))
      //     .go();

      // await (delete(attachedDatabase.field)
      //       ..where((_) =&gt; _.collectionId.equals(collection.id)))
      //     .go();

      await _migrator.deleteTable(name);
    });</code></pre>
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
  <li><a href="../../unself_local_database/CollectionDao">CollectionDao</a></li>
  <li class="self-crumb">deleteCollection method</li>
</ol>


    <h5>CollectionDao class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_local_database/CollectionDao#constructors">Constructors</a></li>
          <li><a href="../../unself_local_database/CollectionDao/CollectionDao.constructor">CollectionDao</a></li>


        <li class="section-title">
          <a href="../../unself_local_database/CollectionDao#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseAccessor/attachedDatabase.html">attachedDatabase</a></li>
          <li><a href="../../unself_local_database/CollectionDao/collection">collection</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/connection.html">connection</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/executor.html">executor</a></li>
          <li><a href="../../unself_local_database/CollectionDao/field">field</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/options.html">options</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/resolvedEngine.html">resolvedEngine</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/streamQueries.html">streamQueries</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/typeMapping.html">typeMapping</a></li>

        <li class="section-title"><a href="../../unself_local_database/CollectionDao#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/\$expandVar.html">\$expandVar</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/\$write.html">\$write</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/\$writeInsertable.html">\$writeInsertable</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/alias.html">alias</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/batch.html">batch</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/createStream.html">createStream</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/customInsert.html">customInsert</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/customSelect.html">customSelect</a></li>
          <li class="inherited"><a class="deprecated" href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/customSelectQuery.html">customSelectQuery</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/customStatement.html">customStatement</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/customUpdate.html">customUpdate</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/customWriteReturning.html">customWriteReturning</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/delete.html">delete</a></li>
          <li><a href="../../unself_local_database/CollectionDao/deleteCollection">deleteCollection</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/doWhenOpened.html">doWhenOpened</a></li>
          <li><a href="../../unself_local_database/CollectionDao/getCollectionById">getCollectionById</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/into.html">into</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/markTablesUpdated.html">markTablesUpdated</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/notifyUpdates.html">notifyUpdates</a></li>
          <li><a href="../../unself_local_database/CollectionDao/saveCollection">saveCollection</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/select.html">select</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/selectOnly.html">selectOnly</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/tableUpdates.html">tableUpdates</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/transaction.html">transaction</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/update.html">update</a></li>

        <li class="section-title inherited"><a href="../../unself_local_database/CollectionDao#operators">Operators</a></li>
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
