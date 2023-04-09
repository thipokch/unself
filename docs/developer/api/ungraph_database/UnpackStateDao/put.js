import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">put</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      

<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../../ungraph_database/UnpackStateData">UnpackStateData</a></span>&gt;</span></span>
<span class="name ">put</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="put-param-entity"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Insertable-class.html">Insertable</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../../ungraph_database/UnpackStateData">UnpackStateData</a></span>&gt;</span></span> <span class="parameter-name">entity</span></span></li>
</ol>)

      

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">Future&lt;UnpackStateData&gt; put(Insertable&lt;UnpackStateData&gt; entity) =&gt;
    into(unpackState)
        .insertReturning(entity, mode: InsertMode.insertOrReplace);</code></pre>
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
  <li><a href="../../ungraph_database/UnpackStateDao">UnpackStateDao</a></li>
  <li class="self-crumb">put method</li>
</ol>


    <h5>UnpackStateDao class</h5>
    <ol>

        <li class="section-title"><a href="../../ungraph_database/UnpackStateDao#constructors">Constructors</a></li>
          <li><a href="../../ungraph_database/UnpackStateDao/UnpackStateDao.constructor">UnpackStateDao</a></li>


        <li class="section-title">
          <a href="../../ungraph_database/UnpackStateDao#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseAccessor/attachedDatabase.html">attachedDatabase</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/connection.html">connection</a></li>
          <li><a href="../../ungraph_database/UnpackStateDao/count">count</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/executor.html">executor</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li><a href="../../ungraph_database/UnpackStateDao/isEmpty">isEmpty</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/options.html">options</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/resolvedEngine.html">resolvedEngine</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/streamQueries.html">streamQueries</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/typeMapping.html">typeMapping</a></li>
          <li class="inherited"><a href="../../ungraph_database/UnpackStateDao/unpackSpec">unpackSpec</a></li>
          <li class="inherited"><a href="../../ungraph_database/UnpackStateDao/unpackState">unpackState</a></li>

        <li class="section-title"><a href="../../ungraph_database/UnpackStateDao#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/\$expandVar.html">\$expandVar</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/\$write.html">\$write</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/\$writeInsertable.html">\$writeInsertable</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/alias.html">alias</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/batch.html">batch</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/close.html">close</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/createStream.html">createStream</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/customInsert.html">customInsert</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/customSelect.html">customSelect</a></li>
          <li class="inherited"><a class="deprecated" href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/customSelectQuery.html">customSelectQuery</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/customStatement.html">customStatement</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/customUpdate.html">customUpdate</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/customWriteReturning.html">customWriteReturning</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/delete.html">delete</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/doWhenOpened.html">doWhenOpened</a></li>
          <li><a href="../../ungraph_database/UnpackStateDao/get">get</a></li>
          <li><a href="../../ungraph_database/UnpackStateDao/getAll">getAll</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/into.html">into</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/markTablesUpdated.html">markTablesUpdated</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/notifyUpdates.html">notifyUpdates</a></li>
          <li><a href="../../ungraph_database/UnpackStateDao/put">put</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/select.html">select</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/selectOnly.html">selectOnly</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/tableUpdates.html">tableUpdates</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/transaction.html">transaction</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/update.html">update</a></li>
          <li><a href="../../ungraph_database/UnpackStateDao/watchAll">watchAll</a></li>

        <li class="section-title inherited"><a href="../../ungraph_database/UnpackStateDao#operators">Operators</a></li>
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
