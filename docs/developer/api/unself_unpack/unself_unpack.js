import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
    
      <div>
<h1><span class="kind-library">unself_unpack</span> library 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    


    <section class="summary offset-anchor" id="classes">
      <h2>Classes</h2>

      <dl>
        <dt id="ArchiveExport">
  <span class="name "><a href="unself_unpack/ArchiveExport">ArchiveExport</a></span> 

</dt>
<dd>
  <a href="unself_unpack/ArchiveExport">ArchiveExport</a> unpacks archive files and collect metadata.
</dd>

        <dt id="Export">
  <span class="name "><a href="unself_unpack/Export">Export</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>, <span class="type-parameter">O</span>&gt;</span></span> 

</dt>
<dd>
  An interface for <a href="unself_unpack/Export">Export</a>
</dd>

        <dt id="Import">
  <span class="name "><a href="unself_unpack/Import">Import</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>, <span class="type-parameter">O</span>&gt;</span></span> 

</dt>
<dd>
  An interface for Input
</dd>

        <dt id="IUnpackService">
  <span class="name "><a href="unself_unpack/IUnpackService">IUnpackService</a></span> 

</dt>
<dd>
  An interface for Unpack
</dd>

        <dt id="Normalize">
  <span class="name "><a href="unself_unpack/Normalize">Normalize</a></span> 

</dt>
<dd>
  Normalize is a class that can be used to normalize a json object
into a normalized form that can be used by <code>Unself</code> app.
</dd>

        <dt id="UnpackService">
  <span class="name "><a href="unself_unpack/UnpackService">UnpackService</a></span> 

</dt>
<dd>
  <a href="unself_unpack/UnpackService">UnpackService</a> is a service that unpacks data from a file.
</dd>

        <dt id="ZipImport">
  <span class="name "><a href="unself_unpack/ZipImport">ZipImport</a></span> 

</dt>
<dd>
  <a href="unself_unpack/ZipImport">ZipImport</a> unpacks archive files and collect metadata.
</dd>

      </dl>
    </section>




    <section class="summary offset-anchor" id="properties">
      <h2>Properties</h2>

      <dl class="properties">
        <dt id="facebookSchema" class="property">
  <span class="name"><a href="unself_unpack/facebookSchema">facebookSchema</a></span>
  <span class="signature">→ ArchiveSchema</span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

      </dl>
    </section>

    <section class="summary offset-anchor" id="functions">
      <h2>Functions</h2>

      <dl class="callables">
        <dt id="flatten" class="callable">
  <span class="name"><a href="unself_unpack/flatten">flatten</a></span><span class="signature">(<wbr><span class="parameter" id="flatten-param-json"><span class="type-annotation">dynamic</span> <span class="parameter-name">json</span>, </span><span class="parameter" id="flatten-param-separator">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">separator</span> = <span class="default-value">'.'</span>, </span><span class="parameter" id="flatten-param-recordPath"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">recordPath</span> = <span class="default-value">const []</span>, </span><span class="parameter" id="flatten-param-includePath"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span>&gt;</span></span> <span class="parameter-name">includePath</span> = <span class="default-value">const []</span>, </span><span class="parameter" id="flatten-param-addMissingKeys"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">addMissingKeys</span> = <span class="default-value">true</span>, </span><span class="parameter" id="flatten-param-maxLevel"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> <span class="parameter-name">maxLevel</span> = <span class="default-value">-1</span>}</span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span>&gt;</span></span>
  </span>
  

</dt>
<dd>
  <a href="unself_unpack/flatten">flatten</a> is similar to pandas' json_normalize function, this function
recursively flattens the nested JSON objects into a flat tabular list.
It returns <a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List&lt;Map&lt;String, dynamic&gt;&gt;</a> of the flattened records.
  

</dd>

        <dt id="includeAccumulator" class="callable">
  <span class="name"><a href="unself_unpack/includeAccumulator">includeAccumulator</a></span><span class="signature">(<wbr><span class="parameter" id="includeAccumulator-param-result"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">result</span>, </span><span class="parameter" id="includeAccumulator-param-includeKeys"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Set-class.html">Set</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">includeKeys</span></span>)
    <span class="returntype parameter">→ <a href="unself_unpack/Accumulator">Accumulator</a></span>
  </span>
  

</dt>
<dd>
  
  

</dd>

        <dt id="listAccumulator" class="callable">
  <span class="name"><a href="unself_unpack/listAccumulator">listAccumulator</a></span><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="listAccumulator-param-result"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></span> <span class="parameter-name">result</span>, </span><span class="parameter" id="listAccumulator-param-seenKeys">[<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Set-class.html">Set</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">seenKeys</span>]</span>)
    <span class="returntype parameter">→ <a href="unself_unpack/Accumulator">Accumulator</a></span>
  </span>
  

</dt>
<dd>
  
  

</dd>

        <dt id="mapAccumulator" class="callable">
  <span class="name"><a href="unself_unpack/mapAccumulator">mapAccumulator</a></span><span class="signature">(<wbr><span class="parameter" id="mapAccumulator-param-result"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">result</span></span>)
    <span class="returntype parameter">→ <a href="unself_unpack/Accumulator">Accumulator</a></span>
  </span>
  

</dt>
<dd>
  
  

</dd>

      </dl>
    </section>

    <section class="summary offset-anchor" id="enums">
      <h2>Enums</h2>

      <dl>
        <dt id="Position">
  <span class="name "><a href="unself_unpack/Position">Position</a></span> 

</dt>
<dd>
  
</dd>

      </dl>
    </section>

    <section class="summary offset-anchor" id="typedefs">
      <h2>Typedefs</h2>

      <dl>
          
  <dt id="Accumulator" class="callable">
    <span class="name"><a href="unself_unpack/Accumulator">Accumulator</a></span><span class="signature">
      <span class="returntype parameter">= void Function<span class="signature">(<span class="parameter" id="param-key"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">key</span>, </span><span class="parameter" id="param-value"><span class="type-annotation">dynamic</span> <span class="parameter-name">value</span></span>)</span></span>
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
  <li><a href="index">unself_unpack</a></li>
  <li class="self-crumb">unself_unpack library</li>
</ol>


    <h5><span class="package-name">unself_unpack</span> <span class="package-kind">package</span></h5>
    <ol>
      <li class="section-title">Libraries</li>
      <li><a href="unself_unpack/unself_unpack">unself_unpack</a></li>
</ol>

  </div>

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
    <h5>unself_unpack library</h5>
    <ol>
      <li class="section-title"><a href="unself_unpack/unself_unpack#classes">Classes</a></li>
        <li><a href="unself_unpack/ArchiveExport">ArchiveExport</a></li>
        <li><a href="unself_unpack/Export">Export</a></li>
        <li><a href="unself_unpack/Import">Import</a></li>
        <li><a href="unself_unpack/IUnpackService">IUnpackService</a></li>
        <li><a href="unself_unpack/Normalize">Normalize</a></li>
        <li><a href="unself_unpack/UnpackService">UnpackService</a></li>
        <li><a href="unself_unpack/ZipImport">ZipImport</a></li>




      <li class="section-title"><a href="unself_unpack/unself_unpack#properties">Properties</a></li>
        <li><a href="unself_unpack/facebookSchema">facebookSchema</a></li>

      <li class="section-title"><a href="unself_unpack/unself_unpack#functions">Functions</a></li>
        <li><a href="unself_unpack/flatten">flatten</a></li>
        <li><a href="unself_unpack/includeAccumulator">includeAccumulator</a></li>
        <li><a href="unself_unpack/listAccumulator">listAccumulator</a></li>
        <li><a href="unself_unpack/mapAccumulator">mapAccumulator</a></li>

      <li class="section-title"><a href="unself_unpack/unself_unpack#enums">Enums</a></li>
        <li><a href="unself_unpack/Position">Position</a></li>

      <li class="section-title"><a href="unself_unpack/unself_unpack#typedefs">Typedefs</a></li>
        <li><a href="unself_unpack/Accumulator">Accumulator</a></li>

</ol>

  </div><!--/sidebar-offcanvas-right-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
