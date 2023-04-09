import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-class">Entity</span> class 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    


    <section>
      <dl class="dl-horizontal">
        
  <dt>Inheritance</dt>
  <dd>
    <ul class="gt-separated dark clazz-relationships">
      <li><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></li>
        <li><a href="../unself_model/JsonSchema">JsonSchema</a></li>
      <li>Entity</li>
    </ul>
  </dd>

        
        



        


      </dl>
    </section>

    
  <section class="summary offset-anchor" id="constructors">
    <h2>Constructors</h2>

    <dl class="constructor-summary-list">
        <dt id="Entity" class="callable">
          <span class="name"><a href="../unself_model/Entity/Entity.constructor">Entity</a></span><span class="signature">(<span class="parameter" id="-param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span><span class="parameter" id="-param-definition">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="../unself_model/IJsonSchema">IJsonSchema</a></span>&gt;</span></span> <span class="parameter-name">definition</span>, </span><span class="parameter" id="-param-key"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">key</span>, </span><span class="parameter" id="-param-fieldMap"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">fieldMap</span>, </span><span class="parameter" id="-param-extra"><span>@<a href="../unself_model/JsonExtra">JsonExtra</a>()</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">extra</span>}</span>)</span>
        </dt>
        <dd>
          
            <div class="constructor-modifier features">const</div>
            <div class="constructor-modifier features">factory</div>
        </dd>
        <dt id="Entity.fromJson" class="callable">
          <span class="name"><a href="../unself_model/Entity/Entity.fromJson">Entity.fromJson</a></span><span class="signature">(<span class="parameter" id="fromJson-param-json"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">json</span></span>)</span>
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
  <span class="name"><a href="../unself_model/Entity/copyWith">copyWith</a></span>
  <span class="signature">→ _\$\$EntityCopyWith<span class="signature">&lt;<wbr><span class="type-parameter">_\$Entity</span>&gt;</span></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">read-only</span></div>

</dd>

        <dt id="definition" class="property">
  <span class="name"><a href="../unself_model/Entity/definition">definition</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="../unself_model/IJsonSchema">IJsonSchema</a></span>&gt;</span></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">read-only</span></div>

</dd>

        <dt id="extra" class="property">
  <span class="name"><a href="../unself_model/Entity/extra">extra</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> 

</dt>
<dd>
  <a href="../unself_model/Entity/extra">extra</a> is a map of additional properties.
  <div class="features"><span class="feature">read-only</span></div>

</dd>

        <dt id="fieldMap" class="property">
  <span class="name"><a href="../unself_model/Entity/fieldMap">fieldMap</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> 

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

        <dt id="key" class="property">
  <span class="name"><a href="../unself_model/Entity/key">key</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">read-only</span></div>

</dd>

        <dt id="name" class="property">
  <span class="name"><a href="../unself_model/Entity/name">name</a></span>
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

      </dl>
    </section>

    
  <section class="summary offset-anchor inherited" id="instance-methods">
    <h2>Methods</h2>
    <dl class="callables">
        <dt id="map" class="callable inherited">
  <span class="name"><a href="../unself_model/JsonSchema/map">map</a></span><span class="signature">&lt;<wbr><span class="type-parameter">TResult extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="map-param-entity">{<span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">entity</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../unself_model/Entity">Entity</a></span> <span class="parameter-name">value</span></span>), </span><span class="parameter" id="map-param-flat"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">flat</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../unself_model/Flat">Flat</a></span> <span class="parameter-name">value</span></span>), </span><span class="parameter" id="map-param-struct"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">struct</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../unself_model/Struct">Struct</a></span> <span class="parameter-name">value</span></span>)}</span>)
    <span class="returntype parameter">→ TResult</span>
  </span>
  

</dt>
<dd class="inherited">
  
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="mapOrNull" class="callable inherited">
  <span class="name"><a href="../unself_model/JsonSchema/mapOrNull">mapOrNull</a></span><span class="signature">&lt;<wbr><span class="type-parameter">TResult extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="mapOrNull-param-entity">{<span class="type-annotation">TResult?</span> <span class="parameter-name">entity</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../unself_model/Entity">Entity</a></span> <span class="parameter-name">value</span></span>)?, </span><span class="parameter" id="mapOrNull-param-flat"><span class="type-annotation">TResult?</span> <span class="parameter-name">flat</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../unself_model/Flat">Flat</a></span> <span class="parameter-name">value</span></span>)?, </span><span class="parameter" id="mapOrNull-param-struct"><span class="type-annotation">TResult?</span> <span class="parameter-name">struct</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../unself_model/Struct">Struct</a></span> <span class="parameter-name">value</span></span>)?}</span>)
    <span class="returntype parameter">→ TResult?</span>
  </span>
  

</dt>
<dd class="inherited">
  
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="maybeMap" class="callable inherited">
  <span class="name"><a href="../unself_model/JsonSchema/maybeMap">maybeMap</a></span><span class="signature">&lt;<wbr><span class="type-parameter">TResult extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="maybeMap-param-entity">{<span class="type-annotation">TResult</span> <span class="parameter-name">entity</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../unself_model/Entity">Entity</a></span> <span class="parameter-name">value</span></span>)?, </span><span class="parameter" id="maybeMap-param-flat"><span class="type-annotation">TResult</span> <span class="parameter-name">flat</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../unself_model/Flat">Flat</a></span> <span class="parameter-name">value</span></span>)?, </span><span class="parameter" id="maybeMap-param-struct"><span class="type-annotation">TResult</span> <span class="parameter-name">struct</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../unself_model/Struct">Struct</a></span> <span class="parameter-name">value</span></span>)?, </span><span class="parameter" id="maybeMap-param-orElse"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">orElse</span>()}</span>)
    <span class="returntype parameter">→ TResult</span>
  </span>
  

</dt>
<dd class="inherited">
  
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="maybeWhen" class="callable inherited">
  <span class="name"><a href="../unself_model/JsonSchema/maybeWhen">maybeWhen</a></span><span class="signature">&lt;<wbr><span class="type-parameter">TResult extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="maybeWhen-param-entity">{<span class="type-annotation">TResult</span> <span class="parameter-name">entity</span>(<span class="parameter" id="param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span><span class="parameter" id="param-definition"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="../unself_model/IJsonSchema">IJsonSchema</a></span>&gt;</span></span> <span class="parameter-name">definition</span>, </span><span class="parameter" id="param-key"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">key</span>, </span><span class="parameter" id="param-fieldMap"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">fieldMap</span>, </span><span class="parameter" id="param-extra"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">extra</span></span>)?, </span><span class="parameter" id="maybeWhen-param-flat"><span class="type-annotation">TResult</span> <span class="parameter-name">flat</span>(<span class="parameter" id="param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span><span class="parameter" id="param-definition"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="../unself_model/IJsonSchema">IJsonSchema</a></span>&gt;</span></span> <span class="parameter-name">definition</span>, </span><span class="parameter" id="param-key"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">key</span>, </span><span class="parameter" id="param-entityPath"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">entityPath</span>, </span><span class="parameter" id="param-includePath"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span>&gt;</span></span> <span class="parameter-name">includePath</span>, </span><span class="parameter" id="param-addMissingKeys"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">addMissingKeys</span>, </span><span class="parameter" id="param-fieldMap"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">fieldMap</span>, </span><span class="parameter" id="param-extra"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">extra</span></span>)?, </span><span class="parameter" id="maybeWhen-param-struct"><span class="type-annotation">TResult</span> <span class="parameter-name">struct</span>(<span class="parameter" id="param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span><span class="parameter" id="param-definition"><span class="type-annotation">dynamic</span> <span class="parameter-name">definition</span>, </span><span class="parameter" id="param-extra"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">extra</span></span>)?, </span><span class="parameter" id="maybeWhen-param-orElse"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">orElse</span>()}</span>)
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
  <span class="name"><a href="../unself_model/JsonSchema/toJson">toJson</a></span><span class="signature">(<wbr>)
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
  <span class="name"><a href="../unself_model/JsonSchema/when">when</a></span><span class="signature">&lt;<wbr><span class="type-parameter">TResult extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="when-param-entity">{<span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">entity</span>(<span class="parameter" id="param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span><span class="parameter" id="param-definition"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="../unself_model/IJsonSchema">IJsonSchema</a></span>&gt;</span></span> <span class="parameter-name">definition</span>, </span><span class="parameter" id="param-key"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">key</span>, </span><span class="parameter" id="param-fieldMap"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">fieldMap</span>, </span><span class="parameter" id="param-extra"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">extra</span></span>), </span><span class="parameter" id="when-param-flat"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">flat</span>(<span class="parameter" id="param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span><span class="parameter" id="param-definition"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="../unself_model/IJsonSchema">IJsonSchema</a></span>&gt;</span></span> <span class="parameter-name">definition</span>, </span><span class="parameter" id="param-key"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">key</span>, </span><span class="parameter" id="param-entityPath"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">entityPath</span>, </span><span class="parameter" id="param-includePath"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span>&gt;</span></span> <span class="parameter-name">includePath</span>, </span><span class="parameter" id="param-addMissingKeys"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">addMissingKeys</span>, </span><span class="parameter" id="param-fieldMap"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">fieldMap</span>, </span><span class="parameter" id="param-extra"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">extra</span></span>), </span><span class="parameter" id="when-param-struct"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">struct</span>(<span class="parameter" id="param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span><span class="parameter" id="param-definition"><span class="type-annotation">dynamic</span> <span class="parameter-name">definition</span>, </span><span class="parameter" id="param-extra"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">extra</span></span>)}</span>)
    <span class="returntype parameter">→ TResult</span>
  </span>
  

</dt>
<dd class="inherited">
  
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="whenOrNull" class="callable inherited">
  <span class="name"><a href="../unself_model/JsonSchema/whenOrNull">whenOrNull</a></span><span class="signature">&lt;<wbr><span class="type-parameter">TResult extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="whenOrNull-param-entity">{<span class="type-annotation">TResult?</span> <span class="parameter-name">entity</span>(<span class="parameter" id="param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span><span class="parameter" id="param-definition"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="../unself_model/IJsonSchema">IJsonSchema</a></span>&gt;</span></span> <span class="parameter-name">definition</span>, </span><span class="parameter" id="param-key"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">key</span>, </span><span class="parameter" id="param-fieldMap"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">fieldMap</span>, </span><span class="parameter" id="param-extra"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">extra</span></span>)?, </span><span class="parameter" id="whenOrNull-param-flat"><span class="type-annotation">TResult?</span> <span class="parameter-name">flat</span>(<span class="parameter" id="param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span><span class="parameter" id="param-definition"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="../unself_model/IJsonSchema">IJsonSchema</a></span>&gt;</span></span> <span class="parameter-name">definition</span>, </span><span class="parameter" id="param-key"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">key</span>, </span><span class="parameter" id="param-entityPath"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">entityPath</span>, </span><span class="parameter" id="param-includePath"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span>&gt;</span></span> <span class="parameter-name">includePath</span>, </span><span class="parameter" id="param-addMissingKeys"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">addMissingKeys</span>, </span><span class="parameter" id="param-fieldMap"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">fieldMap</span>, </span><span class="parameter" id="param-extra"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">extra</span></span>)?, </span><span class="parameter" id="whenOrNull-param-struct"><span class="type-annotation">TResult?</span> <span class="parameter-name">struct</span>(<span class="parameter" id="param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span><span class="parameter" id="param-definition"><span class="type-annotation">dynamic</span> <span class="parameter-name">definition</span>, </span><span class="parameter" id="param-extra"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">extra</span></span>)?}</span>)
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
  <li><a href="../index">unself_model</a></li>
  <li><a href="../unself_model/unself_model">unself_model</a></li>
  <li class="self-crumb">Entity abstract class</li>
</ol>


    <h5>unself_model library</h5>
    <ol>
      <li class="section-title"><a href="../unself_model/unself_model#classes">Classes</a></li>
        <li><a href="../unself_model/Account">Account</a></li>
        <li><a href="../unself_model/Activity">Activity</a></li>
        <li><a href="../unself_model/App">App</a></li>
        <li><a href="../unself_model/Archive">Archive</a></li>
        <li><a href="../unself_model/ArchiveData">ArchiveData</a></li>
        <li><a href="../unself_model/ArchiveSchema">ArchiveSchema</a></li>
        <li><a href="../unself_model/ArchiveSchemaPart">ArchiveSchemaPart</a></li>
        <li><a href="../unself_model/Base">Base</a></li>
        <li><a href="../unself_model/Collection">Collection</a></li>
        <li><a href="../unself_model/Edge">Edge</a></li>
        <li><a href="../unself_model/Entity">Entity</a></li>
        <li><a href="../unself_model/Field">Field</a></li>
        <li><a href="../unself_model/Flat">Flat</a></li>
        <li><a href="../unself_model/IJsonSchema">IJsonSchema</a></li>
        <li><a href="../unself_model/IJsonSchemaRef">IJsonSchemaRef</a></li>
        <li><a href="../unself_model/JsonDateTime">JsonDateTime</a></li>
        <li><a href="../unself_model/JsonExtra">JsonExtra</a></li>
        <li><a href="../unself_model/JsonPart">JsonPart</a></li>
        <li><a href="../unself_model/JsonRef">JsonRef</a></li>
        <li><a href="../unself_model/JsonRefList">JsonRefList</a></li>
        <li><a href="../unself_model/JsonRefValue">JsonRefValue</a></li>
        <li><a href="../unself_model/JsonSchema">JsonSchema</a></li>
        <li><a href="../unself_model/JsonString">JsonString</a></li>
        <li><a href="../unself_model/JsonVersion">JsonVersion</a></li>
        <li><a href="../unself_model/JsonVersionConstraint">JsonVersionConstraint</a></li>
        <li><a href="../unself_model/Mapping">Mapping</a></li>
        <li><a href="../unself_model/Node">Node</a></li>
        <li><a href="../unself_model/Ref">Ref</a></li>
        <li><a href="../unself_model/RefList">RefList</a></li>
        <li><a href="../unself_model/Settings">Settings</a></li>
        <li><a href="../unself_model/SlugFrom">SlugFrom</a></li>
        <li><a href="../unself_model/Struct">Struct</a></li>
        <li><a href="../unself_model/Topic">Topic</a></li>
        <li><a href="../unself_model/Union">Union</a></li>
        <li><a href="../unself_model/UnionList">UnionList</a></li>
        <li><a href="../unself_model/ValueFrom">ValueFrom</a></li>
        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/Version-class.html">Version</a></li>
        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionConstraint-class.html">VersionConstraint</a></li>
        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionRange-class.html">VersionRange</a></li>
        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionUnion-class.html">VersionUnion</a></li>
        <li><a href="../unself_model/ZipJsonPart">ZipJsonPart</a></li>






      <li class="section-title"><a href="../unself_model/unself_model#enums">Enums</a></li>
        <li><a href="../unself_model/CollectionType">CollectionType</a></li>
        <li><a href="../unself_model/FieldType">FieldType</a></li>

      <li class="section-title"><a href="../unself_model/unself_model#typedefs">Typedefs</a></li>
        <li><a href="../unself_model/AccumulatorCallback">AccumulatorCallback</a></li>
        <li><a href="../unself_model/DoCallback">DoCallback</a></li>
        <li><a href="../unself_model/SchemaFinder">SchemaFinder</a></li>

</ol>

  </div>

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
    <ol>

        <li class="section-title"><a href="../unself_model/Entity#constructors">Constructors</a></li>
          <li><a href="../unself_model/Entity/Entity.constructor">Entity</a></li>
          <li><a href="../unself_model/Entity/Entity.fromJson">fromJson</a></li>


        <li class="section-title">
          <a href="../unself_model/Entity#instance-properties">Properties</a>
        </li>
          <li><a href="../unself_model/Entity/copyWith">copyWith</a></li>
          <li><a href="../unself_model/Entity/definition">definition</a></li>
          <li><a href="../unself_model/Entity/extra">extra</a></li>
          <li><a href="../unself_model/Entity/fieldMap">fieldMap</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li><a href="../unself_model/Entity/key">key</a></li>
          <li><a href="../unself_model/Entity/name">name</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title inherited"><a href="../unself_model/Entity#instance-methods">Methods</a></li>
          <li class="inherited"><a href="../unself_model/JsonSchema/map">map</a></li>
          <li class="inherited"><a href="../unself_model/JsonSchema/mapOrNull">mapOrNull</a></li>
          <li class="inherited"><a href="../unself_model/JsonSchema/maybeMap">maybeMap</a></li>
          <li class="inherited"><a href="../unself_model/JsonSchema/maybeWhen">maybeWhen</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="../unself_model/JsonSchema/toJson">toJson</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li class="inherited"><a href="../unself_model/JsonSchema/when">when</a></li>
          <li class="inherited"><a href="../unself_model/JsonSchema/whenOrNull">whenOrNull</a></li>

        <li class="section-title inherited"><a href="../unself_model/Entity#operators">Operators</a></li>
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
