import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-class">CustomModule</span> class 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    


    <section>
      <dl class="dl-horizontal">
        
  <dt>Inheritance</dt>
  <dd>
    <ul class="gt-separated dark clazz-relationships">
      <li><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></li>
        <li><a href="../un_model/ModuleSpec">ModuleSpec</a></li>
      <li>CustomModule</li>
    </ul>
  </dd>

        
        



        


      </dl>
    </section>

    
  <section class="summary offset-anchor" id="constructors">
    <h2>Constructors</h2>

    <dl class="constructor-summary-list">
        <dt id="CustomModule" class="callable">
          <span class="name"><a href="../un_model/CustomModule/CustomModule.constructor">CustomModule</a></span><span class="signature">(<span class="parameter" id="-param-id">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span>, </span><span class="parameter" id="-param-name"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span><span class="parameter" id="-param-fileMatcher"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Pattern-class.html">Pattern</a></span> <span class="parameter-name">fileMatcher</span>, </span><span class="parameter" id="-param-extract"><span>required</span> <span class="type-annotation"><a href="../un_model/ExtractSpec">ExtractSpec</a></span> <span class="parameter-name">extract</span>, </span><span class="parameter" id="-param-transform"><span>required</span> <span class="type-annotation"><a href="../un_model/TransformSpec">TransformSpec</a></span> <span class="parameter-name">transform</span>, </span><span class="parameter" id="-param-load"><span>required</span> <span class="type-annotation"><a href="../un_model/LoadSpec">LoadSpec</a></span> <span class="parameter-name">load</span>}</span>)</span>
        </dt>
        <dd>
          
            <div class="constructor-modifier features">const</div>
            <div class="constructor-modifier features">factory</div>
        </dd>
        <dt id="CustomModule.fromJson" class="callable">
          <span class="name"><a href="../un_model/CustomModule/CustomModule.fromJson">CustomModule.fromJson</a></span><span class="signature">(<span class="parameter" id="fromJson-param-json"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">json</span></span>)</span>
        </dt>
        <dd>
          
            <div class="constructor-modifier features">factory</div>
        </dd>
    </dl>
  </section>

    <section class="summary offset-anchor" id="instance-properties">
      <h2>Properties</h2>

      <dl class="properties">
        <dt id="copyWith" class="property">
  <span class="name"><a href="../un_model/CustomModule/copyWith">copyWith</a></span>
  <span class="signature">→ _\$\$CustomModuleCopyWith<span class="signature">&lt;<wbr><span class="type-parameter">_\$CustomModule</span>&gt;</span></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">read-only</span></div>

</dd>

        <dt id="extract" class="property">
  <span class="name"><a href="../un_model/CustomModule/extract">extract</a></span>
  <span class="signature">→ <a href="../un_model/ExtractSpec">ExtractSpec</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">read-only</span></div>

</dd>

        <dt id="extractSpec" class="property inherited">
  <span class="name"><a href="../un_model/ModuleSpec/extractSpec">extractSpec</a></span>
  <span class="signature">→ <a href="../un_model/ExtractSpec">ExtractSpec</a></span> 

</dt>
<dd class="inherited">
  
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="fileMatcher" class="property">
  <span class="name"><a href="../un_model/CustomModule/fileMatcher">fileMatcher</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/Pattern-class.html">Pattern</a></span> 

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
  <span class="name"><a href="../un_model/CustomModule/id">id</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">read-only</span></div>

</dd>

        <dt id="load" class="property">
  <span class="name"><a href="../un_model/CustomModule/load">load</a></span>
  <span class="signature">→ <a href="../un_model/LoadSpec">LoadSpec</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">read-only</span></div>

</dd>

        <dt id="loadSpec" class="property inherited">
  <span class="name"><a href="../un_model/ModuleSpec/loadSpec">loadSpec</a></span>
  <span class="signature">→ <a href="../un_model/LoadSpec">LoadSpec</a></span> 

</dt>
<dd class="inherited">
  
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="name" class="property">
  <span class="name"><a href="../un_model/CustomModule/name">name</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> 

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

        <dt id="transform" class="property">
  <span class="name"><a href="../un_model/CustomModule/transform">transform</a></span>
  <span class="signature">→ <a href="../un_model/TransformSpec">TransformSpec</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">read-only</span></div>

</dd>

        <dt id="transformSpec" class="property inherited">
  <span class="name"><a href="../un_model/ModuleSpec/transformSpec">transformSpec</a></span>
  <span class="signature">→ <a href="../un_model/TransformSpec">TransformSpec</a></span> 

</dt>
<dd class="inherited">
  
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

      </dl>
    </section>

    
  <section class="summary offset-anchor inherited" id="instance-methods">
    <h2>Methods</h2>
    <dl class="callables">
        <dt id="map" class="callable inherited">
  <span class="name"><a href="../un_model/ModuleSpec/map">map</a></span><span class="signature">&lt;<wbr><span class="type-parameter">TResult extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="map-param-custom">{<span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">custom</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../un_model/CustomModule">CustomModule</a></span> <span class="parameter-name">value</span></span>), </span><span class="parameter" id="map-param-json"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">json</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../un_model/JsonModule">JsonModule</a></span> <span class="parameter-name">value</span></span>)}</span>)
    <span class="returntype parameter">→ TResult</span>
  </span>
  

</dt>
<dd class="inherited">
  
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="mapOrNull" class="callable inherited">
  <span class="name"><a href="../un_model/ModuleSpec/mapOrNull">mapOrNull</a></span><span class="signature">&lt;<wbr><span class="type-parameter">TResult extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="mapOrNull-param-custom">{<span class="type-annotation">TResult?</span> <span class="parameter-name">custom</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../un_model/CustomModule">CustomModule</a></span> <span class="parameter-name">value</span></span>)?, </span><span class="parameter" id="mapOrNull-param-json"><span class="type-annotation">TResult?</span> <span class="parameter-name">json</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../un_model/JsonModule">JsonModule</a></span> <span class="parameter-name">value</span></span>)?}</span>)
    <span class="returntype parameter">→ TResult?</span>
  </span>
  

</dt>
<dd class="inherited">
  
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="maybeMap" class="callable inherited">
  <span class="name"><a href="../un_model/ModuleSpec/maybeMap">maybeMap</a></span><span class="signature">&lt;<wbr><span class="type-parameter">TResult extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="maybeMap-param-custom">{<span class="type-annotation">TResult</span> <span class="parameter-name">custom</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../un_model/CustomModule">CustomModule</a></span> <span class="parameter-name">value</span></span>)?, </span><span class="parameter" id="maybeMap-param-json"><span class="type-annotation">TResult</span> <span class="parameter-name">json</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../un_model/JsonModule">JsonModule</a></span> <span class="parameter-name">value</span></span>)?, </span><span class="parameter" id="maybeMap-param-orElse"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">orElse</span>()}</span>)
    <span class="returntype parameter">→ TResult</span>
  </span>
  

</dt>
<dd class="inherited">
  
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="maybeWhen" class="callable inherited">
  <span class="name"><a href="../un_model/ModuleSpec/maybeWhen">maybeWhen</a></span><span class="signature">&lt;<wbr><span class="type-parameter">TResult extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="maybeWhen-param-custom">{<span class="type-annotation">TResult</span> <span class="parameter-name">custom</span>(<span class="parameter" id="param-id"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span>, </span><span class="parameter" id="param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span><span class="parameter" id="param-fileMatcher"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Pattern-class.html">Pattern</a></span> <span class="parameter-name">fileMatcher</span>, </span><span class="parameter" id="param-extract"><span class="type-annotation"><a href="../un_model/ExtractSpec">ExtractSpec</a></span> <span class="parameter-name">extract</span>, </span><span class="parameter" id="param-transform"><span class="type-annotation"><a href="../un_model/TransformSpec">TransformSpec</a></span> <span class="parameter-name">transform</span>, </span><span class="parameter" id="param-load"><span class="type-annotation"><a href="../un_model/LoadSpec">LoadSpec</a></span> <span class="parameter-name">load</span></span>)?, </span><span class="parameter" id="maybeWhen-param-json"><span class="type-annotation">TResult</span> <span class="parameter-name">json</span>(<span class="parameter" id="param-id"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span>, </span><span class="parameter" id="param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span><span class="parameter" id="param-fileMatcher"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Pattern-class.html">Pattern</a></span> <span class="parameter-name">fileMatcher</span>, </span><span class="parameter" id="param-schema"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Iterable-class.html">Iterable</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../un_model/JsonSchema">JsonSchema</a></span>&gt;</span></span> <span class="parameter-name">schema</span>, </span><span class="parameter" id="param-load"><span class="type-annotation"><a href="../un_model/LoadSpec">LoadSpec</a></span> <span class="parameter-name">load</span></span>)?, </span><span class="parameter" id="maybeWhen-param-orElse"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">orElse</span>()}</span>)
    <span class="returntype parameter">→ TResult</span>
  </span>
  

</dt>
<dd class="inherited">
  
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

        <dt id="toJson" class="callable inherited">
  <span class="name"><a href="../un_model/ModuleSpec/toJson">toJson</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  
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

        <dt id="when" class="callable inherited">
  <span class="name"><a href="../un_model/ModuleSpec/when">when</a></span><span class="signature">&lt;<wbr><span class="type-parameter">TResult extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="when-param-custom">{<span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">custom</span>(<span class="parameter" id="param-id"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span>, </span><span class="parameter" id="param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span><span class="parameter" id="param-fileMatcher"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Pattern-class.html">Pattern</a></span> <span class="parameter-name">fileMatcher</span>, </span><span class="parameter" id="param-extract"><span class="type-annotation"><a href="../un_model/ExtractSpec">ExtractSpec</a></span> <span class="parameter-name">extract</span>, </span><span class="parameter" id="param-transform"><span class="type-annotation"><a href="../un_model/TransformSpec">TransformSpec</a></span> <span class="parameter-name">transform</span>, </span><span class="parameter" id="param-load"><span class="type-annotation"><a href="../un_model/LoadSpec">LoadSpec</a></span> <span class="parameter-name">load</span></span>), </span><span class="parameter" id="when-param-json"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">json</span>(<span class="parameter" id="param-id"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span>, </span><span class="parameter" id="param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span><span class="parameter" id="param-fileMatcher"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Pattern-class.html">Pattern</a></span> <span class="parameter-name">fileMatcher</span>, </span><span class="parameter" id="param-schema"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Iterable-class.html">Iterable</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../un_model/JsonSchema">JsonSchema</a></span>&gt;</span></span> <span class="parameter-name">schema</span>, </span><span class="parameter" id="param-load"><span class="type-annotation"><a href="../un_model/LoadSpec">LoadSpec</a></span> <span class="parameter-name">load</span></span>)}</span>)
    <span class="returntype parameter">→ TResult</span>
  </span>
  

</dt>
<dd class="inherited">
  
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="whenOrNull" class="callable inherited">
  <span class="name"><a href="../un_model/ModuleSpec/whenOrNull">whenOrNull</a></span><span class="signature">&lt;<wbr><span class="type-parameter">TResult extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="whenOrNull-param-custom">{<span class="type-annotation">TResult?</span> <span class="parameter-name">custom</span>(<span class="parameter" id="param-id"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span>, </span><span class="parameter" id="param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span><span class="parameter" id="param-fileMatcher"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Pattern-class.html">Pattern</a></span> <span class="parameter-name">fileMatcher</span>, </span><span class="parameter" id="param-extract"><span class="type-annotation"><a href="../un_model/ExtractSpec">ExtractSpec</a></span> <span class="parameter-name">extract</span>, </span><span class="parameter" id="param-transform"><span class="type-annotation"><a href="../un_model/TransformSpec">TransformSpec</a></span> <span class="parameter-name">transform</span>, </span><span class="parameter" id="param-load"><span class="type-annotation"><a href="../un_model/LoadSpec">LoadSpec</a></span> <span class="parameter-name">load</span></span>)?, </span><span class="parameter" id="whenOrNull-param-json"><span class="type-annotation">TResult?</span> <span class="parameter-name">json</span>(<span class="parameter" id="param-id"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span>, </span><span class="parameter" id="param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span><span class="parameter" id="param-fileMatcher"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Pattern-class.html">Pattern</a></span> <span class="parameter-name">fileMatcher</span>, </span><span class="parameter" id="param-schema"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Iterable-class.html">Iterable</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../un_model/JsonSchema">JsonSchema</a></span>&gt;</span></span> <span class="parameter-name">schema</span>, </span><span class="parameter" id="param-load"><span class="type-annotation"><a href="../un_model/LoadSpec">LoadSpec</a></span> <span class="parameter-name">load</span></span>)?}</span>)
    <span class="returntype parameter">→ TResult?</span>
  </span>
  

</dt>
<dd class="inherited">
  
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
  <li><a href="../index">un_model</a></li>
  <li><a href="../un_model/un_model">un_model</a></li>
  <li class="self-crumb">CustomModule abstract class</li>
</ol>


    <h5>un_model library</h5>
    <ol>
      <li class="section-title"><a href="../un_model/un_model#classes">Classes</a></li>
        <li><a href="../un_model/CustomModule">CustomModule</a></li>
        <li><a href="../un_model/Edge">Edge</a></li>
        <li><a href="../un_model/EdgeSpec">EdgeSpec</a></li>
        <li><a href="../un_model/Entity">Entity</a></li>
        <li><a href="../un_model/ExtractSpec">ExtractSpec</a></li>
        <li><a href="../un_model/FileSpec">FileSpec</a></li>
        <li><a href="../un_model/Flat">Flat</a></li>
        <li><a href="../un_model/IEdge">IEdge</a></li>
        <li><a href="../un_model/IEdgeSpec">IEdgeSpec</a></li>
        <li><a href="../un_model/IJsonSchema">IJsonSchema</a></li>
        <li><a href="../un_model/IJsonSchemaRef">IJsonSchemaRef</a></li>
        <li><a href="../un_model/INode">INode</a></li>
        <li><a href="../un_model/INodeSpec">INodeSpec</a></li>
        <li><a href="../un_model/JsonExtractSpec">JsonExtractSpec</a></li>
        <li><a href="../un_model/JsonModule">JsonModule</a></li>
        <li><a href="../un_model/JsonRef">JsonRef</a></li>
        <li><a href="../un_model/JsonRefList">JsonRefList</a></li>
        <li><a href="../un_model/JsonRefValue">JsonRefValue</a></li>
        <li><a href="../un_model/JsonSchema">JsonSchema</a></li>
        <li><a href="../un_model/JsonTransformSpec">JsonTransformSpec</a></li>
        <li><a href="../un_model/LoadSpec">LoadSpec</a></li>
        <li><a href="../un_model/LocalFileSpec">LocalFileSpec</a></li>
        <li><a href="../un_model/ModuleSpec">ModuleSpec</a></li>
        <li><a href="../un_model/Node">Node</a></li>
        <li><a href="../un_model/NodeSpec">NodeSpec</a></li>
        <li><a href="../un_model/PropSpec">PropSpec</a></li>
        <li><a href="../un_model/Ref">Ref</a></li>
        <li><a href="../un_model/RefList">RefList</a></li>
        <li><a href="../un_model/RetrieveSpec">RetrieveSpec</a></li>
        <li><a href="../un_model/Settings">Settings</a></li>
        <li><a href="../un_model/SlugFrom">SlugFrom</a></li>
        <li><a href="../un_model/Struct">Struct</a></li>
        <li><a href="../un_model/TransformSpec">TransformSpec</a></li>
        <li><a href="../un_model/UngraphLoadSpec">UngraphLoadSpec</a></li>
        <li><a href="../un_model/Union">Union</a></li>
        <li><a href="../un_model/UnionList">UnionList</a></li>
        <li><a href="../un_model/UnpackSpec">UnpackSpec</a></li>
        <li><a href="../un_model/UnpackState">UnpackState</a></li>
        <li><a href="../un_model/ValueFrom">ValueFrom</a></li>
        <li><a href="../un_model/ZipFileSpec">ZipFileSpec</a></li>






      <li class="section-title"><a href="../un_model/un_model#enums">Enums</a></li>
        <li><a href="../un_model/UnpackStep">UnpackStep</a></li>

      <li class="section-title"><a href="../un_model/un_model#typedefs">Typedefs</a></li>
        <li><a href="../un_model/AccumulatorCallback">AccumulatorCallback</a></li>
        <li><a href="../un_model/DoCallback">DoCallback</a></li>
        <li><a href="../un_model/SchemaFinder">SchemaFinder</a></li>

</ol>

  </div>

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
    <ol>

        <li class="section-title"><a href="../un_model/CustomModule#constructors">Constructors</a></li>
          <li><a href="../un_model/CustomModule/CustomModule.constructor">CustomModule</a></li>
          <li><a href="../un_model/CustomModule/CustomModule.fromJson">fromJson</a></li>


        <li class="section-title">
          <a href="../un_model/CustomModule#instance-properties">Properties</a>
        </li>
          <li><a href="../un_model/CustomModule/copyWith">copyWith</a></li>
          <li><a href="../un_model/CustomModule/extract">extract</a></li>
          <li class="inherited"><a href="../un_model/ModuleSpec/extractSpec">extractSpec</a></li>
          <li><a href="../un_model/CustomModule/fileMatcher">fileMatcher</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li><a href="../un_model/CustomModule/id">id</a></li>
          <li><a href="../un_model/CustomModule/load">load</a></li>
          <li class="inherited"><a href="../un_model/ModuleSpec/loadSpec">loadSpec</a></li>
          <li><a href="../un_model/CustomModule/name">name</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../un_model/CustomModule/transform">transform</a></li>
          <li class="inherited"><a href="../un_model/ModuleSpec/transformSpec">transformSpec</a></li>

        <li class="section-title inherited"><a href="../un_model/CustomModule#instance-methods">Methods</a></li>
          <li class="inherited"><a href="../un_model/ModuleSpec/map">map</a></li>
          <li class="inherited"><a href="../un_model/ModuleSpec/mapOrNull">mapOrNull</a></li>
          <li class="inherited"><a href="../un_model/ModuleSpec/maybeMap">maybeMap</a></li>
          <li class="inherited"><a href="../un_model/ModuleSpec/maybeWhen">maybeWhen</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="../un_model/ModuleSpec/toJson">toJson</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li class="inherited"><a href="../un_model/ModuleSpec/when">when</a></li>
          <li class="inherited"><a href="../un_model/ModuleSpec/whenOrNull">whenOrNull</a></li>

        <li class="section-title inherited"><a href="../un_model/CustomModule#operators">Operators</a></li>
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
