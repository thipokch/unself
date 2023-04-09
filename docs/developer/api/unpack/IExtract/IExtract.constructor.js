import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-constructor">IExtract&lt;<wbr><span class="type-parameter">O</span>&gt;</span> constructor 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      const
      <span class="name ">IExtract&lt;<wbr><span class="type-parameter">O</span>&gt;</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-spec"><span class="type-annotation">ExtractSpec</span> <span class="parameter-name">spec</span></span></li>
</ol>)
    </section>

    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">const IExtract(this.spec);</code></pre>
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
  <li><a href="../../unpack/IExtract">IExtract<span class="signature">&lt;<wbr><span class="type-parameter">O</span>&gt;</span></a></li>
  <li class="self-crumb">IExtract const constructor</li>
</ol>


    <h5>IExtract class</h5>
    <ol>

        <li class="section-title"><a href="../../unpack/IExtract#constructors">Constructors</a></li>
          <li><a href="../../unpack/IExtract/IExtract.constructor">IExtract</a></li>


        <li class="section-title">
          <a href="../../unpack/IExtract#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../unpack/IExtract/spec">spec</a></li>

        <li class="section-title"><a href="../../unpack/IExtract#instance-methods">Methods</a></li>
          <li><a href="../../unpack/IExtract/extract">extract</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../unpack/IExtract#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>



        <li class="section-title"><a href="../../unpack/IExtract#static-methods">Static methods</a></li>
          <li><a href="../../unpack/IExtract/extractor">extractor</a></li>

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
