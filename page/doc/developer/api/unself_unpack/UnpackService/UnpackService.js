import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-class">UnpackService</span> class 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    
<section class="desc markdown">
  <p><a href="../unself_unpack/UnpackService">UnpackService</a> is a service that unpacks data from a file.</p>
</section>


    <section>
      <dl class="dl-horizontal">
        

        
  <dt>Implemented types</dt>
  <dd>
    <ul class="comma-separated clazz-relationships">
        <li><a href="../unself_unpack/IUnpackService">IUnpackService</a></li>
    </ul>
  </dd>
        



        


      </dl>
    </section>

    
  <section class="summary offset-anchor" id="constructors">
    <h2>Constructors</h2>

    <dl class="constructor-summary-list">
        <dt id="UnpackService" class="callable">
          <span class="name"><a href="../unself_unpack/UnpackService/UnpackService.constructor">UnpackService</a></span><span class="signature">(<span class="parameter" id="-param-localDb">{<span>required</span> <span class="type-annotation">LocalDatabase</span> <span class="parameter-name">localDb</span>}</span>)</span>
        </dt>
        <dd>
          <a href="../unself_unpack/UnpackService">UnpackService</a> is a service that unpacks data from a file.
        </dd>
    </dl>
  </section>

    <section class="summary offset-anchor" id="instance-properties">
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

        <dt id="unpacked" class="property">
  <span class="name"><a href="../unself_unpack/UnpackService/unpacked">unpacked</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">read-only</span></div>

</dd>

      </dl>
    </section>

    
  <section class="summary offset-anchor" id="instance-methods">
    <h2>Methods</h2>
    <dl class="callables">
        <dt id="load" class="callable">
  <span class="name"><a href="../unself_unpack/UnpackService/load">load</a></span><span class="signature">(<wbr><span class="parameter" id="load-param-app"><span class="type-annotation">App</span> <span class="parameter-name">app</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/FutureOr-class.html">FutureOr</a><span class="signature">&lt;<wbr><span class="type-parameter">ArchiveFormat</span>&gt;</span></span>
  </span>
  

</dt>
<dd>
  <a href="../unself_unpack/UnpackService/load">load</a> returns the <code>Mapping</code> with file format requirements for the
given app.
  <div class="features"><span class="feature">override</span></div>

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

        <dt id="open" class="callable">
  <span class="name"><a href="../unself_unpack/UnpackService/open">open</a></span><span class="signature">(<wbr><span class="parameter" id="open-param-file"><span class="type-annotation"><a href="https://pub.dev/documentation/cross_file/0.3.3+4/cross_file/XFile-class.html">XFile</a></span> <span class="parameter-name">file</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/FutureOr-class.html">FutureOr</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter">Mapping</span>&gt;</span></span>&gt;</span></span>
  </span>
  

</dt>
<dd>
  <a href="../unself_unpack/UnpackService/open">open</a> returns the supported list of <code>Mapping</code> for the
given <a href="https://pub.dev/documentation/cross_file/0.3.3+4/cross_file/XFile-class.html">XFile</a> file.
  <div class="features"><span class="feature">override</span></div>

</dd>

        <dt id="start" class="callable">
  <span class="name"><a href="../unself_unpack/UnpackService/start">start</a></span><span class="signature">(<wbr><span class="parameter" id="start-param-mappings"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter">Mapping</span>&gt;</span></span> <span class="parameter-name">mappings</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Stream-class.html">Stream</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span>&gt;</span></span>
  </span>
  

</dt>
<dd>
  <a href="../unself_unpack/UnpackService/start">start</a> let the service begins unpacking with the given <code>Mapping</code>
, and returns a progress stream.
  <div class="features"><span class="feature">override</span></div>

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
    
  <section class="summary offset-anchor" id="static-properties">
    <h2>Static Properties</h2>

    <dl class="properties">
        <dt id="supportedApps" class="property">
  <span class="name"><a href="../unself_unpack/UnpackService/supportedApps">supportedApps</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter">App</span>&gt;</span></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

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
  <li><a href="../index">unself_unpack</a></li>
  <li><a href="../unself_unpack/unself_unpack">unself_unpack</a></li>
  <li class="self-crumb">UnpackService class</li>
</ol>


    <h5>unself_unpack library</h5>
    <ol>
      <li class="section-title"><a href="../unself_unpack/unself_unpack#classes">Classes</a></li>
        <li><a href="../unself_unpack/ArchiveExport">ArchiveExport</a></li>
        <li><a href="../unself_unpack/Export">Export</a></li>
        <li><a href="../unself_unpack/Import">Import</a></li>
        <li><a href="../unself_unpack/IUnpackService">IUnpackService</a></li>
        <li><a href="../unself_unpack/UnpackService">UnpackService</a></li>
        <li><a href="../unself_unpack/ZipImport">ZipImport</a></li>




      <li class="section-title"><a href="../unself_unpack/unself_unpack#properties">Properties</a></li>
        <li><a href="../unself_unpack/facebookMapping">facebookMapping</a></li>




</ol>

  </div>

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
    <ol>

        <li class="section-title"><a href="../unself_unpack/UnpackService#constructors">Constructors</a></li>
          <li><a href="../unself_unpack/UnpackService/UnpackService.constructor">UnpackService</a></li>


        <li class="section-title">
          <a href="../unself_unpack/UnpackService#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../unself_unpack/UnpackService/unpacked">unpacked</a></li>

        <li class="section-title"><a href="../unself_unpack/UnpackService#instance-methods">Methods</a></li>
          <li><a href="../unself_unpack/UnpackService/load">load</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../unself_unpack/UnpackService/open">open</a></li>
          <li><a href="../unself_unpack/UnpackService/start">start</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../unself_unpack/UnpackService#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>


        <li class="section-title"><a href="../unself_unpack/UnpackService#static-properties">Static properties</a></li>
          <li><a href="../unself_unpack/UnpackService/supportedApps">supportedApps</a></li>


</ol>

  </div><!--/.sidebar-offcanvas-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
