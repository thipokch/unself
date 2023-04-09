import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-class">UnpackSpecDao</span> class 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    


    <section>
      <dl class="dl-horizontal">
        
  <dt>Inheritance</dt>
  <dd>
    <ul class="gt-separated dark clazz-relationships">
      <li><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></li>
        <li><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser-class.html">DatabaseConnectionUser</a></li>
        <li><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseAccessor-class.html">DatabaseAccessor</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../ungraph_database/UngraphDatabase">UngraphDatabase</a></span>&gt;</span></li>
      <li>UnpackSpecDao</li>
    </ul>
  </dd>

        
        


        <dt>Available Extensions</dt>
        <dd><ul class="comma-separated clazz-relationships">
          <li><a href="https://pub.dev/documentation/drift/2.6.0/isolate/ComputeWithDriftIsolate.html">ComputeWithDriftIsolate</a></li>
          <li><a href="https://pub.dev/documentation/drift/2.6.0/drift/OldDbFieldInDatabaseAccessor.html">OldDbFieldInDatabaseAccessor</a></li>
        </ul></dd>

        
  <dt>Annotations</dt>
  <dd>
    <ul class="annotation-list clazz-relationships">
        <li>@<a href="https://pub.dev/documentation/drift/2.6.0/drift/DriftAccessor-class.html">DriftAccessor</a>(tables: [UnpackSpec])</li>
    </ul>
  </dd>


      </dl>
    </section>

    
  <section class="summary offset-anchor" id="constructors">
    <h2>Constructors</h2>

    <dl class="constructor-summary-list">
        <dt id="UnpackSpecDao" class="callable">
          <span class="name"><a href="../ungraph_database/UnpackSpecDao/UnpackSpecDao.constructor">UnpackSpecDao</a></span><span class="signature">(<span class="parameter" id="-param-attachedDatabase"><span class="type-annotation"><a href="../ungraph_database/UngraphDatabase">UngraphDatabase</a></span> <span class="parameter-name">attachedDatabase</span></span>)</span>
        </dt>
        <dd>
          
        </dd>
    </dl>
  </section>

    <section class="summary offset-anchor" id="instance-properties">
      <h2>Properties</h2>

      <dl class="properties">
        <dt id="attachedDatabase" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseAccessor/attachedDatabase.html">attachedDatabase</a></span>
  <span class="signature">→ <a href="../ungraph_database/UngraphDatabase">UngraphDatabase</a></span> 

</dt>
<dd class="inherited">
  The main database instance for this dao
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="connection" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/connection.html">connection</a></span>
  <span class="signature">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnection-class.html">DatabaseConnection</a></span> 

</dt>
<dd class="inherited">
  The database connection used by this <a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser-class.html">DatabaseConnectionUser</a>.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="count" class="property">
  <span class="name"><a href="../ungraph_database/UnpackSpecDao/count">count</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span>&gt;</span></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">read-only</span></div>

</dd>

        <dt id="executor" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/executor.html">executor</a></span>
  <span class="signature">→ <a href="https://pub.dev/documentation/drift/2.6.0/backends/QueryExecutor-class.html">QueryExecutor</a></span> 

</dt>
<dd class="inherited">
  The executor to use when queries are executed.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="hashCode" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> 

</dt>
<dd class="inherited">
  The hash code for this object.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="isEmpty" class="property">
  <span class="name"><a href="../ungraph_database/UnpackSpecDao/isEmpty">isEmpty</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">read-only</span></div>

</dd>

        <dt id="options" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/options.html">options</a></span>
  <span class="signature">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/DriftDatabaseOptions-class.html">DriftDatabaseOptions</a></span> 

</dt>
<dd class="inherited">
  The <a href="https://pub.dev/documentation/drift/2.6.0/drift/DriftDatabaseOptions-class.html">DriftDatabaseOptions</a> to use for this database instance.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="resolvedEngine" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/resolvedEngine.html">resolvedEngine</a></span>
  <span class="signature">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser-class.html">DatabaseConnectionUser</a></span> 

</dt>
<dd class="inherited">
  A, potentially more specific, database engine based on the <a href="https://api.flutter.dev/flutter/dart-async/Zone-class.html">Zone</a> context.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="runtimeType" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/Type-class.html">Type</a></span> 

</dt>
<dd class="inherited">
  A representation of the runtime type of the object.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="streamQueries" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/streamQueries.html">streamQueries</a></span>
  <span class="signature">→ StreamQueryStore</span> 

</dt>
<dd class="inherited">
  Manages active streams from select statements.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="typeMapping" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/typeMapping.html">typeMapping</a></span>
  <span class="signature">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/SqlTypes-class.html">SqlTypes</a></span> 

</dt>
<dd class="inherited">
  A <a href="https://pub.dev/documentation/drift/2.6.0/drift/SqlTypes-class.html">SqlTypes</a> mapping configuration to use when mapping values between Dart
and SQL.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="unpackSpec" class="property inherited">
  <span class="name"><a href="../ungraph_database/UnpackSpecDao/unpackSpec">unpackSpec</a></span>
  <span class="signature">→ <a href="../ungraph_database/\$UnpackSpecTable">\$UnpackSpecTable</a></span> 

</dt>
<dd class="inherited">
  
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

      </dl>
    </section>

    
  <section class="summary offset-anchor" id="instance-methods">
    <h2>Methods</h2>
    <dl class="callables">
        <dt id="\$expandVar" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/\$expandVar.html">\$expandVar</a></span><span class="signature">(<wbr><span class="parameter" id="\$expandVar-param-start"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> <span class="parameter-name">start</span>, </span><span class="parameter" id="\$expandVar-param-amount"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> <span class="parameter-name">amount</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>
  </span>
  

</dt>
<dd class="inherited">
  Used by generated code to expand array variables.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="\$write" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/\$write.html">\$write</a></span><span class="signature">(<wbr><span class="parameter" id="\$write-param-component"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Component-class.html">Component</a></span> <span class="parameter-name">component</span>, </span><span class="parameter" id="\$write-param-hasMultipleTables">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a>?</span> <span class="parameter-name">hasMultipleTables</span>, </span><span class="parameter" id="\$write-param-startIndex"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a>?</span> <span class="parameter-name">startIndex</span>}</span>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/GenerationContext-class.html">GenerationContext</a></span>
  </span>
  

</dt>
<dd class="inherited">
  Will be used by generated code to resolve inline Dart components in sql.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="\$writeInsertable" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/\$writeInsertable.html">\$writeInsertable</a></span><span class="signature">(<wbr><span class="parameter" id="\$writeInsertable-param-table"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/TableInfo-mixin.html">TableInfo</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table-class.html">Table</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">table</span>, </span><span class="parameter" id="\$writeInsertable-param-insertable"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Insertable-class.html">Insertable</a></span> <span class="parameter-name">insertable</span>, </span><span class="parameter" id="\$writeInsertable-param-startIndex">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a>?</span> <span class="parameter-name">startIndex</span>}</span>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/GenerationContext-class.html">GenerationContext</a></span>
  </span>
  

</dt>
<dd class="inherited">
  Writes column names and <code>VALUES</code> for an insert statement.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="alias" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/alias.html">alias</a></span><span class="signature">&lt;<wbr><span class="type-parameter">T</span>, <span class="type-parameter">D</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="alias-param-table"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/ResultSetImplementation-class.html">ResultSetImplementation</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>, <span class="type-parameter">D</span>&gt;</span></span> <span class="parameter-name">table</span>, </span><span class="parameter" id="alias-param-alias"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">alias</span></span>)
    <span class="returntype parameter">→ T</span>
  </span>
  

</dt>
<dd class="inherited">
  Creates a copy of the table with an alias so that it can be used in the
same query more than once.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="batch" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/batch.html">batch</a></span><span class="signature">(<wbr><span class="parameter" id="batch-param-runInBatch"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-async/FutureOr-class.html">FutureOr</a><span class="signature">&lt;<wbr><span class="type-parameter">void</span>&gt;</span></span> <span class="parameter-name">runInBatch</span>(<span class="parameter" id="param-batch"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Batch-class.html">Batch</a></span> <span class="parameter-name">batch</span></span>)</span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter">void</span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Runs statements inside a batch.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="close" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/close.html">close</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter">void</span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Closes this database and releases associated resources.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="createStream" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/createStream.html">createStream</a></span><span class="signature">(<wbr><span class="parameter" id="createStream-param-stmt"><span class="type-annotation">QueryStreamFetcher</span> <span class="parameter-name">stmt</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Stream-class.html">Stream</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span></span>&gt;</span></span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Creates and auto-updating stream from the given select statement. This
method should not be used directly.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="customInsert" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/customInsert.html">customInsert</a></span><span class="signature">(<wbr><span class="parameter" id="customInsert-param-query"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">query</span>, </span><span class="parameter" id="customInsert-param-variables">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Variable-class.html">Variable</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span>&gt;</span></span>&gt;</span></span> <span class="parameter-name">variables</span> = <span class="default-value">const []</span>, </span><span class="parameter" id="customInsert-param-updates"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Set-class.html">Set</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.6.0/drift/TableInfo-mixin.html">TableInfo</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table-class.html">Table</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span>&gt;</span>?</span> <span class="parameter-name">updates</span>}</span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Executes a custom insert statement and returns the last inserted rowid.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="customSelect" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/customSelect.html">customSelect</a></span><span class="signature">(<wbr><span class="parameter" id="customSelect-param-query"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">query</span>, </span><span class="parameter" id="customSelect-param-variables">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Variable-class.html">Variable</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span>&gt;</span></span>&gt;</span></span> <span class="parameter-name">variables</span> = <span class="default-value">const []</span>, </span><span class="parameter" id="customSelect-param-readsFrom"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Set-class.html">Set</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.6.0/drift/ResultSetImplementation-class.html">ResultSetImplementation</a></span>&gt;</span></span> <span class="parameter-name">readsFrom</span> = <span class="default-value">const {}</span>}</span>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/Selectable-class.html">Selectable</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.6.0/drift/QueryRow-class.html">QueryRow</a></span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Creates a custom select statement from the given sql <code>query</code>. To run the
query once, use <a href="https://pub.dev/documentation/drift/2.6.0/drift/Selectable/get.html">Selectable.get</a>. For an auto-updating streams, set the
set of tables the ready <code>readsFrom</code> and use <a href="https://pub.dev/documentation/drift/2.6.0/drift/Selectable/watch.html">Selectable.watch</a>. If you
know the query will never emit more than one row, you can also use
<code>getSingle</code> and <code>SelectableUtils.watchSingle</code> which return the item
directly without wrapping it into a list.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="customSelectQuery" class="callable inherited">
  <span class="name deprecated"><a class="deprecated" href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/customSelectQuery.html">customSelectQuery</a></span><span class="signature">(<wbr><span class="parameter" id="customSelectQuery-param-query"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">query</span>, </span><span class="parameter" id="customSelectQuery-param-variables">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Variable-class.html">Variable</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span>&gt;</span></span>&gt;</span></span> <span class="parameter-name">variables</span> = <span class="default-value">const []</span>, </span><span class="parameter" id="customSelectQuery-param-readsFrom"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Set-class.html">Set</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.6.0/drift/ResultSetImplementation-class.html">ResultSetImplementation</a></span>&gt;</span></span> <span class="parameter-name">readsFrom</span> = <span class="default-value">const {}</span>}</span>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/Selectable-class.html">Selectable</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.6.0/drift/QueryRow-class.html">QueryRow</a></span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Creates a custom select statement from the given sql <code>query</code>. To run the
query once, use <a href="https://pub.dev/documentation/drift/2.6.0/drift/Selectable/get.html">Selectable.get</a>. For an auto-updating streams, set the
set of tables the ready <code>readsFrom</code> and use <a href="https://pub.dev/documentation/drift/2.6.0/drift/Selectable/watch.html">Selectable.watch</a>. If you
know the query will never emit more than one row, you can also use
<code>getSingle</code> and <code>watchSingle</code> which return the item directly without
wrapping it into a list.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="customStatement" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/customStatement.html">customStatement</a></span><span class="signature">(<wbr><span class="parameter" id="customStatement-param-statement"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">statement</span>, </span><span class="parameter" id="customStatement-param-args">[<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a>?</span> <span class="parameter-name">args</span>]</span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter">void</span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Executes the custom sql <code>statement</code> on the database.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="customUpdate" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/customUpdate.html">customUpdate</a></span><span class="signature">(<wbr><span class="parameter" id="customUpdate-param-query"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">query</span>, </span><span class="parameter" id="customUpdate-param-variables">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Variable-class.html">Variable</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span>&gt;</span></span>&gt;</span></span> <span class="parameter-name">variables</span> = <span class="default-value">const []</span>, </span><span class="parameter" id="customUpdate-param-updates"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Set-class.html">Set</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.6.0/drift/TableInfo-mixin.html">TableInfo</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table-class.html">Table</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span>&gt;</span>?</span> <span class="parameter-name">updates</span>, </span><span class="parameter" id="customUpdate-param-updateKind"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/UpdateKind.html">UpdateKind</a>?</span> <span class="parameter-name">updateKind</span>}</span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Executes a custom delete or update statement and returns the amount of
rows that have been changed.
You can use the <code>updates</code> parameter so that drift knows which tables are
affected by your query. All select streams that depend on a table
specified there will then update their data. For more accurate results,
you can also set the <code>updateKind</code> parameter to <a href="https://pub.dev/documentation/drift/2.6.0/drift/UpdateKind.html">UpdateKind.delete</a> or
<a href="https://pub.dev/documentation/drift/2.6.0/drift/UpdateKind.html">UpdateKind.update</a>. This is optional, but can improve the accuracy of
query updates, especially when using triggers.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="customWriteReturning" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/customWriteReturning.html">customWriteReturning</a></span><span class="signature">(<wbr><span class="parameter" id="customWriteReturning-param-query"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">query</span>, </span><span class="parameter" id="customWriteReturning-param-variables">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Variable-class.html">Variable</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span>&gt;</span></span>&gt;</span></span> <span class="parameter-name">variables</span> = <span class="default-value">const []</span>, </span><span class="parameter" id="customWriteReturning-param-updates"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Set-class.html">Set</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.6.0/drift/TableInfo-mixin.html">TableInfo</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table-class.html">Table</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span>&gt;</span>?</span> <span class="parameter-name">updates</span>, </span><span class="parameter" id="customWriteReturning-param-updateKind"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/UpdateKind.html">UpdateKind</a>?</span> <span class="parameter-name">updateKind</span>}</span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.6.0/drift/QueryRow-class.html">QueryRow</a></span>&gt;</span></span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Runs a <code>INSERT</code>, <code>UPDATE</code> or <code>DELETE</code> statement returning rows.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="delete" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/delete.html">delete</a></span><span class="signature">&lt;<wbr><span class="type-parameter">T extends <a href="https://pub.dev/documentation/drift/2.6.0/drift/Table-class.html">Table</a></span>, <span class="type-parameter">D</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="delete-param-table"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/TableInfo-mixin.html">TableInfo</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>, <span class="type-parameter">D</span>&gt;</span></span> <span class="parameter-name">table</span></span>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/DeleteStatement-class.html">DeleteStatement</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>, <span class="type-parameter">D</span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Starts a <a href="https://pub.dev/documentation/drift/2.6.0/drift/DeleteStatement-class.html">DeleteStatement</a> that can be used to delete rows from a table.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="doWhenOpened" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/doWhenOpened.html">doWhenOpened</a></span><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="doWhenOpened-param-fn"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-async/FutureOr-class.html">FutureOr</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></span> <span class="parameter-name">fn</span>(<span class="parameter" id="param-e"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/backends/QueryExecutor-class.html">QueryExecutor</a></span> <span class="parameter-name">e</span></span>)</span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Performs the async <code>fn</code> after this executor is ready, or directly if it's
already ready.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="get" class="callable">
  <span class="name"><a href="../ungraph_database/UnpackSpecDao/get">get</a></span><span class="signature">(<wbr><span class="parameter" id="get-param-id"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../ungraph_database/UnpackSpecData">UnpackSpecData</a></span>&gt;</span></span>
  </span>
  

</dt>
<dd>
  
  

</dd>

        <dt id="getAll" class="callable">
  <span class="name"><a href="../ungraph_database/UnpackSpecDao/getAll">getAll</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../ungraph_database/UnpackSpecData">UnpackSpecData</a></span>&gt;</span></span>&gt;</span></span>
  </span>
  

</dt>
<dd>
  
  

</dd>

        <dt id="into" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/into.html">into</a></span><span class="signature">&lt;<wbr><span class="type-parameter">T extends <a href="https://pub.dev/documentation/drift/2.6.0/drift/Table-class.html">Table</a></span>, <span class="type-parameter">D</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="into-param-table"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/TableInfo-mixin.html">TableInfo</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>, <span class="type-parameter">D</span>&gt;</span></span> <span class="parameter-name">table</span></span>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/InsertStatement-class.html">InsertStatement</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>, <span class="type-parameter">D</span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Starts an <a href="https://pub.dev/documentation/drift/2.6.0/drift/InsertStatement-class.html">InsertStatement</a> for a given table. You can use that statement
to write data into the <code>table</code> by using <a href="https://pub.dev/documentation/drift/2.6.0/drift/InsertStatement/insert.html">InsertStatement.insert</a>.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="markTablesUpdated" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/markTablesUpdated.html">markTablesUpdated</a></span><span class="signature">(<wbr><span class="parameter" id="markTablesUpdated-param-tables"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Iterable-class.html">Iterable</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.6.0/drift/TableInfo-mixin.html">TableInfo</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Table-class.html">Table</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span>&gt;</span></span> <span class="parameter-name">tables</span></span>)
    <span class="returntype parameter">→ void</span>
  </span>
  

</dt>
<dd class="inherited">
  Marks the <code>tables</code> as updated.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="noSuchMethod" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></span><span class="signature">(<wbr><span class="parameter" id="noSuchMethod-param-invocation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Invocation-class.html">Invocation</a></span> <span class="parameter-name">invocation</span></span>)
    <span class="returntype parameter">→ dynamic</span>
  </span>
  

</dt>
<dd class="inherited">
  Invoked when a non-existent method or property is accessed.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="notifyUpdates" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/notifyUpdates.html">notifyUpdates</a></span><span class="signature">(<wbr><span class="parameter" id="notifyUpdates-param-updates"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Set-class.html">Set</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.6.0/drift/TableUpdate-class.html">TableUpdate</a></span>&gt;</span></span> <span class="parameter-name">updates</span></span>)
    <span class="returntype parameter">→ void</span>
  </span>
  

</dt>
<dd class="inherited">
  Dispatches the set of <code>updates</code> to the stream query manager.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="put" class="callable">
  <span class="name"><a href="../ungraph_database/UnpackSpecDao/put">put</a></span><span class="signature">(<wbr><span class="parameter" id="put-param-entity"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Insertable-class.html">Insertable</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../ungraph_database/UnpackSpecData">UnpackSpecData</a></span>&gt;</span></span> <span class="parameter-name">entity</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../ungraph_database/UnpackSpecData">UnpackSpecData</a></span>&gt;</span></span>
  </span>
  

</dt>
<dd>
  
  

</dd>

        <dt id="putAll" class="callable">
  <span class="name"><a href="../ungraph_database/UnpackSpecDao/putAll">putAll</a></span><span class="signature">(<wbr><span class="parameter" id="putAll-param-entities"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Iterable-class.html">Iterable</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Insertable-class.html">Insertable</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../ungraph_database/UnpackSpecData">UnpackSpecData</a></span>&gt;</span></span>&gt;</span></span> <span class="parameter-name">entities</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter">void</span>&gt;</span></span>
  </span>
  

</dt>
<dd>
  
  

</dd>

        <dt id="select" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/select.html">select</a></span><span class="signature">&lt;<wbr><span class="type-parameter">T extends <a href="https://pub.dev/documentation/drift/2.6.0/drift/HasResultSet-class.html">HasResultSet</a></span>, <span class="type-parameter">R</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="select-param-table"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/ResultSetImplementation-class.html">ResultSetImplementation</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>, <span class="type-parameter">R</span>&gt;</span></span> <span class="parameter-name">table</span>, </span><span class="parameter" id="select-param-distinct">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">distinct</span> = <span class="default-value">false</span>}</span>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/SimpleSelectStatement-class.html">SimpleSelectStatement</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>, <span class="type-parameter">R</span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Starts a query on the given table.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="selectOnly" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/selectOnly.html">selectOnly</a></span><span class="signature">&lt;<wbr><span class="type-parameter">T extends <a href="https://pub.dev/documentation/drift/2.6.0/drift/HasResultSet-class.html">HasResultSet</a></span>, <span class="type-parameter">R</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="selectOnly-param-table"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/ResultSetImplementation-class.html">ResultSetImplementation</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>, <span class="type-parameter">R</span>&gt;</span></span> <span class="parameter-name">table</span>, </span><span class="parameter" id="selectOnly-param-distinct">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">distinct</span> = <span class="default-value">false</span>}</span>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/JoinedSelectStatement-class.html">JoinedSelectStatement</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>, <span class="type-parameter">R</span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Starts a complex statement on <code>table</code> that doesn't necessarily use all of
<code>table</code>'s columns.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="tableUpdates" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/tableUpdates.html">tableUpdates</a></span><span class="signature">(<wbr><span class="parameter" id="tableUpdates-param-query">[<span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/TableUpdateQuery-class.html">TableUpdateQuery</a></span> <span class="parameter-name">query</span> = <span class="default-value">const TableUpdateQuery.any()</span>]</span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Stream-class.html">Stream</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Set-class.html">Set</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.6.0/drift/TableUpdate-class.html">TableUpdate</a></span>&gt;</span></span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Listen for table updates reported through <a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/notifyUpdates.html">notifyUpdates</a>.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="toString" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>
  </span>
  

</dt>
<dd class="inherited">
  A string representation of this object.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="transaction" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/transaction.html">transaction</a></span><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="transaction-param-action"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></span> <span class="parameter-name">action</span>(), </span><span class="parameter" id="transaction-param-requireNew">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">requireNew</span> = <span class="default-value">false</span>}</span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Executes <code>action</code> in a transaction, which means that all its queries and
updates will be called atomically.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="update" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/update.html">update</a></span><span class="signature">&lt;<wbr><span class="type-parameter">Tbl extends <a href="https://pub.dev/documentation/drift/2.6.0/drift/Table-class.html">Table</a></span>, <span class="type-parameter">R</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="update-param-table"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/TableInfo-mixin.html">TableInfo</a><span class="signature">&lt;<wbr><span class="type-parameter">Tbl</span>, <span class="type-parameter">R</span>&gt;</span></span> <span class="parameter-name">table</span></span>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/UpdateStatement-class.html">UpdateStatement</a><span class="signature">&lt;<wbr><span class="type-parameter">Tbl</span>, <span class="type-parameter">R</span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Starts an <a href="https://pub.dev/documentation/drift/2.6.0/drift/UpdateStatement-class.html">UpdateStatement</a> for the given table. You can use that
statement to update individual rows in that table by setting a where
clause on that table and then use <a href="https://pub.dev/documentation/drift/2.6.0/drift/UpdateStatement/write.html">UpdateStatement.write</a>.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="watchAll" class="callable">
  <span class="name"><a href="../ungraph_database/UnpackSpecDao/watchAll">watchAll</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Stream-class.html">Stream</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../ungraph_database/UnpackSpecData">UnpackSpecData</a></span>&gt;</span></span>&gt;</span></span>
  </span>
  

</dt>
<dd>
  
  

</dd>

    </dl>
  </section>
    
  <section class="summary offset-anchor inherited" id="operators">
    <h2>Operators</h2>
    <dl class="callables">
        <dt id="operator ==" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>
  </span>
  

</dt>
<dd class="inherited">
  The equality operator.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

    </dl>
  </section>
    
    
    


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../index">ungraph_database</a></li>
  <li><a href="../ungraph_database/ungraph_database">ungraph_database</a></li>
  <li class="self-crumb">UnpackSpecDao class</li>
</ol>


    <h5>ungraph_database library</h5>
    <ol>
      <li class="section-title"><a href="../ungraph_database/ungraph_database#classes">Classes</a></li>
        <li><a href="../ungraph_database/\$EdgeSpecTable">\$EdgeSpecTable</a></li>
        <li><a href="../ungraph_database/\$NodeSpecTable">\$NodeSpecTable</a></li>
        <li><a href="../ungraph_database/\$UnpackSpecTable">\$UnpackSpecTable</a></li>
        <li><a href="../ungraph_database/\$UnpackStateTable">\$UnpackStateTable</a></li>
        <li><a href="../ungraph_database/DynamicColumn">DynamicColumn</a></li>
        <li><a href="../ungraph_database/DynamicDao">DynamicDao</a></li>
        <li><a href="../ungraph_database/DynamicData">DynamicData</a></li>
        <li><a href="../ungraph_database/DynamicDatabase">DynamicDatabase</a></li>
        <li><a href="../ungraph_database/DynamicTable">DynamicTable</a></li>
        <li><a href="../ungraph_database/EdgeDao">EdgeDao</a></li>
        <li><a href="../ungraph_database/EdgeData">EdgeData</a></li>
        <li><a href="../ungraph_database/EdgeSpec">EdgeSpec</a></li>
        <li><a href="../ungraph_database/EdgeSpecCompanion">EdgeSpecCompanion</a></li>
        <li><a href="../ungraph_database/EdgeSpecDao">EdgeSpecDao</a></li>
        <li><a href="../ungraph_database/EdgeSpecData">EdgeSpecData</a></li>
        <li><a href="../ungraph_database/EdgeTable">EdgeTable</a></li>
        <li><a href="../ungraph_database/ListConverter">ListConverter</a></li>
        <li><a href="../ungraph_database/MapConverter">MapConverter</a></li>
        <li><a href="../ungraph_database/NodeDao">NodeDao</a></li>
        <li><a href="../ungraph_database/NodeData">NodeData</a></li>
        <li><a href="../ungraph_database/NodeSpec">NodeSpec</a></li>
        <li><a href="../ungraph_database/NodeSpecCompanion">NodeSpecCompanion</a></li>
        <li><a href="../ungraph_database/NodeSpecDao">NodeSpecDao</a></li>
        <li><a href="../ungraph_database/NodeSpecData">NodeSpecData</a></li>
        <li><a href="../ungraph_database/NodeTable">NodeTable</a></li>
        <li><a href="https://pub.dev/documentation/slugid/1.1.1/slugid/Slugid-class.html">Slugid</a></li>
        <li><a href="../ungraph_database/UngraphDatabase">UngraphDatabase</a></li>
        <li><a href="../ungraph_database/UnpackSpec">UnpackSpec</a></li>
        <li><a href="../ungraph_database/UnpackSpecCompanion">UnpackSpecCompanion</a></li>
        <li><a href="../ungraph_database/UnpackSpecDao">UnpackSpecDao</a></li>
        <li><a href="../ungraph_database/UnpackSpecData">UnpackSpecData</a></li>
        <li><a href="../ungraph_database/UnpackState">UnpackState</a></li>
        <li><a href="../ungraph_database/UnpackStateCompanion">UnpackStateCompanion</a></li>
        <li><a href="../ungraph_database/UnpackStateDao">UnpackStateDao</a></li>
        <li><a href="../ungraph_database/UnpackStateData">UnpackStateData</a></li>
        <li><a href="https://pub.dev/documentation/drift/2.6.0/drift/Value-class.html">Value</a></li>


      <li class="section-title"><a href="../ungraph_database/ungraph_database#mixins">Mixins</a></li>
        <li><a href="../ungraph_database/PrimaryUuid-mixin">PrimaryUuid</a></li>



      <li class="section-title"><a href="../ungraph_database/ungraph_database#functions">Functions</a></li>
        <li><a href="../ungraph_database/connect">connect</a></li>



</ol>

  </div>

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
    <ol>

        <li class="section-title"><a href="../ungraph_database/UnpackSpecDao#constructors">Constructors</a></li>
          <li><a href="../ungraph_database/UnpackSpecDao/UnpackSpecDao.constructor">UnpackSpecDao</a></li>


        <li class="section-title">
          <a href="../ungraph_database/UnpackSpecDao#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseAccessor/attachedDatabase.html">attachedDatabase</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/connection.html">connection</a></li>
          <li><a href="../ungraph_database/UnpackSpecDao/count">count</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/executor.html">executor</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li><a href="../ungraph_database/UnpackSpecDao/isEmpty">isEmpty</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/options.html">options</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/resolvedEngine.html">resolvedEngine</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/streamQueries.html">streamQueries</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/typeMapping.html">typeMapping</a></li>
          <li class="inherited"><a href="../ungraph_database/UnpackSpecDao/unpackSpec">unpackSpec</a></li>

        <li class="section-title"><a href="../ungraph_database/UnpackSpecDao#instance-methods">Methods</a></li>
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
          <li><a href="../ungraph_database/UnpackSpecDao/get">get</a></li>
          <li><a href="../ungraph_database/UnpackSpecDao/getAll">getAll</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/into.html">into</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/markTablesUpdated.html">markTablesUpdated</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/notifyUpdates.html">notifyUpdates</a></li>
          <li><a href="../ungraph_database/UnpackSpecDao/put">put</a></li>
          <li><a href="../ungraph_database/UnpackSpecDao/putAll">putAll</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/select.html">select</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/selectOnly.html">selectOnly</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/tableUpdates.html">tableUpdates</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/transaction.html">transaction</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnectionUser/update.html">update</a></li>
          <li><a href="../ungraph_database/UnpackSpecDao/watchAll">watchAll</a></li>

        <li class="section-title inherited"><a href="../ungraph_database/UnpackSpecDao#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>




</ol>

  </div><!--/.sidebar-offcanvas-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
