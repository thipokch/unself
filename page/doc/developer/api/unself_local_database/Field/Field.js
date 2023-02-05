import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-class">Field</span> class 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    


    <section>
      <dl class="dl-horizontal">
        
  <dt>Inheritance</dt>
  <dd>
    <ul class="gt-separated dark clazz-relationships">
      <li><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></li>
        <li><a href="https://pub.dev/documentation/drift/2.4.2/drift/HasResultSet-class.html">HasResultSet</a></li>
        <li><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table-class.html">Table</a></li>
      <li>Field</li>
    </ul>
  </dd>

        
        

        <dt>Implementers</dt>
        <dd><ul class="comma-separated clazz-relationships">
          <li><a href="../unself_local_database/\$FieldTable">\$FieldTable</a></li>
        </ul></dd>


        


      </dl>
    </section>

    
  <section class="summary offset-anchor" id="constructors">
    <h2>Constructors</h2>

    <dl class="constructor-summary-list">
        <dt id="Field" class="callable">
          <span class="name"><a href="../unself_local_database/Field/Field.constructor">Field</a></span><span class="signature">()</span>
        </dt>
        <dd>
          
        </dd>
    </dl>
  </section>

    <section class="summary offset-anchor" id="instance-properties">
      <h2>Properties</h2>

      <dl class="properties">
        <dt id="collectionId" class="property">
  <span class="name"><a href="../unself_local_database/Field/collectionId">collectionId</a></span>
  <span class="signature">→ <a href="https://pub.dev/documentation/drift/2.4.2/drift/TextColumn.html">TextColumn</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">read-only</span></div>

</dd>

        <dt id="created" class="property">
  <span class="name"><a href="../unself_local_database/Field/created">created</a></span>
  <span class="signature">→ <a href="https://pub.dev/documentation/drift/2.4.2/drift/DateTimeColumn.html">DateTimeColumn</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">read-only</span></div>

</dd>

        <dt id="customConstraints" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/customConstraints.html">customConstraints</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> 

</dt>
<dd class="inherited">
  Custom table constraints that should be added to the table.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="dontWriteConstraints" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/dontWriteConstraints.html">dontWriteConstraints</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> 

</dt>
<dd class="inherited">
  Drift will write some table constraints automatically, for instance when
you override <a href="../unself_local_database/Field/primaryKey">primaryKey</a>. You can turn this behavior off if you want to.
This is intended to be used by generated code only.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="extra" class="property">
  <span class="name"><a href="../unself_local_database/Field/extra">extra</a></span>
  <span class="signature">→ <a href="https://pub.dev/documentation/drift/2.4.2/drift/TextColumn.html">TextColumn</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">read-only</span></div>

</dd>

        <dt id="hashCode" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> 

</dt>
<dd class="inherited">
  The hash code for this object.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="id" class="property">
  <span class="name"><a href="../unself_local_database/Field/id">id</a></span>
  <span class="signature">→ <a href="https://pub.dev/documentation/drift/2.4.2/drift/TextColumn.html">TextColumn</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">read-only</span></div>

</dd>

        <dt id="isStrict" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/isStrict.html">isStrict</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> 

</dt>
<dd class="inherited">
  Whether this table is <code>STRICT</code>.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="name" class="property">
  <span class="name"><a href="../unself_local_database/Field/name">name</a></span>
  <span class="signature">→ <a href="https://pub.dev/documentation/drift/2.4.2/drift/TextColumn.html">TextColumn</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">read-only</span></div>

</dd>

        <dt id="primaryKey" class="property">
  <span class="name"><a href="../unself_local_database/Field/primaryKey">primaryKey</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/Set-class.html">Set</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Column-class.html">Column</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span>&gt;</span></span>&gt;</span></span> 

</dt>
<dd>
  Override this to specify custom primary keys:
  <div class="features"><span class="feature">read-only</span><span class="feature">override</span></div>

</dd>

        <dt id="required" class="property">
  <span class="name"><a href="../unself_local_database/Field/required">required</a></span>
  <span class="signature">→ <a href="https://pub.dev/documentation/drift/2.4.2/drift/BoolColumn.html">BoolColumn</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">read-only</span></div>

</dd>

        <dt id="runtimeType" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/Type-class.html">Type</a></span> 

</dt>
<dd class="inherited">
  A representation of the runtime type of the object.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="system" class="property">
  <span class="name"><a href="../unself_local_database/Field/system">system</a></span>
  <span class="signature">→ <a href="https://pub.dev/documentation/drift/2.4.2/drift/BoolColumn.html">BoolColumn</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">read-only</span></div>

</dd>

        <dt id="tableName" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/tableName.html">tableName</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> 

</dt>
<dd class="inherited">
  The sql table name to be used. By default, drift will use the snake_case
representation of your class name as the sql table name. For instance, a
<a href="https://pub.dev/documentation/drift/2.4.2/drift/Table-class.html">Table</a> class named <code>LocalSettings</code> will be called <code>local_settings</code> by
default.
You can change that behavior by overriding this method to use a custom
name. Please note that you must directly return a string literal by using
a getter. For instance <code>@override String get tableName =&gt; 'my_table';</code> is
valid, whereas <code>@override final String tableName = 'my_table';</code> or
<code>@override String get tableName =&gt; createMyTableName();</code> is not.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="type" class="property">
  <span class="name"><a href="../unself_local_database/Field/type">type</a></span>
  <span class="signature">→ <a href="https://pub.dev/documentation/drift/2.4.2/drift/TextColumn.html">TextColumn</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">read-only</span></div>

</dd>

        <dt id="unique" class="property">
  <span class="name"><a href="../unself_local_database/Field/unique">unique</a></span>
  <span class="signature">→ <a href="https://pub.dev/documentation/drift/2.4.2/drift/BoolColumn.html">BoolColumn</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">read-only</span></div>

</dd>

        <dt id="uniqueKeys" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/uniqueKeys.html">uniqueKeys</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Set-class.html">Set</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Column-class.html">Column</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span>&gt;</span></span>&gt;</span></span>&gt;</span>?</span> 

</dt>
<dd class="inherited">
  Unique constraints in this table.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="updated" class="property">
  <span class="name"><a href="../unself_local_database/Field/updated">updated</a></span>
  <span class="signature">→ <a href="https://pub.dev/documentation/drift/2.4.2/drift/DateTimeColumn.html">DateTimeColumn</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">read-only</span></div>

</dd>

        <dt id="withoutRowId" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/withoutRowId.html">withoutRowId</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> 

</dt>
<dd class="inherited">
  Whether to append a <code>WITHOUT ROWID</code> clause in the <code>CREATE TABLE</code>
statement. This is intended to be used by generated code only.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

      </dl>
    </section>

    
  <section class="summary offset-anchor inherited" id="instance-methods">
    <h2>Methods</h2>
    <dl class="callables">
        <dt id="blob" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/blob.html">blob</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.4.2/drift/ColumnBuilder-class.html">ColumnBuilder</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-typed_data/Uint8List-class.html">Uint8List</a></span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Use this as the body of a getter to declare a column that holds arbitrary
data blobs, stored as an <code>Uint8List</code>. Example:
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="boolean" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/boolean.html">boolean</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.4.2/drift/ColumnBuilder-class.html">ColumnBuilder</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Use this as the body of a getter to declare a column that holds bools.
Example (inside the body of a table class):
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="dateTime" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/dateTime.html">dateTime</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.4.2/drift/ColumnBuilder-class.html">ColumnBuilder</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Use this as the body of a getter to declare a column that holds date and
time.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="int64" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/int64.html">int64</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.4.2/drift/ColumnBuilder-class.html">ColumnBuilder</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/BigInt-class.html">BigInt</a></span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Use this as the body of a getter to declare a column that holds a 64-big
integer as a <code>BigInt</code>.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="integer" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/integer.html">integer</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.4.2/drift/ColumnBuilder-class.html">ColumnBuilder</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Use this as the body of a getter to declare a column that holds integers.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="intEnum" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/intEnum.html">intEnum</a></span><span class="signature">&lt;<wbr><span class="type-parameter">T extends <a href="https://api.flutter.dev/flutter/dart-core/Enum-class.html">Enum</a></span>&gt;</span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.4.2/drift/ColumnBuilder-class.html">ColumnBuilder</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Creates a column to store an <code>enum</code> class <code>T</code>.
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

        <dt id="real" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/real.html">real</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.4.2/drift/ColumnBuilder-class.html">ColumnBuilder</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/double-class.html">double</a></span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Use this as the body of a getter to declare a column that holds floating
point numbers. Example
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="text" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/text.html">text</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.4.2/drift/ColumnBuilder-class.html">ColumnBuilder</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Use this as the body of a getter to declare a column that holds strings.
Example (inside the body of a table class):
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="textEnum" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/textEnum.html">textEnum</a></span><span class="signature">&lt;<wbr><span class="type-parameter">T extends <a href="https://api.flutter.dev/flutter/dart-core/Enum-class.html">Enum</a></span>&gt;</span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.4.2/drift/ColumnBuilder-class.html">ColumnBuilder</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Creates a column to store an <code>enum</code> class <code>T</code>.
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
  <li class="self-crumb">Field class</li>
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

        <li class="section-title"><a href="../unself_local_database/Field#constructors">Constructors</a></li>
          <li><a href="../unself_local_database/Field/Field.constructor">Field</a></li>


        <li class="section-title">
          <a href="../unself_local_database/Field#instance-properties">Properties</a>
        </li>
          <li><a href="../unself_local_database/Field/collectionId">collectionId</a></li>
          <li><a href="../unself_local_database/Field/created">created</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/customConstraints.html">customConstraints</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/dontWriteConstraints.html">dontWriteConstraints</a></li>
          <li><a href="../unself_local_database/Field/extra">extra</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li><a href="../unself_local_database/Field/id">id</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/isStrict.html">isStrict</a></li>
          <li><a href="../unself_local_database/Field/name">name</a></li>
          <li><a href="../unself_local_database/Field/primaryKey">primaryKey</a></li>
          <li><a href="../unself_local_database/Field/required">required</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../unself_local_database/Field/system">system</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/tableName.html">tableName</a></li>
          <li><a href="../unself_local_database/Field/type">type</a></li>
          <li><a href="../unself_local_database/Field/unique">unique</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/uniqueKeys.html">uniqueKeys</a></li>
          <li><a href="../unself_local_database/Field/updated">updated</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/withoutRowId.html">withoutRowId</a></li>

        <li class="section-title inherited"><a href="../unself_local_database/Field#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/blob.html">blob</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/boolean.html">boolean</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/dateTime.html">dateTime</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/int64.html">int64</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/integer.html">integer</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/intEnum.html">intEnum</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/real.html">real</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/text.html">text</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/textEnum.html">textEnum</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../unself_local_database/Field#operators">Operators</a></li>
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
