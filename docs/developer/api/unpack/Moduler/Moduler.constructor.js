import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-constructor">Moduler</span> constructor 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
      <span class="name ">Moduler</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-spec"><span class="type-annotation">ModuleSpec</span> <span class="parameter-name">spec</span>, </span></li>
<li><span class="parameter" id="-param-fileSpec"><span class="type-annotation">FileSpec</span> <span class="parameter-name">fileSpec</span>, </span></li>
<li><span class="parameter" id="-param-state">{<span class="type-annotation"><a href="../../unpack/ModuleState">ModuleState</a></span> <span class="parameter-name">state</span> = <span class="default-value">const ModuleInitial()</span>}</span></li>
</ol>)
    </section>

    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">Moduler(
  super.spec,
  super.fileSpec, {
  ModuleState state = const ModuleInitial(),
}) {
  _states = BehaviorSubject&lt;ModuleState&gt;.seeded(state);
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
  <li><a href="../../unpack/Moduler">Moduler</a></li>
  <li class="self-crumb">Moduler constructor</li>
</ol>


    <h5>Moduler class</h5>
    <ol>

        <li class="section-title"><a href="../../unpack/Moduler#constructors">Constructors</a></li>
          <li><a href="../../unpack/Moduler/Moduler.constructor">Moduler</a></li>


        <li class="section-title">
          <a href="../../unpack/Moduler#instance-properties">Properties</a>
        </li>
          <li><a href="../../unpack/Moduler/currentState">currentState</a></li>
          <li><a href="../../unpack/Moduler/currentStep">currentStep</a></li>
          <li class="inherited"><a href="../../unpack/Moduler/fileSpec">fileSpec</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li class="inherited"><a href="../../unpack/Moduler/spec">spec</a></li>
          <li><a href="../../unpack/Moduler/states">states</a></li>

        <li class="section-title"><a href="../../unpack/Moduler#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../../unpack/Moduler/process">process</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../unpack/Moduler#operators">Operators</a></li>
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
