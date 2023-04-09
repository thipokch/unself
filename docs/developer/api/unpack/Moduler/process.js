import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">process</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
  <div>
    <ol class="annotation-list">
        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>
    </ol>
  </div>

<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-async/FutureOr-class.html">FutureOr</a><span class="signature">&lt;<wbr><span class="type-parameter">void</span>&gt;</span></span>
<span class="name ">process</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="process-param-file"><span class="type-annotation"><a href="https://pub.dev/documentation/cross_file/0.3.3+4/cross_file/XFile-class.html">XFile</a></span> <span class="parameter-name">file</span></span></li>
</ol>)

      

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@override
FutureOr&lt;void&gt; process(XFile file) async {
  final fileBytes = await IFile.filer(spec, fileSpec).prepare(file);

  _states.add(const ModuleState.extract());

  final extracted = &lt;String, dynamic&gt;{};

  for (final key in fileBytes.keys) {
    final content = fileBytes[key];
    if (content != null) extracted[key] = await _extract(content);
  }

  _states.add(const ModuleState.transform());

  final transformed = &lt;String, dynamic&gt;{};

  for (final extract in extracted.entries) {
    transformed[extract.key] = await _transform(extract.value);
  }

  _states.add(const ModuleState.load());

  for (final transform in transformed.entries) {
    await _load(transform.value);
  }

  _states.add(const ModuleState.complete());
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
  <li class="self-crumb">process method</li>
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
