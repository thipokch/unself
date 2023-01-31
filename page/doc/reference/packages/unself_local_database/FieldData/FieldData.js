import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-class">FieldData</span> class 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    


    <section>
      <dl class="dl-horizontal">
        
  <dt>Inheritance</dt>
  <dd>
    <ul class="gt-separated dark clazz-relationships">
      <li><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></li>
        <li><a href="https://pub.dev/documentation/drift/2.4.2/drift/DataClass-class.html">DataClass</a></li>
      <li>FieldData</li>
    </ul>
  </dd>

        
  <dt>Implemented types</dt>
  <dd>
    <ul class="comma-separated clazz-relationships">
        <li><a href="https://pub.dev/documentation/drift/2.4.2/drift/Insertable-class.html">Insertable</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../unself_local_database/FieldData/FieldData">FieldData</a></span>&gt;</span></li>
    </ul>
  </dd>
        


        <dt>Available Extensions</dt>
        <dd><ul class="comma-separated clazz-relationships">
          <li><a href="../unself_local_database/FieldToOrm">FieldToOrm</a></li>
        </ul></dd>

        


      </dl>
    </section>

    
  <section class="summary offset-anchor" id="constructors">
    <h2>Constructors</h2>

    <dl class="constructor-summary-list">
        <dt id="FieldData" class="callable">
          <span class="name"><a href="../unself_local_database/FieldData/FieldData.constructor">FieldData</a></span><span class="signature">(<span class="parameter" id="-param-id">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span>, </span><span class="parameter" id="-param-name"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span><span class="parameter" id="-param-type"><span>required</span> <span class="type-annotation">FieldType</span> <span class="parameter-name">type</span>, </span><span class="parameter" id="-param-system"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">system</span>, </span><span class="parameter" id="-param-required"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">required</span>, </span><span class="parameter" id="-param-unique"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">unique</span>, </span><span class="parameter" id="-param-options"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">options</span>, </span><span class="parameter" id="-param-collectionId"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">collectionId</span>}</span>)</span>
        </dt>
        <dd>
          
            <div class="constructor-modifier features">const</div>
        </dd>
        <dt id="FieldData.fromJson" class="callable">
          <span class="name"><a href="../unself_local_database/FieldData/FieldData.fromJson">FieldData.fromJson</a></span><span class="signature">(<span class="parameter" id="fromJson-param-json"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">json</span>, </span><span class="parameter" id="fromJson-param-serializer">{<span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/ValueSerializer-class.html">ValueSerializer</a>?</span> <span class="parameter-name">serializer</span>}</span>)</span>
        </dt>
        <dd>
          
            <div class="constructor-modifier features">factory</div>
        </dd>
    </dl>
  </section>

    <section class="summary offset-anchor" id="instance-properties">
      <h2>Properties</h2>

      <dl class="properties">
        <dt id="collectionId" class="property">
  <span class="name"><a href="../unself_local_database/FieldData/collectionId">collectionId</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="hashCode" class="property">
  <span class="name"><a href="../unself_local_database/FieldData/hashCode">hashCode</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> 

</dt>
<dd>
  The hash code for this object.
  <div class="features"><span class="feature">read-only</span><span class="feature">override</span></div>

</dd>

        <dt id="id" class="property">
  <span class="name"><a href="../unself_local_database/FieldData/id">id</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="name" class="property">
  <span class="name"><a href="../unself_local_database/FieldData/name">name</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="options" class="property">
  <span class="name"><a href="../unself_local_database/FieldData/options">options</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="required" class="property">
  <span class="name"><a href="../unself_local_database/FieldData/required">required</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

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
  <span class="name"><a href="../unself_local_database/FieldData/system">system</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="type" class="property">
  <span class="name"><a href="../unself_local_database/FieldData/type">type</a></span>
  <span class="signature">→ FieldType</span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="unique" class="property">
  <span class="name"><a href="../unself_local_database/FieldData/unique">unique</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> 

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
  <span class="name"><a href="../unself_local_database/FieldData/copyWith">copyWith</a></span><span class="signature">(<wbr><span class="parameter" id="copyWith-param-id">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">id</span>, </span><span class="parameter" id="copyWith-param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">name</span>, </span><span class="parameter" id="copyWith-param-type"><span class="type-annotation">FieldType?</span> <span class="parameter-name">type</span>, </span><span class="parameter" id="copyWith-param-system"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a>?</span> <span class="parameter-name">system</span>, </span><span class="parameter" id="copyWith-param-required"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a>?</span> <span class="parameter-name">required</span>, </span><span class="parameter" id="copyWith-param-unique"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a>?</span> <span class="parameter-name">unique</span>, </span><span class="parameter" id="copyWith-param-options"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span>&gt;</span></span> <span class="parameter-name">options</span> = <span class="default-value">const Value.absent()</span>, </span><span class="parameter" id="copyWith-param-collectionId"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">collectionId</span>}</span>)
    <span class="returntype parameter">→ <a href="../unself_local_database/FieldData/FieldData">FieldData</a></span>
  </span>
  

</dt>
<dd>
  
  

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

        <dt id="toColumns" class="callable">
  <span class="name"><a href="../unself_local_database/FieldData/toColumns">toColumns</a></span><span class="signature">(<wbr><span class="parameter" id="toColumns-param-nullToAbsent"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">nullToAbsent</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span>&gt;</span></span>&gt;</span></span>
  </span>
  

</dt>
<dd>
  Converts this object into a map of column names to expressions to insert
or update.
  <div class="features"><span class="feature">override</span></div>

</dd>

        <dt id="toCompanion" class="callable">
  <span class="name"><a href="../unself_local_database/FieldData/toCompanion">toCompanion</a></span><span class="signature">(<wbr><span class="parameter" id="toCompanion-param-nullToAbsent"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">nullToAbsent</span></span>)
    <span class="returntype parameter">→ <a href="../unself_local_database/FieldCompanion/FieldCompanion">FieldCompanion</a></span>
  </span>
  

</dt>
<dd>
  
  

</dd>

        <dt id="toJson" class="callable">
  <span class="name"><a href="../unself_local_database/FieldData/toJson">toJson</a></span><span class="signature">(<wbr><span class="parameter" id="toJson-param-serializer">{<span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/ValueSerializer-class.html">ValueSerializer</a>?</span> <span class="parameter-name">serializer</span>}</span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span>
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
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>
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
  <span class="name"><a href="../unself_local_database/FieldData/toString">toString</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>
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
  <span class="name"><a href="../unself_local_database/FieldData/operator_equals">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>
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
  <li class="self-crumb">FieldData class</li>
</ol>


    <h5>unself_local_database library</h5>
    <ol>
      <li class="section-title"><a href="../unself_local_database/unself_local_database#classes">Classes</a></li>
        <li><a href="../unself_local_database/\$CollectionTable/\$CollectionTable">\$CollectionTable</a></li>
        <li><a href="../unself_local_database/\$FieldTable/\$FieldTable">\$FieldTable</a></li>
        <li><a href="../unself_local_database/Collection/Collection">Collection</a></li>
        <li><a href="../unself_local_database/CollectionCompanion/CollectionCompanion">CollectionCompanion</a></li>
        <li><a href="../unself_local_database/CollectionDao/CollectionDao">CollectionDao</a></li>
        <li><a href="../unself_local_database/CollectionData/CollectionData">CollectionData</a></li>
        <li><a href="../unself_local_database/CollectionOrm/CollectionOrm">CollectionOrm</a></li>
        <li><a href="../unself_local_database/DocumentDao/DocumentDao">DocumentDao</a></li>
        <li><a href="../unself_local_database/Field/Field">Field</a></li>
        <li><a href="../unself_local_database/FieldCompanion/FieldCompanion">FieldCompanion</a></li>
        <li><a href="../unself_local_database/FieldData/FieldData">FieldData</a></li>
        <li><a href="../unself_local_database/ListConverter/ListConverter">ListConverter</a></li>
        <li><a href="../unself_local_database/LocalDatabase/LocalDatabase">LocalDatabase</a></li>
        <li><a href="../unself_local_database/MapConverter/MapConverter">MapConverter</a></li>

      <li class="section-title"><a href="../unself_local_database/unself_local_database#extensions">Extensions</a></li>
        <li><a href="../unself_local_database/CollectionFromDomain">CollectionFromDomain</a></li>
        <li><a href="../unself_local_database/CollectionFromOrm">CollectionFromOrm</a></li>
        <li><a href="../unself_local_database/CollectionToOrm">CollectionToOrm</a></li>
        <li><a href="../unself_local_database/FieldFromDomain">FieldFromDomain</a></li>
        <li><a href="../unself_local_database/FieldFromOrm">FieldFromOrm</a></li>
        <li><a href="../unself_local_database/FieldToOrm">FieldToOrm</a></li>







</ol>

  </div>

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
    <ol>

        <li class="section-title"><a href="../unself_local_database/FieldData/FieldData#constructors">Constructors</a></li>
          <li><a href="../unself_local_database/FieldData/FieldData.constructor">FieldData</a></li>
          <li><a href="../unself_local_database/FieldData/FieldData.fromJson">fromJson</a></li>


        <li class="section-title">
          <a href="../unself_local_database/FieldData/FieldData#instance-properties">Properties</a>
        </li>
          <li><a href="../unself_local_database/FieldData/collectionId">collectionId</a></li>
          <li><a href="../unself_local_database/FieldData/hashCode">hashCode</a></li>
          <li><a href="../unself_local_database/FieldData/id">id</a></li>
          <li><a href="../unself_local_database/FieldData/name">name</a></li>
          <li><a href="../unself_local_database/FieldData/options">options</a></li>
          <li><a href="../unself_local_database/FieldData/required">required</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../unself_local_database/FieldData/system">system</a></li>
          <li><a href="../unself_local_database/FieldData/type">type</a></li>
          <li><a href="../unself_local_database/FieldData/unique">unique</a></li>

        <li class="section-title"><a href="../unself_local_database/FieldData/FieldData#instance-methods">Methods</a></li>
          <li><a href="../unself_local_database/FieldData/copyWith">copyWith</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../unself_local_database/FieldData/toColumns">toColumns</a></li>
          <li><a href="../unself_local_database/FieldData/toCompanion">toCompanion</a></li>
          <li><a href="../unself_local_database/FieldData/toJson">toJson</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DataClass/toJsonString.html">toJsonString</a></li>
          <li><a href="../unself_local_database/FieldData/toString">toString</a></li>

        <li class="section-title"><a href="../unself_local_database/FieldData/FieldData#operators">Operators</a></li>
          <li><a href="../unself_local_database/FieldData/operator_equals">operator ==</a></li>




</ol>

  </div><!--/.sidebar-offcanvas-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
