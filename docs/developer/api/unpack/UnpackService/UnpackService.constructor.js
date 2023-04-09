import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-constructor">UnpackService</span> constructor 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
      <span class="name ">UnpackService</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-repository">{<span>required</span> <span class="type-annotation">UnpackRepository</span> <span class="parameter-name">repository</span>}</span></li>
</ol>)
    </section>

    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">UnpackService({
  required UnpackRepository repository,
}) : _repo = repository {
  _repo.watchAllStates().listen(_states.add);
}</code></pre>
</section>


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../../index">unpack</a></li>
  <li><a href="../../unpack/unpack">unpack</a></li>
  <li><a href="../../unpack/UnpackService">UnpackService</a></li>
  <li class="self-crumb">UnpackService constructor</li>
</ol>


    <h5>UnpackService class</h5>
    <ol>

        <li class="section-title"><a href="../../unpack/UnpackService#constructors">Constructors</a></li>
          <li><a href="../../unpack/UnpackService/UnpackService.constructor">UnpackService</a></li>


        <li class="section-title">
          <a href="../../unpack/UnpackService#instance-properties">Properties</a>
        </li>
          <li><a href="../../unpack/UnpackService/activeInstances">activeInstances</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../unpack/UnpackService/specs">specs</a></li>
          <li><a href="../../unpack/UnpackService/states">states</a></li>

        <li class="section-title"><a href="../../unpack/UnpackService#instance-methods">Methods</a></li>
          <li><a href="../../unpack/UnpackService/clear">clear</a></li>
          <li><a href="../../unpack/UnpackService/dispose">dispose</a></li>
          <li><a href="../../unpack/UnpackService/initialize">initialize</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li><a href="../../unpack/UnpackService/unpacker">unpacker</a></li>

        <li class="section-title inherited"><a href="../../unpack/UnpackService#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>




</ol>

  </div><!--/.sidebar-offcanvas-left-->

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
  </div><!--/.sidebar-offcanvas-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
