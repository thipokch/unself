import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-class">JsonNormalizer</span> class 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    



    
  <section class="summary offset-anchor" id="constructors">
    <h2>Constructors</h2>

    <dl class="constructor-summary-list">
        <dt id="JsonNormalizer" class="callable">
          <span class="name"><a href="../unpack/JsonNormalizer/JsonNormalizer.constructor">JsonNormalizer</a></span><span class="signature">(<span class="parameter" id="-param-schema"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Iterable-class.html">Iterable</a><span class="signature">&lt;<wbr><span class="type-parameter">JsonSchema</span>&gt;</span></span> <span class="parameter-name">schema</span></span>)</span>
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

      </dl>
    </section>

    
  <section class="summary offset-anchor" id="instance-methods">
    <h2>Methods</h2>
    <dl class="callables">
        <dt id="accumulate" class="callable">
  <span class="name"><a href="../unpack/JsonNormalizer/accumulate">accumulate</a></span><span class="signature">(<wbr><span class="parameter" id="accumulate-param-entity"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">entity</span>, </span><span class="parameter" id="accumulate-param-json"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">json</span>, </span><span class="parameter" id="accumulate-param-accumulator"><span class="type-annotation">AccumulatorCallback</span> <span class="parameter-name">accumulator</span></span>)
    <span class="returntype parameter">→ void</span>
  </span>
  

</dt>
<dd>
  
  

</dd>

        <dt id="normalize" class="callable">
  <span class="name"><a href="../unpack/JsonNormalizer/normalize">normalize</a></span><span class="signature">(<wbr><span class="parameter" id="normalize-param-entity"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">entity</span>, </span><span class="parameter" id="normalize-param-json"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">json</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Iterable-class.html">Iterable</a></span>&gt;</span></span>
  </span>
  

</dt>
<dd>
  
  

</dd>

        <dt id="normalizeUnique" class="callable">
  <span class="name"><a href="../unpack/JsonNormalizer/normalizeUnique">normalizeUnique</a></span><span class="signature">(<wbr><span class="parameter" id="normalizeUnique-param-entity"><span class="type-annotation">JsonSchema</span> <span class="parameter-name">entity</span>, </span><span class="parameter" id="normalizeUnique-param-json"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">json</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Iterable-class.html">Iterable</a></span>&gt;</span></span>
  </span>
  

</dt>
<dd>
  
  

</dd>

        <dt id="normalizeWith" class="callable">
  <span class="name"><a href="../unpack/JsonNormalizer/normalizeWith">normalizeWith</a></span><span class="signature">(<wbr><span class="parameter" id="normalizeWith-param-entity"><span class="type-annotation">JsonSchema</span> <span class="parameter-name">entity</span>, </span><span class="parameter" id="normalizeWith-param-json"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">json</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Iterable-class.html">Iterable</a></span>&gt;</span></span>
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
  <li><a href="../index">unpack</a></li>
  <li><a href="../unpack/unpack">unpack</a></li>
  <li class="self-crumb">JsonNormalizer class</li>
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

        <li class="section-title"><a href="../unpack/JsonNormalizer#constructors">Constructors</a></li>
          <li><a href="../unpack/JsonNormalizer/JsonNormalizer.constructor">JsonNormalizer</a></li>


        <li class="section-title inherited">
          <a href="../unpack/JsonNormalizer#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title"><a href="../unpack/JsonNormalizer#instance-methods">Methods</a></li>
          <li><a href="../unpack/JsonNormalizer/accumulate">accumulate</a></li>
          <li><a href="../unpack/JsonNormalizer/normalize">normalize</a></li>
          <li><a href="../unpack/JsonNormalizer/normalizeUnique">normalizeUnique</a></li>
          <li><a href="../unpack/JsonNormalizer/normalizeWith">normalizeWith</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../unpack/JsonNormalizer#operators">Operators</a></li>
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
