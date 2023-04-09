import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">resetScroll</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      

<span class="returntype">void</span>
<span class="name ">resetScroll</span>(<wbr>)

      

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">void resetScroll() {
  jumpTo(0.0);
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
  <li><a href="../../index">un_ui</a></li>
  <li><a href="../../un_ui/un_ui">un_ui</a></li>
  <li><a href="../../un_ui/PairingScrollControllerGroup">PairingScrollControllerGroup</a></li>
  <li class="self-crumb">resetScroll method</li>
</ol>


    <h5>PairingScrollControllerGroup class</h5>
    <ol>

        <li class="section-title"><a href="../../un_ui/PairingScrollControllerGroup#constructors">Constructors</a></li>
          <li><a href="../../un_ui/PairingScrollControllerGroup/PairingScrollControllerGroup.constructor">PairingScrollControllerGroup</a></li>


        <li class="section-title">
          <a href="../../un_ui/PairingScrollControllerGroup#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li><a href="../../un_ui/PairingScrollControllerGroup/offset">offset</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title"><a href="../../un_ui/PairingScrollControllerGroup#instance-methods">Methods</a></li>
          <li><a href="../../un_ui/PairingScrollControllerGroup/addOffsetChangedListener">addOffsetChangedListener</a></li>
          <li><a href="../../un_ui/PairingScrollControllerGroup/animateTo">animateTo</a></li>
          <li><a href="../../un_ui/PairingScrollControllerGroup/jumpTo">jumpTo</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../../un_ui/PairingScrollControllerGroup/push">push</a></li>
          <li><a href="../../un_ui/PairingScrollControllerGroup/removeOffsetChangedListener">removeOffsetChangedListener</a></li>
          <li><a href="../../un_ui/PairingScrollControllerGroup/resetScroll">resetScroll</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../un_ui/PairingScrollControllerGroup#operators">Operators</a></li>
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
