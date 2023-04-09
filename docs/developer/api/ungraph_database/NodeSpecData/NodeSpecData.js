import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-class">NodeSpecData</span> class 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    


    <section>
      <dl class="dl-horizontal">
        
  <dt>Inheritance</dt>
  <dd>
    <ul class="gt-separated dark clazz-relationships">
      <li><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></li>
        <li><a href="https://pub.dev/documentation/drift/2.6.0/drift/DataClass-class.html">DataClass</a></li>
      <li>NodeSpecData</li>
    </ul>
  </dd>

        
  <dt>Implemented types</dt>
  <dd>
    <ul class="comma-separated clazz-relationships">
        <li><a href="https://pub.dev/documentation/drift/2.6.0/drift/Insertable-class.html">Insertable</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../ungraph_database/NodeSpecData">NodeSpecData</a></span>&gt;</span></li>
    </ul>
  </dd>
        



        


      </dl>
    </section>

    
  <section class="summary offset-anchor" id="constructors">
    <h2>Constructors</h2>

    <dl class="constructor-summary-list">
        <dt id="NodeSpecData" class="callable">
          <span class="name"><a href="../ungraph_database/NodeSpecData/NodeSpecData.constructor">NodeSpecData</a></span><span class="signature">(<span class="parameter" id="-param-id">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span>, </span><span class="parameter" id="-param-name"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span><span class="parameter" id="-param-slug"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">slug</span>, </span><span class="parameter" id="-param-labels"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">labels</span>, </span><span class="parameter" id="-param-propSpecs"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">propSpecs</span>}</span>)</span>
        </dt>
        <dd>
          
            <div class="constructor-modifier features">const</div>
        </dd>
        <dt id="NodeSpecData.fromJson" class="callable">
          <span class="name"><a href="../ungraph_database/NodeSpecData/NodeSpecData.fromJson">NodeSpecData.fromJson</a></span><span class="signature">(<span class="parameter" id="fromJson-param-json"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">json</span>, </span><span class="parameter" id="fromJson-param-serializer">{<span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/ValueSerializer-class.html">ValueSerializer</a>?</span> <span class="parameter-name">serializer</span>}</span>)</span>
        </dt>
        <dd>
          
            <div class="constructor-modifier features">factory</div>
        </dd>
    </dl>
  </section>

    <section class="summary offset-anchor" id="instance-properties">
      <h2>Properties</h2>

      <dl class="properties">
        <dt id="hashCode" class="property">
  <span class="name"><a href="../ungraph_database/NodeSpecData/hashCode">hashCode</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> 

</dt>
<dd>
  The hash code for this object.
  <div class="features"><span class="feature">read-only</span><span class="feature">override</span></div>

</dd>

        <dt id="id" class="property">
  <span class="name"><a href="../ungraph_database/NodeSpecData/id">id</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="labels" class="property">
  <span class="name"><a href="../ungraph_database/NodeSpecData/labels">labels</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="name" class="property">
  <span class="name"><a href="../ungraph_database/NodeSpecData/name">name</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="propSpecs" class="property">
  <span class="name"><a href="../ungraph_database/NodeSpecData/propSpecs">propSpecs</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> 

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

        <dt id="slug" class="property">
  <span class="name"><a href="../ungraph_database/NodeSpecData/slug">slug</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> 

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
  <span class="name"><a href="../ungraph_database/NodeSpecData/copyWith">copyWith</a></span><span class="signature">(<wbr><span class="parameter" id="copyWith-param-id">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">id</span>, </span><span class="parameter" id="copyWith-param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">name</span>, </span><span class="parameter" id="copyWith-param-slug"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">slug</span>, </span><span class="parameter" id="copyWith-param-labels"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">labels</span>, </span><span class="parameter" id="copyWith-param-propSpecs"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">propSpecs</span>}</span>)
    <span class="returntype parameter">→ <a href="../ungraph_database/NodeSpecData">NodeSpecData</a></span>
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
  <span class="name"><a href="../ungraph_database/NodeSpecData/toColumns">toColumns</a></span><span class="signature">(<wbr><span class="parameter" id="toColumns-param-nullToAbsent"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">nullToAbsent</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span>&gt;</span></span>&gt;</span></span>
  </span>
  

</dt>
<dd>
  Converts this object into a map of column names to expressions to insert
or update.
  <div class="features"><span class="feature">override</span></div>

</dd>

        <dt id="toCompanion" class="callable">
  <span class="name"><a href="../ungraph_database/NodeSpecData/toCompanion">toCompanion</a></span><span class="signature">(<wbr><span class="parameter" id="toCompanion-param-nullToAbsent"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">nullToAbsent</span></span>)
    <span class="returntype parameter">→ <a href="../ungraph_database/NodeSpecCompanion">NodeSpecCompanion</a></span>
  </span>
  

</dt>
<dd>
  
  

</dd>

        <dt id="toJson" class="callable">
  <span class="name"><a href="../ungraph_database/NodeSpecData/toJson">toJson</a></span><span class="signature">(<wbr><span class="parameter" id="toJson-param-serializer">{<span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/ValueSerializer-class.html">ValueSerializer</a>?</span> <span class="parameter-name">serializer</span>}</span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span>
  </span>
  

</dt>
<dd>
  Converts this object into a representation that can be encoded with
<code>json</code>. The <code>serializer</code> can be used to configure how individual values
will be encoded. By default, <a href="https://pub.dev/documentation/drift/2.6.0/drift/DriftRuntimeOptions/defaultSerializer.html">DriftRuntimeOptions.defaultSerializer</a> will
be used. See <a href="https://pub.dev/documentation/drift/2.6.0/drift/ValueSerializer/ValueSerializer.defaults.html">ValueSerializer.defaults</a> for details.
  <div class="features"><span class="feature">override</span></div>

</dd>

        <dt id="toJsonString" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DataClass/toJsonString.html">toJsonString</a></span><span class="signature">(<wbr><span class="parameter" id="toJsonString-param-serializer">{<span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/ValueSerializer-class.html">ValueSerializer</a>?</span> <span class="parameter-name">serializer</span>}</span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>
  </span>
  

</dt>
<dd class="inherited">
  Converts this object into a json representation. The <code>serializer</code> can be
used to configure how individual values will be encoded. By default,
<a href="https://pub.dev/documentation/drift/2.6.0/drift/DriftRuntimeOptions/defaultSerializer.html">DriftRuntimeOptions.defaultSerializer</a> will be used. See
<a href="https://pub.dev/documentation/drift/2.6.0/drift/ValueSerializer/ValueSerializer.defaults.html">ValueSerializer.defaults</a> for details.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="toString" class="callable">
  <span class="name"><a href="../ungraph_database/NodeSpecData/toString">toString</a></span><span class="signature">(<wbr>)
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
  <span class="name"><a href="../ungraph_database/NodeSpecData/operator_equals">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)
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
  <li><a href="../index">ungraph_database</a></li>
  <li><a href="../ungraph_database/ungraph_database">ungraph_database</a></li>
  <li class="self-crumb">NodeSpecData class</li>
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

        <li class="section-title"><a href="../ungraph_database/NodeSpecData#constructors">Constructors</a></li>
          <li><a href="../ungraph_database/NodeSpecData/NodeSpecData.constructor">NodeSpecData</a></li>
          <li><a href="../ungraph_database/NodeSpecData/NodeSpecData.fromJson">fromJson</a></li>


        <li class="section-title">
          <a href="../ungraph_database/NodeSpecData#instance-properties">Properties</a>
        </li>
          <li><a href="../ungraph_database/NodeSpecData/hashCode">hashCode</a></li>
          <li><a href="../ungraph_database/NodeSpecData/id">id</a></li>
          <li><a href="../ungraph_database/NodeSpecData/labels">labels</a></li>
          <li><a href="../ungraph_database/NodeSpecData/name">name</a></li>
          <li><a href="../ungraph_database/NodeSpecData/propSpecs">propSpecs</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../ungraph_database/NodeSpecData/slug">slug</a></li>

        <li class="section-title"><a href="../ungraph_database/NodeSpecData#instance-methods">Methods</a></li>
          <li><a href="../ungraph_database/NodeSpecData/copyWith">copyWith</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../ungraph_database/NodeSpecData/toColumns">toColumns</a></li>
          <li><a href="../ungraph_database/NodeSpecData/toCompanion">toCompanion</a></li>
          <li><a href="../ungraph_database/NodeSpecData/toJson">toJson</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DataClass/toJsonString.html">toJsonString</a></li>
          <li><a href="../ungraph_database/NodeSpecData/toString">toString</a></li>

        <li class="section-title"><a href="../ungraph_database/NodeSpecData#operators">Operators</a></li>
          <li><a href="../ungraph_database/NodeSpecData/operator_equals">operator ==</a></li>




</ol>

  </div><!--/.sidebar-offcanvas-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
