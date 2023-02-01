import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-property">warn</span> constant 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

        <section class="multi-line-signature">
          
          void Function<span class="signature">()</span>
          const <span class="name ">warn</span>
          

        </section>
        

        
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">static const warn = Gaimon.warning;</code></pre>
</section>


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../../index">unself_style</a></li>
  <li><a href="../../unself_style/unself_style">unself_style</a></li>
  <li><a href="../../unself_style/UnHaptics">UnHaptics</a></li>
  <li class="self-crumb">warn constant</li>
</ol>


    <h5>UnHaptics class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_style/UnHaptics#constructors">Constructors</a></li>
          <li><a href="../../unself_style/UnHaptics/UnHaptics.constructor">UnHaptics</a></li>


        <li class="section-title inherited">
          <a href="../../unself_style/UnHaptics#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title inherited"><a href="../../unself_style/UnHaptics#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../unself_style/UnHaptics#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>




        <li class="section-title"><a href="../../unself_style/UnHaptics#constants">Constants</a></li>
          <li><a href="../../unself_style/UnHaptics/error-constant">error</a></li>
          <li><a href="../../unself_style/UnHaptics/heavy-constant">heavy</a></li>
          <li><a href="../../unself_style/UnHaptics/light-constant">light</a></li>
          <li><a href="../../unself_style/UnHaptics/medium-constant">medium</a></li>
          <li><a href="../../unself_style/UnHaptics/rigid-constant">rigid</a></li>
          <li><a href="../../unself_style/UnHaptics/select-constant">select</a></li>
          <li><a href="../../unself_style/UnHaptics/soft-constant">soft</a></li>
          <li><a href="../../unself_style/UnHaptics/success-constant">success</a></li>
          <li><a href="../../unself_style/UnHaptics/warn-constant">warn</a></li>
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
