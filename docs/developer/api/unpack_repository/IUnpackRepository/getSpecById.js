import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">getSpecById</span> abstract method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      

<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter">UnpackSpec</span>&gt;</span></span>
<span class="name ">getSpecById</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="getSpecById-param-id"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span></span></li>
</ol>)

      

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">Future&lt;UnpackSpec&gt; getSpecById(String id);</code></pre>
</section>


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../../index">unpack_repository</a></li>
  <li><a href="../../unpack_repository/unpack_repository">unpack_repository</a></li>
  <li><a href="../../unpack_repository/IUnpackRepository">IUnpackRepository</a></li>
  <li class="self-crumb">getSpecById abstract method</li>
</ol>


    <h5>IUnpackRepository class</h5>
    <ol>

        <li class="section-title"><a href="../../unpack_repository/IUnpackRepository#constructors">Constructors</a></li>
          <li><a href="../../unpack_repository/IUnpackRepository/IUnpackRepository.constructor">IUnpackRepository</a></li>


        <li class="section-title">
          <a href="../../unpack_repository/IUnpackRepository#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li><a href="../../unpack_repository/IUnpackRepository/isSpecsEmpty">isSpecsEmpty</a></li>
          <li><a href="../../unpack_repository/IUnpackRepository/isStatesEmpty">isStatesEmpty</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title"><a href="../../unpack_repository/IUnpackRepository#instance-methods">Methods</a></li>
          <li><a href="../../unpack_repository/IUnpackRepository/getAllSpecs">getAllSpecs</a></li>
          <li><a href="../../unpack_repository/IUnpackRepository/getAllStates">getAllStates</a></li>
          <li><a href="../../unpack_repository/IUnpackRepository/getSpecById">getSpecById</a></li>
          <li><a href="../../unpack_repository/IUnpackRepository/getStateById">getStateById</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../../unpack_repository/IUnpackRepository/putSpec">putSpec</a></li>
          <li><a href="../../unpack_repository/IUnpackRepository/putState">putState</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li><a href="../../unpack_repository/IUnpackRepository/watchAllSpecs">watchAllSpecs</a></li>
          <li><a href="../../unpack_repository/IUnpackRepository/watchAllStates">watchAllStates</a></li>

        <li class="section-title inherited"><a href="../../unpack_repository/IUnpackRepository#operators">Operators</a></li>
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
