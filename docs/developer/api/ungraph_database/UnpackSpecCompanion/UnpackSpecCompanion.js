import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-class">UnpackSpecCompanion</span> class 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    


    <section>
      <dl class="dl-horizontal">
        
  <dt>Inheritance</dt>
  <dd>
    <ul class="gt-separated dark clazz-relationships">
      <li><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></li>
        <li><a href="https://pub.dev/documentation/drift/2.6.0/drift/UpdateCompanion-class.html">UpdateCompanion</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../ungraph_database/UnpackSpecData">UnpackSpecData</a></span>&gt;</span></li>
      <li>UnpackSpecCompanion</li>
    </ul>
  </dd>

        
        



        


      </dl>
    </section>

    
  <section class="summary offset-anchor" id="constructors">
    <h2>Constructors</h2>

    <dl class="constructor-summary-list">
        <dt id="UnpackSpecCompanion" class="callable">
          <span class="name"><a href="../ungraph_database/UnpackSpecCompanion/UnpackSpecCompanion.constructor">UnpackSpecCompanion</a></span><span class="signature">(<span class="parameter" id="-param-id">{<span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">id</span> = <span class="default-value">const Value.absent()</span>, </span><span class="parameter" id="-param-slug"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">slug</span> = <span class="default-value">const Value.absent()</span>, </span><span class="parameter" id="-param-name"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">name</span> = <span class="default-value">const Value.absent()</span>, </span><span class="parameter" id="-param-fileSpec"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">fileSpec</span> = <span class="default-value">const Value.absent()</span>, </span><span class="parameter" id="-param-retrieveSpec"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">retrieveSpec</span> = <span class="default-value">const Value.absent()</span>, </span><span class="parameter" id="-param-modules"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">modules</span> = <span class="default-value">const Value.absent()</span>, </span><span class="parameter" id="-param-rowid"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span>&gt;</span></span> <span class="parameter-name">rowid</span> = <span class="default-value">const Value.absent()</span>}</span>)</span>
        </dt>
        <dd>
          
            <div class="constructor-modifier features">const</div>
        </dd>
        <dt id="UnpackSpecCompanion.insert" class="callable">
          <span class="name"><a href="../ungraph_database/UnpackSpecCompanion/UnpackSpecCompanion.insert">UnpackSpecCompanion.insert</a></span><span class="signature">(<span class="parameter" id="insert-param-id">{<span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">id</span> = <span class="default-value">const Value.absent()</span>, </span><span class="parameter" id="insert-param-slug"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">slug</span>, </span><span class="parameter" id="insert-param-name"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span><span class="parameter" id="insert-param-fileSpec"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">fileSpec</span>, </span><span class="parameter" id="insert-param-retrieveSpec"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">retrieveSpec</span>, </span><span class="parameter" id="insert-param-modules"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">modules</span>, </span><span class="parameter" id="insert-param-rowid"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span>&gt;</span></span> <span class="parameter-name">rowid</span> = <span class="default-value">const Value.absent()</span>}</span>)</span>
        </dt>
        <dd>
          
        </dd>
    </dl>
  </section>

    <section class="summary offset-anchor" id="instance-properties">
      <h2>Properties</h2>

      <dl class="properties">
        <dt id="fileSpec" class="property">
  <span class="name"><a href="../ungraph_database/UnpackSpecCompanion/fileSpec">fileSpec</a></span>
  <span class="signature">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="hashCode" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/UpdateCompanion/hashCode.html">hashCode</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> 

</dt>
<dd class="inherited">
  The hash code for this object.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="id" class="property">
  <span class="name"><a href="../ungraph_database/UnpackSpecCompanion/id">id</a></span>
  <span class="signature">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="modules" class="property">
  <span class="name"><a href="../ungraph_database/UnpackSpecCompanion/modules">modules</a></span>
  <span class="signature">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="name" class="property">
  <span class="name"><a href="../ungraph_database/UnpackSpecCompanion/name">name</a></span>
  <span class="signature">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="retrieveSpec" class="property">
  <span class="name"><a href="../ungraph_database/UnpackSpecCompanion/retrieveSpec">retrieveSpec</a></span>
  <span class="signature">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="rowid" class="property">
  <span class="name"><a href="../ungraph_database/UnpackSpecCompanion/rowid">rowid</a></span>
  <span class="signature">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span>&gt;</span></span> 

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
  <span class="name"><a href="../ungraph_database/UnpackSpecCompanion/slug">slug</a></span>
  <span class="signature">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> 

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
  <span class="name"><a href="../ungraph_database/UnpackSpecCompanion/copyWith">copyWith</a></span><span class="signature">(<wbr><span class="parameter" id="copyWith-param-id">{<span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">id</span>, </span><span class="parameter" id="copyWith-param-slug"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">slug</span>, </span><span class="parameter" id="copyWith-param-name"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">name</span>, </span><span class="parameter" id="copyWith-param-fileSpec"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">fileSpec</span>, </span><span class="parameter" id="copyWith-param-retrieveSpec"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">retrieveSpec</span>, </span><span class="parameter" id="copyWith-param-modules"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">modules</span>, </span><span class="parameter" id="copyWith-param-rowid"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span>&gt;</span>?</span> <span class="parameter-name">rowid</span>}</span>)
    <span class="returntype parameter">→ <a href="../ungraph_database/UnpackSpecCompanion">UnpackSpecCompanion</a></span>
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
  <span class="name"><a href="../ungraph_database/UnpackSpecCompanion/toColumns">toColumns</a></span><span class="signature">(<wbr><span class="parameter" id="toColumns-param-nullToAbsent"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">nullToAbsent</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span>&gt;</span></span>&gt;</span></span>
  </span>
  

</dt>
<dd>
  Converts this object into a map of column names to expressions to insert
or update.
  <div class="features"><span class="feature">override</span></div>

</dd>

        <dt id="toString" class="callable">
  <span class="name"><a href="../ungraph_database/UnpackSpecCompanion/toString">toString</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>
  </span>
  

</dt>
<dd>
  A string representation of this object.
  <div class="features"><span class="feature">override</span></div>

</dd>

    </dl>
  </section>
    
  <section class="summary offset-anchor inherited" id="operators">
    <h2>Operators</h2>
    <dl class="callables">
        <dt id="operator ==" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/UpdateCompanion/operator_equals.html">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>
  </span>
  

</dt>
<dd class="inherited">
  The equality operator.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

    </dl>
  </section>
    
    
  <section class="summary offset-anchor" id="static-methods">
    <h2>Static Methods</h2>
    <dl class="callables">
        <dt id="custom" class="callable">
  <span class="name"><a href="../ungraph_database/UnpackSpecCompanion/custom">custom</a></span><span class="signature">(<wbr><span class="parameter" id="custom-param-id">{<span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">id</span>, </span><span class="parameter" id="custom-param-slug"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">slug</span>, </span><span class="parameter" id="custom-param-name"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">name</span>, </span><span class="parameter" id="custom-param-fileSpec"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">fileSpec</span>, </span><span class="parameter" id="custom-param-retrieveSpec"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">retrieveSpec</span>, </span><span class="parameter" id="custom-param-modules"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">modules</span>, </span><span class="parameter" id="custom-param-rowid"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span>&gt;</span>?</span> <span class="parameter-name">rowid</span>}</span>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/Insertable-class.html">Insertable</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../ungraph_database/UnpackSpecData">UnpackSpecData</a></span>&gt;</span></span>
  </span>
  

</dt>
<dd>
  
  

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
  <li class="self-crumb">UnpackSpecCompanion class</li>
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

        <li class="section-title"><a href="../ungraph_database/UnpackSpecCompanion#constructors">Constructors</a></li>
          <li><a href="../ungraph_database/UnpackSpecCompanion/UnpackSpecCompanion.constructor">UnpackSpecCompanion</a></li>
          <li><a href="../ungraph_database/UnpackSpecCompanion/UnpackSpecCompanion.insert">insert</a></li>


        <li class="section-title">
          <a href="../ungraph_database/UnpackSpecCompanion#instance-properties">Properties</a>
        </li>
          <li><a href="../ungraph_database/UnpackSpecCompanion/fileSpec">fileSpec</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/UpdateCompanion/hashCode.html">hashCode</a></li>
          <li><a href="../ungraph_database/UnpackSpecCompanion/id">id</a></li>
          <li><a href="../ungraph_database/UnpackSpecCompanion/modules">modules</a></li>
          <li><a href="../ungraph_database/UnpackSpecCompanion/name">name</a></li>
          <li><a href="../ungraph_database/UnpackSpecCompanion/retrieveSpec">retrieveSpec</a></li>
          <li><a href="../ungraph_database/UnpackSpecCompanion/rowid">rowid</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../ungraph_database/UnpackSpecCompanion/slug">slug</a></li>

        <li class="section-title"><a href="../ungraph_database/UnpackSpecCompanion#instance-methods">Methods</a></li>
          <li><a href="../ungraph_database/UnpackSpecCompanion/copyWith">copyWith</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../ungraph_database/UnpackSpecCompanion/toColumns">toColumns</a></li>
          <li><a href="../ungraph_database/UnpackSpecCompanion/toString">toString</a></li>

        <li class="section-title inherited"><a href="../ungraph_database/UnpackSpecCompanion#operators">Operators</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/UpdateCompanion/operator_equals.html">operator ==</a></li>



        <li class="section-title"><a href="../ungraph_database/UnpackSpecCompanion#static-methods">Static methods</a></li>
          <li><a href="../ungraph_database/UnpackSpecCompanion/custom">custom</a></li>

</ol>

  </div><!--/.sidebar-offcanvas-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
