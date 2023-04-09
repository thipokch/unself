import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-class">LocalDatabase</span> class 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    
<section class="desc markdown">
  <p><a href="../unself_local_database/LocalDatabase">LocalDatabase</a> description</p>
</section>


    <section>
      <dl class="dl-horizontal">
        
  <dt>Inheritance</dt>
  <dd>
    <ul class="gt-separated dark clazz-relationships">
      <li><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></li>
        <li><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser-class.html">DatabaseConnectionUser</a></li>
        <li><a href="https://pub.dev/documentation/drift/2.4.2/drift/GeneratedDatabase-class.html">GeneratedDatabase</a></li>
      <li>LocalDatabase</li>
    </ul>
  </dd>

        
        


        <dt>Available Extensions</dt>
        <dd><ul class="comma-separated clazz-relationships">
          <li><a href="https://pub.dev/documentation/drift/2.4.2/drift/DestructiveMigrationExtension.html">DestructiveMigrationExtension</a></li>
          <li><a href="https://pub.dev/documentation/drift/2.4.2/drift.internal.modules/ReadDatabaseContainer.html">ReadDatabaseContainer</a></li>
        </ul></dd>

        
  <dt>Annotations</dt>
  <dd>
    <ul class="annotation-list clazz-relationships">
        <li>@<a href="https://pub.dev/documentation/drift/2.4.2/drift/DriftDatabase-class.html">DriftDatabase</a>(tables: [Collection, Field], daos: [CollectionDao, DocumentDao])</li>
    </ul>
  </dd>


      </dl>
    </section>

    
  <section class="summary offset-anchor" id="constructors">
    <h2>Constructors</h2>

    <dl class="constructor-summary-list">
        <dt id="LocalDatabase" class="callable">
          <span class="name"><a href="../unself_local_database/LocalDatabase/LocalDatabase.constructor">LocalDatabase</a></span><span class="signature">(<span class="parameter" id="-param-qe">[<span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/backends/QueryExecutor-class.html">QueryExecutor</a>?</span> <span class="parameter-name">qe</span>]</span>)</span>
        </dt>
        <dd>
          <a href="../unself_local_database/LocalDatabase">LocalDatabase</a> description
        </dd>
    </dl>
  </section>

    <section class="summary offset-anchor" id="instance-properties">
      <h2>Properties</h2>

      <dl class="properties">
        <dt id="allSchemaEntities" class="property inherited">
  <span class="name"><a href="../unself_local_database/LocalDatabase/allSchemaEntities">allSchemaEntities</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseSchemaEntity-class.html">DatabaseSchemaEntity</a></span>&gt;</span></span> 

</dt>
<dd class="inherited">
  A list of all <code>DatabaseSchemaEntity</code> that are specified in this database.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="allTables" class="property inherited">
  <span class="name"><a href="../unself_local_database/LocalDatabase/allTables">allTables</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/Iterable-class.html">Iterable</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo-mixin.html">TableInfo</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table-class.html">Table</a></span>, <span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span></span>&gt;</span></span> 

</dt>
<dd class="inherited">
  A list of tables specified in this database.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="allTablesCollections" class="property">
  <span class="name"><a href="../unself_local_database/LocalDatabase/allTablesCollections">allTablesCollections</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span>&gt;</span></span> 

</dt>
<dd>
  <a href="../unself_local_database/LocalDatabase/allTablesCollections">allTablesCollections</a> returns a list of all table names,
including dynamic <a href="../unself_local_database/Collection">Collection</a>s, in the local_database.
  <div class="features"><span class="feature">read-only</span></div>

</dd>

        <dt id="attachedDatabase" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/GeneratedDatabase/attachedDatabase.html">attachedDatabase</a></span>
  <span class="signature">→ <a href="https://pub.dev/documentation/drift/2.4.2/drift/GeneratedDatabase-class.html">GeneratedDatabase</a></span> 

</dt>
<dd class="inherited">
  The database class that this user is attached to.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="collection" class="property inherited">
  <span class="name"><a href="../unself_local_database/LocalDatabase/collection">collection</a></span>
  <span class="signature">→ <a href="../unself_local_database/\$CollectionTable">\$CollectionTable</a></span> 

</dt>
<dd class="inherited">
  
  <div class="features"><span class="feature">late</span><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="collectionDao" class="property inherited">
  <span class="name"><a href="../unself_local_database/LocalDatabase/collectionDao">collectionDao</a></span>
  <span class="signature">→ <a href="../unself_local_database/CollectionDao">CollectionDao</a></span> 

</dt>
<dd class="inherited">
  
  <div class="features"><span class="feature">late</span><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="connection" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/connection.html">connection</a></span>
  <span class="signature">→ <a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnection-class.html">DatabaseConnection</a></span> 

</dt>
<dd class="inherited">
  The database connection used by this <a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser-class.html">DatabaseConnectionUser</a>.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="documentDao" class="property inherited">
  <span class="name"><a href="../unself_local_database/LocalDatabase/documentDao">documentDao</a></span>
  <span class="signature">→ <a href="../unself_local_database/DocumentDao">DocumentDao</a></span> 

</dt>
<dd class="inherited">
  
  <div class="features"><span class="feature">late</span><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="executor" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/executor.html">executor</a></span>
  <span class="signature">→ <a href="https://pub.dev/documentation/drift/2.4.2/backends/QueryExecutor-class.html">QueryExecutor</a></span> 

</dt>
<dd class="inherited">
  The executor to use when queries are executed.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="field" class="property inherited">
  <span class="name"><a href="../unself_local_database/LocalDatabase/field">field</a></span>
  <span class="signature">→ <a href="../unself_local_database/\$FieldTable">\$FieldTable</a></span> 

</dt>
<dd class="inherited">
  
  <div class="features"><span class="feature">late</span><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="hashCode" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> 

</dt>
<dd class="inherited">
  The hash code for this object.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="migration" class="property">
  <span class="name"><a href="../unself_local_database/LocalDatabase/migration">migration</a></span>
  <span class="signature">→ <a href="https://pub.dev/documentation/drift/2.4.2/drift/MigrationStrategy-class.html">MigrationStrategy</a></span> 

</dt>
<dd>
  Defines the migration strategy that will determine how to deal with an
increasing <a href="../unself_local_database/LocalDatabase/schemaVersion">schemaVersion</a>. The default value only supports creating the
database by creating all tables known in this database. When you have
changes in your schema, you'll need a custom migration strategy to create
the new tables or change the columns.
  <div class="features"><span class="feature">read-only</span><span class="feature">override</span></div>

</dd>

        <dt id="options" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/GeneratedDatabase/options.html">options</a></span>
  <span class="signature">→ <a href="https://pub.dev/documentation/drift/2.4.2/drift/DriftDatabaseOptions-class.html">DriftDatabaseOptions</a></span> 

</dt>
<dd class="inherited">
  The <a href="https://pub.dev/documentation/drift/2.4.2/drift/DriftDatabaseOptions-class.html">DriftDatabaseOptions</a> to use for this database instance.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="resolvedEngine" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/resolvedEngine.html">resolvedEngine</a></span>
  <span class="signature">→ <a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser-class.html">DatabaseConnectionUser</a></span> 

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

        <dt id="schemaVersion" class="property">
  <span class="name"><a href="../unself_local_database/LocalDatabase/schemaVersion">schemaVersion</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> 

</dt>
<dd>
  Specify the schema version of your database. Whenever you change or add
tables, you should bump this field and provide a <a href="../unself_local_database/LocalDatabase/migration">migration</a> strategy.
  <div class="features"><span class="feature">read-only</span><span class="feature">override</span></div>

</dd>

        <dt id="streamQueries" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/streamQueries.html">streamQueries</a></span>
  <span class="signature">→ StreamQueryStore</span> 

</dt>
<dd class="inherited">
  Manages active streams from select statements.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="streamUpdateRules" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/GeneratedDatabase/streamUpdateRules.html">streamUpdateRules</a></span>
  <span class="signature">→ <a href="https://pub.dev/documentation/drift/2.4.2/drift/StreamQueryUpdateRules-class.html">StreamQueryUpdateRules</a></span> 

</dt>
<dd class="inherited">
  The collection of update rules contains information on how updates on
tables result in other updates, for instance due to a trigger.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="typeMapping" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/typeMapping.html">typeMapping</a></span>
  <span class="signature">→ <a href="https://pub.dev/documentation/drift/2.4.2/drift/SqlTypes-class.html">SqlTypes</a></span> 

</dt>
<dd class="inherited">
  A <a href="https://pub.dev/documentation/drift/2.4.2/drift/SqlTypes-class.html">SqlTypes</a> mapping configuration to use when mapping values between Dart
and SQL.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

      </dl>
    </section>

    
  <section class="summary offset-anchor inherited" id="instance-methods">
    <h2>Methods</h2>
    <dl class="callables">
        <dt id="\$expandVar" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/\$expandVar.html">\$expandVar</a></span><span class="signature">(<wbr><span class="parameter" id="\$expandVar-param-start"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> <span class="parameter-name">start</span>, </span><span class="parameter" id="\$expandVar-param-amount"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> <span class="parameter-name">amount</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>
  </span>
  

</dt>
<dd class="inherited">
  Used by generated code to expand array variables.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="\$write" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/\$write.html">\$write</a></span><span class="signature">(<wbr><span class="parameter" id="\$write-param-component"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Component-class.html">Component</a></span> <span class="parameter-name">component</span>, </span><span class="parameter" id="\$write-param-hasMultipleTables">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a>?</span> <span class="parameter-name">hasMultipleTables</span>, </span><span class="parameter" id="\$write-param-startIndex"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a>?</span> <span class="parameter-name">startIndex</span>}</span>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.4.2/drift/GenerationContext-class.html">GenerationContext</a></span>
  </span>
  

</dt>
<dd class="inherited">
  Will be used by generated code to resolve inline Dart components in sql.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="\$writeInsertable" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/\$writeInsertable.html">\$writeInsertable</a></span><span class="signature">(<wbr><span class="parameter" id="\$writeInsertable-param-table"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo-mixin.html">TableInfo</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table-class.html">Table</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">table</span>, </span><span class="parameter" id="\$writeInsertable-param-insertable"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Insertable-class.html">Insertable</a></span> <span class="parameter-name">insertable</span>, </span><span class="parameter" id="\$writeInsertable-param-startIndex">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a>?</span> <span class="parameter-name">startIndex</span>}</span>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.4.2/drift/GenerationContext-class.html">GenerationContext</a></span>
  </span>
  

</dt>
<dd class="inherited">
  Writes column names and <code>VALUES</code> for an insert statement.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="alias" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/alias.html">alias</a></span><span class="signature">&lt;<wbr><span class="type-parameter">T</span>, <span class="type-parameter">D</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="alias-param-table"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/ResultSetImplementation-class.html">ResultSetImplementation</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>, <span class="type-parameter">D</span>&gt;</span></span> <span class="parameter-name">table</span>, </span><span class="parameter" id="alias-param-alias"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">alias</span></span>)
    <span class="returntype parameter">→ T</span>
  </span>
  

</dt>
<dd class="inherited">
  Creates a copy of the table with an alias so that it can be used in the
same query more than once.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="batch" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/batch.html">batch</a></span><span class="signature">(<wbr><span class="parameter" id="batch-param-runInBatch"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-async/FutureOr-class.html">FutureOr</a><span class="signature">&lt;<wbr><span class="type-parameter">void</span>&gt;</span></span> <span class="parameter-name">runInBatch</span>(<span class="parameter" id="param-batch"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Batch-class.html">Batch</a></span> <span class="parameter-name">batch</span></span>)</span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter">void</span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Runs statements inside a batch.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="beforeOpen" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/GeneratedDatabase/beforeOpen.html">beforeOpen</a></span><span class="signature">(<wbr><span class="parameter" id="beforeOpen-param-executor"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/backends/QueryExecutor-class.html">QueryExecutor</a></span> <span class="parameter-name">executor</span>, </span><span class="parameter" id="beforeOpen-param-details"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/OpeningDetails-class.html">OpeningDetails</a></span> <span class="parameter-name">details</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter">void</span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  A callbacks that runs after the database connection has been established,
but before any other query is sent.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="close" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/GeneratedDatabase/close.html">close</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter">void</span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Closes this database and releases associated resources.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="createMigrator" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/GeneratedDatabase/createMigrator.html">createMigrator</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.4.2/drift/Migrator-class.html">Migrator</a></span>
  </span>
  

</dt>
<dd class="inherited">
  Creates a <a href="https://pub.dev/documentation/drift/2.4.2/drift/Migrator-class.html">Migrator</a> with the provided query executor. Migrators generate
sql statements to create or drop tables.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="createStream" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/createStream.html">createStream</a></span><span class="signature">(<wbr><span class="parameter" id="createStream-param-stmt"><span class="type-annotation">QueryStreamFetcher</span> <span class="parameter-name">stmt</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Stream-class.html">Stream</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span></span>&gt;</span></span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Creates and auto-updating stream from the given select statement. This
method should not be used directly.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="customInsert" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/customInsert.html">customInsert</a></span><span class="signature">(<wbr><span class="parameter" id="customInsert-param-query"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">query</span>, </span><span class="parameter" id="customInsert-param-variables">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Variable-class.html">Variable</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span>&gt;</span></span>&gt;</span></span> <span class="parameter-name">variables</span> = <span class="default-value">const []</span>, </span><span class="parameter" id="customInsert-param-updates"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Set-class.html">Set</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo-mixin.html">TableInfo</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table-class.html">Table</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span>&gt;</span>?</span> <span class="parameter-name">updates</span>}</span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Executes a custom insert statement and returns the last inserted rowid.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="customSelect" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/customSelect.html">customSelect</a></span><span class="signature">(<wbr><span class="parameter" id="customSelect-param-query"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">query</span>, </span><span class="parameter" id="customSelect-param-variables">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Variable-class.html">Variable</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span>&gt;</span></span>&gt;</span></span> <span class="parameter-name">variables</span> = <span class="default-value">const []</span>, </span><span class="parameter" id="customSelect-param-readsFrom"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Set-class.html">Set</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.4.2/drift/ResultSetImplementation-class.html">ResultSetImplementation</a></span>&gt;</span></span> <span class="parameter-name">readsFrom</span> = <span class="default-value">const {}</span>}</span>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.4.2/drift/Selectable-class.html">Selectable</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.4.2/drift/QueryRow-class.html">QueryRow</a></span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Creates a custom select statement from the given sql <code>query</code>. To run the
query once, use <a href="https://pub.dev/documentation/drift/2.4.2/drift/Selectable/get.html">Selectable.get</a>. For an auto-updating streams, set the
set of tables the ready <code>readsFrom</code> and use <a href="https://pub.dev/documentation/drift/2.4.2/drift/Selectable/watch.html">Selectable.watch</a>. If you
know the query will never emit more than one row, you can also use
<code>getSingle</code> and <code>SelectableUtils.watchSingle</code> which return the item
directly without wrapping it into a list.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="customSelectQuery" class="callable inherited">
  <span class="name deprecated"><a class="deprecated" href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/customSelectQuery.html">customSelectQuery</a></span><span class="signature">(<wbr><span class="parameter" id="customSelectQuery-param-query"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">query</span>, </span><span class="parameter" id="customSelectQuery-param-variables">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Variable-class.html">Variable</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span>&gt;</span></span>&gt;</span></span> <span class="parameter-name">variables</span> = <span class="default-value">const []</span>, </span><span class="parameter" id="customSelectQuery-param-readsFrom"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Set-class.html">Set</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.4.2/drift/ResultSetImplementation-class.html">ResultSetImplementation</a></span>&gt;</span></span> <span class="parameter-name">readsFrom</span> = <span class="default-value">const {}</span>}</span>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.4.2/drift/Selectable-class.html">Selectable</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.4.2/drift/QueryRow-class.html">QueryRow</a></span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Creates a custom select statement from the given sql <code>query</code>. To run the
query once, use <a href="https://pub.dev/documentation/drift/2.4.2/drift/Selectable/get.html">Selectable.get</a>. For an auto-updating streams, set the
set of tables the ready <code>readsFrom</code> and use <a href="https://pub.dev/documentation/drift/2.4.2/drift/Selectable/watch.html">Selectable.watch</a>. If you
know the query will never emit more than one row, you can also use
<code>getSingle</code> and <code>watchSingle</code> which return the item directly without
wrapping it into a list.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="customStatement" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/customStatement.html">customStatement</a></span><span class="signature">(<wbr><span class="parameter" id="customStatement-param-statement"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">statement</span>, </span><span class="parameter" id="customStatement-param-args">[<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a>?</span> <span class="parameter-name">args</span>]</span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter">void</span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Executes the custom sql <code>statement</code> on the database.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="customUpdate" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/customUpdate.html">customUpdate</a></span><span class="signature">(<wbr><span class="parameter" id="customUpdate-param-query"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">query</span>, </span><span class="parameter" id="customUpdate-param-variables">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Variable-class.html">Variable</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span>&gt;</span></span>&gt;</span></span> <span class="parameter-name">variables</span> = <span class="default-value">const []</span>, </span><span class="parameter" id="customUpdate-param-updates"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Set-class.html">Set</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo-mixin.html">TableInfo</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table-class.html">Table</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span>&gt;</span>?</span> <span class="parameter-name">updates</span>, </span><span class="parameter" id="customUpdate-param-updateKind"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/UpdateKind.html">UpdateKind</a>?</span> <span class="parameter-name">updateKind</span>}</span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Executes a custom delete or update statement and returns the amount of
rows that have been changed.
You can use the <code>updates</code> parameter so that drift knows which tables are
affected by your query. All select streams that depend on a table
specified there will then update their data. For more accurate results,
you can also set the <code>updateKind</code> parameter to <a href="https://pub.dev/documentation/drift/2.4.2/drift/UpdateKind.html">UpdateKind.delete</a> or
<a href="https://pub.dev/documentation/drift/2.4.2/drift/UpdateKind.html">UpdateKind.update</a>. This is optional, but can improve the accuracy of
query updates, especially when using triggers.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="customWriteReturning" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/customWriteReturning.html">customWriteReturning</a></span><span class="signature">(<wbr><span class="parameter" id="customWriteReturning-param-query"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">query</span>, </span><span class="parameter" id="customWriteReturning-param-variables">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Variable-class.html">Variable</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span>&gt;</span></span>&gt;</span></span> <span class="parameter-name">variables</span> = <span class="default-value">const []</span>, </span><span class="parameter" id="customWriteReturning-param-updates"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Set-class.html">Set</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo-mixin.html">TableInfo</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table-class.html">Table</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span>&gt;</span>?</span> <span class="parameter-name">updates</span>, </span><span class="parameter" id="customWriteReturning-param-updateKind"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/UpdateKind.html">UpdateKind</a>?</span> <span class="parameter-name">updateKind</span>}</span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.4.2/drift/QueryRow-class.html">QueryRow</a></span>&gt;</span></span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Runs a <code>INSERT</code>, <code>UPDATE</code> or <code>DELETE</code> statement returning rows.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="delete" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/delete.html">delete</a></span><span class="signature">&lt;<wbr><span class="type-parameter">T extends <a href="https://pub.dev/documentation/drift/2.4.2/drift/Table-class.html">Table</a></span>, <span class="type-parameter">D</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="delete-param-table"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo-mixin.html">TableInfo</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>, <span class="type-parameter">D</span>&gt;</span></span> <span class="parameter-name">table</span></span>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.4.2/drift/DeleteStatement-class.html">DeleteStatement</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>, <span class="type-parameter">D</span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Starts a <a href="https://pub.dev/documentation/drift/2.4.2/drift/DeleteStatement-class.html">DeleteStatement</a> that can be used to delete rows from a table.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="doWhenOpened" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/doWhenOpened.html">doWhenOpened</a></span><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="doWhenOpened-param-fn"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-async/FutureOr-class.html">FutureOr</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></span> <span class="parameter-name">fn</span>(<span class="parameter" id="param-e"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/backends/QueryExecutor-class.html">QueryExecutor</a></span> <span class="parameter-name">e</span></span>)</span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Performs the async <code>fn</code> after this executor is ready, or directly if it's
already ready.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="into" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/into.html">into</a></span><span class="signature">&lt;<wbr><span class="type-parameter">T extends <a href="https://pub.dev/documentation/drift/2.4.2/drift/Table-class.html">Table</a></span>, <span class="type-parameter">D</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="into-param-table"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo-mixin.html">TableInfo</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>, <span class="type-parameter">D</span>&gt;</span></span> <span class="parameter-name">table</span></span>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.4.2/drift/InsertStatement-class.html">InsertStatement</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>, <span class="type-parameter">D</span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Starts an <a href="https://pub.dev/documentation/drift/2.4.2/drift/InsertStatement-class.html">InsertStatement</a> for a given table. You can use that statement
to write data into the <code>table</code> by using <a href="https://pub.dev/documentation/drift/2.4.2/drift/InsertStatement/insert.html">InsertStatement.insert</a>.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="markTablesUpdated" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/markTablesUpdated.html">markTablesUpdated</a></span><span class="signature">(<wbr><span class="parameter" id="markTablesUpdated-param-tables"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Iterable-class.html">Iterable</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo-mixin.html">TableInfo</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table-class.html">Table</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span>&gt;</span></span> <span class="parameter-name">tables</span></span>)
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
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/notifyUpdates.html">notifyUpdates</a></span><span class="signature">(<wbr><span class="parameter" id="notifyUpdates-param-updates"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Set-class.html">Set</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableUpdate-class.html">TableUpdate</a></span>&gt;</span></span> <span class="parameter-name">updates</span></span>)
    <span class="returntype parameter">→ void</span>
  </span>
  

</dt>
<dd class="inherited">
  Dispatches the set of <code>updates</code> to the stream query manager.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="select" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/select.html">select</a></span><span class="signature">&lt;<wbr><span class="type-parameter">T extends <a href="https://pub.dev/documentation/drift/2.4.2/drift/HasResultSet-class.html">HasResultSet</a></span>, <span class="type-parameter">R</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="select-param-table"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/ResultSetImplementation-class.html">ResultSetImplementation</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>, <span class="type-parameter">R</span>&gt;</span></span> <span class="parameter-name">table</span>, </span><span class="parameter" id="select-param-distinct">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">distinct</span> = <span class="default-value">false</span>}</span>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.4.2/drift/SimpleSelectStatement-class.html">SimpleSelectStatement</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>, <span class="type-parameter">R</span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Starts a query on the given table.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="selectOnly" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/selectOnly.html">selectOnly</a></span><span class="signature">&lt;<wbr><span class="type-parameter">T extends <a href="https://pub.dev/documentation/drift/2.4.2/drift/HasResultSet-class.html">HasResultSet</a></span>, <span class="type-parameter">R</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="selectOnly-param-table"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/ResultSetImplementation-class.html">ResultSetImplementation</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>, <span class="type-parameter">R</span>&gt;</span></span> <span class="parameter-name">table</span>, </span><span class="parameter" id="selectOnly-param-distinct">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">distinct</span> = <span class="default-value">false</span>}</span>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.4.2/drift/JoinedSelectStatement-class.html">JoinedSelectStatement</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>, <span class="type-parameter">R</span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Starts a complex statement on <code>table</code> that doesn't necessarily use all of
<code>table</code>'s columns.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="tableUpdates" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/tableUpdates.html">tableUpdates</a></span><span class="signature">(<wbr><span class="parameter" id="tableUpdates-param-query">[<span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableUpdateQuery-class.html">TableUpdateQuery</a></span> <span class="parameter-name">query</span> = <span class="default-value">const TableUpdateQuery.any()</span>]</span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Stream-class.html">Stream</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Set-class.html">Set</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableUpdate-class.html">TableUpdate</a></span>&gt;</span></span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Listen for table updates reported through <a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/notifyUpdates.html">notifyUpdates</a>.
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
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/transaction.html">transaction</a></span><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="transaction-param-action"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></span> <span class="parameter-name">action</span>(), </span><span class="parameter" id="transaction-param-requireNew">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">requireNew</span> = <span class="default-value">false</span>}</span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Executes <code>action</code> in a transaction, which means that all its queries and
updates will be called atomically.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="update" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/update.html">update</a></span><span class="signature">&lt;<wbr><span class="type-parameter">Tbl extends <a href="https://pub.dev/documentation/drift/2.4.2/drift/Table-class.html">Table</a></span>, <span class="type-parameter">R</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="update-param-table"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo-mixin.html">TableInfo</a><span class="signature">&lt;<wbr><span class="type-parameter">Tbl</span>, <span class="type-parameter">R</span>&gt;</span></span> <span class="parameter-name">table</span></span>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.4.2/drift/UpdateStatement-class.html">UpdateStatement</a><span class="signature">&lt;<wbr><span class="type-parameter">Tbl</span>, <span class="type-parameter">R</span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Starts an <a href="https://pub.dev/documentation/drift/2.4.2/drift/UpdateStatement-class.html">UpdateStatement</a> for the given table. You can use that
statement to update individual rows in that table by setting a where
clause on that table and then use <a href="https://pub.dev/documentation/drift/2.4.2/drift/UpdateStatement/write.html">UpdateStatement.write</a>.
  <div class="features"><span class="feature">inherited</span></div>

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
  <li><a href="../index">unself_local_database</a></li>
  <li><a href="../unself_local_database/unself_local_database">unself_local_database</a></li>
  <li class="self-crumb">LocalDatabase class</li>
</ol>


    <h5>unself_local_database library</h5>
    <ol>
      <li class="section-title"><a href="../unself_local_database/unself_local_database#classes">Classes</a></li>
        <li><a href="../unself_local_database/\$CollectionTable">\$CollectionTable</a></li>
        <li><a href="../unself_local_database/\$FieldTable">\$FieldTable</a></li>
        <li><a href="../unself_local_database/Collection">Collection</a></li>
        <li><a href="../unself_local_database/CollectionCompanion">CollectionCompanion</a></li>
        <li><a href="../unself_local_database/CollectionDao">CollectionDao</a></li>
        <li><a href="../unself_local_database/CollectionData">CollectionData</a></li>
        <li><a href="../unself_local_database/CollectionOrm">CollectionOrm</a></li>
        <li><a href="../unself_local_database/DocumentDao">DocumentDao</a></li>
        <li><a href="../unself_local_database/Field">Field</a></li>
        <li><a href="../unself_local_database/FieldCompanion">FieldCompanion</a></li>
        <li><a href="../unself_local_database/FieldData">FieldData</a></li>
        <li><a href="../unself_local_database/ListConverter">ListConverter</a></li>
        <li><a href="../unself_local_database/LocalDatabase">LocalDatabase</a></li>
        <li><a href="../unself_local_database/MapConverter">MapConverter</a></li>

      <li class="section-title"><a href="../unself_local_database/unself_local_database#extensions">Extensions</a></li>
        <li><a href="../unself_local_database/CollectionFromDomain">CollectionFromDomain</a></li>
        <li><a href="../unself_local_database/CollectionToOrm">CollectionToOrm</a></li>
        <li><a href="../unself_local_database/FieldFromDomain">FieldFromDomain</a></li>
        <li><a href="../unself_local_database/FieldToOrm">FieldToOrm</a></li>




      <li class="section-title"><a href="../unself_local_database/unself_local_database#functions">Functions</a></li>
        <li><a href="../unself_local_database/connect">connect</a></li>



</ol>

  </div>

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
    <ol>

        <li class="section-title"><a href="../unself_local_database/LocalDatabase#constructors">Constructors</a></li>
          <li><a href="../unself_local_database/LocalDatabase/LocalDatabase.constructor">LocalDatabase</a></li>


        <li class="section-title">
          <a href="../unself_local_database/LocalDatabase#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="../unself_local_database/LocalDatabase/allSchemaEntities">allSchemaEntities</a></li>
          <li class="inherited"><a href="../unself_local_database/LocalDatabase/allTables">allTables</a></li>
          <li><a href="../unself_local_database/LocalDatabase/allTablesCollections">allTablesCollections</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/GeneratedDatabase/attachedDatabase.html">attachedDatabase</a></li>
          <li class="inherited"><a href="../unself_local_database/LocalDatabase/collection">collection</a></li>
          <li class="inherited"><a href="../unself_local_database/LocalDatabase/collectionDao">collectionDao</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/connection.html">connection</a></li>
          <li class="inherited"><a href="../unself_local_database/LocalDatabase/documentDao">documentDao</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/executor.html">executor</a></li>
          <li class="inherited"><a href="../unself_local_database/LocalDatabase/field">field</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li><a href="../unself_local_database/LocalDatabase/migration">migration</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/GeneratedDatabase/options.html">options</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/resolvedEngine.html">resolvedEngine</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../unself_local_database/LocalDatabase/schemaVersion">schemaVersion</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/streamQueries.html">streamQueries</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/GeneratedDatabase/streamUpdateRules.html">streamUpdateRules</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/typeMapping.html">typeMapping</a></li>

        <li class="section-title inherited"><a href="../unself_local_database/LocalDatabase#instance-methods">Methods</a></li>
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

        <li class="section-title inherited"><a href="../unself_local_database/LocalDatabase#operators">Operators</a></li>
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
