import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-class">UnpackSpecData</span> class 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    


    <section>
      <dl class="dl-horizontal">
        
  <dt>Inheritance</dt>
  <dd>
    <ul class="gt-separated dark clazz-relationships">
      <li><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></li>
        <li><a href="https://pub.dev/documentation/drift/2.6.0/drift/DataClass-class.html">DataClass</a></li>
      <li>UnpackSpecData</li>
    </ul>
  </dd>

        
  <dt>Implemented types</dt>
  <dd>
    <ul class="comma-separated clazz-relationships">
        <li><a href="https://pub.dev/documentation/drift/2.6.0/drift/Insertable-class.html">Insertable</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../un_database/UnpackSpecData">UnpackSpecData</a></span>&gt;</span></li>
    </ul>
  </dd>
        



        


      </dl>
    </section>

    
  <section class="summary offset-anchor" id="constructors">
    <h2>Constructors</h2>

    <dl class="constructor-summary-list">
        <dt id="UnpackSpecData" class="callable">
          <span class="name"><a href="../un_database/UnpackSpecData/UnpackSpecData.constructor">UnpackSpecData</a></span><span class="signature">(<span class="parameter" id="-param-id">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span>, </span><span class="parameter" id="-param-slug"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">slug</span>, </span><span class="parameter" id="-param-name"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span><span class="parameter" id="-param-fileSpec"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">fileSpec</span>, </span><span class="parameter" id="-param-retrieveSpec"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">retrieveSpec</span>, </span><span class="parameter" id="-param-modules"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">modules</span>}</span>)</span>
        </dt>
        <dd>
          
            <div class="constructor-modifier features">const</div>
        </dd>
        <dt id="UnpackSpecData.fromJson" class="callable">
          <span class="name"><a href="../un_database/UnpackSpecData/UnpackSpecData.fromJson">UnpackSpecData.fromJson</a></span><span class="signature">(<span class="parameter" id="fromJson-param-json"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">json</span>, </span><span class="parameter" id="fromJson-param-serializer">{<span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/ValueSerializer-class.html">ValueSerializer</a>?</span> <span class="parameter-name">serializer</span>}</span>)</span>
        </dt>
        <dd>
          
            <div class="constructor-modifier features">factory</div>
        </dd>
    </dl>
  </section>

    <section class="summary offset-anchor" id="instance-properties">
      <h2>Properties</h2>

      <dl class="properties">
        <dt id="fileSpec" class="property">
  <span class="name"><a href="../un_database/UnpackSpecData/fileSpec">fileSpec</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="hashCode" class="property">
  <span class="name"><a href="../un_database/UnpackSpecData/hashCode">hashCode</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> 

</dt>
<dd>
  The hash code for this object.
  <div class="features"><span class="feature">read-only</span><span class="feature">override</span></div>

</dd>

        <dt id="id" class="property">
  <span class="name"><a href="../un_database/UnpackSpecData/id">id</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="modules" class="property">
  <span class="name"><a href="../un_database/UnpackSpecData/modules">modules</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="name" class="property">
  <span class="name"><a href="../un_database/UnpackSpecData/name">name</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="retrieveSpec" class="property">
  <span class="name"><a href="../un_database/UnpackSpecData/retrieveSpec">retrieveSpec</a></span>
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
  <span class="name"><a href="../un_database/UnpackSpecData/slug">slug</a></span>
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
  <span class="name"><a href="../un_database/UnpackSpecData/copyWith">copyWith</a></span><span class="signature">(<wbr><span class="parameter" id="copyWith-param-id">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">id</span>, </span><span class="parameter" id="copyWith-param-slug"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">slug</span>, </span><span class="parameter" id="copyWith-param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">name</span>, </span><span class="parameter" id="copyWith-param-fileSpec"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">fileSpec</span>, </span><span class="parameter" id="copyWith-param-retrieveSpec"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">retrieveSpec</span>, </span><span class="parameter" id="copyWith-param-modules"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">modules</span>}</span>)
    <span class="returntype parameter">→ <a href="../un_database/UnpackSpecData">UnpackSpecData</a></span>
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
  <span class="name"><a href="../un_database/UnpackSpecData/toColumns">toColumns</a></span><span class="signature">(<wbr><span class="parameter" id="toColumns-param-nullToAbsent"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">nullToAbsent</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span>&gt;</span></span>&gt;</span></span>
  </span>
  

</dt>
<dd>
  Converts this object into a map of column names to expressions to insert
or update.
  <div class="features"><span class="feature">override</span></div>

</dd>

        <dt id="toCompanion" class="callable">
  <span class="name"><a href="../un_database/UnpackSpecData/toCompanion">toCompanion</a></span><span class="signature">(<wbr><span class="parameter" id="toCompanion-param-nullToAbsent"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">nullToAbsent</span></span>)
    <span class="returntype parameter">→ <a href="../un_database/UnpackSpecCompanion">UnpackSpecCompanion</a></span>
  </span>
  

</dt>
<dd>
  
  

</dd>

        <dt id="toJson" class="callable">
  <span class="name"><a href="../un_database/UnpackSpecData/toJson">toJson</a></span><span class="signature">(<wbr><span class="parameter" id="toJson-param-serializer">{<span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/ValueSerializer-class.html">ValueSerializer</a>?</span> <span class="parameter-name">serializer</span>}</span>)
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
  <span class="name"><a href="../un_database/UnpackSpecData/toString">toString</a></span><span class="signature">(<wbr>)
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
  <span class="name"><a href="../un_database/UnpackSpecData/operator_equals">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)
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
  <li><a href="../index">un_database</a></li>
  <li><a href="../un_database/un_database">un_database</a></li>
  <li class="self-crumb">UnpackSpecData class</li>
</ol>


    <h5>un_database library</h5>
    <ol>
      <li class="section-title"><a href="../un_database/un_database#classes">Classes</a></li>
        <li><a href="../un_database/\$UnpackSpecTable">\$UnpackSpecTable</a></li>
        <li><a href="../un_database/\$UnpackStateTable">\$UnpackStateTable</a></li>
        <li><a href="../un_database_common/ListConverter">ListConverter</a></li>
        <li><a href="../un_database_common/MapConverter">MapConverter</a></li>
        <li><a href="https://pub.dev/documentation/slugid/1.1.1/slugid/Slugid-class.html">Slugid</a></li>
        <li><a href="../un_database/UnDatabase">UnDatabase</a></li>
        <li><a href="../un_database/UnpackSpec">UnpackSpec</a></li>
        <li><a href="../un_database/UnpackSpecCompanion">UnpackSpecCompanion</a></li>
        <li><a href="../un_database/UnpackSpecDao">UnpackSpecDao</a></li>
        <li><a href="../un_database/UnpackSpecData">UnpackSpecData</a></li>
        <li><a href="../un_database/UnpackState">UnpackState</a></li>
        <li><a href="../un_database/UnpackStateCompanion">UnpackStateCompanion</a></li>
        <li><a href="../un_database/UnpackStateDao">UnpackStateDao</a></li>
        <li><a href="../un_database/UnpackStateData">UnpackStateData</a></li>
        <li><a href="https://pub.dev/documentation/drift/2.6.0/drift/Value-class.html">Value</a></li>


      <li class="section-title"><a href="../un_database/un_database#mixins">Mixins</a></li>
        <li><a href="../un_database/PrimaryUuid-mixin">PrimaryUuid</a></li>



      <li class="section-title"><a href="../un_database/un_database#functions">Functions</a></li>
        <li><a href="../un_database_common/connect">connect</a></li>



</ol>

  </div>

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
    <ol>

        <li class="section-title"><a href="../un_database/UnpackSpecData#constructors">Constructors</a></li>
          <li><a href="../un_database/UnpackSpecData/UnpackSpecData.constructor">UnpackSpecData</a></li>
          <li><a href="../un_database/UnpackSpecData/UnpackSpecData.fromJson">fromJson</a></li>


        <li class="section-title">
          <a href="../un_database/UnpackSpecData#instance-properties">Properties</a>
        </li>
          <li><a href="../un_database/UnpackSpecData/fileSpec">fileSpec</a></li>
          <li><a href="../un_database/UnpackSpecData/hashCode">hashCode</a></li>
          <li><a href="../un_database/UnpackSpecData/id">id</a></li>
          <li><a href="../un_database/UnpackSpecData/modules">modules</a></li>
          <li><a href="../un_database/UnpackSpecData/name">name</a></li>
          <li><a href="../un_database/UnpackSpecData/retrieveSpec">retrieveSpec</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../un_database/UnpackSpecData/slug">slug</a></li>

        <li class="section-title"><a href="../un_database/UnpackSpecData#instance-methods">Methods</a></li>
          <li><a href="../un_database/UnpackSpecData/copyWith">copyWith</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../un_database/UnpackSpecData/toColumns">toColumns</a></li>
          <li><a href="../un_database/UnpackSpecData/toCompanion">toCompanion</a></li>
          <li><a href="../un_database/UnpackSpecData/toJson">toJson</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DataClass/toJsonString.html">toJsonString</a></li>
          <li><a href="../un_database/UnpackSpecData/toString">toString</a></li>

        <li class="section-title"><a href="../un_database/UnpackSpecData#operators">Operators</a></li>
          <li><a href="../un_database/UnpackSpecData/operator_equals">operator ==</a></li>




</ol>

  </div><!--/.sidebar-offcanvas-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
