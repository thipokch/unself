import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">dispose</span> abstract method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      

<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-async/FutureOr-class.html">FutureOr</a><span class="signature">&lt;<wbr><span class="type-parameter">void</span>&gt;</span></span>
<span class="name ">dispose</span>(<wbr>)

      

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">FutureOr&lt;void&gt; dispose();</code></pre>
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
  <li><a href="../../unpack/IUnpack">IUnpack</a></li>
  <li class="self-crumb">dispose abstract method</li>
</ol>


    <h5>IUnpack class</h5>
    <ol>

        <li class="section-title"><a href="../../unpack/IUnpack#constructors">Constructors</a></li>
          <li><a href="../../unpack/IUnpack/IUnpack.constructor">IUnpack</a></li>


        <li class="section-title">
          <a href="../../unpack/IUnpack#instance-properties">Properties</a>
        </li>
          <li><a href="../../unpack/IUnpack/currentState">currentState</a></li>
          <li><a href="../../unpack/IUnpack/currentStep">currentStep</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li><a href="../../unpack/IUnpack/id">id</a></li>
          <li><a href="../../unpack/IUnpack/progress">progress</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../unpack/IUnpack/spec">spec</a></li>
          <li><a href="../../unpack/IUnpack/states">states</a></li>

        <li class="section-title"><a href="../../unpack/IUnpack#instance-methods">Methods</a></li>
          <li><a href="../../unpack/IUnpack/configure">configure</a></li>
          <li><a href="../../unpack/IUnpack/dispose">dispose</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../../unpack/IUnpack/process">process</a></li>
          <li><a href="../../unpack/IUnpack/retrieve">retrieve</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../unpack/IUnpack#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>




</ol>

  </div><!--/.sidebar-offcanvas-->

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
  </div><!--/.sidebar-offcanvas-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
