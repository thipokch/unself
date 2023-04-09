import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">unpack</span> abstract method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      

<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-async/FutureOr-class.html">FutureOr</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span></span>&gt;</span></span>
<span class="name ">unpack</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="unpack-param-options"><span class="type-annotation">O?</span> <span class="parameter-name">options</span></span></li>
</ol>)

      

    </section>
    
<section class="desc markdown">
  <p><a href="../../unself_unpack/Import/unpack">unpack</a> unpacks opened object the given <code>options</code> and
returns a <a href="https://api.flutter.dev/flutter/dart-async/FutureOr-class.html">FutureOr</a> of <code>Map&lt;String, Object?&gt;</code>.</p>
</section>


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">FutureOr&lt;Map&lt;String, Object?&gt;&gt; unpack(O? options);</code></pre>
</section>


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../../index">unself_unpack</a></li>
  <li><a href="../../unself_unpack/unself_unpack">unself_unpack</a></li>
  <li><a href="../../unself_unpack/Import">Import<span class="signature">&lt;<wbr><span class="type-parameter">T</span>, <span class="type-parameter">O</span>&gt;</span></a></li>
  <li class="self-crumb">unpack abstract method</li>
</ol>


    <h5>Import class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_unpack/Import#constructors">Constructors</a></li>
          <li><a href="../../unself_unpack/Import/Import.constructor">Import</a></li>


        <li class="section-title inherited">
          <a href="../../unself_unpack/Import#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title"><a href="../../unself_unpack/Import#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../../unself_unpack/Import/open">open</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li><a href="../../unself_unpack/Import/unpack">unpack</a></li>

        <li class="section-title inherited"><a href="../../unself_unpack/Import#operators">Operators</a></li>
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
