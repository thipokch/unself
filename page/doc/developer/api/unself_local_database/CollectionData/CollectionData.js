import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-class">CollectionData</span> class 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    


    <section>
      <dl class="dl-horizontal">
        
  <dt>Inheritance</dt>
  <dd>
    <ul class="gt-separated dark clazz-relationships">
      <li><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></li>
        <li><a href="https://pub.dev/documentation/drift/2.4.2/drift/DataClass-class.html">DataClass</a></li>
      <li>CollectionData</li>
    </ul>
  </dd>

        
  <dt>Implemented types</dt>
  <dd>
    <ul class="comma-separated clazz-relationships">
        <li><a href="https://pub.dev/documentation/drift/2.4.2/drift/Insertable-class.html">Insertable</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../unself_local_database/CollectionData">CollectionData</a></span>&gt;</span></li>
    </ul>
  </dd>
        


        <dt>Available Extensions</dt>
        <dd><ul class="comma-separated clazz-relationships">
          <li><a href="../unself_local_database/CollectionToOrm">CollectionToOrm</a></li>
        </ul></dd>

        


      </dl>
    </section>

    
  <section class="summary offset-anchor" id="constructors">
    <h2>Constructors</h2>

    <dl class="constructor-summary-list">
        <dt id="CollectionData" class="callable">
          <span class="name"><a href="../unself_local_database/CollectionData/CollectionData.constructor">CollectionData</a></span><span class="signature">(<span class="parameter" id="-param-id">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span>, </span><span class="parameter" id="-param-created"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span> <span class="parameter-name">created</span>, </span><span class="parameter" id="-param-updated"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span> <span class="parameter-name">updated</span>, </span><span class="parameter" id="-param-type"><span>required</span> <span class="type-annotation">CollectionType</span> <span class="parameter-name">type</span>, </span><span class="parameter" id="-param-name"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span><span class="parameter" id="-param-system"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">system</span>, </span><span class="parameter" id="-param-listRule"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">listRule</span>, </span><span class="parameter" id="-param-viewRule"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">viewRule</span>, </span><span class="parameter" id="-param-createRule"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">createRule</span>, </span><span class="parameter" id="-param-updateRule"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">updateRule</span>, </span><span class="parameter" id="-param-deleteRule"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">deleteRule</span>, </span><span class="parameter" id="-param-extra"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">extra</span>}</span>)</span>
        </dt>
        <dd>
          
            <div class="constructor-modifier features">const</div>
        </dd>
        <dt id="CollectionData.fromJson" class="callable">
          <span class="name"><a href="../unself_local_database/CollectionData/CollectionData.fromJson">CollectionData.fromJson</a></span><span class="signature">(<span class="parameter" id="fromJson-param-json"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">json</span>, </span><span class="parameter" id="fromJson-param-serializer">{<span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/ValueSerializer-class.html">ValueSerializer</a>?</span> <span class="parameter-name">serializer</span>}</span>)</span>
        </dt>
        <dd>
          
            <div class="constructor-modifier features">factory</div>
        </dd>
    </dl>
  </section>

    <section class="summary offset-anchor" id="instance-properties">
      <h2>Properties</h2>

      <dl class="properties">
        <dt id="created" class="property">
  <span class="name"><a href="../unself_local_database/CollectionData/created">created</a></span>
  <span class="signature">??? <a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="createRule" class="property">
  <span class="name"><a href="../unself_local_database/CollectionData/createRule">createRule</a></span>
  <span class="signature">??? <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="deleteRule" class="property">
  <span class="name"><a href="../unself_local_database/CollectionData/deleteRule">deleteRule</a></span>
  <span class="signature">??? <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="extra" class="property">
  <span class="name"><a href="../unself_local_database/CollectionData/extra">extra</a></span>
  <span class="signature">??? <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="hashCode" class="property">
  <span class="name"><a href="../unself_local_database/CollectionData/hashCode">hashCode</a></span>
  <span class="signature">??? <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> 

</dt>
<dd>
  The hash code for this object.
  <div class="features"><span class="feature">read-only</span><span class="feature">override</span></div>

</dd>

        <dt id="id" class="property">
  <span class="name"><a href="../unself_local_database/CollectionData/id">id</a></span>
  <span class="signature">??? <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="listRule" class="property">
  <span class="name"><a href="../unself_local_database/CollectionData/listRule">listRule</a></span>
  <span class="signature">??? <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="name" class="property">
  <span class="name"><a href="../unself_local_database/CollectionData/name">name</a></span>
  <span class="signature">??? <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="runtimeType" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></span>
  <span class="signature">??? <a href="https://api.flutter.dev/flutter/dart-core/Type-class.html">Type</a></span> 

</dt>
<dd class="inherited">
  A representation of the runtime type of the object.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="system" class="property">
  <span class="name"><a href="../unself_local_database/CollectionData/system">system</a></span>
  <span class="signature">??? <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="type" class="property">
  <span class="name"><a href="../unself_local_database/CollectionData/type">type</a></span>
  <span class="signature">??? CollectionType</span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="updated" class="property">
  <span class="name"><a href="../unself_local_database/CollectionData/updated">updated</a></span>
  <span class="signature">??? <a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="updateRule" class="property">
  <span class="name"><a href="../unself_local_database/CollectionData/updateRule">updateRule</a></span>
  <span class="signature">??? <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="viewRule" class="property">
  <span class="name"><a href="../unself_local_database/CollectionData/viewRule">viewRule</a></span>
  <span class="signature">??? <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

      </dl>
    </section>

    
  <section class="summary offset-anchor" id="instance-methods">
    <h2>Methods</h2>
    <dl class="callables">
        <dt id="copyWith" class="callable">
  <span class="name"><a href="../unself_local_database/CollectionData/copyWith">copyWith</a></span><span class="signature">(<wbr><span class="parameter" id="copyWith-param-id">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">id</span>, </span><span class="parameter" id="copyWith-param-created"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a>?</span> <span class="parameter-name">created</span>, </span><span class="parameter" id="copyWith-param-updated"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a>?</span> <span class="parameter-name">updated</span>, </span><span class="parameter" id="copyWith-param-type"><span class="type-annotation">CollectionType?</span> <span class="parameter-name">type</span>, </span><span class="parameter" id="copyWith-param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">name</span>, </span><span class="parameter" id="copyWith-param-system"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a>?</span> <span class="parameter-name">system</span>, </span><span class="parameter" id="copyWith-param-listRule"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span>&gt;</span></span> <span class="parameter-name">listRule</span> = <span class="default-value">const Value.absent()</span>, </span><span class="parameter" id="copyWith-param-viewRule"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span>&gt;</span></span> <span class="parameter-name">viewRule</span> = <span class="default-value">const Value.absent()</span>, </span><span class="parameter" id="copyWith-param-createRule"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span>&gt;</span></span> <span class="parameter-name">createRule</span> = <span class="default-value">const Value.absent()</span>, </span><span class="parameter" id="copyWith-param-updateRule"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span>&gt;</span></span> <span class="parameter-name">updateRule</span> = <span class="default-value">const Value.absent()</span>, </span><span class="parameter" id="copyWith-param-deleteRule"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span>&gt;</span></span> <span class="parameter-name">deleteRule</span> = <span class="default-value">const Value.absent()</span>, </span><span class="parameter" id="copyWith-param-extra"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">extra</span>}</span>)
    <span class="returntype parameter">??? <a href="../unself_local_database/CollectionData">CollectionData</a></span>
  </span>
  

</dt>
<dd>
  
  

</dd>

        <dt id="noSuchMethod" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></span><span class="signature">(<wbr><span class="parameter" id="noSuchMethod-param-invocation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Invocation-class.html">Invocation</a></span> <span class="parameter-name">invocation</span></span>)
    <span class="returntype parameter">??? dynamic</span>
  </span>
  

</dt>
<dd class="inherited">
  Invoked when a non-existent method or property is accessed.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="toColumns" class="callable">
  <span class="name"><a href="../unself_local_database/CollectionData/toColumns">toColumns</a></span><span class="signature">(<wbr><span class="parameter" id="toColumns-param-nullToAbsent"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">nullToAbsent</span></span>)
    <span class="returntype parameter">??? <a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span>&gt;</span></span>&gt;</span></span>
  </span>
  

</dt>
<dd>
  Converts this object into a map of column names to expressions to insert
or update.
  <div class="features"><span class="feature">override</span></div>

</dd>

        <dt id="toCompanion" class="callable">
  <span class="name"><a href="../unself_local_database/CollectionData/toCompanion">toCompanion</a></span><span class="signature">(<wbr><span class="parameter" id="toCompanion-param-nullToAbsent"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">nullToAbsent</span></span>)
    <span class="returntype parameter">??? <a href="../unself_local_database/CollectionCompanion">CollectionCompanion</a></span>
  </span>
  

</dt>
<dd>
  
  

</dd>

        <dt id="toJson" class="callable">
  <span class="name"><a href="../unself_local_database/CollectionData/toJson">toJson</a></span><span class="signature">(<wbr><span class="parameter" id="toJson-param-serializer">{<span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/ValueSerializer-class.html">ValueSerializer</a>?</span> <span class="parameter-name">serializer</span>}</span>)
    <span class="returntype parameter">??? <a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span>
  </span>
  

</dt>
<dd>
  Converts this object into a representation that can be encoded with
<code>json</code>. The <code>serializer</code> can be used to configure how individual values
will be encoded. By default, <a href="https://pub.dev/documentation/drift/2.4.2/drift/DriftRuntimeOptions/defaultSerializer.html">DriftRuntimeOptions.defaultSerializer</a> will
be used. See <a href="https://pub.dev/documentation/drift/2.4.2/drift/ValueSerializer/ValueSerializer.defaults.html">ValueSerializer.defaults</a> for details.
  <div class="features"><span class="feature">override</span></div>

</dd>

        <dt id="toJsonString" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DataClass/toJsonString.html">toJsonString</a></span><span class="signature">(<wbr><span class="parameter" id="toJsonString-param-serializer">{<span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/ValueSerializer-class.html">ValueSerializer</a>?</span> <span class="parameter-name">serializer</span>}</span>)
    <span class="returntype parameter">??? <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>
  </span>
  

</dt>
<dd class="inherited">
  Converts this object into a json representation. The <code>serializer</code> can be
used to configure how individual values will be encoded. By default,
<a href="https://pub.dev/documentation/drift/2.4.2/drift/DriftRuntimeOptions/defaultSerializer.html">DriftRuntimeOptions.defaultSerializer</a> will be used. See
<a href="https://pub.dev/documentation/drift/2.4.2/drift/ValueSerializer/ValueSerializer.defaults.html">ValueSerializer.defaults</a> for details.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="toString" class="callable">
  <span class="name"><a href="../unself_local_database/CollectionData/toString">toString</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">??? <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>
  </span>
  

</dt>
<dd>
  A string representation of this object.
  <div class="features"><span class="feature">override</span></div>

</dd>

    </dl>
  </section>
    
  <section class="summary offset-anchor" id="operators">
    <h2>Operators</h2>
    <dl class="callables">
        <dt id="operator ==" class="callable">
  <span class="name"><a href="../unself_local_database/CollectionData/operator_equals">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)
    <span class="returntype parameter">??? <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>
  </span>
  

</dt>
<dd>
  The equality operator.
  <div class="features"><span class="feature">override</span></div>

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
  <li class="self-crumb">CollectionData class</li>
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

        <li class="section-title"><a href="../unself_local_database/CollectionData#constructors">Constructors</a></li>
          <li><a href="../unself_local_database/CollectionData/CollectionData.constructor">CollectionData</a></li>
          <li><a href="../unself_local_database/CollectionData/CollectionData.fromJson">fromJson</a></li>


        <li class="section-title">
          <a href="../unself_local_database/CollectionData#instance-properties">Properties</a>
        </li>
          <li><a href="../unself_local_database/CollectionData/created">created</a></li>
          <li><a href="../unself_local_database/CollectionData/createRule">createRule</a></li>
          <li><a href="../unself_local_database/CollectionData/deleteRule">deleteRule</a></li>
          <li><a href="../unself_local_database/CollectionData/extra">extra</a></li>
          <li><a href="../unself_local_database/CollectionData/hashCode">hashCode</a></li>
          <li><a href="../unself_local_database/CollectionData/id">id</a></li>
          <li><a href="../unself_local_database/CollectionData/listRule">listRule</a></li>
          <li><a href="../unself_local_database/CollectionData/name">name</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../unself_local_database/CollectionData/system">system</a></li>
          <li><a href="../unself_local_database/CollectionData/type">type</a></li>
          <li><a href="../unself_local_database/CollectionData/updated">updated</a></li>
          <li><a href="../unself_local_database/CollectionData/updateRule">updateRule</a></li>
          <li><a href="../unself_local_database/CollectionData/viewRule">viewRule</a></li>

        <li class="section-title"><a href="../unself_local_database/CollectionData#instance-methods">Methods</a></li>
          <li><a href="../unself_local_database/CollectionData/copyWith">copyWith</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../unself_local_database/CollectionData/toColumns">toColumns</a></li>
          <li><a href="../unself_local_database/CollectionData/toCompanion">toCompanion</a></li>
          <li><a href="../unself_local_database/CollectionData/toJson">toJson</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DataClass/toJsonString.html">toJsonString</a></li>
          <li><a href="../unself_local_database/CollectionData/toString">toString</a></li>

        <li class="section-title"><a href="../unself_local_database/CollectionData#operators">Operators</a></li>
          <li><a href="../unself_local_database/CollectionData/operator_equals">operator ==</a></li>




</ol>

  </div><!--/.sidebar-offcanvas-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
