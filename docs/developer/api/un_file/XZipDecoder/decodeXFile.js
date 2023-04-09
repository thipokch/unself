import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">decodeXFile</span> static method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      

<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-async/FutureOr-class.html">FutureOr</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/archive/3.3.6/archive_io/Archive-class.html">Archive</a></span>&gt;</span></span>
<span class="name ">decodeXFile</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="decodeXFile-param-xFile"><span class="type-annotation"><a href="https://pub.dev/documentation/cross_file/0.3.3+4/cross_file/XFile-class.html">XFile</a></span> <span class="parameter-name">xFile</span>, </span></li>
<li><span class="parameter" id="decodeXFile-param-verify">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">verify</span> = <span class="default-value">false</span>, </span></li>
<li><span class="parameter" id="decodeXFile-param-password"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">password</span>}</span></li>
</ol>)

      

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">static FutureOr&lt;Archive&gt; decodeXFile(
  XFile xFile, {
  bool verify = false,
  String? password,
}) =&gt;
    throw StateError('Stub implementation');</code></pre>
</section>


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../../index">un_file</a></li>
  <li><a href="../../un_file/un_file">un_file</a></li>
  <li><a href="../../un_file/XZipDecoder">XZipDecoder</a></li>
  <li class="self-crumb">decodeXFile static method</li>
</ol>


    <h5>XZipDecoder class</h5>
    <ol>

        <li class="section-title"><a href="../../un_file/XZipDecoder#constructors">Constructors</a></li>
          <li><a href="../../un_file/XZipDecoder/XZipDecoder.constructor">XZipDecoder</a></li>


        <li class="section-title inherited">
          <a href="../../un_file/XZipDecoder#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title inherited"><a href="../../un_file/XZipDecoder#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../un_file/XZipDecoder#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>



        <li class="section-title"><a href="../../un_file/XZipDecoder#static-methods">Static methods</a></li>
          <li><a href="../../un_file/XZipDecoder/decodeXFile">decodeXFile</a></li>

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
