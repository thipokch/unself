import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
    
      <div>
<h1><span class="kind-library">unpack</span> library 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    


    <section class="summary offset-anchor" id="classes">
      <h2>Classes</h2>

      <dl>
        <dt id="ExtractJson">
  <span class="name "><a href="unpack/ExtractJson">ExtractJson</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="IExtract">
  <span class="name "><a href="unpack/IExtract">IExtract</a><span class="signature">&lt;<wbr><span class="type-parameter">O</span>&gt;</span></span> 

</dt>
<dd>
  
</dd>

        <dt id="IFile">
  <span class="name "><a href="unpack/IFile">IFile</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="ILoad">
  <span class="name "><a href="unpack/ILoad">ILoad</a><span class="signature">&lt;<wbr><span class="type-parameter">I</span>&gt;</span></span> 

</dt>
<dd>
  
</dd>

        <dt id="IRetrieve">
  <span class="name "><a href="unpack/IRetrieve">IRetrieve</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="ITransform">
  <span class="name "><a href="unpack/ITransform">ITransform</a><span class="signature">&lt;<wbr><span class="type-parameter">I</span>, <span class="type-parameter">O</span>&gt;</span></span> 

</dt>
<dd>
  
</dd>

        <dt id="IUnpack">
  <span class="name "><a href="unpack/IUnpack">IUnpack</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="JsonNormalizer">
  <span class="name "><a href="unpack/JsonNormalizer">JsonNormalizer</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="LoadUngraph">
  <span class="name "><a href="unpack/LoadUngraph">LoadUngraph</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="ModuleComplete">
  <span class="name "><a href="unpack/ModuleComplete">ModuleComplete</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="ModuleError">
  <span class="name "><a href="unpack/ModuleError">ModuleError</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="ModuleExtract">
  <span class="name "><a href="unpack/ModuleExtract">ModuleExtract</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="ModuleFile">
  <span class="name "><a href="unpack/ModuleFile">ModuleFile</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="ModuleInitial">
  <span class="name "><a href="unpack/ModuleInitial">ModuleInitial</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="ModuleLoad">
  <span class="name "><a href="unpack/ModuleLoad">ModuleLoad</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="Moduler">
  <span class="name "><a href="unpack/Moduler">Moduler</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="ModuleState">
  <span class="name "><a href="unpack/ModuleState">ModuleState</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="ModuleTransform">
  <span class="name "><a href="unpack/ModuleTransform">ModuleTransform</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="PatternConverter">
  <span class="name "><a href="unpack/PatternConverter">PatternConverter</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="RetrieveLocalFile">
  <span class="name "><a href="unpack/RetrieveLocalFile">RetrieveLocalFile</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="TransformJson">
  <span class="name "><a href="unpack/TransformJson">TransformJson</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="UnpackService">
  <span class="name "><a href="unpack/UnpackService">UnpackService</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="XFileConverter">
  <span class="name "><a href="unpack/XFileConverter">XFileConverter</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="ZipFile">
  <span class="name "><a href="unpack/ZipFile">ZipFile</a></span> 

</dt>
<dd>
  
</dd>

      </dl>
    </section>


    <section class="summary offset-anchor" id="extensions">
      <h2>Extensions</h2>

      <dl>
        <dt id="PatternEquality">
    <span class="name "><a href="unpack/PatternEquality">PatternEquality</a></span> 

</dt>
<dd>
    
</dd>


      </dl>
    </section>

    <section class="summary offset-anchor" id="constants">
      <h2>Constants</h2>

      <dl class="properties">
        <dt id="jsonTypeKey" class="constant">
    <span class="name "><a href="unpack/jsonTypeKey-constant">jsonTypeKey</a></span>
  <span class="signature">→ const <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>
  

</dt>
<dd>
  
  

    <div>
      <span class="signature"><code>'@type'</code></span>
    </div>
</dd>

      </dl>
    </section>


    <section class="summary offset-anchor" id="functions">
      <h2>Functions</h2>

      <dl class="callables">
        <dt id="flatten" class="callable">
  <span class="name"><a href="unpack/flatten">flatten</a></span><span class="signature">(<wbr><span class="parameter" id="flatten-param-json"><span class="type-annotation">dynamic</span> <span class="parameter-name">json</span>, </span><span class="parameter" id="flatten-param-separator">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">separator</span> = <span class="default-value">'.'</span>, </span><span class="parameter" id="flatten-param-recordPath"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">recordPath</span> = <span class="default-value">const []</span>, </span><span class="parameter" id="flatten-param-includePath"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span>&gt;</span></span> <span class="parameter-name">includePath</span> = <span class="default-value">const []</span>, </span><span class="parameter" id="flatten-param-addMissingKeys"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">addMissingKeys</span> = <span class="default-value">true</span>, </span><span class="parameter" id="flatten-param-maxLevel"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> <span class="parameter-name">maxLevel</span> = <span class="default-value">-1</span>}</span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span>&gt;</span></span>
  </span>
  

</dt>
<dd>
  <a href="unpack/flatten">flatten</a> is similar to pandas' json_normalize function, this function
recursively flattens the nested JSON objects into a flat tabular list.
It returns <a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List&lt;Map&lt;String, dynamic&gt;&gt;</a> of the flattened records.
  

</dd>

        <dt id="iFromJson" class="callable">
  <span class="name"><a href="unpack/iFromJson">iFromJson</a></span><span class="signature">&lt;<wbr><span class="type-parameter">I</span>, <span class="type-parameter">J</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="iFromJson-param-iFromJson"><span class="type-annotation"><a href="unpack/IFromJson">IFromJson</a></span> <span class="parameter-name">iFromJson</span>, </span><span class="parameter" id="iFromJson-param-json"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">json</span></span>)
    <span class="returntype parameter">→ I</span>
  </span>
  

</dt>
<dd>
  
  

</dd>

        <dt id="includeAccumulator" class="callable">
  <span class="name"><a href="unpack/includeAccumulator">includeAccumulator</a></span><span class="signature">(<wbr><span class="parameter" id="includeAccumulator-param-result"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">result</span>, </span><span class="parameter" id="includeAccumulator-param-includeKeys"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Set-class.html">Set</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">includeKeys</span></span>)
    <span class="returntype parameter">→ <a href="unpack/Accumulator">Accumulator</a></span>
  </span>
  

</dt>
<dd>
  
  

</dd>

        <dt id="listAccumulator" class="callable">
  <span class="name"><a href="unpack/listAccumulator">listAccumulator</a></span><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="listAccumulator-param-result"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></span> <span class="parameter-name">result</span>, </span><span class="parameter" id="listAccumulator-param-seenKeys">[<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Set-class.html">Set</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">seenKeys</span>]</span>)
    <span class="returntype parameter">→ <a href="unpack/Accumulator">Accumulator</a></span>
  </span>
  

</dt>
<dd>
  
  

</dd>

        <dt id="mapAccumulator" class="callable">
  <span class="name"><a href="unpack/mapAccumulator">mapAccumulator</a></span><span class="signature">(<wbr><span class="parameter" id="mapAccumulator-param-result"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">result</span></span>)
    <span class="returntype parameter">→ <a href="unpack/Accumulator">Accumulator</a></span>
  </span>
  

</dt>
<dd>
  
  

</dd>

        <dt id="normalize" class="callable">
  <span class="name"><a href="unpack/normalize">normalize</a></span><span class="signature">(<wbr><span class="parameter" id="normalize-param-json"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">json</span>, </span><span class="parameter" id="normalize-param-schema"><span class="type-annotation">JsonSchema</span> <span class="parameter-name">schema</span>, </span><span class="parameter" id="normalize-param-accumulator"><span class="type-annotation">AccumulatorCallback</span> <span class="parameter-name">accumulator</span>, </span><span class="parameter" id="normalize-param-find"><span class="type-annotation">SchemaFinder</span> <span class="parameter-name">find</span></span>)
    <span class="returntype parameter">→ dynamic</span>
  </span>
  

</dt>
<dd>
  
  

</dd>

        <dt id="normalizeRef" class="callable">
  <span class="name"><a href="unpack/normalizeRef">normalizeRef</a></span><span class="signature">(<wbr><span class="parameter" id="normalizeRef-param-json"><span class="type-annotation">dynamic</span> <span class="parameter-name">json</span>, </span><span class="parameter" id="normalizeRef-param-define"><span class="type-annotation">IJsonSchemaRef?</span> <span class="parameter-name">define</span>, </span><span class="parameter" id="normalizeRef-param-find"><span class="type-annotation">SchemaFinder</span> <span class="parameter-name">find</span>, </span><span class="parameter" id="normalizeRef-param-accumulator"><span class="type-annotation">AccumulatorCallback</span> <span class="parameter-name">accumulator</span></span>)
    <span class="returntype parameter">→ dynamic</span>
  </span>
  

</dt>
<dd>
  
  

</dd>

      </dl>
    </section>

    <section class="summary offset-anchor" id="enums">
      <h2>Enums</h2>

      <dl>
        <dt id="ModuleStep">
  <span class="name "><a href="unpack/ModuleStep">ModuleStep</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="Position">
  <span class="name "><a href="unpack/Position">Position</a></span> 

</dt>
<dd>
  
</dd>

      </dl>
    </section>

    <section class="summary offset-anchor" id="typedefs">
      <h2>Typedefs</h2>

      <dl>
          
  <dt id="Accumulator" class="callable">
    <span class="name"><a href="unpack/Accumulator">Accumulator</a></span><span class="signature">
      <span class="returntype parameter">= void Function<span class="signature">(<span class="parameter" id="param-key"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">key</span>, </span><span class="parameter" id="param-value"><span class="type-annotation">dynamic</span> <span class="parameter-name">value</span></span>)</span></span>
    </span>
    

  </dt>
  <dd>
    
    

  </dd>

          
  <dt id="IFromJson" class="">
  <span class="name"><a href="unpack/IFromJson">IFromJson</a></span>&lt;<wbr><span class="type-parameter">I</span>&gt;
    = <a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Type-class.html">Type</a></span>, <span class="type-parameter">I Function<span class="signature">(<span class="parameter" id="param-json"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">json</span></span>)</span></span>&gt;</span>
  
  

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
  <li><a href="index">unpack</a></li>
  <li class="self-crumb">unpack library</li>
</ol>


    <h5><span class="package-name">unpack</span> <span class="package-kind">package</span></h5>
    <ol>
      <li class="section-title">Libraries</li>
      <li><a href="unpack/unpack">unpack</a></li>
</ol>

  </div>

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
    <h5>unpack library</h5>
    <ol>
      <li class="section-title"><a href="unpack/unpack#classes">Classes</a></li>
        <li><a href="unpack/ExtractJson">ExtractJson</a></li>
        <li><a href="unpack/IExtract">IExtract</a></li>
        <li><a href="unpack/IFile">IFile</a></li>
        <li><a href="unpack/ILoad">ILoad</a></li>
        <li><a href="unpack/IRetrieve">IRetrieve</a></li>
        <li><a href="unpack/ITransform">ITransform</a></li>
        <li><a href="unpack/IUnpack">IUnpack</a></li>
        <li><a href="unpack/JsonNormalizer">JsonNormalizer</a></li>
        <li><a href="unpack/LoadUngraph">LoadUngraph</a></li>
        <li><a href="unpack/ModuleComplete">ModuleComplete</a></li>
        <li><a href="unpack/ModuleError">ModuleError</a></li>
        <li><a href="unpack/ModuleExtract">ModuleExtract</a></li>
        <li><a href="unpack/ModuleFile">ModuleFile</a></li>
        <li><a href="unpack/ModuleInitial">ModuleInitial</a></li>
        <li><a href="unpack/ModuleLoad">ModuleLoad</a></li>
        <li><a href="unpack/Moduler">Moduler</a></li>
        <li><a href="unpack/ModuleState">ModuleState</a></li>
        <li><a href="unpack/ModuleTransform">ModuleTransform</a></li>
        <li><a href="unpack/PatternConverter">PatternConverter</a></li>
        <li><a href="unpack/RetrieveLocalFile">RetrieveLocalFile</a></li>
        <li><a href="unpack/TransformJson">TransformJson</a></li>
        <li><a href="unpack/UnpackService">UnpackService</a></li>
        <li><a href="unpack/XFileConverter">XFileConverter</a></li>
        <li><a href="unpack/ZipFile">ZipFile</a></li>

      <li class="section-title"><a href="unpack/unpack#extensions">Extensions</a></li>
        <li><a href="unpack/PatternEquality">PatternEquality</a></li>


      <li class="section-title"><a href="unpack/unpack#constants">Constants</a></li>
        <li><a href="unpack/jsonTypeKey-constant">jsonTypeKey</a></li>


      <li class="section-title"><a href="unpack/unpack#functions">Functions</a></li>
        <li><a href="unpack/flatten">flatten</a></li>
        <li><a href="unpack/iFromJson">iFromJson</a></li>
        <li><a href="unpack/includeAccumulator">includeAccumulator</a></li>
        <li><a href="unpack/listAccumulator">listAccumulator</a></li>
        <li><a href="unpack/mapAccumulator">mapAccumulator</a></li>
        <li><a href="unpack/normalize">normalize</a></li>
        <li><a href="unpack/normalizeRef">normalizeRef</a></li>

      <li class="section-title"><a href="unpack/unpack#enums">Enums</a></li>
        <li><a href="unpack/ModuleStep">ModuleStep</a></li>
        <li><a href="unpack/Position">Position</a></li>

      <li class="section-title"><a href="unpack/unpack#typedefs">Typedefs</a></li>
        <li><a href="unpack/Accumulator">Accumulator</a></li>
        <li><a href="unpack/IFromJson">IFromJson</a></li>

</ol>

  </div><!--/sidebar-offcanvas-right-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
