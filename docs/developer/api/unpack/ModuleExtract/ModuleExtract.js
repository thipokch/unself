import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-class">ModuleExtract</span> class 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    


    <section>
      <dl class="dl-horizontal">
        
  <dt>Inheritance</dt>
  <dd>
    <ul class="gt-separated dark clazz-relationships">
      <li><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></li>
        <li><a href="../unpack/ModuleState">ModuleState</a></li>
      <li>ModuleExtract</li>
    </ul>
  </dd>

        
        



        


      </dl>
    </section>

    
  <section class="summary offset-anchor" id="constructors">
    <h2>Constructors</h2>

    <dl class="constructor-summary-list">
        <dt id="ModuleExtract" class="callable">
          <span class="name"><a href="../unpack/ModuleExtract/ModuleExtract.constructor">ModuleExtract</a></span><span class="signature">()</span>
        </dt>
        <dd>
          
            <div class="constructor-modifier features">const</div>
            <div class="constructor-modifier features">factory</div>
        </dd>
        <dt id="ModuleExtract.fromJson" class="callable">
          <span class="name"><a href="../unpack/ModuleExtract/ModuleExtract.fromJson">ModuleExtract.fromJson</a></span><span class="signature">(<span class="parameter" id="fromJson-param-json"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">json</span></span>)</span>
        </dt>
        <dd>
          
            <div class="constructor-modifier features">factory</div>
        </dd>
    </dl>
  </section>

    <section class="summary offset-anchor inherited" id="instance-properties">
      <h2>Properties</h2>

      <dl class="properties">
        <dt id="hashCode" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> 

</dt>
<dd class="inherited">
  The hash code for this object.
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

        <dt id="step" class="property inherited">
  <span class="name"><a href="../unpack/ModuleState/step">step</a></span>
  <span class="signature">→ <a href="../unpack/ModuleStep">ModuleStep</a></span> 

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
  <span class="name"><a href="../unpack/ModuleState/map">map</a></span><span class="signature">&lt;<wbr><span class="type-parameter">TResult extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="map-param-initial">{<span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">initial</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../unpack/ModuleInitial">ModuleInitial</a></span> <span class="parameter-name">value</span></span>), </span><span class="parameter" id="map-param-file"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">file</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../unpack/ModuleFile">ModuleFile</a></span> <span class="parameter-name">value</span></span>), </span><span class="parameter" id="map-param-extract"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">extract</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../unpack/ModuleExtract">ModuleExtract</a></span> <span class="parameter-name">value</span></span>), </span><span class="parameter" id="map-param-transform"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">transform</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../unpack/ModuleTransform">ModuleTransform</a></span> <span class="parameter-name">value</span></span>), </span><span class="parameter" id="map-param-load"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">load</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../unpack/ModuleLoad">ModuleLoad</a></span> <span class="parameter-name">value</span></span>), </span><span class="parameter" id="map-param-complete"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">complete</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../unpack/ModuleComplete">ModuleComplete</a></span> <span class="parameter-name">value</span></span>), </span><span class="parameter" id="map-param-error"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">error</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../unpack/ModuleError">ModuleError</a></span> <span class="parameter-name">value</span></span>)}</span>)
    <span class="returntype parameter">→ TResult</span>
  </span>
  

</dt>
<dd class="inherited">
  
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="mapOrNull" class="callable inherited">
  <span class="name"><a href="../unpack/ModuleState/mapOrNull">mapOrNull</a></span><span class="signature">&lt;<wbr><span class="type-parameter">TResult extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="mapOrNull-param-initial">{<span class="type-annotation">TResult?</span> <span class="parameter-name">initial</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../unpack/ModuleInitial">ModuleInitial</a></span> <span class="parameter-name">value</span></span>)?, </span><span class="parameter" id="mapOrNull-param-file"><span class="type-annotation">TResult?</span> <span class="parameter-name">file</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../unpack/ModuleFile">ModuleFile</a></span> <span class="parameter-name">value</span></span>)?, </span><span class="parameter" id="mapOrNull-param-extract"><span class="type-annotation">TResult?</span> <span class="parameter-name">extract</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../unpack/ModuleExtract">ModuleExtract</a></span> <span class="parameter-name">value</span></span>)?, </span><span class="parameter" id="mapOrNull-param-transform"><span class="type-annotation">TResult?</span> <span class="parameter-name">transform</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../unpack/ModuleTransform">ModuleTransform</a></span> <span class="parameter-name">value</span></span>)?, </span><span class="parameter" id="mapOrNull-param-load"><span class="type-annotation">TResult?</span> <span class="parameter-name">load</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../unpack/ModuleLoad">ModuleLoad</a></span> <span class="parameter-name">value</span></span>)?, </span><span class="parameter" id="mapOrNull-param-complete"><span class="type-annotation">TResult?</span> <span class="parameter-name">complete</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../unpack/ModuleComplete">ModuleComplete</a></span> <span class="parameter-name">value</span></span>)?, </span><span class="parameter" id="mapOrNull-param-error"><span class="type-annotation">TResult?</span> <span class="parameter-name">error</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../unpack/ModuleError">ModuleError</a></span> <span class="parameter-name">value</span></span>)?}</span>)
    <span class="returntype parameter">→ TResult?</span>
  </span>
  

</dt>
<dd class="inherited">
  
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="maybeMap" class="callable inherited">
  <span class="name"><a href="../unpack/ModuleState/maybeMap">maybeMap</a></span><span class="signature">&lt;<wbr><span class="type-parameter">TResult extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="maybeMap-param-initial">{<span class="type-annotation">TResult</span> <span class="parameter-name">initial</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../unpack/ModuleInitial">ModuleInitial</a></span> <span class="parameter-name">value</span></span>)?, </span><span class="parameter" id="maybeMap-param-file"><span class="type-annotation">TResult</span> <span class="parameter-name">file</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../unpack/ModuleFile">ModuleFile</a></span> <span class="parameter-name">value</span></span>)?, </span><span class="parameter" id="maybeMap-param-extract"><span class="type-annotation">TResult</span> <span class="parameter-name">extract</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../unpack/ModuleExtract">ModuleExtract</a></span> <span class="parameter-name">value</span></span>)?, </span><span class="parameter" id="maybeMap-param-transform"><span class="type-annotation">TResult</span> <span class="parameter-name">transform</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../unpack/ModuleTransform">ModuleTransform</a></span> <span class="parameter-name">value</span></span>)?, </span><span class="parameter" id="maybeMap-param-load"><span class="type-annotation">TResult</span> <span class="parameter-name">load</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../unpack/ModuleLoad">ModuleLoad</a></span> <span class="parameter-name">value</span></span>)?, </span><span class="parameter" id="maybeMap-param-complete"><span class="type-annotation">TResult</span> <span class="parameter-name">complete</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../unpack/ModuleComplete">ModuleComplete</a></span> <span class="parameter-name">value</span></span>)?, </span><span class="parameter" id="maybeMap-param-error"><span class="type-annotation">TResult</span> <span class="parameter-name">error</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../unpack/ModuleError">ModuleError</a></span> <span class="parameter-name">value</span></span>)?, </span><span class="parameter" id="maybeMap-param-orElse"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">orElse</span>()}</span>)
    <span class="returntype parameter">→ TResult</span>
  </span>
  

</dt>
<dd class="inherited">
  
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="maybeWhen" class="callable inherited">
  <span class="name"><a href="../unpack/ModuleState/maybeWhen">maybeWhen</a></span><span class="signature">&lt;<wbr><span class="type-parameter">TResult extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="maybeWhen-param-initial">{<span class="type-annotation">TResult</span> <span class="parameter-name">initial</span>()?, </span><span class="parameter" id="maybeWhen-param-file"><span class="type-annotation">TResult</span> <span class="parameter-name">file</span>()?, </span><span class="parameter" id="maybeWhen-param-extract"><span class="type-annotation">TResult</span> <span class="parameter-name">extract</span>()?, </span><span class="parameter" id="maybeWhen-param-transform"><span class="type-annotation">TResult</span> <span class="parameter-name">transform</span>()?, </span><span class="parameter" id="maybeWhen-param-load"><span class="type-annotation">TResult</span> <span class="parameter-name">load</span>()?, </span><span class="parameter" id="maybeWhen-param-complete"><span class="type-annotation">TResult</span> <span class="parameter-name">complete</span>()?, </span><span class="parameter" id="maybeWhen-param-error"><span class="type-annotation">TResult</span> <span class="parameter-name">error</span>()?, </span><span class="parameter" id="maybeWhen-param-orElse"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">orElse</span>()}</span>)
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
  <span class="name"><a href="../unpack/ModuleState/toJson">toJson</a></span><span class="signature">(<wbr>)
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
  <span class="name"><a href="../unpack/ModuleState/when">when</a></span><span class="signature">&lt;<wbr><span class="type-parameter">TResult extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="when-param-initial">{<span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">initial</span>(), </span><span class="parameter" id="when-param-file"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">file</span>(), </span><span class="parameter" id="when-param-extract"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">extract</span>(), </span><span class="parameter" id="when-param-transform"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">transform</span>(), </span><span class="parameter" id="when-param-load"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">load</span>(), </span><span class="parameter" id="when-param-complete"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">complete</span>(), </span><span class="parameter" id="when-param-error"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">error</span>()}</span>)
    <span class="returntype parameter">→ TResult</span>
  </span>
  

</dt>
<dd class="inherited">
  
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="whenOrNull" class="callable inherited">
  <span class="name"><a href="../unpack/ModuleState/whenOrNull">whenOrNull</a></span><span class="signature">&lt;<wbr><span class="type-parameter">TResult extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="whenOrNull-param-initial">{<span class="type-annotation">TResult?</span> <span class="parameter-name">initial</span>()?, </span><span class="parameter" id="whenOrNull-param-file"><span class="type-annotation">TResult?</span> <span class="parameter-name">file</span>()?, </span><span class="parameter" id="whenOrNull-param-extract"><span class="type-annotation">TResult?</span> <span class="parameter-name">extract</span>()?, </span><span class="parameter" id="whenOrNull-param-transform"><span class="type-annotation">TResult?</span> <span class="parameter-name">transform</span>()?, </span><span class="parameter" id="whenOrNull-param-load"><span class="type-annotation">TResult?</span> <span class="parameter-name">load</span>()?, </span><span class="parameter" id="whenOrNull-param-complete"><span class="type-annotation">TResult?</span> <span class="parameter-name">complete</span>()?, </span><span class="parameter" id="whenOrNull-param-error"><span class="type-annotation">TResult?</span> <span class="parameter-name">error</span>()?}</span>)
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
  <li><a href="../index">unpack</a></li>
  <li><a href="../unpack/unpack">unpack</a></li>
  <li class="self-crumb">ModuleExtract abstract class</li>
</ol>


    <h5>unpack library</h5>
    <ol>
      <li class="section-title"><a href="../unpack/unpack#classes">Classes</a></li>
        <li><a href="../unpack/ExtractJson">ExtractJson</a></li>
        <li><a href="../unpack/IExtract">IExtract</a></li>
        <li><a href="../unpack/IFile">IFile</a></li>
        <li><a href="../unpack/ILoad">ILoad</a></li>
        <li><a href="../unpack/IRetrieve">IRetrieve</a></li>
        <li><a href="../unpack/ITransform">ITransform</a></li>
        <li><a href="../unpack/IUnpack">IUnpack</a></li>
        <li><a href="../unpack/JsonNormalizer">JsonNormalizer</a></li>
        <li><a href="../unpack/LoadUngraph">LoadUngraph</a></li>
        <li><a href="../unpack/ModuleComplete">ModuleComplete</a></li>
        <li><a href="../unpack/ModuleError">ModuleError</a></li>
        <li><a href="../unpack/ModuleExtract">ModuleExtract</a></li>
        <li><a href="../unpack/ModuleFile">ModuleFile</a></li>
        <li><a href="../unpack/ModuleInitial">ModuleInitial</a></li>
        <li><a href="../unpack/ModuleLoad">ModuleLoad</a></li>
        <li><a href="../unpack/Moduler">Moduler</a></li>
        <li><a href="../unpack/ModuleState">ModuleState</a></li>
        <li><a href="../unpack/ModuleTransform">ModuleTransform</a></li>
        <li><a href="../unpack/PatternConverter">PatternConverter</a></li>
        <li><a href="../unpack/RetrieveLocalFile">RetrieveLocalFile</a></li>
        <li><a href="../unpack/TransformJson">TransformJson</a></li>
        <li><a href="../unpack/UnpackService">UnpackService</a></li>
        <li><a href="../unpack/XFileConverter">XFileConverter</a></li>
        <li><a href="../unpack/ZipFile">ZipFile</a></li>

      <li class="section-title"><a href="../unpack/unpack#extensions">Extensions</a></li>
        <li><a href="../unpack/PatternEquality">PatternEquality</a></li>


      <li class="section-title"><a href="../unpack/unpack#constants">Constants</a></li>
        <li><a href="../unpack/jsonTypeKey-constant">jsonTypeKey</a></li>


      <li class="section-title"><a href="../unpack/unpack#functions">Functions</a></li>
        <li><a href="../unpack/flatten">flatten</a></li>
        <li><a href="../unpack/iFromJson">iFromJson</a></li>
        <li><a href="../unpack/includeAccumulator">includeAccumulator</a></li>
        <li><a href="../unpack/listAccumulator">listAccumulator</a></li>
        <li><a href="../unpack/mapAccumulator">mapAccumulator</a></li>
        <li><a href="../unpack/normalize">normalize</a></li>
        <li><a href="../unpack/normalizeRef">normalizeRef</a></li>

      <li class="section-title"><a href="../unpack/unpack#enums">Enums</a></li>
        <li><a href="../unpack/ModuleStep">ModuleStep</a></li>
        <li><a href="../unpack/Position">Position</a></li>

      <li class="section-title"><a href="../unpack/unpack#typedefs">Typedefs</a></li>
        <li><a href="../unpack/Accumulator">Accumulator</a></li>
        <li><a href="../unpack/IFromJson">IFromJson</a></li>

</ol>

  </div>

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
    <ol>

        <li class="section-title"><a href="../unpack/ModuleExtract#constructors">Constructors</a></li>
          <li><a href="../unpack/ModuleExtract/ModuleExtract.constructor">ModuleExtract</a></li>
          <li><a href="../unpack/ModuleExtract/ModuleExtract.fromJson">fromJson</a></li>


        <li class="section-title inherited">
          <a href="../unpack/ModuleExtract#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li class="inherited"><a href="../unpack/ModuleState/step">step</a></li>

        <li class="section-title inherited"><a href="../unpack/ModuleExtract#instance-methods">Methods</a></li>
          <li class="inherited"><a href="../unpack/ModuleState/map">map</a></li>
          <li class="inherited"><a href="../unpack/ModuleState/mapOrNull">mapOrNull</a></li>
          <li class="inherited"><a href="../unpack/ModuleState/maybeMap">maybeMap</a></li>
          <li class="inherited"><a href="../unpack/ModuleState/maybeWhen">maybeWhen</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="../unpack/ModuleState/toJson">toJson</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li class="inherited"><a href="../unpack/ModuleState/when">when</a></li>
          <li class="inherited"><a href="../unpack/ModuleState/whenOrNull">whenOrNull</a></li>

        <li class="section-title inherited"><a href="../unpack/ModuleExtract#operators">Operators</a></li>
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
