import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-constructor">ArchiveCollector.fromZipBytes</span> constructor 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
      <span class="name ">ArchiveCollector.fromZipBytes</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="fromZipBytes-param-bytes">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span>&gt;</span></span> <span class="parameter-name">bytes</span>}</span></li>
</ol>)
    </section>

    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">factory ArchiveCollector.fromZipBytes({
  required List&lt;int&gt; bytes,
}) =&gt;
    ArchiveCollector(
      archive: archive.ZipDecoder().decodeBytes(bytes),
    );</code></pre>
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
  <li><a href="../../unself_unpack/ArchiveCollector">ArchiveCollector</a></li>
  <li class="self-crumb">ArchiveCollector.fromZipBytes factory constructor</li>
</ol>


    <h5>ArchiveCollector class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_unpack/ArchiveCollector#constructors">Constructors</a></li>
          <li><a href="../../unself_unpack/ArchiveCollector/ArchiveCollector.constructor">ArchiveCollector</a></li>
          <li><a href="../../unself_unpack/ArchiveCollector/ArchiveCollector.fromZipBytes">fromZipBytes</a></li>


        <li class="section-title inherited">
          <a href="../../unself_unpack/ArchiveCollector#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title"><a href="../../unself_unpack/ArchiveCollector#instance-methods">Methods</a></li>
          <li><a href="../../unself_unpack/ArchiveCollector/collect">collect</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../../unself_unpack/ArchiveCollector/retrieve">retrieve</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../unself_unpack/ArchiveCollector#operators">Operators</a></li>
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
